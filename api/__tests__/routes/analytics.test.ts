import request from 'supertest';
import express from 'express';
import { analyticsRouter } from '../../routes/analytics';
import { AnalyticsService } from '../../services/analytics';

// Mock the AnalyticsService
jest.mock('../../services/analytics');

const mockAnalyticsService = {
  getAnalyticsMetrics: jest.fn(),
  getFrameworkAnalytics: jest.fn(),
  getComplianceTrends: jest.fn(),
  getAuditReport: jest.fn(),
  getRealTimeMetrics: jest.fn(),
};

(AnalyticsService as jest.MockedClass<typeof AnalyticsService>).prototype.getAnalyticsMetrics = mockAnalyticsService.getAnalyticsMetrics;
(AnalyticsService as jest.MockedClass<typeof AnalyticsService>).prototype.getFrameworkAnalytics = mockAnalyticsService.getFrameworkAnalytics;
(AnalyticsService as jest.MockedClass<typeof AnalyticsService>).prototype.getComplianceTrends = mockAnalyticsService.getComplianceTrends;
(AnalyticsService as jest.MockedClass<typeof AnalyticsService>).prototype.getAuditReport = mockAnalyticsService.getAuditReport;
(AnalyticsService as jest.MockedClass<typeof AnalyticsService>).prototype.getRealTimeMetrics = mockAnalyticsService.getRealTimeMetrics;

describe('Analytics API Routes', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/api/analytics', analyticsRouter);
    jest.clearAllMocks();
  });

  describe('GET /api/analytics/metrics', () => {
    it('should return analytics metrics', async () => {
      const mockMetrics = {
        totalFrameworks: 4,
        activeDetections: 12,
        complianceScore: 0.85,
        auditCoverage: 0.92,
        trend: 'improving',
      };

      mockAnalyticsService.getAnalyticsMetrics.mockResolvedValue(mockMetrics);

      const response = await request(app)
        .get('/api/analytics/metrics')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: mockMetrics,
      });
      expect(mockAnalyticsService.getAnalyticsMetrics).toHaveBeenCalled();
    });

    it('should handle service errors', async () => {
      mockAnalyticsService.getAnalyticsMetrics.mockRejectedValue(new Error('Service error'));

      const response = await request(app)
        .get('/api/analytics/metrics')
        .expect(500);

      expect(response.body).toEqual({
        success: false,
        error: 'Failed to fetch analytics metrics',
      });
    });
  });

  describe('GET /api/analytics/frameworks/:framework', () => {
    it('should return framework analytics', async () => {
      const mockFrameworkData = {
        framework: 'IEEE_2857',
        complianceScore: 0.9,
        totalDetections: 25,
        activeDetections: 8,
        lastUpdated: new Date().toISOString(),
      };

      mockAnalyticsService.getFrameworkAnalytics.mockResolvedValue(mockFrameworkData);

      const response = await request(app)
        .get('/api/analytics/frameworks/IEEE_2857')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: mockFrameworkData,
      });
      expect(mockAnalyticsService.getFrameworkAnalytics).toHaveBeenCalledWith('IEEE_2857');
    });

    it('should return 400 for invalid framework', async () => {
      const response = await request(app)
        .get('/api/analytics/frameworks/INVALID')
        .expect(400);

      expect(response.body).toEqual({
        success: false,
        error: 'Invalid framework specified',
      });
    });
  });

  describe('GET /api/analytics/trends', () => {
    it('should return compliance trends', async () => {
      const mockTrends = {
        weekly: [
          { date: '2024-01-01', score: 0.8 },
          { date: '2024-01-08', score: 0.82 },
          { date: '2024-01-15', score: 0.85 },
        ],
        monthly: [
          { date: '2023-10', score: 0.75 },
          { date: '2023-11', score: 0.78 },
          { date: '2023-12', score: 0.82 },
        ],
      };

      mockAnalyticsService.getComplianceTrends.mockResolvedValue(mockTrends);

      const response = await request(app)
        .get('/api/analytics/trends')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: mockTrends,
      });
      expect(mockAnalyticsService.getComplianceTrends).toHaveBeenCalled();
    });
  });

  describe('GET /api/analytics/audit', () => {
    it('should return audit report', async () => {
      const mockAuditReport = {
        frameworks: ['IEEE_2857', 'EU_AI_ACT'],
        totalDetections: 45,
        complianceIssues: 3,
        recommendations: [
          'Update IEEE 2857 detection rules',
          'Review EU AI Act compliance thresholds',
        ],
        generatedAt: new Date().toISOString(),
      };

      mockAnalyticsService.getAuditReport.mockResolvedValue(mockAuditReport);

      const response = await request(app)
        .get('/api/analytics/audit')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: mockAuditReport,
      });
      expect(mockAnalyticsService.getAuditReport).toHaveBeenCalled();
    });
  });

  describe('GET /api/analytics/realtime', () => {
    it('should return real-time metrics', async () => {
      const mockRealTimeMetrics = {
        activeConnections: 5,
        detectionRate: 2.5,
        averageResponseTime: 150,
        systemHealth: 'healthy',
        lastUpdate: new Date().toISOString(),
      };

      mockAnalyticsService.getRealTimeMetrics.mockResolvedValue(mockRealTimeMetrics);

      const response = await request(app)
        .get('/api/analytics/realtime')
        .expect(200);

      expect(response.body).toEqual({
        success: true,
        data: mockRealTimeMetrics,
      });
      expect(mockAnalyticsService.getRealTimeMetrics).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('should handle missing service methods gracefully', async () => {
      mockAnalyticsService.getAnalyticsMetrics.mockRejectedValue(new Error('Method not implemented'));

      const response = await request(app)
        .get('/api/analytics/metrics')
        .expect(500);

      expect(response.body).toEqual({
        success: false,
        error: 'Failed to fetch analytics metrics',
      });
    });

    it('should handle malformed requests', async () => {
      const response = await request(app)
        .post('/api/analytics/metrics')
        .send('invalid json')
        .set('Content-Type', 'application/json')
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });
});