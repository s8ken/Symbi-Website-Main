import { Request, Response, NextFunction } from 'express';

/**
 * Request logging middleware
 */
export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  const requestId = Math.random().toString(36).substring(7);
  
  // Add request ID to headers
  req.headers['x-request-id'] = requestId;
  
  // Log request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Request ID: ${requestId}`);
  
  // Log request body for debugging (in development)
  if (process.env.NODE_ENV === 'development' && req.body && Object.keys(req.body).length > 0) {
    console.log('Request body:', JSON.stringify(req.body, null, 2));
  }
  
  // Override res.end to log response
  const originalEnd = res.end;
  res.end = function(chunk?: any, encoding?: BufferEncoding) {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms) - Request ID: ${requestId}`);
    
    // Call original end
    originalEnd.call(this, chunk, encoding);
  };
  
  next();
};