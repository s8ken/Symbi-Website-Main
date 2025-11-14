import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card-simple';
import { Badge } from '../ui/badge-simple';
import { Button } from '../ui/button-simple';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  FileText,
  Download,
  Activity,
  CheckCircle
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { axiosInstance } from '../../lib/utils';

interface AnalyticsMetrics {
  totalFrameworks: number;
  activeDetections: number;
  complianceScore: number;
  auditCoverage: number;
  trend: 'up' | 'down' | 'stable';
}

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
}

interface ComplianceData {
  framework: string;
  score: number;
  requirements: number;
  passed: number;
  failed: number;
  pending: number;
}

interface TrendData {
  date: string;
  detections: number;
  compliance: number;
  coverage: number;
}

export const AnalyticsPage: React.FC = () => {
  const [analyticsMetrics, setAnalyticsMetrics] = useState<AnalyticsMetrics | null>(null);
  const [frameworkDetections, setFrameworkDetections] = useState<FrameworkDetection[]>([]);
  const [complianceData, setComplianceData] = useState<ComplianceData[]>([]);
  const [trendData, setTrendData] = useState<TrendData[]>([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('7d');
  const [selectedFramework, setSelectedFramework] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Fetch analytics metrics
  const { data: metricsData, isLoading: metricsLoading } = useQuery({
    queryKey: ['analytics-metrics'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/analytics/metrics');
      return response.data;
    },
    refetchInterval: 300000, // Refresh every 5 minutes
  });

  // Fetch framework detections
  const { data: detectionsData } = useQuery({
    queryKey: ['framework-detections', selectedFramework, selectedCategory],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedFramework !== 'all') params.append('framework', selectedFramework);
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      
      const response = await axiosInstance.get(`/api/analytics/detections?${params}`);
      return response.data;
    },
    refetchInterval: 120000, // Refresh every 2 minutes
  });

  // Fetch compliance data
  const { data: complianceDataResult } = useQuery({
    queryKey: ['compliance-data'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/analytics/compliance');
      return response.data;
    },
    refetchInterval: 300000, // Refresh every 5 minutes
  });

  // Fetch trend data
  const { data: trendDataResult } = useQuery({
    queryKey: ['trend-data', selectedTimeRange],
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/analytics/trends?range=${selectedTimeRange}`);
      return response.data;
    },
    refetchInterval: 300000, // Refresh every 5 minutes
  });

  useEffect(() => {
    if (metricsData) {
      setAnalyticsMetrics(metricsData);
    }
  }, [metricsData]);

  useEffect(() => {
    if (detectionsData) {
      setFrameworkDetections(detectionsData);
    }
  }, [detectionsData]);

  useEffect(() => {
    if (complianceDataResult) {
      setComplianceData(complianceDataResult);
    }
  }, [complianceDataResult]);

  useEffect(() => {
    if (trendDataResult) {
      setTrendData(trendDataResult);
    }
  }, [trendDataResult]);

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return 'text-green-600';
    if (score >= 0.75) return 'text-blue-600';
    if (score >= 0.6) return 'text-yellow-600';
    if (score >= 0.4) return 'text-orange-600';
    return 'text-red-600';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'bias': return 'text-purple-600 bg-purple-100';
      case 'fairness': return 'text-blue-600 bg-blue-100';
      case 'transparency': return 'text-green-600 bg-green-100';
      case 'privacy': return 'text-red-600 bg-red-100';
      case 'accountability': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const exportReport = () => {
    // Generate and download analytics report
    const reportData = {
      metrics: analyticsMetrics,
      detections: frameworkDetections,
      compliance: complianceData,
      trends: trendData,
      generatedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (metricsLoading || !analyticsMetrics) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-96 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Framework detection and compliance analytics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm" onClick={exportReport}>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Time Range</label>
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="border rounded px-3 py-2 text-sm"
              >
                <option value="1d">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Framework</label>
              <select
                value={selectedFramework}
                onChange={(e) => setSelectedFramework(e.target.value)}
                className="border rounded px-3 py-2 text-sm"
              >
                <option value="all">All Frameworks</option>
                <option value="IEEE">IEEE</option>
                <option value="EU">EU AI Act</option>
                <option value="NIST">NIST</option>
                <option value="ISO">ISO 42001</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded px-3 py-2 text-sm"
              >
                <option value="all">All Categories</option>
                <option value="bias">Bias</option>
                <option value="fairness">Fairness</option>
                <option value="transparency">Transparency</option>
                <option value="privacy">Privacy</option>
                <option value="accountability">Accountability</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Frameworks Detected</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsMetrics.totalFrameworks}</div>
            <div className="flex items-center mt-1">
              {analyticsMetrics.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500 mr-1" />}
              {analyticsMetrics.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500 mr-1" />}
              <p className="text-xs text-muted-foreground">
                {analyticsMetrics.trend === 'up' && 'Increasing'}
                {analyticsMetrics.trend === 'down' && 'Decreasing'}
                {analyticsMetrics.trend === 'stable' && 'Stable'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Detections</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsMetrics.activeDetections}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getScoreColor(analyticsMetrics.complianceScore)}`}>
              {Math.round(analyticsMetrics.complianceScore * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Overall compliance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Audit Coverage</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getScoreColor(analyticsMetrics.auditCoverage)}`}>
              {Math.round(analyticsMetrics.auditCoverage * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Systems covered</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Trend Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="detections" stroke="#8884d8" name="Detections" />
                <Line type="monotone" dataKey="compliance" stroke="#82ca9d" name="Compliance %" />
                <Line type="monotone" dataKey="coverage" stroke="#ffc658" name="Coverage %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Compliance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance by Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complianceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="framework" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#8884d8" name="Score %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Framework Detections */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Framework Detections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {frameworkDetections.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No framework detections found</p>
              </div>
            ) : (
              frameworkDetections.map((detection) => (
                <div key={detection.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{detection.framework}</span>
                      <Badge variant="secondary">{detection.version}</Badge>
                      <Badge className={getSeverityColor(detection.severity)}>
                        {detection.severity.toUpperCase()}
                      </Badge>
                      <Badge className={getCategoryColor(detection.category)}>
                        {detection.category.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(detection.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <p className="text-sm mb-3">{detection.description}</p>
                  {detection.recommendations.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-1">Recommendations:</p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        {detection.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    <div className="text-sm text-muted-foreground">
                      Confidence: {Math.round(detection.confidence * 100)}%
                    </div>
                    <Badge variant="outline">{detection.status.toUpperCase()}</Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;