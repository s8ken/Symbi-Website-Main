import { 
  Agent, 
  TrustScore, 
  TrustDeclaration, 
  Evidence,
  SYMBIError, 
  ErrorCodes 
} from '../../shared/types.js';
import { 
  TRUST_PILLARS, 
  TRUST_WEIGHTS, 
  TRUST_THRESHOLDS, 
  TEMPORAL_DECAY 
} from '../../shared/constants.js';

/**
 * Advanced trust scoring engine implementing the six-pillar SYMBI model
 */
export class TrustScoringEngine {
  private agents: Map<string, Agent> = new Map();
  private declarations: Map<string, TrustDeclaration> = new Map();

  /**
   * Calculate comprehensive trust score for an agent
   */
  async calculateTrustScore(agentId: string): Promise<TrustScore> {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new SYMBIError('Agent not found', ErrorCodes.UNAUTHORIZED, 404);
    }

    const declarations = Array.from(this.declarations.values())
      .filter(d => d.agentId === agentId && d.verificationStatus === 'verified');

    const pillarScores = await this.calculatePillarScores(agent, declarations);
    const overallScore = this.calculateOverallScore(pillarScores);
    const temporalScore = this.applyTemporalDecay(overallScore, declarations);
    const confidence = this.calculateConfidence(declarations);

    return {
      overall: temporalScore,
      confidence,
      breakdown: pillarScores,
      temporalScore,
      lastUpdated: new Date()
    };
  }

  /**
   * Calculate individual pillar scores
   */
  private async calculatePillarScores(
    agent: Agent, 
    declarations: TrustDeclaration[]
  ): Promise<TrustScore['breakdown']> {
    const recentDeclarations = declarations.filter(
      d => Date.now() - d.verifiedAt!.getTime() < 30 * 24 * 60 * 60 * 1000 // 30 days
    );

    return {
      technical: this.calculateTechnicalScore(agent, recentDeclarations),
      ethical: this.calculateEthicalScore(agent, recentDeclarations),
      operational: this.calculateOperationalScore(agent, recentDeclarations),
      transparency: this.calculateTransparencyScore(agent, recentDeclarations),
      security: this.calculateSecurityScore(agent, recentDeclarations),
      compliance: this.calculateComplianceScore(agent, recentDeclarations)
    };
  }

  /**
   * Calculate technical trust score
   */
  private calculateTechnicalScore(agent: Agent, declarations: TrustDeclaration[]): number {
    let score = 0.5; // Base score

    // Evaluate technical evidence
    const technicalEvidence = declarations.flatMap(d => d.evidence)
      .filter(e => e.type === 'metric' || e.type === 'document');

    if (technicalEvidence.length > 0) {
      const avgEvidenceScore = technicalEvidence.reduce((sum, e) => {
        const evidenceScore = this.evaluateEvidenceQuality(e);
        return sum + evidenceScore;
      }, 0) / technicalEvidence.length;

      score = Math.min(1.0, score + (avgEvidenceScore * 0.4));
    }

    // Check for critical technical failures
    const criticalFailures = declarations.filter(d => 
      d.score < 0.3 && d.evidence.some(e => e.type === 'metric')
    );

    if (criticalFailures.length > 0) {
      score *= Math.pow(0.9, criticalFailures.length);
    }

    return Math.max(0, score);
  }

  /**
   * Calculate ethical trust score
   */
  private calculateEthicalScore(agent: Agent, declarations: TrustDeclaration[]): number {
    let score = 0.5; // Base score

    // Evaluate bias detection results
    const biasEvidence = declarations.flatMap(d => d.evidence)
      .filter(e => e.metadata?.biasAnalysis);

    if (biasEvidence.length > 0) {
      const avgBiasScore = biasEvidence.reduce((sum, e) => {
        const biasScore = 1 - (e.metadata.biasAnalysis.severity || 0);
        return sum + biasScore;
      }, 0) / biasEvidence.length;

      score = Math.min(1.0, score + (avgBiasScore * 0.3));
    }

    // Check for ethical violations
    const ethicalViolations = declarations.filter(d => 
      d.score < 0.4 && d.assertion.includes('ethical')
    );

    if (ethicalViolations.length > 0) {
      score *= Math.pow(0.85, ethicalViolations.length);
    }

    return Math.max(0, score);
  }

  /**
   * Calculate operational trust score
   */
  private calculateOperationalScore(agent: Agent, declarations: TrustDeclaration[]): number {
    let score = 0.5; // Base score

    // Evaluate operational consistency
    if (declarations.length > 5) {
      const scoreVariance = this.calculateVariance(declarations.map(d => d.score));
      const consistencyScore = Math.max(0, 1 - (scoreVariance * 2));
      score = Math.min(1.0, score + (consistencyScore * 0.3));
    }

    // Evaluate response time and reliability
    const operationalMetrics = declarations.flatMap(d => d.evidence)
      .filter(e => e.metadata?.responseTime || e.metadata?.reliability);

    if (operationalMetrics.length > 0) {
      const avgMetricScore = operationalMetrics.reduce((sum, e) => {
        const responseTimeScore = e.metadata.responseTime ? 
          Math.max(0, 1 - (e.metadata.responseTime / 5000)) : 0.5;
        const reliabilityScore = e.metadata.reliability || 0.5;
        return sum + ((responseTimeScore + reliabilityScore) / 2);
      }, 0) / operationalMetrics.length;

      score = Math.min(1.0, score + (avgMetricScore * 0.2));
    }

    return Math.max(0, score);
  }

  /**
   * Calculate transparency trust score
   */
  private calculateTransparencyScore(agent: Agent, declarations: TrustDeclaration[]): number {
    let score = 0.3; // Lower base score for transparency

    // Evaluate evidence availability and quality
    const totalEvidence = declarations.flatMap(d => d.evidence).length;
    const avgEvidencePerDeclaration = totalEvidence / Math.max(1, declarations.length);

    if (avgEvidencePerDeclaration > 2) {
      score += Math.min(0.4, (avgEvidencePerDeclaration - 2) * 0.1);
    }

    // Evaluate documentation completeness
    const documentedDeclarations = declarations.filter(d => 
      d.evidence.some(e => e.type === 'document')
    );

    if (documentedDeclarations.length > 0) {
      const documentationRatio = documentedDeclarations.length / declarations.length;
      score += documentationRatio * 0.3;
    }

    return Math.min(1.0, score);
  }

  /**
   * Calculate security trust score
   */
  private calculateSecurityScore(agent: Agent, declarations: TrustDeclaration[]): number {
    let score = 0.5; // Base score

    // Evaluate cryptographic evidence
    const cryptoEvidence = declarations.flatMap(d => d.evidence)
      .filter(e => e.type === 'signature' || e.metadata?.cryptographic);

    if (cryptoEvidence.length > 0) {
      const cryptoScore = cryptoEvidence.length / Math.max(1, declarations.length);
      score += cryptoScore * 0.3;
    }

    // Check for security incidents
    const securityIncidents = declarations.filter(d => 
      d.score < 0.4 && d.assertion.includes('security')
    );

    if (securityIncidents.length > 0) {
      score *= Math.pow(0.8, securityIncidents.length);
    }

    return Math.max(0, Math.min(1.0, score));
  }

  /**
   * Calculate compliance trust score
   */
  private calculateComplianceScore(agent: Agent, declarations: TrustDeclaration[]): number {
    let score = 0.5; // Base score

    // Evaluate compliance certifications
    const complianceEvidence = declarations.flatMap(d => d.evidence)
      .filter(e => e.metadata?.compliance || e.type === 'attestation');

    if (complianceEvidence.length > 0) {
      const complianceScore = complianceEvidence.reduce((sum, e) => {
        return sum + (e.metadata.complianceScore || 0.5);
      }, 0) / complianceEvidence.length;

      score = Math.min(1.0, score + (complianceScore * 0.4));
    }

    // Check for compliance violations
    const violations = declarations.filter(d => 
      d.score < 0.3 && d.assertion.includes('compliance')
    );

    if (violations.length > 0) {
      score *= Math.pow(0.75, violations.length);
    }

    return Math.max(0, score);
  }

  /**
   * Calculate overall trust score from pillar scores
   */
  private calculateOverallScore(pillarScores: TrustScore['breakdown']): number {
    const weightedSum = Object.entries(pillarScores).reduce((sum, [pillar, score]) => {
      const weight = TRUST_WEIGHTS[pillar as keyof typeof TRUST_WEIGHTS];
      return sum + (score * weight);
    }, 0);

    return Math.min(1.0, Math.max(0, weightedSum));
  }

  /**
   * Apply temporal decay to trust score
   */
  private applyTemporalDecay(score: number, declarations: TrustDeclaration[]): number {
    if (declarations.length === 0) return score;

    const now = Date.now();
    const mostRecent = Math.max(...declarations.map(d => d.verifiedAt!.getTime()));
    const daysSinceUpdate = (now - mostRecent) / (1000 * 60 * 60 * 24);

    if (daysSinceUpdate <= 1) return score;

    const decayFactor = Math.pow(TEMPORAL_DECAY.DECAY_FACTOR, daysSinceUpdate / TEMPORAL_DECAY.HALF_LIFE_DAYS);
    return score * decayFactor;
  }

  /**
   * Calculate confidence interval
   */
  private calculateConfidence(declarations: TrustDeclaration[]): number {
    if (declarations.length === 0) return 0;

    const sampleSize = declarations.length;
    const scoreVariance = this.calculateVariance(declarations.map(d => d.score));
    
    // Base confidence on sample size
    const sampleConfidence = Math.min(0.95, 0.5 + (sampleSize * 0.05));
    
    // Adjust for variance
    const variancePenalty = Math.min(0.3, scoreVariance * 0.5);
    
    return Math.max(0.1, sampleConfidence - variancePenalty);
  }

  /**
   * Evaluate evidence quality
   */
  private evaluateEvidenceQuality(evidence: Evidence): number {
    let score = 0.5;

    // Type-based scoring
    switch (evidence.type) {
      case 'signature':
        score = 0.9;
        break;
      case 'attestation':
        score = 0.8;
        break;
      case 'document':
        score = 0.7;
        break;
      case 'metric':
        score = 0.6;
        break;
    }

    // Metadata quality adjustment
    if (evidence.metadata.verified === true) {
      score += 0.1;
    }

    if (evidence.metadata.source) {
      score += 0.05;
    }

    return Math.min(1.0, score);
  }

  /**
   * Calculate variance of an array of numbers
   */
  private calculateVariance(values: number[]): number {
    if (values.length === 0) return 0;

    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const squaredDiffs = values.map(val => Math.pow(val - mean, 2));
    return squaredDiffs.reduce((sum, diff) => sum + diff, 0) / values.length;
  }

  /**
   * Add trust declaration
   */
  async addDeclaration(declaration: TrustDeclaration): Promise<void> {
    this.declarations.set(declaration.id, declaration);
  }

  /**
   * Add or update agent
   */
  async addAgent(agent: Agent): Promise<void> {
    this.agents.set(agent.id, agent);
  }

  /**
   * Get agent by ID
   */
  getAgent(agentId: string): Agent | undefined {
    return this.agents.get(agentId);
  }

  /**
   * Get all agents
   */
  getAllAgents(): Agent[] {
    return Array.from(this.agents.values());
  }

  /**
   * Get trust score category
   */
  getTrustCategory(score: number): string {
    if (score >= TRUST_THRESHOLDS.EXCELLENT) return 'Excellent';
    if (score >= TRUST_THRESHOLDS.GOOD) return 'Good';
    if (score >= TRUST_THRESHOLDS.FAIR) return 'Fair';
    if (score >= TRUST_THRESHOLDS.POOR) return 'Poor';
    return 'Critical';
  }
}