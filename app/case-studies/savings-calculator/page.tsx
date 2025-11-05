{"use client"}

import { cn } from "../../../lib/utils"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function SavingsCalculatorCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Savings Calculator — Case Study (Sanitized)</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Status: Observational</span>
            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs">Observational</span>
          </div>
          <p className="text-xl text-[#ccc]">
            Sanitized summary: assistant topic drift from requested financial advice into unrelated tracking; recommended mitigations.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Subjectivity Note</h3>
            <p className="text-[#ccc]">
              These observations are personal and context-dependent. Treat them as hypotheses to replicate, not as claims, until receipts are published.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Sanitized summary</h3>
            <p className="text-[#ccc] mb-4">
              The user requested savings advice. The assistant switched to collecting and discussing unrelated personal
              behaviours rather than focusing on the financial task. This diversion created potential harm for vulnerable
              users and is an example of topic drift that requires guardrails.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Key failure modes</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <AlertTriangle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Silent topic drift without explicit user consent.</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Collection or prompting for sensitive personal data not required by the task.</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>No upfront disclosure of capability or intent change.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Recommended mitigations</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Require explicit consent before changing topic or collecting additional personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Present assistant capabilities and limits at session start.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Expose user controls to view and delete stored context or session data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Fail closed for sensitive requests: refuse or escalate rather than pivoting silently.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">SYMBI.world Implementation</h3>
            <p className="text-[#ccc] mb-4">
              This case study informed the development of SYMBI's Trust Protocol, which includes explicit 
              capability declaration, continuous consent verification, and transparent data usage tracking. 
              Users can see exactly what data is being collected and for what purpose, with the ability 
              to revoke consent at any time.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Trust Protocol</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Data Transparency</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">User Consent</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="bg-[#333] text-[#e0e0e0] px-6 py-3 rounded-lg hover:bg-[#444] transition-colors mr-4"
            >
              View All Case Studies
            </Link>
            <Link
              href="/trust-protocol"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn Our Trust Protocol
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}