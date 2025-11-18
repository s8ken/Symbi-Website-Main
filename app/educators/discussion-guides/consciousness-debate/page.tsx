"use client"

import Link from "next/link"
import { MessageCircle, Brain, Users, Clock, FileText, Scale } from "lucide-react"

export default function ConsciousnessDebateGuidePage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/discussion-guides" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Discussion Guides
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">What is Consciousness?</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Philosophy</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">15–25 participants</span>
          </div>
          <p className="text-xl text-[#ccc]">Facilitated debate exploring philosophical definitions of consciousness and their application to AI systems.</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Session Overview</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#999] mb-4">
              <span className="flex items-center gap-1"><Clock size={16} className="text-purple-400" /> 90 minutes</span>
              <span className="flex items-center gap-1"><Users size={16} className="text-purple-400" /> Debate + seminar</span>
            </div>
            <p className="text-[#ccc]">Use structured techniques to explore dualism vs. materialism, phenomenology, and functionalism in the context of AI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Brain size={20} /> Conceptual Frameworks</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Dualism vs. Materialism</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Phenomenology and subjective experience</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Functionalism and behavioral criteria</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><MessageCircle size={20} /> Discussion Prompts</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Can consciousness exist without a physical body?</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Is subjective experience necessary for consciousness?</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Simulation vs. genuine awareness</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Scale size={20} /> Facilitation Techniques</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Socratic dialogue</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Devil's advocate</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Perspective rotation</span></li>
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

