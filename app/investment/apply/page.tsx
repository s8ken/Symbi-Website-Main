"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

export default function InvestmentApplyPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Apply for Investment</h1>
        <p className="text-[#ccc] mb-6">To discuss investment or partnerships, please contact us.</p>
        <Link href="mailto:stephen@symbi.world" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded">
          <Mail size={18} /> stephen@symbi.world
        </Link>
        <p className="text-[#999] mt-4">Alternatively, use the <Link href="/contact" className="text-purple-400 hover:text-purple-300">Contact page</Link>.</p>
      </div>
    </div>
  )
}

