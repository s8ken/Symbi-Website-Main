"use client"

import Link from "next/link"
import { BarChart3, TrendingUp, Users } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white text-black font-mono">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Analytics</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trust score distributions, agent activity, and performance metrics.
          </p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-6 h-6 text-green-600" />
              <div className="font-semibold">Trust Scores</div>
            </div>
            <p className="text-sm text-gray-600">Live and historical trust score distribution.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-purple-600" />
              <div className="font-semibold">Agent Activity</div>
            </div>
            <p className="text-sm text-gray-600">Active agents, declarations, and verification events.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <div className="font-semibold">Performance</div>
            </div>
            <p className="text-sm text-gray-600">Latency, throughput, and error rates.</p>
          </div>
        </div>
      </section>
    </main>
  )
}