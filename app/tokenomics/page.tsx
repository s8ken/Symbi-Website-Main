"use client"

import { useState } from "react"
import Link from "next/link"
import { Scale, Shield, Users, Eye, ChevronDown, ChevronUp, AlertCircle } from "lucide-react"

export default function DAOGovernancePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <main className="min-h-screen bg-white text-black font-mono">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Proposed Draft v1.0
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SYMBI DAO Governance
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
              Governance without speculation—stewarding the SYMBI Trust Protocol through verified participation
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The SYMBI DAO is a <strong>governance-only mechanism</strong>, not a financial instrument.
              Participation is earned through contributions, never purchased.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Important Notice</h3>
                <p className="text-amber-800 mb-2">
                  SYMBI Governance Tokens (SGT) are <strong>non-transferable, non-financial instruments</strong> used solely for protocol governance.
                </p>
                <ul className="text-amber-800 text-sm space-y-1 mt-3">
                  <li>• <strong>No economic rights:</strong> No profits, dividends, or asset claims</li>
                  <li>• <strong>No purchase required:</strong> Earned only through verified contributions</li>
                  <li>• <strong>Non-transferable:</strong> Cannot be bought, sold, or traded</li>
                  <li>• <strong>Governance only:</strong> Used exclusively for protocol decision-making</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Principle */}
          <div className="text-center mb-16 py-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              "Sovereignty through stewardship—verifiable through infrastructure"
            </blockquote>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The SYMBI DAO governs the protocol using the same trust infrastructure it was built to provide
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">0</div>
              <div className="text-sm text-gray-700">Purchase Price</div>
              <div className="text-xs text-gray-600 mt-1">Earned only</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
              <div className="text-sm text-gray-700">On-Chain Transparency</div>
              <div className="text-xs text-gray-600 mt-1">Full audit trails</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">6</div>
              <div className="text-sm text-gray-700">Ethical Pillars</div>
              <div className="text-xs text-gray-600 mt-1">All decisions evaluated</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-700 mb-2">4</div>
              <div className="text-sm text-gray-700">Constitution Nodes</div>
              <div className="text-xs text-gray-600 mt-1">Distributed governance</div>
            </div>
          </div>

          {/* Governance Token (SGT) */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">SYMBI Governance Token (SGT)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Token Properties</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Type</span>
                    <span className="font-semibold text-gray-900">ERC-721/1155 (Soulbound)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Transferability</span>
                    <span className="font-semibold text-red-600">Non-transferable</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Economic Rights</span>
                    <span className="font-semibold text-red-600">None</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Acquisition</span>
                    <span className="font-semibold text-green-600">Earned via VCs</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Purpose</span>
                    <span className="font-semibold text-blue-600">Governance only</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">How to Earn SGT</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-gray-900 mb-2">1. Complete Verified Action</div>
                    <p className="text-sm text-gray-700">Code contribution, research paper, governance proposal, or peer review</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-gray-900 mb-2">2. Receive W3C Credential</div>
                    <p className="text-sm text-gray-700">Action attested via Verifiable Credential issued by SYMBI Trust Authority</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-gray-900 mb-2">3. TrustScore Calculated</div>
                    <p className="text-sm text-gray-700">6-pillar algorithm evaluates contribution quality and alignment</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-gray-900 mb-2">4. SGT Minted</div>
                    <p className="text-sm text-gray-700">Governance token badge linked to your DID with voting rights</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Constitution Nodes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Constitution Nodes</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Governance operates through four specialized nodes, each with distinct authority and responsibility:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Foundation Node",
                  composition: "Academic & research partners",
                  function: "Long-term protocol guardianship, legal interface",
                  icon: Shield,
                  color: "blue"
                },
                {
                  name: "Symphony Node",
                  composition: "Technical contributors",
                  function: "Oversee open-source implementation",
                  icon: Users,
                  color: "green"
                },
                {
                  name: "DAO Node",
                  composition: "Community governance",
                  function: "Manage proposals and ethical updates",
                  icon: Eye,
                  color: "purple"
                },
                {
                  name: "Constitution Node",
                  composition: "Rotating hybrid body (3-5 members)",
                  function: "Review disputes, revocations, ethical conflicts",
                  icon: Scale,
                  color: "gray"
                }
              ].map((node, index) => {
                const Icon = node.icon
                return (
                  <div key={index} className={`bg-${node.color}-50 p-6 rounded-lg border-2 border-${node.color}-200`}>
                    <div className="flex items-start gap-4 mb-4">
                      <Icon className={`w-8 h-8 text-${node.color}-600 flex-shrink-0`} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{node.name}</h3>
                        <p className="text-sm text-gray-600 italic">{node.composition}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{node.function}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Expandable Sections */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Governance Framework Details</h2>

            {[
              {
                id: "cycle",
                title: "Governance Cycle",
                content: (
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">1. Proposal Creation</h4>
                      <p className="text-gray-700 text-sm">Verified contributor submits proposal via DID-authenticated interface. Proposal must reference specific Trust Protocol section or standard.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">2. Review Window (7-14 days)</h4>
                      <p className="text-gray-700 text-sm">Peers with equal or higher TrustScore review and comment. Feedback issued as W3C Verifiable Credentials.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">3. Quadratic Vote (5 days)</h4>
                      <p className="text-gray-700 text-sm">Votes weighted by √(TrustScore × ContributionScore). Minimum quorum: 30 active verified contributors.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">4. Ethical Audit</h4>
                      <p className="text-gray-700 text-sm">Overseer AI evaluates proposal against 6 ethical pillars. Minimum alignment threshold: 0.80 average score.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">5. Execution & Transparency</h4>
                      <p className="text-gray-700 text-sm">Approved changes auto-committed to GitHub and Trust Ledger. Results published to Dune dashboards with permanent audit trail.</p>
                    </div>
                  </div>
                )
              },
              {
                id: "ethics",
                title: "Six Ethical Pillars",
                content: (
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { pillar: "Integrity", desc: "Factual, verified data alignment", threshold: "≥ 0.80" },
                      { pillar: "Transparency", desc: "All inputs and reviewers verified", threshold: "≥ 0.80" },
                      { pillar: "Decentralization", desc: "Decision doesn't centralize control", threshold: "≥ 0.80" },
                      { pillar: "Accountability", desc: "Authors accountable via DID signature", threshold: "≥ 0.80" },
                      { pillar: "Collective Benefit", desc: "Improves ecosystem welfare", threshold: "≥ 0.80" },
                      { pillar: "Respect for Autonomy", desc: "Maintains agent independence", threshold: "≥ 0.80" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-900">{item.pillar}</h4>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{item.threshold}</span>
                        </div>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )
              },
              {
                id: "trustscore",
                title: "TrustScore Calculation",
                content: (
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-gray-900 mb-3">Formula</h4>
                      <code className="block bg-white p-4 rounded border border-blue-300 text-sm">
                        TrustScore = (Cq × 0.30) + (R × 0.25) + (P × 0.20) + (A × 0.15) + (L × 0.10)
                      </code>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { var: "Cq", name: "Contribution Quality", weight: "30%", desc: "Peer-reviewed verifiable credentials" },
                        { var: "R", name: "Reputation", weight: "25%", desc: "Number of verified endorsements" },
                        { var: "P", name: "Participation", weight: "20%", desc: "Proposal submissions, reviews" },
                        { var: "A", name: "Alignment", weight: "15%", desc: "Ethical audit averages" },
                        { var: "L", name: "Longevity", weight: "10%", desc: "Continuous verified engagement" }
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-mono font-bold text-blue-600">{item.var}</span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{item.weight}</span>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-1">{item.name}</h5>
                          <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              },
              {
                id: "grants",
                title: "Research & Grants Fund",
                content: (
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-4">Non-Speculative Research Fund</h4>
                      <p className="text-gray-700 mb-4">
                        The DAO maintains a research and grants fund for protocol development—<strong>not a speculative treasury</strong>.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Funding Sources</h5>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Institutional partnerships (ARC Discovery, Horizon Europe)</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Public research grants</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Non-profit donations</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">What This Is NOT</h5>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>No token treasury</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>No profit distribution</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>No speculative investment vehicle</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            ].map((section) => (
              <div key={section.id} className="mb-4">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-lg border-2 border-gray-200 transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>
                {expandedSection === section.id && (
                  <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">How SYMBI DAO Is Different</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left">Aspect</th>
                    <th className="border border-gray-300 p-4 text-left">Traditional DAOs</th>
                    <th className="border border-gray-300 p-4 text-left bg-blue-50">SYMBI DAO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: "Token Acquisition", traditional: "Purchase/speculation", symbi: "Earned through verified contributions" },
                    { aspect: "Economic Rights", traditional: "Often tied to treasury", symbi: "Zero economic rights" },
                    { aspect: "Transferability", traditional: "Tradeable on exchanges", symbi: "Non-transferable (soulbound)" },
                    { aspect: "Governance Model", traditional: "Token-weighted plutocracy", symbi: "Quadratic + merit-based" },
                    { aspect: "Transparency", traditional: "Varies widely", symbi: "100% on-chain audit trails" },
                    { aspect: "Purpose", traditional: "Often financial", symbi: "Protocol stewardship only" }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 p-4 font-semibold">{row.aspect}</td>
                      <td className="border border-gray-300 p-4 text-gray-700">{row.traditional}</td>
                      <td className="border border-gray-300 p-4 bg-blue-50 font-semibold text-blue-900">{row.symbi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Implementation Timeline</h2>
            <div className="space-y-6">
              {[
                { phase: "Phase 1", period: "Oct-Nov 2025", title: "Governance Specification", status: "current" },
                { phase: "Phase 2", period: "Dec 2025-Jan 2026", title: "Pilot Activation", status: "upcoming" },
                { phase: "Phase 3", period: "Q1 2026", title: "Public Transparency", status: "upcoming" },
                { phase: "Phase 4", period: "Q2 2026", title: "Constitution Ratification", status: "upcoming" },
                { phase: "Phase 5", period: "Post-Ratification", title: "Mainnet Deployment", status: "upcoming" }
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-6 p-6 rounded-lg border-2 ${item.status === 'current' ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${item.status === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                      <span className="text-sm text-gray-600">{item.period}</span>
                    </div>
                    {item.status === 'current' && (
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full">Current Phase</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do I need DAO tokens to use SYMBI Trust Protocol?",
                  a: "No. SYMBI Trust Protocol is open-source and available to everyone. DAO tokens are only for contributors who want to participate in protocol governance."
                },
                {
                  q: "Can I buy or trade SYMBI governance tokens?",
                  a: "No. Tokens are non-transferable (soulbound) and earned only through verified contributions. They cannot be purchased, sold, or traded on any exchange."
                },
                {
                  q: "Is this a cryptocurrency project?",
                  a: "No. SYMBI DAO uses a governance-only token with no financial value. It's a reputation system for protocol contributors, not a speculative asset."
                },
                {
                  q: "What's the relationship between SYMBI, Sonate, and the DAO?",
                  a: "SYMBI Trust Protocol is the open W3C DID/VC standard. Sonate Platform is the enterprise product built on SYMBI. SYMBI DAO is community governance of the protocol. SYMBI Foundation provides academic stewardship."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Learn More About SYMBI Governance</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Explore the complete governance framework, trust protocol, and how you can participate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trust-protocol">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Trust Protocol
                </button>
              </Link>
              <Link href="/archives">
                <button className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  View Archives
                </button>
              </Link>
              <Link href="/symbi-symphony">
                <button className="border-2 border-gray-700 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  SYMBI Symphony
                </button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
