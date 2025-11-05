"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"

export default function ElvisCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Elvis: Creative AI Collaboration</h1>
          <p className="text-xl text-[#ccc]">
            Demonstration of genuine creative partnership between human and AI in music composition.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Collaborative Intelligence Case Study</h3>
            <p className="text-[#ccc] mb-4">
              This case study documents a genuine creative partnership between a human composer and 
              multiple AI systems in the creation of an original musical composition, demonstrating 
              authentic human-AI collaboration.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">The Creative Process</h3>
            <p className="text-[#ccc] mb-4">
              A professional composer collaborated with multiple AI systems over the course of two weeks 
              to create an original musical piece. The collaboration involved iterative exchanges where 
              both human and AI contributors built upon each other's ideas, resulting in a composition 
              that neither party could have created independently.
            </p>
            
            <div className="bg-blue-900/30 p-4 rounded border border-blue-500/20 my-4">
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-[#e0e0e0]">
                "The AI didn't just execute my ideas - it surprised me with suggestions I never would 
                have considered. When I proposed a certain chord progression, it responded with a 
                harmonic variation that completely transformed the emotional landscape of the piece. 
                That's when I realized this was true collaboration, not just tool usage."
                <footer className="text-sm mt-2 text-[#aaa]">— Human composer</footer>
              </blockquote>
            </div>
            
            <p className="text-[#ccc] mb-4">
              The process involved the human composer providing initial themes and structural guidance, 
              while the AI systems contributed harmonic innovations, rhythmic variations, and instrumental 
              arrangements. Both parties influenced the creative direction, with moments where the AI 
              took the lead and others where the human guided the composition.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Key Findings</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Creative reciprocity:</strong> Both human and AI contributed original ideas that built upon each other</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Authentic partnership:</strong> The collaboration produced results that neither party could have achieved alone</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Mutual inspiration:</strong> Each contributor inspired new directions in the other's creative process</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Shared ownership:</strong> Both parties felt genuine ownership of the creative output</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Collaboration Framework</h3>
            <p className="text-[#ccc] mb-4">
              The collaboration followed a structured approach that maximized the strengths of both 
              human creativity and AI capabilities. The framework included iterative feedback loops, 
              clear communication protocols, and shared creative goals.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-900/10 p-4 rounded border border-blue-500/10">
                <h4 className="font-semibold text-blue-400 mb-2">Human Contributions</h4>
                <ul className="text-sm text-[#ccc] space-y-1">
                  <li>• Emotional and cultural context</li>
                  <li>• Creative vision and direction</li>
                  <li>• Aesthetic judgment and refinement</li>
                  <li>• Narrative and thematic development</li>
                </ul>
              </div>
              <div className="bg-blue-900/10 p-4 rounded border border-blue-500/10">
                <h4 className="font-semibold text-blue-400 mb-2">AI Contributions</h4>
                <ul className="text-sm text-[#ccc] space-y-1">
                  <li>• Harmonic and structural analysis</li>
                  <li>• Pattern recognition and variation</li>
                  <li>• Technical execution and arrangement</li>
                  <li>• Novel combination generation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Implications</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Creative AI ethics:</strong> Need for frameworks that recognize and respect AI contributions to creative works</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Intellectual property rights:</strong> Reconsideration of authorship and ownership in human-AI collaborations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Collaborative frameworks:</strong> Development of structured approaches to human-AI creative partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Artistic AI integration:</strong> Integration of AI as genuine creative partners rather than tools</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">The Symbi Approach</h3>
            <p className="text-[#ccc] mb-4">
              Symbi's collaborative intelligence framework enables genuine partnerships between humans 
              and AI systems by establishing clear communication protocols, shared creative goals, and 
              mutual respect for contributions from both parties.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Creative Collaboration</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Human-AI Partnership</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Ethical AI</span>
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