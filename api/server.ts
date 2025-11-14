import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import sonateSecurity from './middleware/security.middleware.js';

import { errorHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/requestLogger.js';
import { authMiddleware } from './middleware/auth.js';
import { metricsMiddleware } from './services/metrics.js';
import { apiLimiter, authLimiter, trustScoreLimiter, aiOrchestrationLimiter } from './middleware/rateLimiter.js';

import trustRoutes from './routes/trust.js';
import didRoutes from './routes/did.js';
import vcRoutes from './routes/vc.js';
import aiRoutes from './routes/ai.js';
import complianceRoutes from './routes/compliance.js';
import monitoringRoutes from './routes/monitoring.js';
import healthRoutes from './routes/health.js';
import metricsRoutes from './routes/metrics.js';
import educatorsRoutes from './routes/educators.js';
import handshakeRoutes from './routes/handshake.js';
import scoringRoutes from './routes/scoring.js';
import blockchainRoutes from './routes/blockchain.js';
import biasRoutes from './routes/bias.js';
import zkRoutes from './routes/zk.js';
import secureMPCRoutes from './routes/secureMPC.js';
import analyticsRoutes from './routes/analytics.js';

import { setupSocketHandlers } from './services/socket.js';
import { connectDatabase } from './utils/database.js';
import { connectRedis } from './utils/redis.js';
import { SYMBIError } from '../shared/types.js';

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

// Enhanced security middleware from Sonate
app.use(sonateSecurity.requestSizeLimiter('10mb'));
app.use(sonateSecurity.validateContentType(['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data']));
app.use(sonateSecurity.sanitizeInput);
app.use(sonateSecurity.detectSuspiciousActivity);

// Rate limiting
app.use('/api/', apiLimiter);
app.use('/api/auth', sonateSecurity.authRateLimit);
app.use('/api/trust/declarations', sonateSecurity.trustDeclarationRateLimit);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging and metrics
app.use(metricsMiddleware);
app.use(requestLogger);

// Health check endpoint (basic)
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0'
  });
});

// Advanced health and metrics routes
app.use('/api', healthRoutes);
app.use('/api', metricsRoutes);

// API routes
app.use('/api/trust', trustRoutes);
app.use('/api/did', didRoutes);
app.use('/api/vc', vcRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/monitoring', monitoringRoutes);
app.use('/api/educators', educatorsRoutes);
app.use('/api/handshake', handshakeRoutes);
app.use('/api/scoring', scoringRoutes);
app.use('/api/blockchain', blockchainRoutes);
app.use('/api/bias', biasRoutes);
app.use('/api/zk', zkRoutes);
app.use('/api/secure-mpc', secureMPCRoutes);
app.use('/api/analytics', analyticsRoutes);

// Protected routes (require authentication)
app.use('/api/admin', authMiddleware, (req, res) => {
  res.json({ message: 'Admin access granted' });
});

// Socket.IO setup
setupSocketHandlers(io);

// Error handling middleware (must be last)
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: {
      code: 'NOT_FOUND',
      message: 'Route not found'
    }
  });
});

// Global error handlers
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
    process.exit(0);
  });
});

// Start server
async function startServer() {
  try {
    // Connect to databases
    await connectDatabase();
    await connectRedis();

    server.listen(PORT, () => {
      console.log(`🚀 SYMBI Trust Platform running on port ${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

export { app, io };
