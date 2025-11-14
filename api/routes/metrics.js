import { Router } from 'express';
import { getMetrics, getMetricsJSON } from '../services/metrics.js';
import { apiLimiter } from '../middleware/rateLimiter.js';
import logger from '../utils/logger.js';

const router = Router();

router.get('/metrics', apiLimiter, async (req, res) => {
  try {
    const metrics = await getMetrics();
    
    res.set('Content-Type', 'text/plain');
    res.send(metrics);
  } catch (error) {
    logger.error('Failed to retrieve metrics:', error);
    res.status(500).json({
      error: 'Failed to retrieve metrics',
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

router.get('/metrics/json', apiLimiter, async (req, res) => {
  try {
    const metrics = await getMetricsJSON();
    
    res.json({
      metrics,
      timestamp: new Date().toISOString(),
      _links: {
        prometheus: { href: '/api/metrics' },
      },
    });
  } catch (error) {
    logger.error('Failed to retrieve metrics as JSON:', error);
    res.status(500).json({
      error: 'Failed to retrieve metrics',
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

export default router;