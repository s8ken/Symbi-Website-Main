"use client"

import Link from "next/link"
import { FileText, BookOpen, Users, Presentation, Download } from "lucide-react"

export default function MirrorMomentMaterialsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies/mirror-moment" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Case Study
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-2">Educator Materials: Community Response & Trust</h1>
          <p className="text-[#ccc]">Session plan and resources for transparency, mutual accountability, and governance.</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] mb-8">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4 flex items-center gap-2">
              <BookOpen size={24} /> Lesson Materials
            </h2>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start gap-2">
                <FileText className="text-purple-400" size={18} />
                <span>
                  <strong>Session Plan:</strong> <Link href="/educators/resources/community-trust-session-plan" className="text-purple-400 hover:text-purple-300">Community Trust – Session Plan</Link>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="text-purple-400" size={18} />
                <span>
                  <strong>Worksheet:</strong> <Link href="/educators/resources/ai-trust-healthcare-worksheet" className="text-purple-400 hover:text-purple-300">Community Trust – Worksheet</Link>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Presentation className="text-purple-400" size={18} />
                <span>
                  <strong>Slides:</strong> <Link href="/educators/downloads" className="text-purple-400 hover:text-purple-300">Community Trust – Slides (Coming Soon)</Link>
                </span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <Link href="/educators/downloads" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg">Browse Downloads</Link>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Complete Library</h2>
            <p className="text-[#ccc] mb-4">Access the full Educators library across lesson plans, guides, and assessments.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/educators/downloads" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                <Download size={18} /> Browse Complete Library
              </Link>
              <Link href="/educators" className="bg-[#252525] hover:bg-[#333] text-[#e0e0e0] font-bold py-3 px-6 rounded-lg transition-colors border border-[#444]">Go to Educators Hub</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
