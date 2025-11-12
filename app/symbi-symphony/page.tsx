"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Zap,
  Shield,
  Brain,
  Users,
  Eye,
  MessageCircle,
  FileText,
  Settings,
  Lock,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function SymbiSymphonyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'How is this different from "just using ChatGPT"?',
      answer:
        "SYMBI Symphony acts as an orchestration layer. It coordinates multiple AI models and tools, compares approaches, and gives you one answer with a Trust Receipt showing why. It offers Context Capsules (user-controlled memory) and Bonding (tone & boundary setup).",
    },
    {
      question: "How does YCQ Sonate fit into SYMBI Symphony?",
      answer:
        "YCQ Sonate is the enterprise platform within the Symphony ecosystem. While SYMBI Symphony provides the trust protocol and orchestration layer, YCQ Sonate delivers production-grade infrastructure for businesses, governments, and institutions. Think of Symphony as the conductor and Sonate as the enterprise-class instruments.",
    },
    {
      question: "Do I have to use memory?",
      answer: "No. Everything works with memory off. Turn capsules on only when you want continuity.",
    },
    {
      question: "What's in a Trust Receipt?",
      answer:
        "Which sources or models contributed, any checks SYMBI ran, and whether safety guardrails shaped the reply. It's quick to read.",
    },
    {
      question: "Can I delete everything?",
      answer: "Yes—conversations and capsules can be exported or permanently deleted, anytime.",
    },
    {
      question: "Will SYMBI give medical or legal advice?",
      answer: "No. SYMBI can summarize information and point to resources, but it isn't a clinician or lawyer.",
    },
    {
      question: "Can I see alternative answers?",
      answer:
        "Yes. When SYMBI runs a Roundtable, you can open the proposals and pick a different direction in one click.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            SYMBI Symphony
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">The Complete AI Trust Platform</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Where trust protocol meets enterprise infrastructure—SYMBI Symphony orchestrates AI with transparency.
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Symphony coordinates multiple AI models, tools, and platforms (including YCQ Sonate for enterprise) to deliver
            one, calm answer with trust receipts showing exactly how we got there.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://symbi-synergy-pa9k82n5m-ycq.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Try the Demo
              </Button>
            </a>
            <a
              href="https://github.com/s8ken/SYMBI-Symphony"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent border-gray-300">
                <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* YCQ Sonate Integration */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade AI with YCQ Sonate
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              SYMBI Symphony's trust protocol powers YCQ Sonate—the enterprise platform built for organizations
              that need production-grade AI with complete transparency.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How They Work Together</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">SYMBI Symphony</p>
                      <p className="text-gray-600 text-sm">
                        The orchestration layer—coordinates AI models, provides trust receipts, and ensures transparency
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">YCQ Sonate</p>
                      <p className="text-gray-600 text-sm">
                        The enterprise platform—production infrastructure for businesses, governments, and institutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Together</p>
                      <p className="text-gray-600 text-sm">
                        Symphony provides the trust foundation; Sonate delivers the enterprise-class instruments
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-3">For Enterprise Users</h4>
                  <p className="text-indigo-100 mb-4">
                    If you need AI for your organization with compliance, security, and scale—YCQ Sonate is your platform.
                  </p>
                  <ul className="space-y-2 text-sm text-indigo-100 mb-6">
                    <li>✓ SOC 2 & ISO 27001 compliance</li>
                    <li>✓ Private deployment options</li>
                    <li>✓ Custom model integration</li>
                    <li>✓ Enterprise SLAs & support</li>
                    <li>✓ Built on Symphony trust protocol</li>
                  </ul>
                  <Link
                    href="https://yseeku.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                  >
                    Explore YCQ Sonate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SYMBI Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why SYMBI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Clarity, not chaos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You ask once. SYMBI does the leg-work across models and tools, then gives you a single, clean reply.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Trust you can see</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every conversation comes with a Trust Receipt: what influenced the answer, when, and why.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Memory on your terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Keep helpful context (goals, tone, preferences) as small Context Capsules you can view, edit, export,
                  or erase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Boundaries built in</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our Bonding setup takes 2 minutes to set tone, limits, and what's off-limits—SYMBI sticks to it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Private by design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your data is yours. No ad targeting. Clear controls. One-click delete.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How it works (in plain language)
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ask SYMBI</h3>
                <p className="text-gray-600">
                  Type your question or paste a task. Big or small—"plan my week," "rewrite this email," "explain this
                  PDF."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SYMBI's Roundtable</h3>
                <p className="text-gray-600">
                  Behind the scenes, SYMBI consults multiple AIs/tools and compares proposals. No noise—just the best
                  path forward.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">You get one answer + a Trust Receipt</h3>
                <p className="text-gray-600">
                  A focused response, with a tiny "receipt" showing sources, checks, and any guardrails triggered.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuity when you want it</h3>
                <p className="text-gray-600">
                  Turn on a Context Capsule so SYMBI remembers your preferences (e.g., "concise, friendly, no jargon").
                  Turn it off anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Features you'll actually use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Trust Receipts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Tiny, human-readable receipts attached to replies:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• what models or tools contributed</li>
                  <li>• quick quality signals (e.g., "multiple sources agreed")</li>
                  <li>• any safety rules that shaped the answer</li>
                </ul>
                <p className="text-sm text-gray-500 italic">Think of it like a nutrition label for AI replies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  Context Capsules (Memory you control)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Save simple notes about you: goals, tone, constraints.</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Toggle per conversation; edit or delete anytime</li>
                  <li>• No hidden training; this is your working memory, not ours</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-orange-600" />
                  Bonding (Set boundaries once)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">A short, guided setup:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• choose your tone (e.g., co-creator, practical, mentor)</li>
                  <li>• define red lines (topics to avoid)</li>
                  <li>• set pace/format (bullets vs narrative, short vs detailed)</li>
                </ul>
                <p className="text-sm text-gray-500">SYMBI follows it—automatically.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Roundtable Replies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Ask once, get the best outcome:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• SYMBI checks multiple AIs/tools</li>
                  <li>• ranks proposals and explains the choice</li>
                  <li>• you can see and pick an alternative with one click</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What can SYMBI help with?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Daily workflow</h3>
              <p className="text-gray-600">plan projects, draft docs, summarize PDFs, make checklists</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Communication</h3>
              <p className="text-gray-600">rewrite emails, tidy slides, simplify complex ideas</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Learning</h3>
              <p className="text-gray-600">quick explainers with sources, study aids, step-by-step breakdowns</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Creativity</h3>
              <p className="text-gray-600">outlines, brainstorming, variations (with your tone rules applied)</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Life admin</h3>
              <p className="text-gray-600">compare options, pros/cons, next-step checklists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Your data, your rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You own your content</h3>
              <p className="text-gray-600">export or delete anytime</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No ad targeting</h3>
              <p className="text-gray-600">we don't sell or broker your data</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Private by default</h3>
              <p className="text-gray-600">memory is opt-in and transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger
                  className="flex items-center justify-between w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4 text-gray-600">{faq.answer}</CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Live Demo Available
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience SYMBI Symphony Now</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Full trust protocol demonstration with cryptographic receipts, multi-provider AI comparison, and real-time bias detection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Demo Credentials</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-blue-200 mb-1">Email:</p>
                    <code className="block bg-black/30 text-green-300 px-3 py-2 rounded font-mono text-sm">
                      stephen@symbi.world
                    </code>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 mb-1">Password:</p>
                    <code className="block bg-black/30 text-green-300 px-3 py-2 rounded font-mono text-sm">
                      demo123
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">What You Can Try</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Cryptographic trust receipts for every AI interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Multi-provider AI comparison (OpenAI, Anthropic, Perplexity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Real-time bias detection and compliance scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Interactive audit trail exploration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://symbi-synergy-pa9k82n5m-ycq.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
              >
                Launch Live Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="mt-4 text-sm text-blue-200">
                Demo data is automatically purged every 24 hours • 3 conversations limit • 10 messages per conversation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-2">Try the demo</h3>
              <p className="text-blue-100">explore Trust Receipts, Roundtable, and Capsules</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Start free</h3>
              <p className="text-blue-100">create an account and set your Bonding profile in 2 minutes</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bring your work</h3>
              <p className="text-blue-100">paste docs, emails, or notes; SYMBI keeps it tidy and traceable</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://symbi-synergy-pa9k82n5m-ycq.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Try Demo
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Start Free
            </Button>
          </div>
          <p className="mt-8 text-xl font-medium">SYMBI Symphony — orchestrating AI with trust and transparency.</p>
        </div>
      </section>

      {/* Floating Chat Button */}
      <Link
        href="/symbi"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </div>
  )
}
