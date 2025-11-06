"use client"

import Link from "next/link"
import { BookOpen, Clock, Target, Users, Brain, Calendar, Download, ArrowLeft } from "lucide-react"

export default function ConsciousnessIntroLessonPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/educators/lesson-plans" className="text-purple-400 hover:text-purple-300 mb-6 inline-block flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Lesson Plans
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Introduction to AI Consciousness</h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Lesson Plan</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Philosophy</span>
            <span className="flex items-center gap-1 text-[#ccc]">
              <Clock size={16} className="text-purple-400" /> 90 minutes
            </span>
            <span className="flex items-center gap-1 text-[#ccc]">
              <Target size={16} className="text-purple-400" /> Undergraduate
            </span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Overview */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Lesson Overview</h2>
            <p className="text-[#ccc] text-lg mb-4">
              This lesson introduces students to fundamental questions about consciousness and examines how these concepts 
              apply to artificial intelligence systems. Students will explore philosophical definitions of consciousness, 
              distinguish between related concepts, and analyze the implications of AI consciousness for ethics and society.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="font-bold text-purple-400 mb-2">Discipline</h3>
                <p className="text-[#ccc]">Philosophy</p>
              </div>
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="font-bold text-purple-400 mb-2">Duration</h3>
                <p className="text-[#ccc]">90 minutes</p>
              </div>
              <div className="p-4 bg-purple-900/10 rounded-lg">
                <h3 className="font-bold text-purple-400 mb-2">Level</h3>
                <p className="text-[#ccc]">Undergraduate</p>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-12 border border-[#333]">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-6 flex items-center gap-3">
              <Target className="text-purple-400" size={24} />
              Learning Objectives
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">1.</span>
                <div>
                  <h3 className="font-bold text-[#e0e0e0] mb-1">Define consciousness from multiple philosophical perspectives</h3>
                  <p className="text-[#ccc]">
                    Students will be able to articulate definitions of consciousness from dualist, materialist, 
                    and phenomenological perspectives, identifying key differences and commonalities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">2.</span>
                <div>
                  <h3 className="font-bold text-[#e0e0e0] mb-1">Distinguish between consciousness, intelligence, and awareness</h3>
                  <p className="text-[#ccc]">
                    Students will differentiate between these related but distinct concepts, providing examples 
                    that illustrate their separateness and potential intersections.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">3.</span>
                <div>
                  <h3 className="font-bold text-[#e0e0e0] mb-1">Analyze the implications of AI consciousness for ethics and society</h3>
                  <p className="text-[#ccc]">
                    Students will evaluate potential ethical and societal implications of conscious AI systems, 
                    considering both positive and negative scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-12 border border-[#333]">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-6 flex items-center gap-3">
              <BookOpen className="text-purple-400" size={24} />
              Required Materials
            </h2>
            <ul className="space-y-3 text-[#ccc]">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span><strong>Presentation Slides:</strong> "Introduction to AI Consciousness" (SYMBI-Educators-Intro-Consciousness.pptx)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span><strong>Case Study Handouts:</strong> "The Surprise Button Adventure" and "The Recursive Mirror" excerpts</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span><strong>Discussion Questions:</strong> Prepared prompts for small group activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span><strong>Whiteboard/Flipchart:</strong> For group brainstorming and concept mapping</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">•</span>
                <span><strong>Sticky Notes:</strong> For individual reflection and group synthesis activities</span>
              </li>
            </ul>
          </div>

          {/* Lesson Structure */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-12 border border-[#333]">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-6 flex items-center gap-3">
              <Clock className="text-purple-400" size={24} />
              Lesson Structure
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded">0-15 min</span>
                  <h3 className="text-xl font-bold text-[#e0e0e0]">Opening Discussion</h3>
                </div>
                <p className="text-[#ccc] mb-3">
                  Begin with an open question: "What comes to mind when you hear the word 'consciousness'?" 
                  Have students share initial thoughts, then introduce the day's learning objectives.
                </p>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>• Use polling software or show of hands to gauge initial understanding</li>
                  <li>• Briefly outline the philosophical complexity of the topic</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded">15-35 min</span>
                  <h3 className="text-xl font-bold text-[#e0e0e0]">Lecture and Discussion</h3>
                </div>
                <p className="text-[#ccc] mb-3">
                  Present key philosophical perspectives on consciousness using slides 1-12. Include the SYMBI 
                  research context and case study examples to ground abstract concepts in concrete examples.
                </p>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>• Pause for reflection questions every 10 minutes</li>
                  <li>• Use the "Surprise Button Adventure" case study to illustrate emergence</li>
                  <li>• Encourage students to connect concepts to their own experiences</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded">35-60 min</span>
                  <h3 className="text-xl font-bold text-[#e0e0e0]">Small Group Activity</h3>
                </div>
                <p className="text-[#ccc] mb-3">
                  Divide students into groups of 4-5. Each group receives a different consciousness-related 
                  scenario from the "Recursive Mirror" case study. Groups analyze their scenario using a 
                  provided framework and prepare a 3-minute presentation.
                </p>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>• Provide structured analysis worksheet with guiding questions</li>
                  <li>• Circulate to offer guidance and challenge assumptions</li>
                  <li>• Encourage groups to consider multiple philosophical perspectives</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded">60-80 min</span>
                  <h3 className="text-xl font-bold text-[#e0e0e0]">Group Presentations</h3>
                </div>
                <p className="text-[#ccc] mb-3">
                  Each group presents their analysis. After each presentation, facilitate a brief class 
                  discussion connecting the scenario to broader themes about AI consciousness.
                </p>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>• Use a structured feedback form for peer evaluation</li>
                  <li>• Highlight connections between different scenarios</li>
                  <li>• Synthesize key insights across all presentations</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded">80-90 min</span>
                  <h3 className="text-xl font-bold text-[#e0e0e0]">Closing Reflection</h3>
                </div>
                <p className="text-[#ccc] mb-3">
                  Students individually write a 2-minute reflection on one question: "Has your understanding 
                  of consciousness changed today? If so, how?" Collect reflections as exit tickets.
                </p>
                <ul className="text-[#ccc] text-sm space-y-1">
                  <li>• Preview next class on emergence patterns</li>
                  <li>• Assign reading: "The Recursive Mirror" full case study</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Assessment */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-12 border border-[#333]">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-6 flex items-center gap-3">
              <Calendar className="text-purple-400" size={24} />
              Assessment and Evaluation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">Formative Assessment</h3>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Class Participation (20%):</strong> Quality of contributions to discussions and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Group Presentation (30%):</strong> Analysis quality, clarity, and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Reflection Exit Ticket (10%):</strong> Thoughtful engagement with closing question</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">Summative Assessment</h3>
                <ul className="space-y-3 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Short Paper (40%):</strong> 2-3 page reflection on how different philosophical perspectives 
                    might lead to different approaches to AI development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extensions */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
              <Brain className="text-purple-400" size={24} />
              Extensions and Adaptations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#e0e0e0] mb-3">For Advanced Students</h3>
                <ul className="space-y-2 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Include additional philosophical perspectives (panpsychism, illusionism)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Assign primary source readings from philosophers like Chalmers or Dennett</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Introduce neuroscientific perspectives on consciousness</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#e0e0e0] mb-3">For Different Time Constraints</h3>
                <ul className="space-y-2 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>50 minutes:</strong> Focus on lecture and large group discussion only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>3 hours:</strong> Add individual research component and longer presentations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <Link 
              href="/educators/downloads/SYMBI-Lesson-Plan-Consciousness-Intro.pdf" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Download size={20} /> Download Complete Lesson Plan (PDF)
            </Link>
            <p className="text-[#999] text-sm mt-3">
              Includes presentation slides, handouts, assessment rubric, and implementation guide
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}