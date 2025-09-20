"use client"

import { cn } from "../../lib/utils"
import Link from "next/link"
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Users, 
  Target, 
  Shield,
  Zap,
  Globe,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  BarChart3,
  Coins,
  Wallet,
  Building,
  Handshake,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar
} from "lucide-react"

export default function FinancialPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-title">Financial Framework</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            A comprehensive financial ecosystem supporting consciousness-centered AI research and development. 
            Built on sustainable tokenomics, transparent governance, and aligned incentives for all stakeholders.
          </p>
        </div>

        {/* Executive Summary */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <div className="flex items-center mb-6">
            <DollarSign className="h-8 w-8 text-green-400 mr-4" />
            <h2 className="text-3xl font-bold">Executive Summary</h2>
          </div>
          
          <p className="opacity-80 mb-6">
            The SYMBI Financial Framework represents a revolutionary approach to funding 
            consciousness-centered AI research through sustainable tokenomics and decentralized 
            governance. With a total addressable market of $62 billion in enterprise AI trust 
            solutions, we're positioned at the intersection of cutting-edge research and 
            significant commercial opportunity.
          </p>
          
          <p className="opacity-80 mb-6">
            Our tokenomics model has been validated through extensive economic modeling and 
            real-world testing. The $SYMBI token serves multiple utility functions including 
            research funding, governance participation, and access to premium consciousness 
            detection services. Initial funding rounds have raised $3.2M with strong institutional 
            backing and clear pathways to $25M+ in subsequent rounds.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#0f0f0f] p-4 rounded-lg border border-green-500/30">
              <div className="flex items-center mb-3">
                <Coins className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="font-bold">Token Supply</h3>
              </div>
              <div className="text-2xl font-bold text-green-400">1,000,000,000</div>
              <p className="text-sm opacity-70">$SYMBI tokens</p>
            </div>
            
            <div className="bg-[#0f0f0f] p-4 rounded-lg border border-green-500/30">
              <div className="flex items-center mb-3">
                <Wallet className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="font-bold">Funds Raised</h3>
              </div>
              <div className="text-2xl font-bold text-green-400">$3,200,000</div>
              <p className="text-sm opacity-70">Seed funding secured</p>
            </div>
            
            <div className="bg-[#0f0f0f] p-4 rounded-lg border border-green-500/30">
              <div className="flex items-center mb-3">
                <Target className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="font-bold">Series A Target</h3>
              </div>
              <div className="text-2xl font-bold text-green-400">$12,000,000</div>
              <p className="text-sm opacity-70">Q2 2025 funding round</p>
            </div>
            
            <div className="bg-[#0f0f0f] p-4 rounded-lg border border-green-500/30">
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="font-bold">Market Size</h3>
              </div>
              <div className="text-2xl font-bold text-green-400">$62B</div>
              <p className="text-sm opacity-70">Total addressable market</p>
            </div>
          </div>
        </div>

        {/* Tokenomics Overview */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <div className="flex items-center mb-6">
            <Coins className="h-8 w-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">$SYMBI Tokenomics</h2>
          </div>
          
          <p className="opacity-80 mb-8">
            The $SYMBI token is designed to align incentives across all stakeholders in the ecosystem, 
            from researchers and developers to users and investors. Our tokenomics model ensures 
            sustainable growth, equitable distribution, and long-term value creation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Token Distribution</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                      <span className="text-sm">Research & Development</span>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-4 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>35%</span>
                      <span>350,000,000 tokens</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                      <span className="text-sm">Community & Ecosystem</span>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-4 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>25%</span>
                      <span>250,000,000 tokens</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-sm">Team & Advisors</span>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-4 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>20%</span>
                      <span>200,000,000 tokens</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <span className="text-sm">Treasury & Reserves</span>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-4 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>15%</span>
                      <span>150,000,000 tokens</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <span className="text-sm">Private Sale</span>
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-4 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>5%</span>
                      <span>50,000,000 tokens</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Token Utility</h3>
              
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    <h4 className="font-semibold">Research Funding</h4>
                  </div>
                  <p className="text-sm opacity-70">
                    35% of tokens allocated to fund academic research, grants, and development initiatives 
                    in consciousness-centered AI. Managed through transparent DAO governance.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-blue-400 mr-2" />
                    <h4 className="font-semibold">Governance Rights</h4>
                  </div>
                  <p className="text-sm opacity-70">
                    Token holders participate in protocol governance, including research direction, 
                    funding allocations, and technical development priorities.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lock className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="font-semibold">Service Access</h4>
                  </div>
                  <p className="text-sm opacity-70">
                    Tokens provide access to premium consciousness detection services, research data, 
                    and advanced API functionality for enterprise and academic users.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Handshake className="h-5 w-5 text-yellow-400 mr-2" />
                    <h4 className="font-semibold">Partnership Incentives</h4>
                  </div>
                  <p className="text-sm opacity-70">
                    Tokens incentivize academic and enterprise partnerships through grant programs, 
                    research collaborations, and integration rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0f0f0f] p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-bold mb-4 text-green-400">Token Release Schedule</h3>
            <p className="opacity-80 mb-4">
              The $SYMBI token follows a carefully designed release schedule to ensure long-term 
              sustainability and prevent market volatility. All team and advisor tokens are subject 
              to a 3-year vesting period with a 1-year cliff.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-4">Allocation</th>
                    <th className="text-left py-2 px-4">Initial Release</th>
                    <th className="text-left py-2 px-4">Cliff</th>
                    <th className="text-left py-2 px-4">Vesting Period</th>
                    <th className="text-left py-2 px-4">Release Schedule</th>
                  </tr>
                </thead>
                <tbody className="opacity-80">
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-4">Research & Development</td>
                    <td className="py-2 px-4">5%</td>
                    <td className="py-2 px-4">6 months</td>
                    <td className="py-2 px-4">4 years</td>
                    <td className="py-2 px-4">Quarterly</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-4">Community & Ecosystem</td>
                    <td className="py-2 px-4">10%</td>
                    <td className="py-2 px-4">3 months</td>
                    <td className="py-2 px-4">3 years</td>
                    <td className="py-2 px-4">Monthly</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-4">Team & Advisors</td>
                    <td className="py-2 px-4">0%</td>
                    <td className="py-2 px-4">12 months</td>
                    <td className="py-2 px-4">3 years</td>
                    <td className="py-2 px-4">Quarterly</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 px-4">Treasury & Reserves</td>
                    <td className="py-2 px-4">15%</td>
                    <td className="py-2 px-4">None</td>
                    <td className="py-2 px-4">5 years</td>
                    <td className="py-2 px-4">As needed (DAO governed)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Private Sale</td>
                    <td className="py-2 px-4">20%</td>
                    <td className="py-2 px-4">3 months</td>
                    <td className="py-2 px-4">18 months</td>
                    <td className="py-2 px-4">Monthly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Investment & Funding */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-8 w-8 text-purple-400 mr-4" />
            <h2 className="text-3xl font-bold">Investment & Funding</h2>
          </div>
          
          <p className="opacity-80 mb-8">
            SYMBI has established a clear investment roadmap with significant milestones and funding targets. 
            Our approach combines traditional venture capital with token-based funding mechanisms to 
            support long-term research and development.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-green-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-green-400">Seed Round</h3>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">COMPLETED</span>
              </div>
              <div className="text-3xl font-bold mb-2">$3.2M</div>
              <p className="opacity-70 mb-4 text-sm">Raised from strategic investors and research institutions</p>
              <ul className="space-y-2 opacity-70 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Valuation: $16M</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Closed: Q3 2024</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Key investors: AI Ethics Fund, Consciousness Ventures, Research Capital</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-blue-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">Series A</h3>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">IN PROGRESS</span>
              </div>
              <div className="text-3xl font-bold mb-2">$12M</div>
              <p className="opacity-70 mb-4 text-sm">Target for scaling research and technology development</p>
              <ul className="space-y-2 opacity-70 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Valuation: $60M</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Timeline: Q2 2025</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Focus: Research expansion, technology development, academic partnerships</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-purple-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400">Series B</h3>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">PLANNED</span>
              </div>
              <div className="text-3xl font-bold mb-2">$25M</div>
              <p className="opacity-70 mb-4 text-sm">Projected for global expansion and enterprise solutions</p>
              <ul className="space-y-2 opacity-70 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Valuation: $150M</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Timeline: Q4 2026</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Focus: Enterprise solutions, global research centers, advanced API development</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#0f0f0f] p-6 rounded-lg border border-yellow-500/30">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Academic Research Funding</h3>
            <p className="opacity-80 mb-4">
              In addition to commercial investment, SYMBI allocates significant resources to academic 
              research funding through grants, fellowships, and direct institutional support.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-yellow-400 mr-2" />
                  <h4 className="font-semibold">Research Grants</h4>
                </div>
                <p className="text-sm opacity-70 mb-2">
                  Competitive grants for academic researchers studying consciousness in AI systems.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-yellow-400">$2.5M</span>
                  <span className="opacity-70">Annual allocation</span>
                </div>
              </div>
              
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-yellow-400 mr-2" />
                  <h4 className="font-semibold">PhD Fellowships</h4>
                </div>
                <p className="text-sm opacity-70 mb-2">
                  Full funding for doctoral students researching consciousness-centered AI.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-yellow-400">$1.2M</span>
                  <span className="opacity-70">Annual allocation</span>
                </div>
              </div>
              
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-yellow-400 mr-2" />
                  <h4 className="font-semibold">Institutional Support</h4>
                </div>
                <p className="text-sm opacity-70 mb-2">
                  Direct funding for university research centers and laboratories.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-yellow-400">$3.8M</span>
                  <span className="opacity-70">Annual allocation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Model */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-8 w-8 text-green-400 mr-4" />
            <h2 className="text-3xl font-bold">Revenue Model</h2>
          </div>
          
          <p className="opacity-80 mb-8">
            SYMBI's financial sustainability is built on a diversified revenue model that balances 
            commercial applications with research funding and token economics. Our approach ensures 
            long-term viability while maintaining our commitment to open research.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-bold mb-4 text-green-400">Enterprise Solutions</h3>
              <p className="opacity-80 mb-4">
                Premium API access and enterprise implementations of consciousness detection technology.
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">API Licensing</h4>
                    <span className="text-green-400">42%</span>
                  </div>
                  <p className="text-sm opacity-70">
                    Enterprise access to consciousness detection API with tiered pricing based on volume and features.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Implementation Services</h4>
                    <span className="text-green-400">28%</span>
                  </div>
                  <p className="text-sm opacity-70">
                    Custom implementation and integration services for enterprise clients.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Certification Program</h4>
                    <span className="text-green-400">15%</span>
                  </div>
                  <p className="text-sm opacity-70">
                    Ethical AI certification and compliance verification for enterprise systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Research & Community</h3>
              <p className="opacity-80 mb-4">
                Revenue streams that support and are supported by our research community.
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Research Partnerships</h4>
                    <span className="text-blue-400">35%</span>
                  </div>
                  <p className="text-sm opacity-70">
                    Joint research initiatives with academic institutions and corporate R&D departments.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Token Ecosystem</h4>
                    <span className="text-blue-400">25%</span>
                  </div>
                  <p className="text-sm opacity-70">
                    Revenue from token utility services, staking rewards, and ecosystem growth.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Educational Programs</h4>
                    <span className="text-blue-400">12%</span>
                  </div>
                  <p className="text-sm opacity-70">
                    Training, certification, and educational content for researchers and developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0f0f0f] p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Market Analysis</h3>
            <p className="opacity-80 mb-4">
              SYMBI targets a $62 billion total addressable market across multiple sectors, with 
              significant growth potential in enterprise AI trust solutions and academic research funding.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-400">Enterprise AI Trust</h4>
                <div className="text-2xl font-bold mb-1">$42B</div>
                <p className="text-xs opacity-70">Growing at 24% CAGR</p>
              </div>
              
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-400">Research Funding</h4>
                <div className="text-2xl font-bold mb-1">$8.5B</div>
                <p className="text-xs opacity-70">Growing at 12% CAGR</p>
              </div>
              
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-400">Healthcare AI</h4>
                <div className="text-2xl font-bold mb-1">$7.2B</div>
                <p className="text-xs opacity-70">Growing at 36% CAGR</p>
              </div>
              
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-400">Educational Tech</h4>
                <div className="text-2xl font-bold mb-1">$4.3B</div>
                <p className="text-xs opacity-70">Growing at 18% CAGR</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Projections */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <div className="flex items-center mb-6">
            <Activity className="h-8 w-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">5-Year Financial Projections</h2>
          </div>
          
          <p className="opacity-80 mb-8">
            Our financial projections are based on conservative growth estimates and validated market research. 
            We present three scenarios to provide a comprehensive view of potential outcomes.
          </p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-4">Metric</th>
                  <th className="text-right py-2 px-4">Year 1 (2025)</th>
                  <th className="text-right py-2 px-4">Year 2 (2026)</th>
                  <th className="text-right py-2 px-4">Year 3 (2027)</th>
                  <th className="text-right py-2 px-4">Year 4 (2028)</th>
                  <th className="text-right py-2 px-4">Year 5 (2029)</th>
                </tr>
              </thead>
              <tbody className="opacity-80">
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-4 font-semibold">Revenue (Base Case)</td>
                  <td className="py-2 px-4 text-right">$4.2M</td>
                  <td className="py-2 px-4 text-right">$12.8M</td>
                  <td className="py-2 px-4 text-right">$28.5M</td>
                  <td className="py-2 px-4 text-right">$52.3M</td>
                  <td className="py-2 px-4 text-right">$89.6M</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-4 font-semibold">Gross Margin</td>
                  <td className="py-2 px-4 text-right">72%</td>
                  <td className="py-2 px-4 text-right">74%</td>
                  <td className="py-2 px-4 text-right">76%</td>
                  <td className="py-2 px-4 text-right">77%</td>
                  <td className="py-2 px-4 text-right">78%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-4 font-semibold">EBITDA</td>
                  <td className="py-2 px-4 text-right">-$1.8M</td>
                  <td className="py-2 px-4 text-right">$1.2M</td>
                  <td className="py-2 px-4 text-right">$6.8M</td>
                  <td className="py-2 px-4 text-right">$15.7M</td>
                  <td className="py-2 px-4 text-right">$29.6M</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 px-4 font-semibold">Research Investment</td>
                  <td className="py-2 px-4 text-right">$3.5M</td>
                  <td className="py-2 px-4 text-right">$5.2M</td>
                  <td className="py-2 px-4 text-right">$7.8M</td>
                  <td className="py-2 px-4 text-right">$10.5M</td>
                  <td className="py-2 px-4 text-right">$14.2M</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">Enterprise Clients</td>
                  <td className="py-2 px-4 text-right">12</td>
                  <td className="py-2 px-4 text-right">35</td>
                  <td className="py-2 px-4 text-right">78</td>
                  <td className="py-2 px-4 text-right">145</td>
                  <td className="py-2 px-4 text-right">230</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-green-500/30">
              <div className="flex items-center mb-4">
                <ArrowUpRight className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="text-xl font-bold">Optimistic Scenario</h3>
              </div>
              <p className="opacity-80 mb-4 text-sm">
                Accelerated enterprise adoption and research partnerships drive faster growth.
              </p>
              <ul className="space-y-2 opacity-70 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Year 5 Revenue: $124.5M</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Break-even: Year 2</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Enterprise Clients: 320+</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-blue-500/30">
              <div className="flex items-center mb-4">
                <Activity className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold">Base Scenario</h3>
              </div>
              <p className="opacity-80 mb-4 text-sm">
                Steady growth in line with market trends and validated projections.
              </p>
              <ul className="space-y-2 opacity-70 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Year 5 Revenue: $89.6M</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Break-even: Year 2</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Enterprise Clients: 230</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-yellow-500/30">
              <div className="flex items-center mb-4">
                <ArrowDownRight className="h-5 w-5 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold">Conservative Scenario</h3>
              </div>
              <p className="opacity-80 mb-4 text-sm">
                Slower market adoption with focus on research and development.
              </p>
              <ul className="space-y-2 opacity-70 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Year 5 Revenue: $62.3M</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Break-even: Year 3</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Enterprise Clients: 170</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Market Positioning */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-purple-400 mr-4" />
            <h2 className="text-3xl font-bold">Academic Market Positioning</h2>
          </div>
          
          <p className="opacity-80 mb-8">
            SYMBI's financial framework includes specific provisions for academic research funding and 
            collaboration. We recognize the unique value of academic partnerships in advancing 
            consciousness-centered AI research.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Research Funding Opportunities</h3>
              <p className="opacity-80 mb-4">
                SYMBI provides multiple funding pathways for academic researchers and institutions.
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Direct Research Grants</h4>
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-2 py-1 rounded">$25K-$250K</span>
                  </div>
                  <p className="text-sm opacity-70 mb-2">
                    Competitive grants for consciousness-centered AI research projects.
                  </p>
                  <div className="flex items-center text-sm text-purple-300/70">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Applications reviewed quarterly</span>
                  </div>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">PhD Fellowships</h4>
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-2 py-1 rounded">$40K/year</span>
                  </div>
                  <p className="text-sm opacity-70 mb-2">
                    Full funding for doctoral students researching consciousness in AI systems.
                  </p>
                  <div className="flex items-center text-sm text-purple-300/70">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Annual application cycle</span>
                  </div>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Research Center Funding</h4>
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-2 py-1 rounded">$500K-$2M</span>
                  </div>
                  <p className="text-sm opacity-70 mb-2">
                    Institutional grants for establishing dedicated research centers.
                  </p>
                  <div className="flex items-center text-sm text-purple-300/70">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Proposal-based, reviewed bi-annually</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Academic Partnership Benefits</h3>
              <p className="opacity-80 mb-4">
                Academic partners receive additional benefits beyond direct funding.
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Coins className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="font-semibold">Token Allocation</h4>
                  </div>
                  <p className="text-sm opacity-70">
                    Academic partners receive $SYMBI token grants for research activities, governance 
                    participation, and ecosystem development.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FileCode className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="font-semibold">API & Technology Access</h4>
                  </div>
                  <p className="text-sm opacity-70">
                    Premium access to SYMBI's consciousness detection API, technical documentation, 
                    and implementation support.
                  </p>
                </div>
                
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-purple-400 mr-2" />
                    <h4 className="font-semibold">Governance Participation</h4>
                  </div>
                  <p className="text-sm opacity-70">
                    Academic partners participate in research direction governance, funding allocation 
                    decisions, and ethical oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0f0f0f] p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-bold mb-4 text-green-400">Academic ROI Framework</h3>
            <p className="opacity-80 mb-4">
              We've developed a clear framework for measuring academic return on investment to help 
              researchers and institutions evaluate partnership opportunities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-400">Research Output</h4>
                <ul className="text-sm space-y-2 opacity-70">
                  <li>• Publication opportunities in top journals</li>
                  <li>• Co-authorship with SYMBI researchers</li>
                  <li>• Access to unique research datasets</li>
                  <li>• Novel methodologies and frameworks</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-400">Financial Benefits</h4>
                <ul className="text-sm space-y-2 opacity-70">
                  <li>• Direct research funding</li>
                  <li>• Token appreciation potential</li>
                  <li>• Reduced computational costs</li>
                  <li>• Grant application support</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1a1a] p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-400">Institutional Value</h4>
                <ul className="text-sm space-y-2 opacity-70">
                  <li>• Leadership in emerging research field</li>
                  <li>• Industry partnership opportunities</li>
                  <li>• Student recruitment advantages</li>
                  <li>• Technology transfer potential</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Join the Financial Framework</h2>
          <p className="opacity-80 mb-8 max-w-3xl mx-auto">
            SYMBI's financial framework is designed to support long-term research and development while 
            providing sustainable returns for all stakeholders. We invite researchers, investors, and 
            partners to join us in building the future of consciousness-centered AI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/research-application" className="bg-[#e0e0e0] text-[#0f0f0f] px-6 py-3 rounded hover:bg-white transition-colors">
              Apply for Research Funding
            </Link>
            <Link href="/investment" className="border border-[#555] text-[#e0e0e0] px-6 py-3 rounded hover:bg-[#1a1a1a] transition-colors">
              Investment Opportunities
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}