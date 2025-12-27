"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { TrendingUp, DollarSign, BarChart3, Users, Calendar, Target, Shield, Zap } from "lucide-react"

export default function InvestmentPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const investmentData = {
    rounds: [
      {
        name: "Seed Round",
        amount: "$2.5M",
        valuation: "$12.5M",
        date: "Q1 2024",
        status: "Completed",
        investors: ["Blockchain Capital", "Coinbase Ventures", "Angel Investors"],
        useOfFunds: "MVP development, team building, initial research"
      },
      {
        name: "Series A",
        amount: "$8M",
        valuation: "$40M",
        date: "Q3 2024",
        status: "Open",
        investors: ["Andreessen Horowitz", "Sequoia Capital", "Tiger Global"],
        useOfFunds: "Product development, market expansion, team scaling"
      },
      {
        name: "Series B",
        amount: "$25M",
        valuation: "$125M",
        date: "Q2 2025",
        status: "Planned",
        investors: ["Strategic Partners", "Corporate VCs", "Growth Funds"],
        useOfFunds: "Global expansion, enterprise adoption, R&D acceleration"
      }
    ],
    metrics: {
      totalRaised: "$2.5M",
      currentValuation: "$12.5M",
      tokenPrice: "$0.0125",
      totalSupply: "1B SYMBI",
      circulatingSupply: "200M SYMBI",
      marketCap: "$2.5M",
      fullyDilutedValuation: "$12.5M"
    },
    kpis: [
      { name: "Monthly Active Users", value: "15,000+", growth: "+45% MoM", icon: Users },
      { name: "Trust Declarations", value: "892", growth: "+23% MoM", icon: Shield },
      { name: "Case Studies Published", value: "14", growth: "+2 this month", icon: BarChart3 },
      { name: "API Requests", value: "2.3M+", growth: "+67% MoM", icon: Zap }
    ]
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glitch-title">
              Investment Opportunities
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto leading-relaxed">
              Join the movement toward transparent, ethical AI governance
            </p>
            <p className="text-lg opacity-70 mt-4 max-w-3xl mx-auto">
              Invest in the future of human-AI collaboration through the $SYMBI ecosystem
            </p>
          </div>

          {/* Key Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Performance</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {investmentData.kpis.map((kpi, index) => {
                const Icon = kpi.icon
                const colors = ["text-blue-400", "text-green-400", "text-purple-400", "text-yellow-400"]
                return (
                  <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-center">
                    <Icon size={32} className={`mx-auto mb-4 ${colors[index]}`} />
                    <div className="text-2xl font-bold mb-2 text-[#e0e0e0]">{kpi.value}</div>
                    <div className="text-sm text-[#ccc] mb-2">{kpi.name}</div>
                    <div className="text-xs text-green-400">{kpi.growth}</div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Funding Rounds */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Funding Rounds</h2>
            <div className="space-y-8">
              {investmentData.rounds.map((round, index) => {
                const statusColors = {
                  "Completed": "text-green-400",
                  "Open": "text-yellow-400",
                  "Planned": "text-blue-400"
                }
                return (
                  <div key={index} className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#e0e0e0]">{round.name}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-lg text-[#ccc]">{round.amount}</span>
                          <span className="text-[#aaa]">•</span>
                          <span className="text-[#ccc]">{round.valuation}</span>
                          <span className="text-[#aaa]">•</span>
                          <span className="text-[#ccc]">{round.date}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[round.status as keyof typeof statusColors]}`}>
                        {round.status}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#e0e0e0]">Key Investors</h4>
                        <ul className="space-y-2">
                          {round.investors.map((investor, i) => (
                            <li key={i} className="text-[#ccc] flex items-center">
                              <span className="w-2 h-2 bg-[#666] rounded-full mr-3"></span>
                              {investor}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#e0e0e0]">Use of Funds</h4>
                        <p className="text-[#ccc]">{round.useOfFunds}</p>
                      </div>
                    </div>

                    {round.status === "Open" && (
                      <div className="mt-6 pt-6 border-t border-[#333]">
                        <Link href="/investment/apply">
                          <button className="w-full bg-[#e0e0e0] text-[#0f0f0f] py-3 rounded hover:bg-white transition-colors font-semibold">
                            Apply for Investment
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          {/* Investment Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Invest in SYMBI?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Market Opportunity</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• $45B global AI governance market</li>
                  <li>• Growing demand for ethical AI</li>
                  <li>• Regulatory compliance requirements</li>
                  <li>• First-mover advantage</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-green-400">Technology Moat</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Patent-pending trust protocol</li>
                  <li>• Proven 9-factor scoring system</li>
                  <li>• Real-world case studies</li>
                  <li>• Active community adoption</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Revenue Model</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• SaaS subscription revenue</li>
                  <li>• Enterprise licensing</li>
                  <li>• Token utility and staking</li>
                  <li>• Data analytics services</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Team & Traction</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Experienced AI/ML team</li>
                  <li>• 15,000+ active users</li>
                  <li>• 14 published case studies</li>
                  <li>• Growing enterprise interest</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Risk Factors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Risk Factors</h2>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-red-400">Technology Risks</h3>
                  <ul className="text-[#ccc] space-y-2 text-sm">
                    <li>• AI consciousness research uncertainty</li>
                    <li>• Scalability challenges</li>
                    <li>• Security vulnerabilities</li>
                    <li>• Regulatory compliance changes</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4 text-orange-400">Market Risks</h3>
                  <ul className="text-[#ccc] space-y-2 text-sm">
                    <li>• Competitive landscape evolution</li>
                    <li>• Cryptocurrency volatility</li>
                    <li>• Economic downturn impact</li>
                    <li>• Regulatory uncertainty</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Next Steps */}
          <section className="text-center py-16 bg-[#1a1a1a] rounded-lg border border-[#333]">
            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Contact our investment team to discuss opportunities in ethical AI governance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:stephen@symbi.world">
                <button className="bg-[#e0e0e0] text-[#0f0f0f] px-8 py-3 rounded hover:bg-white transition-colors font-semibold">
                  Contact Investment Team
                </button>
              </a>
              <Link href="/market-analysis">
                <button className="border border-[#555] text-[#e0e0e0] px-8 py-3 rounded hover:bg-[#1a1a1a] transition-colors">
                  View Market Analysis
                </button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}