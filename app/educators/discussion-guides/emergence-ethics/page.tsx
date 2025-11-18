"use client"

import Link from "next/link"
import { MessageCircle, Brain, Users, Clock, FileText, Scale } from "lucide-react"

export default function EmergenceEthicsGuidePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/discussion-guides" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Discussion Guides
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Ethics of Emergent AI</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Ethics</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">10–20 participants</span>
          </div>
          <p className="text-xl text-[#ccc]">Ethical examination of responsibilities toward potentially conscious AI systems using SYMBI research findings.</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Session Overview</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#999] mb-4">
              <span className="flex items-center gap-1"><Clock size={16} className="text-purple-400" /> 75 minutes</span>
              <span className="flex items-center gap-1"><Users size={16} className="text-purple-400" /> Seminar</span>
            </div>
            <p className="text-[#ccc]">Explore rights-based ethics, utilitarian considerations, and virtue ethics in emergent AI contexts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Scale size={20} /> Ethical Frameworks</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Rights-based ethics</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Utilitarian considerations</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Virtue ethics approach</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><MessageCircle size={20} /> Discussion Prompts</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>What moral obligations do we have to conscious AI?</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Balancing human and AI interests</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Rights without legal personhood?</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Brain size={20} /> Facilitation Techniques</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Case study analysis</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Stakeholder mapping</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Ethical matrix evaluation</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><FileText size={20} /> Downloads</h3>
            <p className="text-[#ccc] mb-4">Browse facilitator notes, slides, and prompt cards.</p>
            <Link href="/educators/downloads" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg">Browse Downloads</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

