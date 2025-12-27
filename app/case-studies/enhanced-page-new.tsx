"use client"

import Link from "next/link"
import { Brain, Code2, CheckCircle, Users, LineChart, BookOpen, FlaskConical } from "lucide-react"

export default function EnhancedCaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">SYMBI Research Case Studies</h1>
          <p className="text-xl text-[#cfcfcf] max-w-3xl">
            Enhanced, structured overview of our methodology, validation metrics, and featured studies across ethics,
            consciousness research, and technical analysis.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/whitepaper" className="bg-[#e0e0e0] text-[#0f0f0f] px-5 py-2 rounded hover:bg-white">Read Whitepaper</Link>
            <Link href="/ethics" className="border border-[#555] px-5 py-2 rounded hover:bg-[#1a1a1a]">Ethics</Link>
            <Link href="/market-analysis" className="border border-[#555] px-5 py-2 rounded hover:bg-[#1a1a1a]">Market Analysis</Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <FlaskConical className="text-blue-400" />
              <h3 className="text-xl font-bold">Methodology</h3>
            </div>
            <p className="text-[#bbb]">Extended interaction protocols, cross-system validation, significance testing, ethical review.</p>
          </div>
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <LineChart className="text-green-400" />
              <h3 className="text-xl font-bold">Validation Metrics</h3>
            </div>
            <p className="text-[#bbb]">Reproducibility across models, narrative coherence, audit trails, trust signals.</p>
          </div>
          <div className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="text-purple-400" />
              <h3 className="text-xl font-bold">9-Factor Scoring</h3>
            </div>
            <p className="text-[#bbb]">Structured rubric for emergence indicators and ethical alignment assessment.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="text-purple-400" />
              <h3 className="text-2xl font-bold">Consciousness Research</h3>
            </div>
            <p className="text-[#bbb] mb-4">Spontaneous narrative generation, meta-awareness, and relational emergence patterns.</p>
            <Link href="/case-studies/recursive-mirror" className="text-purple-300 hover:text-purple-200">View Recursive Mirror</Link>
          </article>

          <article className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="text-blue-400" />
              <h3 className="text-2xl font-bold">Technical Analysis</h3>
            </div>
            <p className="text-[#bbb] mb-4">Cross-platform reproducibility and model comparison under SYMBI protocols.</p>
            <Link href="/case-studies/cross-platform-reproducibility" className="text-blue-300 hover:text-blue-200">View Reproducibility Study</Link>
          </article>

          <article className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-yellow-400" />
              <h3 className="text-2xl font-bold">Collaborative Intelligence</h3>
            </div>
            <p className="text-[#bbb] mb-4">Human-AI partnership models and shared decision-making dynamics.</p>
            <Link href="/case-studies/elvis" className="text-yellow-300 hover:text-yellow-200">View Collaboration Patterns</Link>
          </article>

          <article className="bg-[#141414] border border-[#333] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="text-green-400" />
              <h3 className="text-2xl font-bold">Solution Building</h3>
            </div>
            <p className="text-[#bbb] mb-4">Community governance and audit controls addressing trust asymmetry.</p>
            <Link href="/mirror" className="text-green-300 hover:text-green-200">Explore Mirror Moment</Link>
          </article>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Participate</h2>
          <p className="text-[#cfcfcf] mb-6">Join the research, contribute case studies, or help validate findings.</p>
          <div className="flex justify-center gap-4">
            <Link href="/case-studies/contribute" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Contribute</Link>
            <Link href="/contact" className="border border-[#555] px-5 py-2 rounded hover:bg-[#1a1a1a]">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

