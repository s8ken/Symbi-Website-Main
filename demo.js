#!/usr/bin/env node

import axios from 'axios';
import chalk from 'chalk';
import ora from 'ora';

const API_BASE_URL = process.env.API_URL || 'http://localhost:5000/api';

class SYMBIDemo {
  constructor() {
    this.results = [];
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      info: chalk.blue,
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red,
      title: chalk.cyan.bold
    };
    
    console.log(`[${timestamp}] ${colors[type](message)}`);
  }

  async healthCheck() {
    const spinner = ora('Checking system health...').start();
    
    try {
      const response = await axios.get(`${API_BASE_URL.replace('/api', '')}/health/detailed`);
      const health = response.data;
      
      spinner.succeed('System health check completed');
      
      this.log(`System Status: ${health.status.toUpperCase()}`, health.status === 'healthy' ? 'success' : 'warning');
      this.log(`Redis: ${health.services.redis.status} (${health.services.redis.responseTime}ms)`);
      this.log(`System: ${health.services.system.status}`);
      this.log(`Dependencies: ${health.services.dependencies.status}`);
      
      return health.status === 'healthy';
    } catch (error) {
      spinner.fail('Health check failed');
      this.log(`Error: ${error.message}`, 'error');
      return false;
    }
  }

  async createTestAgent() {
    const spinner = ora('Creating test AI agent...').start();
    
    const testAgent = {
      id: 'demo-agent-' + Date.now(),
      name: 'Demo AI Assistant',
      type: 'language-model',
      provider: 'openai',
      capabilities: ['text-generation', 'analysis', 'summarization'],
      ethicalGuidelines: [
        'No harmful content generation',
        'Respect user privacy',
        'Provide accurate information'
      ],
      securityMeasures: ['input-validation', 'output-filtering', 'rate-limiting'],
      transparencyLevel: 0.8,
      complianceFrameworks: ['gdpr', 'ccpa', 'ai-act']
    };

    try {
      // Simulate agent registration
      await this.delay(1000);
      spinner.succeed(`Test agent created: ${testAgent.name}`);
      
      this.log(`Agent ID: ${testAgent.id}`);
      this.log(`Provider: ${testAgent.provider}`);
      this.log(`Capabilities: ${testAgent.capabilities.join(', ')}`);
      
      return testAgent;
    } catch (error) {
      spinner.fail('Agent creation failed');
      this.log(`Error: ${error.message}`, 'error');
      return null;
    }
  }

  async calculateTrustScore(agent) {
    const spinner = ora('Calculating trust score...').start();
    
    const trustData = {
      agentId: agent.id,
      technical: {
        reliability: 0.95,
        performance: 0.88,
        uptime: 0.99,
        responseTime: 0.85
      },
      ethical: {
        biasScore: 0.92,
        fairness: 0.89,
        privacyScore: 0.96,
        harmPrevention: 0.94
      },
      operational: {
        availability: 0.98,
        scalability: 0.87,
        maintainability: 0.91,
        monitoring: 0.93
      },
      transparency: {
        explainability: 0.82,
        auditability: 0.89,
        documentation: 0.95,
        openness: 0.78
      },
      security: {
        encryption: 0.97,
        authentication: 0.94,
        authorization: 0.92,
        vulnerabilityScan: 0.88
      },
      compliance: {
        gdpr: 0.96,
        ccpa: 0.89,
        aiAct: 0.85,
        industryStandards: 0.91
      }
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/trust/calculate`, trustData);
      const result = response.data;
      
      spinner.succeed('Trust score calculated');
      
      this.log(`Overall Trust Score: ${chalk.bold(result.overallScore.toFixed(3))}`, 'success');
      this.log(`Trust Level: ${chalk.bold(result.trustLevel)}`);
      
      Object.entries(result.breakdown).forEach(([pillar, score]) => {
        const color = score >= 0.8 ? 'success' : score >= 0.6 ? 'warning' : 'error';
        this.log(`  ${pillar}: ${score.toFixed(3)}`, color);
      });
      
      return result;
    } catch (error) {
      spinner.fail('Trust calculation failed');
      this.log(`Error: ${error.message}`, 'error');
      return null;
    }
  }

  async performAIOrchestration() {
    const spinner = ora('Testing AI orchestration...').start();
    
    const orchestrationData = {
      prompt: "Analyze the ethical implications of AI decision-making in healthcare diagnostics.",
      providers: ['openai', 'anthropic'],
      parameters: {
        maxTokens: 500,
        temperature: 0.7,
        analysisType: 'ethical'
      }
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/ai/orchestrate`, orchestrationData);
      const result = response.data;
      
      spinner.succeed('AI orchestration completed');
      
      this.log(`Analysis completed by ${result.provider} (${result.responseTime}ms)`, 'success');
      this.log(`Bias Score: ${result.biasAnalysis.score}`);
      this.log(`Confidence: ${result.confidence}`);
      
      if (result.biasAnalysis.issues.length > 0) {
        this.log(`Bias Issues Found: ${result.biasAnalysis.issues.length}`, 'warning');
        result.biasAnalysis.issues.forEach(issue => {
          this.log(`  - ${issue.type}: ${issue.description}`, 'warning');
        });
      }
      
      return result;
    } catch (error) {
      spinner.fail('AI orchestration failed');
      this.log(`Error: ${error.message}`, 'error');
      return null;
    }
  }

  async createDID() {
    const spinner = ora('Creating Decentralized Identifier...').start();
    
    const didData = {
      method: 'key',
      options: {
        keyType: 'Ed25519',
        purposes: ['authentication', 'assertionMethod']
      }
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/did/create`, didData);
      const result = response.data;
      
      spinner.succeed('DID created successfully');
      
      this.log(`DID: ${chalk.bold(result.did)}`, 'success');
      this.log(`Key Type: ${result.keyType}`);
      this.log(`Created: ${result.created}`);
      
      return result;
    } catch (error) {
      spinner.fail('DID creation failed');
      this.log(`Error: ${error.message}`, 'error');
      return null;
    }
  }

  async issueVerifiableCredential(did) {
    const spinner = ora('Issuing verifiable credential...').start();
    
    const credentialData = {
      issuer: did.did,
      subject: 'demo-subject-' + Date.now(),
      credential: {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential', 'AITrustCredential'],
        credentialSubject: {
          id: 'demo-subject',
          trustScore: 0.85,
          evaluationDate: new Date().toISOString(),
          evaluator: 'SYMBI Platform',
          criteria: ['technical', 'ethical', 'operational']
        }
      }
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/vc/issue`, credentialData);
      const result = response.data;
      
      spinner.succeed('Verifiable credential issued');
      
      this.log(`Credential ID: ${chalk.bold(result.credentialId)}`, 'success');
      this.log(`Issuer: ${result.issuer}`);
      this.log(`Valid: ${result.valid}`);
      
      return result;
    } catch (error) {
      spinner.fail('Credential issuance failed');
      this.log(`Error: ${error.message}`, 'error');
      return null;
    }
  }

  async checkCompliance() {
    const spinner = ora('Running compliance check...').start();
    
    try {
      const response = await axios.get(`${API_BASE_URL}/compliance/status`);
      const result = response.data;
      
      spinner.succeed('Compliance check completed');
      
      this.log(`Overall Compliance: ${result.overallCompliance}%`, result.overallCompliance >= 80 ? 'success' : 'warning');
      
      Object.entries(result.frameworks).forEach(([framework, status]) => {
        const color = status.compliant ? 'success' : 'error';
        this.log(`  ${framework}: ${status.score}% (${status.status})`, color);
      });
      
      return result;
    } catch (error) {
      spinner.fail('Compliance check failed');
      this.log(`Error: ${error.message}`, 'error');
      return null;
    }
  }

  async runMetricsDemo() {
    const spinner = ora('Fetching system metrics...').start();
    
    try {
      const response = await axios.get(`${API_BASE_URL.replace('/api', '')}/metrics`);
      const metrics = response.data;
      
      spinner.succeed('Metrics retrieved');
      
      // Parse some key metrics
      const lines = metrics.split('\n');
      const httpRequests = lines.find(line => line.startsWith('symbi_http_requests_total'));
      const trustCalculations = lines.find(line => line.startsWith('symbi_trust_score_calculations_total'));
      
      if (httpRequests) {
        this.log(`HTTP Requests: ${httpRequests.split(' ')[1]}`);
      }
      
      if (trustCalculations) {
        this.log(`Trust Calculations: ${trustCalculations.split(' ')[1]}`);
      }
      
      return metrics;
    } catch (error) {
      spinner.fail('Metrics retrieval failed');
      this.log(`Error: ${error.message}`, 'error');
      return null;
    }
  }

  async runFullDemo() {
    this.log('🚀 Starting SYMBI Trust Platform Demo', 'title');
    this.log('='.repeat(60), 'title');
    
    // Health check
    const isHealthy = await this.healthCheck();
    if (!isHealthy) {
      this.log('System is not healthy, aborting demo', 'error');
      return;
    }
    
    this.log('');
    
    // Create test agent
    const agent = await this.createTestAgent();
    if (!agent) return;
    
    this.log('');
    
    // Calculate trust score
    const trustScore = await this.calculateTrustScore(agent);
    if (!trustScore) return;
    
    this.log('');
    
    // AI orchestration
    const aiResult = await this.performAIOrchestration();
    if (!aiResult) return;
    
    this.log('');
    
    // Create DID
    const did = await this.createDID();
    if (!did) return;
    
    this.log('');
    
    // Issue credential
    const credential = await this.issueVerifiableCredential(did);
    if (!credential) return;
    
    this.log('');
    
    // Compliance check
    const compliance = await this.checkCompliance();
    if (!compliance) return;
    
    this.log('');
    
    // Metrics
    await this.runMetricsDemo();
    
    this.log('');
    this.log('🎉 Demo completed successfully!', 'success');
    this.log('📊 Check the dashboard at: http://localhost:3000', 'info');
    this.log('📈 View metrics at: http://localhost:5000/metrics', 'info');
    this.log('🏥 Health status at: http://localhost:5000/health/detailed', 'info');
  }

  async runQuickDemo() {
    this.log('⚡ Running Quick SYMBI Demo', 'title');
    this.log('='.repeat(50), 'title');
    
    await this.healthCheck();
    await this.delay(500);
    
    const agent = await this.createTestAgent();
    await this.delay(500);
    
    await this.calculateTrustScore(agent);
    await this.delay(500);
    
    await this.performAIOrchestration();
    
    this.log('✅ Quick demo completed!', 'success');
  }
}

// CLI Interface
const demo = new SYMBIDemo();

const command = process.argv[2];

switch (command) {
  case 'full':
    demo.runFullDemo().catch(console.error);
    break;
  case 'quick':
    demo.runQuickDemo().catch(console.error);
    break;
  case 'health':
    demo.healthCheck().catch(console.error);
    break;
  default:
    console.log(chalk.cyan('SYMBI Trust Platform Demo'));
    console.log(chalk.white('Usage: node demo.js [command]'));
    console.log('');
    console.log(chalk.yellow('Commands:'));
    console.log('  full   - Run complete demo with all features');
    console.log('  quick  - Run quick demo with core features');
    console.log('  health - Check system health');
    console.log('');
    console.log(chalk.green('Examples:'));
    console.log('  node demo.js full');
    console.log('  node demo.js quick');
    console.log('  API_URL=http://localhost:4000/api node demo.js health');
    process.exit(0);
}