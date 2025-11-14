import express from 'express';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';

const router = express.Router();

/**
 * @route   GET /api/did/methods
 * @desc    Get supported DID methods
 * @access  Public
 */
router.get('/methods', async (req, res, next) => {
  try {
    const methods = [
      {
        method: 'did:web',
        description: 'Web-based DID method using HTTPS',
        specification: 'https://w3c-ccg.github.io/did-method-web/'
      },
      {
        method: 'did:key',
        description: 'Simple DID method using public keys',
        specification: 'https://w3c-ccg.github.io/did-method-key/'
      },
      {
        method: 'did:ethr',
        description: 'Ethereum-based DID method',
        specification: 'https://github.com/decentralized-identity/ethr-did-resolver/blob/master/doc/did-method-spec.md'
      }
    ];

    res.json({
      success: true,
      data: methods,
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
 * @route   POST /api/did/create
 * @desc    Create a new DID
 * @access  Private
 */
router.post('/create', async (req, res, next) => {
  try {
    const { method, options } = req.body;

    if (!method) {
      throw new SYMBIError(
        'Missing required field: method',
        ErrorCodes.INVALID_DID,
        400
      );
    }

    // Mock DID creation
    const did = `did:web:symbi.trust:${Date.now()}`;
    const didDocument = {
      id: did,
      context: ['https://www.w3.org/ns/did/v1'],
      verificationMethod: [{
        id: `${did}#keys-1`,
        type: 'Ed25519VerificationKey2020',
        controller: did,
        publicKeyMultibase: 'z6MkiTB6T7A6S7X8H9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6'
      }],
      authentication: [`${did}#keys-1`],
      assertionMethod: [`${did}#keys-1`],
      service: [{
        id: `${did}#trust-service`,
        type: 'TrustService',
        serviceEndpoint: 'https://symbi.trust/api'
      }],
      created: new Date(),
      updated: new Date()
    };

    res.status(201).json({
      success: true,
      data: {
        did,
        document: didDocument,
        privateKey: 'private-key-placeholder'
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

/**
 * @route   GET /api/did/resolve/:did
 * @desc    Resolve a DID document
 * @access  Public
 */
router.get('/resolve/:did', async (req, res, next) => {
  try {
    const { did } = req.params;

    // Mock DID resolution
    const didDocument = {
      id: did,
      context: ['https://www.w3.org/ns/did/v1'],
      verificationMethod: [{
        id: `${did}#keys-1`,
        type: 'Ed25519VerificationKey2020',
        controller: did,
        publicKeyMultibase: 'z6MkiTB6T7A6S7X8H9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6'
      }],
      authentication: [`${did}#keys-1`],
      assertionMethod: [`${did}#keys-1`],
      service: [{
        id: `${did}#trust-service`,
        type: 'TrustService',
        serviceEndpoint: 'https://symbi.trust/api'
      }],
      created: new Date(),
      updated: new Date()
    };

    res.json({
      success: true,
      data: didDocument,
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
 * @route   POST /api/did/verify
 * @desc    Verify a DID signature
 * @access  Public
 */
router.post('/verify', async (req, res, next) => {
  try {
    const { did, signature, data } = req.body;

    if (!did || !signature || !data) {
      throw new SYMBIError(
        'Missing required fields: did, signature, data',
        ErrorCodes.INVALID_DID,
        400
      );
    }

    // Mock verification
    const isValid = Math.random() > 0.1; // 90% success rate

    res.json({
      success: true,
      data: {
        verified: isValid,
        did,
        signature,
        timestamp: new Date()
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