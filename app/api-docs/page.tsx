"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Code2, Database, Shield, Server, Terminal, Lock, Key, Activity } from 'lucide-react'
import { EnhancedNavigation } from "@/components/enhanced-navigation"

export default function ApiDocsPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisibleSections((prev) => new Set([...prev, entry.target.id]))
      })
    }, { threshold: 0.1 })

    Object.values(sectionRefs.current).forEach((ref) => ref && observer.observe(ref))
    return () => Object.values(sectionRefs.current).forEach((ref) => ref && observer.unobserve(ref))
  }, [])

  return (
    <>
      <EnhancedNavigation theme="light" />
      <main className="min-h-screen bg-white text-black font-mono">
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div 
              ref={(el) => { sectionRefs.current['header'] = el }} 
              id="header" 
              className={`mb-12 transition-all duration-1000 ease-out ${visibleSections.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">SYMBI API Documentation</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Technical reference for integrating with the SYMBI trust framework.
              </p>
              <p className="text-gray-600 mb-2">
                Combines core artifacts from <a href="https://github.com/s8ken/symbi-vault" className="text-blue-600 hover:underline font-bold">symbi-vault</a> (schemas, constitutional engine, Python SDK) and <a href="https://github.com/s8ken/yseeku-platform" className="text-blue-600 hover:underline font-bold">yseeku-platform</a> (TypeScript SDKs, production orchestration, verification endpoint).
              </p>
              <p className="text-gray-600">
                Current as of December 2025 — early but production-capable.
              </p>
            </div>

            {/* Core Concept */}
            <div 
              ref={(el) => { sectionRefs.current['concept'] = el }} 
              id="concept" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('concept') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Core Concept: Cryptographic Trust Receipts</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Every AI interaction generates an immutable, signed receipt for audit and verification.
              </p>
              <p className="text-gray-600 mb-6">
                Schema defined in symbi-vault (<code className="bg-gray-100 px-1 py-0.5 rounded">src/receipt_schema.json</code>) and implemented in yseeku-platform (@sonate/core).
              </p>
              <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-4 border border-gray-800 shadow-lg">
<pre className="whitespace-pre-wrap">{`{ 
  "version": "1.0", 
  "session_id": "unique_session_identifier", 
  "mode": "constitutional",                  // or "directive" 
  "ciq_metrics": { 
    "clarity": 0.85, 
    "integrity": 0.92, 
    "quality": 0.88 
  }, 
  "trust_score": 8.7,                         // weighted final score 
  "reality_index": 8.2,                       // 0–10 
  "trust_protocol": "PASS",                  // PASS / PARTIAL / FAIL 
  "ethical_alignment": 4,                    // 1–5 
  "resonance_quality": "ADVANCED",           // STRONG / ADVANCED / BREAKTHROUGH 
  "canvas_parity": 87,                       // 0–100 
  "self_hash": "sha256:abc123...", 
  "signature": "ed25519:xyz987..." 
}`}</pre>
              </div>
              <p className="text-gray-600 text-sm italic">
                Cryptography: SHA-256 content hashing + Ed25519 signatures. Append-only hash chains for full provenance.
              </p>
            </div>

            {/* REST API Endpoints */}
            <div 
              ref={(el) => { sectionRefs.current['endpoints'] = el }} 
              id="endpoints" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('endpoints') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">REST API Endpoints (yseeku-platform)</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Primary production endpoint for verifying receipts.
              </p>
              
              <div className="overflow-x-auto border border-black rounded-lg mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="border-r border-gray-700 p-3 text-left">Method</th>
                      <th className="border-r border-gray-700 p-3 text-left">Endpoint</th>
                      <th className="border-r border-gray-700 p-3 text-left">Description</th>
                      <th className="border-r border-gray-700 p-3 text-left">Request Body</th>
                      <th className="p-3 text-left">Response</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-bold">POST</td>
                      <td className="border border-gray-300 p-3 font-mono text-sm">/api/receipts/verify</td>
                      <td className="border border-gray-300 p-3 text-sm">Verify cryptographic integrity of a trust receipt</td>
                      <td className="border border-gray-300 p-3 text-sm">JSON trust receipt object</td>
                      <td className="border border-gray-300 p-3 font-mono text-xs">
<pre className="whitespace-pre-wrap bg-gray-50 p-2 rounded">{`{ 
  "verifiable": true, 
  "hashOk": true, 
  "signatureOk": true 
}`}</pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm italic">
                Authentication: Requires <code className="bg-gray-100 px-1 py-0.5 rounded">SONATE_PUBLIC_KEY</code> (base64). Production uses KMS/secrets manager; dev uses <code className="bg-gray-100 px-1 py-0.5 rounded">SONATE_PRIVATE_KEY</code>.
              </p>
            </div>

            {/* SDK Integration */}
            <div 
              ref={(el) => { sectionRefs.current['sdk'] = el }} 
              id="sdk" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('sdk') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2">SDK Integration</h2>
              
              <div className="space-y-12">
                {/* TypeScript / Node.js */}
                <div className="bg-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Code2 className="mr-3" size={24} /> TypeScript / Node.js (yseeku-platform)
                  </h3>
                  <p className="text-gray-700 mb-4">Install individual packages or the monorepo.</p>
                  <div className="bg-black text-gray-300 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-6 border border-gray-800">
                    <pre>npm install @sonate/core @sonate/detect @sonate/orchestrate @sonate/lab</pre>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-3">Example: Real-time Detection</h4>
                  <div className="bg-black text-blue-300 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-6 border border-gray-800 shadow-lg">
<pre className="whitespace-pre-wrap">{`import { SymbiFrameworkDetector } from '@sonate/detect'; 

const detector = new SymbiFrameworkDetector(); 
const result = await detector.detect({ 
  content: 'Your AI response text', 
  context: 'User query', 
  metadata: { session_id: 'sess-001' } 
}); 

console.log(result.reality_index);     // e.g. 8.2 
console.log(result.trust_protocol);    // 'PASS' 
console.log(result.trust_score);       // weighted final`}</pre>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-3">Example: Agent Registration (Orchestration)</h4>
                  <div className="bg-black text-blue-300 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-4 border border-gray-800 shadow-lg">
<pre className="whitespace-pre-wrap">{`import { AgentOrchestrator } from '@sonate/orchestrate'; 

const orchestrator = new AgentOrchestrator(); 
const agent = await orchestrator.registerAgent({ 
  id: 'support-ai-01', 
  name: 'Customer Support Agent', 
  capabilities: ['chat', 'analyze'] 
}); 

console.log(agent.did); // W3C DID: did:key:z6Mk...`}</pre>
                  </div>
                </div>

                {/* Python */}
                <div className="bg-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Terminal className="mr-3" size={24} /> Python (symbi-vault Replication Kit)
                  </h3>
                  <div className="bg-black text-gray-300 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-4 border border-gray-800 shadow-lg">
<pre className="whitespace-pre-wrap">{`git clone https://github.com/s8ken/symbi-vault.git 
cd symbi-vault/replication-kit 
pip install -r requirements.txt 
pip install -e . 

from symbi_kit import load_sample_dataset, ABTestFramework 

data = load_sample_dataset('comparative', 'medium') 
framework = ABTestFramework() 
results = framework.run_analysis(data) 
framework.print_results(results)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Deployment Notes */}
            <div 
              ref={(el) => { sectionRefs.current['security'] = el }} 
              id="security" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('security') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Security & Deployment Notes</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Keys</strong>: Use environment variables or KMS. Never commit private keys.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Zero-Trust</strong>: All operations require verifiable identities (W3C DID/VC in orchestration).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Rate Limiting</strong>: Redis-backed in @sonate/orchestrate.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Deployment</strong>: Docker Compose available in both repos. yseeku-platform is Kubernetes-ready.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Audits</strong>: Designed for SOC 2 Type II, EU AI Act, GDPR/CCPA.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Repositories */}
            <div 
              ref={(el) => { sectionRefs.current['repos'] = el }} 
              id="repos" 
              className={`mb-20 transition-all duration-1000 ease-out ${visibleSections.has('repos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Repositories</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg space-y-3">
                <p>
                  <strong>Core schemas & Python SDK:</strong> <a href="https://github.com/s8ken/symbi-vault" className="text-blue-600 hover:underline font-bold">github.com/s8ken/symbi-vault</a>
                </p>
                <p>
                  <strong>Enterprise SDKs, API, orchestration:</strong> <a href="https://github.com/s8ken/yseeku-platform" className="text-blue-600 hover:underline font-bold">github.com/s8ken/yseeku-platform</a>
                </p>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
              <p>
                Back to <Link href="/archives/machineexplorer" className="text-blue-600 hover:underline">Machine Explorer</Link> • <Link href="/" className="text-blue-600 hover:underline">symbi.world</Link>
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
