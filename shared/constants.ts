// SYMBI Constants
export const TRUST_PILLARS = {
  TECHNICAL: 'technical',
  ETHICAL: 'ethical', 
  OPERATIONAL: 'operational',
  TRANSPARENCY: 'transparency',
  SECURITY: 'security',
  COMPLIANCE: 'compliance'
} as const;

export const TRUST_WEIGHTS = {
  [TRUST_PILLARS.TECHNICAL]: 0.25,
  [TRUST_PILLARS.ETHICAL]: 0.20,
  [TRUST_PILLARS.OPERATIONAL]: 0.15,
  [TRUST_PILLARS.TRANSPARENCY]: 0.15,
  [TRUST_PILLARS.SECURITY]: 0.15,
  [TRUST_PILLARS.COMPLIANCE]: 0.10
} as const;

export const TRUST_THRESHOLDS = {
  EXCELLENT: 0.90,
  GOOD: 0.75,
  FAIR: 0.60,
  POOR: 0.40,
  CRITICAL: 0.25
} as const;

export const TEMPORAL_DECAY = {
  HALF_LIFE_DAYS: 30,
  DECAY_FACTOR: 0.95
} as const;

export const AI_PROVIDERS = {
  OPENAI: 'openai',
  ANTHROPIC: 'anthropic',
  PERPLEXITY: 'perplexity',
  V0: 'v0'
} as const;

export const DID_METHODS = {
  WEB: 'did:web',
  KEY: 'did:key',
  ETHR: 'did:ethr',
  ION: 'did:ion',
  PKH: 'did:pkh',
  PEER: 'did:peer'
} as const;

export const VC_TYPES = {
  TRUST_DECLARATION: 'TrustDeclaration',
  COMPLIANCE_CERTIFICATE: 'ComplianceCertificate',
  BIAS_ANALYSIS: 'BiasAnalysis',
  AUDIT_ENTRY: 'AuditEntry'
} as const;

export const STATUS_LIST = {
  BITSTRING_LENGTH: 131072, // 16KB
  COMPRESSION_THRESHOLD: 0.8,
  CACHE_TTL: 300000 // 5 minutes
} as const;

export const CRYPTO = {
  SIGNATURE_ALGORITHM: 'EdDSA',
  CURVE: 'Ed25519',
  HASH_ALGORITHM: 'SHA-256',
  KEY_LENGTH: 32
} as const;

export const KMS_PROVIDERS = {
  AWS: 'aws',
  GCP: 'gcp',
  AZURE: 'azure',
  LOCAL: 'local'
} as const;

export const RATE_LIMITS = {
  DEFAULT_WINDOW_MS: 900000, // 15 minutes
  DEFAULT_MAX_REQUESTS: 100,
  TRUST_DECLARATION: 50,
  AI_ANALYSIS: 30,
  DID_OPERATIONS: 20,
  VC_OPERATIONS: 25
} as const;

export const CACHE_TTL = {
  TRUST_SCORE: 300, // 5 minutes
  DID_DOCUMENT: 1800, // 30 minutes
  VC_STATUS: 600, // 10 minutes
  AI_PROVIDER_STATUS: 60, // 1 minute
  COMPLIANCE_REPORT: 3600 // 1 hour
} as const;

export const ERROR_MESSAGES = {
  INVALID_DID: 'Invalid decentralized identifier format',
  INVALID_CREDENTIAL: 'Credential validation failed',
  TRUST_SCORE_TOO_LOW: 'Trust score below required threshold',
  PROVIDER_UNAVAILABLE: 'AI provider temporarily unavailable',
  BIAS_DETECTION_FAILED: 'Unable to complete bias analysis',
  AUDIT_TRAIL_CORRUPTED: 'Audit trail integrity compromised',
  KMS_OPERATION_FAILED: 'Key management service operation failed',
  RATE_LIMIT_EXCEEDED: 'Request rate limit exceeded',
  UNAUTHORIZED: 'Authentication required',
  FORBIDDEN: 'Insufficient permissions'
} as const;

export const SUCCESS_MESSAGES = {
  TRUST_DECLARATION_CREATED: 'Trust declaration successfully created',
  CREDENTIAL_ISSUED: 'Verifiable credential issued successfully',
  DID_DOCUMENT_CREATED: 'DID document created and published',
  BIAS_ANALYSIS_COMPLETE: 'Bias analysis completed successfully',
  COMPLIANCE_VERIFIED: 'Compliance verification successful',
  AUDIT_ENTRY_ADDED: 'Audit entry added to immutable trail'
} as const;

export const UI_CONSTANTS = {
  TRUST_SCORE_COLORS: {
    EXCELLENT: '#10b981', // green-500
    GOOD: '#3b82f6', // blue-500
    FAIR: '#f59e0b', // amber-500
    POOR: '#f97316', // orange-500
    CRITICAL: '#ef4444' // red-500
  },
  CHART_COLORS: {
    PRIMARY: '#8b5cf6', // violet-500
    SECONDARY: '#06b6d4', // cyan-500
    TERTIARY: '#10b981', // emerald-500
    QUATERNARY: '#f59e0b', // amber-500
    QUINARY: '#ef4444' // red-500
  },
  ANIMATION_DURATION: 300,
  REFRESH_INTERVAL: 30000 // 30 seconds
} as const;