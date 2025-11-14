"use client"

import Link from "next/link"
import { FileText, CheckCircle } from "lucide-react"

export default function RubricsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/educators" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Educators Hub
          </Link>
          <h1 className="text-5xl font-bold text-[#e0e0e0] mb-6">Assessment Rubrics</h1>
          <p className="text-2xl text-[#ccc] max-w-4xl">
            Evaluation frameworks for critical thinking, ethical reasoning, and interdisciplinary synthesis.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle className="text-green-400" size={18} /> Critical Thinking Rubric</h3>
              <p className="text-[#ccc] mb-3">Structured criteria for evaluating analysis, evidence use, and clarity.</p>
              <Link href="/educators/downloads" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                <FileText size={16} /> Browse in Downloads
              </Link>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle className="text-green-400" size={18} /> Ethical Reasoning Assessment</h3>
              <p className="text-[#ccc] mb-3">Rubric for evaluating ethical frameworks, trade-offs, and consistency.</p>
              <Link href="/educators/downloads" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                <FileText size={16} /> Browse in Downloads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

