import { Request, Response } from 'express';
import { promisify } from 'util';
import { redisClient } from '../utils/redis.js';
import { logger } from '../utils/logger.js';

// Framework detection types
interface FrameworkDetection {
  id: string;
  framework: string;
  version: string;
  confidence: number;
  category: 'bias' | 'fairness' | 'transparency' | 'privacy' | 'accountability';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  recommendations: string[];
  timestamp: string;
  status: 'active' | 'resolved' | 'mitigated';
  agentId: string;
}

interface ComplianceMetrics {
  framework: string;
  score: number;
  requirements: number;
  passed: number;
  failed: number;
  pending: number;
  lastUpdated: string;
}

interface AnalyticsMetrics {
  totalFrameworks: number;
  activeDetections: number;
  complianceScore: number;
  auditCoverage: number;
  trend: 'up' | 'down' | 'stable';
  lastCalculated: string;
}

interface TrendData {
  date: string;
  detections: number;
  compliance: number;
  coverage: number;
}

// Mock framework detection data
const mockDetections: FrameworkDetection[] = [
  {
    id: 'det-001',
    framework: 'IEEE 2857',
    version: '2021',
    confidence: 0.89,
    category: 'bias',
    severity: 'high',
    description: 'Potential bias detected in training data distribution',
    recommendations: [
      'Implement bias detection algorithms',
      'Audit training data for demographic balance',
      'Establish fairness metrics and thresholds'
    ],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    agentId: 'agent-001'
  },
  {
    id: 'det-002',
    framework: 'EU AI Act',
    version: '2024',
    confidence: 0.92,
    category: 'transparency',
    severity: 'medium',
    description: 'Model interpretability below required threshold',
    recommendations: [
      'Implement explainable AI techniques',
      'Add model documentation and decision trees',
      'Provide user-facing explanations'
    ],
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    status: 'mitigated',
    agentId: 'agent-002'
  },
  {
    id: 'det-003',
    framework: 'NIST AI RMF',
    version: '2023',
    confidence: 0.85,
    category: 'accountability',
    severity: 'low',
    description: 'Governance framework partially implemented',
    recommendations: [
      'Complete governance documentation',
      'Establish regular audit procedures',
      'Define clear responsibility matrices'
    ],
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'resolved',
    agentId: 'agent-003'
  }
];

// Mock compliance data
const mockComplianceData: ComplianceMetrics[] = [
  {
    framework: 'IEEE 2857',
    score: 0.78,
    requirements: 25,
    passed: 19,
    failed: 4,
    pending: 2,
    lastUpdated: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
  },
  {
    framework: 'EU AI Act',
    score: 0.65,
    requirements: 42,
    passed: 27,
    failed: 12,
    pending: 3,
    lastUpdated: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
  },
  {
    framework: 'NIST AI RMF',
    score: 0.82,
    requirements: 18,
    passed: 15,
    failed: 2,
    pending: 1,
    lastUpdated: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
  },
  {
    framework: 'ISO 42001',
    score: 0.71,
    requirements: 35,
    passed: 25,
    failed: 8,
    pending: 2,
    lastUpdated: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Mock trend data
const generateTrendData = (): TrendData[] => {
  const data: TrendData[] = [];
  const now = Date.now();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now - i * 24 * 60 * 60 * 1000);
    data.push({
      date: date.toISOString().split('T')[0],
      detections: Math.floor(Math.random() * 15) + 5,
      compliance: Math.floor(Math.random() * 30) + 65,
      coverage: Math.floor(Math.random() * 25) + 70
    });
  }
  
  return data;
};

export class AnalyticsService {
  private static instance: AnalyticsService;
  private trendData: TrendData[] = generateTrendData();

  private constructor() {}

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  /**
   * Get analytics metrics overview
   */
  async getAnalyticsMetrics(): Promise<AnalyticsMetrics> {
    try {
      // Calculate metrics from mock data
      const totalFrameworks = mockComplianceData.length;
      const activeDetections = mockDetections.filter(d => d.status === 'active').length;
      const avgComplianceScore = mockComplianceData.reduce((sum, item) => sum + item.score, 0) / mockComplianceData.length;
      const avgCoverage = this.trendData[this.trendData.length - 1]?.coverage || 75;

      // Determine trend based on recent data
      const recentCompliance = this.trendData.slice(-7).map(d => d.compliance);
      const olderCompliance = this.trendData.slice(-14, -7).map(d => d.compliance);
      const avgRecent = recentCompliance.reduce((a, b) => a + b, 0) / recentCompliance.length;
      const avgOlder = olderCompliance.reduce((a, b) => a + b, 0) / olderCompliance.length;
      
      let trend: 'up' | 'down' | 'stable' = 'stable';
      if (avgRecent > avgOlder + 2) trend = 'up';
      else if (avgRecent < avgOlder - 2) trend = 'down';

      return {
        totalFrameworks,
        activeDetections,
        complianceScore: avgComplianceScore,
        auditCoverage: avgCoverage / 100,
        trend,
        lastCalculated: new Date().toISOString()
      };
    } catch (error) {
      logger.error('Error calculating analytics metrics:', error);
      throw error;
    }
  }

  /**
   * Get framework detections with filtering
   */
  async getFrameworkDetections(
    framework?: string,
    category?: string,
    severity?: string,
    status?: string,
    limit: number = 50
  ): Promise<FrameworkDetection[]> {
    try {
      let filtered = [...mockDetections];

      if (framework && framework !== 'all') {
        filtered = filtered.filter(d => d.framework.toLowerCase().includes(framework.toLowerCase()));
      }

      if (category && category !== 'all') {
        filtered = filtered.filter(d => d.category === category);
      }

      if (severity && severity !== 'all') {
        filtered = filtered.filter(d => d.severity === severity);
      }

      if (status && status !== 'all') {
        filtered = filtered.filter(d => d.status === status);
      }

      return filtered.slice(0, limit);
    } catch (error) {
      logger.error('Error filtering framework detections:', error);
      throw error;
    }
  }

  /**
   * Get compliance data by framework
   */
  async getComplianceData(framework?: string): Promise<ComplianceMetrics[]> {
    try {
      if (framework && framework !== 'all') {
        return mockComplianceData.filter(d => 
          d.framework.toLowerCase().includes(framework.toLowerCase())
        );
      }
      return mockComplianceData;
    } catch (error) {
      logger.error('Error getting compliance data:', error);
      throw error;
    }
  }

  /**
   * Get trend data for analytics
   */
  async getTrendData(range: string = '30d'): Promise<TrendData[]> {
    try {
      const now = Date.now();
      let days = 30;

      switch (range) {
        case '1d':
          days = 1;
          break;
        case '7d':
          days = 7;
          break;
        case '30d':
          days = 30;
          break;
        case '90d':
          days = 90;
          break;
        default:
          days = 30;
      }

      // Return appropriate slice of trend data
      const startIndex = Math.max(0, this.trendData.length - days);
      return this.trendData.slice(startIndex);
    } catch (error) {
      logger.error('Error getting trend data:', error);
      throw error;
    }
  }

  /**
   * Update detection status
   */
  async updateDetectionStatus(
    detectionId: string, 
    status: 'active' | 'resolved' | 'mitigated'
  ): Promise<FrameworkDetection | null> {
    try {
      const detection = mockDetections.find(d => d.id === detectionId);
      if (detection) {
        detection.status = status;
        detection.timestamp = new Date().toISOString();
        logger.info(`Updated detection ${detectionId} status to ${status}`);
        return detection;
      }
      return null;
    } catch (error) {
      logger.error('Error updating detection status:', error);
      throw error;
    }
  }

  /**
   * Generate analytics report
   */
  async generateReport(): Promise<any> {
    try {
      const [metrics, detections, compliance, trends] = await Promise.all([
        this.getAnalyticsMetrics(),
        this.getFrameworkDetections(),
        this.getComplianceData(),
        this.getTrendData()
      ]);

      return {
        metrics,
        detections: detections.slice(0, 10), // Last 10 detections
        compliance,
        trends: trends.slice(-7), // Last 7 days
        generatedAt: new Date().toISOString(),
        summary: {
          totalDetections: detections.length,
          activeIssues: detections.filter(d => d.status === 'active').length,
          avgComplianceScore: compliance.reduce((sum, c) => sum + c.score, 0) / compliance.length,
          frameworksCovered: compliance.length
        }
      };
    } catch (error) {
      logger.error('Error generating analytics report:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const analyticsService = AnalyticsService.getInstance();

// Controller functions for API routes
export const getAnalyticsMetrics = async (req: Request, res: Response) => {
  try {
    const metrics = await analyticsService.getAnalyticsMetrics();
    res.json(metrics);
  } catch (error) {
    logger.error('Error getting analytics metrics:', error);
    res.status(500).json({ error: 'Failed to retrieve analytics metrics' });
  }
};

export const getFrameworkDetections = async (req: Request, res: Response) => {
  try {
    const { framework, category, severity, status, limit } = req.query;
    const detections = await analyticsService.getFrameworkDetections(
      framework as string,
      category as string,
      severity as string,
      status as string,
      parseInt(limit as string) || 50
    );
    res.json(detections);
  } catch (error) {
    logger.error('Error getting framework detections:', error);
    res.status(500).json({ error: 'Failed to retrieve framework detections' });
  }
};

export const getComplianceData = async (req: Request, res: Response) => {
  try {
    const { framework } = req.query;
    const data = await analyticsService.getComplianceData(framework as string);
    res.json(data);
  } catch (error) {
    logger.error('Error getting compliance data:', error);
    res.status(500).json({ error: 'Failed to retrieve compliance data' });
  }
};

export const getTrendData = async (req: Request, res: Response) => {
  try {
    const { range } = req.query;
    const trends = await analyticsService.getTrendData(range as string);
    res.json(trends);
  } catch (error) {
    logger.error('Error getting trend data:', error);
    res.status(500).json({ error: 'Failed to retrieve trend data' });
  }
};

export const updateDetectionStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['active', 'resolved', 'mitigated'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const detection = await analyticsService.updateDetectionStatus(id, status);
    if (detection) {
      res.json(detection);
    } else {
      res.status(404).json({ error: 'Detection not found' });
    }
  } catch (error) {
    logger.error('Error updating detection status:', error);
    res.status(500).json({ error: 'Failed to update detection status' });
  }
};

export const generateAnalyticsReport = async (req: Request, res: Response) => {
  try {
    const report = await analyticsService.generateReport();
    
    // Set appropriate headers for file download
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="analytics-report-${new Date().toISOString().split('T')[0]}.json"`);
    
    res.json(report);
  } catch (error) {
    logger.error('Error generating analytics report:', error);
    res.status(500).json({ error: 'Failed to generate analytics report' });
  }
};