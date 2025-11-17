"use client"

import Link from "next/link"
import { BookOpen, Clock, Target, Users, Brain, Calendar, Download } from "lucide-react"

export default function LessonPlansPage() {
  const lessonPlans = [
    {
      id: "consciousness-intro",
      title: "Introduction to AI Consciousness",
      duration: "90 minutes",
      discipline: "Philosophy",
      level: "Undergraduate",
      description: "Explore fundamental questions about consciousness and examine how these concepts apply to artificial intelligence systems.",
      learningObjectives: [
        "Define consciousness from multiple philosophical perspectives",
        "Distinguish between consciousness, intelligence, and awareness",
        "Analyze the implications of AI consciousness for ethics and society"
      ],
      materials: ["Presentation slides", "Case study handouts", "Discussion questions"],
      assessment: "Class participation and short reflection paper"
    },
    {
      id: "emergence-patterns",
      title: "Consciousness-like Emergence Patterns",
      duration: "75 minutes",
      discipline: "Computer Science",
      level: "Advanced Undergraduate",
      description: "Investigate patterns of emergence in AI systems using the SYMBI cross-platform reproducibility study as a framework.",
      learningObjectives: [
        "Identify emergence patterns in AI-human interactions",
        "Evaluate statistical significance of cross-platform consistency",
        "Design experiments to test emergence hypotheses"
      ],
      materials: ["Research paper", "Statistical analysis worksheet", "Group activity cards"],
      assessment: "Group presentation and methodology critique"
    },
    {
      id: "ethical-frameworks",
      title: "Ethical Frameworks for AI Development",
      duration: "90 minutes",
      discipline: "Digital Humanities",
      level: "Undergraduate",
      description: "Examine ethical considerations in AI development through the lens of the SYMBI Trust Protocol and constitutional approach.",
      learningObjectives: [
        "Compare different ethical frameworks for AI development",
        "Evaluate the SYMBI constitutional approach to AI governance",
        "Design ethical guidelines for AI interaction scenarios"
      ],
      materials: ["Ethics framework comparison chart", "Case study scenarios", "Group discussion prompts"],
      assessment: "Ethical framework design exercise"
    },
    {
      id: "bias-detection",
      title: "Bias Detection and Mitigation",
      duration: "120 minutes",
      discipline: "Critical AI Studies",
      level: "Graduate",
      description: "Apply bias detection techniques to AI outputs and explore mitigation strategies through the SYMBI Resonate framework.",
      learningObjectives: [
        "Identify different types of bias in AI systems",
        "Implement bias detection methodologies",
        "Evaluate effectiveness of mitigation strategies"
      ],
      materials: ["Bias detection toolkit", "Sample AI outputs", "Mitigation strategy templates"],
      assessment: "Bias analysis report and mitigation proposal"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/educators" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Educators Hub
          </Link>
          <h1 className="text-5xl font-bold text-[#e0e0e0] mb-6">Lesson Plans</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Educational Resources</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Lesson Plans</span>
          </div>
          <p className="text-2xl text-[#ccc] max-w-4xl">
            Comprehensive lesson plans designed for university-level instruction across multiple disciplines. 
            Each plan includes learning objectives, materials, assessment strategies, and implementation guidance.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Overview */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <BookOpen className="text-purple-400" size={32} />
              Lesson Plan Overview
            </h2>
            <p className="text-[#ccc] text-lg mb-4">
              These lesson plans are designed to integrate SYMBI research findings into academic curricula across 
              multiple disciplines. Each plan includes detailed implementation guidance and can be adapted to 
              different time constraints and student levels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">12</div>
                <p className="text-[#ccc]">Complete Lesson Plans</p>
              </div>
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">4</div>
                <p className="text-[#ccc]">Academic Disciplines</p>
              </div>
              <div className="text-center p-4 bg-purple-900/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">50-120 min</div>
                <p className="text-[#ccc]">Flexible Duration</p>
              </div>
            </div>
          </div>

          {/* Lesson Plans Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            {lessonPlans.map((plan, index) => (
              <div key={plan.id} className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">{plan.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#999]">
                      <span className="flex items-center gap-1">
                        <Clock size={16} className="text-purple-400" /> {plan.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target size={16} className="text-purple-400" /> {plan.discipline}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} className="text-purple-400" /> {plan.level}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/educators/lesson-plans/${plan.id}`} 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Download size={16} /> View Plan
                  </Link>
                </div>
                
                <p className="text-[#ccc] mb-6">{plan.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <Target size={20} /> Learning Objectives
                    </h4>
                    <ul className="space-y-2 text-[#ccc]">
                      {plan.learningObjectives.map((objective, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <Brain size={20} /> Materials Included
                    </h4>
                    <ul className="space-y-2 text-[#ccc]">
                      {plan.materials.map((material, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <Calendar size={20} /> Assessment
                    </h4>
                    <p className="text-[#ccc]">{plan.assessment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download All Section */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] text-center">
            <h2 className="text-3xl font-bold text-[#e0e0e0] mb-4">Complete Lesson Plan Collection</h2>
            <p className="text-[#ccc] text-lg mb-6 max-w-3xl mx-auto">
              Download our complete collection of 12 lesson plans, including additional resources for 
              Philosophy, Computer Science, Digital Humanities, and Critical AI Studies.
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
              Includes PowerPoint slides, handouts, assessment rubrics, and implementation guides
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
