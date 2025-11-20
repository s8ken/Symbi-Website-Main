"use client"

import Link from "next/link"
import { Printer, Save, Clock, Target, MessageSquare, ClipboardList, Users } from "lucide-react"

export default function CommunityTrustSessionPlanPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/downloads" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Printable Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-2 flex items-center gap-2"><Users size={22} className="text-purple-400" /> Community Trust – Session Plan</h1>
          <p className="text-[#ccc]">Build trust through transparent practices, stakeholder engagement, and equity‑aware design.</p>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 0–10 min</div>
              <p className="text-[#ccc]">Define trust dimensions and community stakeholders; set session goals.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 10–40 min</div>
              <p className="text-[#ccc]">Discuss consent, transparency, and equity; analyze case examples.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 40–80 min</div>
              <p className="text-[#ccc]">Group activity: design a community trust protocol with receipts, disclosures, and feedback loops.</p>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333] md:col-span-3">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Clock size={18} className="text-purple-400" /> 80–90 min</div>
              <p className="text-[#ccc]">Share protocols; identify gaps; define next engagements with stakeholders.</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><Target className="text-purple-400" size={20} /> Learning Outcomes</h2>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> Articulate trust principles in community contexts.</li>
              <li><span className="text-purple-500">•</span> Design protocols incorporating consent, transparency, and feedback.</li>
              <li><span className="text-purple-500">•</span> Evaluate equity implications and stakeholder impacts.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><MessageSquare className="text-purple-400" size={20} /> Discussion Plan</h2>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> What disclosures build trust without harming privacy?</li>
              <li><span className="text-purple-500">•</span> How to capture consent lineage in community deployments?</li>
              <li><span className="text-purple-500">•</span> Equity considerations and mitigation strategies.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3 flex items-center gap-2"><ClipboardList className="text-purple-400" size={20} /> Activities</h2>
            <ol className="space-y-2 text-[#ccc] list-decimal list-inside">
              <li>Map stakeholders and trust needs.</li>
              <li>Draft consent capture and disclosure flows.</li>
              <li>Define feedback mechanisms and remediation paths.</li>
              <li>Prepare a 3‑minute community trust protocol brief.</li>
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

