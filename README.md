# SYMBI Trust Platform

A comprehensive AI trust infrastructure platform that provides decentralized trust scoring, bias detection, and compliance monitoring for AI agents and systems.

## 🚀 Features

### Core Capabilities
- **Six-Pillar Trust Scoring**: Technical, Ethical, Operational, Transparency, Security, and Compliance assessment
- **Multi-Provider AI Orchestration**: Unified interface for OpenAI, Anthropic, Perplexity, and v0
- **Decentralized Identity (DID)**: W3C-compliant decentralized identifiers
- **Verifiable Credentials**: Issue and verify tamper-proof credentials
- **Real-time Bias Detection**: Advanced ML-powered bias analysis
- **Compliance Monitoring**: Automated compliance checks across multiple frameworks
- **Cryptographic Audit Trails**: Immutable hash-chain audit logs

### Advanced Features
- **Real-time Dashboard**: Live metrics and WebSocket-powered updates
- **ML-Enhanced Trust Scoring**: Historical analysis and peer consensus
- **Comprehensive Health Monitoring**: Detailed system health checks
- **Prometheus Metrics**: Production-ready monitoring and alerting
- **Advanced Rate Limiting**: Redis-based distributed rate limiting
- **Enterprise Security**: JWT authentication, RBAC, and input sanitization

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SYMBI Trust Platform                     │
├─────────────────────────────────────────────────────────────┤
│  Frontend (React + TypeScript)                              │
│  ├── Dashboard with Real-time Updates                       │
│  ├── Trust Score Visualization                              │
│  ├── AI Provider Management                                 │
│  └── DID/VC Interface                                      │
├─────────────────────────────────────────────────────────────┤
│  Backend API (Express.js + TypeScript)                    │
│  ├── Trust Scoring Engine                                   │
│  ├── AI Orchestration Service                               │
│  ├── DID/VC Management                                      │
│  ├── Bias Detection Service                                 │
│  └── Compliance Monitoring                                  │
├─────────────────────────────────────────────────────────────┤
│  Infrastructure Layer                                        │
│  ├── MongoDB (Primary Database)                            │
│  ├── Redis (Caching & Sessions)                            │
│  ├── Prometheus (Metrics)                                   │
│  └── Grafana (Dashboards)                                   │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 6.0+
- Redis 7.0+
- Docker & Docker Compose (optional)

### Local Development

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd SYMBI-SYMPHONY
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start Services**
   ```bash
   # Start MongoDB and Redis
   docker-compose up -d mongodb redis
   
   # Start backend
   npm run dev:api
   
   # Start frontend (new terminal)
   npm run dev:frontend
   ```

4. **Access Application**
   - Frontend: http://localhost:3000
   - API: http://localhost:5000
   - Health Check: http://localhost:5000/health
   - Metrics: http://localhost:5000/metrics

### Docker Deployment

1. **Full Stack Deployment**
   ```bash
   docker-compose up -d
   ```

2. **Access Services**
   - Application: http://localhost
   - Grafana: http://localhost:3001 (admin/admin123)
   - Prometheus: http://localhost:9090

## 📊 API Endpoints

### Trust Management
- `GET /api/trust/score/:agentId` - Get trust score
- `POST /api/trust/calculate` - Calculate trust score
- `GET /api/trust/history/:agentId` - Get trust history

### AI Orchestration
- `POST /api/ai/orchestrate` - Multi-provider AI orchestration
- `POST /api/ai/analyze` - AI bias analysis
- `GET /api/ai/providers` - List AI providers

### DID/VC Management
- `POST /api/did/create` - Create DID
- `GET /api/did/resolve/:did` - Resolve DID
- `POST /api/vc/issue` - Issue verifiable credential
- `POST /api/vc/verify` - Verify credential

### Compliance & Monitoring
- `GET /api/compliance/status` - Compliance status
- `GET /api/compliance/report` - Generate compliance report
- `GET /api/monitoring/metrics` - System metrics

### Health & Metrics
- `GET /health` - Basic health check
- `GET /health/detailed` - Detailed health status
- `GET /health/ready` - Readiness probe
- `GET /metrics` - Prometheus metrics

## 🔧 Configuration

### Environment Variables

Key configuration options in `.env`:

```bash
# Core Services
MONGODB_URI=mongodb://localhost:27017/symbi
REDIS_HOST=localhost
JWT_SECRET=your-secret-key

# AI Providers (Optional)
OPENAI_API_KEY=sk-your-key
ANTHROPIC_API_KEY=sk-ant-your-key
PERPLEXITY_API_KEY=pplx-your-key

# Trust Scoring
TRUST_WEIGHT_TECHNICAL=0.25
TRUST_THRESHOLD_MINIMUM=0.3
TRUST_DECAY_ENABLED=true

# Feature Flags
ENABLE_METRICS=true
ENABLE_CACHE=true
ENABLE_WEBSOCKET=true
```

### Trust Scoring Weights

Customize the six-pillar trust model:

```javascript
const TRUST_WEIGHTS = {
  technical: 0.25,      // Technical reliability
  ethical: 0.20,         // Ethical considerations
  operational: 0.20,     // Operational performance
  transparency: 0.15,    // Transparency level
  security: 0.10,        // Security measures
  compliance: 0.10       // Compliance adherence
};
```

## 📈 Monitoring & Observability

### Prometheus Metrics

The platform exposes comprehensive metrics:

- **HTTP Requests**: Request duration, status codes, routes
- **Trust Scoring**: Calculation frequency, score distribution
- **AI Provider Usage**: Provider requests, success rates, errors
- **DID/VC Operations**: Creation, verification, resolution metrics
- **System Health**: CPU, memory, disk usage
- **Cache Performance**: Hit rates, operation counts

### Grafana Dashboards

Pre-configured dashboards for:
- System overview and health status
- Trust scoring trends and anomalies
- AI provider performance comparison
- Compliance status and alerts
- Real-time connection monitoring

### Health Checks

Multiple health check endpoints:
- `/health` - Basic liveness probe
- `/health/detailed` - Comprehensive system status
- `/health/ready` - Readiness for traffic
- `/health/live` - Kubernetes liveness probe

## 🔒 Security

### Authentication & Authorization
- JWT-based authentication with configurable expiration
- Role-based access control (RBAC)
- Rate limiting with Redis-backed distributed counters
- Input validation and sanitization

### Cryptographic Security
- Ed25519 digital signatures for DIDs
- SHA-256 hashing for audit trails
- Secure key generation and management
- Hash-chain for immutable audit logs

### Data Protection
- Request payload encryption
- Secure credential storage
- Audit trail integrity verification
- GDPR compliance features

## 🧪 Testing

### Test Suite
```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e

# Run with coverage
npm run test:coverage
```

### Load Testing
```bash
# API load testing
npm run test:load

# WebSocket stress testing
npm run test:websocket
```

## 🚀 Production Deployment

### Kubernetes Deployment
```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -l app=symbi
```

### Scaling Considerations
- Horizontal scaling with load balancers
- Redis clustering for high availability
- MongoDB replica sets for data redundancy
- CDN integration for static assets

### Backup & Recovery
- Automated database backups
- Configuration backup procedures
- Disaster recovery playbooks
- Data retention policies

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Jest for testing coverage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation wiki
- Contact the development team

## 🏆 Acknowledgments

- W3C for DID and VC standards
- OpenAI, Anthropic, Perplexity for AI services
- The open-source community for amazing tools and libraries