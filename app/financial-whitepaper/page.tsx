"use client"

import { cn } from "../../lib/utils"
import Link from "next/link"
import { DollarSign, TrendingUp, BarChart3, Landmark, Shield, AlertCircle } from "lucide-react"

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

        <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500 mb-12">
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-amber-900">Proposed Draft Notice</h2>
              <p className="text-amber-800 font-semibold">
                This framework is proposed for community review and regulatory validation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-gray-800 mb-6">
            The SYMBI Financial Framework establishes a sustainable model for ethical AI development through
            <strong> governance-only participation</strong> and <strong>enterprise revenue streams</strong>—with
            zero financial speculation. This document outlines how SYMBI sustains development through commercial
            services while maintaining governance as a non-financial, merit-based system aligned with our core
            principle: <strong>Sovereignty without speculation</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">DAO Governance</h3>
              <p className="text-gray-700">
                Non-financial, non-transferable governance tokens earned through verified contributions only
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Landmark className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Research & Grants</h3>
              <p className="text-gray-700">
                Non-speculative funding through institutional partnerships, ARC Discovery, and public research grants
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <BarChart3 className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Revenue</h3>
              <p className="text-gray-700">
                Sustainable revenue through Sonate Platform SaaS, trust protocol licensing, and professional services
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
                <span className="font-semibold">DAO Governance Framework (Proposed)</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Governance-Only Token Structure</li>
                  <li>Non-Financial Participation Model</li>
                  <li>Constitution Nodes</li>
                  <li>Ethical Evaluation System</li>
                </ul>
              </li>

              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Research & Grants Fund</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Non-Speculative Funding Model</li>
                  <li>Institutional Partnerships</li>
                  <li>Grant Allocation Process</li>
                  <li>Transparency Requirements</li>
                </ul>
              </li>

              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Market Analysis</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>AI Trust Infrastructure Market</li>
                  <li>Enterprise Adoption Strategy</li>
                  <li>Competitive Positioning</li>
                  <li>Growth Metrics</li>
                </ul>
              </li>

              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Trust-Based Economic Security</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>TrustScore Algorithms</li>
                  <li>Fraud Prevention</li>
                  <li>Resilience Mechanisms</li>
                </ul>
              </li>

              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Governance Decision Making</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Quadratic Voting Model</li>
                  <li>Proposal Process</li>
                  <li>Ethical Auditing</li>
                  <li>Constitution Node Arbitration</li>
                </ul>
              </li>

              <li className="p-2 hover:bg-gray-50 rounded">
                <span className="font-semibold">Implementation Roadmap</span>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600 text-sm">
                  <li>Pilot Phase (Q4 2025)</li>
                  <li>Public Transparency (Q1 2026)</li>
                  <li>Mainnet Deployment (Q2 2026+)</li>
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
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Non-Financial Governance Model</h3>
              <p className="text-gray-700 mb-4">
                SYMBI uses governance-only tokens (SGT) that are non-transferable and earned through verified contributions—never purchased or sold.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No token sale</strong> — Cannot be purchased</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>No investor allocations</strong> — No financial distributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span><strong>Non-transferable</strong> — Cannot be traded</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Earned via contributions</strong> — Verified credentials only</span>
                </li>
              </ul>
              <p className="text-xs text-blue-600 mt-4">
                <a href="/tokenomics" className="hover:underline">→ View DAO Governance Framework</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-green-700">Enterprise Revenue Streams</h3>
              <p className="text-gray-700 mb-4">
                Revenue is generated through enterprise services via Yseeku—completely separate from governance.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Sonate Platform SaaS subscriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Enterprise trust protocol licensing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Research grants (ARC Discovery, Horizon Europe)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Professional services & integration support</span>
                </li>
              </ul>
              <p className="text-xs text-blue-600 mt-4">
                <a href="https://yseeku.com" target="_blank" rel="noopener noreferrer" className="hover:underline">→ Visit Yseeku.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
          <div className="flex items-start mb-6">
            <Shield className="h-8 w-8 text-purple-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Trust-Based Security Model</h2>
              <p className="text-gray-800">
                SYMBI's security model ensures that governance participation aligns with ethical behavior through verifiable credentials and reputation—not financial incentives.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-800">
              The SYMBI protocol implements several mechanisms to ensure trust and security:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Reputation-Based Governance</h3>
                <p className="text-gray-700">
                  Governance rights are tied to TrustScores and verified contributions within the ecosystem, creating alignment between participation quality and decision-making influence—without financial rewards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Fraud Prevention</h3>
                <p className="text-gray-700">
                  Multi-layered security measures protect governance integrity, including credential revocation for malicious behavior and progressive trust requirements for proposal authority.
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
              DAO Governance Framework
            </Link>
            <Link href="/trust-protocol" className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Trust Protocol
            </Link>
            <Link href="/symbi-symphony" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              SYMBI Symphony
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}