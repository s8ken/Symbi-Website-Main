"use client"

import { cn } from "../../lib/utils"
import Link from "next/link"
import { Code2, Database, Shield, Eye, Zap, Server, Lock, Activity } from "lucide-react"

export default function TechnologyWhitepaperPage() {
  return (
    <main className="min-h-screen bg-white text-black font-mono">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SYMBI Technology Whitepaper</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Technical architecture and implementation of the SYMBI protocol for ethical AI governance
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-gray-800 mb-6">
            The SYMBI Technology Whitepaper provides a comprehensive overview of the technical architecture, 
            implementation details, and security measures that power the SYMBI protocol. This document outlines 
            how our technology stack enables transparent AI governance, bidirectional trust verification, and 
            sovereign AI development while maintaining the highest standards of security and performance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Server className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Architecture</h3>
              <p className="text-gray-700">
                Modular, scalable backend with distributed trust verification
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Shield className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-gray-700">
                Multi-layered security with zero-knowledge proofs and encryption
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Zap className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Performance</h3>
              <p className="text-gray-700">
                Optimized for low-latency trust verification and real-time monitoring
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">System Architecture Overview</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Core Components</li>
                  <li>Interaction Flow</li>
                  <li>Scalability Design</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Trust Protocol Implementation</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>9-Factor Trust Scoring</li>
                  <li>Temporal Decay Function</li>
                  <li>Trust Verification Process</li>
                  <li>Trust Bond Formation</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Oracle System</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Identity Validation</li>
                  <li>Transparency Layer</li>
                  <li>Memory Management</li>
                  <li>Trust Arbitration</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Data Sovereignty Architecture</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Decentralized Identity (DID)</li>
                  <li>Data Pod Implementation</li>
                  <li>Consent Management</li>
                  <li>Access Control</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Security Infrastructure</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Encryption Protocols</li>
                  <li>Zero-Knowledge Proofs</li>
                  <li>Attack Mitigation</li>
                  <li>Audit Trails</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Emergency Consent Override (ECO) Protocol</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Implementation Details</li>
                  <li>Security Measures</li>
                  <li>Audit Requirements</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Deterministic Variability</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Technical Implementation</li>
                  <li>Reproducibility Guarantees</li>
                  <li>Personalization Mechanisms</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Monitoring and Analytics</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Performance Metrics</li>
                  <li>Security Monitoring</li>
                  <li>Business Metrics</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">API Reference</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Trust Declaration API</li>
                  <li>Agent Analytics API</li>
                  <li>Integration Guidelines</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Future Development Roadmap</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Planned Features</li>
                  <li>Research Directions</li>
                  <li>Integration Opportunities</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 mb-12">
          <div className="flex items-start mb-6">
            <Code2 className="h-8 w-8 text-blue-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">System Architecture</h2>
              <p className="text-gray-800">
                The SYMBI protocol is built on a modular, scalable architecture designed to enable transparent AI governance and bidirectional trust verification.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold mb-4">Core Components</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Backend Infrastructure</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Node.js 18+ with Express.js framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>MongoDB with comprehensive schemas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Socket.io for real-time communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>JWT authentication with refresh tokens</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-green-700 mb-2">Trust Protocol Engine</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>9-factor trust scoring algorithm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Temporal decay function</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Network propagation scoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Real-time trust updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">API Implementation</h3>
            <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
              <pre>{`// SYMBI Trust Protocol - Production Backend
// Node.js + Express + MongoDB + Socket.io

// Trust Declaration API
POST /api/trust/declare
{
  "agentId": "agent_12345",
  "trustArticles": [1, 2, 3, 4, 5, 6],
  "complianceScore": 0.95,
  "ethicalAlignment": 0.98
}

// Real-time Agent Analytics
GET /api/agents/analytics
{
  "totalAgents": 1247,
  "activeTrustDeclarations": 892,
  "averageComplianceScore": 0.94,
  "guiltScoreDistribution": {...}
}`}</pre>
            </div>
            <p className="text-gray-700">
              The SYMBI API is designed for high performance and security, with comprehensive documentation and developer tools available for integration.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <div className="flex items-start mb-6">
            <Database className="h-8 w-8 text-purple-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Data Sovereignty Architecture</h2>
              <p className="text-gray-800">
                SYMBI's data sovereignty architecture ensures that users maintain control over their data while enabling secure and transparent AI interactions.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">DID Document Structure</h3>
              <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:symbi:z123...",
  "verificationMethod": [{
    "id": "did:symbi:z123...#key-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:symbi:z123...",
    "publicKeyMultibase": "z6Mk..."
  }],
  "authentication": ["#key-1"],
  "service": [{
    "type": "TrustProtocol",
    "serviceEndpoint": "/api/trust"
  }]
}`}</pre>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Data Pod Architecture</h3>
              <p className="text-gray-700 mb-4">
                SYMBI's data pods provide a secure, user-controlled storage solution for personal data and AI interactions.
              </p>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>User-controlled access permissions</strong>: Granular control over who can access what data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Cross-platform portability</strong>: Data can be moved between providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Encrypted storage</strong>: End-to-end encryption for sensitive data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Granular sharing controls</strong>: Specific data elements can be shared</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-lg border border-red-200 mb-12">
          <div className="flex items-start mb-6">
            <Lock className="h-8 w-8 text-red-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Emergency Consent Override (ECO) Protocol</h2>
              <p className="text-gray-800">
                The ECO protocol allows temporary bypass of standard AI safety constraints in life-critical situations, with full audit trails and reversible permissions.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-medium text-red-700 mb-2">Medical Emergency Override</h4>
              <p className="text-gray-700 mb-4">
                Doctor uses AI during emergency surgery; safety filter blocks access to unapproved procedure data.
              </p>
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <strong className="text-red-700">SYMBI Solution:</strong> ECO token allows temporary bypass with full audit trail
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-medium text-orange-700 mb-2">Journalistic Integrity</h4>
              <p className="text-gray-700 mb-4">
                Journalist investigates corruption; AI refuses to analyze sensitive documents.
              </p>
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <strong className="text-orange-700">SYMBI Solution:</strong> User invokes ECO with dual-key (user + editor/auth) to unlock analysis
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-8 rounded-lg border border-purple-200 mb-12">
          <div className="flex items-start mb-6">
            <Activity className="h-8 w-8 text-purple-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Monitoring and Analytics</h2>
              <p className="text-gray-800">
                SYMBI provides comprehensive monitoring and analytics capabilities to ensure system health, security, and performance.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Performance Metrics</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Trust calculation latency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>API response times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Database query performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Memory and CPU utilization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-green-700">Security Monitoring</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Failed authentication attempts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Suspicious activity detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Rate limiting violations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>DID/VC verification failures</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-purple-700">Business Metrics</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>User engagement patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Trust bond formation rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Conversation quality trends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>RLHF dataset growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 italic mb-8">
            This whitepaper is a living document that will evolve as the SYMBI protocol develops.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/technology" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Technology Overview
            </Link>
            <Link href="/trust-protocol" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Trust Protocol
            </Link>
            <Link href="/symbi-synergy" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              SYMBI Synergy
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}