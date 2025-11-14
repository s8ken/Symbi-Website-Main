/**
 * SYMBI Blockchain Integration API Routes
 * Implements REST API endpoints for blockchain anchoring and verification
 */

import express from 'express';
import { body, param, query, validationResult } from 'express-validator';
import { blockchainIntegration } from '../services/blockchainIntegration.js';
import { enhancedAuth, rateLimiter, adminOnly } from '../middleware/enhancedAuth.js';
import { logger } from '../services/logger.js';

const router = express.Router();

/**
 * POST /api/blockchain/anchor/trust
 * Anchor trust data to blockchain
 */
router.post('/anchor/trust', enhancedAuth, rateLimiter, [
  body('did').isString().matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/),
  body('trustData').isObject().notEmpty(),
  body('network').optional().isIn(['ethereum', 'polygon', 'arbitrum', 'optimism'])
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

    const { did, trustData, network = 'polygon' } = req.body;

    logger.info('Anchoring trust data to blockchain', {
      userId: req.user?.id,
      did,
      network
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Anchor trust data
    const anchor = await blockchainIntegration.anchorTrustData(did, trustData, network);

    res.json({
      success: true,
      data: {
        anchorId: anchor.id,
        transactionHash: anchor.transactionHash,
        blockNumber: anchor.blockNumber,
        network: anchor.network,
        timestamp: anchor.timestamp,
        dataHash: anchor.dataHash,
        confirmations: anchor.confirmations,
        status: anchor.status
      }
    });

  } catch (error) {
    logger.error('Error anchoring trust data', {
      error: error.message,
      userId: req.user?.id,
      did: req.body?.did
    });

    res.status(500).json({
      success: false,
      error: 'Failed to anchor trust data',
      details: error.message
    });
  }
});

/**
 * POST /api/blockchain/verify/trust
 * Verify trust data on blockchain
 */
router.post('/verify/trust', enhancedAuth, rateLimiter, [
  body('did').isString().matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/),
  body('trustData').isObject().notEmpty(),
  body('network').optional().isIn(['ethereum', 'polygon', 'arbitrum', 'optimism'])
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

    const { did, trustData, network = 'polygon' } = req.body;

    logger.info('Verifying trust data on blockchain', {
      userId: req.user?.id,
      did,
      network
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Verify trust data
    const verification = await blockchainIntegration.verifyTrustData(did, trustData, network);

    res.json({
      success: true,
      data: {
        isValid: verification.isValid,
        timestamp: verification.timestamp,
        anchorer: verification.anchorer,
        network,
        did
      }
    });

  } catch (error) {
    logger.error('Error verifying trust data', {
      error: error.message,
      userId: req.user?.id,
      did: req.body?.did
    });

    res.status(500).json({
      success: false,
      error: 'Failed to verify trust data',
      details: error.message
    });
  }
});

/**
 * POST /api/blockchain/did/register
 * Register DID document on blockchain
 */
router.post('/did/register', enhancedAuth, rateLimiter, [
  body('did').isString().matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/),
  body('document').isObject().notEmpty(),
  body('network').optional().isIn(['ethereum', 'polygon', 'arbitrum', 'optimism'])
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

    const { did, document, network = 'polygon' } = req.body;

    logger.info('Registering DID on blockchain', {
      userId: req.user?.id,
      did,
      network
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Register DID
    const anchor = await blockchainIntegration.registerDID(did, document, network);

    res.json({
      success: true,
      data: {
        anchorId: anchor.id,
        transactionHash: anchor.transactionHash,
        blockNumber: anchor.blockNumber,
        network: anchor.network,
        timestamp: anchor.timestamp,
        documentHash: anchor.dataHash,
        confirmations: anchor.confirmations,
        status: anchor.status
      }
    });

  } catch (error) {
    logger.error('Error registering DID', {
      error: error.message,
      userId: req.user?.id,
      did: req.body?.did
    });

    res.status(500).json({
      success: false,
      error: 'Failed to register DID',
      details: error.message
    });
  }
});

/**
 * POST /api/blockchain/did/update
 * Update DID document on blockchain
 */
router.post('/did/update', enhancedAuth, rateLimiter, [
  body('did').isString().matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/),
  body('document').isObject().notEmpty(),
  body('network').optional().isIn(['ethereum', 'polygon', 'arbitrum', 'optimism'])
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

    const { did, document, network = 'polygon' } = req.body;

    logger.info('Updating DID on blockchain', {
      userId: req.user?.id,
      did,
      network
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Update DID
    const anchor = await blockchainIntegration.updateDID(did, document, network);

    res.json({
      success: true,
      data: {
        anchorId: anchor.id,
        transactionHash: anchor.transactionHash,
        blockNumber: anchor.blockNumber,
        network: anchor.network,
        timestamp: anchor.timestamp,
        documentHash: anchor.dataHash,
        confirmations: anchor.confirmations,
        status: anchor.status
      }
    });

  } catch (error) {
    logger.error('Error updating DID', {
      error: error.message,
      userId: req.user?.id,
      did: req.body?.did
    });

    res.status(500).json({
      success: false,
      error: 'Failed to update DID',
      details: error.message
    });
  }
});

/**
 * GET /api/blockchain/did/resolve/:did
 * Resolve DID from blockchain
 */
router.get('/did/resolve/:did', enhancedAuth, rateLimiter, [
  param('did').isString().matches(/^did:[a-z]+:[a-zA-Z0-9._-]+$/),
  query('network').optional().isIn(['ethereum', 'polygon', 'arbitrum', 'optimism'])
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

    const { did } = req.params;
    const network = req.query.network || 'polygon';

    logger.info('Resolving DID from blockchain', {
      userId: req.user?.id,
      did,
      network
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Resolve DID
    const resolution = await blockchainIntegration.resolveDID(did, network);

    if (!resolution) {
      return res.status(404).json({
        success: false,
        error: 'DID not found',
        details: `The DID ${did} was not found on ${network}`
      });
    }

    res.json({
      success: true,
      data: {
        did,
        network,
        documentHash: resolution.documentHash,
        timestamp: resolution.timestamp,
        owner: resolution.owner
      }
    });

  } catch (error) {
    logger.error('Error resolving DID', {
      error: error.message,
      userId: req.user?.id,
      did: req.params?.did
    });

    res.status(500).json({
      success: false,
      error: 'Failed to resolve DID',
      details: error.message
    });
  }
});

/**
 * GET /api/blockchain/transaction/:hash/status
 * Get transaction status
 */
router.get('/transaction/:hash/status', enhancedAuth, rateLimiter, [
  param('hash').isString().matches(/^0x[a-fA-F0-9]{64}$/),
  query('network').optional().isIn(['ethereum', 'polygon', 'arbitrum', 'optimism'])
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

    const { hash } = req.params;
    const network = req.query.network || 'polygon';

    logger.info('Getting transaction status', {
      userId: req.user?.id,
      transactionHash: hash,
      network
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Get transaction status
    const status = await blockchainIntegration.getTransactionStatus(hash, network);

    res.json({
      success: true,
      data: {
        transactionHash: hash,
        network,
        status: status.status,
        confirmations: status.confirmations,
        blockNumber: status.blockNumber
      }
    });

  } catch (error) {
    logger.error('Error getting transaction status', {
      error: error.message,
      userId: req.user?.id,
      transactionHash: req.params?.hash
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get transaction status',
      details: error.message
    });
  }
});

/**
 * GET /api/blockchain/network/:network/info
 * Get network information
 */
router.get('/network/:network/info', enhancedAuth, rateLimiter, [
  param('network').isIn(['ethereum', 'polygon', 'arbitrum', 'optimism'])
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

    const { network } = req.params;

    logger.info('Getting network information', {
      userId: req.user?.id,
      network
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Get network info
    const info = await blockchainIntegration.getNetworkInfo(network);

    res.json({
      success: true,
      data: {
        network,
        chainId: info.chainId,
        blockNumber: info.blockNumber,
        gasPrice: info.gasPrice.toString()
      }
    });

  } catch (error) {
    logger.error('Error getting network information', {
      error: error.message,
      userId: req.user?.id,
      network: req.params?.network
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get network information',
      details: error.message
    });
  }
});

/**
 * GET /api/blockchain/networks
 * Get supported networks
 */
router.get('/networks', enhancedAuth, rateLimiter, async (req, res) => {
  try {
    logger.info('Getting supported blockchain networks', {
      userId: req.user?.id
    });

    const networks = blockchainIntegration.getSupportedNetworks();

    res.json({
      success: true,
      data: {
        networks,
        total: networks.length
      }
    });

  } catch (error) {
    logger.error('Error getting supported networks', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get supported networks',
      details: error.message
    });
  }
});

/**
 * POST /api/blockchain/estimate-gas
 * Estimate gas for a transaction
 */
router.post('/estimate-gas', enhancedAuth, rateLimiter, [
  body('network').isIn(['ethereum', 'polygon', 'arbitrum', 'optimism']),
  body('contractType').isIn(['trust_anchor', 'did_registry']),
  body('method').isString().notEmpty(),
  body('params').isArray()
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

    const { network, contractType, method, params } = req.body;

    logger.info('Estimating gas for transaction', {
      userId: req.user?.id,
      network,
      contractType,
      method
    });

    // Check if network is available
    if (!blockchainIntegration.isNetworkAvailable(network)) {
      return res.status(400).json({
        success: false,
        error: 'Network not available',
        details: `The ${network} network is not configured`
      });
    }

    // Estimate gas
    const gasEstimate = await blockchainIntegration.estimateGas(network, contractType, method, params);

    res.json({
      success: true,
      data: {
        network,
        contractType,
        method,
        gasEstimate: gasEstimate.toString()
      }
    });

  } catch (error) {
    logger.error('Error estimating gas', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to estimate gas',
      details: error.message
    });
  }
});

export default router;