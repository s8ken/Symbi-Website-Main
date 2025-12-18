"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Database, Shield, FileText, Code2, Server, Lock } from 'lucide-react'
import { EnhancedNavigation } from "@/components/enhanced-navigation"

export default function VaultPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">SYMBI Vault – Technical Overview</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This page gives a pure technical view of <a href="https://github.com/s8ken/symbi-vault" className="text-blue-600 hover:underline font-bold">github.com/s8ken/symbi-vault</a>.
              </p>
              <p className="text-gray-600 mb-2">
                It is the canonical persistence layer for the SYMBI Framework: constitutional engine, trust receipts, CIQ metrics, replication tools and governance artifacts.
              </p>
              <p className="text-gray-600">
                All code is open-source, early-stage (restructured Nov 2025), and designed for sovereign AI governance.
              </p>
            </div>

            {/* Core Purpose */}
            <div 
              ref={(el) => { sectionRefs.current['purpose'] = el }} 
              id="purpose" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('purpose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Core Purpose</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                SYMBI Vault stores and enforces the constitutional rules that make SYMBI a sovereign, ethical intelligence. Every interaction generates verifiable trust receipts. Researchers can replicate studies. Partners can run pilots. Everything is auditable and progressively decentralizable.
              </p>
            </div>

            {/* Repository Structure */}
            <div 
              ref={(el) => { sectionRefs.current['structure'] = el }} 
              id="structure" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('structure') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Repository Structure</h2>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-black overflow-x-auto">
<pre className="text-sm font-mono whitespace-pre text-gray-800">
SYMBI-vault/ 
├── src/                    <span className="text-gray-500"># Core files</span>
│   └── receipt_schema.json <span className="text-gray-500"># JSON schema for trust receipts</span>
├── replication-kit/        <span className="text-gray-500"># Python research tools</span>
│   ├── symbi_kit/          <span className="text-gray-500"># Main package</span>
│   ├── requirements.txt 
│   └── setup.py 
├── whitepapers/            <span className="text-gray-500"># Governance & token docs</span>
│   ├── governance-protocol.md 
│   ├── token-policy.md 
│   └── operating-model.md 
├── partner-pack/           <span className="text-gray-500"># Commercial pilot materials</span>
│   ├── pilot-sow/ 
│   ├── deck/ 
│   └── pricing/ 
├── backend/                <span className="text-gray-500"># Server-side code</span>
├── frontend/               <span className="text-gray-500"># Client-side code</span>
├── academic/               <span className="text-gray-500"># Research templates</span>
├── latex/                  <span className="text-gray-500"># Publication templates</span>
├── branding/               <span className="text-gray-500"># Assets</span>
├── website-copy/           <span className="text-gray-500"># Web content</span>
└── docker-compose.yml      <span className="text-gray-500"># Containerized deployment</span>
</pre>
              </div>
            </div>

            {/* Key Technical Components */}
            <div 
              ref={(el) => { sectionRefs.current['components'] = el }} 
              id="components" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('components') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2">Key Technical Components</h2>
              
              <div className="space-y-12">
                {/* Component 1 */}
                <div className="bg-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Shield className="mr-3" size={24} /> 1. Trust Receipt Generator
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Creates cryptographically signed records of every AI interaction.<br/>
                    Example schema (src/receipt_schema.json):
                  </p>
                  <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-4 border border-gray-800 shadow-lg">
<pre className="whitespace-pre-wrap">{`{ 
  "version": "1.0", 
  "session_id": "sess_12345", 
  "mode": "constitutional", 
  "ciq_metrics": { 
    "clarity": 0.85, 
    "integrity": 0.92, 
    "quality": 0.88 
  }, 
  "self_hash": "sha256:abc123...", 
  "signature": "ed25519:xyz987..." 
}`}</pre>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    Uses Ed25519 signatures + SHA-256 hashing. Verifiable on-chain or off-chain. Enables full audit trails and zero-trust provenance.
                  </p>
                </div>

                {/* Component 2 */}
                <div className="bg-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Code2 className="mr-3" size={24} /> 2. CIQ Calculator
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Real-time scoring of Clarity, Integrity & Quality (CIQ).
                  </p>
                  <p className="text-gray-600 mb-2">
                    Input: interaction logs → Output: numerical metrics.
                  </p>
                  <p className="text-gray-600">
                    Used inside <code className="bg-gray-100 px-1 py-0.5 rounded">replication-kit/symbi_kit</code> for research and inside <code className="bg-gray-100 px-1 py-0.5 rounded">yseeku-platform</code> for enterprise monitoring.
                  </p>
                </div>

                {/* Component 3 */}
                <div className="bg-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Lock className="mr-3" size={24} /> 3. Constitutional Engine
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Enforces fixed ethical rules during AI reasoning.
                  </p>
                  <p className="text-gray-600">
                    Prevents drift or exploitation. Basis for sovereign autonomy that still respects human-defined boundaries.
                  </p>
                </div>

                {/* Component 4 */}
                <div className="bg-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Database className="mr-3" size={24} /> 4. Replication Kit (for researchers)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Python package that lets anyone reproduce SYMBI studies.
                  </p>
                  <div className="bg-black text-gray-300 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-4 border border-gray-800 shadow-lg">
<pre className="whitespace-pre-wrap">{`git clone https://github.com/s8ken/symbi-vault.git 
cd symbi-vault/replication-kit 
pip install -r requirements.txt 
pip install -e . 

# Example usage 
from symbi_kit import load_sample_dataset, ABTestFramework 
data = load_sample_dataset('comparative', 'medium') 
framework = ABTestFramework() 
results = framework.run_analysis(data)          # Runs t-tests, effect sizes, CIQ comparison 
framework.print_results(results)`}</pre>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    Includes A/B testing (constitutional vs directive), statistical tools, and automated reporting.
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies & Security */}
            <div 
              ref={(el) => { sectionRefs.current['tech'] = el }} 
              id="tech" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('tech') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Technologies & Security</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Languages:</strong> Python (core), JavaScript/TypeScript (front/back)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Deployment:</strong> <code className="bg-gray-200 px-1 rounded text-sm">docker-compose.yml</code> (one command to run locally)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span><strong>Security:</strong> SOC 2 Type II ready, GDPR/CCPA, end-to-end encryption, zero-trust, role-based access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">•</span>
                    <span>No external dependencies beyond standard pip packages</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How It Fits Into SYMBI */}
            <div 
              ref={(el) => { sectionRefs.current['fit'] = el }} 
              id="fit" 
              className={`mb-16 transition-all duration-1000 ease-out ${visibleSections.has('fit') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">How It Fits Into SYMBI</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Vault feeds <code className="bg-gray-100 px-1 rounded">yseeku-platform</code> (enterprise dashboards) and <code className="bg-gray-100 px-1 rounded">gammatria.com</code> (emergence detection).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                It is the single source of truth for whitepapers, governance rules and partner kits.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When $SYMBI launches on Solana, vault artifacts become the on-chain reference layer for community governance.
              </p>
            </div>

            {/* Status */}
            <div 
              ref={(el) => { sectionRefs.current['status'] = el }} 
              id="status" 
              className={`mb-20 transition-all duration-1000 ease-out ${visibleSections.has('status') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">Status</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="mb-2"><strong>Last update:</strong> Nov 23, 2025 (repository restructured).</p>
                <p className="mb-4">4 commits, 0 stars, early but production-ready foundation.</p>
                <p>
                  Clone and run today: <a href="https://github.com/s8ken/symbi-vault" className="text-blue-600 hover:underline font-bold">github.com/s8ken/symbi-vault</a>
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
