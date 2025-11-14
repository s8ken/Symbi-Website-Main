import React, { useState, useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { EnhancedAlert, EnhancedMetricCard, EnhancedProgressBar, LoadingSpinner } from '../components/ui/enhanced';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Shield, TrendingUp, AlertTriangle, CheckCircle, Activity, Users, Target, Zap } from 'lucide-react';

interface RealTimeMetrics {
  trustScore: number;
  complianceRate: number;
  activeAgents: number;
  biasAlerts: number;
  apiRequests: number;
  averageLatency: number;
}

interface AgentStatus {
  id: string;
  name: string;
  provider: string;
  trustScore: number;
  status: 'active' | 'warning' | 'error';
  lastSeen: string;
  biasScore: number;
  complianceScore: number;
}

interface Alert {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}

export function EnhancedDashboard() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [metrics, setMetrics] = useState<RealTimeMetrics>({
    trustScore: 85.8,
    complianceRate: 92.0,
    activeAgents: 4,
    biasAlerts: 3,
    apiRequests: 1247,
    averageLatency: 145,
  });
  const [agents, setAgents] = useState<AgentStatus[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');

  // Historical data for charts
  const [trustHistory, setTrustHistory] = useState<any[]>([]);
  const [complianceHistory, setComplianceHistory] = useState<any[]>([]);
  const [apiUsageData, setApiUsageData] = useState<any[]>([]);

  // Initialize WebSocket connection
  useEffect(() => {
    const newSocket = io('http://localhost:5000', {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    newSocket.on('connect', () => {
      console.log('Connected to SYMBI platform');
      setIsConnected(true);
      setLoading(false);
      
      // Subscribe to real-time updates
      newSocket.emit('subscribe:trust');
      newSocket.emit('subscribe:compliance');
      newSocket.emit('subscribe:ai');
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from SYMBI platform');
      setIsConnected(false);
    });

    newSocket.on('trust:update', (data) => {
      console.log('Trust update received:', data);
      updateMetrics(data);
    });

    newSocket.on('compliance:update', (data) => {
      console.log('Compliance update received:', data);
      updateComplianceData(data);
    });

    newSocket.on('ai:orchestration:update', (data) => {
      console.log('AI orchestration update received:', data);
      updateOrchestrationData(data);
    });

    newSocket.on('alert', (alert) => {
      console.log('Alert received:', alert);
      addAlert(alert);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  // Initialize mock data
  useEffect(() => {
    // Mock agents data
    setAgents([
      {
        id: 'agent-001',
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        trustScore: 85.2,
        status: 'active',
        lastSeen: '2 min ago',
        biasScore: 12.1,
        complianceScore: 94.5,
      },
      {
        id: 'agent-002',
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        trustScore: 92.8,
        status: 'active',
        lastSeen: '1 min ago',
        biasScore: 8.3,
        complianceScore: 96.2,
      },
      {
        id: 'agent-003',
        name: 'Perplexity API',
        provider: 'Perplexity',
        trustScore: 78.4,
        status: 'warning',
        lastSeen: '5 min ago',
        biasScore: 15.7,
        complianceScore: 89.1,
      },
      {
        id: 'agent-004',
        name: 'v0 Dev',
        provider: 'Vercel',
        trustScore: 88.7,
        status: 'active',
        lastSeen: '30 sec ago',
        biasScore: 9.8,
        complianceScore: 91.3,
      },
    ]);

    // Mock historical data
    setTrustHistory([
      { timestamp: '00:00', score: 82, confidence: 0.85 },
      { timestamp: '04:00', score: 84, confidence: 0.87 },
      { timestamp: '08:00', score: 86, confidence: 0.89 },
      { timestamp: '12:00', score: 88, confidence: 0.91 },
      { timestamp: '16:00', score: 85, confidence: 0.88 },
      { timestamp: '20:00', score: 86, confidence: 0.90 },
      { timestamp: '24:00', score: 85.8, confidence: 0.89 },
    ]);

    setComplianceHistory([
      { framework: 'GDPR', score: 95, color: '#10b981' },
      { framework: 'ISO 27001', score: 88, color: '#3b82f6' },
      { framework: 'IEEE 2857', score: 92, color: '#8b5cf6' },
      { framework: 'SOC 2', score: 85, color: '#f59e0b' },
    ]);

    setApiUsageData([
      { hour: '00', requests: 45, errors: 2 },
      { hour: '04', requests: 38, errors: 1 },
      { hour: '08', requests: 67, errors: 3 },
      { hour: '12', requests: 89, errors: 4 },
      { hour: '16', requests: 76, errors: 2 },
      { hour: '20', requests: 54, errors: 1 },
      { hour: '24', requests: 62, errors: 2 },
    ]);
  }, []);

  const updateMetrics = useCallback((data: any) => {
    setMetrics(prev => ({
      ...prev,
      trustScore: data.trustScore || prev.trustScore,
      biasAlerts: data.biasAlerts !== undefined ? data.biasAlerts : prev.biasAlerts,
      apiRequests: prev.apiRequests + 1,
    }));
  }, []);

  const updateComplianceData = useCallback((data: any) => {
    setMetrics(prev => ({
      ...prev,
      complianceRate: data.complianceRate || prev.complianceRate,
    }));
  }, []);

  const updateOrchestrationData = useCallback((data: any) => {
    // Update agent data based on orchestration results
    if (data.results) {
      setAgents(prev => prev.map(agent => {
        const result = data.results[agent.provider.toLowerCase()];
        if (result) {
          return {
            ...agent,
            trustScore: Math.round(result.trust * 100 * 10) / 10,
            biasScore: Math.round(result.bias * 100 * 10) / 10,
          };
        }
        return agent;
      }));
    }
  }, []);

  const addAlert = useCallback((alert: Alert) => {
    setAlerts(prev => [alert, ...prev.slice(0, 9)]); // Keep only last 10 alerts
  }, []);

  const dismissAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrustColor = (trust: number) => {
    if (trust >= 90) return 'text-green-600';
    if (trust >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner text="Connecting to SYMBI Platform..." size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Connection Status */}
      <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg ${
        isConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm font-medium">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </div>

      {/* Alerts */}
      <div className="fixed top-20 right-4 z-50 w-96 space-y-2">
        {alerts.map((alert) => (
          <EnhancedAlert
            key={alert.id}
            type={alert.type}
            title={alert.title}
            message={alert.message}
            onClose={() => dismissAlert(alert.id)}
            autoClose={true}
            duration={10000}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SYMBI Trust Platform</h1>
          <p className="text-gray-600">Real-time AI trust and compliance monitoring</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <EnhancedMetricCard
            title="Average Trust Score"
            value={metrics.trustScore}
            unit="%"
            trend={{ direction: 'up', value: 2.3, label: 'vs last 24h' }}
            status="success"
            icon={<Shield className="w-6 h-6" />}
          />
          
          <EnhancedMetricCard
            title="Compliance Rate"
            value={metrics.complianceRate}
            unit="%"
            trend={{ direction: 'up', value: 1.2, label: 'vs last 24h' }}
            status="success"
            icon={<CheckCircle className="w-6 h-6" />}
          />
          
          <EnhancedMetricCard
            title="Active Agents"
            value={metrics.activeAgents}
            trend={{ direction: 'neutral', value: 0, label: 'stable' }}
            status="info"
            icon={<Users className="w-6 h-6" />}
          />
          
          <EnhancedMetricCard
            title="Bias Alerts"
            value={metrics.biasAlerts}
            trend={{ direction: 'down', value: -15, label: 'vs last 24h' }}
            status="warning"
            icon={<AlertTriangle className="w-6 h-6" />}
          />
        </div>

        {/* Timeframe Selector */}
        <div className="mb-6">
          <div className="flex space-x-2">
            {(['1h', '24h', '7d', '30d'] as const).map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedTimeframe === timeframe
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trust Score Trends */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Trust Score Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trustHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="confidence" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Compliance Frameworks */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Compliance Frameworks
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={complianceHistory}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="score"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {complianceHistory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* API Usage Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            API Usage & Errors
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={apiUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="requests" fill="#3b82f6" name="Requests" />
              <Bar dataKey="errors" fill="#ef4444" name="Errors" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Agent Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            AI Agent Status
          </h3>
          <div className="space-y-4">
            {agents.map((agent) => (
              <div key={agent.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-gray-900">{agent.name}</p>
                    <p className="text-sm text-gray-600">{agent.provider}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className={`font-semibold ${getTrustColor(agent.trustScore)}`}>
                      {agent.trustScore}%
                    </p>
                    <p className="text-xs text-gray-500">Trust</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-yellow-600">
                      {agent.biasScore}%
                    </p>
                    <p className="text-xs text-gray-500">Bias</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-blue-600">
                      {agent.complianceScore}%
                    </p>
                    <p className="text-xs text-gray-500">Compliance</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}