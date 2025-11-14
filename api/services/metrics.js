import client from 'prom-client';
import logger from '../utils/logger.js';

const register = new client.Registry();

client.collectDefaultMetrics({
  register,
  prefix: 'symbi_',
  gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
});

const httpRequestDuration = new client.Histogram({
  name: 'symbi_http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
});

const httpRequestTotal = new client.Counter({
  name: 'symbi_http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
});

const trustScoreCalculations = new client.Counter({
  name: 'symbi_trust_score_calculations_total',
  help: 'Total number of trust score calculations',
  labelNames: ['agent_id', 'status'],
});

const aiProviderRequests = new client.Counter({
  name: 'symbi_ai_provider_requests_total',
  help: 'Total number of AI provider requests',
  labelNames: ['provider', 'status', 'error_type'],
});

const didOperations = new client.Counter({
  name: 'symbi_did_operations_total',
  help: 'Total number of DID operations',
  labelNames: ['operation', 'status'],
});

const vcOperations = new client.Counter({
  name: 'symbi_vc_operations_total',
  help: 'Total number of Verifiable Credential operations',
  labelNames: ['operation', 'status'],
});

const activeConnections = new client.Gauge({
  name: 'symbi_active_connections',
  help: 'Number of active WebSocket connections',
});

const trustScoreDistribution = new client.Histogram({
  name: 'symbi_trust_score_distribution',
  help: 'Distribution of trust scores',
  labelNames: ['agent_type'],
  buckets: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
});

const biasDetectionResults = new client.Counter({
  name: 'symbi_bias_detection_results_total',
  help: 'Total number of bias detection analyses',
  labelNames: ['bias_type', 'severity', 'status'],
});

const complianceChecks = new client.Counter({
  name: 'symbi_compliance_checks_total',
  help: 'Total number of compliance checks',
  labelNames: ['check_type', 'status', 'framework'],
});

const cacheOperations = new client.Counter({
  name: 'symbi_cache_operations_total',
  help: 'Total number of cache operations',
  labelNames: ['operation', 'status', 'cache_type'],
});

const errorRate = new client.Counter({
  name: 'symbi_errors_total',
  help: 'Total number of errors',
  labelNames: ['error_type', 'severity', 'component'],
});

register.registerMetric(httpRequestDuration);
register.registerMetric(httpRequestTotal);
register.registerMetric(trustScoreCalculations);
register.registerMetric(aiProviderRequests);
register.registerMetric(didOperations);
register.registerMetric(vcOperations);
register.registerMetric(activeConnections);
register.registerMetric(trustScoreDistribution);
register.registerMetric(biasDetectionResults);
register.registerMetric(complianceChecks);
register.registerMetric(cacheOperations);
register.registerMetric(errorRate);

export const metricsMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route?.path || req.path;
    
    httpRequestDuration
      .labels(req.method, route, res.statusCode.toString())
      .observe(duration);
    
    httpRequestTotal
      .labels(req.method, route, res.statusCode.toString())
      .inc();
  });
  
  next();
};

export const recordTrustScoreCalculation = (agentId, status) => {
  trustScoreCalculations.labels(agentId, status).inc();
};

export const recordAIProviderRequest = (provider, status, errorType = null) => {
  aiProviderRequests.labels(provider, status, errorType).inc();
};

export const recordDIDOperation = (operation, status) => {
  didOperations.labels(operation, status).inc();
};

export const recordVCOperation = (operation, status) => {
  vcOperations.labels(operation, status).inc();
};

export const setActiveConnections = (count) => {
  activeConnections.set(count);
};

export const recordTrustScore = (agentType, score) => {
  trustScoreDistribution.labels(agentType).observe(score);
};

export const recordBiasDetection = (biasType, severity, status) => {
  biasDetectionResults.labels(biasType, severity, status).inc();
};

export const recordComplianceCheck = (checkType, status, framework) => {
  complianceChecks.labels(checkType, status, framework).inc();
};

export const recordCacheOperation = (operation, status, cacheType) => {
  cacheOperations.labels(operation, status, cacheType).inc();
};

export const recordError = (errorType, severity, component) => {
  errorRate.labels(errorType, severity, component).inc();
};

export const getMetrics = async () => {
  return register.metrics();
};

export const getMetricsJSON = async () => {
  return register.getMetricsAsJSON();
};

export { register };