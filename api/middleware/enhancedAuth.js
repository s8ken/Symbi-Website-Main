/**
 * Enhanced Authentication Middleware with Rate Limiting
 * Provides comprehensive authentication and rate limiting for sensitive operations
 */

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';
import { logger } from '../services/logger.js';

/**
 * Enhanced authentication middleware with additional security checks
 */
export const enhancedAuth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      throw new SYMBIError('No authorization header provided', ErrorCodes.UNAUTHORIZED, 401);
    }

    const token = authHeader.startsWith('Bearer ') 
      ? authHeader.substring(7) 
      : authHeader;

    const secret = process.env.JWT_SECRET || 'your-secret-key';
    
    const decoded = jwt.verify(token, secret) as any;
    
    // Add user information to request
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role || 'user',
      permissions: decoded.permissions || [],
      did: decoded.did,
      walletAddress: decoded.walletAddress
    };

    // Log authentication success for security monitoring
    logger.info('User authenticated', {
      userId: req.user.id,
      email: req.user.email,
      role: req.user.role,
      endpoint: req.path,
      method: req.method,
      ip: req.ip
    });

    next();
  } catch (error) {
    logger.warn('Authentication failed', {
      error: error.message,
      endpoint: req.path,
      method: req.method,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    if (error instanceof jwt.TokenExpiredError) {
      next(new SYMBIError('Token has expired', ErrorCodes.UNAUTHORIZED, 401));
    } else if (error instanceof jwt.JsonWebTokenError) {
      next(new SYMBIError('Invalid token', ErrorCodes.UNAUTHORIZED, 401));
    } else {
      next(error);
    }
  }
};

/**
 * Rate limiter for general API endpoints
 */
export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Rate limit exceeded, please try again later',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    logger.warn('Rate limit exceeded', {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      endpoint: req.path,
      method: req.method
    });
    
    res.status(429).json({
      error: 'Too many requests',
      message: 'Rate limit exceeded, please try again later',
      retryAfter: req.rateLimit?.resetTime
    });
  }
});

/**
 * Strict rate limiter for sensitive operations
 */
export const strictRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Rate limit exceeded for sensitive operation, please try again later',
    retryAfter: '5 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    logger.warn('Strict rate limit exceeded', {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      endpoint: req.path,
      method: req.method
    });
    
    res.status(429).json({
      error: 'Too many requests',
      message: 'Rate limit exceeded for sensitive operation, please try again later',
      retryAfter: req.rateLimit?.resetTime
    });
  }
});

/**
 * Rate limiter for trust handshake operations
 */
export const handshakeRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 20, // limit each IP to 20 handshake operations per windowMs
  keyGenerator: (req: Request) => {
    // Use user ID if authenticated, otherwise use IP
    return req.user?.id || req.ip;
  },
  message: {
    error: 'Too many handshake requests',
    message: 'Handshake rate limit exceeded, please try again later',
    retryAfter: '10 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    logger.warn('Handshake rate limit exceeded', {
      userId: req.user?.id,
      ip: req.ip,
      endpoint: req.path,
      method: req.method
    });
    
    res.status(429).json({
      error: 'Too many handshake requests',
      message: 'Handshake rate limit exceeded, please try again later',
      retryAfter: req.rateLimit?.resetTime
    });
  }
});

/**
 * Rate limiter for oracle operations
 */
export const oracleRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // limit each IP to 50 oracle operations per windowMs
  keyGenerator: (req: Request) => {
    // Use user ID if authenticated, otherwise use IP
    return req.user?.id || req.ip;
  },
  message: {
    error: 'Too many oracle requests',
    message: 'Oracle rate limit exceeded, please try again later',
    retryAfter: '5 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    logger.warn('Oracle rate limit exceeded', {
      userId: req.user?.id,
      ip: req.ip,
      endpoint: req.path,
      method: req.method
    });
    
    res.status(429).json({
      error: 'Too many oracle requests',
      message: 'Oracle rate limit exceeded, please try again later',
      retryAfter: req.rateLimit?.resetTime
    });
  }
});

/**
 * Rate limiter for scoring operations
 */
export const scoringRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // limit each IP to 30 scoring operations per windowMs
  keyGenerator: (req: Request) => {
    // Use user ID if authenticated, otherwise use IP
    return req.user?.id || req.ip;
  },
  message: {
    error: 'Too many scoring requests',
    message: 'Scoring rate limit exceeded, please try again later',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    logger.warn('Scoring rate limit exceeded', {
      userId: req.user?.id,
      ip: req.ip,
      endpoint: req.path,
      method: req.method
    });
    
    res.status(429).json({
      error: 'Too many scoring requests',
      message: 'Scoring rate limit exceeded, please try again later',
      retryAfter: req.rateLimit?.resetTime
    });
  }
});

/**
 * Admin-only middleware
 */
export const adminOnly = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.user) {
    next(new SYMBIError('User not authenticated', ErrorCodes.UNAUTHORIZED, 401));
    return;
  }

  if (req.user.role !== 'admin') {
    logger.warn('Admin access denied', {
      userId: req.user.id,
      role: req.user.role,
      endpoint: req.path,
      method: req.method
    });
    
    next(new SYMBIError('Admin access required', ErrorCodes.FORBIDDEN, 403));
    return;
  }

  next();
};

/**
 * DID verification middleware
 */
export const requireDID = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.user?.did) {
    next(new SYMBIError('DID verification required', ErrorCodes.UNAUTHORIZED, 401));
    return;
  }

  next();
};