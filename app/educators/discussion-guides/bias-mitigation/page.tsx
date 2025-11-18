"use client"

import Link from "next/link"
import { MessageCircle, Brain, Users, Clock, FileText, Scale, Search } from "lucide-react"

export default function BiasMitigationGuidePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/discussion-guides" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Discussion Guides
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Bias in AI Systems</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Critical AI</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">12–18 participants</span>
          </div>
          <p className="text-xl text-[#ccc]">Interactive workshop on identifying, analyzing, and mitigating bias in AI systems using the SYMBI Resonate framework.</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Session Overview</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#999] mb-4">
              <span className="flex items-center gap-1"><Clock size={16} className="text-purple-400" /> 120 minutes</span>
              <span className="flex items-center gap-1"><Users size={16} className="text-purple-400" /> Workshop</span>
            </div>
            <p className="text-[#ccc]">Cover technical, social/cultural, and institutional bias sources. Design mitigation strategies and critique group outputs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Search size={20} /> Frameworks</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Technical bias sources</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Social and cultural bias</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Institutional bias patterns</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><MessageCircle size={20} /> Discussion Prompts</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>How does bias in training data affect outputs?</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Developer responsibility for system bias</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Designing equitable AI systems</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Brain size={20} /> Facilitation Techniques</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Bias mapping exercise</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Mitigation strategy design</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Group critique sessions</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><FileText size={20} /> Downloads</h3>
            <p className="text-[#ccc] mb-4">Browse toolkit files and templates.</p>
            <Link href="/educators/downloads" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg">Browse Downloads</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

