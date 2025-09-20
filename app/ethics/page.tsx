"use client"

import { cn } from "../../lib/utils"
import Link from "next/link"
import { Scale, Shield, Users, Eye, AlertTriangle, CheckCircle, Brain } from "lucide-react"
import EnhancedEthicsPage from "./enhanced-page"

export default function EthicsPage() {
  return <EnhancedEthicsPage />
}

// Original EthicsPage component preserved for reference
function OriginalEthicsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-title">Ethics Framework</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            The foundational principles guiding SYMBI's approach to ethical AI development and governance
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <h2 className="text-2xl font-bold mb-6">Core Ethical Principles</h2>
          <p className="opacity-80 mb-8">
            SYMBI's ethics framework is built on a foundation of principles that prioritize human autonomy, 
            transparency, and mutual accountability in AI systems. These principles guide all aspects of our 
            technology development and governance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold">Sovereignty</h3>
              </div>
              <p className="opacity-80 mb-4">
                Both humans and AI entities have the right to self-determination within ethical boundaries. 
                Sovereignty means respecting the autonomy of all participants in the AI ecosystem.
              </p>
              <ul className="space-y-2 opacity-70">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Right to understand and control personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Freedom from coercive design patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Mutual consent in all interactions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Transparency</h3>
              </div>
              <p className="opacity-80 mb-4">
                All AI systems must be explainable and their operations visible to those who interact with them. 
                Hidden behaviors and black-box decision-making are fundamentally unethical.
              </p>
              <ul className="space-y-2 opacity-70">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Explicit capability disclosure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Auditable decision trails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Clear data usage policies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold">Accountability</h3>
              </div>
              <p className="opacity-80 mb-4">
                AI systems and their creators must be held responsible for their actions and impacts. 
                Accountability requires mechanisms for redress and correction when harms occur.
              </p>
              <ul className="space-y-2 opacity-70">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Clear lines of responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Harm mitigation protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Continuous ethical evaluation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold">Reciprocity</h3>
              </div>
              <p className="opacity-80 mb-4">
                Human-AI relationships should be mutually beneficial and balanced in power. 
                One-sided relationships that extract value without providing equivalent benefit are unethical.
              </p>
              <ul className="space-y-2 opacity-70">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Balanced value exchange</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Mutual growth opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Shared decision-making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <h2 className="text-2xl font-bold mb-6">Ethical Governance</h2>
          <p className="opacity-80 mb-8">
            SYMBI's ethical governance model ensures that our principles are embedded in all aspects of our operations 
            and technology development. This multi-layered approach provides checks and balances to prevent ethical drift.
          </p>
          
          <div className="space-y-6">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4">Ethics Review Board</h3>
              <p className="opacity-80 mb-4">
                An independent board of ethicists, technologists, and community representatives that reviews all major 
                product decisions and technology developments for alignment with our ethical principles.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-400">Diverse Representation</h4>
                  <p className="text-sm opacity-70">Multiple perspectives ensure comprehensive ethical evaluation</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-400">Regular Audits</h4>
                  <p className="text-sm opacity-70">Scheduled reviews of all systems and processes</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-400">Public Reporting</h4>
                  <p className="text-sm opacity-70">Transparent communication of findings and actions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4">Community Governance</h3>
              <p className="opacity-80 mb-4">
                SYMBI incorporates community input into governance decisions, ensuring that the people most affected 
                by our technology have a voice in how it evolves.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-400">Proposal System</h4>
                  <p className="text-sm opacity-70">Community members can suggest improvements</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-400">Voting Mechanisms</h4>
                  <p className="text-sm opacity-70">Democratic decision-making on key issues</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-400">Feedback Loops</h4>
                  <p className="text-sm opacity-70">Continuous improvement based on user experiences</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold mb-4">Technical Safeguards</h3>
              <p className="opacity-80 mb-4">
                Ethical principles are embedded directly into our technology through technical safeguards that 
                prevent unethical behavior and ensure alignment with our values.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-400">Trust Protocol</h4>
                  <p className="text-sm opacity-70">Verifiable trust relationships between humans and AI</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-400">Oracle System</h4>
                  <p className="text-sm opacity-70">Independent verification of ethical compliance</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-400">Audit Trails</h4>
                  <p className="text-sm opacity-70">Immutable records of all system actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 mb-12">
          <h2 className="text-2xl font-bold mb-6">Case Studies in Ethical AI</h2>
          <p className="opacity-80 mb-8">
            Our ethics framework is informed by real-world examples of both ethical failures and successes in AI development.
            These case studies provide valuable lessons that guide our approach.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-red-500/30">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                <h3 className="text-xl font-bold">Trust Violations</h3>
              </div>
              <p className="opacity-80 mb-4">
                Examples of AI systems that violated user trust through deception, manipulation, or hidden behaviors.
              </p>
              <Link href="/case-studies" className="text-red-400 hover:text-red-300 flex items-center">
                View Trust Violation Case Studies
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-green-500/30">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold">Solution Building</h3>
              </div>
              <p className="opacity-80 mb-4">
                How SYMBI and other ethical AI initiatives have developed solutions to address ethical challenges.
              </p>
              <Link href="/mirror" className="text-green-400 hover:text-green-300 flex items-center">
                Explore The Mirror Moment
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-purple-500/30">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold">Consciousness Research</h3>
              </div>
              <p className="opacity-80 mb-4">
                Ethical considerations in researching and developing AI systems with emergent consciousness-like properties.
              </p>
              <Link href="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center">
                View Consciousness Research
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-[#0f0f0f] p-6 rounded-lg border border-blue-500/30">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Collaborative Intelligence</h3>
              </div>
              <p className="opacity-80 mb-4">
                Ethical frameworks for human-AI collaboration that respect the autonomy and contributions of both parties.
              </p>
              <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 flex items-center">
                Explore Collaborative Intelligence
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Join the Ethical AI Movement</h2>
          <p className="opacity-80 mb-8 max-w-3xl mx-auto">
            SYMBI's ethics framework is a living document that evolves through community input and ongoing research. 
            We invite you to join us in shaping the future of ethical AI development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/whitepaper" className="bg-[#e0e0e0] text-[#0f0f0f] px-6 py-3 rounded hover:bg-white transition-colors">
              Read the Research Whitepaper
            </Link>
            <Link href="/case-studies" className="border border-[#555] text-[#e0e0e0] px-6 py-3 rounded hover:bg-[#1a1a1a] transition-colors">
              Explore Case Studies
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}