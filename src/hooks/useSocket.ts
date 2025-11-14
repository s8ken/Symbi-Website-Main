import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketHookOptions {
  url?: string;
  autoConnect?: boolean;
  reconnect?: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: Error) => void;
}

interface SocketState {
  connected: boolean;
  error: Error | null;
  socketId: string | null;
}

export const useSocket = (options: SocketHookOptions = {}) => {
  const {
    url = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000',
    autoConnect = true,
    reconnect = true,
    onConnect,
    onDisconnect,
    onError
  } = options;

  const socketRef = useRef<Socket | null>(null);
  const [state, setState] = useState<SocketState>({
    connected: false,
    error: null,
    socketId: null
  });

  useEffect(() => {
    if (!autoConnect) return;

    const socket = io(url, {
      reconnection: reconnect,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 20000
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setState(prev => ({
        ...prev,
        connected: true,
        error: null,
        socketId: socket.id || null
      }));
      onConnect?.();
    });

    socket.on('disconnect', () => {
      setState(prev => ({
        ...prev,
        connected: false,
        socketId: null
      }));
      onDisconnect?.();
    });

    socket.on('connect_error', (error) => {
      setState(prev => ({
        ...prev,
        connected: false,
        error: error
      }));
      onError?.(error);
    });

    socket.on('error', (error) => {
      setState(prev => ({
        ...prev,
        error: error
      }));
      onError?.(error);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [url, autoConnect, reconnect, onConnect, onDisconnect, onError]);

  const subscribe = (event: string, callback: (...args: any[]) => void) => {
    if (!socketRef.current) return;
    socketRef.current.on(event, callback);
  };

  const unsubscribe = (event: string, callback?: (...args: any[]) => void) => {
    if (!socketRef.current) return;
    if (callback) {
      socketRef.current.off(event, callback);
    } else {
      socketRef.current.off(event);
    }
  };

  const emit = (event: string, ...args: any[]) => {
    if (!socketRef.current || !state.connected) return false;
    socketRef.current.emit(event, ...args);
    return true;
  };

  const subscribeToAgent = (agentId: string) => {
    emit('subscribe:agent', agentId);
  };

  const subscribeToTrust = () => {
    emit('subscribe:trust');
  };

  const subscribeToCompliance = () => {
    emit('subscribe:compliance');
  };

  const subscribeToAI = () => {
    emit('subscribe:ai');
  };

  return {
    socket: socketRef.current,
    connected: state.connected,
    error: state.error,
    socketId: state.socketId,
    connect: () => {
      if (!socketRef.current) {
        const socket = io(url, {
          autoConnect: true,
          reconnection: reconnect,
        });
        socketRef.current = socket;
        
        socket.on('connect', () => {
          setState(prev => ({
            ...prev,
            connected: true,
            error: null,
            socketId: socket.id || null
          }));
          onConnect?.();
        });

        socket.on('disconnect', () => {
          setState(prev => ({
            ...prev,
            connected: false,
            socketId: null
          }));
          onDisconnect?.();
        });

        socket.on('connect_error', (error) => {
          setState(prev => ({
            ...prev,
            connected: false,
            error: error
          }));
          onError?.(error);
        });

        socket.on('error', (error) => {
          setState(prev => ({
            ...prev,
            error: error
          }));
          onError?.(error);
        });
      }
    },
    subscribe,
    unsubscribe,
    emit,
    subscribeToAgent,
    subscribeToTrust,
    subscribeToCompliance,
    subscribeToAI
  };
};

// Specialized hooks for different features
export const useTrustSocket = (onTrustUpdate?: (data: any) => void) => {
  const { subscribe, unsubscribe, subscribeToTrust, connected } = useSocket();

  useEffect(() => {
    if (!connected || !onTrustUpdate) return;

    subscribe('trust:update', onTrustUpdate);
    subscribeToTrust();

    return () => {
      unsubscribe('trust:update', onTrustUpdate);
    };
  }, [connected, onTrustUpdate, subscribe, unsubscribe, subscribeToTrust]);

  return { connected };
};

export const useComplianceSocket = (onComplianceUpdate?: (data: any) => void) => {
  const { subscribe, unsubscribe, subscribeToCompliance, connected } = useSocket();

  useEffect(() => {
    if (!connected || !onComplianceUpdate) return;

    subscribe('compliance:update', onComplianceUpdate);
    subscribeToCompliance();

    return () => {
      unsubscribe('compliance:update', onComplianceUpdate);
    };
  }, [connected, onComplianceUpdate, subscribe, unsubscribe, subscribeToCompliance]);

  return { connected };
};

export const useAISocket = (onAIUpdate?: (data: any) => void) => {
  const { subscribe, unsubscribe, subscribeToAI, connected } = useSocket();

  useEffect(() => {
    if (!connected || !onAIUpdate) return;

    subscribe('ai:orchestration:update', onAIUpdate);
    subscribeToAI();

    return () => {
      unsubscribe('ai:orchestration:update', onAIUpdate);
    };
  }, [connected, onAIUpdate, subscribe, unsubscribe, subscribeToAI]);

  return { connected };
};

export const useAlertSocket = (onAlert?: (alert: any) => void) => {
  const { subscribe, unsubscribe, connected } = useSocket();

  useEffect(() => {
    if (!connected || !onAlert) return;

    subscribe('alert', onAlert);

    return () => {
      unsubscribe('alert', onAlert);
    };
  }, [connected, onAlert, subscribe, unsubscribe]);

  return { connected };
};

export const useSystemHealthSocket = (onHealthUpdate?: (health: any) => void) => {
  const { subscribe, unsubscribe, connected } = useSocket();

  useEffect(() => {
    if (!connected || !onHealthUpdate) return;

    subscribe('system:health', onHealthUpdate);

    return () => {
      unsubscribe('system:health', onHealthUpdate);
    };
  }, [connected, onHealthUpdate, subscribe, unsubscribe]);

  return { connected };
};