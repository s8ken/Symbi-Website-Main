import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { TrustDashboard } from '../../components/synergy/TrustDashboard';
import { useTrustSocket } from '../../hooks/useSocket';
import { toast } from 'sonner';

// Mock the hooks and components
jest.mock('../../hooks/useSocket');
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock Recharts components
jest.mock('recharts', () => ({
  LineChart: ({ children, data }: any) => (
    <div data-testid="line-chart" data-data={JSON.stringify(data)}>
      {children}
    </div>
  ),
  Line: ({ dataKey }: any) => <div data-testid={`line-${dataKey}`} />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  CartesianGrid: () => <div data-testid="cartesian-grid" />,
  Tooltip: () => <div data-testid="tooltip" />,
  ResponsiveContainer: ({ children }: any) => <div data-testid="responsive-container">{children}</div>,
}));

describe('TrustDashboard', () => {
  const mockUseTrustSocket = useTrustSocket as jest.MockedFunction<typeof useTrustSocket>;
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

    const statusIndicator = screen.getByTestId('connection-status');
    expect(statusIndicator).toHaveClass('bg-green-500');
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

    const statusIndicator = screen.getByTestId('connection-status');
    expect(statusIndicator).toHaveClass('bg-red-500');
    expect(screen.getByText('Disconnected')).toBeInTheDocument();
  });

  it('should handle trust score updates', async () => {
    const { rerender } = render(<TrustDashboard />);

    // Simulate trust score update through socket
    const trustUpdateHandler = mockUseTrustSocket.mock.calls[0][0];
    
    act(() => {
      trustUpdateHandler({ score: 0.85, trend: 'improving' });
    });

    rerender(<TrustDashboard />);

    await waitFor(() => {
      expect(screen.getByText('85%')).toBeInTheDocument();
      expect(screen.getByText('Improving')).toBeInTheDocument();
    });

    expect(toast.success).toHaveBeenCalledWith('Trust score updated: 85%');
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

  it('should display trust metrics', async () => {
    render(<TrustDashboard />);

    // Initially should show loading or default values
    expect(screen.getByText('0')).toBeInTheDocument(); // Active connections
    expect(screen.getByText('0%')).toBeInTheDocument(); // Trust score
  });

  it('should handle refresh button click', async () => {
    render(<TrustDashboard />);

    const refreshButton = screen.getByRole('button', { name: /refresh/i });
    fireEvent.click(refreshButton);

    expect(mockEmit).toHaveBeenCalledWith('trust:refresh', {});
  });

  it('should handle manual connection toggle', async () => {
    render(<TrustDashboard />);

    const toggleButton = screen.getByRole('button', { name: /disconnect/i });
    fireEvent.click(toggleButton);

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('should display activity feed', async () => {
    const { rerender } = render(<TrustDashboard />);

    // Simulate activity update
    const trustUpdateHandler = mockUseTrustSocket.mock.calls[0][0];
    
    act(() => {
      trustUpdateHandler({ 
        score: 0.9, 
        trend: 'stable',
        activity: 'Trust score calculated'
      });
    });

    rerender(<TrustDashboard />);

    await waitFor(() => {
      expect(screen.getByText('Trust score calculated')).toBeInTheDocument();
    });
  });

  it('should handle trend visualization', async () => {
    const { rerender } = render(<TrustDashboard />);

    // Simulate multiple trust updates to build trend data
    const trustUpdateHandler = mockUseTrustSocket.mock.calls[0][0];
    
    act(() => {
      trustUpdateHandler({ score: 0.8, trend: 'stable' });
    });

    act(() => {
      trustUpdateHandler({ score: 0.85, trend: 'improving' });
    });

    rerender(<TrustDashboard />);

    // Should render chart with trend data
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });

  it('should handle error states gracefully', () => {
    mockUseTrustSocket.mockImplementation(() => {
      throw new Error('Socket initialization failed');
    });

    // Should not crash the component
    expect(() => render(<TrustDashboard />)).not.toThrow();
    
    expect(screen.getByText('Connection Error: Socket initialization failed')).toBeInTheDocument();
  });

  it('should cleanup on unmount', () => {
    const { unmount } = render(<TrustDashboard />);

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});