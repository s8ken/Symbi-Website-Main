import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';

const redisClient = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
  enableOfflineQueue: false,
  maxRetriesPerRequest: 3,
});

export const createRateLimiter = (windowMs, max, message, keyGenerator) => {
  return rateLimit({
    store: new RedisStore({
      client: redisClient,
      prefix: 'rl:',
    }),
    windowMs,
    max,
    message: {
      error: 'Too Many Requests',
      message,
      retryAfter: Math.ceil(windowMs / 1000),
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: keyGenerator || ((req) => {
      return req.ip || req.connection.remoteAddress || 'unknown';
    }),
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too Many Requests',
        message,
        retryAfter: Math.ceil(windowMs / 1000),
      });
    },
  });
};

export const apiLimiter = createRateLimiter(
  15 * 60 * 1000, // 15 minutes
  100, // limit each IP to 100 requests per windowMs
  'Too many API requests from this IP, please try again later.'
);

export const authLimiter = createRateLimiter(
  15 * 60 * 1000, // 15 minutes
  5, // limit each IP to 5 requests per windowMs
  'Too many authentication attempts, please try again later.'
);

export const trustScoreLimiter = createRateLimiter(
  60 * 1000, // 1 minute
  30, // limit each IP to 30 requests per minute
  'Too many trust score requests, please slow down.'
);

export const aiOrchestrationLimiter = createRateLimiter(
  60 * 1000, // 1 minute
  10, // limit each IP to 10 AI requests per minute
  'Too many AI orchestration requests, please slow down.'
);

export const sensitiveOperationLimiter = createRateLimiter(
  5 * 60 * 1000, // 5 minutes
  3, // limit each IP to 3 sensitive operations per window
  'Too many sensitive operations, please wait before trying again.'
);