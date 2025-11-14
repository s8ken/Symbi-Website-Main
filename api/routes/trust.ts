import express from 'express';
import { TrustScoringEngine } from '../services/trustScoring.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';

const router = express.Router();
const trustEngine = new TrustScoringEngine();

/**
 * @route   POST /api/trust/declarations
 * @desc    Create a new trust declaration
 * @access  Private
 */
router.post('/declarations', authMiddleware, async (req, res, next) => {
  try {
    const { agentId, assertion, evidence } = req.body;

    if (!agentId || !assertion || !evidence) {
      throw new SYMBIError(
        'Missing required fields: agentId, assertion, evidence',
        ErrorCodes.INVALID_CREDENTIAL,
        400
      );
    }

    const declaration = await trustEngine.createDeclaration({
      agentId,
      assertion,
      evidence,
      createdBy: req.user.id
    });

    res.status(201).json({
      success: true,
      data: declaration,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id']
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/trust/scores/:agentId
 * @desc    Get trust score for an agent
 * @access  Public
 */
router.get('/scores/:agentId', async (req, res, next) => {
  try {
    const { agentId } = req.params;
    const { includeBreakdown = 'true' } = req.query;

    const trustScore = await trustEngine.calculateTrustScore(agentId);

    const response = {
      agentId,
      score: trustScore.overall,
      confidence: trustScore.confidence,
      category: trustEngine.getTrustCategory(trustScore.overall),
      lastUpdated: trustScore.lastUpdated
    };

    if (includeBreakdown === 'true') {
      (response as any).breakdown = trustScore.breakdown;
      (response as any).temporalScore = trustScore.temporalScore;
    }

    res.json({
      success: true,
      data: response,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id']
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   POST /api/trust/verify
 * @desc    Verify trust assertion
 * @access  Public
 */
router.post('/verify', async (req, res, next) => {
  try {
    const { assertion, evidence, requiredScore = 0.6 } = req.body;

    if (!assertion) {
      throw new SYMBIError(
        'Missing required field: assertion',
        ErrorCodes.INVALID_CREDENTIAL,
        400
      );
    }

    const verification = await trustEngine.verifyAssertion({
      assertion,
      evidence,
      requiredScore
    });

    res.json({
      success: true,
      data: verification,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id']
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/trust/audit/:transactionId
 * @desc    Get audit trail for a transaction
 * @access  Private
 */
router.get('/audit/:transactionId', authMiddleware, async (req, res, next) => {
  try {
    const { transactionId } = req.params;
    const { limit = 50, offset = 0 } = req.query;

    const auditTrail = await trustEngine.getAuditTrail({
      transactionId,
      limit: parseInt(limit as string),
      offset: parseInt(offset as string)
    });

    res.json({
      success: true,
      data: auditTrail,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id'],
        limit,
        offset
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/trust/agents
 * @desc    Get all agents with trust scores
 * @access  Private (Admin only)
 */
router.get('/agents', authMiddleware, requireRole(['admin']), async (req, res, next) => {
  try {
    const { page = 1, limit = 20, sortBy = 'trustScore', sortOrder = 'desc' } = req.query;

    const agents = await trustEngine.getAgents({
      page: parseInt(page as string),
      limit: parseInt(limit as string),
      sortBy: sortBy as string,
      sortOrder: sortOrder as 'asc' | 'desc'
    });

    res.json({
      success: true,
      data: agents,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id'],
        page,
        limit,
        total: agents.length
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/trust/trends
 * @desc    Get trust score trends
 * @access  Private
 */
router.get('/trends', authMiddleware, async (req, res, next) => {
  try {
    const { agentId, timeframe = '30d' } = req.query;

    const trends = await trustEngine.getTrustTrends({
      agentId: agentId as string,
      timeframe: timeframe as string
    });

    res.json({
      success: true,
      data: trends,
      metadata: {
        timestamp: new Date(),
        requestId: req.headers['x-request-id'],
        timeframe
      }
    });
  } catch (error) {
    next(error);
  }
});

export default router;