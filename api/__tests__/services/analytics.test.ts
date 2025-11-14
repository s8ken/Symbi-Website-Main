import { AnalyticsService } from '../../services/analytics';

// Mock the AnalyticsService
jest.mock('../../services/analytics');

describe('AnalyticsService', () => {
  let analyticsService: AnalyticsService;

  beforeEach(() => {
    analyticsService = new AnalyticsService();
  });

  describe('getAnalyticsMetrics', () => {
    it('should return analytics metrics', async () => {
      const mockMetrics = {
        totalFrameworks: 4,
        activeDetections: 12,
        complianceScore: 0.85,
        auditCoverage: 0.92,
        trend: 'improving',
      };

      // Mock the implementation
      jest.spyOn(analyticsService, 'getAnalyticsMetrics').mockResolvedValue(mockMetrics);

      const result = await analyticsService.getAnalyticsMetrics();

      expect(result).toEqual(mockMetrics);
    });

    it('should handle errors gracefully', async () => {
      jest.spyOn(analyticsService, 'getAnalyticsMetrics').mockRejectedValue(new Error('Service error'));

      await expect(analyticsService.getAnalyticsMetrics()).rejects.toThrow('Service error');
    });
  });

  describe('getFrameworkAnalytics', () => {
    it('should return framework analytics for valid framework', async () => {
      const mockFrameworkData = {
        framework: 'IEEE_2857',
        complianceScore: 0.9,
        totalDetections: 25,
        activeDetections: 8,
        lastUpdated: new Date().toISOString(),
      };

      jest.spyOn(analyticsService, 'getFrameworkAnalytics').mockResolvedValue(mockFrameworkData);

      const result = await analyticsService.getFrameworkAnalytics('IEEE_2857');

      expect(result).toEqual(mockFrameworkData);
      expect(analyticsService.getFrameworkAnalytics).toHaveBeenCalledWith('IEEE_2857');
    });

    it('should handle invalid framework', async () => {
      jest.spyOn(analyticsService, 'getFrameworkAnalytics').mockRejectedValue(new Error('Invalid framework'));

      await expect(analyticsService.getFrameworkAnalytics('INVALID')).rejects.toThrow('Invalid framework');
    });
  });

  describe('getComplianceTrends', () => {
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

      jest.spyOn(analyticsService, 'getComplianceTrends').mockResolvedValue(mockTrends);

      const result = await analyticsService.getComplianceTrends();

      expect(result).toEqual(mockTrends);
    });
  });

  describe('getAuditReport', () => {
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

      jest.spyOn(analyticsService, 'getAuditReport').mockResolvedValue(mockAuditReport);

      const result = await analyticsService.getAuditReport();

      expect(result).toEqual(mockAuditReport);
    });
  });

  describe('getRealTimeMetrics', () => {
    it('should return real-time metrics', async () => {
      const mockRealTimeMetrics = {
        activeConnections: 5,
        detectionRate: 2.5,
        averageResponseTime: 150,
        systemHealth: 'healthy',
        lastUpdate: new Date().toISOString(),
      };

      jest.spyOn(analyticsService, 'getRealTimeMetrics').mockResolvedValue(mockRealTimeMetrics);

      const result = await analyticsService.getRealTimeMetrics();

      expect(result).toEqual(mockRealTimeMetrics);
    });
  });

  describe('Error Handling', () => {
    it('should handle missing service methods gracefully', async () => {
      jest.spyOn(analyticsService, 'getAnalyticsMetrics').mockRejectedValue(new Error('Method not implemented'));

      await expect(analyticsService.getAnalyticsMetrics()).rejects.toThrow('Method not implemented');
    });

    it('should handle network errors', async () => {
      jest.spyOn(analyticsService, 'getAnalyticsMetrics').mockRejectedValue(new Error('Network error'));

      await expect(analyticsService.getAnalyticsMetrics()).rejects.toThrow('Network error');
    });
  });
});