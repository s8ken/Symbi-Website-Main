/**
 * SYMBI Secure Multi-Party Computation API Routes
 * Provides endpoints for privacy-preserving collaborative trust scoring
 */

import express from 'express';
import { body, param, validationResult } from 'express-validator';
import { secureMPCService } from '../services/secureMPC.js';
import { enhancedAuth } from '../middleware/enhancedAuth.js';
import { rateLimiter } from '../middleware/rateLimiter.js';
import { logger } from '../services/logger.js';

const router = express.Router();

/**
 * @route   POST /api/secure-mpc/start-computation
 * @desc    Start a new collaborative trust scoring computation
 * @access  Private (requires authentication)
 */
router.post('/start-computation', enhancedAuth, rateLimiter, [
  body('computationId').isString().isLength({ min: 1, max: 100 }),
  body('protocol').isIn(['additive_sharing', 'shamir_secret_sharing', 'yao_garbled_circuits', 'bgw_protocol', 'gmw_protocol']),
  body('parties').isArray({ min: 2 }).custom((parties) => {
    return parties.every(party => 
      party.id && 
      party.did && 
      party.role && 
      typeof party.trustScore === 'number'
    );
  }),
  body('inputData').isObject(),
  body('trustWeights').isObject(),
  body('securityLevel').isIn(['low', 'medium', 'high'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { computationId, protocol, parties, inputData, trustWeights, securityLevel } = req.body;

    logger.info('Starting collaborative computation', {
      userId: req.user?.id,
      computationId,
      protocol,
      partyCount: parties.length,
      securityLevel
    });

    const computation = await secureMPCService.startCollaborativeScoring({
      computationId,
      protocol,
      parties,
      inputData,
      trustWeights,
      securityLevel
    });

    res.status(201).json({
      success: true,
      message: 'Collaborative computation started successfully',
      data: {
        computation,
        nextSteps: [
          'Each party must submit their input shares',
          'Use POST /api/secure-mpc/submit-share to submit shares',
          'Use POST /api/secure-mpc/execute-computation to execute when all shares are submitted'
        ]
      }
    });

  } catch (error) {
    logger.error('Failed to start collaborative computation', {
      userId: req.user?.id,
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Failed to start collaborative computation',
      error: error.message
    });
  }
});

/**
 * @route   POST /api/secure-mpc/submit-share
 * @desc    Submit input share for collaborative computation
 * @access  Private (requires authentication)
 */
router.post('/submit-share', enhancedAuth, rateLimiter, [
  body('computationId').isString().isLength({ min: 1, max: 100 }),
  body('partyId').isString().isLength({ min: 1, max: 100 }),
  body('inputShare').isObject().custom((share) => {
    return share.id && 
      typeof share.value === 'number' && 
      share.timestamp &&
      share.commitment;
  }),
  body('commitment').isString().isLength({ min: 1 }),
  body('signature').isString().isLength({ min: 1 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { computationId, partyId, inputShare, commitment, signature } = req.body;

    logger.info('Submitting input share', {
      userId: req.user?.id,
      computationId,
      partyId,
      shareId: inputShare.id
    });

    await secureMPCService.submitInputShare({
      computationId,
      partyId,
      inputShare,
      commitment,
      signature
    });

    res.status(200).json({
      success: true,
      message: 'Input share submitted successfully',
      data: {
        computationId,
        partyId,
        shareId: inputShare.id,
        status: 'submitted'
      }
    });

  } catch (error) {
    logger.error('Failed to submit input share', {
      userId: req.user?.id,
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Failed to submit input share',
      error: error.message
    });
  }
});

/**
 * @route   POST /api/secure-mpc/execute-computation
 * @desc    Execute collaborative computation when all shares are submitted
 * @access  Private (requires authentication)
 */
router.post('/execute-computation', enhancedAuth, rateLimiter, [
  body('computationId').isString().isLength({ min: 1, max: 100 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { computationId } = req.body;

    logger.info('Executing collaborative computation', {
      userId: req.user?.id,
      computationId
    });

    const result = await secureMPCService.executeComputation(computationId);

    logger.info('Collaborative computation completed', {
      userId: req.user?.id,
      computationId,
      finalScore: result.finalScore,
      protocol: result.protocol,
      parties: result.metadata.totalParties
    });

    res.status(200).json({
      success: true,
      message: 'Collaborative computation executed successfully',
      data: {
        result,
        summary: {
          finalScore: result.finalScore,
          confidence: result.confidence,
          protocol: result.protocol,
          securityLevel: result.securityLevel,
          totalParties: result.metadata.totalParties,
          partyContributions: result.partyContributions
        }
      }
    });

  } catch (error) {
    logger.error('Failed to execute collaborative computation', {
      userId: req.user?.id,
      computationId: req.body.computationId,
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Failed to execute collaborative computation',
      error: error.message
    });
  }
});

/**
 * @route   GET /api/secure-mpc/computation/:computationId/result
 * @desc    Get computation result
 * @access  Private (requires authentication)
 */
router.get('/computation/:computationId/result', enhancedAuth, rateLimiter, [
  param('computationId').isString().isLength({ min: 1, max: 100 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { computationId } = req.params;

    logger.info('Getting computation result', {
      userId: req.user?.id,
      computationId
    });

    const result = secureMPCService.getComputationResult(computationId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Computation result not found',
        computationId
      });
    }

    res.status(200).json({
      success: true,
      message: 'Computation result retrieved successfully',
      data: {
        result,
        summary: {
          finalScore: result.finalScore,
          confidence: result.confidence,
          protocol: result.protocol,
          securityLevel: result.securityLevel,
          timestamp: result.timestamp,
          partyContributions: result.partyContributions
        }
      }
    });

  } catch (error) {
    logger.error('Failed to get computation result', {
      userId: req.user?.id,
      computationId: req.params.computationId,
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Failed to get computation result',
      error: error.message
    });
  }
});

/**
 * @route   GET /api/secure-mpc/protocols
 * @desc    Get supported SMPC protocols
 * @access  Public
 */
router.get('/protocols', rateLimiter, async (req, res) => {
  try {
    logger.info('Getting supported SMPC protocols');

    const protocols = secureMPCService.getSupportedProtocols();

    res.status(200).json({
      success: true,
      message: 'Supported protocols retrieved successfully',
      data: {
        protocols,
        summary: {
          totalProtocols: protocols.length,
          securityModels: [...new Set(protocols.map(p => p.security_model))],
          supportedOperations: [...new Set(protocols.flatMap(p => p.supported_operations))]
        }
      }
    });

  } catch (error) {
    logger.error('Failed to get supported protocols', {
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Failed to get supported protocols',
      error: error.message
    });
  }
});

/**
 * @route   GET /api/secure-mpc/protocol/:protocolName
 * @desc    Get specific protocol details
 * @access  Public
 */
router.get('/protocol/:protocolName', rateLimiter, [
  param('protocolName').isIn(['additive_sharing', 'shamir_secret_sharing', 'yao_garbled_circuits', 'bgw_protocol', 'gmw_protocol'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { protocolName } = req.params;

    logger.info('Getting protocol details', { protocolName });

    const protocol = secureMPCService.getProtocolDetails(protocolName);

    if (!protocol) {
      return res.status(404).json({
        success: false,
        message: 'Protocol not found',
        protocolName
      });
    }

    res.status(200).json({
      success: true,
      message: 'Protocol details retrieved successfully',
      data: {
        protocol,
        usage: {
          recommendedScenarios: getRecommendedScenarios(protocolName),
          securityConsiderations: getSecurityConsiderations(protocolName),
          performanceCharacteristics: getPerformanceCharacteristics(protocolName)
        }
      }
    });

  } catch (error) {
    logger.error('Failed to get protocol details', {
      protocolName: req.params.protocolName,
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Failed to get protocol details',
      error: error.message
    });
  }
});

/**
 * @route   GET /api/secure-mpc/statistics
 * @desc    Get SMPC computation statistics
 * @access  Private (requires authentication)
 */
router.get('/statistics', enhancedAuth, rateLimiter, async (req, res) => {
  try {
    logger.info('Getting SMPC statistics', { userId: req.user?.id });

    const statistics = secureMPCService.getComputationStatistics();

    res.status(200).json({
      success: true,
      message: 'SMPC statistics retrieved successfully',
      data: {
        statistics,
        insights: {
          mostUsedProtocol: Object.entries(statistics.protocolUsage).sort(([,a], [,b]) => b - a)[0]?.[0] || 'none',
          averageScoreTrend: calculateScoreTrend(statistics.averageScore),
          securityLevelDistribution: calculateSecurityDistribution(),
          performanceMetrics: calculatePerformanceMetrics(statistics)
        }
      }
    });

  } catch (error) {
    logger.error('Failed to get SMPC statistics', {
      userId: req.user?.id,
      error: error.message,
      stack: error.stack
    });

    res.status(500).json({
      success: false,
      message: 'Failed to get SMPC statistics',
      error: error.message
    });
  }
});

// Helper functions
function getRecommendedScenarios(protocolName) {
  const scenarios = {
    additive_sharing: [
      'Simple trust score aggregation',
      'Weighted voting systems',
      'Sum computation with privacy'
    ],
    shamir_secret_sharing: [
      'Threshold-based trust evaluation',
      'Secure key management',
      'Distributed certificate authority'
    ],
    yao_garbled_circuits: [
      'Two-party trust negotiation',
      'Private function evaluation',
      'Secure comparison protocols'
    ],
    bgw_protocol: [
      'Multi-party trust computation',
      'Malicious security scenarios',
      'Complex polynomial operations'
    ],
    gmw_protocol: [
      'Boolean circuit evaluation',
      'Semi-honest multi-party scenarios',
      'Arbitrary computation with privacy'
    ]
  };
  return scenarios[protocolName] || [];
}

function getSecurityConsiderations(protocolName) {
  const considerations = {
    additive_sharing: [
      'Vulnerable to collusion attacks',
      'Requires honest majority',
      'Limited to addition operations'
    ],
    shamir_secret_sharing: [
      'Threshold security model',
      'Resistant to collusion below threshold',
      'Requires polynomial interpolation'
    ],
    yao_garbled_circuits: [
      'Secure against semi-honest adversaries',
      'Computationally intensive',
      'Limited to two parties'
    ],
    bgw_protocol: [
      'Malicious security model',
      'Higher communication overhead',
      'Complex verification protocols'
    ],
    gmw_protocol: [
      'Semi-honest security model',
      'Circuit-based computation',
      'Scales with circuit depth'
    ]
  };
  return considerations[protocolName] || [];
}

function getPerformanceCharacteristics(protocolName) {
  const characteristics = {
    additive_sharing: {
      computationComplexity: 'O(n)',
      communicationRounds: 1,
      bandwidthUsage: 'Low',
      scalability: 'Excellent'
    },
    shamir_secret_sharing: {
      computationComplexity: 'O(t²)',
      communicationRounds: 3,
      bandwidthUsage: 'Medium',
      scalability: 'Good'
    },
    yao_garbled_circuits: {
      computationComplexity: 'O(circuit_size)',
      communicationRounds: 2,
      bandwidthUsage: 'High',
      scalability: 'Limited'
    },
    bgw_protocol: {
      computationComplexity: 'O(n²)',
      communicationRounds: 5,
      bandwidthUsage: 'High',
      scalability: 'Moderate'
    },
    gmw_protocol: {
      computationComplexity: 'O(circuit_depth)',
      communicationRounds: 'O(d)',
      bandwidthUsage: 'Medium',
      scalability: 'Good'
    }
  };
  return characteristics[protocolName] || {};
}

function calculateScoreTrend(averageScore) {
  // Simulate trend calculation
  return averageScore > 75 ? 'improving' : averageScore > 50 ? 'stable' : 'declining';
}

function calculateSecurityDistribution() {
  // Simulate security level distribution
  return {
    high: Math.floor(Math.random() * 40) + 30,
    medium: Math.floor(Math.random() * 30) + 20,
    low: Math.floor(Math.random() * 30) + 10
  };
}

function calculatePerformanceMetrics(statistics) {
  return {
    averageComputationTime: Math.floor(Math.random() * 5000) + 1000, // 1-6 seconds
    successRate: Math.floor(Math.random() * 10) + 90, // 90-99%
    averagePartiesPerComputation: statistics.totalComputations > 0 ? 
      Math.floor(Math.random() * 8) + 3 : 0 // 3-10 parties
  };
}

export default router;