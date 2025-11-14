import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config = {
  // Server configuration
  server: {
    port: parseInt(process.env.PORT, 10) || 5000,
    host: process.env.HOST || 'localhost',
    nodeEnv: process.env.NODE_ENV || 'development',
    corsOrigin: process.env.FRONTEND_URL || 'http://localhost:3000',
  },

  // Database configuration
  database: {
    mongodb: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/symbi',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  },

  // Redis configuration
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASSWORD,
    db: parseInt(process.env.REDIS_DB, 10) || 0,
    keyPrefix: process.env.REDIS_KEY_PREFIX || 'symbi:',
  },

  // Security configuration
  security: {
    jwt: {
      secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
      algorithm: 'HS256',
    },
    bcrypt: {
      saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 12,
    },
    rateLimit: {
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
      max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
    },
  },

  // AI Provider configuration
  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
      model: process.env.OPENAI_MODEL || 'gpt-4',
      maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS, 10) || 1000,
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.7,
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY,
      model: process.env.ANTHROPIC_MODEL || 'claude-3-sonnet-20240229',
      maxTokens: parseInt(process.env.ANTHROPIC_MAX_TOKENS, 10) || 1000,
      temperature: parseFloat(process.env.ANTHROPIC_TEMPERATURE) || 0.7,
    },
    perplexity: {
      apiKey: process.env.PERPLEXITY_API_KEY,
      model: process.env.PERPLEXITY_MODEL || 'pplx-70b-online',
    },
    v0: {
      apiKey: process.env.V0_API_KEY,
      baseUrl: process.env.V0_BASE_URL || 'https://api.v0.dev',
    },
  },

  // Trust scoring configuration
  trust: {
    weights: {
      technical: parseFloat(process.env.TRUST_WEIGHT_TECHNICAL) || 0.25,
      ethical: parseFloat(process.env.TRUST_WEIGHT_ETHICAL) || 0.20,
      operational: parseFloat(process.env.TRUST_WEIGHT_OPERATIONAL) || 0.20,
      transparency: parseFloat(process.env.TRUST_WEIGHT_TRANSPARENCY) || 0.15,
      security: parseFloat(process.env.TRUST_WEIGHT_SECURITY) || 0.10,
      compliance: parseFloat(process.env.TRUST_WEIGHT_COMPLIANCE) || 0.10,
    },
    thresholds: {
      minimum: parseFloat(process.env.TRUST_THRESHOLD_MINIMUM) || 0.3,
      warning: parseFloat(process.env.TRUST_THRESHOLD_WARNING) || 0.5,
      good: parseFloat(process.env.TRUST_THRESHOLD_GOOD) || 0.7,
      excellent: parseFloat(process.env.TRUST_THRESHOLD_EXCELLENT) || 0.9,
    },
    decay: {
      enabled: process.env.TRUST_DECAY_ENABLED === 'true',
      rate: parseFloat(process.env.TRUST_DECAY_RATE) || 0.01,
      interval: parseInt(process.env.TRUST_DECAY_INTERVAL_MS, 10) || 24 * 60 * 60 * 1000,
    },
  },

  // DID/VC configuration
  did: {
    methods: ['key', 'web', 'ion'],
    defaultMethod: process.env.DEFAULT_DID_METHOD || 'key',
    resolverTimeout: parseInt(process.env.DID_RESOLVER_TIMEOUT_MS, 10) || 5000,
  },

  vc: {
    defaultContext: ['https://www.w3.org/2018/credentials/v1'],
    proofType: process.env.VC_PROOF_TYPE || 'Ed25519Signature2018',
    expirationDays: parseInt(process.env.VC_EXPIRATION_DAYS, 10) || 365,
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
    enableConsole: process.env.LOG_ENABLE_CONSOLE !== 'false',
    enableFile: process.env.LOG_ENABLE_FILE === 'true',
    filePath: process.env.LOG_FILE_PATH || 'logs/symbi.log',
    maxSize: process.env.LOG_MAX_SIZE || '10m',
    maxFiles: process.env.LOG_MAX_FILES || '5',
  },

  // Feature flags
  features: {
    enableMetrics: process.env.ENABLE_METRICS !== 'false',
    enableCache: process.env.ENABLE_CACHE !== 'false',
    enableWebSocket: process.env.ENABLE_WEBSOCKET !== 'false',
    enableBiasDetection: process.env.ENABLE_BIAS_DETECTION !== 'false',
    enableComplianceMonitoring: process.env.ENABLE_COMPLIANCE_MONITORING !== 'false',
    enableAuditTrail: process.env.ENABLE_AUDIT_TRAIL !== 'false',
  },

  // External services
  external: {
    webhook: {
      secret: process.env.WEBHOOK_SECRET,
      timeout: parseInt(process.env.WEBHOOK_TIMEOUT_MS, 10) || 30000,
    },
    email: {
      enabled: process.env.EMAIL_ENABLED === 'true',
      provider: process.env.EMAIL_PROVIDER || 'smtp',
      smtp: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        user: process.env.SMTP_USER,
        password: process.env.SMTP_PASSWORD,
      },
    },
  },

  // Performance configuration
  performance: {
    cache: {
      defaultTTL: parseInt(process.env.CACHE_DEFAULT_TTL, 10) || 300,
      maxKeys: parseInt(process.env.CACHE_MAX_KEYS, 10) || 10000,
    },
    pagination: {
      defaultLimit: parseInt(process.env.PAGINATION_DEFAULT_LIMIT, 10) || 20,
      maxLimit: parseInt(process.env.PAGINATION_MAX_LIMIT, 10) || 100,
    },
    timeout: {
      default: parseInt(process.env.DEFAULT_TIMEOUT_MS, 10) || 30000,
      long: parseInt(process.env.LONG_TIMEOUT_MS, 10) || 60000,
    },
  },
};

// Validation
const requiredEnvVars = [
  'JWT_SECRET',
  'MONGODB_URI',
  'REDIS_HOST',
];

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0 && config.server.nodeEnv === 'production') {
  console.error('Missing required environment variables:', missingEnvVars.join(', '));
  process.exit(1);
}

export default config;