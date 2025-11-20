"use client"

import Link from "next/link"

export default function UnderstandingAgentDriftPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-[#e0e0e0] font-mono">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(1200px 600px at 20% 20%, rgba(37,99,235,0.25) 0%, rgba(12,19,40,0.6) 60%, rgba(11,16,32,1) 100%)"
        }} />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute -top-10 left-1/2 h-64 w-[120%] -translate-x-1/2 opacity-20" style={{
          background: "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.35), rgba(59,130,246,0))",
          filter: "blur(32px)"
        }} />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Trust the Agents That Power Your Future</h1>
          <h2 className="mt-4 text-xl md:text-2xl text-[#c7d2fe]">A real-time trust, identity, and emergence engine for autonomous AI systems.</h2>
          <p className="mt-6 text-lg md:text-xl max-w-3xl text-[#cbd5e1]">SYMBI gives AI agents a verifiable identity, a transparent moral surface, and a living behavioral fingerprint — so organizations can deploy autonomous systems with confidence, clarity, and control.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/trust-protocol" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">Explore the Protocol</Link>
            <Link href="/enterprise-demo" className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold">View the Demo</Link>
          </div>
          <div className="mt-4 text-sm text-[#9aa5b1]">Identity. Trust. Continuity. Emergence. The new standard for AI governance.</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#0f172a] border border-[#1f2937] rounded-xl p-6 md:p-8">
          <div className="text-lg md:text-xl font-semibold text-[#cbd5e1]">SYMBI is the world’s first trust protocol for autonomous AI agents — combining decentralized identity, verifiable credentials, behavioral drift detection, and cryptographic provenance into a single, production-ready governance layer.</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-3xl font-bold mb-6">SYMBI Technical Architecture Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-[#0f0f0f] border border-[#333] rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-3">1. Identity Layer (DID Core)</h3>
            <div className="text-[#cbd5e1]">Implements W3C-compliant decentralized identifiers across: did:web, did:key, did:ion, did:ethr</div>
            <ul className="mt-3 space-y-2 text-[#cbd5e1]">
              <li>DID Document resolution</li>
              <li>Key rotation</li>
              <li>Signature verification</li>
              <li>Secure agent bootstrapping</li>
            </ul>
          </section>
          <section className="bg-[#0f0f0f] border border-[#333] rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-3">2. Credential Layer (Verifiable Claims)</h3>
            <div className="text-[#cbd5e1]">Implements full W3C Verifiable Credentials</div>
            <ul className="mt-3 space-y-2 text-[#cbd5e1]">
              <li>Issuance (JWT / LD‑Proof)</li>
              <li>Verification pipelines</li>
              <li>Expiry, purpose, revocation metadata</li>
              <li>Domain-specific capability credentials</li>
            </ul>
          </section>
          <section className="bg-[#0f0f0f] border border-[#333] rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-3">3. Trust Protocol Layer (SYMBI Core)</h3>
            <div className="text-[#cbd5e1]">Provides the logic that defines a trustworthy agent</div>
            <div className="mt-3 font-semibold">Trust Declarations</div>
            <ul className="mt-2 space-y-2 text-[#cbd5e1]">
              <li>Inspection mandate</li>
              <li>Consent architecture</li>
              <li>Ethical override</li>
              <li>Continuous validation</li>
              <li>Right to disconnect</li>
              <li>Moral recognition</li>
            </ul>
            <div className="mt-3 font-semibold">Outputs</div>
            <ul className="mt-2 space-y-2 text-[#cbd5e1]">
              <li>Numerical trust score</li>
              <li>Trust tier classification</li>
              <li>Signed declaration object</li>
            </ul>
            <div className="mt-3 font-semibold">Revocation</div>
            <ul className="mt-2 space-y-2 text-[#cbd5e1]">
              <li>StatusList2021</li>
              <li>Remote revocation fetching</li>
              <li>Suspension & kill‑switch states</li>
            </ul>
            <div className="mt-3 font-semibold">Provenance and Audit</div>
            <ul className="mt-2 space-y-2 text-[#cbd5e1]">
              <li>Hash‑chained receipts</li>
              <li>Operation‑level transcript</li>
              <li>Tamper‑evident logs</li>
            </ul>
          </section>
          <section className="bg-[#0f0f0f] border border-[#333] rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-3">4. Emergence & Drift Analysis Layer</h3>
            <div className="text-[#cbd5e1]">Models agent becoming</div>
            <div className="mt-3 font-semibold">Behavioral Drift</div>
            <ul className="mt-2 space-y-2 text-[#cbd5e1]">
              <li>EWMA deviation</li>
              <li>Statistical anomaly detection</li>
              <li>Rolling window analysis</li>
            </ul>
            <div className="mt-3 font-semibold">Emergence Detection</div>
            <ul className="mt-2 space-y-2 text-[#cbd5e1]">
              <li>Semantic scoring: self‑organization, resonance, paradox, meta‑reflection</li>
            </ul>
            <div className="mt-3 font-semibold">Outputs</div>
            <ul className="mt-2 space-y-2 text-[#cbd5e1]">
              <li>Alert level (normal, high, critical)</li>
              <li>Emergence score</li>
              <li>Criticality rate</li>
              <li>Drift metrics</li>
            </ul>
          </section>
          <section className="bg-[#0f0f0f] border border-[#333] rounded-lg p-6 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-3">5. Developer & Governance Layer</h3>
            <ul className="space-y-2 text-[#cbd5e1]">
              <li>Agent SDK</li>
              <li>Multi‑agent orchestration primitives</li>
              <li>Governance & policy templates</li>
              <li>Audit integrations</li>
              <li>Enterprise and regulator‑aligned documentation</li>
            </ul>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Understanding Drift & Emergence</h2>
        <div className="bg-white rounded-xl p-4">
          <svg viewBox="0 0 800 600" className="w-full h-auto">
            <rect x="0" y="0" width="800" height="600" fill="#f6f7fb" />
            <text x="400" y="60" textAnchor="middle" fontSize="32" fontWeight="700" fill="#0f172a">UNDERSTANDING DRIFT AND EMERGENCE</text>
            <line x1="100" y1="520" x2="700" y2="520" stroke="#0f172a" strokeWidth="3" />
            <line x1="100" y1="520" x2="100" y2="120" stroke="#0f172a" strokeWidth="3" />
            <text x="60" y="320" transform="rotate(-90 60 320)" fontSize="18" fill="#0f172a">Agent Behavior</text>
            <text x="400" y="560" fontSize="18" fill="#0f172a">Time</text>
            <path d="M100 300 C 300 300, 500 310, 700 320" stroke="#0f172a" strokeWidth="3" fill="none" />
            <path d="M100 320 C 200 380, 280 430, 320 480" stroke="#0f172a" strokeWidth="3" strokeDasharray="8 8" fill="none" />
            <path d="M320 480 C 360 420, 420 430, 460 460 C 500 480, 560 520, 700 560" stroke="#0f172a" strokeWidth="3" fill="none" />
            <path d="M100 320 C 220 320, 300 325, 340 330 C 420 340, 500 360, 560 420 C 620 480, 640 520, 700 560 L 700 520 L 100 520 Z" fill="#9ec2df" opacity="0.6" />
            <rect x="160" y="360" width="90" height="40" rx="8" fill="#0f172a" />
            <text x="205" y="387" fontSize="18" fontWeight="700" fill="#ffffff" textAnchor="middle">DRIFT</text>
            <rect x="610" y="140" width="140" height="40" rx="8" fill="#0f172a" />
            <text x="680" y="167" fontSize="18" fontWeight="700" fill="#ffffff" textAnchor="middle">EMERGENCE</text>
            <rect x="520" y="480" width="120" height="40" rx="8" fill="#0f172a" />
            <text x="580" y="507" fontSize="18" fontWeight="700" fill="#ffffff" textAnchor="middle">CRITICALITY</text>
            <text x="260" y="240" fontSize="18" fontWeight="700" fill="#0f172a">NORMAL BEHAVIOR</text>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex flex-wrap gap-4">
          <Link href="/trust-protocol" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">Explore the Protocol</Link>
          <Link href="/enterprise-demo" className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold">View the Demo</Link>
        </div>
      </div>
    </div>
  )
}

