/**
 * SYMBI 9-Step Scoring API Routes
 * Implements REST API endpoints for the 9-step scoring process
 */

import express from 'express';
import { body, param, query, validationResult } from 'express-validator';
import { nineStepScoringProcess } from '../services/nineStepScoring.js';
import { enhancedAuth, rateLimiter } from '../middleware/enhancedAuth.js';
import { logger } from '../services/logger.js';

const router = express.Router();

/**
 * POST /api/scoring/initiate
 * Initiate a new 9-step scoring process for an agent
 */
router.post('/initiate', enhancedAuth, rateLimiter, [
  body('agentDID').isString().matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/),
  body('useBlockchain').optional().isBoolean(),
  body('useOracleConsensus').optional().isBoolean(),
  body('useCryptographicVerification').optional().isBoolean()
], async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { agentDID, useBlockchain = true, useOracleConsensus = true, useCryptographicVerification = true } = req.body;

    logger.info('Initiating 9-step scoring process', {
      userId: req.user?.id,
      agentDID,
      features: { useBlockchain, useOracleConsensus, useCryptographicVerification }
    });

    // Initiate scoring process
    const process = await nineStepScoringProcess.initiateScoringProcess({
      agentDID,
      useBlockchain,
      useOracleConsensus,
      useCryptographicVerification
    });

    res.json({
      success: true,
      data: {
        processId: process.id,
        agentDID: process.agentDID,
        status: process.status,
        currentStep: process.currentStep,
        totalSteps: process.steps.length,
        startedAt: process.startedAt,
        metadata: process.metadata
      }
    });

  } catch (error) {
    logger.error('Error initiating scoring process', {
      error: error.message,
      userId: req.user?.id,
      agentDID: req.body?.agentDID
    });

    res.status(500).json({
      success: false,
      error: 'Failed to initiate scoring process',
      details: error.message
    });
  }
});

/**
 * GET /api/scoring/status/:processId
 * Get the current status of a scoring process
 */
router.get('/status/:processId', enhancedAuth, rateLimiter, [
  param('processId').isString().isLength({ min: 32, max: 32 })
], async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { processId } = req.params;

    logger.info('Getting scoring process status', {
      userId: req.user?.id,
      processId
    });

    // Get process status
    const process = nineStepScoringProcess.getProcessStatus(processId);

    if (!process) {
      return res.status(404).json({
        success: false,
        error: 'Scoring process not found'
      });
    }

    res.json({
      success: true,
      data: {
        processId: process.id,
        agentDID: process.agentDID,
        status: process.status,
        currentStep: process.currentStep,
        totalSteps: process.steps.length,
        finalScore: process.finalScore,
        results: process.results,
        startedAt: process.startedAt,
        completedAt: process.completedAt,
        metadata: process.metadata
      }
    });

  } catch (error) {
    logger.error('Error getting scoring process status', {
      error: error.message,
      userId: req.user?.id,
      processId: req.params?.processId
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get scoring process status',
      details: error.message
    });
  }
});

/**
 * GET /api/scoring/statistics
 * Get scoring process statistics
 */
router.get('/statistics', enhancedAuth, rateLimiter, async (req, res) => {
  try {
    logger.info('Getting scoring statistics', {
      userId: req.user?.id
    });

    // Get statistics
    const statistics = nineStepScoringProcess.getScoringStatistics();

    res.json({
      success: true,
      data: statistics
    });

  } catch (error) {
    logger.error('Error getting scoring statistics', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get scoring statistics',
      details: error.message
    });
  }
});

/**
 * POST /api/scoring/cleanup
 * Clean up old completed scoring processes
 */
router.post('/cleanup', enhancedAuth, rateLimiter, async (req, res) => {
  try {
    logger.info('Cleaning up old scoring processes', {
      userId: req.user?.id
    });

    // Clean up old processes
    nineStepScoringProcess.cleanupOldProcesses();

    res.json({
      success: true,
      message: 'Old scoring processes cleaned up successfully'
    });

  } catch (error) {
    logger.error('Error cleaning up scoring processes', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to clean up scoring processes',
      details: error.message
    });
  }
});

/**
 * GET /api/scoring/agent/:agentDID/history
 * Get scoring history for a specific agent
 */
router.get('/agent/:agentDID/history', enhancedAuth, rateLimiter, [
  param('agentDID').isString().matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('offset').optional().isInt({ min: 0 })
], async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { agentDID } = req.params;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = parseInt(req.query.offset as string) || 0;

    logger.info('Getting agent scoring history', {
      userId: req.user?.id,
      agentDID,
      limit,
      offset
    });

    // Get all processes for this agent (this would need to be implemented with proper persistence)
    // For now, return a mock response
    const mockHistory = Array.from({ length: Math.min(limit, 5) }, (_, i) => ({
      processId: `process-${agentDID}-${Date.now() - i * 86400000}`,
      agentDID,
      status: 'completed',
      finalScore: Math.round(Math.random() * 30 + 70),
      startedAt: new Date(Date.now() - i * 86400000),
      completedAt: new Date(Date.now() - i * 86400000 + Math.random() * 3600000),
      metadata: {
        useBlockchain: true,
        useOracleConsensus: true,
        useCryptographicVerification: true
      }
    }));

    res.json({
      success: true,
      data: {
        agentDID,
        history: mockHistory,
        total: mockHistory.length,
        limit,
        offset
      }
    });

  } catch (error) {
    logger.error('Error getting agent scoring history', {
      error: error.message,
      userId: req.user?.id,
      agentDID: req.params?.agentDID
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get agent scoring history',
      details: error.message
    });
  }
});

/**
 * GET /api/scoring/leaderboard
 * Get leaderboard of top-scoring agents
 */
router.get('/leaderboard', enhancedAuth, rateLimiter, [
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('timeframe').optional().isIn(['24h', '7d', '30d', 'all'])
], async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const limit = parseInt(req.query.limit as string) || 10;
    const timeframe = req.query.timeframe || 'all';

    logger.info('Getting scoring leaderboard', {
      userId: req.user?.id,
      limit,
      timeframe
    });

    // Generate mock leaderboard data
    const mockLeaderboard = Array.from({ length: Math.min(limit, 20) }, (_, i) => ({
      rank: i + 1,
      agentDID: `did:symbi:agent-${Math.random().toString(36).substring(2, 15)}`,
      finalScore: Math.round(Math.random() * 20 + 80),
      lastScoredAt: new Date(Date.now() - Math.random() * 86400000),
      trustLevel: ['untrusted', 'basic', 'verified', 'trusted', 'highly_trusted'][Math.floor(Math.random() * 5)],
      scoringFeatures: {
        blockchain: Math.random() > 0.3,
        oracle: Math.random() > 0.4,
        crypto: Math.random() > 0.5
      }
    })).sort((a, b) => b.finalScore - a.finalScore);

    res.json({
      success: true,
      data: {
        leaderboard: mockLeaderboard,
        timeframe,
        total: mockLeaderboard.length,
        lastUpdated: new Date()
      }
    });

  } catch (error) {
    logger.error('Error getting scoring leaderboard', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get scoring leaderboard',
      details: error.message
    });
  }
});

export default router;