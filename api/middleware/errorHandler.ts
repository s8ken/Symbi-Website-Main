import { Request, Response, NextFunction } from 'express';
import { SYMBIError, ErrorCodes } from '../../shared/types.js';
import { logger } from '../utils/logger.js';

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction): void {
  // Log the error with full context
  logger.error('Request error', {
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
    request: {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: sanitizeBody(req.body),
      params: req.params,
      query: req.query,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
    },
    timestamp: new Date().toISOString(),
  });

  // Handle SYMBI errors
  if (error instanceof SYMBIError) {
    res.status(error.statusCode).json({
      success: false,
      error: {
        code: error.code,
        message: error.message,
        details: error.details,
      },
      metadata: {
        timestamp: new Date().toISOString(),
        requestId: req.headers['x-request-id'],
        path: req.path,
      },
    });
    return;
  }

  // Handle validation errors
  if (error.name === 'ValidationError') {
    res.status(400).json({
      success: false,
      error: {
        code: ErrorCodes.VALIDATION_ERROR,
        message: 'Validation failed',
        details: error.message,
      },
      metadata: {
        timestamp: new Date().toISOString(),
        requestId: req.headers['x-request-id'],
        path: req.path,
      },
    });
    return;
  }

  // Handle rate limit errors
  if (error.name === 'RateLimitError') {
    res.status(429).json({
      success: false,
      error: {
        code: ErrorCodes.RATE_LIMIT_EXCEEDED,
        message: 'Rate limit exceeded',
        details: 'Too many requests, please try again later',
      },
      metadata: {
        timestamp: new Date().toISOString(),
        requestId: req.headers['x-request-id'],
        path: req.path,
      },
    });
    return;
  }

  // Handle database errors
  if (error.name === 'MongoError' || error.name === 'MongoServerError') {
    const statusCode = (error as any).code === 11000 ? 409 : 500;
    res.status(statusCode).json({
      success: false,
      error: {
        code: ErrorCodes.DATABASE_ERROR,
        message: 'Database operation failed',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      metadata: {
        timestamp: new Date().toISOString(),
        requestId: req.headers['x-request-id'],
        path: req.path,
      },
    });
    return;
  }

  // Default error response
  res.status(500).json({
    success: false,
    error: {
      code: ErrorCodes.INTERNAL_ERROR,
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    },
    metadata: {
      timestamp: new Date().toISOString(),
      requestId: req.headers['x-request-id'],
      path: req.path,
    },
  });
}

function sanitizeBody(body: any): any {
  if (!body || typeof body !== 'object') return body;
  
  const sanitized = { ...body };
  const sensitiveFields = ['password', 'apiKey', 'secret', 'token', 'privateKey'];
  
  for (const field of sensitiveFields) {
    if (sanitized[field]) {
      sanitized[field] = '[REDACTED]';
    }
  }
  
  return sanitized;
}