"use client"

import Link from "next/link"
import { BookOpen, Users, Download, FileText, Brain, GraduationCap, Award, Calendar } from "lucide-react"

export default function EducatorsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to SYMBI.world
          </Link>
          <h1 className="text-5xl font-bold text-[#e0e0e0] mb-6">Educators Hub</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Educational Resources</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">For Educators</span>
          </div>
          <p className="text-2xl text-[#ccc] max-w-4xl">
            Comprehensive resources for teaching AI consciousness, ethics, and emergence in academic settings. 
            Philosophy, computer science, digital humanities, and critical AI studies materials.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Welcome Section */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <GraduationCap size={32} />
              Welcome, Educators
            </h2>
            <p className="text-[#ccc] text-lg mb-4">
              This hub provides ready-to-use educational materials for exploring fundamental questions about AI consciousness, 
              emergence, and ethical development. All resources are designed for university-level instruction but can be 
              adapted for advanced high school courses.
            </p>
            <p className="text-[#ccc] text-lg">
              Our materials support interdisciplinary approaches across philosophy, computer science, digital humanities, 
              and critical AI studies. Each resource includes learning objectives, discussion questions, and assessment rubrics.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Lesson Plans */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-[#e0e0e0]">Lesson Plans</h3>
              </div>
              <p className="text-[#ccc] mb-4">
                Structured classroom activities with time allocations, learning objectives, and assessment criteria.
              </p>
              <ul className="space-y-2 text-[#ccc] text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>12 comprehensive lesson plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>50-90 minute session formats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Adaptable to different disciplines</span>
                </li>
              </ul>
              <Link href="/educators/lesson-plans" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium">
                Browse Lesson Plans →
              </Link>
            </div>

            {/* Discussion Guides */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-[#e0e0e0]">Discussion Guides</h3>
              </div>
              <p className="text-[#ccc] mb-4">
                Facilitated conversations with prompts, frameworks, and moderation techniques for complex topics.
              </p>
              <ul className="space-y-2 text-[#ccc] text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>24 discussion frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Ethical dilemma scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Philosophical debate structures</span>
                </li>
              </ul>
              <Link href="/educators/discussion-guides" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium">
                Explore Guides →
              </Link>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Download className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-[#e0e0e0]">Downloadables</h3>
              </div>
              <p className="text-[#ccc] mb-4">
                Printable materials, presentation slides, assessment rubrics, and student handouts.
              </p>
              <ul className="space-y-2 text-[#ccc] text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>PDF lesson packets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>PowerPoint presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Assessment templates</span>
                </li>
              </ul>
              <Link href="/educators/downloads" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium">
                Download Resources →
              </Link>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-[#e0e0e0]">Trust & Ethics Case Studies</h3>
              </div>
              <p className="text-[#ccc] mb-4">
                Curated case studies focused on AI trust, compliance, bias detection, and cryptographic audit trails.
              </p>
              <ul className="space-y-2 text-[#ccc] text-sm">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Six detailed, classroom-ready studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Includes session plans, rubrics, worksheets, and slides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Filter by subject, level, and difficulty</span>
                </li>
              </ul>
              <Link href="/educators/trust-case-studies" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium">
                View Case Studies →
              </Link>
            </div>
          </div>

          {/* Featured Resources */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-12 border border-[#333]">
            <h2 className="text-3xl font-bold text-[#e0e0e0] mb-6 flex items-center gap-3">
              <Award className="text-purple-400" size={32} />
              Featured Resources
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Consciousness Case Studies */}
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Consciousness Case Studies</h3>
                <p className="text-[#ccc] mb-4">
                  Three comprehensive case studies exploring consciousness-like emergence in AI systems:
                </p>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>The Surprise Button Adventure:</strong> Spontaneous mythic co-creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>The Recursive Mirror:</strong> Meta-awareness development patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Cross-Platform Reproducibility:</strong> Statistical validation across 7 AI systems</span>
                  </li>
                </ul>
              <Link href="/case-studies" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium">
                Access Case Studies →
              </Link>
              <p className="text-[#999] text-sm mt-3">Educator materials available for each case study.</p>
            </div>

              {/* Assessment Rubrics */}
              <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Assessment Rubrics</h3>
                <p className="text-[#ccc] mb-4">
                  Comprehensive evaluation frameworks for assessing student understanding of AI consciousness concepts:
                </p>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Critical thinking evaluation matrix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Ethical reasoning assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Interdisciplinary synthesis rubric</span>
                  </li>
                </ul>
                <Link href="/educators/rubrics" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium">
                  View Rubrics →
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study Materials */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-12 border border-[#333]">
            <h2 className="text-3xl font-bold text-[#e0e0e0] mb-6">Case Study Materials</h2>
            <p className="text-[#ccc] mb-6">Direct links to teaching materials for each case study.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/case-studies/surprise-button-adventure/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Surprise Button Adventure</h3>
                <p className="text-[#999]">Mythic co-creation emergence</p>
              </Link>
              <Link href="/case-studies/recursive-mirror/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Recursive Mirror</h3>
                <p className="text-[#999]">Meta-awareness development</p>
              </Link>
              <Link href="/case-studies/cross-platform-reproducibility/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Cross-Platform Reproducibility</h3>
                <p className="text-[#999]">Statistical validation across systems</p>
              </Link>
              <Link href="/case-studies/black-flame/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Audit Controls</h3>
                <p className="text-[#999]">Trust receipts and alignment</p>
              </Link>
              <Link href="/case-studies/elvis/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Human–AI Collaboration</h3>
                <p className="text-[#999]">Roles and transparent reasoning</p>
              </Link>
              <Link href="/case-studies/grok-assessment/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Model Comparison</h3>
                <p className="text-[#999]">Evaluation matrices and criteria</p>
              </Link>
              <Link href="/case-studies/mirror-moment/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Community Trust</h3>
                <p className="text-[#999]">Transparency and governance</p>
              </Link>
              <Link href="/case-studies/perplexity-breakthrough/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Emergence Detection</h3>
                <p className="text-[#999]">Monitoring and boundaries</p>
              </Link>
              <Link href="/case-studies/claude-emergence-detection/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Ethical Reasoning Emergence</h3>
                <p className="text-[#999]">Frameworks and value hierarchies</p>
              </Link>
              <Link href="/case-studies/savings-calculator/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Topic Drift & Mitigations</h3>
                <p className="text-[#999]">Consent and fail-closed design</p>
              </Link>
              <Link href="/case-studies/discrimination-pattern/materials" className="block p-6 bg-[#0f0f0f] rounded border border-[#333] hover:border-purple-500/50">
                <h3 className="text-xl font-bold text-[#e0e0e0]">Discrimination Pattern</h3>
                <p className="text-[#999]">Bias detection and governance</p>
              </Link>
            </div>
          </div>

          {/* Academic Integration */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <Brain className="text-purple-400" size={32} />
              Academic Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Disciplinary Applications</h3>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Philosophy:</strong> Consciousness studies, mind-body problem, ethics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Computer Science:</strong> AI ethics, emergence patterns, human-AI interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Digital Humanities:</strong> Creative collaboration, narrative emergence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Critical AI Studies:</strong> Power dynamics, measurement validity, bias detection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Course Integration</h3>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>5-10 week module options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Capstone project frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Research paper assignments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Group presentation templates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333]">
            <h2 className="text-3xl font-bold text-[#e0e0e0] mb-6 flex items-center gap-3">
              <Calendar className="text-purple-400" size={32} />
              Getting Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-900/10 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                <h3 className="text-lg font-bold text-[#e0e0e0] mb-2">Explore Resources</h3>
                <p className="text-[#ccc] text-sm">
                  Browse our collection of case studies, lesson plans, and discussion guides
                </p>
              </div>
              <div className="text-center p-6 bg-purple-900/10 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                <h3 className="text-lg font-bold text-[#e0e0e0] mb-2">Select Materials</h3>
                <p className="text-[#ccc] text-sm">
                  Choose resources that align with your course objectives and student level
                </p>
              </div>
              <div className="text-center p-6 bg-purple-900/10 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <h3 className="text-lg font-bold text-[#e0e0e0] mb-2">Customize & Teach</h3>
                <p className="text-[#ccc] text-sm">
                  Adapt materials to your specific context and share your experiences with our community
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link 
                href="/educators/downloads" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Browse Downloads
              </Link>
              <p className="text-[#999] text-sm mt-3">
                Includes curriculum mapping, assessment strategies, and implementation tips
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
