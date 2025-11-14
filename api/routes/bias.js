/**
 * SYMBI Bias Detection API Routes
 * Implements REST API endpoints for ML-based bias detection and fairness analysis
 */

import express from 'express';
import { body, query, validationResult } from 'express-validator';
import { biasDetectionService } from '../services/biasDetection.js';
import { enhancedAuth, rateLimiter } from '../middleware/enhancedAuth.js';
import { logger } from '../services/logger.js';

const router = express.Router();

/**
 * POST /api/bias/analyze
 * Analyze data for bias using ML models
 */
router.post('/analyze', enhancedAuth, rateLimiter, [
  body('agentData').isObject().notEmpty(),
  body('historicalData').optional().isArray(),
  body('context').optional().isString().isIn(['general', 'trust_scoring', 'recommendation', 'classification'])
], async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { agentData, historicalData = [], context = 'general' } = req.body;

    logger.info('Starting bias analysis', {
      userId: req.user?.id,
      agentId: agentData?.id,
      context,
      historicalDataLength: historicalData.length
    });

    // Perform bias analysis
    const biasAnalysis = await biasDetectionService.analyzeBias(
      agentData,
      historicalData,
      context
    );

    res.json({
      success: true,
      data: {
        bias_detected: biasAnalysis.bias_detected,
        bias_types: biasAnalysis.bias_types,
        confidence_scores: biasAnalysis.confidence_scores,
        severity_levels: biasAnalysis.severity_levels,
        affected_metrics: biasAnalysis.affected_metrics,
        recommendations: biasAnalysis.recommendations,
        fairness_score: biasAnalysis.fairness_score,
        analysis_timestamp: biasAnalysis.analysis_timestamp
      }
    });

  } catch (error) {
    logger.error('Error during bias analysis', {
      error: error.message,
      userId: req.user?.id,
      agentId: req.body?.agentData?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to perform bias analysis',
      details: error.message
    });
  }
});

/**
 * POST /api/bias/fairness-metrics
 * Calculate fairness metrics for bias analysis
 */
router.post('/fairness-metrics', enhancedAuth, rateLimiter, [
  body('agentData').isObject().notEmpty(),
  body('biasAnalysis').isObject().notEmpty()
], async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { agentData, biasAnalysis } = req.body;

    logger.info('Calculating fairness metrics', {
      userId: req.user?.id,
      agentId: agentData?.id,
      bias_detected: biasAnalysis?.bias_detected
    });

    // Calculate fairness metrics
    const fairnessMetrics = await biasDetectionService.calculateFairnessMetrics(
      agentData,
      biasAnalysis
    );

    res.json({
      success: true,
      data: {
        demographic_parity: fairnessMetrics.demographic_parity,
        equalized_odds: fairnessMetrics.equalized_odds,
        calibration: fairnessMetrics.calibration,
        individual_fairness: fairnessMetrics.individual_fairness,
        group_fairness: fairnessMetrics.group_fairness,
        overall_fairness_score: fairnessMetrics.overall_fairness_score,
        timestamp: fairnessMetrics.timestamp
      }
    });

  } catch (error) {
    logger.error('Error calculating fairness metrics', {
      error: error.message,
      userId: req.user?.id,
      agentId: req.body?.agentData?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to calculate fairness metrics',
      details: error.message
    });
  }
});

/**
 * GET /api/bias/statistics
 * Get bias detection statistics
 */
router.get('/statistics', enhancedAuth, rateLimiter, async (req, res) => {
  try {
    logger.info('Getting bias detection statistics', {
      userId: req.user?.id
    });

    const statistics = biasDetectionService.getBiasStatistics();

    res.json({
      success: true,
      data: statistics
    });

  } catch (error) {
    logger.error('Error getting bias statistics', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get bias statistics',
      details: error.message
    });
  }
});

/**
 * GET /api/bias/types
 * Get supported bias types
 */
router.get('/types', enhancedAuth, rateLimiter, async (req, res) => {
  try {
    logger.info('Getting supported bias types', {
      userId: req.user?.id
    });

    const biasTypes = [
      {
        type: 'demographic_bias',
        description: 'Bias related to demographic characteristics such as age, gender, ethnicity',
        detection_methods: ['statistical_parity', 'demographic_parity', 'equalized_odds'],
        severity_indicators: ['performance_variance', 'representation_imbalance']
      },
      {
        type: 'temporal_bias',
        description: 'Bias that occurs over time due to data drift or model degradation',
        detection_methods: ['drift_detection', 'performance_monitoring', 'temporal_analysis'],
        severity_indicators: ['performance_decline', 'concept_drift', 'data_drift']
      },
      {
        type: 'geographic_bias',
        description: 'Bias related to geographic location or regional differences',
        detection_methods: ['regional_analysis', 'geographic_parity', 'location_aware_testing'],
        severity_indicators: ['regional_performance_variance', 'cultural_inappropriateness']
      },
      {
        type: 'behavioral_bias',
        description: 'Bias related to user behavior patterns and interaction styles',
        detection_methods: ['behavioral_analysis', 'pattern_detection', 'interaction_modeling'],
        severity_indicators: ['behavioral_clustering', 'interaction_bias', 'preference_discrimination']
      },
      {
        type: 'algorithmic_bias',
        description: 'Bias inherent in the algorithm design or implementation',
        detection_methods: ['algorithm_audit', 'code_review', 'fairness_testing'],
        severity_indicators: ['systematic_errors', 'unfair_outcomes', 'discriminatory_patterns']
      }
    ];

    res.json({
      success: true,
      data: biasTypes
    });

  } catch (error) {
    logger.error('Error getting bias types', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get bias types',
      details: error.message
    });
  }
});

/**
 * POST /api/bias/mitigation-strategies
 * Get bias mitigation strategies
 */
router.post('/mitigation-strategies', enhancedAuth, rateLimiter, [
  body('biasTypes').isArray().notEmpty(),
  body('severity').optional().isIn(['low', 'medium', 'high'])
], async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { biasTypes, severity = 'medium' } = req.body;

    logger.info('Getting bias mitigation strategies', {
      userId: req.user?.id,
      biasTypes,
      severity
    });

    // Generate mitigation strategies based on bias types and severity
    const strategies = this.generateMitigationStrategies(biasTypes, severity);

    res.json({
      success: true,
      data: {
        strategies,
        biasTypes,
        severity,
        implementation_priority: this.getImplementationPriority(severity, biasTypes.length)
      }
    });

  } catch (error) {
    logger.error('Error getting mitigation strategies', {
      error: error.message,
      userId: req.user?.id,
      biasTypes: req.body?.biasTypes
    });

    res.status(500).json({
      success: false,
      error: 'Failed to get mitigation strategies',
      details: error.message
    });
  }
});

/**
 * Helper method to generate mitigation strategies
 */
private generateMitigationStrategies(biasTypes: string[], severity: string): string[] {
  const strategies = new Set<string>();

  // General strategies
  strategies.add('Regular bias auditing and monitoring');
  strategies.add('Diverse and representative training data');
  strategies.add('Fairness-aware algorithm implementation');
  strategies.add('Transparent and explainable AI practices');

  // Bias-specific strategies
  if (biasTypes.includes('demographic_bias')) {
    strategies.add('Implement demographic parity constraints');
    strategies.add('Use fairness constraints in optimization');
    strategies.add('Regular demographic representation analysis');
  }

  if (biasTypes.includes('temporal_bias')) {
    strategies.add('Implement drift detection mechanisms');
    strategies.add('Regular model retraining schedules');
    strategies.add('Temporal validation and testing');
  }

  if (biasTypes.includes('geographic_bias')) {
    strategies.add('Increase geographic diversity in data');
    strategies.add('Region-specific validation and testing');
    strategies.add('Cultural context consideration');
  }

  if (biasTypes.includes('behavioral_bias')) {
    strategies.add('Diverse user interaction patterns');
    strategies.add('Behavioral fairness testing');
    strategies.add('Multi-modal interaction analysis');
  }

  if (biasTypes.includes('algorithmic_bias')) {
    strategies.add('Algorithm audit and review processes');
    strategies.add('Bias testing in algorithm design');
    strategies.add('Fairness-aware algorithm selection');
  }

  // Severity-based strategies
  if (severity === 'high') {
    strategies.add('Immediate bias remediation required');
    strategies.add('Stop deployment until bias is addressed');
    strategies.add('Expert review and consultation');
    strategies.add('Comprehensive bias audit');
  } else if (severity === 'medium') {
    strategies.add('Priority bias mitigation implementation');
    strategies.add('Enhanced monitoring and tracking');
    strategies.add('Stakeholder review and feedback');
  }

  return Array.from(strategies);
}

/**
 * Helper method to get implementation priority
 */
private getImplementationPriority(severity: string, biasTypeCount: number): string {
  if (severity === 'high' || biasTypeCount > 3) {
    return 'immediate';
  } else if (severity === 'medium' || biasTypeCount > 1) {
    return 'high';
  } else {
    return 'medium';
  }
}

export default router;