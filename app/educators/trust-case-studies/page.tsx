"use client"

import Link from "next/link"
import { BookOpen, FileText, Users, Clock, Search } from "lucide-react"

type CaseStudy = {
  id: string
  title: string
  description: string
  subject: string
  gradeLevel: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  topics: string[]
  materials: {
    sessionPlan: boolean
    rubric: boolean
    worksheet: boolean
    presentation: boolean
  }
  trustScore?: number
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "AI Trust in Healthcare Diagnostics",
    description:
      "Evaluate medical AI decisions and learn to assess trustworthiness using SYMBI's six-pillar trust model.",
    subject: "Computer Science",
    gradeLevel: "High School",
    duration: "90 minutes",
    difficulty: "Intermediate",
    topics: ["AI Ethics", "Healthcare Technology", "Trust Scoring", "Bias Detection"],
    materials: { sessionPlan: true, rubric: true, worksheet: true, presentation: true },
    trustScore: 0.85,
  },
  {
    id: "2",
    title: "Decentralized Identity in Education",
    description: "Blockchain and DID for securing student records and credentials.",
    subject: "Technology",
    gradeLevel: "College",
    duration: "120 minutes",
    difficulty: "Advanced",
    topics: ["Blockchain", "DID", "Verifiable Credentials", "Data Privacy"],
    materials: { sessionPlan: true, rubric: true, worksheet: false, presentation: true },
    trustScore: 0.92,
  },
  {
    id: "3",
    title: "Bias Detection in AI Systems",
    description: "Hands-on workshop using SYMBI's tools to identify and mitigate algorithmic bias.",
    subject: "Data Science",
    gradeLevel: "High School",
    duration: "75 minutes",
    difficulty: "Beginner",
    topics: ["Algorithmic Bias", "Fairness Metrics", "AI Ethics", "Data Analysis"],
    materials: { sessionPlan: true, rubric: false, worksheet: true, presentation: true },
    trustScore: 0.78,
  },
  {
    id: "4",
    title: "Compliance Monitoring for AI",
    description: "Organizational practices for regulatory and ethical compliance in AI.",
    subject: "Business Studies",
    gradeLevel: "College",
    duration: "105 minutes",
    difficulty: "Advanced",
    topics: ["AI Governance", "Regulatory Compliance", "Risk Management", "Ethics"],
    materials: { sessionPlan: true, rubric: true, worksheet: true, presentation: true },
    trustScore: 0.88,
  },
  {
    id: "5",
    title: "Real-time Trust Monitoring",
    description: "Design a dashboard to monitor trust scores and degradation patterns.",
    subject: "Computer Science",
    gradeLevel: "High School",
    duration: "60 minutes",
    difficulty: "Intermediate",
    topics: ["Real-time Systems", "Dashboard Design", "Trust Metrics", "Monitoring"],
    materials: { sessionPlan: true, rubric: false, worksheet: true, presentation: false },
    trustScore: 0.82,
  },
  {
    id: "6",
    title: "Cryptographic Audit Trails",
    description: "Use cryptographic techniques to ensure integrity and create immutable audit trails.",
    subject: "Cybersecurity",
    gradeLevel: "College",
    duration: "135 minutes",
    difficulty: "Advanced",
    topics: ["Cryptography", "Hash Functions", "Digital Signatures", "Audit Systems"],
    materials: { sessionPlan: true, rubric: true, worksheet: false, presentation: true },
    trustScore: 0.95,
  },
]

export default function TrustCaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/educators" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Educators Hub
          </Link>
          <h1 className="text-5xl font-bold text-[#e0e0e0] mb-6">Trust & Ethics Case Studies</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="uppercase tracking-[0.2em] text-sm text-white/60">Educational Resources</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Case Studies</span>
          </div>
          <p className="text-2xl text-[#ccc] max-w-4xl">
            Classroom-ready studies covering AI trust, compliance, bias detection, real-time monitoring, and audit trails.
            Each entry includes objectives, topics, and available materials.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 gap-8 mb-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#e0e0e0] mb-2">{study.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#999]">
                      <span className="flex items-center gap-1">
                        <Clock size={16} className="text-purple-400" /> {study.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} className="text-purple-400" /> {study.gradeLevel}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen size={16} className="text-purple-400" /> {study.subject}
                      </span>
                      {typeof study.trustScore === "number" && (
                        <span className="flex items-center gap-1">
                          <FileText size={16} className="text-purple-400" /> Trust Score {Math.round(study.trustScore * 100) / 100}
                        </span>
                      )}
                    </div>
                  </div>
                  <Link href="/educators/downloads" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                    <Search size={16} /> Browse Materials
                  </Link>
                </div>
                <p className="text-[#ccc] mb-6">{study.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <FileText size={20} /> Topics
                    </h4>
                    <ul className="space-y-2 text-[#ccc]">
                      {study.topics.map((t) => (
                        <li key={t} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <FileText size={20} /> Materials
                    </h4>
                    <ul className="space-y-2 text-[#ccc]">
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Session plan {study.materials.sessionPlan ? "available" : "N/A"}</span></li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Assessment rubric {study.materials.rubric ? "available" : "N/A"}</span></li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Worksheet {study.materials.worksheet ? "available" : "N/A"}</span></li>
                      <li className="flex items-start"><span className="text-purple-500 mr-2">•</span><span>Presentation slides {study.materials.presentation ? "available" : "N/A"}</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <FileText size={20} /> Get Materials
                    </h4>
                    <p className="text-[#ccc]">Materials are organized under Downloads. Use the button above to browse resources.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

