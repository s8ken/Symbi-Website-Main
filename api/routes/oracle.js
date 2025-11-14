/**
 * Oracle System API Routes
 * Implements the decentralized oracle network endpoints
 */

import { Router } from 'express';
import { body, param, validationResult } from 'express-validator';
import { oracleSystem } from '../services/oracle.js';
import { logger } from '../utils/logger.js';
import { enhancedAuth } from '../middleware/enhancedAuth.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

/**
 * @route   POST /api/oracle/register
 * @desc    Register a new oracle node in the network
 * @access  Private (authenticated agents)
 */
router.post(
  '/register',
  enhancedAuth,
  rateLimiter,
  [
    body('nodeId')
      .isString()
      .isLength({ min: 1, max: 50 })
      .withMessage('Node ID must be between 1 and 50 characters'),
    body('endpoint')
      .isURL()
      .withMessage('Endpoint must be a valid URL'),
    body('publicKey')
      .isString()
      .isLength({ min: 10 })
      .withMessage('Public key must be at least 10 characters'),
    body('stake')
      .isInt({ min: 1000 })
      .withMessage('Stake must be at least 1000 SYMBI tokens')
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

      const { nodeId, endpoint, publicKey, stake } = req.body;
      const did = req.user.did;

      logger.info('Registering oracle node', {
        nodeId,
        did,
        endpoint,
        stake
      });

      const node = {
        id: nodeId,
        did,
        endpoint,
        publicKey,
        reputation: 50, // Default reputation for new nodes
        stake,
        status: 'active' as const,
        lastHeartbeat: new Date(),
        submittedData: []
      };

      const success = await oracleSystem.registerNode(node);

      if (success) {
        res.status(201).json({
          success: true,
          data: {
            nodeId,
            did,
            status: 'registered',
            reputation: node.reputation,
            message: 'Oracle node registered successfully'
          }
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Failed to register oracle node'
        });
      }

    } catch (error) {
      logger.error('Error registering oracle node', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to register oracle node',
        details: error.message
      });
    }
  }
);

/**
 * @route   POST /api/oracle/submit
 * @desc    Submit data from an oracle node
 * @access  Private (authenticated oracle nodes)
 */
router.post(
  '/submit',
  enhancedAuth,
  rateLimiter,
  [
    body('dataType')
      .isIn(['trust_score', 'credential_status', 'compliance_status', 'reputation'])
      .withMessage('Invalid data type'),
    body('data')
      .isObject()
      .notEmpty()
      .withMessage('Data must be a non-empty object'),
    body('signature')
      .isString()
      .isLength({ min: 10 })
      .withMessage('Signature must be at least 10 characters'),
    body('targetDID')
      .isString()
      .matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/)
      .withMessage('Invalid target DID format')
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

      const { dataType, data, signature, targetDID } = req.body;
      const oracleId = req.user.did; // Assuming DID serves as oracle ID

      logger.info('Submitting oracle data', {
        oracleId,
        dataType,
        targetDID
      });

      const oracleData: OracleData = {
        id: `${oracleId}-${Date.now()}`,
        oracleId,
        dataType,
        data,
        signature,
        timestamp: new Date(),
        targetDID
      };

      const success = await oracleSystem.submitData(oracleData);

      if (success) {
        res.status(201).json({
          success: true,
          data: {
            dataId: oracleData.id,
            status: 'submitted',
            message: 'Oracle data submitted successfully'
          }
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Failed to submit oracle data'
        });
      }

    } catch (error) {
      logger.error('Error submitting oracle data', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to submit oracle data',
        details: error.message
      });
    }
  }
);

/**
 * @route   GET /api/oracle/consensus/:dataType/:targetDID
 * @desc    Get consensus result for a specific data type and target
 * @access  Private (authenticated agents)
 */
router.get(
  '/consensus/:dataType/:targetDID',
  enhancedAuth,
  [
    param('dataType')
      .isIn(['trust_score', 'credential_status', 'compliance_status', 'reputation'])
      .withMessage('Invalid data type'),
    param('targetDID')
      .isString()
      .matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/)
      .withMessage('Invalid target DID format')
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

      const { dataType, targetDID } = req.params;

      logger.info('Getting consensus result', {
        dataType,
        targetDID
      });

      const consensus = oracleSystem.getConsensusResult(dataType, targetDID);

      if (consensus) {
        res.status(200).json({
          success: true,
          data: {
            consensusId: consensus.id,
            dataType: consensus.dataType,
            targetDID: consensus.targetDID,
            result: consensus.consensusResult,
            algorithm: consensus.consensusAlgorithm,
            threshold: consensus.threshold,
            submissions: consensus.submissions.length,
            finalizedAt: consensus.finalizedAt,
            rewardDistributed: consensus.rewardDistributed
          }
        });
      } else {
        res.status(404).json({
          success: false,
          error: 'Consensus result not found'
        });
      }

    } catch (error) {
      logger.error('Error getting consensus result', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to get consensus result',
        details: error.message
      });
    }
  }
);

/**
 * @route   GET /api/oracle/network/stats
 * @desc    Get oracle network statistics
 * @access  Private (authenticated agents)
 */
router.get(
  '/network/stats',
  enhancedAuth,
  async (req, res) => {
    try {
      logger.info('Getting oracle network statistics');

      const stats = oracleSystem.getNetworkStatistics();

      res.status(200).json({
        success: true,
        data: {
          totalNodes: stats.totalNodes,
          activeNodes: stats.activeNodes,
          totalStake: stats.totalStake,
          consensusCount: stats.consensusCount,
          averageReputation: stats.averageReputation,
          timestamp: new Date()
        }
      });

    } catch (error) {
      logger.error('Error getting network statistics', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to get network statistics',
        details: error.message
      });
    }
  }
);

/**
 * @route   POST /api/oracle/heartbeat
 * @desc    Submit heartbeat from an oracle node
 * @access  Private (authenticated oracle nodes)
 */
router.post(
  '/heartbeat',
  enhancedAuth,
  async (req, res) => {
    try {
      const oracleId = req.user.did;

      logger.info('Processing oracle heartbeat', {
        oracleId
      });

      const success = await oracleSystem.submitHeartbeat(oracleId);

      if (success) {
        res.status(200).json({
          success: true,
          data: {
            oracleId,
            status: 'active',
            timestamp: new Date(),
            message: 'Heartbeat processed successfully'
          }
        });
      } else {
        res.status(404).json({
          success: false,
          error: 'Oracle node not found'
        });
      }

    } catch (error) {
      logger.error('Error processing heartbeat', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to process heartbeat',
        details: error.message
      });
    }
  }
);

/**
 * @route   GET /api/oracle/nodes
 * @desc    Get list of all oracle nodes
 * @access  Private (authenticated agents)
 */
router.get(
  '/nodes',
  enhancedAuth,
  async (req, res) => {
    try {
      logger.info('Getting oracle nodes list');

      // This would typically come from the oracle system
      // For now, return a mock response
      const nodes = [
        {
          id: 'oracle-1',
          did: 'did:symbi:oracle-1',
          endpoint: 'https://oracle1.symbi.world',
          reputation: 85,
          stake: 5000,
          status: 'active',
          lastHeartbeat: new Date()
        },
        {
          id: 'oracle-2',
          did: 'did:symbi:oracle-2',
          endpoint: 'https://oracle2.symbi.world',
          reputation: 92,
          stake: 7500,
          status: 'active',
          lastHeartbeat: new Date()
        },
        {
          id: 'oracle-3',
          did: 'did:symbi:oracle-3',
          endpoint: 'https://oracle3.symbi.world',
          reputation: 78,
          stake: 3000,
          status: 'active',
          lastHeartbeat: new Date()
        }
      ];

      res.status(200).json({
        success: true,
        data: {
          nodes,
          total: nodes.length,
          timestamp: new Date()
        }
      });

    } catch (error) {
      logger.error('Error getting oracle nodes', { error });
      res.status(500).json({
        success: false,
        error: 'Failed to get oracle nodes',
        details: error.message
      });
    }
  }
);

export default router;