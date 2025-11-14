/**
 * Trust Handshake API Routes
 * Implements the trust handshake protocol endpoints
 */

import { Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import { trustHandshakeProtocol } from '../services/trustHandshake';
import { logger } from '../utils/logger';
import { enhancedAuth } from '../middleware/enhancedAuth';
import { rateLimiter } from '../middleware/rateLimiter';

const router = Router();

/**
 * @route   POST /api/handshake/initiate
 * @desc    Initiate a new trust handshake between two agents
 * @access  Private (authenticated agents)
 */
router.post(
  '/initiate',
  enhancedAuth,
  rateLimiter,
  [
    body('responderDID')
      .isString()
      .matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/)
      .withMessage('Invalid DID format'),
    body('trustRequirements')
      .isArray()
      .notEmpty()
      .withMessage('Trust requirements must be a non-empty array'),
    body('trustRequirements.*')
      .isString()
      .isIn(['technical', 'ethical', 'operational', 'transparency', 'security', 'compliance'])
      .withMessage('Invalid trust requirement')
  ],
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { responderDID, trustRequirements } = req.body;
      const initiatorDID = req.user.did;
      const initiatorPublicKey = req.user.publicKey;

      logger.info('Initiating trust handshake', {
        initiatorDID,
        responderDID,
        trustRequirements
      });

      // Initiate the handshake
      const handshake = await trustHandshakeProtocol.initiateHandshake({
        initiatorDID,
        responderDID,
        initiatorPublicKey,
        trustRequirements
      });

      res.status(201).json({
        success: true,
        data: {
          handshakeId: handshake.id,
          phase: handshake.phase,
          status: handshake.status,
          currentChallenge: handshake.challenges[handshake.challenges.length - 1],
          metadata: handshake.metadata
        }
      });

    } catch (error) {
      logger.error('Error initiating handshake', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to initiate trust handshake',
        details: error.message
      });
    }
  }
);

/**
 * @route   POST /api/handshake/:handshakeId/respond
 * @desc    Respond to a cryptographic challenge in the trust handshake
 * @access  Private (authenticated agents)
 */
router.post(
  '/:handshakeId/respond',
  enhancedAuth,
  rateLimiter,
  [
    param('handshakeId')
      .isString()
      .isLength({ min: 32, max: 32 })
      .withMessage('Invalid handshake ID format'),
    body('challengeId')
      .isString()
      .notEmpty()
      .withMessage('Challenge ID is required'),
    body('response')
      .isObject()
      .notEmpty()
      .withMessage('Response is required')
  ],
  async (req, res) => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { handshakeId } = req.params;
      const { challengeId, response } = req.body;
      const responderDID = req.user.did;
      const responderPublicKey = req.user.publicKey;

      logger.info('Processing handshake response', {
        handshakeId,
        challengeId,
        responderDID
      });

      // Process the challenge response
      const updatedHandshake = await trustHandshakeProtocol.processChallengeResponse({
        handshakeId,
        challengeId,
        response,
        responderDID,
        responderPublicKey
      });

      // Prepare response based on handshake status
      const responseData = {
        handshakeId: updatedHandshake.id,
        phase: updatedHandshake.phase,
        status: updatedHandshake.status,
        metadata: updatedHandshake.metadata
      };

      // If handshake is completed, include trust score
      if (updatedHandshake.status === 'completed') {
        responseData.trustScore = updatedHandshake.metadata.trustScore;
        responseData.message = 'Trust handshake completed successfully';
      } else if (updatedHandshake.status === 'failed') {
        responseData.message = 'Trust handshake failed';
      } else {
        // Provide next challenge if available
        const nextChallenge = updatedHandshake.challenges[updatedHandshake.challenges.length - 1];
        if (nextChallenge) {
          responseData.nextChallenge = nextChallenge;
        }
      }

      res.status(200).json({
        success: true,
        data: responseData
      });

    } catch (error) {
      logger.error('Error processing handshake response', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to process handshake response',
        details: error.message
      });
    }
  }
);

/**
 * @route   GET /api/handshake/:handshakeId/status
 * @desc    Get the current status of a trust handshake
 * @access  Private (authenticated agents)
 */
router.get(
  '/:handshakeId/status',
  enhancedAuth,
  [
    param('handshakeId')
      .isString()
      .isLength({ min: 32, max: 32 })
      .withMessage('Invalid handshake ID format')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { handshakeId } = req.params;
      const requestingDID = req.user.did;

      logger.info('Getting handshake status', { handshakeId, requestingDID });

      const handshake = trustHandshakeProtocol.getHandshakeStatus(handshakeId);
      
      if (!handshake) {
        return res.status(404).json({
          success: false,
          error: 'Handshake not found'
        });
      }

      // Verify the requesting agent is part of this handshake
      if (handshake.initiatorDID !== requestingDID && handshake.responderDID !== requestingDID) {
        return res.status(403).json({
          success: false,
          error: 'Access denied to this handshake'
        });
      }

      res.status(200).json({
        success: true,
        data: {
          handshakeId: handshake.id,
          initiatorDID: handshake.initiatorDID,
          responderDID: handshake.responderDID,
          phase: handshake.phase,
          status: handshake.status,
          trustScore: handshake.metadata.trustScore,
          createdAt: handshake.createdAt,
          updatedAt: handshake.updatedAt,
          metadata: handshake.metadata
        }
      });

    } catch (error) {
      logger.error('Error getting handshake status', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to get handshake status',
        details: error.message
      });
    }
  }
);

/**
 * @route   GET /api/handshake/statistics
 * @desc    Get statistics about trust handshakes
 * @access  Private (authenticated agents)
 */
router.get(
  '/statistics',
  enhancedAuth,
  async (req, res) => {
    try {
      logger.info('Getting handshake statistics');

      const statistics = trustHandshakeProtocol.getHandshakeStatistics();

      res.status(200).json({
        success: true,
        data: {
          activeHandshakes: statistics.active,
          completedHandshakes: statistics.completed,
          failedHandshakes: statistics.failed,
          averageDurationMs: statistics.averageDuration,
          timestamp: new Date()
        }
      });

    } catch (error) {
      logger.error('Error getting handshake statistics', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to get handshake statistics',
        details: error.message
      });
    }
  }
);

/**
 * @route   POST /api/handshake/cleanup
 * @desc    Clean up expired or completed handshakes
 * @access  Private (admin only)
 */
router.post(
  '/cleanup',
  enhancedAuth,
  async (req, res) => {
    try {
      // Check if user is admin (this would be implemented in enhancedAuth)
      if (req.user.role !== 'admin') {
        return res.status(403).json({
          success: false,
          error: 'Admin access required'
        });
      }

      logger.info('Cleaning up expired handshakes');

      const beforeStats = trustHandshakeProtocol.getHandshakeStatistics();
      trustHandshakeProtocol.cleanupExpiredHandshakes();
      const afterStats = trustHandshakeProtocol.getHandshakeStatistics();

      res.status(200).json({
        success: true,
        data: {
          message: 'Cleanup completed successfully',
          beforeCleanup: beforeStats,
          afterCleanup: afterStats,
          cleanedUp: beforeStats.active - afterStats.active
        }
      });

    } catch (error) {
      logger.error('Error cleaning up handshakes', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to cleanup handshakes',
        details: error.message
      });
    }
  }
);

export default router;