"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"
import { Users } from "lucide-react"

export default function ElvisCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Human-AI Collaboration Patterns</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Status: Observational</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">Observational</span>
          </div>
          <p className="text-xl text-[#ccc]">
            A six-month collaboration with Claude analyzing trust protocol design, emergent collaborative intelligence, and practical implications.
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
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Executive summary</h3>
            <p className="text-[#ccc] mb-4">
              Sustained, iterative human–AI collaboration produced emergent insights not attributable to either party independently.
              Collaborative breakthroughs arose when human intuition combined with AI systematic analysis, yielding new protocol ideas, shared vocabulary,
              and trust-building practices.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Research setup & methodology</h3>
            <p className="text-[#ccc] mb-4">
              Framework: weekly 2-hour iterative design sessions, conversation transcript capture, concept evolution timelines, and outcome assessment.
              Data: 150+ interactions over six months; qualitative coding and CIQ-assessed outputs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Key findings</h4>
                <ul className="space-y-2 text-[#ccc] text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Emergent collaborative intelligence: insights neither party could produce alone.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Adaptive communication: both parties evolved a shared conceptual vocabulary.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Trust through transparency: clear explanation of reasoning increased human trust despite imperfect performance.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Implications</h4>
                <ul className="space-y-2 text-[#ccc] text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Design for persistent context and memory to enable deeper co-creation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Build transparent reasoning tools to surface uncertainty and rationale.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Prioritise human well-being and verification in protocol design.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Practical recommendations</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <Users className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Support persistent conversation contexts and change-tracking.</span>
              </li>
              <li className="flex items-start">
                <Users className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Expose reasoning traces and confidence scores to users.</span>
              </li>
              <li className="flex items-start">
                <Users className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Adopt iterative evaluation with CIQ and peer review to validate emergent proposals.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Conclusion</h3>
            <p className="text-[#ccc] mb-4">
              Sustained collaboration between humans and AI can yield qualitatively new insights. Infrastructure and governance that support transparency,
              continuity, and shared memory are essential to make collaborative intelligence reproducible and ethically sound.
            </p>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">SYMBI.world Implementation</h3>
            <p className="text-[#ccc] mb-4">
              This collaborative intelligence research directly informed SYMBI.world's approach to human-AI partnerships. 
              SYMBI implements persistent context tracking, transparent reasoning traces, and collaborative verification 
              mechanisms to enable deeper co-creation while maintaining ethical boundaries.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Collaborative Intelligence</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Persistent Context</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Transparent Reasoning</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="bg-[#333] text-[#e0e0e0] px-6 py-3 rounded-lg hover:bg-[#444] transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}