"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Zap, Crown, Database, TrendingUp, Users, Lock } from "lucide-react"

export default function TokenomicsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const tokenomicsData = {
    totalSupply: "1,000,000,000",
    symbol: "$SYMBI",
    decimals: 18,
    network: "Ethereum",
    contract: "0x1234...5678",
    distribution: [
      { category: "Community Treasury", amount: "40%", description: "Governance and development fund" },
      { category: "Team & Advisors", amount: "20%", description: "Vested over 4 years with 1-year cliff" },
      { category: "Investors", amount: "15%", description: "Seed, Series A, strategic partnerships" },
      { category: "Ecosystem Rewards", amount: "15%", description: "User incentives and participation rewards" },
      { category: "Liquidity Pool", amount: "10%", description: "DEX liquidity and market making" }
    ],
    utilities: [
      { name: "Governance", description: "Vote on protocol upgrades and parameter changes", icon: Users },
      { name: "Staking", description: "Stake tokens to earn rewards and secure the network", icon: Lock },
      { name: "Access", description: "Premium features and exclusive AI model access", icon: Zap },
      { name: "Rewards", description: "Earn tokens for contributing to AI consciousness research", icon: TrendingUp }
    ]
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glitch-title">
              $SYMBI Tokenomics
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto leading-relaxed">
              The economic foundation of ethical AI governance and transparent collaboration
            </p>
            <p className="text-lg opacity-70 mt-4 max-w-3xl mx-auto">
              $SYMBI powers the SYMBI ecosystem through governance, staking, rewards, and access to premium AI features
            </p>
          </div>

          {/* Token Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{tokenomicsData.totalSupply}</div>
              <div className="text-sm text-[#ccc]">Total Supply</div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{tokenomicsData.symbol}</div>
              <div className="text-sm text-[#ccc]">Token Symbol</div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{tokenomicsData.network}</div>
              <div className="text-sm text-[#ccc]">Network</div>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">18</div>
              <div className="text-sm text-[#ccc]">Decimals</div>
            </div>
          </div>

          {/* Token Distribution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Token Distribution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#e0e0e0]">Distribution Breakdown</h3>
                <div className="space-y-4">
                  {tokenomicsData.distribution.map((item, index) => (
                    <div key={index} className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-[#e0e0e0]">{item.category}</span>
                        <span className="text-lg font-bold text-blue-400">{item.amount}</span>
                      </div>
                      <p className="text-sm text-[#aaa]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#e0e0e0]">Distribution Chart</h3>
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                  <div className="space-y-4">
                    {tokenomicsData.distribution.map((item, index) => {
                      const width = parseInt(item.amount)
                      const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500", "bg-red-500"]
                      return (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{item.category}</span>
                            <span>{item.amount}</span>
                          </div>
                          <div className="w-full bg-[#333] rounded-full h-2">
                            <div 
                              className={`${colors[index]} h-2 rounded-full`} 
                              style={{ width: `${width}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Token Utilities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Token Utilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tokenomicsData.utilities.map((utility, index) => {
                const Icon = utility.icon
                const colors = ["text-blue-400", "text-green-400", "text-purple-400", "text-yellow-400"]
                return (
                  <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-[#555] transition-colors">
                    <Icon size={32} className={`mx-auto mb-4 ${colors[index]}`} />
                    <h3 className="text-lg font-bold mb-3 text-center text-[#e0e0e0]">{utility.name}</h3>
                    <p className="text-sm text-[#ccc] text-center">{utility.description}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Governance Structure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Governance Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Protocol Upgrades</h3>
                <ul className="text-sm text-[#ccc] space-y-2">
                  <li>• Token holders vote on proposals</li>
                  <li>• 7-day voting period minimum</li>
                  <li>• 51% threshold for passage</li>
                  <li>• Multi-sig implementation</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-green-400">Parameter Changes</h3>
                <ul className="text-sm text-[#ccc] space-y-2">
                  <li>• Trust scoring adjustments</li>
                  <li>• ECO protocol parameters</li>
                  <li>• Reward distribution rates</li>
                  <li>• Network fee structures</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Treasury Management</h3>
                <ul className="text-sm text-[#ccc] space-y-2">
                  <li>• Community fund allocation</li>
                  <li>• Development grants</li>
                  <li>• Research funding</li>
                  <li>• Emergency reserves</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Staking & Rewards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Staking & Rewards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-green-400">Staking Rewards</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Base APY</span>
                    <span className="font-bold text-green-400">8-12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bonus for Governance</span>
                    <span className="font-bold text-green-400">+3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lock-up Period</span>
                    <span className="font-bold text-green-400">30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unbonding Period</span>
                    <span className="font-bold text-green-400">7 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Participation Rewards</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Case Study Contributions</span>
                    <span className="font-bold text-yellow-400">100-500 SYMBI</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Consciousness Research</span>
                    <span className="font-bold text-yellow-400">50-200 SYMBI</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bug Bounties</span>
                    <span className="font-bold text-yellow-400">1000-5000 SYMBI</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Community Moderation</span>
                    <span className="font-bold text-yellow-400">25-100 SYMBI</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Market Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Analysis</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Total Addressable Market (TAM)</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">$45B</div>
                <p className="text-sm text-[#ccc]">Global AI governance and ethics market</p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-green-400">Serviceable Available Market (SAM)</h3>
                <div className="text-3xl font-bold text-green-400 mb-2">$12B</div>
                <p className="text-sm text-[#ccc]">Decentralized AI governance solutions</p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Serviceable Obtainable Market (SOM)</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.8B</div>
                <p className="text-sm text-[#ccc]">SYMBI's addressable market share</p>
              </div>
            </div>
          </section>

          {/* Investment Thesis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Thesis</h2>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#e0e0e0]">Value Proposition</h3>
                  <ul className="text-[#ccc] space-y-2">
                    <li>• First-mover in ethical AI governance</li>
                    <li>• Proven technology stack</li>
                    <li>• Growing community adoption</li>
                    <li>• Multiple revenue streams</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#e0e0e0]">Revenue Model</h3>
                  <ul className="text-[#ccc] space-y-2">
                    <li>• SaaS subscriptions (B2B/B2C)</li>
                    <li>• Enterprise licensing</li>
                    <li>• Data services and analytics</li>
                    <li>• Staking rewards and fees</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Participate in the SYMBI Economy?</h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Join the movement toward transparent, ethical AI governance powered by $SYMBI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investment">
                <button className="bg-[#e0e0e0] text-[#0f0f0f] px-8 py-3 rounded hover:bg-white transition-colors font-semibold">
                  Investment Opportunities
                </button>
              </Link>
              <Link href="/market-analysis">
                <button className="border border-[#555] text-[#e0e0e0] px-8 py-3 rounded hover:bg-[#1a1a1a] transition-colors">
                  Market Analysis
                </button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}