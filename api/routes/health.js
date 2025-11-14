import { Router } from 'express';
import HealthCheckService from '../services/healthCheck.js';
import { apiLimiter } from '../middleware/rateLimiter.js';
import logger from '../utils/logger.js';

const router = Router();
const healthService = new HealthCheckService();

router.get('/health', apiLimiter, async (req, res) => {
  try {
    const healthStatus = await healthService.getHealthStatus();
    
    const statusCode = healthStatus.status === 'healthy' ? 200 : 503;
    
    res.status(statusCode).json({
      ...healthStatus,
      _links: {
        self: { href: '/api/health' },
        detailed: { href: '/api/health/detailed' },
      },
    });
  } catch (error) {
    logger.error('Health check failed:', error);
    res.status(500).json({
      status: 'error',
      error: 'Health check service unavailable',
      timestamp: new Date().toISOString(),
    });
  }
});

router.get('/health/detailed', apiLimiter, async (req, res) => {
  try {
    const detailedHealth = await healthService.getDetailedHealth();
    
    const statusCode = detailedHealth.status === 'healthy' ? 200 : 503;
    
    res.status(statusCode).json({
      ...detailedHealth,
      _links: {
        self: { href: '/api/health/detailed' },
        basic: { href: '/api/health' },
      },
    });
  } catch (error) {
    logger.error('Detailed health check failed:', error);
    res.status(500).json({
      status: 'error',
      error: 'Detailed health check service unavailable',
      timestamp: new Date().toISOString(),
    });
  }
});

router.get('/health/ready', apiLimiter, async (req, res) => {
  try {
    const healthStatus = await healthService.getHealthStatus();
    const isReady = healthStatus.status === 'healthy' && 
                   healthStatus.services.redis.status === 'healthy';
    
    const statusCode = isReady ? 200 : 503;
    
    res.status(statusCode).json({
      ready: isReady,
      status: isReady ? 'ready' : 'not ready',
      timestamp: new Date().toISOString(),
      checks: {
        redis: healthStatus.services.redis.status === 'healthy',
        system: healthStatus.services.system.status === 'healthy',
      },
    });
  } catch (error) {
    logger.error('Readiness check failed:', error);
    res.status(503).json({
      ready: false,
      status: 'not ready',
      error: 'Readiness check failed',
      timestamp: new Date().toISOString(),
    });
  }
});

router.get('/health/live', apiLimiter, (req, res) => {
  res.status(200).json({
    alive: true,
    status: 'alive',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default router;