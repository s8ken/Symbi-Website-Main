"use client"

import Link from "next/link"
import { Coins, Layers, PieChart, CalendarClock, Building2, BarChart3 } from "lucide-react"

export default function FinancialPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">SYMBI Financial Framework</h1>
        <p className="text-xl text-[#cfcfcf] mb-10">Token design, release schedule, funding approach, revenue model, and projections.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Coins className="text-yellow-400" />
              <h3 className="text-xl font-bold">Tokenomics</h3>
            </div>
            <p className="text-[#bbb]">Utility and governance roles, community allocations, and audit-driven incentives.</p>
          </div>
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <CalendarClock className="text-blue-400" />
              <h3 className="text-xl font-bold">Release Schedule</h3>
            </div>
            <p className="text-[#bbb]">Staged emissions with transparency and milestone-based unlocks.</p>
          </div>
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Building2 className="text-green-400" />
              <h3 className="text-xl font-bold">Funding</h3>
            </div>
            <p className="text-[#bbb]">Blended grants and partnerships aligned to ethical governance.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Layers className="text-purple-400" />
              <h3 className="text-xl font-bold">Revenue Model</h3>
            </div>
            <p className="text-[#bbb]">Open tools, audit services, and enterprise integrations supporting community R&D.</p>
          </div>
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="text-pink-400" />
              <h3 className="text-xl font-bold">Projections & Market</h3>
            </div>
            <p className="text-[#bbb]">Market analysis and ethical positioning for sustainable growth.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-4">
            <Link href="/financial-whitepaper" className="bg-[#e0e0e0] text-[#0f0f0f] px-5 py-2 rounded hover:bg-white">Read Financial Whitepaper</Link>
            <Link href="/investment" className="border border-[#555] px-5 py-2 rounded hover:bg-[#1a1a1a]">Join Investment</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

