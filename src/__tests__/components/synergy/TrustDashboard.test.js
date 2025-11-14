import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { TrustDashboard } from '../../components/synergy/TrustDashboard';
import { useTrustSocket } from '../../hooks/useSocket';

// Mock the hooks and components
jest.mock('../../hooks/useSocket');

// Mock Recharts components
jest.mock('recharts', () => ({
  LineChart: ({ children, data }) => (
    <div data-testid="line-chart" data-data={JSON.stringify(data)}>
      {children}
    </div>
  ),
  Line: ({ dataKey }) => <div data-testid={`line-${dataKey}`} />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  CartesianGrid: () => <div data-testid="cartesian-grid" />,
  Tooltip: () => <div data-testid="tooltip" />,
  ResponsiveContainer: ({ children }) => <div data-testid="responsive-container">{children}</div>,
}));

describe('TrustDashboard', () => {
  const mockUseTrustSocket = useTrustSocket;
  const mockConnect = jest.fn();
  const mockDisconnect = jest.fn();
  const mockEmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseTrustSocket.mockReturnValue({
      connected: true,
      error: null,
      socketId: 'test-socket-id',
      connect: mockConnect,
      disconnect: mockDisconnect,
      emit: mockEmit,
    });
  });

  it('should render dashboard with initial state', () => {
    render(<TrustDashboard />);

    expect(screen.getByText('Trust Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Overall Trust Score')).toBeInTheDocument();
    expect(screen.getByText('Active Connections')).toBeInTheDocument();
    expect(screen.getByText('Trust Trend')).toBeInTheDocument();
    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
  });

  it('should show connection status', () => {
    render(<TrustDashboard />);

    expect(screen.getByText('Connected')).toBeInTheDocument();
  });

  it('should show disconnected status', () => {
    mockUseTrustSocket.mockReturnValue({
      connected: false,
      error: null,
      socketId: null,
      connect: mockConnect,
      disconnect: mockDisconnect,
      emit: mockEmit,
    });

    render(<TrustDashboard />);

    expect(screen.getByText('Disconnected')).toBeInTheDocument();
  });

  it('should handle connection errors', () => {
    mockUseTrustSocket.mockReturnValue({
      connected: false,
      error: 'Connection failed',
      socketId: null,
      connect: mockConnect,
      disconnect: mockDisconnect,
      emit: mockEmit,
    });

    render(<TrustDashboard />);

    expect(screen.getByText('Connection Error: Connection failed')).toBeInTheDocument();
  });

  it('should display trust metrics', () => {
    render(<TrustDashboard />);

    // Initially should show loading or default values
    expect(screen.getByText('0')).toBeInTheDocument(); // Active connections
    expect(screen.getByText('0%')).toBeInTheDocument(); // Trust score
  });

  it('should cleanup on unmount', () => {
    const { unmount } = render(<TrustDashboard />);

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});