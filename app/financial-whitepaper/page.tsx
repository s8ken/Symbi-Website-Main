"use client"

import { cn } from "../../lib/utils"
import Link from "next/link"
import { DollarSign, TrendingUp, BarChart3, Landmark, Shield } from "lucide-react"

export default function FinancialWhitepaperPage() {
  return (
    <main className="min-h-screen bg-white text-black font-mono">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SYMBI Financial Framework</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive analysis of the tokenomics, investment structure, and market positioning of the SYMBI protocol
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-gray-800 mb-6">
            The SYMBI Financial Framework establishes a sustainable economic model for ethical AI development and deployment. 
            This whitepaper outlines the tokenomics structure, investment opportunities, and market analysis that underpin 
            the SYMBI ecosystem, ensuring long-term viability while maintaining alignment with our core values of transparency, 
            sovereignty, and mutual trust.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <DollarSign className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Tokenomics</h3>
              <p className="text-gray-700">
                Balanced token distribution model with governance, utility, and staking mechanisms
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Investment Structure</h3>
              <p className="text-gray-700">
                Tiered investment opportunities with aligned incentives for long-term growth
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <BarChart3 className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-700">
                Comprehensive assessment of market positioning and growth trajectory
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Introduction to the SYMBI Financial Framework</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Core Economic Principles</li>
                  <li>Sustainability Model</li>
                  <li>Value Proposition</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Tokenomics Structure</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Token Distribution</li>
                  <li>Utility Functions</li>
                  <li>Governance Mechanisms</li>
                  <li>Staking and Rewards</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Investment Framework</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Investment Tiers</li>
                  <li>Allocation Strategy</li>
                  <li>Return Projections</li>
                  <li>Risk Management</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Market Analysis</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Competitive Landscape</li>
                  <li>Growth Trajectory</li>
                  <li>Market Penetration Strategy</li>
                  <li>Adoption Metrics</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Economic Security Model</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Trust-Based Economics</li>
                  <li>Fraud Prevention</li>
                  <li>Resilience Mechanisms</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Governance and Decision Making</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Stakeholder Representation</li>
                  <li>Proposal Process</li>
                  <li>Voting Mechanisms</li>
                </ul>
              </li>
              
              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Future Development Roadmap</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Expansion Plans</li>
                  <li>Integration Opportunities</li>
                  <li>Long-term Sustainability</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 mb-12">
          <div className="flex items-start mb-6">
            <Landmark className="h-8 w-8 text-blue-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Financial Stability Principles</h2>
              <p className="text-gray-800">
                The SYMBI protocol is built on a foundation of financial stability that ensures the long-term viability of the ecosystem while maintaining alignment with our core values.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Balanced Token Distribution</h3>
              <p className="text-gray-700 mb-4">
                SYMBI tokens are distributed across stakeholders in a way that prevents concentration of power while incentivizing long-term participation.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Community allocation: 40%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Development fund: 25%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Ecosystem growth: 20%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Early investors: 15%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-green-700">Sustainable Revenue Model</h3>
              <p className="text-gray-700 mb-4">
                The protocol generates revenue through multiple streams while maintaining ethical alignment and user value.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Trust protocol licensing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Enterprise integration fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Staking rewards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Governance participation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <div className="flex items-start mb-6">
            <Shield className="h-8 w-8 text-purple-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Economic Security Model</h2>
              <p className="text-gray-800">
                SYMBI's economic security model ensures that financial incentives align with ethical behavior and long-term ecosystem health.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-800">
              The SYMBI protocol implements several mechanisms to ensure economic security:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Trust-Based Economics</h3>
                <p className="text-gray-700">
                  Economic rewards are tied to trust scores and ethical behavior within the ecosystem, creating a virtuous cycle where financial incentives align with protocol values.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Fraud Prevention</h3>
                <p className="text-gray-700">
                  Multi-layered security measures protect against economic attacks, including stake slashing for malicious behavior and progressive trust requirements for larger transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 italic mb-8">
            This whitepaper is a living document that will evolve as the SYMBI protocol develops.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tokenomics" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Tokenomics
            </Link>
            <Link href="/investment" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Investment Opportunities
            </Link>
            <Link href="/market-analysis" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Market Analysis
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}