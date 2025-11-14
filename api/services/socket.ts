import { Server } from 'socket.io';
import { SYMBIError } from '../../shared/types.js';

export function setupSocketHandlers(io: Server) {
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // Join room for specific agent updates
    socket.on('subscribe:agent', (agentId: string) => {
      console.log(`Client ${socket.id} subscribed to agent ${agentId}`);
      socket.join(`agent:${agentId}`);
    });

    // Join room for trust score updates
    socket.on('subscribe:trust', () => {
      console.log(`Client ${socket.id} subscribed to trust updates`);
      socket.join('trust:updates');
    });

    // Join room for compliance updates
    socket.on('subscribe:compliance', () => {
      console.log(`Client ${socket.id} subscribed to compliance updates`);
      socket.join('compliance:updates');
    });

    // Join room for AI orchestration updates
    socket.on('subscribe:ai', () => {
      console.log(`Client ${socket.id} subscribed to AI updates`);
      socket.join('ai:updates');
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });

    // Handle errors
    socket.on('error', (error) => {
      console.error('Socket error:', error);
    });
  });

  // Broadcast functions for different events
  return {
    broadcastTrustUpdate: (agentId: string, data: any) => {
      io.to(`agent:${agentId}`).emit('trust:update', {
        agentId,
        ...data,
        timestamp: new Date()
      });
      
      // Also broadcast to general trust updates room
      io.to('trust:updates').emit('trust:update', {
        agentId,
        ...data,
        timestamp: new Date()
      });
    },

    broadcastComplianceUpdate: (agentId: string, data: any) => {
      io.to(`agent:${agentId}`).emit('compliance:update', {
        agentId,
        ...data,
        timestamp: new Date()
      });
      
      io.to('compliance:updates').emit('compliance:update', {
        agentId,
        ...data,
        timestamp: new Date()
      });
    },

    broadcastAIOrchestrationUpdate: (orchestrationId: string, data: any) => {
      io.to('ai:updates').emit('ai:orchestration:update', {
        orchestrationId,
        ...data,
        timestamp: new Date()
      });
    },

    broadcastAlert: (alert: any) => {
      io.emit('alert', {
        ...alert,
        timestamp: new Date()
      });
    },

    broadcastSystemHealth: (health: any) => {
      io.emit('system:health', {
        ...health,
        timestamp: new Date()
      });
    }
  };
}