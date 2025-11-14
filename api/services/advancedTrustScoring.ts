import { TrustScore, TrustFactors, Agent, TrustAssessment } from '../../shared/types.js';
import { TRUST_DECAY_RATE, TRUST_WEIGHTS } from '../../shared/constants.js';
import { logger } from '../utils/logger.js';

export interface MLTrustFactors {
  historicalReliability: number;
  peerConsensus: number;
  behavioralConsistency: number;
  reputationScore: number;
  anomalyDetection: number;
  networkEffects: number;
}

export class AdvancedTrustScoringEngine {
  private historicalData: Map<string, TrustAssessment[]> = new Map();
  private peerAssessments: Map<string, Map<string, number>> = new Map();

  /**
   * Calculate advanced trust score using ML-enhanced algorithms
   */
  async calculateAdvancedTrustScore(
    agent: Agent,
    baseAssessment: TrustFactors,
    context: {
      timeframe: string;
      peerAgents?: Agent[];
      historicalData?: TrustAssessment[];
      networkMetrics?: any;
    }
  ): Promise<TrustScore> {
    try {
      // Calculate base score with traditional factors
      const baseScore = this.calculateBaseScore(baseAssessment);
      
      // Calculate ML-enhanced factors
      const mlFactors = await this.calculateMLFactors(agent, context);
      
      // Apply temporal decay
      const decayedScore = this.applyTemporalDecay(baseScore, agent.lastAssessment);
      
      // Apply ML enhancements
      const enhancedScore = this.applyMLEnhancements(decayedScore, mlFactors);
      
      // Apply confidence scoring
      const confidence = this.calculateConfidence(baseAssessment, mlFactors, context);
      
      // Generate risk assessment
      const riskLevel = this.assessRisk(enhancedScore, confidence, mlFactors);

      return {
        score: Math.max(0, Math.min(1, enhancedScore)),
        confidence,
        factors: baseAssessment,
        metadata: {
          calculationMethod: 'ml_enhanced',
          temporalDecay: TRUST_DECAY_RATE,
          mlFactors,
          riskLevel,
          lastUpdated: new Date(),
        },
      };
    } catch (error) {
      logger.error('Advanced trust scoring failed', { error, agentId: agent.id });
      throw error;
    }
  }

  private calculateBaseScore(factors: TrustFactors): number {
    const weights = TRUST_WEIGHTS;
    
    return (
      factors.technical * weights.technical +
      factors.ethical * weights.ethical +
      factors.operational * weights.operational +
      factors.transparency * weights.transparency +
      factors.security * weights.security +
      factors.compliance * weights.compliance
    );
  }

  private async calculateMLFactors(agent: Agent, context: any): Promise<MLTrustFactors> {
    const historicalData = context.historicalData || this.getHistoricalData(agent.id);
    const peerAgents = context.peerAgents || [];

    return {
      historicalReliability: this.calculateHistoricalReliability(historicalData),
      peerConsensus: await this.calculatePeerConsensus(agent, peerAgents),
      behavioralConsistency: this.calculateBehavioralConsistency(historicalData),
      reputationScore: await this.calculateReputationScore(agent),
      anomalyDetection: this.detectAnomalies(historicalData),
      networkEffects: this.calculateNetworkEffects(agent, peerAgents),
    };
  }

  private calculateHistoricalReliability(historicalData: TrustAssessment[]): number {
    if (!historicalData || historicalData.length === 0) return 0.5;

    const recentAssessments = historicalData.slice(-10); // Last 10 assessments
    const reliabilityScores = recentAssessments.map(assessment => assessment.trustScore.score);
    
    // Calculate trend and stability
    const average = reliabilityScores.reduce((a, b) => a + b, 0) / reliabilityScores.length;
    const variance = this.calculateVariance(reliabilityScores);
    const stability = Math.max(0, 1 - variance); // Lower variance = higher stability
    
    // Apply time decay to older assessments
    const weightedAverage = recentAssessments.reduce((sum, assessment, index) => {
      const weight = (index + 1) / recentAssessments.length; // More recent = higher weight
      return sum + (assessment.trustScore.score * weight);
    }, 0) / recentAssessments.length;

    return (weightedAverage + stability) / 2;
  }

  private async calculatePeerConsensus(agent: Agent, peerAgents: Agent[]): Promise<number> {
    if (!peerAgents || peerAgents.length === 0) return 0.5;

    const peerAssessments = this.peerAssessments.get(agent.id);
    if (!peerAssessments || peerAssessments.size === 0) return 0.5;

    const scores = Array.from(peerAssessments.values());
    const averagePeerScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    
    // Calculate consensus strength (how many peers agree)
    const consensusThreshold = 0.1; // 10% deviation threshold
    const agreeingPeers = scores.filter(score => 
      Math.abs(score - averagePeerScore) <= consensusThreshold
    ).length;
    
    const consensusStrength = agreeingPeers / scores.length;
    
    return (averagePeerScore + consensusStrength) / 2;
  }

  private calculateBehavioralConsistency(historicalData: TrustAssessment[]): number {
    if (!historicalData || historicalData.length < 2) return 0.5;

    const factorConsistency: Record<keyof TrustFactors, number[]> = {
      technical: [],
      ethical: [],
      operational: [],
      transparency: [],
      security: [],
      compliance: [],
    };

    historicalData.forEach(assessment => {
      Object.entries(assessment.trustScore.factors).forEach(([factor, value]) => {
        factorConsistency[factor as keyof TrustFactors].push(value);
      });
    });

    const consistencies = Object.entries(factorConsistency).map(([factor, values]) => {
      if (values.length < 2) return 0.5;
      return 1 - this.calculateVariance(values); // Higher consistency = lower variance
    });

    return consistencies.reduce((a, b) => a + b, 0) / consistencies.length;
  }

  private async calculateReputationScore(agent: Agent): Promise<number> {
    // This would integrate with external reputation systems
n    // For now, return a baseline score based on agent metadata
    const baseline = 0.5;
    const ageBonus = Math.min(0.2, (Date.now() - new Date(agent.createdAt).getTime()) / (365 * 24 * 60 * 60 * 1000) * 0.2);
    const verificationBonus = agent.verified ? 0.2 : 0;
    
    return Math.min(1, baseline + ageBonus + verificationBonus);
  }

  private detectAnomalies(historicalData: TrustAssessment[]): number {
    if (!historicalData || historicalData.length < 5) return 0.5;

    const scores = historicalData.map(h => h.trustScore.score);
    const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
    const standardDeviation = Math.sqrt(scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length);

    // Check for recent anomalies
    const recentScores = scores.slice(-3);
    const anomalies = recentScores.filter(score => 
      Math.abs(score - mean) > (2 * standardDeviation)
    ).length;

    return 1 - (anomalies / recentScores.length); // Lower anomaly count = higher score
  }

  private calculateNetworkEffects(agent: Agent, peerAgents: Agent[]): number {
    if (!peerAgents || peerAgents.length === 0) return 0.5;

    // Calculate network centrality and influence
    const connections = peerAgents.filter(peer => 
      this.peerAssessments.has(peer.id) && this.peerAssessments.get(peer.id)!.has(agent.id)
    ).length;

    const centrality = connections / peerAgents.length;
    
    // Calculate influence based on peer trust scores
    const influence = peerAgents.reduce((sum, peer) => {
      const peerAssessment = this.peerAssessments.get(peer.id)?.get(agent.id);
      return sum + (peerAssessment || 0.5);
    }, 0) / peerAgents.length;

    return (centrality + influence) / 2;
  }

  private applyTemporalDecay(score: number, lastAssessment: Date): number {
    const timeSinceAssessment = Date.now() - lastAssessment.getTime();
    const decayFactor = Math.exp(-TRUST_DECAY_RATE * timeSinceAssessment / (24 * 60 * 60 * 1000));
    
    // Apply decay only if score hasn't been updated recently
    return score * decayFactor;
  }

  private applyMLEnhancements(baseScore: number, mlFactors: MLTrustFactors): number {
    const mlWeights = {
      historicalReliability: 0.25,
      peerConsensus: 0.20,
      behavioralConsistency: 0.15,
      reputationScore: 0.15,
      anomalyDetection: 0.15,
      networkEffects: 0.10,
    };

    const mlScore = (
      mlFactors.historicalReliability * mlWeights.historicalReliability +
      mlFactors.peerConsensus * mlWeights.peerConsensus +
      mlFactors.behavioralConsistency * mlWeights.behavioralConsistency +
      mlFactors.reputationScore * mlWeights.reputationScore +
      mlFactors.anomalyDetection * mlWeights.anomalyDetection +
      mlFactors.networkEffects * mlWeights.networkEffects
    );

    // Combine base score with ML enhancements
    return (baseScore * 0.6) + (mlScore * 0.4);
  }

  private calculateConfidence(
    baseFactors: TrustFactors,
    mlFactors: MLTrustFactors,
    context: any
  ): number {
    let confidence = 0.5; // Base confidence

    // Factor in data quality
    const historicalDataQuality = context.historicalData?.length > 10 ? 0.9 : 0.5;
    const peerDataQuality = context.peerAgents?.length > 3 ? 0.8 : 0.5;
    
    // Factor in consistency of assessments
    const factorConsistency = this.calculateFactorConsistency(baseFactors);
    const mlConsistency = this.calculateMLConsistency(mlFactors);

    confidence = (historicalDataQuality + peerDataQuality + factorConsistency + mlConsistency) / 4;

    return Math.min(1, Math.max(0, confidence));
  }

  private assessRisk(score: number, confidence: number, mlFactors: MLTrustFactors): 'low' | 'medium' | 'high' {
    const riskIndicators = [
      mlFactors.anomalyDetection < 0.3,
      mlFactors.behavioralConsistency < 0.4,
      confidence < 0.5,
      score < 0.5,
    ];

    const riskCount = riskIndicators.filter(Boolean).length;

    if (riskCount >= 3) return 'high';
    if (riskCount >= 1) return 'medium';
    return 'low';
  }

  private calculateVariance(values: number[]): number {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    return values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
  }

  private getHistoricalData(agentId: string): TrustAssessment[] {
    return this.historicalData.get(agentId) || [];
  }

  private calculateFactorConsistency(factors: TrustFactors): number {
    const values = Object.values(factors);
    const variance = this.calculateVariance(values);
    return Math.max(0, 1 - variance); // Lower variance = higher consistency
  }

  private calculateMLConsistency(mlFactors: MLTrustFactors): number {
    const values = Object.values(mlFactors);
    const variance = this.calculateVariance(values);
    return Math.max(0, 1 - variance);
  }

  /**
   * Record peer assessment for consensus calculation
   */
  recordPeerAssessment(peerId: string, agentId: string, score: number): void {
    if (!this.peerAssessments.has(agentId)) {
      this.peerAssessments.set(agentId, new Map());
    }
    this.peerAssessments.get(agentId)!.set(peerId, score);
  }

  /**
   * Record assessment for historical analysis
   */
  recordAssessment(agentId: string, assessment: TrustAssessment): void {
    if (!this.historicalData.has(agentId)) {
      this.historicalData.set(agentId, []);
    }
    
    const assessments = this.historicalData.get(agentId)!;
    assessments.push(assessment);
    
    // Keep only last 100 assessments to prevent memory issues
    if (assessments.length > 100) {
      assessments.shift();
    }
  }
}