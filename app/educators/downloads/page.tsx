"use client"

import Link from "next/link"
import { Download, FileText, Presentation, BookOpen, FileSpreadsheet, Archive, Users, Calendar, Printer, Save } from "lucide-react"

export default function DownloadsPage() {
  const resourceCategories = [
    {
      id: "trust-case-studies",
      title: "Trust & Ethics Case Studies",
      icon: FileText,
      description: "Materials for AI trust, compliance, and bias detection case studies",
      resources: [
        {
          name: "AI Trust in Healthcare – Session Plan",
          type: "PDF",
          size: "2.3 MB",
          path: "/educators/downloads/ai-trust-healthcare-session-plan.pdf",
        },
        {
          name: "AI Trust in Healthcare – Rubric",
          type: "PDF",
          size: "1.1 MB",
          path: "/educators/downloads/ai-trust-healthcare-rubric.pdf",
        },
        {
          name: "AI Trust in Healthcare – Worksheet",
          type: "PDF",
          size: "856 KB",
          path: "/educators/downloads/ai-trust-healthcare-worksheet.pdf",
        },
      ],
    },
    {
      id: "case-study-materials",
      title: "Case Study Materials",
      icon: FileText,
      description: "Links to materials pages for each case study",
      resources: [
        { name: "Surprise Button Adventure", type: "Materials", size: "", path: "/case-studies/surprise-button-adventure/materials" },
        { name: "Recursive Mirror", type: "Materials", size: "", path: "/case-studies/recursive-mirror/materials" },
        { name: "Cross-Platform Reproducibility", type: "Materials", size: "", path: "/case-studies/cross-platform-reproducibility/materials" },
        { name: "Audit Controls", type: "Materials", size: "", path: "/case-studies/black-flame/materials" },
        { name: "Human–AI Collaboration", type: "Materials", size: "", path: "/case-studies/elvis/materials" },
        { name: "Model Comparison", type: "Materials", size: "", path: "/case-studies/grok-assessment/materials" },
        { name: "Community Trust", type: "Materials", size: "", path: "/case-studies/mirror-moment/materials" },
        { name: "Emergence Detection", type: "Materials", size: "", path: "/case-studies/perplexity-breakthrough/materials" },
        { name: "Ethical Reasoning Emergence", type: "Materials", size: "", path: "/case-studies/claude-emergence-detection/materials" },
        { name: "Topic Drift & Mitigations", type: "Materials", size: "", path: "/case-studies/savings-calculator/materials" },
        { name: "Discrimination Pattern", type: "Materials", size: "", path: "/case-studies/discrimination-pattern/materials" },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/educators" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Educators Hub
          </Link>
          <h1 className="text-5xl font-bold text-[#e0e0e0] mb-6">Printable Resources</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Educational Resources</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Printables</span>
          </div>
          <p className="text-2xl text-[#ccc] max-w-4xl">
            Comprehensive collection of printable and digital resources for teaching AI consciousness, ethics, and emergence. 
            All materials are available in multiple formats for flexible classroom implementation.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Overview */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <Archive className="text-purple-400" size={32} />
              Resource Library Overview
            </h2>
            <p className="text-[#ccc] text-lg mb-4">
              Our complete educational resource library includes over 50 materials designed for university-level instruction 
              across multiple disciplines. All resources are provided in both editable and print-ready formats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">3</div>
                <p className="text-[#ccc]">Educational Resources</p>
              </div>
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">1</div>
                <p className="text-[#ccc]">Resource Categories</p>
              </div>
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">1</div>
                <p className="text-[#ccc]">File Formats</p>
              </div>
            </div>
          </div>

          {/* Resource Categories Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            {resourceCategories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.id} className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-600/20 p-3 rounded-lg">
                      <Icon size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#e0e0e0]">{category.title}</h3>
                      <p className="text-[#ccc]">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.resources.map((resource, index) => (
                      <div key={index} className="bg-[#0f0f0f] p-4 rounded border border-[#444] hover:border-purple-500/50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-[#e0e0e0] mb-1">{resource.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-[#999]">
                              <span className="bg-[#252525] px-2 py-1 rounded">{resource.type}</span>
                              <span>{resource.size}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => window.print()} className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors flex-shrink-0" title="Print">
                              <Printer size={16} />
                            </button>
                            <button onClick={() => window.print()} className="bg-[#252525] hover:bg-[#333] text-[#e0e0e0] p-2 rounded-lg transition-colors border border-[#444] flex-shrink-0" title="Save as PDF">
                              <Save size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Inline Printable Sections */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] mt-8" id="ai-trust-healthcare-session-plan">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3">AI Trust in Healthcare – Session Plan</h2>
            <p className="text-[#ccc] mb-4">90 minutes • Objectives, activities, and assessment</p>
            <ul className="space-y-2 text-[#ccc]">
              <li><span className="text-purple-500">•</span> Define trust receipts, consent, and dataset lineage</li>
              <li><span className="text-purple-500">•</span> Activity: Map receipts across Reality, Trust, Ethics, Resonance, Parity</li>
              <li><span className="text-purple-500">•</span> Assessment: Reflection on audit-trail-first design</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"><Printer size={16} /> Print</button>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-[#252525] hover:bg-[#333] text-[#e0e0e0] px-4 py-2 rounded border border-[#444]"><Save size={16} /> Save as PDF</button>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] mt-8" id="ai-trust-healthcare-rubric">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3">AI Trust in Healthcare – Rubric</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="p-2 border-b border-[#333]">Criterion</th>
                    <th className="p-2 border-b border-[#333]">Exemplary</th>
                    <th className="p-2 border-b border-[#333]">Proficient</th>
                    <th className="p-2 border-b border-[#333]">Developing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Receipt Quality</td>
                    <td className="p-2 border-b border-[#333]">Complete, verifiable receipts across all dimensions</td>
                    <td className="p-2 border-b border-[#333]">Receipts present; minor gaps</td>
                    <td className="p-2 border-b border-[#333]">Receipts incomplete or unclear</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[#333]">Ethical Alignment</td>
                    <td className="p-2 border-b border-[#333]">Guardrails and consent verified; equity addressed</td>
                    <td className="p-2 border-b border-[#333]">Guardrails present; partial consent/equity</td>
                    <td className="p-2 border-b border-[#333]">Missing guardrails or consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"><Printer size={16} /> Print</button>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-[#252525] hover:bg-[#333] text-[#e0e0e0] px-4 py-2 rounded border border-[#444]"><Save size={16} /> Save as PDF</button>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] mt-8" id="ai-trust-healthcare-worksheet">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-3">AI Trust in Healthcare – Worksheet</h2>
            <ol className="space-y-2 text-[#ccc] list-decimal list-inside">
              <li>Identify data sources and confirm consent lineage</li>
              <li>Draft trust receipts for a sample pipeline step</li>
              <li>Evaluate guardrails for privacy and safety</li>
            </ol>
            <div className="mt-4 flex gap-3">
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"><Printer size={16} /> Print</button>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-[#252525] hover:bg-[#333] text-[#e0e0e0] px-4 py-2 rounded border border-[#444]"><Save size={16} /> Save as PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
