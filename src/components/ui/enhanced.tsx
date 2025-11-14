import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Info, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  details?: string;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }>;
}

export function EnhancedAlert({
  type,
  title,
  message,
  details,
  onClose,
  autoClose = false,
  duration = 5000,
  actions = [],
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStyles = () => {
    const baseStyles = 'border rounded-lg p-4 mb-4 transition-all duration-300';
    const typeStyles = {
      success: 'bg-green-50 border-green-200 text-green-800',
      error: 'bg-red-50 border-red-200 text-red-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800',
    };

    return `${baseStyles} ${typeStyles[type]} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`;
  };

  return (
    <div className={getStyles()}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="mt-1 text-sm">
            <p>{message}</p>
            {details && (
              <div className="mt-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs font-medium hover:underline focus:outline-none"
                >
                  {isExpanded ? 'Hide details' : 'Show details'}
                </button>
                {isExpanded && (
                  <div className="mt-2 text-xs bg-white bg-opacity-50 rounded p-2">
                    {details}
                  </div>
                )}
              </div>
            )}
          </div>
          {actions.length > 0 && (
            <div className="mt-3 flex space-x-2">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`text-xs font-medium px-3 py-1 rounded border transition-colors ${
                    action.variant === 'danger'
                      ? 'border-red-300 text-red-700 hover:bg-red-50'
                      : action.variant === 'primary'
                      ? 'border-blue-300 text-blue-700 hover:bg-blue-50'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {onClose && (
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={handleClose}
              className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    value: number;
    label?: string;
  };
  status?: 'success' | 'warning' | 'error' | 'info';
  icon?: React.ReactNode;
  description?: string;
  onClick?: () => void;
  loading?: boolean;
}

export function EnhancedMetricCard({
  title,
  value,
  unit,
  trend,
  status = 'info',
  icon,
  description,
  onClick,
  loading = false,
}: MetricCardProps) {
  const getStatusColor = () => {
    const colors = {
      success: 'border-green-200 bg-green-50',
      warning: 'border-yellow-200 bg-yellow-50',
      error: 'border-red-200 bg-red-50',
      info: 'border-blue-200 bg-blue-50',
    };
    return colors[status];
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    
    switch (trend.direction) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'neutral':
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = () => {
    if (!trend) return 'text-gray-500';
    
    switch (trend.direction) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'neutral':
        return 'text-gray-600';
    }
  };

  if (loading) {
    return (
      <div className={`border rounded-lg p-4 ${getStatusColor()} animate-pulse`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border rounded-lg p-4 ${getStatusColor()} ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-semibold text-gray-900">
                {typeof value === 'number' ? value.toLocaleString() : value}
                {unit && <span className="text-sm text-gray-500 ml-1">{unit}</span>}
              </p>
              {trend && (
                <div className={`flex items-center space-x-1 text-sm ${getTrendColor()}`}>
                  {getTrendIcon()}
                  <span>{trend.value}%</span>
                  {trend.label && <span className="text-gray-500">{trend.label}</span>}
                </div>
              )}
            </div>
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
  animated?: boolean;
}

export function EnhancedProgressBar({
  value,
  max = 100,
  label,
  color = 'blue',
  size = 'md',
  showPercentage = true,
  animated = false,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const getColorClasses = () => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
    };
    return colors[color];
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };
    return sizes[size];
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && (
            <span className="text-sm text-gray-500">{percentage.toFixed(0)}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${getSizeClasses()}`}>
        <div
          className={`${getColorClasses()} ${getSizeClasses()} rounded-full transition-all duration-300 ${animated ? 'animate-pulse' : ''}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'green';
  text?: string;
}

export function LoadingSpinner({ size = 'md', color = 'blue', text }: LoadingSpinnerProps) {
  const getSizeClasses = () => {
    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    };
    return sizes[size];
  };

  const getColorClasses = () => {
    const colors = {
      blue: 'text-blue-600',
      gray: 'text-gray-600',
      green: 'text-green-600',
    };
    return colors[color];
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className={`${getSizeClasses()} ${getColorClasses()} animate-spin`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );
}