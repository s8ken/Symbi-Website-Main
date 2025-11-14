import React from 'react';
import { Key, Plus, Search, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const DIDManager: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">DID Manager</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Manage decentralized identifiers and verifiable credentials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="crypto-glow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Key className="h-5 w-5 text-violet-500" />
              <span>Create DID</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Generate a new decentralized identifier with cryptographic keys
            </p>
            <Button className="w-full bg-violet-500 hover:bg-violet-600">
              <Plus className="h-4 w-4 mr-2" />
              Generate DID
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-blue-500" />
              <span>Resolve DID</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Look up DID documents and verification methods
            </p>
            <Button variant="outline" className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Resolve Document
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5 text-green-500" />
              <span>Export Keys</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Export cryptographic keys for backup or migration
            </p>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Export Keys
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your DIDs</CardTitle>
          <CardDescription>Manage your decentralized identifiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Key className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No DIDs created yet. Generate your first decentralized identifier to get started.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DIDManager;