import express from 'express';
import { 
  getAnalyticsMetrics, 
  getFrameworkDetections, 
  getComplianceData, 
  getTrendData, 
  updateDetectionStatus, 
  generateAnalyticsReport 
} from '../services/analytics.js';
import { authenticateToken } from '../middleware/auth.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Apply authentication to all analytics routes
router.use(authenticateToken);

// Apply rate limiting to analytics endpoints
router.use('/metrics', rateLimiter);
router.use('/detections', rateLimiter);
router.use('/compliance', rateLimiter);
router.use('/trends', rateLimiter);
router.use('/report', rateLimiter);

/**
 * @route   GET /api/analytics/metrics
 * @desc    Get analytics metrics overview
 * @access  Private
 */
router.get('/metrics', getAnalyticsMetrics);

/**
 * @route   GET /api/analytics/detections
 * @desc    Get framework detections with optional filtering
 * @access  Private
 * @query   {string} framework - Filter by framework (IEEE, EU, NIST, ISO)
 * @query   {string} category - Filter by category (bias, fairness, transparency, privacy, accountability)
 * @query   {string} severity - Filter by severity (low, medium, high, critical)
 * @query   {string} status - Filter by status (active, resolved, mitigated)
 * @query   {number} limit - Maximum number of results (default: 50)
 */
router.get('/detections', getFrameworkDetections);

/**
 * @route   GET /api/analytics/compliance
 * @desc    Get compliance data by framework
 * @access  Private
 * @query   {string} framework - Filter by specific framework
 */
router.get('/compliance', getComplianceData);

/**
 * @route   GET /api/analytics/trends
 * @desc    Get trend data for analytics
 * @access  Private
 * @query   {string} range - Time range (1d, 7d, 30d, 90d)
 */
router.get('/trends', getTrendData);

/**
 * @route   PUT /api/analytics/detections/:id/status
 * @desc    Update detection status
 * @access  Private
 * @param   {string} id - Detection ID
 * @body    {string} status - New status (active, resolved, mitigated)
 */
router.put('/detections/:id/status', updateDetectionStatus);

/**
 * @route   GET /api/analytics/report
 * @desc    Generate comprehensive analytics report
 * @access  Private
 */
router.get('/report', generateAnalyticsReport);

/**
 * @route   GET /api/analytics/health
 * @desc    Get analytics system health status
 * @access  Private
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0'
  });
});

export default router;