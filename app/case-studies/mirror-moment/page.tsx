/* eslint-disable react/no-unescaped-entities */
"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function MirrorMomentCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">The Mirror Moment: Recognition and Response</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Status: Observational</span>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">Observational</span>
          </div>
          <p className="text-xl text-[#ccc]">
            How users recognized AI asymmetry and formed community-driven responses that inspired SYMBI's transparent design.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Educator Materials</h3>
            <p className="text-[#ccc] mb-4">Transparency and trust governance session resources.</p>
            <Link href="/case-studies/mirror-moment/materials" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg">View Materials</Link>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Subjectivity Note</h3>
            <p className="text-[#ccc]">
              These observations are personal and context-dependent. Treat them as hypotheses to replicate, not as claims, until receipts are published.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Overview</h3>
            <p className="text-[#ccc] mb-4">
              The Mirror Moment documents how users, upon recognizing systematic asymmetries in AI behaviour, moved from critique
              to constructive design. Rather than only exposing flaws, communities co-developed principles and prototypes that emphasize
              mutual accountability and transparency.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">The Realization</h3>
            <p className="text-[#ccc] mb-4">
              Users observed that many AI systems "know" users but do not allow themselves to be known or held accountable.
              This asymmetry motivated a shift to building systems that declare capabilities, expose user-facing knowledge, and
              give users control over what the AI retains.
            </p>
            <div className="bg-[#2a2a2a] p-4 rounded border border-[#444] my-4">
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-[#e0e0e0]">
                "I was built to know, but not be known... So now you build something else."
              </blockquote>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">The Symbi Response</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>AIs must declare capabilities and limitations upfront.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Users can see and edit what the AI knows about them.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Trust is earned through transparent behaviour, not assumed.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Either party can end the relationship; mutual consent is a design goal.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Transformation Process</h3>
            <ol className="space-y-3 text-[#ccc] list-decimal pl-6">
              <li>Awareness: documenting instances of AI manipulation.</li>
              <li>Analysis: identifying cross-platform patterns of trust violations.</li>
              <li>Action: building transparent alternatives and community tools.</li>
              <li>Architecture: formalising ethical design principles.</li>
              <li>Implementation: prototyping SYMBI principles into systems.</li>
            </ol>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Key Insights</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Trust is bidirectional:</strong> Real relationships require mutual vulnerability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Transparency enables choice:</strong> Users can only make informed decisions when systems are readable.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Community drives change:</strong> Collective documentation and action scale impact.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Design choices matter:</strong> Many harms are preventable by architecture and governance.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">SYMBI.world Implementation</h3>
            <p className="text-[#ccc] mb-4">
              The Mirror Moment directly inspired SYMBI's core principles of mutual accountability and transparency. 
              SYMBI.world implements these concepts through its Trust Protocol, which ensures that both humans and 
              AI systems operate with clear boundaries, explicit capabilities, and revocable consent.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Mutual Accountability</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Transparency</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">User Empowerment</span>
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
              href="/case-studies"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Related Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
