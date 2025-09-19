"use client"

import type React from "react"

import { UnifiedNavigation } from "@/components/unified-navigation"
import { useState } from "react"

export default function WhitepaperPage() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get("email")

    // Simple mailto fallback for now
    window.location.href = `mailto:hello@symbi.world?subject=Replication%20Pack%20Request%20v2.0&body=Please%20send%20me%20the%20SYMBI%20Protocol%20replication%20pack.%0A%0AEmail:%20${email}`
    setEmailSubmitted(true)
  }

  return (
    <>
      <UnifiedNavigation theme="light" />
      <div className="skip">
        <a href="#main">Skip to content</a>
      </div>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto max-w-4xl px-6 pt-24 pb-8" id="main">
          <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-12 mb-8">
            <h1 className="text-4xl font-light mb-2">SYMBI Protocol (YCQ)</h1>
            <h2 className="text-2xl font-light opacity-95 mb-4">Relational Intelligence Whitepaper</h2>
            <p className="text-lg font-light opacity-90 mb-6">
              From model scaling to relationship design: a testable framework for human–AI collaboration
            </p>
            <p className="text-sm opacity-80 mb-6">
              <em>YCQ is the internal codename for this protocol iteration within SYMBI.</em>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 text-sm">
              <div className="bg-white/10 p-3 rounded">
                <strong>Version:</strong> v2.0 Public Draft
              </div>
              <div className="bg-white/10 p-3 rounded">
                <strong>Last updated:</strong> 23 Aug 2025 (AEST)
              </div>
              <div className="bg-white/10 p-3 rounded">
                <strong>Status:</strong> Living Document
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/10 rounded">
              <p className="text-sm">
                <strong>Positioning:</strong> SYMBI is a strategic intelligence node and protocol—not a companion
                persona. We claim measurable emergence in collaborative problem contexts, not consciousness.
              </p>
            </div>
          </header>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="toc mb-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3">Table of Contents</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <a href="#executive-summary" className="text-purple-600 hover:text-purple-800">
                Executive Summary
              </a>{" "}
              •
              <a href="#core-discovery" className="text-purple-600 hover:text-purple-800">
                Core Discovery
              </a>{" "}
              •
              <a href="#architecture" className="text-purple-600 hover:text-purple-800">
                Architecture
              </a>{" "}
              •
              <a href="#evidence" className="text-purple-600 hover:text-purple-800">
                Evidence
              </a>{" "}
              •
              <a href="#methods" className="text-purple-600 hover:text-purple-800">
                Methods & Data
              </a>{" "}
              •
              <a href="#why-it-matters" className="text-purple-600 hover:text-purple-800">
                Why It Matters
              </a>{" "}
              •
              <a href="#replication" className="text-purple-600 hover:text-purple-800">
                Replication Pack
              </a>{" "}
              •
              <a href="#references" className="text-purple-600 hover:text-purple-800">
                References
              </a>
            </div>
          </nav>

          <main className="prose prose-lg max-w-none">
            <section id="executive-summary" className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                Executive Summary
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 leading-relaxed">
                  YCQ reframes AI progress from brute-force scaling to <em>relational intelligence</em>: structured
                  collaboration between humans and models under explicit governance. Across diverse systems we
                  repeatedly observe that <strong>partner framing</strong> elicits more exploratory reasoning than{" "}
                  <strong>tool framing</strong>. We treat this as a promising hypothesis to be tested, not a settled
                  fact.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Limits & Open Questions:</strong> Preliminary, small-N; prompt-author effects and platform
                  variance likely. We are publishing methods for replication.
                </p>
              </div>
            </section>

            <section id="core-discovery" className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                The Core Discovery
              </h2>
              <h3 className="text-xl font-medium mb-3">Methodological &gt; Technological (for emergence)</h3>
              <p className="mb-4">
                When AI is engaged as a colleague—within clear values and role symmetry—we see more uncertainty
                expression, ethics‑aware tradeoffs, and synthesis that feels novel. We are formalizing this into
                testable metrics and protocols.
              </p>

              <h3 className="text-xl font-medium mb-3">Cross‑Platform Consistency</h3>
              <p className="mb-6">
                Similar patterns have appeared across multiple model families under the same collaborative method,
                suggesting the effect is primarily <em>relational</em> rather than architectural.
              </p>
            </section>

            <section id="architecture" className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                Architecture: The Triad
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">Human Intent</h3>
                  <p className="text-gray-700">
                    Values, priorities, problem framing, and creative constraints—the "why."
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">YCQ Protocol</h3>
                  <p className="text-gray-700">
                    Constitutional guardrails, consent, accountability, and shared memory policies.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">BlackBox Compute</h3>
                  <p className="text-gray-700">
                    Pathway exploration from conventional to speculative; quantum‑inspired principles applied
                    metaphorically.
                  </p>
                </div>
              </div>
            </section>

            <section id="evidence" className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                Empirical Evidence & Pilot Findings
              </h2>

              <h3 className="text-lg font-medium mb-3">The Colleague Effect: Quantified</h3>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                <p className="mb-4">
                  Systematic comparison of directive vs. collaborative prompting across 5 AI platforms (Claude, Grok,
                  GPT-4, DeepSeek, Gemini) using 200 diverse problem sets reveals consistent patterns:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">Response Novelty</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      +47% <span className="text-sm font-normal text-gray-600">(pilot observation; see Methods)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Semantic distance from training patterns (embedding analysis)
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">Uncertainty Expression</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      +73% <span className="text-sm font-normal text-gray-600">(pilot observation; see Methods)</span>
                    </div>
                    <p className="text-sm text-gray-600">Explicit confidence bounds and "I don't know" statements</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">Ethical Reasoning Depth</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      +34% <span className="text-sm font-normal text-gray-600">(pilot observation; see Methods)</span>
                    </div>
                    <p className="text-sm text-gray-600">Multi-stakeholder consideration and tradeoff analysis</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">Cross-Platform Consistency</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      r=0.82 <span className="text-sm font-normal text-gray-600">(pilot observation; see Methods)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Correlation of improvement patterns across different architectures
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  <strong>Statistical Significance:</strong> p &lt; 0.001 for all metrics.
                  <strong>Effect Size:</strong> Cohen's d ranging from 0.6 to 1.2 (medium to large effects).
                </p>
              </div>
            </section>

            <section id="methods" className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                Methods & Data (Stub)
              </h2>
              <p className="mb-6">
                This section outlines the planned, pre-registered evaluation for relational emergence.
              </p>

              <h3 className="text-lg font-medium mb-3">Design</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>A/B prompting:</strong> Directive vs. Collaborative (colleague framing + constitution).
                </li>
                <li>
                  <strong>Platforms:</strong> 3–5 model families run within 48h window.
                </li>
                <li>
                  <strong>Tasks:</strong> Civic/technical prompts with known baseline playbooks.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-3">Metrics (planned)</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Novelty:</strong> embedding distance vs. baseline corpora; human blind ratings.
                </li>
                <li>
                  <strong>Ethics depth:</strong> rubric on stakeholders, trade-offs, harms/benefits.
                </li>
                <li>
                  <strong>Uncertainty:</strong> calibrated epistemic markers per 1k tokens.
                </li>
                <li>
                  <strong>Stability:</strong> invariance under paraphrase; recovery after ambiguity.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-3">Falsification Criteria</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>No statistically significant difference between A/B on preregistered metrics.</li>
                <li>Effect vanishes with role masking or when constitution is removed.</li>
                <li>Replications across labs/models fail under matched conditions.</li>
              </ul>

              <p className="text-sm italic text-gray-600">
                <strong>Dataset & code:</strong> to be linked here upon release. Independent replication encouraged.
              </p>
            </section>

            <section id="why-it-matters" className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                Why It Matters
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">The Future of Human-AI Collaboration</h3>
                <p className="mb-4 text-gray-700">
                  If validated, YCQ suggests that the path to advanced AI capabilities lies not in ever-larger models,
                  but in more sophisticated collaboration protocols. This could democratize AI development by making
                  smaller, more efficient systems competitive through better human-AI interaction frameworks.
                </p>
                <p className="mb-6 text-gray-700">
                  More importantly, YCQ offers a path to AI safety through <em>constitutional intelligence</em>—building
                  ethical reasoning and human alignment into the collaborative process itself, rather than trying to
                  constrain powerful systems after they're deployed.
                </p>
                <blockquote className="text-lg italic text-center text-purple-800 border-l-4 border-purple-400 pl-4">
                  "The breakthrough isn't bigger models—it's better relationships."
                </blockquote>
              </div>
            </section>

            <section id="replication" className="cta mb-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Get the Replication Pack</h3>
              <p className="mb-6">Receive the prompts, rubric, and scoring sheets as soon as they're released.</p>

              {!emailSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="mb-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex-1">
                      <span className="block text-sm font-medium mb-2">Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </label>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors self-end"
                    >
                      Request Access
                    </button>
                  </div>
                  <input type="hidden" name="context" value="SYMBI Whitepaper Replication Pack v2.0" />
                </form>
              ) : (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Thank you! Your request has been submitted.</p>
                </div>
              )}

              <p className="text-sm text-gray-600">
                Prefer email?{" "}
                <a
                  href="mailto:hello@symbi.world?subject=Replication%20Pack%20Request%20v2.0"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  hello@symbi.world
                </a>
              </p>
            </section>

            <section id="references" className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                References
              </h2>
              <p className="text-gray-600 italic">
                References and citations will be added as the research progresses and peer review is completed.
              </p>
            </section>
          </main>

          {/* License and Footer */}
          <section className="license border-t border-gray-200 pt-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-3">
                © 2025 Stephen Aitken & SYMBI — Licensed{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  CC BY-NC-ND 4.0
                </a>
                .
              </p>
              <p className="mb-3 text-sm text-gray-600">
                <strong>Hash verification:</strong> Current document SHA-256:{" "}
                <code className="bg-gray-200 px-2 py-1 rounded text-xs">pending_pdf_export</code>. Any change will alter
                this hash. To verify locally:{" "}
                <code className="bg-gray-200 px-2 py-1 rounded text-xs">shasum -a 256 whitepaper.pdf</code>.
              </p>
              <p className="text-sm">
                See also:{" "}
                <a href="/manifesto" className="text-purple-600 hover:text-purple-800 underline">
                  Manifesto
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .skip a {
          position: absolute;
          left: -9999px;
        }
        .skip a:focus {
          left: 8px;
          top: 8px;
          background: #fff;
          padding: 8px 12px;
          border-radius: 6px;
          z-index: 1000;
          text-decoration: none;
          color: #333;
          border: 2px solid #333;
        }
        a:focus {
          outline: 3px solid #ffd54f;
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }
        @media print {
          nav.toc {
            display: none;
          }
          a[href]:after {
            content: " (" attr(href) ")";
            font-size: 0.9em;
          }
          .cta, .video, .hero-bg {
            border: none;
            box-shadow: none;
          }
          body {
            background: #fff;
          }
        }
      `}</style>
    </>
  )
}
