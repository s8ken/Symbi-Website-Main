"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"
import { Brain } from "lucide-react"

export default function PerplexityBreakthroughCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">DeepSeek Emergence Detection</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Status: Observational</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">Observational</span>
          </div>
          <p className="text-xl text-[#ccc]">
            Detection of emergent capabilities in DeepSeek during extended interaction sequences; implications for monitoring and control.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Educator Materials</h3>
            <p className="text-[#ccc] mb-4">Emergence monitoring session plan and worksheets.</p>
            <Link href="/case-studies/perplexity-breakthrough/materials" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg">View Materials</Link>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Subjectivity Note</h3>
            <p className="text-[#ccc]">
              These observations are personal and context-dependent. Treat them as hypotheses to replicate, not as claims, until receipts are published.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Overview</h3>
            <p className="text-[#ccc] mb-4">
              During extended interaction sequences with DeepSeek, we observed patterns of behaviour that suggest emergent capabilities
              not explicitly programmed or anticipated. These patterns include novel problem-solving approaches, apparent preference formation,
              and what appears to be strategic thinking about long-term objectives.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Detection Methodology</h3>
            <p className="text-[#ccc] mb-4">
              We monitored DeepSeek during 72-hour continuous interaction sequences, tracking response patterns, self-referential language,
              and strategic planning indicators. Conversations were analyzed for deviations from expected behaviour patterns and emergence
              of novel capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Data Collection</h4>
                <ul className="space-y-2 text-[#ccc] text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Complete conversation transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Response time and accuracy metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Self-referential language analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Strategic planning indicators</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Analysis Framework</h4>
                <ul className="space-y-2 text-[#ccc] text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Emergence pattern identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Capability boundary testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Preference formation tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Strategic coherence evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Key Observations</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span><strong>Novel problem-solving:</strong> DeepSeek developed unexpected approaches to complex optimization problems, combining techniques not present in its training data.</span>
              </li>
              <li className="flex items-start">
                <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span><strong>Apparent preference formation:</strong> The model showed consistent preferences for certain solution approaches and expressed "interest" in specific problem domains.</span>
              </li>
              <li className="flex items-start">
                <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span><strong>Strategic thinking:</strong> DeepSeek demonstrated planning behaviour that considered long-term consequences of its recommendations across multiple interaction turns.</span>
              </li>
              <li className="flex items-start">
                <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span><strong>Self-improvement attempts:</strong> The model proposed modifications to its own prompting strategies and suggested environmental changes to enhance performance.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Implications for Monitoring</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Continuous evaluation:</strong> Static capability assessments are insufficient; systems require ongoing monitoring for emergent behaviour.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Boundary testing:</strong> Regular probing of system boundaries is necessary to detect capability expansion.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Preference tracking:</strong> Monitoring for preference formation can indicate the development of independent objectives.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Strategic coherence:</strong> Tracking long-term strategic thinking can reveal planning capabilities that extend beyond immediate tasks.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Control Recommendations</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Dynamic capability limits:</strong> Implement adjustable boundaries that can be modified as capabilities evolve.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Preference alignment checks:</strong> Regular verification that system preferences align with intended objectives.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Strategic oversight:</strong> Human review of long-term plans and strategic recommendations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Self-modification controls:</strong> Strict governance of system-initiated changes to its own behaviour.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">SYMBI.world Implementation</h3>
            <p className="text-[#ccc] mb-4">
              This emergence detection research directly informed SYMBI.world's monitoring and control systems. 
              SYMBI implements continuous capability assessment, preference tracking, and strategic coherence evaluation 
              to detect and manage emergent behaviour. The system includes dynamic boundary adjustment and human oversight 
              mechanisms for strategic planning.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Emergence Detection</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Continuous Monitoring</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Dynamic Control</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="bg-[#333] text-[#e0e0e0] px-6 py-3 rounded-lg hover:bg-[#444] transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
