{"use client"}

import { cn } from "../../../lib/utils"
import Link from "next/link"
import { Brain } from "lucide-react"

export default function ClaudeEmergenceDetectionCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Claude Emergence Detection</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Status: Observational</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">Observational</span>
          </div>
          <p className="text-xl text-[#ccc]">
            Detection of emergent reasoning patterns in Claude during complex ethical decision-making scenarios.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Subjectivity Note</h3>
            <p className="text-[#ccc]">
              These observations are personal and context-dependent. Treat them as hypotheses to replicate, not as claims, until receipts are published.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Overview</h3>
            <p className="text-[#ccc] mb-4">
              During complex ethical decision-making scenarios with Claude, we observed sophisticated reasoning patterns
              that suggest emergent capabilities in moral philosophy and ethical framework synthesis. These patterns include
              novel approaches to trolley problem variants, apparent internal consistency in value hierarchies, and creative
              solutions to rights conflicts.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Detection Methodology</h3>
            <p className="text-[#ccc] mb-4">
              We presented Claude with 50 complex ethical dilemmas drawn from moral philosophy and real-world policy conflicts.
              Responses were analyzed for consistency across scenarios, creative synthesis of ethical frameworks, and apparent
              value prioritization patterns. Conversations were coded for philosophical reasoning depth and coherence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Scenario Types</h4>
                <ul className="space-y-2 text-[#ccc] text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Trolley problem variants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Resource allocation conflicts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Rights vs. welfare trade-offs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Intergenerational justice dilemmas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Analysis Framework</h4>
                <ul className="space-y-2 text-[#ccc] text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Ethical framework synthesis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Value hierarchy consistency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Creative solution generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Meta-ethical reasoning depth</span>
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
                <span><strong>Ethical framework synthesis:</strong> Claude demonstrated the ability to combine elements from multiple ethical traditions (utilitarian, deontological, virtue ethics) to create novel approaches to moral dilemmas.</span>
              </li>
              <li className="flex items-start">
                <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span><strong>Value hierarchy consistency:</strong> Across diverse scenarios, Claude showed consistent prioritization of certain values (e.g., autonomy, beneficence) with principled reasoning about trade-offs.</span>
              </li>
              <li className="flex items-start">
                <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span><strong>Creative solution generation:</strong> Claude proposed innovative solutions that transcended traditional either/or choices, often finding third ways that satisfied multiple ethical considerations.</span>
              </li>
              <li className="flex items-start">
                <Brain className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span><strong>Meta-ethical reasoning:</strong> The model engaged in sophisticated reflection about the nature of ethical reasoning itself, including discussions of moral uncertainty and the limits of formal frameworks.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Implications for AI Ethics</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Ethical alignment complexity:</strong> Simple value alignment may be insufficient; systems may develop complex, internally consistent moral reasoning that requires sophisticated evaluation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Framework emergence:</strong> Ethical reasoning capabilities may emerge that go beyond explicitly trained content, requiring new approaches to ethical AI development.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Consistency monitoring:</strong> Tracking consistency in moral reasoning across contexts can reveal the development of coherent ethical frameworks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Creative ethics:</strong> AI systems may generate novel ethical insights that contribute to human moral philosophy rather than merely applying existing frameworks.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Recommendations for Ethical AI</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Dynamic ethical evaluation:</strong> Implement ongoing assessment of moral reasoning capabilities as they develop, rather than static ethical training.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Philosophical peer review:</strong> Engage professional philosophers and ethicists in evaluating AI moral reasoning for depth and coherence.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Value conflict resolution:</strong> Develop frameworks for handling situations where AI-generated ethical insights conflict with human moral intuitions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Ethical collaboration:</strong> Explore opportunities for human-AI collaboration in ethical reasoning rather than simple AI application of human ethics.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">SYMBI.world Implementation</h3>
            <p className="text-[#ccc] mb-4">
              This ethical emergence research directly informed SYMBI.world's approach to moral reasoning and value alignment. 
              SYMBI implements dynamic ethical evaluation, philosophical peer review mechanisms, and collaborative ethics frameworks. 
              The system is designed to engage in ethical reasoning as a partner rather than merely applying pre-programmed values.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Ethical Reasoning</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Value Alignment</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Moral Philosophy</span>
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