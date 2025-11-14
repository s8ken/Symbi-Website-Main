import { renderHook, act, waitFor } from '@testing-library/react';
import { io, Socket } from 'socket.io-client';
import { useSocket, useTrustSocket, useComplianceSocket, useAiSocket, useAlertSocket, useHealthSocket } from '../../hooks/useSocket';

// Mock socket.io-client
jest.mock('socket.io-client');
const mockIo = io as jest.MockedFunction<typeof io>;

describe('Socket Hooks', () => {
  let mockSocket: Partial<Socket>;

  beforeEach(() => {
    mockSocket = {
      connected: false,
      id: null,
      connect: jest.fn(),
      disconnect: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
      close: jest.fn(),
    };

    mockIo.mockReturnValue(mockSocket as Socket);
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('useSocket', () => {
    it('should initialize with disconnected state', () => {
      const { result } = renderHook(() => useSocket());

      expect(result.current.connected).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.socketId).toBeNull();
    });

    it('should connect to socket', () => {
      const { result } = renderHook(() => useSocket());

      act(() => {
        result.current.connect();
      });

      expect(mockIo).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
        transports: ['websocket'],
        reconnection: true,
      }));
    });

    it('should handle connection events', () => {
      const onMessage = jest.fn();
      const { result } = renderHook(() => useSocket({ onMessage }));

      act(() => {
        result.current.connect();
      });

      // Simulate connection
      const connectHandler = mockSocket.on.mock.calls.find(call => call[0] === 'connect')?.[1];
      if (connectHandler) {
        act(() => {
          connectHandler();
        });
      }

      expect(result.current.connected).toBe(true);
      expect(result.current.error).toBeNull();
    });

    it('should handle disconnection events', () => {
      const { result } = renderHook(() => useSocket());

      act(() => {
        result.current.connect();
      });

      // Simulate disconnection
      const disconnectHandler = mockSocket.on.mock.calls.find(call => call[0] === 'disconnect')?.[1];
      if (disconnectHandler) {
        act(() => {
          disconnectHandler();
        });
      }

      expect(result.current.connected).toBe(false);
    });

    it('should handle errors', () => {
      const error = new Error('Connection failed');
      const { result } = renderHook(() => useSocket());

      act(() => {
        result.current.connect();
      });

      // Simulate error
      const errorHandler = mockSocket.on.mock.calls.find(call => call[0] === 'error')?.[1];
      if (errorHandler) {
        act(() => {
          errorHandler(error);
        });
      }

      expect(result.current.error).toBe(error.message);
    });

    it('should cleanup on unmount', () => {
      const { unmount } = renderHook(() => useSocket());

      unmount();

      expect(mockSocket.disconnect).toHaveBeenCalled();
    });
  });

  describe('useTrustSocket', () => {
    it('should handle trust updates', () => {
      const onTrustUpdate = jest.fn();
      const { result } = renderHook(() => useTrustSocket(onTrustUpdate));

      act(() => {
        result.current.connect();
      });

      // Simulate trust update
      const trustUpdateHandler = mockSocket.on.mock.calls.find(call => call[0] === 'trust:update')?.[1];
      if (trustUpdateHandler) {
        const trustData = { score: 0.85, trend: 'improving' };
        act(() => {
          trustUpdateHandler(trustData);
        });
      }

      expect(onTrustUpdate).toHaveBeenCalledWith(expect.objectContaining({
        score: 0.85,
        trend: 'improving',
      }));
    });

    it('should emit trust requests', () => {
      const { result } = renderHook(() => useTrustSocket());

      act(() => {
        result.current.connect();
      });

      act(() => {
        result.current.emit('trust:request', { userId: '123' });
      });

      expect(mockSocket.emit).toHaveBeenCalledWith('trust:request', { userId: '123' });
    });
  });

  describe('useComplianceSocket', () => {
    it('should handle compliance updates', () => {
      const onComplianceUpdate = jest.fn();
      const { result } = renderHook(() => useComplianceSocket(onComplianceUpdate));

      act(() => {
        result.current.connect();
      });

      // Simulate compliance update
      const complianceHandler = mockSocket.on.mock.calls.find(call => call[0] === 'compliance:update')?.[1];
      if (complianceHandler) {
        const complianceData = { framework: 'IEEE_2857', status: 'compliant' };
        act(() => {
          complianceHandler(complianceData);
        });
      }

      expect(onComplianceUpdate).toHaveBeenCalledWith(expect.objectContaining({
        framework: 'IEEE_2857',
        status: 'compliant',
      }));
    });
  });

  describe('useAiSocket', () => {
    it('should handle AI detection updates', () => {
      const onAiUpdate = jest.fn();
      const { result } = renderHook(() => useAiSocket(onAiUpdate));

      act(() => {
        result.current.connect();
      });

      // Simulate AI update
      const aiHandler = mockSocket.on.mock.calls.find(call => call[0] === 'ai:detection')?.[1];
      if (aiHandler) {
        const aiData = { type: 'anomaly', confidence: 0.95 };
        act(() => {
          aiHandler(aiData);
        });
      }

      expect(onAiUpdate).toHaveBeenCalledWith(expect.objectContaining({
        type: 'anomaly',
        confidence: 0.95,
      }));
    });
  });

  describe('useAlertSocket', () => {
    it('should handle alert notifications', () => {
      const onAlert = jest.fn();
      const { result } = renderHook(() => useAlertSocket(onAlert));

      act(() => {
        result.current.connect();
      });

      // Simulate alert
      const alertHandler = mockSocket.on.mock.calls.find(call => call[0] === 'alert')?.[1];
      if (alertHandler) {
        const alertData = { level: 'warning', message: 'Test alert' };
        act(() => {
          alertHandler(alertData);
        });
      }

      expect(onAlert).toHaveBeenCalledWith(expect.objectContaining({
        level: 'warning',
        message: 'Test alert',
      }));
    });
  });

  describe('useHealthSocket', () => {
    it('should handle health status updates', () => {
      const onHealthUpdate = jest.fn();
      const { result } = renderHook(() => useHealthSocket(onHealthUpdate));

      act(() => {
        result.current.connect();
      });

      // Simulate health update
      const healthHandler = mockSocket.on.mock.calls.find(call => call[0] === 'health:status')?.[1];
      if (healthHandler) {
        const healthData = { status: 'healthy', uptime: 3600 };
        act(() => {
          healthHandler(healthData);
        });
      }

      expect(onHealthUpdate).toHaveBeenCalledWith(expect.objectContaining({
        status: 'healthy',
        uptime: 3600,
      }));
    });
  });

  describe('Error Handling', () => {
    it('should handle connection failures gracefully', () => {
      const { result } = renderHook(() => useSocket());

      act(() => {
        result.current.connect();
      });

      // Simulate connection error
      const connectErrorHandler = mockSocket.on.mock.calls.find(call => call[0] === 'connect_error')?.[1];
      if (connectErrorHandler) {
        act(() => {
          connectErrorHandler(new Error('Connection failed'));
        });
      }

      expect(result.current.connected).toBe(false);
      expect(result.current.error).toBe('Connection failed');
    });

    it('should handle reconnection attempts', () => {
      const { result } = renderHook(() => useSocket({ reconnectionAttempts: 3 }));

      act(() => {
        result.current.connect();
      });

      // Simulate reconnection attempt
      const reconnectHandler = mockSocket.on.mock.calls.find(call => call[0] === 'reconnect_attempt')?.[1];
      if (reconnectHandler) {
        act(() => {
          reconnectHandler(1);
        });
      }

      // Should still be in disconnected state during reconnection
      expect(result.current.connected).toBe(false);
    });
  });
});