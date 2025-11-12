"use client"

import Link from "next/link"
import { Building2, Shield, CheckCircle, Eye, Lock, BarChart3, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnterpriseDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-100 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-400/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Live Enterprise Demo Available
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience Enterprise AI Trust
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              Powered by <strong>Yseeku</strong> — Production-grade trust infrastructure for enterprise AI
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Try the full SYMBI Trust Protocol with cryptographic receipts, multi-provider AI orchestration, and real-time compliance monitoring.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-blue-200">Test Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-sm text-blue-200">AI Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-blue-200">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-blue-200">Audit Trail</div>
            </div>
          </div>

          {/* Demo Access Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Demo Credentials</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-blue-200 mb-2 font-semibold">Email:</p>
                    <code className="block bg-black/40 text-green-300 px-4 py-3 rounded-lg font-mono text-base border border-green-500/30">
                      stephen@symbi.world
                    </code>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 mb-2 font-semibold">Password:</p>
                    <code className="block bg-black/40 text-green-300 px-4 py-3 rounded-lg font-mono text-base border border-green-500/30">
                      demo123
                    </code>
                  </div>
                </div>
                <p className="text-sm text-blue-300 italic">
                  No signup required. Demo data automatically purged every 24 hours.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What You'll Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">Cryptographic trust receipts for every AI interaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">Multi-provider AI comparison (OpenAI, Anthropic, Perplexity)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">Real-time bias detection and fairness monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">Interactive audit trail exploration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">Board-ready compliance dashboards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://symbi-synergy-pa9k82n5m-ycq.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
              >
                Launch Enterprise Demo
                <ExternalLink className="h-6 w-6" />
              </a>
              <p className="mt-4 text-sm text-blue-300">
                Demo Limits: 3 conversations • 10 messages per conversation • 50 requests per 15 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade Trust Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yseeku delivers production-ready trust protocol infrastructure for organizations that need verifiable, auditable AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cryptographic Audit Trails</h3>
              <p className="text-gray-600">
                Every AI interaction generates an immutable, cryptographically-signed receipt with complete decision reasoning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Bias Detection</h3>
              <p className="text-gray-600">
                Continuous fairness monitoring across all AI models with automated compliance scoring and alerts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Provider Orchestration</h3>
              <p className="text-gray-600">
                Unified governance across OpenAI, Anthropic, Perplexity with consistent trust protocols.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Transparency</h3>
              <p className="text-gray-600">
                Full visibility into AI decision-making with interactive audit trails and explainable AI outputs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Zero-trust architecture with server-side key management, rate limiting, and comprehensive authentication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-14 w-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                95% EU AI Act compliant with board-ready reports and automated compliance documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Production-Ready Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and reliability from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend Infrastructure</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Node.js/Express</strong> — High-performance API server</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>MongoDB Atlas</strong> — Scalable database with clustering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>JWT/RBAC</strong> — Enterprise authentication & authorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Socket.IO</strong> — Real-time communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Prometheus/Grafana</strong> — Production monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Testing & Quality</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>313 test files</strong> — Comprehensive coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>95% test coverage</strong> — Across critical paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Playwright E2E</strong> — Performance, security, accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Jest backend testing</strong> — Unit & integration tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Automated CI/CD</strong> — Continuous deployment pipeline</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Deploy in Your Enterprise?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact the Yseeku team for custom deployment, integration support, and enterprise SLAs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://yseeku.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                <Building2 className="h-5 w-5" />
                Visit Yseeku.com
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="/symbi-symphony"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Learn About SYMBI Symphony
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Yseeku */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Building2 className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">About Yseeku</h2>
          </div>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            <strong>Yseeku</strong> is the enterprise revenue arm of the SYMBI ecosystem, providing production-grade
            trust infrastructure for organizations deploying AI at scale.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            While <strong>SYMBI.world</strong> focuses on community onboarding and <strong>Gammatria.com</strong> handles
            constitutional governance, Yseeku delivers the Sonate Platform — enterprise SaaS, trust protocol licensing,
            and professional services.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-6 py-3 rounded-full text-sm border border-blue-400/30">
            <span className="font-semibold">Sovereignty without speculation. Trust through verification.</span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            Ready to experience enterprise AI trust infrastructure?
          </p>
          <a
            href="https://symbi-synergy-pa9k82n5m-ycq.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Launch Demo Now
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
