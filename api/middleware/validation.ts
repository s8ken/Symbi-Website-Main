import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';

export function validateRequest(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const details = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message,
        value: detail.context?.value,
      }));

      throw new SYMBIError(
        'Request validation failed',
        ErrorCodes.VALIDATION_ERROR,
        400,
        { details }
      );
    }

    req.body = value;
    next();
  };
}

// Common validation schemas
export const trustDeclarationSchema = Joi.object({
  agentId: Joi.string().required().min(1).max(100),
  trustScore: Joi.number().required().min(0).max(1),
  confidence: Joi.number().required().min(0).max(1),
  factors: Joi.object({
    technical: Joi.number().min(0).max(1).optional(),
    ethical: Joi.number().min(0).max(1).optional(),
    operational: Joi.number().min(0).max(1).optional(),
    transparency: Joi.number().min(0).max(1).optional(),
    security: Joi.number().min(0).max(1).optional(),
    compliance: Joi.number().min(0).max(1).optional(),
  }).optional(),
  evidence: Joi.array().items(Joi.object({
    type: Joi.string().valid('technical', 'operational', 'compliance', 'security').required(),
    description: Joi.string().required().max(500),
    url: Joi.string().uri().optional(),
  })).max(10).optional(),
  expiresAt: Joi.date().iso().greater('now').optional(),
});

export const aiOrchestrationSchema = Joi.object({
  prompt: Joi.string().required().min(1).max(10000),
  providers: Joi.array().items(
    Joi.string().valid('openai', 'anthropic', 'perplexity', 'v0')
  ).min(1).max(4).optional(),
  trustThreshold: Joi.number().min(0).max(1).default(0.7).optional(),
  biasCheck: Joi.boolean().default(true).optional(),
  maxTokens: Joi.number().integer().min(1).max(8192).optional(),
  temperature: Joi.number().min(0).max(2).optional(),
});

export const complianceAssessmentSchema = Joi.object({
  agentId: Joi.string().required().min(1).max(100),
  frameworks: Joi.array().items(
    Joi.string().valid('gdpr', 'iso27001', 'ieee2857', 'soc2', 'hipaa', 'ccpa')
  ).min(1).max(10).optional(),
  deepScan: Joi.boolean().default(false).optional(),
  includeRecommendations: Joi.boolean().default(true).optional(),
});

export const didCreationSchema = Joi.object({
  method: Joi.string().valid('key', 'web', 'ethr').default('key').optional(),
  controller: Joi.string().required().min(1).max(100),
  publicKey: Joi.object({
    type: Joi.string().valid('Ed25519VerificationKey2020').required(),
    publicKeyBase58: Joi.string().required().pattern(/^[1-9A-HJ-NP-Za-km-z]+$/),
  }).optional(),
  services: Joi.array().items(Joi.object({
    id: Joi.string().required(),
    type: Joi.string().required(),
    serviceEndpoint: Joi.string().uri().required(),
  })).max(5).optional(),
});

export const credentialIssuanceSchema = Joi.object({
  type: Joi.string().required().min(1).max(100),
  subject: Joi.object().required(),
  issuer: Joi.string().required().min(1).max(200),
  expirationDate: Joi.date().iso().greater('now').optional(),
  credentialSubject: Joi.object().required(),
  evidence: Joi.array().items(Joi.object({
    type: Joi.string().required(),
    id: Joi.string().uri().required(),
  })).optional(),
});