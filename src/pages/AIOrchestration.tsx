import React, { useState } from 'react';
import { Brain, RefreshCw, BarChart3, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const AIOrchestration: React.FC = () => {
  const [selectedProviders, setSelectedProviders] = useState<string[]>(['openai', 'anthropic']);
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const providers = [
    { id: 'openai', name: 'OpenAI GPT-4', status: 'active', color: 'bg-green-500' },
    { id: 'anthropic', name: 'Anthropic Claude', status: 'active', color: 'bg-blue-500' },
    { id: 'perplexity', name: 'Perplexity AI', status: 'active', color: 'bg-purple-500' },
    { id: 'v0', name: 'V0 by Vercel', status: 'active', color: 'bg-orange-500' }
  ];

  const handleProviderToggle = (providerId: string) => {
    setSelectedProviders(prev => 
      prev.includes(providerId) 
        ? prev.filter(id => id !== providerId)
        : [...prev, providerId]
    );
  };

  const handleAnalyze = async () => {
    if (!inputText.trim() || selectedProviders.length === 0) return;
    
    setIsAnalyzing(true);
    
    // Simulate multi-provider analysis
    setTimeout(() => {
      const mockResults = selectedProviders.map(providerId => {
        const provider = providers.find(p => p.id === providerId);
        return {
          provider: providerId,
          providerName: provider?.name,
          response: `Analysis from ${provider?.name}: The text appears to be neutral with low bias potential.`,
          biasScore: Math.random() * 0.3,
          confidence: 0.8 + Math.random() * 0.2,
          latency: Math.random() * 2 + 0.5,
          timestamp: new Date().toISOString()
        };
      });
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Orchestration</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Multi-provider AI analysis with bias detection and trust scoring
        </p>
      </div>

      {/* Provider Selection */}
      <Card className="crypto-glow">
        <CardHeader>
          <CardTitle>Select AI Providers</CardTitle>
          <CardDescription>Choose multiple providers for comparative analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedProviders.includes(provider.id)
                    ? 'border-violet-500 bg-violet-50 dark:bg-violet-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                }`}
                onClick={() => handleProviderToggle(provider.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${provider.color}`} />
                    <span className="font-medium">{provider.name}</span>
                  </div>
                  <Badge variant={provider.status === 'active' ? 'default' : 'destructive'}>
                    {provider.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle>Content Analysis</CardTitle>
          <CardDescription>Analyze text for bias and trustworthiness across multiple AI providers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to analyze for bias, trustworthiness, and compliance..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {selectedProviders.length} providers selected
              </div>
              <Button 
                onClick={handleAnalyze}
                disabled={!inputText.trim() || selectedProviders.length === 0 || isAnalyzing}
                className="bg-violet-500 hover:bg-violet-600"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    Analyze with AI
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
            <CardDescription>Comparative analysis from selected AI providers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${providers.find(p => p.id === result.provider)?.color}`} />
                      <span className="font-medium">{result.providerName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={result.biasScore < 0.1 ? 'default' : result.biasScore < 0.2 ? 'secondary' : 'destructive'}>
                        Bias: {(result.biasScore * 100).toFixed(1)}%
                      </Badge>
                      <Badge variant="outline">
                        {result.latency.toFixed(1)}s
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-gray-700 dark:text-gray-300">{result.response}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Confidence: {(result.confidence * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                    <span className="text-gray-500">
                      {new Date(result.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <BarChart3 className="h-4 w-4 inline mr-1" />
                    Comparative analysis complete
                  </div>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Re-run Analysis
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIOrchestration;