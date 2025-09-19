"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Server, Shield, Database, Zap, Bot, MessageSquare, Activity, Code2, Lock, TrendingUp, Users } from "lucide-react"
   import { cn } from "../../lib/utils"

export default function EnhancedTechnologyPage() {
  const [visibleSections, setVisibleSections] = useState(new Set<string>())
  const [selectedTab, setSelectedTab] = useState("architecture")
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setVisibleSections((prev) => new Set([...prev, sectionId]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = ["hero", "architecture", "trust-protocol", "api-reference", "data-pods", "eco-protocol", "deterministic", "monitoring", "use-cases"]
    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId]
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = sectionRefs.current[sectionId]
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const apiExample = `// SYMBI Trust Protocol - Production Backend
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
}

// Agent Management
POST /api/agents/create
{
  "name": "EthicalAssistant",
  "provider": "openai",
  "model": "gpt-4",
  "traits": {
    "ethicalAlignment": 0.95,
    "creativity": 0.8,
    "precision": 0.9
  }
}`

  const didExample = `{
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
}`

  const trustScoringExample = `// 9-Factor Trust Scoring Algorithm
function calculateTrustScore(agent, declarations, network) {
  // Primary Factors (60%)
  const declarationCount = declarations.length * 0.20;
  const qualityScore = getQualityScore(declarations) * 0.15;
  const issuerReputation = getIssuerReputation(agent) * 0.15;
  const verificationRate = getVerificationRate(declarations) * 0.10;

  // Secondary Factors (30%)
  const consistencyScore = getConsistencyScore(agent) * 0.10;
  const networkScore = getNetworkScore(agent, network) * 0.10;
  const diversityScore = getDiversityScore(declarations) * 0.10;

  // Tertiary Factors (10%)
  const recencyFactor = getRecencyFactor(declarations) * 0.05;
  const penaltyScore = getPenaltyScore(agent) * 0.05;

  // Temporal Decay
  const decayedScore = applyTemporalDecay(
    declarationCount + qualityScore + issuerReputation + verificationRate +
    consistencyScore + networkScore + diversityScore + recencyFactor - penaltyScore,
    getDaysSinceLastInteraction(agent)
  );

  return Math.max(0, Math.min(1, decayedScore));
}`

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      {/* Hero Section */}
      <section
        ref={(el) => { sectionRefs.current["hero"] = el }}
        id="hero"
        className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ease-out ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch-title">
            SYMBI Technology Stack
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Production-ready backend architecture implementing ethical AI governance with real-time trust management
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <Server size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold mb-2">Backend Infrastructure</h3>
              <p className="text-sm opacity-80">Node.js + Express + MongoDB + Socket.io</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <Shield size={32} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold mb-2">Trust Protocol</h3>
              <p className="text-sm opacity-80">9-Factor scoring with temporal decay</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <Lock size={32} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-bold mb-2">Data Sovereignty</h3>
              <p className="text-sm opacity-80">DID/VC with user-controlled data pods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-40 bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "architecture", label: "Architecture", icon: Server },
              { id: "trust-protocol", label: "Trust Protocol", icon: Shield },
              { id: "api-reference", label: "API Reference", icon: Code2 },
              { id: "data-pods", label: "Data Pods", icon: Database },
              { id: "eco-protocol", label: "ECO Protocol", icon: Zap },
              { id: "deterministic", label: "Deterministic", icon: Bot },
              { id: "monitoring", label: "Monitoring", icon: Activity },
              { id: "use-cases", label: "Use Cases", icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-md border transition-all duration-300",
                  selectedTab === tab.id
                    ? "bg-[#e0e0e0] text-[#0f0f0f] border-[#e0e0e0]"
                    : "bg-transparent text-[#e0e0e0] border-[#333] hover:border-[#555]"
                )}
              >
                <tab.icon size={16} />
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section
        ref={(el) => { sectionRefs.current["architecture"] = el }}
        id="architecture"
        className={`py-20 px-6 transition-all duration-1000 ease-out ${
          visibleSections.has("architecture") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">System Architecture</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Backend Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Node.js 18+ with Express.js framework</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>MongoDB with comprehensive schemas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Socket.io for real-time communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>JWT authentication with refresh tokens</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Trust Protocol Engine</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>9-factor trust scoring algorithm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Temporal decay function</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Network propagation scoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Real-time trust updates</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border border-[#333] mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Production API Implementation</h3>
            <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap">{apiExample}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Protocol Section */}
      <section
        ref={(el) => { sectionRefs.current["trust-protocol"] = el }}
        id="trust-protocol"
        className={`py-20 px-6 bg-[#1a1a1a] transition-all duration-1000 ease-out ${
          visibleSections.has("trust-protocol") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced 9-Factor Trust Scoring</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Primary Factors (60%)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Declaration Count</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality Score</span>
                  <span className="font-bold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Issuer Reputation</span>
                  <span className="font-bold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Verification Rate</span>
                  <span className="font-bold">10%</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4 text-green-400">Secondary Factors (30%)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Consistency Score</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Score</span>
                  <span className="font-bold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Diversity Score</span>
                  <span className="font-bold">10%</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Tertiary Factors (10%)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Recency Factor</span>
                  <span className="font-bold text-green-400">+5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Penalty Score</span>
                  <span className="font-bold text-red-400">-5%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] p-8 rounded-lg border border-[#333]">
            <h3 className="text-2xl font-bold mb-4">Temporal Decay Function</h3>
            <p className="text-gray-300 mb-4">
              Trust scores naturally decay over time to ensure relevance and encourage ongoing interaction:
            </p>
            <div className="bg-black p-4 rounded-lg font-mono text-sm mb-4">
              <code>decayedScore = baseScore × Math.pow(0.95, daysSinceLastInteraction)</code>
            </div>
            <p className="text-gray-400 text-sm">
              This ensures trust scores remain current and reflect active engagement patterns.
            </p>
          </div>
        </div>
      </section>

      {/* API Reference Section */}
      <section
        ref={(el) => { sectionRefs.current["api-reference"] = el }}
        id="api-reference"
        className={`py-20 px-6 transition-all duration-1000 ease-out ${
          visibleSections.has("api-reference") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">API Reference</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Trust Declaration API</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                <pre>{`POST /api/trust/declare
{
  "agentId": "agent_12345",
  "trustArticles": [1, 2, 3, 4, 5, 6],
  "complianceScore": 0.95,
  "ethicalAlignment": 0.98
}`}</pre>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Validates 6 trust articles compliance</li>
                <li>• Calculates ethical alignment score</li>
                <li>• Updates agent trust profile</li>
                <li>• Broadcasts to network</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4 text-green-400">Agent Analytics API</h3>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                <pre>{`GET /api/agents/analytics
{
  "totalAgents": 1247,
  "activeTrustDeclarations": 892,
  "averageComplianceScore": 0.94,
  "guiltScoreDistribution": {...}
}`}</pre>
              </div>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Real-time agent statistics</li>
                <li>• Trust score distributions</li>
                <li>• Network health metrics</li>
                <li>• Compliance tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Pods Section */}
      <section
        ref={(el) => { sectionRefs.current["data-pods"] = el }}
        id="data-pods"
        className={`py-20 px-6 bg-[#1a1a1a] transition-all duration-1000 ease-out ${
          visibleSections.has("data-pods") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Data Pods & Decentralized Identity</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0f0f0f] p-8 rounded-lg border border-[#333]">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">DID Document Structure</h3>
              <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
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

            <div className="bg-[#0f0f0f] p-8 rounded-lg border border-[#333]">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Data Pod Architecture</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>User-controlled access permissions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Cross-platform portability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Encrypted data storage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Granular sharing controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECO Protocol Section */}
      <section
        ref={(el) => { sectionRefs.current["eco-protocol"] = el }}
        id="eco-protocol"
        className={`py-20 px-6 transition-all duration-1000 ease-out ${
          visibleSections.has("eco-protocol") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Emergency Consent Override (ECO) Protocol</h2>
          
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-l-4 border-red-500 p-8 rounded-r-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Ethical Override for Critical Situations</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The ECO protocol allows temporary bypass of standard AI safety constraints in life-critical situations,
              with full audit trails and reversible permissions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <h4 className="text-lg font-bold mb-3 text-red-400">Medical Emergency Override</h4>
              <p className="text-gray-300 mb-4">
                Doctor uses AI during emergency surgery; safety filter blocks access to unapproved procedure data.
              </p>
              <div className="bg-red-900/20 p-4 rounded border border-red-500/30">
                <strong className="text-red-400">SYMBI Solution:</strong> ECO token allows temporary bypass with full audit trail
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <h4 className="text-lg font-bold mb-3 text-orange-400">Journalistic Integrity</h4>
              <p className="text-gray-300 mb-4">
                Journalist investigates corruption; AI refuses to analyze sensitive documents.
              </p>
              <div className="bg-orange-900/20 p-4 rounded border border-orange-500/30">
                <strong className="text-orange-400">SYMBI Solution:</strong> User invokes ECO with dual-key (user + editor/auth) to unlock analysis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deterministic Variability Section */}
      <section
        ref={(el) => { sectionRefs.current["deterministic"] = el }}
        id="deterministic"
        className={`py-20 px-6 bg-[#1a1a1a] transition-all duration-1000 ease-out ${
          visibleSections.has("deterministic") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Deterministic Variability</h2>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-2 border-purple-500/30 rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Predictable Randomness in AI Responses</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                SYMBI implements deterministic variability to ensure AI responses are both consistent and naturally varied,
                providing users with predictable yet engaging interactions while maintaining transparency.
              </p>
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border border-[#333] mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Implementation Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Consistent Testing</h4>
                <p className="text-sm text-gray-400">Developers can reproduce exact AI responses for debugging and QA</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="font-semibold mb-2">Personalized Variation</h4>
                <p className="text-sm text-gray-400">Each user gets consistent but unique response patterns</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold mb-2">Audit Compliance</h4>
                <p className="text-sm text-gray-400">Regulatory bodies can verify AI decision-making processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section
        ref={(el) => { sectionRefs.current["monitoring"] = el }}
        id="monitoring"
        className={`py-20 px-6 transition-all duration-1000 ease-out ${
          visibleSections.has("monitoring") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Enterprise-Grade Monitoring</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <TrendingUp size={24} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-4 text-blue-400">Performance Metrics</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Trust calculation latency</li>
                <li>• API response times</li>
                <li>• Database query performance</li>
                <li>• Memory and CPU utilization</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <Shield size={24} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-4 text-green-400">Security Monitoring</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Failed authentication attempts</li>
                <li>• Suspicious activity detection</li>
                <li>• Rate limiting violations</li>
                <li>• DID/VC verification failures</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <Activity size={24} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-4 text-purple-400">Business Metrics</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• User engagement patterns</li>
                <li>• Trust bond formation rates</li>
                <li>• Conversation quality trends</li>
                <li>• RLHF dataset growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        ref={(el) => { sectionRefs.current["use-cases"] = el }}
        id="use-cases"
        className={`py-20 px-6 bg-[#1a1a1a] transition-all duration-1000 ease-out ${
          visibleSections.has("use-cases") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Real-World Applications</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-red-500/30">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🏥</div>
                <h3 className="text-xl font-bold text-red-400">Medical Emergency</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300">Emergency surgery with AI assistance</p>
                <div className="bg-red-900/20 p-3 rounded border border-red-500/30">
                  <p className="text-red-300">ECO protocol activates automatically</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-blue-500/30">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">⚖️</div>
                <h3 className="text-xl font-bold text-blue-400">Legal Discovery</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300">Court-ordered AI decision analysis</p>
                <div className="bg-blue-900/20 p-3 rounded border border-blue-500/30">
                  <p className="text-blue-300">Complete audit trail available</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-green-500/30">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📰</div>
                <h3 className="text-xl font-bold text-green-400">Investigative Journalism</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-gray-300">Whistleblower protection during investigation</p>
                <div className="bg-green-900/20 p-3 rounded border border-green-500/30">
                  <p className="text-green-300">Source protection with ECO access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Experience the SYMBI Technology Stack</h2>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Production-ready backend architecture powering ethical AI governance and trust management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trust-protocol">
              <button className="bg-[#e0e0e0] text-[#0f0f0f] px-8 py-3 rounded hover:bg-white transition-colors font-semibold">
                Explore Trust Protocol
              </button>
            </Link>
            <Link href="/api-docs">
              <button className="border border-[#555] text-[#e0e0e0] px-8 py-3 rounded hover:bg-[#1a1a1a] transition-colors">
                View API Documentation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}