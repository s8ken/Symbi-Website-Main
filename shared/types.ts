// Core SYMBI Types
export interface TrustScore {
  overall: number;
  confidence: number;
  breakdown: {
    technical: number;
    ethical: number;
    operational: number;
    transparency: number;
    security: number;
    compliance: number;
  };
  temporalScore: number;
  lastUpdated: Date;
}

export interface Agent {
  id: string;
  did: string;
  name: string;
  type: 'ai' | 'human' | 'organization';
  trustScore: TrustScore;
  credentials: VerifiableCredential[];
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface VerifiableCredential {
  id: string;
  type: string[];
  issuer: string;
  issuanceDate: Date;
  expirationDate?: Date;
  credentialSubject: {
    id: string;
    [key: string]: any;
  };
  proof: {
    type: string;
    created: Date;
    verificationMethod: string;
    proofPurpose: string;
    proofValue: string;
  };
  status?: string;
}

export interface TrustDeclaration {
  id: string;
  agentId: string;
  assertion: string;
  evidence: Evidence[];
  score: number;
  confidence: number;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  createdAt: Date;
  verifiedAt?: Date;
}

export interface Evidence {
  type: 'document' | 'signature' | 'attestation' | 'metric';
  hash: string;
  metadata: Record<string, any>;
  timestamp: Date;
}

export interface AuditEntry {
  id: string;
  transactionId: string;
  action: string;
  actor: string;
  target: string;
  metadata: Record<string, any>;
  hash: string;
  previousHash: string;
  signature: string;
  timestamp: Date;
}

export interface AIProvider {
  id: string;
  name: string;
  type: 'openai' | 'anthropic' | 'perplexity' | 'v0';
  endpoint: string;
  apiKey?: string;
  rateLimit: number;
  status: 'active' | 'inactive' | 'error';
  metrics: ProviderMetrics;
}

export interface ProviderMetrics {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageLatency: number;
  lastRequestAt?: Date;
}

export interface BiasAnalysis {
  id: string;
  content: string;
  providerId: string;
  detectedBiases: BiasResult[];
  overallScore: number;
  confidence: number;
  analyzedAt: Date;
}

export interface BiasResult {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  evidence: string;
  mitigation?: string;
}

export interface ComplianceReport {
  id: string;
  agentId: string;
  framework: string;
  score: number;
  findings: ComplianceFinding[];
  generatedAt: Date;
  validUntil: Date;
}

export interface ComplianceFinding {
  category: string;
  severity: 'critical' | 'major' | 'minor';
  description: string;
  evidence: string;
  recommendation: string;
  status: 'open' | 'resolved' | 'accepted';
}

export interface DIDDocument {
  id: string;
  context: string[];
  verificationMethod: VerificationMethod[];
  authentication: string[];
  assertionMethod: string[];
  capabilityDelegation: string[];
  capabilityInvocation: string[];
  service: ServiceEndpoint[];
  created: Date;
  updated: Date;
}

export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  publicKeyJwk?: Record<string, any>;
  publicKeyMultibase?: string;
}

export interface ServiceEndpoint {
  id: string;
  type: string;
  serviceEndpoint: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    timestamp: Date;
    requestId: string;
    version: string;
  };
}

// WebSocket Message Types
export interface WsMessage {
  type: 'trust_update' | 'compliance_alert' | 'bias_detected' | 'audit_entry';
  payload: any;
  timestamp: Date;
}

// Error Types
export class SYMBIError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public details?: any
  ) {
    super(message);
    this.name = 'SYMBIError';
  }
}

export enum ErrorCodes {
  INVALID_DID = 'INVALID_DID',
  INVALID_CREDENTIAL = 'INVALID_CREDENTIAL',
  TRUST_SCORE_TOO_LOW = 'TRUST_SCORE_TOO_LOW',
  PROVIDER_UNAVAILABLE = 'PROVIDER_UNAVAILABLE',
  BIAS_DETECTION_FAILED = 'BIAS_DETECTION_FAILED',
  AUDIT_TRAIL_CORRUPTED = 'AUDIT_TRAIL_CORRUPTED',
  KMS_OPERATION_FAILED = 'KMS_OPERATION_FAILED',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  HANDSHAKE_FAILED = 'HANDSHAKE_FAILED',
  HANDSHAKE_EXPIRED = 'HANDSHAKE_EXPIRED',
  INVALID_CHALLENGE_RESPONSE = 'INVALID_CHALLENGE_RESPONSE'
}

// Trust Handshake Protocol Types
export interface TrustHandshake {
  id: string;
  initiatorDID: string;
  responderDID: string;
  phase: HandshakePhase;
  status: TrustHandshakeStatus;
  initiatorPublicKey: string;
  responderPublicKey?: string;
  trustRequirements: string[];
  challenges: CryptographicChallenge[];
  createdAt: Date;
  updatedAt: Date;
  metadata: {
    attempts: number;
    lastChallengeTimestamp: number;
    proofOfPossession?: any;
    zeroKnowledgeProof?: any;
    multiPartyComputation?: any;
    trustScore?: number;
    [key: string]: any;
  };
}

export enum HandshakePhase {
  CHALLENGE_GENERATION = 'CHALLENGE_GENERATION',
  RESPONSE_VERIFICATION = 'RESPONSE_VERIFICATION',
  TRUST_ESTABLISHMENT = 'TRUST_ESTABLISHMENT',
  COMPLETED = 'COMPLETED'
}

export enum TrustHandshakeStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  EXPIRED = 'EXPIRED'
}

export interface CryptographicChallenge {
  id: string;
  phase: HandshakePhase;
  type: 'PROOF_OF_POSSESSION' | 'ZERO_KNOWLEDGE_PROOF' | 'MULTI_PARTY_COMPUTATION';
  nonce?: string;
  puzzle?: string;
  difficulty?: number;
  statement?: string;
  witness?: string;
  inputs?: any;
  timestamp: Date;
  expiresAt: Date;
  metadata?: {
    requiredComputations?: number;
    estimatedTimeMs?: number;
    proofSystem?: string;
    circuit?: string;
    publicInputs?: string[];
    computation?: string;
    parties?: string[];
    protocol?: string;
    [key: string]: any;
  };
}

// Oracle System Types
export interface OracleNode {
  id: string;
  did: string;
  endpoint: string;
  publicKey: string;
  reputation: number;
  stake: number;
  status: 'active' | 'inactive' | 'penalized';
  lastHeartbeat: Date;
  submittedData: OracleData[];
}

export interface OracleData {
  id: string;
  oracleId: string;
  dataType: 'trust_score' | 'credential_status' | 'compliance_status' | 'reputation';
  data: any;
  signature: string;
  timestamp: Date;
  blockNumber?: number;
  transactionHash?: string;
}

export interface OracleConsensus {
  id: string;
  dataType: string;
  targetDID: string;
  submissions: OracleData[];
  consensusResult: any;
  consensusAlgorithm: 'majority' | 'weighted_average' | 'median';
  threshold: number;
  finalizedAt: Date;
  rewardDistributed: boolean;
}

// 9-Step Scoring Process Types
export interface ScoringStep {
  id: number;
  name: string;
  description: string;
  weight: number;
  inputs: string[];
  computation: string;
  outputs: string[];
  dependencies: number[];
}

export interface ScoringProcess {
  id: string;
  agentDID: string;
  steps: ScoringStep[];
  currentStep: number;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  results: { [stepId: number]: any };
  finalScore?: number;
  startedAt: Date;
  completedAt?: Date;
  metadata: {
    oracleData?: OracleData[];
    blockchainAnchors?: string[];
    computationProofs?: string[];
    [key: string]: any;
  };
}