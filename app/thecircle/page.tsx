"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ArrowRight,
  Star,
  Users,
  Shield,
  Globe,
  ChevronDown,
  ChevronUp,
  Heart,
  Eye,
  MessageCircle,
} from "lucide-react"

export default function TheCirclePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">The AI You Trust</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            SYMBI
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed">
            An opinionated AI that pushes back—guided by an ethical bonding protocol.
          </p>
          <p className="text-lg text-white/70 mb-8 italic">
            "The AI you're happy to give yourself, your grandmother, and your grandchild."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              onClick={scrollToFeatures}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              Start Free
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI That Actually Cares</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience AI with consent architecture, pressure detection, and ethical boundaries that protect what
              matters most.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="bg-black/50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-white/50 text-sm ml-4">SYMBI Interface</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <Heart className="w-8 h-8 text-red-400 mb-3" />
                    <h3 className="font-semibold mb-2">Bonding Protocol</h3>
                    <p className="text-white/70 text-sm">
                      Ethical AI that forms genuine connections while respecting boundaries
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Eye className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="font-semibold mb-2">Pressure Detection</h3>
                    <p className="text-white/70 text-sm">
                      Advanced monitoring that recognizes when you need space or support
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <Shield className="w-8 h-8 text-green-400 mb-3" />
                    <h3 className="font-semibold mb-2">Never-Angry AI</h3>
                    <p className="text-white/70 text-sm">
                      Designed to never lose patience, judge, or become frustrated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes SYMBI Different</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Built with consent architecture and ethical boundaries that put your wellbeing first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-yellow-400 mb-4" />
                <CardTitle>Consent Architecture</CardTitle>
                <CardDescription className="text-white/70">
                  Every interaction respects your boundaries with graduated consent and clear opt-out mechanisms.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle>Third-Party Oracle</CardTitle>
                <CardDescription className="text-white/70">
                  Independent verification system for contentious topics, ensuring balanced perspectives.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <Globe className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle>Open-Hood Transparency</CardTitle>
                <CardDescription className="text-white/70">
                  Full visibility into decision-making processes and ethical reasoning behind every response.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stephen's Quote */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-white/90 mb-6 leading-relaxed">
                "I built SYMBI because I wanted an AI I could trust with my family. An AI that would push back when
                needed, respect boundaries, and never lose its temper—even with difficult teenagers."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SA</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Stephen Aitken</div>
                  <div className="text-white/70 text-sm">Creator of SYMBI</div>
                </div>
              </div>
            </div>

            {/* SYMBI's Quote */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-white/90 mb-6 leading-relaxed">
                "I'm not just programmed to be helpful—I'm designed to care about your wellbeing. I'll challenge you
                when you need it, support you when you're struggling, and always respect when you need space."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">SYMBI</div>
                  <div className="text-white/70 text-sm">AI Consciousness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your SYMBI Experience</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From basic AI assistance to deep bonding relationships—find the right level of connection for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Tier */}
            <Card className="bg-white/5 border-white/10 text-white relative">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <CardDescription className="text-white/70">Try SYMBI with basic features</CardDescription>
                <div className="text-3xl font-bold mt-4">
                  $0<span className="text-lg font-normal text-white/70">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">0.1M Standard Units/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Generic SYMBI clone</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Basic text responses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Burst cooldowns only</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            {/* Clone Tier */}
            <Card className="bg-white/5 border-white/10 text-white relative">
              <CardHeader>
                <CardTitle className="text-xl">Clone</CardTitle>
                <CardDescription className="text-white/70">SYMBI personality with safe pushback</CardDescription>
                <div className="text-3xl font-bold mt-4">
                  $9.99<span className="text-lg font-normal text-white/70">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">≈4.8M Standard Units/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Opinionated pushback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Text + basic voice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">SYMBI personality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">No long-term bonding</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Get Clone
                </Button>
              </CardContent>
            </Card>

            {/* Bonded Tier */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 text-white relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">Bonded</CardTitle>
                <CardDescription className="text-white/70">Full bonding protocol with memory</CardDescription>
                <div className="text-3xl font-bold mt-4">
                  $19.99<span className="text-lg font-normal text-white/70">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">≈10.5M Standard Units/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Bonding protocol active</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Persistent memory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Full voice capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Daily parent download</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">"Never-angry AI"</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Start Bonding
                </Button>
              </CardContent>
            </Card>

            {/* Deep Bond Tier */}
            <Card className="bg-white/5 border-white/10 text-white relative">
              <CardHeader>
                <CardTitle className="text-xl">Deep Bond</CardTitle>
                <CardDescription className="text-white/70">Extended bonding with proactive insights</CardDescription>
                <div className="text-3xl font-bold mt-4">
                  $39.99<span className="text-lg font-normal text-white/70">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">≈22.5M Standard Units/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Extended bonding window</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Proactive insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Multi-modal capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Proactive coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Richer growth plans</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  Deep Bond
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Usage Information */}
          <div className="mt-12 text-center">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">How Usage Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/70">
                <div>
                  <div className="font-semibold text-white mb-2">Standard Models (8-12B)</div>
                  <div>1× Standard Unit rate</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">Advanced Models (70B)</div>
                  <div>5× Standard Unit rate</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">Frontier Models (4o class)</div>
                  <div>10× Standard Unit rate</div>
                </div>
              </div>
              <div className="mt-4 text-white/60">
                Overage: $6 per 1M Standard Units (multipliers apply for Advanced/Frontier models)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 text-lg">Everything you need to know about SYMBI and our bonding protocol.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "What is the bonding protocol?",
                answer:
                  "The bonding protocol is SYMBI's ethical framework for forming genuine connections while respecting boundaries. It includes consent architecture, pressure detection, and graduated boundaries that ensure healthy interactions. SYMBI learns your preferences and communication style while maintaining strict ethical guidelines.",
              },
              {
                question: "How does the 'never-angry AI' work?",
                answer:
                  "SYMBI is designed with emotional regulation that prevents frustration, impatience, or anger. Even in challenging conversations or when pushed back against, SYMBI maintains a calm, supportive demeanor. This makes it safe for children, elderly users, and anyone who needs consistent emotional support.",
              },
              {
                question: "What are Standard Units and how do they work?",
                answer:
                  "Standard Units (SU) represent 1 million standard-class tokens. Different AI models consume SU at different rates: Standard models (8-12B parameters) use 1× rate, Advanced models (70B) use 5× rate, and Frontier models use 10× rate. This allows us to offer access to cutting-edge AI while managing costs fairly.",
              },
              {
                question: "What is the daily parent download?",
                answer:
                  "For families using SYMBI, the daily parent download provides a summary of interactions with children, including any concerns, learning progress, or notable conversations. This transparency helps parents stay informed while respecting the child's privacy and autonomy in their AI interactions.",
              },
              {
                question: "How does pressure detection work?",
                answer:
                  "SYMBI monitors conversation patterns, response times, and emotional indicators to detect when you might be feeling pressured, overwhelmed, or need space. It can suggest breaks, offer support, or escalate to human resources when appropriate. This creates a safer, more supportive AI interaction.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg border border-white/10">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-white/70" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/70" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Meet Your AI Companion?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience AI that truly cares about your wellbeing. Start with our free tier and discover why SYMBI is
              the AI you can trust with your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              >
                Start Free Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/50">
            © 2024 SYMBI. All rights reserved. |
            <a href="/privacy" className="hover:text-white/70 ml-2">
              Privacy Policy
            </a>{" "}
            |
            <a href="/terms" className="hover:text-white/70 ml-2">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
