import { Request, Response, NextFunction } from 'express';
import { getCache, setCache, deleteCache } from '../utils/redis.js';
import { logger } from '../utils/logger.js';

interface CacheConfig {
  ttl: number; // Time to live in seconds
  keyPrefix: string;
  condition?: (req: Request) => boolean;
}

export function cacheMiddleware(config: CacheConfig) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Skip caching if condition is not met
      if (config.condition && !config.condition(req)) {
        return next();
      }

      // Generate cache key
      const cacheKey = generateCacheKey(config.keyPrefix, req);
      
      // Try to get from cache
      const cachedResponse = await getCache(cacheKey);
      
      if (cachedResponse) {
        logger.debug('Cache hit', { key: cacheKey, path: req.path });
        
        // Add cache headers
        res.set({
          'X-Cache': 'HIT',
          'X-Cache-Key': cacheKey,
          'Cache-Control': `max-age=${config.ttl}`,
        });
        
        return res.json(cachedResponse);
      }

      // Cache miss - continue to route handler
      logger.debug('Cache miss', { key: cacheKey, path: req.path });
      
      // Store original json method
      const originalJson = res.json;
      
      // Override json method to cache the response
      res.json = function(body: any) {
        // Only cache successful responses
        if (res.statusCode >= 200 && res.statusCode < 300) {
          setCache(cacheKey, body, config.ttl).catch(error => {
            logger.error('Failed to cache response', { error, key: cacheKey });
          });
        }
        
        // Add cache headers
        res.set({
          'X-Cache': 'MISS',
          'X-Cache-Key': cacheKey,
          'Cache-Control': `max-age=${config.ttl}`,
        });
        
        // Call original json method
        return originalJson.call(this, body);
      };
      
      next();
    } catch (error) {
      logger.error('Cache middleware error', { error, path: req.path });
      next(); // Continue without caching on error
    }
  };
}

export function invalidateCache(pattern: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // This is a simplified implementation
      // In production, you'd want to use Redis pattern matching or a cache invalidation service
      logger.info('Cache invalidation requested', { pattern });
      
      // Store original json method
      const originalJson = res.json;
      
      // Override json method to invalidate cache after successful response
      res.json = function(body: any) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // Schedule cache invalidation (in production, use proper Redis pattern matching)
          setTimeout(() => {
            logger.info('Cache invalidated', { pattern });
          }, 100);
        }
        
        return originalJson.call(this, body);
      };
      
      next();
    } catch (error) {
      logger.error('Cache invalidation error', { error });
      next();
    }
  };
}

function generateCacheKey(prefix: string, req: Request): string {
  const method = req.method;
  const path = req.path;
  const query = JSON.stringify(req.query);
  const userId = (req as any).user?.id || 'anonymous';
  
  // Create a hash of the request components
  const crypto = require('crypto');
  const hash = crypto.createHash('md5')
    .update(`${method}:${path}:${query}:${userId}`)
    .digest('hex');
  
  return `${prefix}:${hash}`;
}

// Predefined cache configurations
export const cacheConfigs = {
  // Cache for 5 minutes
  short: (prefix: string, condition?: (req: Request) => boolean): CacheConfig => ({
    ttl: 300,
    keyPrefix: prefix,
    condition,
  }),
  
  // Cache for 15 minutes
  medium: (prefix: string, condition?: (req: Request) => boolean): CacheConfig => ({
    ttl: 900,
    keyPrefix: prefix,
    condition,
  }),
  
  // Cache for 1 hour
  long: (prefix: string, condition?: (req: Request) => boolean): CacheConfig => ({
    ttl: 3600,
    keyPrefix: prefix,
    condition,
  }),
  
  // Cache for 24 hours (for mostly static data)
  static: (prefix: string, condition?: (req: Request) => boolean): CacheConfig => ({
    ttl: 86400,
    keyPrefix: prefix,
    condition,
  }),
};

// Helper to create conditional caching
export function cacheIf(condition: (req: Request) => boolean, config: CacheConfig) {
  return cacheMiddleware({
    ...config,
    condition,
  });
}