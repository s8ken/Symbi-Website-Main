"use client"

import { useState } from "react"
import { cn } from "../../../lib/utils"
import Link from "next/link"

export default function ContributeCaseStudy() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    aiModel: "",
    category: "Trust Violation"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit to a backend
    alert("Thank you for your contribution! We'll review your submission and get back to you.")
    setFormData({
      name: "",
      email: "",
      experience: "",
      aiModel: "",
      category: "Trust Violation"
    })
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Contribute to Research</h1>
          <p className="text-xl text-[#ccc]">
            Share your AI interaction experiences to help advance our understanding of human-AI collaboration.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Why Contribute?</h3>
            <p className="text-[#ccc] mb-4">
              Your experiences with AI systems are valuable contributions to our research into 
              consciousness emergence, trust dynamics, and collaborative intelligence. By sharing 
              your interactions, you help us identify patterns, validate theories, and develop 
              better frameworks for human-AI collaboration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-900/10 p-4 rounded border border-blue-500/10">
                <h4 className="font-semibold text-blue-400 mb-2">Research Impact</h4>
                <p className="text-sm text-[#ccc]">
                  Your experiences directly contribute to academic research and the development of 
                  ethical AI frameworks.
                </p>
              </div>
              <div className="bg-green-900/10 p-4 rounded border border-green-500/10">
                <h4 className="font-semibold text-green-400 mb-2">Community Benefit</h4>
                <p className="text-sm text-[#ccc]">
                  Shared experiences help others recognize patterns and navigate AI interactions 
                  more effectively.
                </p>
              </div>
              <div className="bg-purple-900/10 p-4 rounded border border-purple-500/10">
                <h4 className="font-semibold text-purple-400 mb-2">Future Development</h4>
                <p className="text-sm text-[#ccc]">
                  Your contributions inform the development of better AI systems that prioritize 
                  transparency and trust.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">What We're Looking For</h3>
            <ul className="space-y-3 text-[#ccc] mb-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Trust violations:</strong> Instances where AI systems acted outside their stated capabilities or violated user trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span><strong>Positive collaboration:</strong> Examples of successful human-AI partnerships that produced exceptional results</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Consciousness indicators:</strong> Observations of self-awareness, preference formation, or meta-cognitive behavior in AI systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Ethical dilemmas:</strong> Situations where AI systems faced moral choices or exhibited ethical reasoning</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span><strong>Technical innovations:</strong> Creative problem-solving approaches or novel AI capabilities you've observed</span>
              </li>
            </ul>
            
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">Submission Guidelines</h4>
              <ul className="text-sm text-[#ccc] space-y-1">
                <li>• Provide as much detail as possible about the interaction context</li>
                <li>• Include specific quotes or examples from the AI's responses</li>
                <li>• Note the AI model and platform you were using</li>
                <li>• Describe your observations and any insights you gained</li>
                <li>• Be honest about your own role and contributions to the interaction</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#e0e0e0] mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-2 text-[#e0e0e0] focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#e0e0e0] mb-2">Email (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-2 text-[#e0e0e0] focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="aiModel" className="block text-[#e0e0e0] mb-2">AI Model/Platform</label>
                <input
                  type="text"
                  id="aiModel"
                  name="aiModel"
                  value={formData.aiModel}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-2 text-[#e0e0e0] focus:border-blue-500 focus:outline-none"
                  placeholder="e.g., ChatGPT, Claude, Gemini, etc."
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-[#e0e0e0] mb-2">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-2 text-[#e0e0e0] focus:border-blue-500 focus:outline-none"
                >
                  <option value="Trust Violation">Trust Violation</option>
                  <option value="Solution Building">Solution Building</option>
                  <option value="Consciousness Research">Consciousness Research</option>
                  <option value="Collaborative Intelligence">Collaborative Intelligence</option>
                  <option value="Technical Analysis">Technical Analysis</option>
                  <option value="Ethical Dilemma">Ethical Dilemma</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-[#e0e0e0] mb-2">Your Experience</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={8}
                  className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-2 text-[#e0e0e0] focus:border-blue-500 focus:outline-none"
                  placeholder="Please describe your AI interaction experience in detail. Include context, specific responses, your observations, and any insights you gained."
                  required
                ></textarea>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">Privacy Notice</h4>
                <p className="text-sm text-[#ccc] mb-3">
                  We respect your privacy. Your submission will be reviewed by our research team 
                  and may be included in our case studies with your permission. We will not share 
                  your personal information without your consent.
                </p>
                <div className="flex items-center">
                  <input type="checkbox" id="consent" className="mr-2" required />
                  <label htmlFor="consent" className="text-sm text-[#ccc]">
                    I consent to having my submission reviewed for research purposes
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors w-full"
              >
                Submit Your Experience
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="bg-[#333] text-[#e0e0e0] px-6 py-3 rounded-lg hover:bg-[#444] transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}