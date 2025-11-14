import { renderHook, act } from '@testing-library/react';
import { io } from 'socket.io-client';
import { useSocket } from '../../hooks/useSocket';

// Mock socket.io-client
jest.mock('socket.io-client');
const mockIo = io as jest.MockedFunction<typeof io>;

describe('Socket Hooks', () => {
  let mockSocket;

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

    mockIo.mockReturnValue(mockSocket);
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
      const { result } = renderHook(() => useSocket());

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

    it('should cleanup on unmount', () => {
      const { unmount } = renderHook(() => useSocket());

      unmount();

      expect(mockSocket.disconnect).toHaveBeenCalled();
    });
  });
});