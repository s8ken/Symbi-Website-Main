/**
 * SYMBI Zero-Knowledge Proof API Routes
 * Implements REST API endpoints for zk-SNARK based privacy-preserving verification
 */

import express from 'express';
import { body, param, query, validationResult } from 'express-validator';
import { zeroKnowledgeProofSystem } from '../services/zeroKnowledgeProof.js';
import { enhancedAuth, rateLimiter } from '../middleware/enhancedAuth.js';
import { logger } from '../services/logger.js';

const router = express.Router();

/**
 * POST /api/zk/generate-proof
 * Generate zero-knowledge proof for trust verification
 */
router.post('/generate-proof', enhancedAuth, rateLimiter, [
  body('circuit').isString().isIn(['trust_threshold', 'credential_validity', 'compliance_check', 'reputation_score', 'consensus_verification']),
  body('inputs').isObject().notEmpty(),
  body('publicInputs').optional().isArray()
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

    const { circuit, inputs, publicInputs = [] } = req.body;

    logger.info('Generating zero-knowledge proof', {
      userId: req.user?.id,
      circuit,
      inputs: Object.keys(inputs)
    });

    // Generate zero-knowledge proof
    const proof = await zeroKnowledgeProofSystem.generateProof(circuit, inputs, publicInputs);

    res.json({
      success: true,
      data: {
        proofId: proof.id,
        circuit: proof.circuit,
        proof: proof.proof,
        publicSignals: proof.publicSignals,
        inputs: proof.inputs,
        timestamp: proof.timestamp,
        status: proof.status
      }
    });

  } catch (error) {
    logger.error('Error generating zero-knowledge proof', {
      error: error.message,
      userId: req.user?.id,
      circuit: req.body?.circuit
    });

    res.status(500).json({
      success: false,
      error: 'Failed to generate zero-knowledge proof',
      details: error.message
    });
  }
});

/**
 * POST /api/zk/verify-proof
 * Verify zero-knowledge proof
 */
router.post('/verify-proof', enhancedAuth, rateLimiter, [
  body('proof').isObject().notEmpty(),
  body('circuit').isString().isIn(['trust_threshold', 'credential_validity', 'compliance_check', 'reputation_score', 'consensus_verification'])
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

    const { proof, circuit } = req.body;

    logger.info('Verifying zero-knowledge proof', {
      userId: req.user?.id,
      proofId: proof?.id,
      circuit
    });

    // Verify zero-knowledge proof
    const verification = await zeroKnowledgeProofSystem.verifyProof(proof);

    res.json({
      success: true,
      data: {
        isValid: verification.isValid,
        details: verification.details,
        proofId: proof.id,
        circuit: proof.circuit,
        timestamp: new Date()
      }
    });

  } catch (error) {
    logger.error('Error verifying zero-knowledge proof', {
      error: error.message,
      userId: req.user?.id,
      proofId: req.body?.proof?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to verify zero-knowledge proof',
      details: error.message
    });
  }
});

/**
 * POST /api/zk/batch-verify
 * Batch verify multiple zero-knowledge proofs
 */
router.post('/batch-verify', enhancedAuth, rateLimiter, [
  body('proofs').isArray().notEmpty()
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

    const { proofs } = req.body;

    logger.info('Batch verifying zero-knowledge proofs', {
      userId: req.user?.id,
      totalProofs: proofs.length
    });

    // Batch verify proofs
    const batchResult = await zeroKnowledgeProofSystem.batchVerifyProofs(proofs);

    res.json({
      success: true,
      data: {
        total: batchResult.total,
        valid: batchResult.valid,
        invalid: batchResult.invalid,
        results: batchResult.results,
        successRate: batchResult.total > 0 ? (batchResult.valid / batchResult.total) * 100 : 0
      }
    });

  } catch (error) {
    logger.error('Error batch verifying zero-knowledge proofs', {
      error: error.message,
      userId: req.user?.id,
      totalProofs: req.body?.proofs?.length
    });

    res.status(500).json({
      success: false,
      error: 'Failed to batch verify zero-knowledge proofs',
      details: error.message
    });
  }
});

/**
 * POST /api/zk/create-trust-statement
 * Create trust statement with zero-knowledge proof
 */
router.post('/create-trust-statement', enhancedAuth, rateLimiter, [
  body('claim').isString().notEmpty(),
  body('proof').isObject().notEmpty(),
  body('metadata').optional().isObject()
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

    const { claim, proof, metadata = {} } = req.body;

    logger.info('Creating trust statement with zero-knowledge proof', {
      userId: req.user?.id,
      claim,
      proofId: proof?.id
    });

    // Create trust statement
    const trustStatement = await zeroKnowledgeProofSystem.createTrustStatement(claim, proof, metadata);

    res.json({
      success: true,
      data: {
        statementId: trustStatement.id,
        claim: trustStatement.claim,
        proof: trustStatement.proof,
        isValid: trustStatement.isValid,
        verificationResult: trustStatement.verificationResult,
        timestamp: trustStatement.timestamp,
        metadata: trustStatement.metadata
      }
    });

  } catch (error) {
    logger.error('Error creating trust statement', {
      error: error.message,
      userId: req.user?.id,
      claim: req.body?.claim,
      proofId: req.body?.proof?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to create trust statement',
      details: error.message
    });
  }
});

/**
 * GET /api/zk/circuits
 * Get available zero-knowledge circuits
 */
router.get('/circuits', enhancedAuth, rateLimiter, async (req, res) => {
  try {
    logger.info('Getting available zero-knowledge circuits', {
      userId: req.user?.id
    });

    const circuits = zeroKnowledgeProofSystem.getAvailableCircuits();

    res.json({
      success: true,
      data: {
        circuits,
        total: circuits.length,
        supportedTypes: ['trust_threshold', 'credential_validity', 'compliance_check', 'reputation_score', 'consensus_verification']
      }
    });

  } catch (error) {
    logger.error('Error getting zero-knowledge circuits', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get zero-knowledge circuits',
      details: error.message
    });
  }
});

/**
 * GET /api/zk/circuits/:name
 * Get zero-knowledge circuit details
 */
router.get('/circuits/:name', enhancedAuth, rateLimiter, [
  param('name').isString().isIn(['trust_threshold', 'credential_validity', 'compliance_check', 'reputation_score', 'consensus_verification'])
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

    const { name } = req.params;

    logger.info('Getting zero-knowledge circuit details', {
      userId: req.user?.id,
      circuitName: name
    });

    const circuit = zeroKnowledgeProofSystem.getCircuitDetails(name);

    if (!circuit) {
      return res.status(404).json({
        success: false,
        error: 'Circuit not found',
        details: `Circuit ${name} not found`
      });
    }

    res.json({
      success: true,
      data: circuit
    });

  } catch (error) {
    logger.error('Error getting zero-knowledge circuit details', {
      error: error.message,
      userId: req.user?.id,
      circuitName: req.params?.name
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get zero-knowledge circuit details',
      details: error.message
    });
  }
});

/**
 * POST /api/zk/trusted-setup
 * Generate trusted setup for a circuit
 */
router.post('/trusted-setup', enhancedAuth, rateLimiter, [
  body('circuit').isString().isIn(['trust_threshold', 'credential_validity', 'compliance_check', 'reputation_score', 'consensus_verification'])
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

    const { circuit } = req.body;

    logger.info('Generating trusted setup for circuit', {
      userId: req.user?.id,
      circuit
    });

    // Generate trusted setup
    const setup = await zeroKnowledgeProofSystem.generateTrustedSetup(circuit);

    res.json({
      success: true,
      data: {
        circuit,
        setupGenerated: true,
        verificationKeyAvailable: true,
        timestamp: new Date()
      }
    });

  } catch (error) {
    logger.error('Error generating trusted setup', {
      error: error.message,
      userId: req.user?.id,
      circuit: req.body?.circuit
    });

    res.status(500).json({
      success: false,
      error: 'Failed to generate trusted setup',
      details: error.message
    });
  }
});

export default router;