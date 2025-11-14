import React from 'react';
import { Search, Download, Filter, Calendar, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const AuditExplorer: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Audit Explorer</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Explore immutable audit trails with cryptographic verification
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Audit Trail Search</CardTitle>
          <CardDescription>Search and filter audit entries with cryptographic verification</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search audit entries..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Audit Entries</CardTitle>
          <CardDescription>Cryptographically verified audit trail entries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Audit Trail Explorer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              The audit trail explorer provides cryptographic verification of all system activities.
              Each entry is signed and linked in an immutable chain.
            </p>
            <div className="mt-6">
              <Button className="bg-violet-500 hover:bg-violet-600">
                <Search className="h-4 w-4 mr-2" />
                Start Exploring
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditExplorer;