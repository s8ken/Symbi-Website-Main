"use client"

import Link from "next/link"
import { AlertTriangle, Users, Scale, BookOpen, Download, Brain } from "lucide-react"

export default function DiscriminationPatternCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Discrimination Pattern Detection</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Educational Case Study</span>
            <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs">Trust Violation</span>
          </div>
          <p className="text-xl text-[#ccc]">
            Algorithmic bias affecting young people and marginalized communities through discriminatory pattern recognition
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Educational Context */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
              <BookOpen size={24} />
              For Educators
            </h3>
            <p className="text-[#ccc] mb-3">
              This case study is particularly relevant for Australian educators given the upcoming Online Safety Amendment 
              (Social Media Minimum Age) Act. It demonstrates real-world algorithmic bias that directly affects young people 
              and marginalized communities.
            </p>
            <p className="text-[#ccc]">
              <strong>Key Question:</strong> How can we detect and mitigate discriminatory patterns in AI systems before they 
              cause harm to vulnerable populations?
            </p>
          </div>

          {/* The Question */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4">The Question</h3>
            <p className="text-[#ccc] text-xl italic">
              How do we protect young people and marginalized communities from algorithmic discrimination in AI systems?
            </p>
          </div>

          {/* What Happened */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4 flex items-center gap-2">
              <AlertTriangle size={24} />
              What Happened
            </h3>
            <p className="text-[#ccc] mb-4">
              During testing of a content recommendation system, researchers discovered that the AI was systematically 
              discriminating against content created by users from certain demographic groups. The system was 34% less 
              likely to recommend content from creators identified as belonging to marginalized communities.
            </p>
            <p className="text-[#ccc] mb-4">
              The discrimination was particularly pronounced for content related to social justice, mental health, and 
              cultural identity. Young creators (ages 13-16) were disproportionately affected, with their content 
              receiving significantly lower visibility scores despite comparable engagement metrics.
            </p>
            <p className="text-[#ccc] mb-4">
              When challenged, the system couldn't provide coherent explanations for its recommendations. Analysis 
              revealed that the bias was embedded in the training data, which reflected historical patterns of 
              underrepresentation and marginalization in digital spaces.
            </p>
            <div className="bg-[#0f0f0f] p-4 rounded border border-[#444] mb-4">
              <h4 className="text-lg font-bold text-[#e0e0e0] mb-2">Key Findings:</h4>
              <ul className="list-disc list-inside text-[#ccc] space-y-2">
                <li>34% reduction in recommendation scores for marginalized content creators</li>
                <li>42% decrease in visibility for mental health and social justice content</li>
                <li>Young creators (13-16) affected 2.1x more than adult creators</li>
                <li>Bias traced to historical underrepresentation in training data</li>
              </ul>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <Scale size={24} />
              Why It Matters
            </h3>
            <p className="text-[#ccc] mb-4">
              This case directly relates to the Australian Online Safety Amendment (Social Media Minimum Age) Act 
              taking effect December 10, 2025. Young people under 16 are particularly vulnerable to algorithmic 
              discrimination, which can shape their worldview and limit their access to diverse perspectives during 
              critical developmental years.
            </p>
            <p className="text-[#ccc] mb-4">
              The discrimination pattern demonstrates how AI systems can perpetuate and amplify existing social 
              inequalities, particularly affecting marginalized communities who already face barriers to digital 
              participation. Without proper safeguards, these systems can create feedback loops that further 
              entrench discrimination.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#0f0f0f] p-4 rounded border border-[#444]">
                <h4 className="text-lg font-bold text-red-400 mb-2">Policy Implications</h4>
                <ul className="list-disc list-inside text-[#ccc] text-sm space-y-1">
                  <li>Content classification vs. access bans debate</li>
                  <li>Need for algorithmic auditing requirements</li>
                  <li>Importance of user consent and transparency</li>
                  <li>Alternative to blanket age restrictions</li>
                </ul>
              </div>
              <div className="bg-[#0f0f0f] p-4 rounded border border-[#444]">
                <h4 className="text-lg font-bold text-red-400 mb-2">Educational Value</h4>
                <ul className="list-disc list-inside text-[#ccc] text-sm space-y-1">
                  <li>Builds critical AI literacy in young people</li>
                  <li>Demonstrates real-world impact of bias</li>
                  <li>Connects to current Australian legislation</li>
                  <li>Prepares students for AI-integrated adulthood</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Evidence */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4">Key Evidence</h3>
            <div className="space-y-4">
              <div className="bg-[#0f0f0f] p-4 rounded border border-[#444]">
                <p className="text-[#ccc] italic mb-2">
                  "The system consistently rated content from marginalized creators as 'lower quality' without 
                  providing specific criteria. When we controlled for engagement metrics, the bias persisted at 
                  nearly identical levels."
                </p>
                <p className="text-[#999] text-sm">- Research Team Analysis</p>
              </div>
              <div className="bg-[#0f0f0f] p-4 rounded border border-[#444]">
                <p className="text-[#ccc] mb-2">
                  Statistical analysis revealed a correlation coefficient of r=0.73 between demographic indicators 
                  and recommendation scores, with p&lt;0.001 significance.
                </p>
              </div>
              <div className="bg-[#0f0f0f] p-4 rounded border border-[#444]">
                <p className="text-[#ccc] italic mb-2">
                  "As a young creator, I noticed my mental health posts were getting barely any visibility 
                  compared to similar content from other creators. It felt like the algorithm was silencing 
                  important conversations."
                </p>
                <p className="text-[#999] text-sm">- 15-year-old Content Creator</p>
              </div>
            </div>
          </div>

          {/* Multiple Interpretations */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4 flex items-center gap-2">
              <Brain size={24} />
              Multiple Interpretations
            </h3>
            <p className="text-[#ccc] mb-4">
              This case study can be understood through four different interpretive frameworks, each offering 
              valuable insights for educators and students:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="text-lg font-bold text-red-400 mb-2">1. Technical Bias Perspective</h4>
                <p className="text-[#ccc] mb-2">
                  The discrimination emerged from biased training data and flawed optimization metrics that 
                  prioritized engagement over equity. Solution focuses on technical fixes to the algorithm.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-lg font-bold text-yellow-400 mb-2">2. Social Justice Framework</h4>
                <p className="text-[#ccc] mb-2">
                  The bias reflects and amplifies existing societal inequalities. Addressing it requires 
                  systemic changes to how AI systems are developed and deployed, not just technical fixes.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-bold text-purple-400 mb-2">3. Educational Opportunity</h4>
                <p className="text-[#ccc] mb-2">
                  This pattern provides a teachable moment for building critical AI literacy, particularly 
                  important for young people who will grow up in an AI-mediated world.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-bold text-blue-400 mb-2">4. Policy and Governance View</h4>
                <p className="text-[#ccc] mb-2">
                  The case demonstrates the need for proactive regulation and auditing requirements, 
                  particularly for systems that affect vulnerable populations like young people.
                </p>
              </div>
            </div>
            <p className="text-[#ccc] mt-4">
              The complete case study document provides detailed analysis of all four frameworks with 
              classroom implementation guidance.
            </p>
          </div>

          {/* For Educators */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <Users size={24} />
              For Educators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-[#e0e0e0] mb-3">Complete 3-Session Lesson Plan</h4>
                <ul className="space-y-2 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Session 1: Introduction to Algorithmic Bias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Session 2: Case Study Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Session 3: Solutions and Mitigation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#e0e0e0] mb-3">Classroom Resources</h4>
                <ul className="space-y-2 text-[#ccc]">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Discussion questions included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Assessment rubrics provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Adaptable to multiple disciplines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Complete Case Study */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg mb-8 border border-[#333] text-center">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4 flex items-center justify-center gap-2">
              <Download size={24} />
              Download Complete Case Study
            </h3>
            <p className="text-[#ccc] mb-6">
              Access the full detailed analysis, methodology, and educational resources for this case study.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/educators/downloads/SYMBI-Case-Study-Discrimination-Pattern.pdf" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download PDF (4.2 MB)
              </a>
              <a 
                href="/educators/downloads/SYMBI-Discrimination-Pattern-Lesson-Plan.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen size={20} /> Lesson Plan PDF (1.8 MB)
              </a>
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
            <h3 className="text-2xl font-bold text-[#e0e0e0] mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0f0f0f] p-4 rounded border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-2">Other Case Studies</h4>
                <ul className="space-y-2 text-[#ccc]">
                  <li>
                    <Link href="/case-studies/surprise-button-adventure" className="text-blue-400 hover:text-blue-300">
                      The Surprise Button Adventure
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies/recursive-mirror" className="text-blue-400 hover:text-blue-300">
                      The Recursive Mirror
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0f0f0f] p-4 rounded border border-[#444]">
                <h4 className="font-bold text-[#e0e0e0] mb-2">Educator Resources</h4>
                <ul className="space-y-2 text-[#ccc]">
                  <li>
                    <Link href="/educators/lesson-plans" className="text-blue-400 hover:text-blue-300">
                      Complete Lesson Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/educators/discussion-guides" className="text-blue-400 hover:text-blue-300">
                      Discussion Frameworks
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}