"use client"

import Link from "next/link"
import { Activity, Lock, AlertTriangle } from "lucide-react"

export default function SecurityMonitorPage() {
  return (
    <main className="min-h-screen bg-white text-black font-mono">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Security Monitor</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Enterprise-grade monitoring for rate limits, key safety, and guardrail enforcement.
          </p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-6 h-6 text-red-600" />
              <div className="font-semibold">Key Management</div>
            </div>
            <p className="text-sm text-gray-600">Server-side keys with zero-trust access and environment isolation.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-6 h-6 text-blue-600" />
              <div className="font-semibold">Rate Limiting</div>
            </div>
            <p className="text-sm text-gray-600">Request throttling and anomaly detection to prevent misuse.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <div className="font-semibold">Guardrails</div>
            </div>
            <p className="text-sm text-gray-600">Policy enforcement with audit signals when interventions occur.</p>
          </div>
        </div>
      </section>
    </main>
  )
}