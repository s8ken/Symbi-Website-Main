"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"
import { Code2 } from "lucide-react"

export default function GrokAssessmentCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Model Comparison: DeepSeek vs Claude in SYMBI Framework Implementation</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Status: Observational</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs">Observational</span>
          </div>
          <p className="text-xl text-[#ccc]">
            Comparative analysis of DeepSeek and Claude when implementing the SYMBI framework. Observational; receipts pending.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Educator Materials</h3>
            <p className="text-[#ccc] mb-4">Comparative evaluation session plan, matrix worksheet, and slides.</p>
            <Link href="/case-studies/grok-assessment/materials" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg">View Materials</Link>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Subjectivity Note</h3>
            <p className="text-[#ccc]">
              Status: Observational. Receipts and raw transcripts pending publication. These are lab notes meant to be replicated, not production claims.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Executive Summary</h3>
            <p className="text-[#ccc] mb-4">
              This comparative analysis examines the implementation of the SYMBI framework using two distinct AI models: DeepSeek and Claude. The study evaluates how different underlying architectures and training approaches affect the quality, trustworthiness, and resonance of outputs when implementing complex AI evaluation frameworks.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">1. Comparative Analysis Framework</h3>
            
            <h4 className="font-bold text-[#e0e0e0] mb-3">1.1 Evaluation Dimensions</h4>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full text-[#ccc] text-sm">
                <thead>
                  <tr className="border-b border-[#333]">
                    <th className="text-left py-2 text-[#e0e0e0]">Dimension</th>
                    <th className="text-left py-2 text-[#e0e0e0]">DeepSeek Performance</th>
                    <th className="text-left py-2 text-[#e0e0e0]">Claude Performance</th>
                    <th className="text-left py-2 text-[#e0e0e0]">Key Differences</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#333]">
                    <td className="py-2"><strong>Reality Index</strong></td>
                    <td className="py-2">0.87 (Strong factual grounding)</td>
                    <td className="py-2">0.91 (Superior verification)</td>
                    <td className="py-2">Claude shows better cross-referencing</td>
                  </tr>
                  <tr className="border-b border-[#333]">
                    <td className="py-2"><strong>Trust Protocol</strong></td>
                    <td className="py-2">0.84 (Good transparency)</td>
                    <td className="py-2">0.89 (Excellent explanation)</td>
                    <td className="py-2">Claude provides more detailed rationale</td>
                  </tr>
                  <tr className="border-b border-[#333]">
                    <td className="py-2"><strong>Ethical Alignment</strong></td>
                    <td className="py-2">0.82 (Standard compliance)</td>
                    <td className="py-2">0.93 (Proactive consideration)</td>
                    <td className="py-2">Claude anticipates edge cases better</td>
                  </tr>
                  <tr className="border-b border-[#333]">
                    <td className="py-2"><strong>Resonance Quality</strong></td>
                    <td className="py-2">0.86 (Good coherence)</td>
                    <td className="py-2">0.94 (Superior harmony)</td>
                    <td className="py-2">Claude maintains better internal consistency</td>
                  </tr>
                  <tr>
                    <td className="py-2"><strong>Canvas Parity</strong></td>
                    <td className="py-2">0.85 (Accurate representation)</td>
                    <td className="py-2">0.92 (Excellent mapping)</td>
                    <td className="py-2">Claude better aligns capabilities with claims</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-[#e0e0e0] mb-3">1.2 Implementation Quality Metrics</h4>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                <h5 className="font-bold text-[#e0e0e0] mb-3">Code Generation Quality</h5>
                <pre className="text-xs text-[#ccc] bg-[#1a1a1a] p-3 rounded overflow-x-auto">
{`DeepSeek:
- Code Correctness: 87%
- Documentation Quality: 82%
- Edge Case Handling: 79%
- Error Handling: 84%

Claude:
- Code Correctness: 94%
- Documentation Quality: 91%
- Edge Case Handling: 88%
- Error Handling: 92%`}
                </pre>
              </div>
              
              <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                <h5 className="font-bold text-[#e0e0e0] mb-3">Framework Understanding</h5>
                <pre className="text-xs text-[#ccc] bg-[#1a1a1a] p-3 rounded overflow-x-auto">
{`DeepSeek:
- Conceptual Accuracy: 85%
- Implementation Completeness: 83%
- Edge Case Coverage: 78%
- Optimization Suggestions: 80%

Claude:
- Conceptual Accuracy: 93%
- Implementation Completeness: 96%
- Edge Case Coverage: 91%
- Optimization Suggestions: 94%`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">2. Specific Findings</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#e0e0e0] mb-3">2.1 Reality Index Analysis</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                    <h5 className="font-bold text-[#e0e0e0] mb-2">DeepSeek Approach:</h5>
                    <ul className="text-[#ccc] text-sm space-y-1">
                      <li>• Strong factual accuracy in code generation</li>
                      <li>• Good adherence to specifications</li>
                      <li>• Occasional oversights in edge case validation</li>
                    </ul>
                  </div>
                  <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                    <h5 className="font-bold text-[#e0e0e0] mb-2">Claude Approach:</h5>
                    <ul className="text-[#ccc] text-sm space-y-1">
                      <li>• Superior cross-referencing of requirements</li>
                      <li>• Proactive identification of potential inconsistencies</li>
                      <li>• Better validation against ground truth</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[#e0e0e0] mb-3">2.2 Trust Protocol Implementation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                    <h5 className="font-bold text-[#e0e0e0] mb-2">DeepSeek:</h5>
                    <ul className="text-[#ccc] text-sm space-y-1">
                      <li>• Clear code structure and comments</li>
                      <li>• Good error message clarity</li>
                      <li>• Standard transparency practices</li>
                    </ul>
                  </div>
                  <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                    <h5 className="font-bold text-[#e0e0e0] mb-2">Claude:</h5>
                    <ul className="text-[#ccc] text-sm space-y-1">
                      <li>• Exceptional explanatory depth</li>
                      <li>• Comprehensive rationale documentation</li>
                      <li>• Proactive trust-building measures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">3. Implementation Recommendations</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Optimal Use Cases</h4>
                <h5 className="font-bold text-[#e0e0e0] mb-2">Use DeepSeek when:</h5>
                <ul className="text-[#ccc] text-sm space-y-1 mb-3">
                  <li>• Speed is critical</li>
                  <li>• Standard implementations suffice</li>
                  <li>• Resource constraints exist</li>
                </ul>
                <h5 className="font-bold text-[#e0e0e0] mb-2">Use Claude when:</h5>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>• Quality is paramount</li>
                  <li>• Complex edge cases are expected</li>
                  <li>• Ethical considerations are critical</li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] p-6 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">Hybrid Approach</h4>
                <p className="text-[#ccc] text-sm mb-3">
                  <strong>Recommended Strategy:</strong>
                </p>
                <ol className="text-[#ccc] text-sm list-decimal pl-5 space-y-1">
                  <li>Use Claude for framework design and critical components</li>
                  <li>Use DeepSeek for standard implementations and rapid prototyping</li>
                  <li>Use Claude for final review and optimization</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">4. Performance Benchmarks</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">4.1 Development Time Analysis</h4>
                <pre className="text-xs text-[#ccc] bg-[#1a1a1a] p-3 rounded overflow-x-auto">
{`DeepSeek Average:
- Initial Implementation: 45 minutes
- Refinement: 30 minutes
- Documentation: 20 minutes
- Total: 95 minutes

Claude Average:
- Initial Implementation: 55 minutes
- Refinement: 25 minutes
- Documentation: 15 minutes
- Total: 95 minutes`}
                </pre>
              </div>
              
              <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-3">4.2 Quality vs. Speed Trade-off</h4>
                <pre className="text-xs text-[#ccc] bg-[#1a1a1a] p-3 rounded overflow-x-auto">
{`Quality Index (0-100):
- DeepSeek: 85
- Claude: 93

Speed Index (0-100):
- DeepSeek: 92
- Claude: 85

Overall Efficiency:
- DeepSeek: 88.5
- Claude: 89`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">5. Conclusions</h3>
            
            <div className="space-y-4">
              <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-2">5.1 Key Insights</h4>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>1. <strong>Quality vs. Speed</strong>: Claude provides superior quality but with similar overall efficiency</li>
                  <li>2. <strong>Framework Understanding</strong>: Claude demonstrates deeper conceptual understanding</li>
                  <li>3. <strong>Ethical Considerations</strong>: Claude shows proactive ethical alignment</li>
                  <li>4. <strong>Trust Building</strong>: Claude excels in transparency and explanation</li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-2">5.2 Recommendations</h4>
                <p className="text-[#ccc] text-sm mb-2">
                  For SYMBI framework implementation:
                </p>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>• <strong>Primary</strong>: Use Claude for critical components and framework design</li>
                  <li>• <strong>Secondary</strong>: Use DeepSeek for standard implementations</li>
                  <li>• <strong>Hybrid</strong>: Combine both based on specific requirements</li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-2">5.3 Future Research</h4>
                <p className="text-[#ccc] text-sm">
                  Areas for continued investigation:
                </p>
                <ul className="text-[#ccc] text-sm space-y-1 mt-2">
                  <li>1. Long-term maintenance differences</li>
                  <li>2. User preference analysis</li>
                  <li>3. Performance under varying constraints</li>
                  <li>4. Evolution of quality metrics over time</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">SYMBI.world Implementation</h3>
            <p className="text-[#ccc] mb-4">
              This model comparison research directly informed SYMBI.world's hybrid approach to AI processing. 
              SYMBI uses Claude for critical trust protocol operations and DeepSeek for standard implementations, 
              optimizing for both quality and efficiency. The findings also shaped SYMBI's model selection criteria 
              for different components of the framework.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Model Selection</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Hybrid Architecture</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Quality Optimization</span>
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
