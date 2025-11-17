"use client"

import Link from "next/link"
import { Shield, BarChart3, CheckCircle } from "lucide-react"

export default function TrustDashboardPage() {
  return (
    <main className="min-h-screen bg-white text-black font-mono">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trust Dashboard</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real-time trust scoring, receipt verification, and compliance status across agents.
          </p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <div className="font-semibold">Receipt Verification</div>
            </div>
            <p className="text-sm text-gray-600">One-click cryptographic verification of trust receipts with audit trail.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
              <div className="font-semibold">Trust Scores</div>
            </div>
            <p className="text-sm text-gray-600">Distribution and trend analysis across agents and interactions.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <div className="font-semibold">Compliance</div>
            </div>
            <p className="text-sm text-gray-600">Live compliance status against the 6 trust articles.</p>
          </div>
        </div>
      </section>
    </main>
  )
}