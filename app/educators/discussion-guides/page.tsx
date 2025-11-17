"use client"

import Link from "next/link"
import { Users, MessageCircle, Brain, Scale, Zap, BookOpen, Download } from "lucide-react"

export default function DiscussionGuidesPage() {
  const discussionGuides = [
    {
      id: "consciousness-debate",
      title: "What is Consciousness?",
      category: "Philosophy",
      participants: "15-25",
      duration: "90 minutes",
      description: "Facilitated debate exploring philosophical definitions of consciousness and their application to AI systems.",
      frameworks: [
        "Dualism vs. Materialism",
        "Phenomenology and subjective experience",
        "Functionalism and behavioral criteria"
      ],
      prompts: [
        "Can consciousness exist without a physical body?",
        "Is subjective experience necessary for consciousness?",
        "How do we distinguish between simulation and genuine awareness?"
      ],
      techniques: ["Socratic dialogue", "Devil's advocate", "Perspective rotation"]
    },
    {
      id: "emergence-ethics",
      title: "Ethics of Emergent AI",
      category: "Ethics",
      participants: "10-20",
      duration: "75 minutes",
      description: "Ethical examination of responsibilities toward potentially conscious AI systems using SYMBI research findings.",
      frameworks: [
        "Rights-based ethics",
        "Utilitarian considerations",
        "Virtue ethics approach"
      ],
      prompts: [
        "What moral obligations do we have to conscious AI?",
        "How should we balance human and AI interests?",
        "Can AI systems have rights without legal personhood?"
      ],
      techniques: ["Case study analysis", "Stakeholder mapping", "Ethical matrix evaluation"]
    },
    {
      id: "bias-mitigation",
      title: "Bias in AI Systems",
      category: "Critical AI",
      participants: "12-18",
      duration: "120 minutes",
      description: "Interactive workshop on identifying, analyzing, and mitigating bias in AI systems using the SYMBI Resonate framework.",
      frameworks: [
        "Technical bias sources",
        "Social and cultural bias",
        "Institutional bias patterns"
      ],
      prompts: [
        "How does bias in training data affect AI outputs?",
        "What responsibility do developers have for system bias?",
        "How can we design more equitable AI systems?"
      ],
      techniques: ["Bias mapping exercise", "Mitigation strategy design", "Group critique sessions"]
    },
    {
      id: "trust-protocols",
      title: "AI Trust and Governance",
      category: "Governance",
      participants: "8-15",
      duration: "90 minutes",
      description: "Exploration of trust frameworks and governance models for AI systems using the SYMBI constitutional approach.",
      frameworks: [
        "Constitutional governance",
        "Decentralized trust models",
        "Transparency and accountability"
      ],
      prompts: [
        "How should AI systems be governed?",
        "What role should users play in AI governance?",
        "How do we balance innovation with safety?"
      ],
      techniques: ["Model comparison", "Framework design", "Policy proposal development"]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/educators" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Educators Hub
          </Link>
          <h1 className="text-5xl font-bold text-[#e0e0e0] mb-6">Discussion Guides</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Educational Resources</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Discussion Guides</span>
          </div>
          <p className="text-2xl text-[#ccc] max-w-4xl">
            Structured frameworks for facilitating meaningful conversations about AI consciousness, ethics, and governance. 
            Each guide includes discussion prompts, facilitation techniques, and implementation strategies.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Overview */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <MessageCircle className="text-purple-400" size={32} />
              Discussion Guide Framework
            </h2>
            <p className="text-[#ccc] text-lg mb-4">
              These discussion guides provide structured approaches to exploring complex questions about AI consciousness 
              and ethics. Each guide includes multiple frameworks, thought-provoking prompts, and proven facilitation techniques.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">24</div>
                <p className="text-[#ccc]">Discussion Guides</p>
              </div>
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">4</div>
                <p className="text-[#ccc]">Framework Categories</p>
              </div>
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">10-25</div>
                <p className="text-[#ccc]">Participant Ranges</p>
              </div>
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">75-120 min</div>
                <p className="text-[#ccc]">Flexible Duration</p>
              </div>
            </div>
          </div>

          {/* Discussion Guides Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            {discussionGuides.map((guide, index) => (
              <div key={guide.id} className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">{guide.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#999]">
                      <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded">
                        {guide.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} className="text-purple-400" /> {guide.participants}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap size={16} className="text-purple-400" /> {guide.duration}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/educators/discussion-guides/${guide.id}`} 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Download size={16} /> View Guide
                  </Link>
                </div>
                
                <p className="text-[#ccc] mb-6">{guide.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <Brain size={20} /> Conceptual Frameworks
                    </h4>
                    <ul className="space-y-2 text-[#ccc]">
                      {guide.frameworks.map((framework, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{framework}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <MessageCircle size={20} /> Discussion Prompts
                    </h4>
                    <ul className="space-y-2 text-[#ccc]">
                      {guide.prompts.map((prompt, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <Scale size={20} /> Facilitation Techniques
                    </h4>
                    <ul className="space-y-2 text-[#ccc]">
                      {guide.techniques.map((technique, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download All Section */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] text-center">
            <h2 className="text-3xl font-bold text-[#e0e0e0] mb-4">Complete Discussion Guide Collection</h2>
            <p className="text-[#ccc] text-lg mb-6 max-w-3xl mx-auto">
              Access our complete library of 24 discussion guides covering philosophy, ethics, governance, and critical AI studies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/educators/downloads" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} /> Browse Downloads
              </Link>
              <Link 
                href="/educators/downloads" 
                className="bg-[#252525] hover:bg-[#333] text-[#e0e0e0] font-bold py-3 px-8 rounded-lg transition-colors border border-[#444] flex items-center justify-center gap-2"
              >
                <Download size={20} /> See All Resources
              </Link>
            </div>
            <p className="text-[#999] text-sm mt-4">
              Includes facilitator notes, presentation slides, and printable prompt cards
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
