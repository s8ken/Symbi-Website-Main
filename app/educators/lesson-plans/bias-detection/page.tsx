"use client"

import Link from "next/link"
import { BookOpen, Clock, Target, Users, Brain, Calendar, FileText, Search } from "lucide-react"

export default function BiasDetectionPlanPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/lesson-plans" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Lesson Plans
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Bias Detection and Mitigation</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Critical AI Studies</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">Graduate</span>
          </div>
          <p className="text-xl text-[#ccc]">
            Apply bias detection techniques to AI outputs and explore mitigation strategies through SYMBI's Resonate framework.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Lesson Summary</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#999] mb-4">
              <span className="flex items-center gap-1"><Clock size={16} className="text-purple-400" /> 120 minutes</span>
              <span className="flex items-center gap-1"><Users size={16} className="text-purple-400" /> Lab + seminar</span>
            </div>
            <p className="text-[#ccc] mb-2">Students identify bias types in AI systems, implement detection methodologies, and propose practical mitigations with governance considerations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Target size={20} /> Learning Objectives</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Identify different types of bias in AI systems</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Implement bias detection methodologies</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Evaluate effectiveness of mitigation strategies</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Brain size={20} /> Materials Included</h4>
              <ul className="space-y-2 text-[#ccc]">
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Bias detection toolkit</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Sample AI outputs</span></li>
                <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Mitigation strategy templates</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Calendar size={20} /> Assessment</h4>
              <p className="text-[#ccc]">Bias analysis report and mitigation proposal</p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><FileText size={20} /> Downloads</h3>
            <p className="text-[#ccc] mb-4">Browse available toolkit files and templates.</p>
            <Link href="/educators/downloads" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg">Browse Downloads</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

