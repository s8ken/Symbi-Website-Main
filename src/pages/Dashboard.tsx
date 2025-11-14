import React, { useEffect, useState } from 'react';
import { 

  Shield, 
  Activity, 
  Users, 
  CheckCircle,
  AlertTriangle,






  Brain,
  Key,
  FileCheck,

} from 'lucide-react';
import { Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTrustStore } from '../stores/trustStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';


const TRUST_WEIGHTS = {
  technical: 0.25,
  ethical: 0.20,
  operational: 0.20,
  transparency: 0.15,
  security: 0.10,
  compliance: 0.10
};

const Dashboard: React.FC = () => {
  const [isLoading] = useState(false);
  const { agents, getOverallTrustScore, initializeTrustData } = useTrustStore();
  const overallTrustScore = getOverallTrustScore();
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [realTimeUpdates, setRealTimeUpdates] = useState(true);

  useEffect(() => {
    initializeTrustData();
    
    // Simulate real-time updates
    if (realTimeUpdates) {
      const interval = setInterval(() => {
        // Simulate trust score fluctuations

        // This would be handled by the store in a real implementation
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [realTimeUpdates]);

  const trustScoreData = [
    { time: '00:00', score: 0.85, confidence: 0.82 },
    { time: '04:00', score: 0.87, confidence: 0.84 },
    { time: '08:00', score: 0.89, confidence: 0.86 },
    { time: '12:00', score: 0.91, confidence: 0.88 },
    { time: '16:00', score: 0.88, confidence: 0.85 },
    { time: '20:00', score: 0.90, confidence: 0.87 },
    { time: '24:00', score: 0.92, confidence: 0.89 },
  ];

  const pillarData = [
    { name: 'Technical', score: 0.95, color: '#10b981' },
    { name: 'Ethical', score: 0.88, color: '#3b82f6' },
    { name: 'Operational', score: 0.90, color: '#8b5cf6' },
    { name: 'Transparency', score: 0.85, color: '#f59e0b' },
    { name: 'Security', score: 0.98, color: '#ef4444' },
    { name: 'Compliance', score: 0.93, color: '#06b6d4' },
  ];

  const aiProviderData = [
    { name: 'OpenAI', requests: 1250, successRate: 0.95, avgLatency: 0.8 },
    { name: 'Anthropic', requests: 890, successRate: 0.92, avgLatency: 1.2 },
    { name: 'Perplexity', requests: 567, successRate: 0.88, avgLatency: 1.5 },
    { name: 'v0', requests: 432, successRate: 0.91, avgLatency: 0.6 },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'trust_declaration',
      description: 'New trust declaration verified for AI Agent #A123',
      timestamp: '2 minutes ago',
      status: 'success',
      icon: CheckCircle,
    },
    {
      id: 2,
      type: 'bias_detection',
      description: 'Bias analysis completed - Low severity detected',
      timestamp: '5 minutes ago',
      status: 'warning',
      icon: AlertTriangle,
    },
    {
      id: 3,
      type: 'compliance_check',
      description: 'EU AI Act compliance verification passed',
      timestamp: '12 minutes ago',
      status: 'success',
      icon: FileCheck,
    },
    {
      id: 4,
      type: 'did_creation',
      description: 'New DID document created for organization',
      timestamp: '18 minutes ago',
      status: 'info',
      icon: Key,
    },
  ];

  const getTrustScoreColor = (score: number) => {
    if (score >= 0.9) return 'text-green-500';
    if (score >= 0.75) return 'text-blue-500';
    if (score >= 0.6) return 'text-yellow-500';
    if (score >= 0.4) return 'text-orange-500';
    return 'text-red-500';
  // };

  // const getTrustScoreBg = (score: number) => {
  //   if (score >= 0.9) return 'bg-green-500';
  //   if (score >= 0.75) return 'bg-blue-500';
  //   if (score >= 0.6) return 'bg-yellow-500';
  //   if (score >= 0.4) return 'bg-orange-500';
  //   return 'bg-red-500';
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Initializing SYMBI Trust Infrastructure...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            SYMBI Trust Dashboard
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Cryptographic accountability for AI systems
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 text-sm"
          >
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
          <button
            onClick={() => setRealTimeUpdates(!realTimeUpdates)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              realTimeUpdates
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
            }`}
          >
            <div className="flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${realTimeUpdates ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span>Real-time</span>
            </div>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="crypto-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Trust Score</CardTitle>
            <Shield className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {Math.round(overallTrustScore * 100)}%
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <span className="text-green-500">+2.5%</span> from last hour
            </p>
            <Progress value={overallTrustScore * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {agents.length}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              2 AI models, 1 human validator
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Requests</CardTitle>
            <Brain className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              3,139
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <span className="text-green-500">+12.5%</span> success rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <FileCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              94.2%
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              EU AI Act compliant
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Trust Score Trend and Pillar Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Trust Score Trend</CardTitle>
            <CardDescription>24-hour trust score evolution with confidence intervals</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trustScoreData}>
                <defs>
                  <linearGradient id="trustGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="confidence"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fill="url(#confidenceGradient)"
                  name="Confidence"
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                  name="Trust Score"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Six-Pillar Trust Assessment</CardTitle>
            <CardDescription>Current scores across all trust dimensions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pillarData.map((pillar) => (
                <div key={pillar.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {pillar.name}
                    </span>
                    <span className={`text-sm font-semibold ${getTrustScoreColor(pillar.score)}`}>
                      {Math.round(pillar.score * 100)}%
                    </span>
                  </div>
                  <Progress value={pillar.score * 100} className="h-2" />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Weight: {TRUST_WEIGHTS[pillar.name.toLowerCase() as keyof typeof TRUST_WEIGHTS] * 100}%</span>
                    <span className="flex items-center space-x-1">
                      <div 
                        className="h-2 w-2 rounded-full" 
                        style={{ backgroundColor: pillar.color }}
                      />
                      <span>Current</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Provider Performance and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Provider Performance</CardTitle>
            <CardDescription>Multi-model orchestration metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={aiProviderData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="requests" fill="#8b5cf6" name="Requests" />
                <Bar dataKey="successRate" fill="#10b981" name="Success Rate" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">3,139</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Requests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">0.9s</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Latency</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Real-time trust infrastructure events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                const statusColors = {
                  success: 'text-green-500',
                  warning: 'text-yellow-500',
                  error: 'text-red-500',
                  info: 'text-blue-500'
                };
                
                return (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`mt-1 ${statusColors[activity.status as keyof typeof statusColors]}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" size="sm" className="w-full">
                <Activity className="h-4 w-4 mr-2" />
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common trust infrastructure operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="justify-start">
              <Shield className="h-4 w-4 mr-2" />
              Create Trust Declaration
            </Button>
            <Button variant="outline" className="justify-start">
              <Brain className="h-4 w-4 mr-2" />
              Run Bias Analysis
            </Button>
            <Button variant="outline" className="justify-start">
              <Key className="h-4 w-4 mr-2" />
              Generate DID
            </Button>
            <Button variant="outline" className="justify-start">
              <FileCheck className="h-4 w-4 mr-2" />
              Issue VC
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;