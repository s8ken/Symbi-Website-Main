import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import TrustConsole from './pages/TrustConsole';
import AIOrchestration from './pages/AIOrchestration';
import DIDManager from './pages/DIDManager';
import CompliancePortal from './pages/CompliancePortal';
import AuditExplorer from './pages/AuditExplorer';
import EducatorsHub from './pages/EducatorsHub';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Settings from './pages/Settings';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="trust" element={<TrustConsole />} />
              <Route path="ai" element={<AIOrchestration />} />
              <Route path="did" element={<DIDManager />} />
              <Route path="compliance" element={<CompliancePortal />} />
              <Route path="audit" element={<AuditExplorer />} />
              <Route path="educators" element={<EducatorsHub />} />
              <Route path="educators/case-study/:id" element={<CaseStudyDetail />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
          <Toaster
            position="top-right"
            expand={true}
            richColors
            closeButton
            duration={4000}
          />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;