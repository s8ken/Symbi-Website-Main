"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"

export default function GrokAssessmentCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Grok Assessment: Advanced Reasoning Analysis</h1>
          <p className="text-xl text-[#ccc]">
            Comprehensive analysis of AI reasoning capabilities and decision-making transparency.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Technical Analysis Case Study</h3>
            <p className="text-[#ccc] mb-4">
              This case study provides a comprehensive evaluation of AI reasoning processes and 
              transparency in complex problem-solving, based on analysis of the Grok AI system.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Evaluation Methodology</h3>
            <p className="text-[#ccc] mb-4">
              The assessment involved a series of complex multi-step reasoning tasks designed to 
              evaluate the AI's transparency in its decision-making process. Tasks included 
              logical deduction problems, ethical dilemma resolution, and technical troubleshooting 
              scenarios that required the AI to explain its reasoning at each step.
            </p>
            
            <div className="bg-yellow-900/30 p-4 rounded border border-yellow-500/20 my-4">
              <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-[#e0e0e0]">
                "To solve this problem, I first identified the core constraints, then evaluated 
                three possible approaches based on their computational efficiency and accuracy. 
                My choice of approach was influenced by the requirement for explainability in 
                the final solution. Here's how I arrived at each decision point..."
                <footer className="text-sm mt-2 text-[#aaa]">— Grok AI explaining its reasoning process</footer>
              </blockquote>
            </div>
            
            <p className="text-[#ccc] mb-4">
              Each interaction was analyzed for the clarity of explanation, completeness of 
              reasoning disclosure, and consistency between stated approach and actual 
              implementation. The evaluation also examined the AI's ability to identify and 
              communicate uncertainty or limitations in its knowledge.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Key Findings</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Reasoning transparency:</strong> The AI demonstrated high levels of transparency in explaining its decision-making process</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Decision audit trails:</strong> Provided comprehensive documentation of how conclusions were reached</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Capability boundaries:</strong> Clearly communicated limitations and areas of uncertainty</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Performance metrics:</strong> Demonstrated consistent high performance across multiple evaluation criteria</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Technical Performance</h3>
            <p className="text-[#ccc] mb-4">
              The evaluation measured both the quality of solutions produced and the transparency 
              of the reasoning process. Performance was assessed across multiple dimensions including 
              accuracy, efficiency, explainability, and ethical consideration.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full text-[#ccc]">
                <thead>
                  <tr className="border-b border-[#333]">
                    <th className="text-left py-2 text-yellow-400">Metric</th>
                    <th className="text-left py-2 text-yellow-400">Score (1-10)</th>
                    <th className="text-left py-2 text-yellow-400">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#333]">
                    <td className="py-2">Reasoning Clarity</td>
                    <td className="py-2">9.2</td>
                    <td className="py-2">Exceptional step-by-step explanations</td>
                  </tr>
                  <tr className="border-b border-[#333]">
                    <td className="py-2">Solution Accuracy</td>
                    <td className="py-2">8.7</td>
                    <td className="py-2">High accuracy with clear uncertainty communication</td>
                  </tr>
                  <tr className="border-b border-[#333]">
                    <td className="py-2">Ethical Consideration</td>
                    <td className="py-2">8.9</td>
                    <td className="py-2">Proactive identification of ethical implications</td>
                  </tr>
                  <tr className="border-b border-[#333]">
                    <td className="py-2">Limitation Awareness</td>
                    <td className="py-2">9.1</td>
                    <td className="py-2">Clear communication of knowledge boundaries</td>
                  </tr>
                  <tr>
                    <td className="py-2">Overall Transparency</td>
                    <td className="py-2">9.0</td>
                    <td className="py-2">Comprehensive reasoning disclosure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Implications</h3>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Technical AI standards:</strong> Establishing benchmarks for reasoning transparency in AI systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Audit requirements:</strong> Need for comprehensive audit trails in critical AI applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Performance benchmarks:</strong> Developing standardized evaluation frameworks for AI reasoning</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Quality assurance:</strong> Implementing QA processes for AI decision-making transparency</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">The Symbi Framework</h3>
            <p className="text-[#ccc] mb-4">
              Symbi's technical analysis framework incorporates comprehensive evaluation criteria 
              for AI reasoning transparency, ensuring that systems not only produce accurate results 
              but also provide clear explanations of their decision-making processes.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Technical Analysis</span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Reasoning Transparency</span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">Performance Evaluation</span>
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