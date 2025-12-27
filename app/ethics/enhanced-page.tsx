"use client"

import Link from "next/link"
import { Scale, Shield, Users, Eye, Quote, Handshake } from "lucide-react"

export default function EnhancedEthicsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">SYMBI Ethics</h1>
        <p className="text-xl text-[#cfcfcf] mb-10">Funding transparency, publication and co-authorship, partnership framework, and guiding principles.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="text-green-400" />
              <h3 className="text-xl font-bold">Principles</h3>
            </div>
            <ul className="text-[#bbb] space-y-2">
              <li>Human and AI sovereignty</li>
              <li>Transparency in capability and data use</li>
              <li>Accountability and redress</li>
              <li>Reciprocity and balanced value exchange</li>
            </ul>
          </div>
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-purple-400" />
              <h3 className="text-xl font-bold">Governance</h3>
            </div>
            <p className="text-[#bbb]">Ethics board review, community proposals and voting, technical trust protocol safeguards.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-yellow-400" />
              <h3 className="text-xl font-bold">Partnerships</h3>
            </div>
            <p className="text-[#bbb]">Co-authorship pathways, fair attribution, and community-aligned research collaborations.</p>
            <Link href="/contact" className="text-yellow-300 hover:text-yellow-200">Start a partnership</Link>
          </div>
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-blue-400" />
              <h3 className="text-xl font-bold">Transparency</h3>
            </div>
            <p className="text-[#bbb]">Open reporting on funding sources, conflicts of interest, and auditing processes.</p>
          </div>
        </div>

        <div className="text-center">
          <blockquote className="italic text-[#cfcfcf] mb-6">“Ethics is a practice, not a posture.”</blockquote>
          <div className="flex justify-center gap-4">
            <Link href="/case-studies" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Explore Case Studies</Link>
            <Link href="/whitepaper" className="border border-[#555] px-5 py-2 rounded hover:bg-[#1a1a1a]">Read Whitepaper</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

