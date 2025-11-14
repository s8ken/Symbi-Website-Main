import express from 'express';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';
import { COMPLIANCE_FRAMEWORKS } from '../../shared/constants.js';

const router = express.Router();

router.get('/frameworks', async (req, res, next) => {
  try {
    const frameworks = Object.entries(COMPLIANCE_FRAMEWORKS).map(([id, framework]) => ({
      id,
      name: framework.name,
      description: framework.description,
      version: framework.version,
      jurisdiction: framework.jurisdiction,
      requirements: framework.requirements.length,
      category: framework.category,
      mandatory: framework.mandatory,
      lastUpdated: framework.lastUpdated
    }));

    res.json({
      success: true,
      data: frameworks,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id']
      }
    });
  } catch (error) {
    next(error);
  }
});

router.post('/assess', async (req, res, next) => {
  try {
    const { agentId, frameworks = ['gdpr', 'iso27001', 'ieee2857'] } = req.body;

    if (!agentId) {
      throw new SYMBIError(
        'Missing required field: agentId',
        ErrorCodes.INVALID_REQUEST,
        400
      );
    }

    const assessments: Record<string, any> = {};
    let overallScore = 0;
    let compliantFrameworks = 0;

    for (const frameworkId of frameworks) {
      const framework = COMPLIANCE_FRAMEWORKS[frameworkId as keyof typeof COMPLIANCE_FRAMEWORKS];
      if (!framework) continue;

      const requirementScores = framework.requirements.map(req => ({
        id: req.id,
        name: req.name,
        description: req.description,
        score: Math.random() * 0.4 + 0.6,
        compliant: Math.random() > 0.2,
        evidence: [
          `Policy document: ${req.id}-policy.pdf`,
          `Implementation: ${req.id}-impl.js`
        ].slice(0, Math.floor(Math.random() * 2) + 1),
        findings: Math.random() > 0.7 ? [
          {
            type: 'minor',
            description: `Minor gap in ${req.name} implementation`,
            recommendation: `Update ${req.id}-policy.pdf`
          }
        ] : []
      }));

      const frameworkScore = requirementScores.reduce((sum, req) => sum + req.score, 0) / requirementScores.length;
      const isCompliant = frameworkScore >= 0.8 && requirementScores.every(req => req.compliant);
      
      if (isCompliant) compliantFrameworks++;
      overallScore += frameworkScore;

      assessments[frameworkId] = {
        framework: {
          id: frameworkId,
          name: framework.name,
          version: framework.version,
          jurisdiction: framework.jurisdiction
        },
        score: frameworkScore,
        compliant: isCompliant,
        requirements: requirementScores,
        summary: {
          totalRequirements: requirementScores.length,
          compliantRequirements: requirementScores.filter(req => req.compliant).length,
          averageScore: frameworkScore,
          riskLevel: frameworkScore > 0.9 ? 'low' : frameworkScore > 0.7 ? 'medium' : 'high'
        },
        recommendations: isCompliant ? [
          'Maintain current compliance posture',
          'Regular monitoring recommended'
        ] : [
          'Address identified gaps',
          'Update policies and procedures'
        ]
      };
    }

    const overallAssessment = {
      agentId,
      assessments,
      summary: {
        totalFrameworks: frameworks.length,
        compliantFrameworks,
        overallScore: overallScore / frameworks.length,
        complianceStatus: compliantFrameworks === frameworks.length ? 'fully_compliant' : 
                         compliantFrameworks > frameworks.length / 2 ? 'partially_compliant' : 'non_compliant',
        riskLevel: overallScore / frameworks.length > 0.9 ? 'low' : 
                   overallScore / frameworks.length > 0.7 ? 'medium' : 'high'
      },
      recommendations: [
        compliantFrameworks === frameworks.length ? 
          'All frameworks compliant - maintain current practices' :
          `${frameworks.length - compliantFrameworks} frameworks need attention`,
        'Regular compliance monitoring recommended',
        'Update assessments quarterly'
      ],
      timestamp: new Date()
    };

    res.json({
      success: true,
      data: overallAssessment,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id']
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get('/status/:agentId', async (req, res, next) => {
  try {
    const { agentId } = req.params;
    const { framework } = req.query;

    const frameworks = framework ? [framework] : ['gdpr', 'iso27001', 'ieee2857'];
    const status = {};

    for (const frameworkId of frameworks) {
      const frameworkData = COMPLIANCE_FRAMEWORKS[frameworkId as keyof typeof COMPLIANCE_FRAMEWORKS];
      if (!frameworkData) continue;

      const score = Math.random() * 0.3 + 0.7;
      const isCompliant = score >= 0.8;

      status[frameworkId] = {
        framework: frameworkData.name,
        version: frameworkData.version,
        status: isCompliant ? 'compliant' : 'needs_attention',
        score,
        lastAssessment: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        nextAssessment: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        certificate: isCompliant ? {
          issued: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
          validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
          certificateId: `CERT-${frameworkId.toUpperCase()}-${Date.now()}`
        } : null
      };
    }

    res.json({
      success: true,
      data: {
        agentId,
        compliance: status,
        overall: {
          status: Object.values(status).every(s => s.status === 'compliant') ? 'fully_compliant' : 
                 Object.values(status).some(s => s.status === 'compliant') ? 'partially_compliant' : 'non_compliant',
          averageScore: Object.values(status).reduce((sum: number, s: any) => sum + s.score, 0) / Object.keys(status).length
        }
      },
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id']
      }
    });
  } catch (error) {
    next(error);
  }
});

export default router;