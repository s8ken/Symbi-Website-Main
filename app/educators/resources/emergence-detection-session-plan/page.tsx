"use client"

import Link from "next/link"
import { Printer, Save, Clock, Target, MessageSquare, ClipboardList, Zap } from "lucide-react"

export default function EmergenceDetectionSessionPlanPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/downloads" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Printable Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-2 flex items-center gap-2"><Zap size={22} className="text-purple-400" /> Emergence Detection – Session Plan</h1>
          <p className="text-[#ccc]">Investigate signals of emergent behavior and craft rigorous evaluation strategies.</p>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 0–10 min</div>
              <p className="text-[#ccc]">Define emergence; outline indicators (novel generalization, tool use, self‑correction).</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 10–40 min</div>
              <p className="text-[#ccc]">Discuss detection pitfalls: dataset leakage, prompt bias, confounds; draft hypotheses.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 40–80 min</div>
              <p className="text-[#ccc]">Group activity: design probes; define success metrics and controls; run mock evaluations.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333] md:col-span-3">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 80–90 min</div>
              <p className="text-[#ccc]">Present results and limitations; propose next experiments and documentation needs.</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><Target className="text-purple-400" size={20} /> Learning Outcomes</h2>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> Identify credible indicators of emergence and common confounds.</li>
              <li><span className="text-purple-500">•</span> Design probes with controls, metrics, and reproducibility standards.</li>
              <li><span className="text-purple-500">•</span> Communicate findings with transparent limitations and next steps.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><MessageSquare className="text-purple-400" size={20} /> Discussion Plan</h2>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> What counts as emergence vs. large‑scale interpolation?</li>
              <li><span className="text-purple-500">•</span> Role of prompt engineering and evaluation leakage.</li>
              <li><span className="text-purple-500">•</span> Ethical implications of premature claims.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><ClipboardList className="text-purple-400" size={20} /> Activities</h2>
            <ol className="space-y-2 text-[#ccc] list-decimal list-inside">
              <li>Draft probe suites targeting generalization and tool use.</li>
              <li>Define success thresholds and negative controls.</li>
              <li>Record seeds, environment, and hashes; simulate results.</li>
              <li>Prepare 3‑minute team brief on findings and risks.</li>
            </ol>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"><Printer size={16} /> Print</button>
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-[#252525] hover:bg-[#333] text-[#e0e0e0] px-4 py-2 rounded border border-[#444]"><Save size={16} /> Save as PDF</button>
          </div>
        </div>
      </div>
    </div>
  )
}

