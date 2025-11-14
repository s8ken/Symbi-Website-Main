import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Activity,
  Clock,
  TrendingUp,
  TrendingDown,
  Filter,
  RefreshCw
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../lib/utils';

interface SecurityEvent {
  id: string;
  type: 'threat' | 'anomaly' | 'block' | 'allow';
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  target: string;
  description: string;
  timestamp: string;
  status: 'active' | 'resolved' | 'false_positive';
  action?: string;
}

interface SecurityMetrics {
  totalEvents: number;
  threatsBlocked: number;
  anomaliesDetected: number;
  falsePositives: number;
  threatRate: number;
  responseTime: number;
}



export const SecurityMonitor: React.FC = () => {
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetrics | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterSeverity, setFilterSeverity] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);

  // Fetch security events
  const { data: eventsData, refetch: refetchEvents } = useQuery({
    queryKey: ['security-events', filterType, filterSeverity, filterStatus],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filterType !== 'all') params.append('type', filterType);
      if (filterSeverity !== 'all') params.append('severity', filterSeverity);
      if (filterStatus !== 'all') params.append('status', filterStatus);
      
      const response = await axiosInstance.get(`/api/security/events?${params}`);
      return response.data;
    },
    refetchInterval: autoRefresh ? 10000 : false, // Refresh every 10 seconds
  });

  // Fetch security metrics
  const { data: metricsData } = useQuery({
    queryKey: ['security-metrics'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/security/metrics');
      return response.data;
    },
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  // Fetch threat trends
  const { data: trendsData } = useQuery({
    queryKey: ['threat-trends'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/security/trends');
      return response.data;
    },
    refetchInterval: 60000, // Refresh every minute
  });

  useEffect(() => {
    if (eventsData) {
      setSecurityEvents(eventsData);
    }
  }, [eventsData]);

  useEffect(() => {
    if (metricsData) {
      setSecurityMetrics(metricsData);
    }
  }, [metricsData]);

  useEffect(() => {
    if (trendsData) {
      // Handle trends data if needed
      console.log('Threat trends updated:', trendsData);
    }
  }, [trendsData]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'threat': return <AlertTriangle className="h-4 w-4" />;
      case 'anomaly': return <Activity className="h-4 w-4" />;
      case 'block': return <XCircle className="h-4 w-4" />;
      case 'allow': return <CheckCircle className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'threat': return 'text-red-600 bg-red-50';
      case 'anomaly': return 'text-orange-600 bg-orange-50';
      case 'block': return 'text-gray-600 bg-gray-50';
      case 'allow': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-600';
      case 'resolved': return 'text-green-600';
      case 'false_positive': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const handleEventAction = async (eventId: string, action: string) => {
    try {
      await axiosInstance.post(`/api/security/events/${eventId}/action`, { action });
      refetchEvents();
    } catch (error) {
      console.error('Failed to execute action:', error);
    }
  };

  const clearFilters = () => {
    setFilterType('all');
    setFilterSeverity('all');
    setFilterStatus('all');
  };

  if (!securityMetrics) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Security Monitor</h1>
          <p className="text-muted-foreground">Real-time security event monitoring and threat detection</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={autoRefresh ? 'default' : 'outline'}
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${autoRefresh ? 'animate-spin' : ''}`} />
            Auto Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={() => refetchEvents()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Manual Refresh
          </Button>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{securityMetrics.totalEvents.toLocaleString()}</div>
            <div className="flex items-center mt-1">
              {securityMetrics.threatRate > 0 ? (
                <>
                  <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                  <p className="text-xs text-muted-foreground">Threat rate: {securityMetrics.threatRate}%</p>
                </>
              ) : (
                <>
                  <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                  <p className="text-xs text-muted-foreground">No active threats</p>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Threats Blocked</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {securityMetrics.threatsBlocked.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Successfully blocked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anomalies Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {securityMetrics.anomaliesDetected.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Under investigation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {securityMetrics.responseTime}ms
            </div>
            <p className="text-xs text-muted-foreground">Average response</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Security Events</span>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-normal">Filters</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option value="all">All Types</option>
                <option value="threat">Threats</option>
                <option value="anomaly">Anomalies</option>
                <option value="block">Blocks</option>
                <option value="allow">Allows</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Severity</label>
              <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option value="all">All Severities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="resolved">Resolved</option>
                <option value="false_positive">False Positive</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {securityEvents.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Shield className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No security events match your filters</p>
              </div>
            ) : (
              securityEvents.map((event) => (
                <div key={event.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className={`p-2 rounded-full ${getTypeColor(event.type)}`}>
                        {getTypeIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{event.description}</span>
                          <Badge className={getSeverityColor(event.severity)}>
                            {event.severity.toUpperCase()}
                          </Badge>
                          <Badge variant="outline">{event.type.toUpperCase()}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Source: {event.source} → Target: {event.target}</div>
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {new Date(event.timestamp).toLocaleString()}
                            </span>
                            <span className={`font-medium ${getStatusColor(event.status)}`}>
                              {event.status.replace('_', ' ').toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {event.status === 'active' && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEventAction(event.id, 'resolve')}
                          >
                            Resolve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEventAction(event.id, 'false_positive')}
                          >
                            False Positive
                          </Button>
                        </>
                      )}
                    </div>
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

export default SecurityMonitor;