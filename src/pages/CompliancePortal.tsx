import React from 'react';
import { FileCheck, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const CompliancePortal: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Compliance Portal</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Monitor regulatory compliance and generate audit reports
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
              EU AI Act Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">94.2%</div>
            <p className="text-xs text-green-600 dark:text-green-400">Compliant</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 dark:border-yellow-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
              Open Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">3</div>
            <p className="text-xs text-yellow-600 dark:text-yellow-400">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Last Audit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">2 days</div>
            <p className="text-xs text-blue-600 dark:text-blue-400">Ago</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Risk Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">Low</div>
            <p className="text-xs text-purple-600 dark:text-purple-400">Acceptable</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Findings</CardTitle>
          <CardDescription>Recent compliance issues and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-300">Transparency Requirements</h4>
                  <Badge variant="secondary">Major</Badge>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                  Limited transparency in AI decision-making processes. Consider implementing explainable AI techniques.
                </p>
                <div className="mt-2 flex items-center space-x-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  <Button size="sm">Mark Resolved</Button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <FileCheck className="h-5 w-5 text-green-500 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-green-800 dark:text-green-300">Data Protection Compliance</h4>
                  <Badge variant="default">Resolved</Badge>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                  All data processing activities are compliant with GDPR requirements.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompliancePortal;