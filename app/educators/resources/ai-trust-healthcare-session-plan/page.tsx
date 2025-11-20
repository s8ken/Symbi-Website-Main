"use client"

import Link from "next/link"
import { Printer, Save, Clock, ClipboardList, MessageSquare, Target } from "lucide-react"

export default function AITrustHealthcareSessionPlanPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/downloads" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Printable Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-2">AI Trust in Healthcare – Session Plan</h1>
          <p className="text-[#ccc]">90 minutes • Objectives, activities, and assessment</p>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 0–10 min</div>
              <p className="text-[#ccc]">Introductions, session overview, baseline concepts: receipts, consent, lineage.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 10–40 min</div>
              <p className="text-[#ccc]">Guided discussion and definitions; explore examples and collect insights.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 40–80 min</div>
              <p className="text-[#ccc]">Group activity: map trust receipts across Reality, Trust, Ethics, Resonance, Parity; short team presentations.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333] md:col-span-3">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 80–90 min</div>
              <p className="text-[#ccc]">Assessment and reflection; capture audit-trail-first takeaways and next steps.</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><Target className="text-purple-400" size={20} /> Learning Outcomes</h2>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> Define and differentiate trust receipts, consent, and dataset lineage.</li>
              <li><span className="text-purple-500">•</span> Explain audit-trail-first design and its role in AI trust.</li>
              <li><span className="text-purple-500">•</span> Map receipts across Reality, Trust, Ethics, Resonance, Parity dimensions.</li>
              <li><span className="text-purple-500">•</span> Synthesize findings in concise group presentations.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><MessageSquare className="text-purple-400" size={20} /> Discussion Plan</h2>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> Consent in AI frameworks: where consent is captured and verified; implications for equity.</li>
              <li><span className="text-purple-500">•</span> Explore trust receipts on the site and describe how they function within pipelines.</li>
              <li><span className="text-purple-500">•</span> Define dataset lineage: provenance, transformations, and usage trails.</li>
            </ul>
            <div className="mt-4 text-sm text-[#999]">Dataset lineage: a verifiable record of data origin, consent state, transformations, and usage, enabling auditability and accountability.</div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><ClipboardList className="text-purple-400" size={20} /> Activities</h2>
            <ol className="space-y-2 text-[#ccc] list-decimal list-inside">
              <li>In teams, select a simple AI pipeline and enumerate consent points.</li>
              <li>Draft sample trust receipts for two critical steps (ingestion, model use).</li>
              <li>Map receipts across Reality, Trust, Ethics, Resonance, Parity; note gaps.</li>
              <li>Prepare a 2–3 minute share-out summarizing findings and recommendations.</li>
            </ol>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><ClipboardList className="text-purple-400" size={20} /> Assessment & Teacher Tools</h2>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> Reflection prompt: How does audit-trail-first design improve trust and compliance? Identify one risk mitigated.</li>
              <li><span className="text-purple-500">•</span> Checklist: receipts present, consent verified, lineage documented, ethical guardrails considered.</li>
              <li><span className="text-purple-500">•</span> Use the <Link href="/educators/rubrics#ethical-reasoning-rubric" className="text-purple-400 hover:text-purple-300">Ethical Reasoning Rubric</Link> to score reasoning and synthesis.</li>
            </ul>
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
