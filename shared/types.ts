// Core Agent Types
export interface Agent {
  id: string;
  did: string;
  name: string;
  type: 'ai' | 'human' | 'system';
  trustScore: TrustScore;
  credentials: Credential[];
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

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

export interface Credential {
  id: string;
  type: string;
  issuer: string;
  subject: string;
  claims: Record<string, any>;
  proof: Proof;
  issuedAt: Date;
  expiresAt?: Date;
  status: 'active' | 'revoked' | 'expired';
}

export interface Proof {
  type: string;
  created: Date;
  verificationMethod: string;
  proofPurpose: string;
  proofValue: string;
}

// Bias Analysis Types
export interface BiasAnalysis {
  id: string;
  content: string;
  providerId: string;
  detectedBiases: Bias[];
  overallScore: number;
  confidence: number;
  analyzedAt: Date;
}

export interface Bias {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  evidence: string;
  mitigation: string;
}

// Compliance Types
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
  severity: 'minor' | 'major' | 'critical';
  description: string;
  evidence: string;
  recommendation: string;
  status: 'open' | 'resolved' | 'accepted';
}

// Security Types
export interface SecurityAlert {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  source: string;
  metadata?: Record<string, any>;
}

export interface ThreatTrend {
  timestamp: Date;
  threatLevel: number;
  category: string;
  description: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// WebSocket Types
export interface SocketState {
  connected: boolean;
  error: string | null;
  socketId: string | null;
}

// Educational Types
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  subject: string;
  gradeLevel: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  materials: {
    sessionPlan: boolean;
    rubric: boolean;
    worksheet: boolean;
    presentation: boolean;
  };
  trustScore: number;
  learningObjectives: string[];
  prerequisites: string[];
  assessmentCriteria: string[];
}

export interface EducationalResource {
  id: string;
  type: 'session_plan' | 'rubric' | 'worksheet' | 'presentation' | 'pdf';
  title: string;
  description: string;
  content: string;
  downloadUrl: string;
  size?: string;
  format: string;
  createdAt: Date;
  updatedAt: Date;
}

// Analytics Types
export interface AnalyticsData {
  trustScores: TimeSeriesData[];
  verifications: VerificationData[];
  compliance: ComplianceData[];
  biasDetection: BiasData[];
}

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  category: string;
}

export interface VerificationData {
  id: string;
  agentId: string;
  method: string;
  result: 'success' | 'failure' | 'pending';
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface ComplianceData {
  framework: string;
  score: number;
  findings: number;
  status: 'compliant' | 'non_compliant' | 'partial';
}

export interface BiasData {
  type: string;
  count: number;
  severity: 'low' | 'medium' | 'high';
  trend: 'increasing' | 'decreasing' | 'stable';
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
}

// Configuration Types
export interface AppConfig {
  apiUrl: string;
  socketUrl: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    realTimeUpdates: boolean;
    biasDetection: boolean;
    complianceMonitoring: boolean;
    analytics: boolean;
  };
}