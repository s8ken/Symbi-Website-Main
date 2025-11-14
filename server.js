import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "ws:", "wss:"],
    },
  },
}));

app.use(hpp());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0'
  });
});

// Mock API routes
app.get('/api/trust/agents', (req, res) => {
  res.json({
    success: true,
    data: {
      agents: [
        {
          id: 'agent-001',
          name: 'OpenAI GPT-4',
          provider: 'openai',
          trustScore: 0.85,
          lastAssessment: new Date(),
          status: 'active'
        },
        {
          id: 'agent-002', 
          name: 'Anthropic Claude',
          provider: 'anthropic',
          trustScore: 0.92,
          lastAssessment: new Date(),
          status: 'active'
        }
      ],
      total: 2
    }
  });
});

app.post('/api/trust/declare', (req, res) => {
  const { agentId, trustScore, confidence } = req.body;
  
  res.json({
    success: true,
    data: {
      declarationId: `decl-${Date.now()}`,
      agentId,
      trustScore,
      confidence,
      timestamp: new Date(),
      status: 'confirmed'
    }
  });
});

app.get('/api/ai/providers', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 'openai',
        name: 'OpenAI',
        status: 'operational',
        trustScore: 0.85
      },
      {
        id: 'anthropic',
        name: 'Anthropic',
        status: 'operational', 
        trustScore: 0.92
      }
    ]
  });
});

app.post('/api/ai/orchestrate', (req, res) => {
  const { prompt, providers } = req.body;
  
  res.json({
    success: true,
    data: {
      orchestrationId: `orch-${Date.now()}`,
      request: { prompt, providers },
      results: {
        openai: {
          response: `Mock response from OpenAI: ${prompt}`,
          trust: 0.85,
          bias: 0.1
        },
        anthropic: {
          response: `Mock response from Anthropic: ${prompt}`,
          trust: 0.92,
          bias: 0.05
        }
      },
      summary: {
        bestProvider: 'anthropic',
        averageTrust: 0.885
      }
    }
  });
});

app.get('/api/compliance/frameworks', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 'gdpr',
        name: 'GDPR',
        description: 'General Data Protection Regulation',
        version: '2016/679'
      },
      {
        id: 'iso27001',
        name: 'ISO 27001',
        description: 'Information Security Management',
        version: '2022'
      }
    ]
  });
});

app.get('/api/monitoring/health', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date(),
      services: {
        api: 'operational',
        database: 'operational',
        ai_providers: 'operational'
      }
    }
  });
});

// Socket.IO setup
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('subscribe:trust', () => {
    console.log(`Client ${socket.id} subscribed to trust updates`);
    socket.join('trust:updates');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: {
      message: err.message || 'Internal server error',
      code: 'INTERNAL_ERROR'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: {
      code: 'NOT_FOUND',
      message: 'Route not found'
    }
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 SYMBI Trust Platform running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});