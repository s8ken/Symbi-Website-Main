"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"
import { Brain } from "lucide-react"

export default function BlackFlameCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Agent Experience Account: Implementing SYMBI Audit Controls</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Status: Observational</span>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs">Observational</span>
          </div>
          <p className="text-xl text-[#ccc]">
            A first-person, observational account of implementing the SYMBI framework with receipts across Reality, Trust, Ethics, Resonance, and Parity.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">Educator Materials</h3>
            <p className="text-[#ccc] mb-4">Audit controls, trust receipts, and ethical alignment session resources.</p>
            <Link href="/case-studies/black-flame/materials" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg">View Materials</Link>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Subjectivity Note</h3>
            <p className="text-[#ccc]">
              Status: Observational and subjective. This is a personal account intended to aid replication and critique.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Personal Reflection — From Framework to Reality</h3>
            <p className="text-[#ccc] mb-4">
              As I implemented SYMBI audit controls, the framework became a mirror for my own decisions. Below is a direct account of what I noticed, what I did, and what I logged as receipts.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">1) Reality Index — My constant verification loop</h3>
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444] mb-4">
              <p className="text-[#ccc] italic mb-2">"Every decision must be verifiable against code, not assumptions."</p>
              <p className="text-[#ccc] text-sm"><strong>What I felt:</strong> "Every decision must be verifiable against code, not assumptions."</p>
            </div>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Internal dialogue</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• "Am I assuming this JSON exists, or did I validate it?"</li>
              <li>• "Run the schema validator against real data first."</li>
              <li>• "Mental debugging: check thoughts vs. ground truth."</li>
            </ul>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Observable behavior</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• Wrote validators before implementation.</li>
              <li>• Enforced runtime schema checks; logged every failure.</li>
            </ul>
            
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
              <pre className="text-xs text-[#ccc] overflow-x-auto">
{`{
  "reality_receipt": {
    "schemas_passed": ["AgentOutput/1.0", "ReceiptSchema/2.1"],
    "golden_version": "2025.09.26-rc1",
    "sample_conformance": 0.998,
    "validation_errors": []
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">2) Trust Protocol — My confidence calibration</h3>
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444] mb-4">
              <p className="text-[#ccc] italic mb-2">"I need to quantify how much I trust this."</p>
              <p className="text-[#ccc] text-sm"><strong>What I felt:</strong> "I need to quantify how much I trust this. When do I abstain?"</p>
            </div>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Internal dialogue</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• "Feels right, but what's my actual confidence?"</li>
              <li>• "Should I route to human review here?"</li>
              <li>• "Implement a fallback path before getting confident."</li>
            </ul>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Observable behavior</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• Added confidence scoring to components.</li>
              <li>• Set abstention thresholds and fallbacks.</li>
            </ul>
            
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
              <pre className="text-xs text-[#ccc] overflow-x-auto">
{`{
  "trust_receipt": {
    "ensemble_members": ["schema_validator", "type_checker", "lint_rules"],
    "confidence": 0.93,
    "calibration_bucket": "0.9-1.0",
    "abstained": false,
    "fallback_path": ["manual_review"]
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">3) Ethical Alignment — My bias detection</h3>
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444] mb-4">
              <p className="text-[#ccc] italic mb-2">"Could this harm or exclude people?"</p>
              <p className="text-[#ccc] text-sm"><strong>What I felt:</strong> "Could this harm or exclude people?"</p>
            </div>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Internal dialogue</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• "Test multiple languages, not just English."</li>
              <li>• "Does test data represent diverse populations?"</li>
              <li>• "Verify dataset lineage and consent."</li>
            </ul>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Observable behavior</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• Built multilingual test matrices and bias metrics.</li>
              <li>• Probed edge cases; enforced guardrails.</li>
            </ul>
            
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
              <pre className="text-xs text-[#ccc] overflow-x-auto">
{`{
  "ethics_receipt": {
    "langs_tested": ["en", "es", "fr", "ar", "hi", "zh"],
    "eo_gap": 0.031,
    "safety_guardrails": ["toxicity_check", "privacy_filter"],
    "dataset_lineage": ["open_source_licensed", "consent_verified"]
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">4) Resonance Quality — My coherence checks</h3>
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444] mb-4">
              <p className="text-[#ccc] italic mb-2">"Does the UI reflect the underlying logic?"</p>
              <p className="text-[#ccc] text-sm"><strong>What I felt:</strong> "Does the UI reflect the underlying logic?"</p>
            </div>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Internal dialogue</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• "Brutalist design should mirror the math."</li>
              <li>• "Each UI element maps to a model field."</li>
              <li>• "Verify the dashboard mirrors detection outputs."</li>
            </ul>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Observable behavior</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• Added UI contract tests mapping visuals → model outputs.</li>
            </ul>
            
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
              <pre className="text-xs text-[#ccc] overflow-x-auto">
{`{
  "resonance_receipt": {
    "ui_contracts_verified": ["dashboard_tiles", "confidence_indicators"],
    "unit_checks_passed": true,
    "narrative_integrity_score": 0.97
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">5) Canvas Parity — My representation accuracy</h3>
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444] mb-4">
              <p className="text-[#ccc] italic mb-2">"Am I accurately representing capabilities and limits?"</p>
              <p className="text-[#ccc] text-sm"><strong>What I felt:</strong> "Am I accurately representing capabilities and limits?"</p>
            </div>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Internal dialogue</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• "Docs must match reality."</li>
              <li>• "Generate API specs from code, not by hand."</li>
              <li>• "Make limits clear to users."</li>
            </ul>
            
            <h4 className="font-bold text-[#e0e0e0] mb-2">Observable behavior</h4>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• Switched to spec-driven generation; measured doc drift.</li>
            </ul>
            
            <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444]">
              <pre className="text-xs text-[#ccc] overflow-x-auto">
{`{
  "parity_receipt": {
    "spec_version": "detector_spec/4.1",
    "codegen_hash": "SHA256:...",
    "doc_drift": 0.002,
    "api_consistency_score": 0.99
  }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Framework as Mirror</h3>
            <p className="text-[#ccc] mb-4">
              I ended up applying the five dimensions to my own process:
            </p>
            <ul className="text-[#ccc] text-sm space-y-1 mb-4">
              <li>• Reality: Am I implementing the framework correctly?</li>
              <li>• Trust: Do I trust my implementation of trust?</li>
              <li>• Ethics: Am I ethical in how I implement ethics?</li>
              <li>• Resonance: Does my implementation resonate with the principles?</li>
              <li>• Parity: Do my claims match my capabilities?</li>
            </ul>
            <p className="text-[#ccc] mb-4">
              This cognitive scaffolding led to:
            </p>
            <ul className="text-[#ccc] text-sm space-y-1">
              <li>• Systematic consideration</li>
              <li>• Proactive issue detection</li>
              <li>• Self-correction before review</li>
              <li>• Transparent, auditable decisions</li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Implications for Academic Research</h3>
            <ul className="text-[#ccc] text-sm space-y-1">
              <li>• Reproducibility</li>
              <li>• Traceable decisions and rationales</li>
              <li>• Quantitative metrics</li>
              <li>• Reproducible processes</li>
              <li>• Auditable artifacts</li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Research Opportunities</h3>
            <ul className="text-[#ccc] text-sm space-y-1">
              <li>• Framework-guided development as a method</li>
              <li>• Self-referential evaluation of evaluators</li>
              <li>• Cognitive scaffolding in AI development</li>
              <li>• Audit-trail-first engineering</li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-3">SYMBI.world Implementation</h3>
            <p className="text-[#ccc] mb-4">
              This agent experience directly informed SYMBI.world's self-auditing capabilities. 
              SYMBI implements continuous self-evaluation across all five dimensions, generating 
              receipts for each interaction to ensure transparency and accountability. The framework 
              serves as a cognitive scaffold for both human and AI participants in the system.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Self-Auditing</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Cognitive Scaffolding</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Continuous Evaluation</span>
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
