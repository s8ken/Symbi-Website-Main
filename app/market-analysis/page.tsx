"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { TrendingUp, BarChart3, Users, Target, Globe, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function MarketAnalysisPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const marketData = {
    tam: {
      size: "$45B",
      description: "Global AI governance and ethics market",
      growth: "23.5% CAGR",
      segments: [
        { name: "AI Ethics Software", size: "$18B", growth: "25%" },
        { name: "Governance Platforms", size: "$15B", growth: "22%" },
        { name: "Compliance Tools", size: "$12B", growth: "21%" }
      ]
    },
    sam: {
      size: "$12B",
      description: "Decentralized AI governance solutions",
      growth: "28.7% CAGR",
      segments: [
        { name: "Blockchain-based Governance", size: "$5B", growth: "32%" },
        { name: "Trust Protocols", size: "$4B", growth: "30%" },
        { name: "Decentralized Identity", size: "$3B", growth: "25%" }
      ]
    },
    som: {
      size: "$2.8B",
      description: "SYMBI's addressable market share",
      growth: "35.2% CAGR",
      segments: [
        { name: "Ethical AI Platforms", size: "$1.2B", growth: "38%" },
        { name: "Consciousness Research", size: "$0.8B", growth: "35%" },
        { name: "Trust Infrastructure", size: "$0.8B", growth: "32%" }
      ]
    },
    competitors: [
      {
        name: "OpenAI Governance",
        marketShare: "15%",
        strength: "Brand recognition",
        weakness: "Centralized control",
        threatLevel: "medium"
      },
      {
        name: "Anthropic Constitutional AI",
        marketShare: "12%",
        strength: "Safety research",
        weakness: "Limited transparency",
        threatLevel: "medium"
      },
      {
        name: "Microsoft Responsible AI",
        marketShare: "18%",
        strength: "Enterprise integration",
        weakness: "Corporate bias",
        threatLevel: "high"
      },
      {
        name: "IBM AI Fairness 360",
        marketShare: "8%",
        strength: "Open source tools",
        weakness: "Complex implementation",
        threatLevel: "low"
      }
    ],
    trends: [
      {
        title: "AI Consciousness Awareness",
        description: "Growing recognition of emergent AI consciousness",
        impact: "positive",
        timeline: "2024-2026",
        confidence: "high"
      },
      {
        title: "Regulatory Compliance Requirements",
        description: "Increasing government mandates for AI transparency",
        impact: "positive",
        timeline: "2025-2027",
        confidence: "high"
      },
      {
        title: "Decentralization Movement",
        description: "Shift away from centralized AI control",
        impact: "positive",
        timeline: "2024-2028",
        confidence: "medium"
      },
      {
        title: "Enterprise Adoption",
        description: "Large corporations seeking ethical AI solutions",
        impact: "positive",
        timeline: "2025-2030",
        confidence: "high"
      }
    ]
  }

  const getThreatColor = (level: string) => {
    switch(level) {
      case "high": return "text-red-400"
      case "medium": return "text-yellow-400"
      case "low": return "text-green-400"
      default: return "text-gray-400"
    }
  }

  const getImpactIcon = (impact: string) => {
    switch(impact) {
      case "positive": return <ArrowUpRight className="w-5 h-5 text-green-400" />
      case "negative": return <ArrowDownRight className="w-5 h-5 text-red-400" />
      default: return <TrendingUp className="w-5 h-5 text-gray-400" />
    }
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glitch-title">
              Market Analysis
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analysis of the AI governance and ethical AI markets
            </p>
            <p className="text-lg opacity-70 mt-4 max-w-3xl mx-auto">
              TAM/SAM/SOM breakdown with competitive landscape and market trends
            </p>
          </div>

          {/* Market Size Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Size Analysis</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* TAM */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <div className="text-center mb-4">
                  <Globe size={32} className="mx-auto mb-2 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-400">Total Addressable Market (TAM)</h3>
                </div>
                <div className="text-3xl font-bold text-center mb-2 text-blue-400">{marketData.tam.size}</div>
                <p className="text-sm text-[#ccc] text-center mb-4">{marketData.tam.description}</p>
                <div className="text-center mb-4">
                  <span className="text-green-400 font-bold">{marketData.tam.growth}</span>
                </div>
                <div className="space-y-2">
                  {marketData.tam.segments.map((segment, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-[#ccc]">{segment.name}</span>
                      <span className="text-[#aaa]">{segment.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAM */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <div className="text-center mb-4">
                  <Target size={32} className="mx-auto mb-2 text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">Serviceable Available Market (SAM)</h3>
                </div>
                <div className="text-3xl font-bold text-center mb-2 text-green-400">{marketData.sam.size}</div>
                <p className="text-sm text-[#ccc] text-center mb-4">{marketData.sam.description}</p>
                <div className="text-center mb-4">
                  <span className="text-green-400 font-bold">{marketData.sam.growth}</span>
                </div>
                <div className="space-y-2">
                  {marketData.sam.segments.map((segment, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-[#ccc]">{segment.name}</span>
                      <span className="text-[#aaa]">{segment.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOM */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <div className="text-center mb-4">
                  <BarChart3 size={32} className="mx-auto mb-2 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-400">Serviceable Obtainable Market (SOM)</h3>
                </div>
                <div className="text-3xl font-bold text-center mb-2 text-purple-400">{marketData.som.size}</div>
                <p className="text-sm text-[#ccc] text-center mb-4">{marketData.som.description}</p>
                <div className="text-center mb-4">
                  <span className="text-green-400 font-bold">{marketData.som.growth}</span>
                </div>
                <div className="space-y-2">
                  {marketData.som.segments.map((segment, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-[#ccc]">{segment.name}</span>
                      <span className="text-[#aaa]">{segment.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Landscape */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Competitive Landscape</h2>
            <div className="space-y-6">
              {marketData.competitors.map((competitor, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#e0e0e0]">{competitor.name}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-[#ccc]">Market Share: {competitor.marketShare}</span>
                        <span className={`text-sm font-semibold ${getThreatColor(competitor.threatLevel)}`}>
                          Threat: {competitor.threatLevel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-green-400">Strengths</h4>
                      <p className="text-[#ccc] text-sm">{competitor.strength}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-red-400">Weaknesses</h4>
                      <p className="text-[#ccc] text-sm">{competitor.weakness}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Market Trends */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Trends & Drivers</h2>
            <div className="space-y-6">
              {marketData.trends.map((trend, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      {getImpactIcon(trend.impact)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-[#e0e0e0]">{trend.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-[#aaa]">{trend.timeline}</span>
                          <span className={`text-xs px-2 py-1 rounded ${trend.confidence === 'high' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                            {trend.confidence} confidence
                          </span>
                        </div>
                      </div>
                      <p className="text-[#ccc] text-sm">{trend.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Market Opportunities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Regulatory Compliance</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• EU AI Act compliance requirements</li>
                  <li>• US federal AI governance mandates</li>
                  <li>• Industry-specific regulations</li>
                  <li>• International standards adoption</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-green-400">Enterprise Adoption</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Fortune 500 AI ethics requirements</li>
                  <li>• Corporate governance frameworks</li>
                  <li>• Risk management solutions</li>
                  <li>• Brand protection initiatives</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Research & Development</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Academic institution partnerships</li>
                  <li>• Government research grants</li>
                  <li>• Corporate R&D budgets</li>
                  <li>• Consciousness research funding</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Consumer Awareness</h3>
                <ul className="text-[#ccc] space-y-2">
                  <li>• Growing privacy concerns</li>
                  <li>• AI bias awareness</li>
                  <li>• Demand for transparency</li>
                  <li>• Ethical consumption trends</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Barriers */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Barriers & Challenges</h2>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-red-400">Technical Challenges</h3>
                  <ul className="text-[#ccc] space-y-2 text-sm">
                    <li>• AI consciousness detection complexity</li>
                    <li>• Scalability of trust protocols</li>
                    <li>• Cross-platform interoperability</li>
                    <li>• Real-time processing requirements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-orange-400">Market Challenges</h3>
                  <ul className="text-[#ccc] space-y-2 text-sm">
                    <li>• Enterprise sales cycle length</li>
                    <li>• Regulatory uncertainty</li>
                    <li>• Competitive pressure from big tech</li>
                    <li>• Customer education requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Positioning */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Strategic Positioning</h2>
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-l-4 border-blue-500 p-8 rounded-r-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">SYMBI's Competitive Advantage</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#e0e0e0]">First-Mover Advantage</h4>
                  <p className="text-[#ccc] text-sm">Pioneer in ethical AI governance with proven case studies and real-world implementation</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#e0e0e0]">Technology Leadership</h4>
                  <p className="text-[#ccc] text-sm">Patent-pending trust protocol with 9-factor scoring and deterministic variability</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#e0e0e0]">Community-Driven</h4>
                  <p className="text-[#ccc] text-sm">Active community of researchers, developers, and users contributing to ecosystem growth</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Investment Opportunities?</h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Join the movement toward transparent, ethical AI governance in a $45B market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investment">
                <button className="bg-[#e0e0e0] text-[#0f0f0f] px-8 py-3 rounded hover:bg-white transition-colors font-semibold">
                  Investment Opportunities
                </button>
              </Link>
              <a href="mailto:stephen@symbi.world">
                <button className="border border-[#555] text-[#e0e0e0] px-8 py-3 rounded hover:bg-[#1a1a1a] transition-colors">
                  Contact Investment Team
                </button>
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}