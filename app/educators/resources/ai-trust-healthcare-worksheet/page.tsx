"use client"

import Link from "next/link"
import { Printer, Save, Activity, Lock, BarChart3, CheckCircle, Brain } from "lucide-react"

export default function CrossPlatformWorksheetPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/educators/downloads" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Printable Resources
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-2">Cross-Platform Reproducibility – Worksheet</h1>
          <p className="text-[#ccc]">Ensure consistent, verifiable results across operating systems, hardware, and runtime environments.</p>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Activity size={18} className="text-purple-400" /> Environment Inventory</div>
              <ul className="space-y-2 text-[#ccc]">
                <li>Operating system and version</li>
                <li>CPU/GPU and driver versions</li>
                <li>Runtime: Node/Python versions and package managers</li>
                <li>Containers/virtualization details (if applicable)</li>
              </ul>
            </div>
            <div className="p-4 rounded bg-[#0f0f0f] border border-[#333]">
              <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Lock size={18} className="text-purple-400" /> Dependency Locking</div>
              <ul className="space-y-2 text-[#ccc]">
                <li>Use lockfiles and exact version pins</li>
                <li>Record build flags and environment variables</li>
                <li>Document container/base image digests</li>
                <li>Capture seeds and non-deterministic settings</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-3 text-[#e0e0e0]"><BarChart3 size={18} className="text-purple-400" /> Reproducibility Matrix</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2 border-b border-[#333]">OS</th>
                    <th className="p-2 border-b border-[#333]">Runtime</th>
                    <th className="p-2 border-b border-[#333]">Result Hash</th>
                    <th className="p-2 border-b border-[#333]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Windows 11</td>
                    <td className="p-2 border-b border-[#333]">Node 20.x</td>
                    <td className="p-2 border-b border-[#333]">________________</td>
                    <td className="p-2 border-b border-[#333]">Drivers, env vars</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">macOS 14</td>
                    <td className="p-2 border-b border-[#333]">Node 20.x</td>
                    <td className="p-2 border-b border-[#333]">________________</td>
                    <td className="p-2 border-b border-[#333]">Apple Silicon notes</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Ubuntu 22.04</td>
                    <td className="p-2 border-b border-[#333]">Node 20.x</td>
                    <td className="p-2 border-b border-[#333]">________________</td>
                    <td className="p-2 border-b border-[#333]">CUDA/cuDNN versions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><CheckCircle size={18} className="text-purple-400" /> Evidence Collection</div>
            <ul className="space-y-2 text-[#ccc]">
              <li>Store outputs with hashes and timestamps</li>
              <li>Record seeds and random settings used</li>
              <li>Attach environment manifests and lockfiles</li>
              <li>Capture diffs when results diverge</li>
            </ul>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-2 text-[#e0e0e0]"><Brain size={18} className="text-purple-400" /> Reflection</div>
            <ul className="space-y-2 text-[#ccc]">
              <li>Where did reproducibility break and why?</li>
              <li>What guardrails and documentation improved consistency?</li>
              <li>What would you standardize for future runs?</li>
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
