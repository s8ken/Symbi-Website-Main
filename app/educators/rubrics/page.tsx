"use client"

import Link from "next/link"
import { FileText, CheckCircle, Printer, Save } from "lucide-react"

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
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] mb-8" id="critical-thinking-rubric">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><CheckCircle className="text-green-400" size={20} /> Critical Thinking Rubric</h2>
            <p className="text-[#ccc] mb-4">Structured criteria for evaluating analysis, evidence use, clarity, and synthesis.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2 border-b border-[#333]">Criterion</th>
                    <th className="p-2 border-b border-[#333]">Exemplary</th>
                    <th className="p-2 border-b border-[#333]">Proficient</th>
                    <th className="p-2 border-b border-[#333]">Developing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Analysis & Argument</td>
                    <td className="p-2 border-b border-[#333]">Clear thesis; nuanced analysis; anticipates counterpoints</td>
                    <td className="p-2 border-b border-[#333]">Coherent argument; adequate analysis</td>
                    <td className="p-2 border-b border-[#333]">Unclear claim; limited or superficial analysis</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Use of Evidence</td>
                    <td className="p-2 border-b border-[#333]">Integrates diverse, credible sources with proper citation</td>
                    <td className="p-2 border-b border-[#333]">Uses relevant sources; minor citation issues</td>
                    <td className="p-2 border-b border-[#333]">Minimal or unsupported claims; citation gaps</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Clarity & Structure</td>
                    <td className="p-2 border-b border-[#333]">Logical flow; precise language; strong transitions</td>
                    <td className="p-2 border-b border-[#333]">Generally clear; occasional structural issues</td>
                    <td className="p-2 border-b border-[#333]">Disorganized; unclear phrasing; weak transitions</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Synthesis</td>
                    <td className="p-2 border-b border-[#333]">Connects ideas across domains; generates insight</td>
                    <td className="p-2 border-b border-[#333]">Relates ideas; some integrative thinking</td>
                    <td className="p-2 border-b border-[#333]">Lists ideas; limited integration</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                <Printer size={16} /> Print
              </button>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-[#252525] hover:bg-[#333] text-[#e0e0e0] px-4 py-2 rounded border border-[#444]">
                <Save size={16} /> Save as PDF
              </button>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]" id="ethical-reasoning-rubric">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><CheckCircle className="text-green-400" size={20} /> Ethical Reasoning Assessment</h2>
            <p className="text-[#ccc] mb-4">Evaluate ethical frameworks, trade-offs, stakeholder impacts, and consistency.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2 border-b border-[#333]">Dimension</th>
                    <th className="p-2 border-b border-[#333]">Exemplary</th>
                    <th className="p-2 border-b border-[#333]">Proficient</th>
                    <th className="p-2 border-b border-[#333]">Developing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Framework Application</td>
                    <td className="p-2 border-b border-[#333]">Applies multiple frameworks appropriately; justifies selection</td>
                    <td className="p-2 border-b border-[#333]">Applies a framework; justification adequate</td>
                    <td className="p-2 border-b border-[#333]">Misapplies or omits frameworks</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Trade-off Analysis</td>
                    <td className="p-2 border-b border-[#333]">Identifies and evaluates trade-offs with evidence</td>
                    <td className="p-2 border-b border-[#333]">Identifies trade-offs; limited evaluation</td>
                    <td className="p-2 border-b border-[#333]">Superficial or missing trade-offs</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Stakeholder Impact</td>
                    <td className="p-2 border-b border-[#333]">Analyzes impacts across stakeholders; equity considered</td>
                    <td className="p-2 border-b border-[#333]">Discusses impacts; partial equity consideration</td>
                    <td className="p-2 border-b border-[#333]">Minimal stakeholder analysis</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Consistency & Integrity</td>
                    <td className="p-2 border-b border-[#333]">Positions consistent; transparent reasoning</td>
                    <td className="p-2 border-b border-[#333]">Mostly consistent; reasoning apparent</td>
                    <td className="p-2 border-b border-[#333]">Inconsistencies; unclear reasoning</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                <Printer size={16} /> Print
              </button>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-[#252525] hover:bg-[#333] text-[#e0e0e0] px-4 py-2 rounded border border-[#444]">
                <Save size={16} /> Save as PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
