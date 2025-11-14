import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  IdCard, 
  FileCheck, 
  Search, 
  Settings,


  BarChart3,



  BookOpen,
  BarChart,
  TrendingUp
} from 'lucide-react';
import { useTrustStore } from '../stores/trustStore';
import { useEffect } from 'react';

const Layout: React.FC = () => {
  const location = useLocation();
  const { getOverallTrustScore, isLoading } = useTrustStore();
  const overallTrustScore = getOverallTrustScore();

  useEffect(() => {
    // Initialize trust data
    useTrustStore.getState().initializeTrustData();
  }, []);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Trust Console', href: '/trust', icon: Shield },
    { name: 'Trust Dashboard', href: '/trust/dashboard', icon: TrendingUp },
    { name: 'AI Orchestration', href: '/ai', icon: Brain },
    { name: 'DID Manager', href: '/did', icon: IdCard },
    { name: 'Compliance Portal', href: '/compliance', icon: FileCheck },
    { name: 'Audit Explorer', href: '/audit', icon: Search },
    { name: 'Security Monitor', href: '/security', icon: Shield },
    { name: 'Analytics', href: '/analytics', icon: BarChart },
    { name: 'Educators Hub', href: '/educators', icon: BookOpen },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const getTrustScoreColor = (score: number) => {
    if (score >= 0.9) return 'text-green-500';
    if (score >= 0.75) return 'text-blue-500';
    if (score >= 0.6) return 'text-yellow-500';
    if (score >= 0.4) return 'text-orange-500';
    return 'text-red-500';
  };

  const getTrustScoreBg = (score: number) => {
    if (score >= 0.9) return 'bg-green-500';
    if (score >= 0.75) return 'bg-blue-500';
    if (score >= 0.6) return 'bg-yellow-500';
    if (score >= 0.4) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">SYMBI</span>
            </div>
            <div className={`h-2 w-2 rounded-full ${getTrustScoreBg(overallTrustScore)} animate-pulse`} />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Trust Score Indicator */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Trust Score</span>
                <span className={`font-semibold ${getTrustScoreColor(overallTrustScore)}`}>
                  {isLoading ? '...' : `${Math.round(overallTrustScore * 100)}%`}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getTrustScoreBg(overallTrustScore)}`}
                  style={{ width: `${overallTrustScore * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;