import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import { Button } from '../ui/button';
import { Shield, TrendingUp, TrendingDown, Activity, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import { useTrustStore } from '../../stores/trustStore';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../lib/utils';
import { useTrustSocket, useAlertSocket } from '../../hooks/useSocket';
import { toast } from 'sonner';

interface TrustMetrics {
  overallScore: number;
  totalVerifications: number;
  activeUsers: number;
  alertsCount: number;
  trend: 'up' | 'down' | 'stable';
}

interface RecentActivity {
  id: string;
  type: 'verification' | 'alert' | 'update';
  message: string;
  timestamp: string;
  severity?: 'low' | 'medium' | 'high';
}

export const TrustDashboard: React.FC = () => {
  const [trustMetrics, setTrustMetrics] = useState<TrustMetrics | null>(null);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [connected] = useState(false);
  const { } = useTrustStore();
  // const overallTrustScore = getOverallTrustScore();

  // Socket.IO integration
  useTrustSocket((data) => {
    // Handle real-time trust updates
    if (data.agentId && data.score !== undefined) {
      setTrustMetrics(prev => prev ? {
        ...prev,
        overallScore: data.score,
        trend: data.trend || 'stable'
      } : null);
      
      // Add to recent activity
      const newActivity: RecentActivity = {
        id: `trust-update-${Date.now()}`,
        type: 'update',
        message: `Trust score updated for agent ${data.agentId}: ${Math.round(data.score * 100)}%`,
        timestamp: new Date().toISOString()
      };
      
      setRecentActivity(prev => [newActivity, ...prev.slice(0, 9)]); // Keep last 10
      
      toast.success(`Trust score updated: ${Math.round(data.score * 100)}%`);
    }
  });

  useAlertSocket((alert) => {
    // Handle security alerts
    const newActivity: RecentActivity = {
      id: `alert-${Date.now()}`,
      type: 'alert',
      message: alert.message || 'Security alert received',
      timestamp: new Date().toISOString(),
      severity: alert.severity || 'medium'
    };
    
    setRecentActivity(prev => [newActivity, ...prev.slice(0, 9)]);
    
    if (alert.severity === 'high' || alert.severity === 'critical') {
      toast.error(alert.message || 'High priority security alert');
    } else {
      toast.warning(alert.message || 'Security alert received');
    }
  });

  // Fetch trust metrics
  const { data: metricsData, isLoading: metricsLoading } = useQuery({
    queryKey: ['trust-metrics'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/trust/metrics');
      return response.data;
    },
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  // Fetch recent activity
  const { data: activityData } = useQuery({
    queryKey: ['recent-activity'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/activity/recent');
      return response.data;
    },
    refetchInterval: 15000, // Refresh every 15 seconds
  });

  useEffect(() => {
    if (metricsData) {
      setTrustMetrics(metricsData);
    }
  }, [metricsData]);

  useEffect(() => {
    if (activityData) {
      setRecentActivity(activityData);
    }
  }, [activityData]);

  const getScoreColor = (score: number) => {
    if (score >= 0.9) return 'text-green-600';
    if (score >= 0.75) return 'text-blue-600';
    if (score >= 0.6) return 'text-yellow-600';
    if (score >= 0.4) return 'text-orange-600';
    return 'text-red-600';
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'verification': return <Shield className="h-4 w-4" />;
      case 'alert': return <AlertTriangle className="h-4 w-4" />;
      case 'update': return <Activity className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string, severity?: string) => {
    if (type === 'alert') {
      switch (severity) {
        case 'high': return 'text-red-600 bg-red-50';
        case 'medium': return 'text-orange-600 bg-orange-50';
        case 'low': return 'text-yellow-600 bg-yellow-50';
      }
    }
    if (type === 'verification') return 'text-green-600 bg-green-50';
    return 'text-blue-600 bg-blue-50';
  };

  if (metricsLoading || !trustMetrics) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Trust Dashboard</h1>
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
            connected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <div className={`h-2 w-2 rounded-full ${
              connected ? 'bg-green-500' : 'bg-red-500'
            } ${connected ? 'animate-pulse' : ''}`} />
            <span>{connected ? 'Live' : 'Disconnected'}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Activity className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Trust Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getScoreColor(trustMetrics.overallScore)}`}>
              {Math.round(trustMetrics.overallScore * 100)}%
            </div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              {trustMetrics.trend === 'up' && <TrendingUp className="h-3 w-3" />}
              {trustMetrics.trend === 'down' && <TrendingDown className="h-3 w-3" />}
              <span>{trustMetrics.trend}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Verifications</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{trustMetrics.totalVerifications}</div>
            <p className="text-xs text-muted-foreground">Completed today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{trustMetrics.activeUsers}</div>
            <p className="text-xs text-muted-foreground">Currently online</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{trustMetrics.alertsCount}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {recentActivity.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No recent activity
              </p>
            ) : (
              recentActivity.map((activity) => (
                <div key={activity.id} className={`flex items-center space-x-3 p-3 rounded-lg ${getActivityColor(activity.type, activity.severity)}`}>
                  <div className="flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
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