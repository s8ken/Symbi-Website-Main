import { Request, Response, NextFunction } from 'express';
import { rateLimit } from 'express-rate-limit';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';
import { logger } from '../utils/logger.js';

/**
 * Advanced rate limiting with different tiers
 */
export function createRateLimiter(options: {
  windowMs: number;
  max: number;
  keyGenerator?: (req: Request) => string;
  message?: string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}) {
  return rateLimit({
    ...options,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      logger.warn('Rate limit exceeded', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        path: req.path,
        method: req.method,
      });

      throw new SYMBIError(
        options.message || 'Too many requests from this IP',
        ErrorCodes.RATE_LIMIT_EXCEEDED,
        429
      );
    },
    onLimitReached: (req, res, options) => {
      logger.warn('Rate limit reached', {
        ip: req.ip,
        path: req.path,
        limit: options.max,
        windowMs: options.windowMs,
      });
    },
  });
}

/**
 * Predefined rate limiters for different use cases
 */
export const rateLimiters = {
  // Strict rate limiting for authentication endpoints
  auth: createRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per window
    keyGenerator: (req) => `auth:${req.ip}`,
    message: 'Too many authentication attempts, please try again later',
    skipSuccessfulRequests: true,
  }),

  // Moderate rate limiting for general API endpoints
  api: createRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    keyGenerator: (req) => `api:${req.ip}`,
    message: 'Too many requests from this IP, please try again later',
  }),

  // Relaxed rate limiting for data fetching
  data: createRateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 1000, // 1000 requests per window
    keyGenerator: (req) => `data:${req.ip}`,
    message: 'Data request limit exceeded, please try again later',
  }),

  // Strict rate limiting for sensitive operations
  sensitive: createRateLimiter({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 10, // 10 requests per window
    keyGenerator: (req) => `sensitive:${req.ip}`,
    message: 'Too many sensitive operations, please try again later',
  }),

  // Rate limiting per user (requires authentication)
  user: createRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // 200 requests per window per user
    keyGenerator: (req) => `user:${(req as any).user?.id || req.ip}`,
    message: 'User request limit exceeded, please try again later',
  }),
};

/**
 * API Key validation middleware
 */
export function validateApiKey(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers['x-api-key'] as string;
  
  if (!apiKey) {
    throw new SYMBIError(
      'API key is required',
      ErrorCodes.UNAUTHORIZED,
      401
    );
  }

  // Validate API key format
  if (!/^[a-zA-Z0-9_-]{32,64}$/.test(apiKey)) {
    throw new SYMBIError(
      'Invalid API key format',
      ErrorCodes.UNAUTHORIZED,
      401
    );
  }

  // In production, validate against database
  // For now, we'll accept any valid format
  logger.debug('API key validated', { apiKey: apiKey.substring(0, 8) + '...' });
  
  next();
}

/**
 * Request sanitization middleware
 */
export function sanitizeRequest(req: Request, res: Response, next: NextFunction) {
  try {
    // Sanitize request body
    if (req.body && typeof req.body === 'object') {
      req.body = sanitizeObject(req.body);
    }

    // Sanitize query parameters
    if (req.query && typeof req.query === 'object') {
      req.query = sanitizeObject(req.query);
    }

    // Sanitize URL parameters
    if (req.params && typeof req.params === 'object') {
      req.params = sanitizeObject(req.params);
    }

    next();
  } catch (error) {
    logger.error('Request sanitization failed', { error });
    throw new SYMBIError(
      'Request sanitization failed',
      ErrorCodes.INVALID_REQUEST,
      400
    );
  }
}

function sanitizeObject(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }

  if (obj && typeof obj === 'object') {
    const sanitized: any = {};
    
    for (const [key, value] of Object.entries(obj)) {
      // Skip prototype pollution attempts
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        continue;
      }

      // Sanitize strings
      if (typeof value === 'string') {
        sanitized[key] = sanitizeString(value);
      } else if (typeof value === 'object') {
        sanitized[key] = sanitizeObject(value);
      } else {
        sanitized[key] = value;
      }
    }
    
    return sanitized;
  }
  
  return obj;
}

function sanitizeString(str: string): string {
  // Remove potential XSS patterns
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:text\/html/gi, '')
    .trim();
}

/**
 * Security headers middleware
 */
export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  // Additional security headers
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' ws: wss:;",
  });

  next();
}

/**
 * Request ID generation middleware
 */
export function requestId(req: Request, res: Response, next: NextFunction) {
  const requestId = req.headers['x-request-id'] || generateRequestId();
  
  req.headers['x-request-id'] = requestId;
  res.setHeader('X-Request-ID', requestId);
  
  next();
}

function generateRequestId(): string {
  const crypto = require('crypto');
  return crypto.randomBytes(16).toString('hex');
}