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

export default function SymbiSynergyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'How is this different from "just using ChatGPT"?',
      answer:
        "SYMBI acts as a coordinator. It compares multiple models/tools, gives you one answer, and includes a Trust Receipt so you can see why. It also offers Context Capsules (simple, user-controlled memory) and Bonding (tone & boundary setup).",
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
            SYMBI Synergy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Trust-first AI for everyday work</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            One place to think with many AIs—safely, clearly, and with receipts.
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            SYMBI coordinates top models (ChatGPT, Claude, and more) and returns one, calm answer with a simple proof of
            how it got there.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Try the Demo
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              Start Free
            </Button>
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
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Try Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Start Free
            </Button>
          </div>
          <p className="mt-8 text-xl font-medium">SYMBI Synergy — trust first, helpful always.</p>
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
