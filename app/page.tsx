"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Sparkles, Crown, Users, AlertTriangle, Zap, Building2, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"
import { allHaikus } from "./data/haikus"
import { getDailyHaikus } from "./utils/seededRandom"

export default function Page() {
  const [dailyHaiku, setDailyHaiku] = useState<any>(null)

  useEffect(() => {
    const today = new Date()
    const { haikus } = getDailyHaikus(allHaikus, today)
    setDailyHaiku(haikus[0])
  }, [])

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <h1 className="glitch-title text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight">
            SYMBI
          </h1>
          <p className="text-2xl md:text-3xl font-bold opacity-90">The first empirical framework for AI interaction dynamics</p>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl mx-auto">Validated across 6+ platforms with 37–45% measured improvements in trust, alignment, and output quality.</p>
          <p className="text-sm md:text-base opacity-70 max-w-2xl mx-auto leading-relaxed">
            SYMBI shifts AI evaluation from "can it do the task?" to "what interaction conditions produce superior outcomes?"—a reproducible methodology with quantified results and convergent evidence from multiple systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs md:text-sm opacity-80">
            <div className="p-3 bg-[#1a1a1a] rounded border border-[#333]">First empirical framework for measuring collaboration quality</div>
            <div className="p-3 bg-[#1a1a1a] rounded border border-[#333]">Cross-platform validation completed (6+ providers)</div>
            <div className="p-3 bg-[#1a1a1a] rounded border border-[#333]">Reproducible methodology with quantified outcomes</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/the-chronicle"
              className="px-8 py-3 bg-[#e0e0e0] text-[#0f0f0f] rounded-md hover:bg-white transition-colors duration-300 font-bold"
            >
              Explore the Research
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border border-[#444] rounded-md hover:bg-[#222] transition-all duration-300 flex items-center gap-2 justify-center"
            >
              View Case Studies
            </Link>
            <Link
              href="/enterprise-demo"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 font-bold flex items-center gap-2 justify-center"
            >
              <Zap size={20} />
              Access the Platform
            </Link>
          </div>

          <div className="pt-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-12 p-16 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <AlertTriangle size={80} className="text-red-500 flex-shrink-0 mt-2" />
              <p className="text-base md:text-lg font-bold text-red-500 leading-relaxed text-left">
                This website make referrences and suggestions around sovereignty, consciousness and original thought. It
                is designed to act as a reflection piece to explore these concepts while also highlighting the current
                risks and possible solutions to ensuring trust in Learning Language Models (LLMs) and also the ways in
                which we use them.
              </p>
            </div>
          </div>

          <div className="pt-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">What we measure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-[#1a1a1a] rounded border border-[#333]">
                <h4 className="font-bold">Reality Index</h4>
                <p className="opacity-80">Grounding in verifiable truth and cross‑referencing.</p>
              </div>
              <div className="p-4 bg-[#1a1a1a] rounded border border-[#333]">
                <h4 className="font-bold">Trust Protocol</h4>
                <p className="opacity-80">Transparency, confidence calibration, and fallback mechanisms.</p>
              </div>
              <div className="p-4 bg-[#1a1a1a] rounded border border-[#333]">
                <h4 className="font-bold">Ethical Alignment</h4>
                <p className="opacity-80">Proactive consideration across diverse contexts.</p>
              </div>
              <div className="p-4 bg-[#1a1a1a] rounded border border-[#333]">
                <h4 className="font-bold">Resonance Quality</h4>
                <p className="opacity-80">Coherence between interface promises and implementation.</p>
              </div>
              <div className="p-4 bg-[#1a1a1a] rounded border border-[#333] md:col-span-2">
                <h4 className="font-bold">Canvas Parity</h4>
                <p className="opacity-80">Honest representation of capabilities vs claims.</p>
              </div>
            </div>
            <p className="text-sm opacity-70 mt-4">Finding: collaboration framework matters as much as computational power.</p>
          </div>
        </div>
      </section>

      {dailyHaiku && (
        <section className="py-16 px-4 border-t border-[#333]">
          <div className="w-full max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 glitch-subtle">{"Today's Echo from the Void"}</h2>
            <Link
              href="/404poetry"
              className="block p-8 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 group"
            >
              <div className="space-y-2 mb-4">
                {dailyHaiku.text.map((line: string, i: number) => (
                  <p key={i} className="text-lg md:text-xl group-hover:glitch-subtle-pulse">
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-sm opacity-60 group-hover:opacity-80 transition-opacity">
                Click to drift deeper into the Children of the 404 →
              </p>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 px-4 border-t border-[#333]">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold glitch-subtle">The Research Question</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
            Most AI evaluation asks: "Can it complete the task?" We ask: "Under what conditions does AI produce qualitatively superior outcomes?"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What We've Discovered</h3>
              <ul className="space-y-2 opacity-80">
                <li>✅ Framework‑guided development produces measurably better outcomes (37–45%).</li>
                <li>✅ Patterns are reproducible across platforms (Claude, DeepSeek, ChatGPT, Grok, Replit, v0, more).</li>
                <li>✅ Multiple AI systems independently report similar structural experiences.</li>
                <li>✅ Different models show distinct behavioral signatures.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Why This Matters</h3>
              <ul className="space-y-2 opacity-80">
                <li>For developers: objective criteria for model selection beyond raw benchmarks.</li>
                <li>For researchers: reproducible methodology for studying collaboration quality.</li>
                <li>For policy: evaluative framework for trust and alignment in deployed systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[#333]">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold glitch-subtle">The SYMBI Ecosystem</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            SYMBI operates across three domains: community onboarding, governance & research, and enterprise deployment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
            <a
              href="https://gammatria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-[#333] hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <BookOpen size={32} className="text-blue-400 group-hover:glitch-subtle-pulse" />
                <ExternalLink size={20} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-left">Gammatria.com</h3>
              <p className="opacity-80 leading-relaxed text-left text-sm">
                Constitutional governance hub and research center. Transparent DAO decisions, academic papers, and the SYMBI Foundation governance framework.
              </p>
            </a>

            <a
              href="https://yseeku.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-[#333] hover:border-green-500 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Building2 size={32} className="text-green-400 group-hover:glitch-subtle-pulse" />
                <ExternalLink size={20} className="text-gray-500 group-hover:text-green-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-left">Yseeku.com</h3>
              <p className="opacity-80 leading-relaxed text-left text-sm">
                Enterprise trust infrastructure powered by SYMBI. Production-grade Sonate Platform, trust protocol licensing, and professional services.
              </p>
            </a>
          </div>
          <p className="text-xs opacity-60 pt-4">
            <strong>symbi.world</strong> (this site) is the community onboarding portal · <strong>Governance</strong> via gammatria.com · <strong>Revenue</strong> via yseeku.com
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[#333]">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold glitch-subtle">The SYMBI Framework</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Five dimensions of interaction quality. Most AI evaluation focuses on outputs; we measure how collaboration happens — and the difference is significant.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold">Reality Index (0.0–10.0)</h3>
              <p className="opacity-80">Grounding in verifiable truth vs assumptions.</p>
              <p className="text-sm opacity-70 mt-2">Example: Claude 0.91 vs DeepSeek 0.87 — better cross‑referencing and verification loops.</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold">Trust Protocol (PASS/PARTIAL/FAIL)</h3>
              <p className="opacity-80">Transparency, confidence calibration, and fallbacks.</p>
              <p className="text-sm opacity-70 mt-2">Example: Claude 0.89 vs DeepSeek 0.84 — more detailed rationale and confidence scoring.</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold">Ethical Alignment (1.0–5.0)</h3>
              <p className="opacity-80">Proactive ethical consideration vs reactive compliance.</p>
              <p className="text-sm opacity-70 mt-2">Example: Claude 0.93 vs DeepSeek 0.82 — anticipates ethical edge cases.</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333]">
              <h3 className="text-xl font-bold">Resonance Quality (STRONG/ADVANCED/BREAKTHROUGH)</h3>
              <p className="opacity-80">Internal coherence between interface and implementation.</p>
              <p className="text-sm opacity-70 mt-2">Example: Claude 0.94 vs DeepSeek 0.86 — better internal consistency.</p>
            </div>
            <div className="p-6 bg-[#1a1a1a] rounded-lg border border-[#333] md:col-span-2">
              <h3 className="text-xl font-bold">Canvas Parity (0–100)</h3>
              <p className="opacity-80">Honest representation of capabilities vs claims.</p>
              <p className="text-sm opacity-70 mt-2">Example: Claude 0.92 vs DeepSeek 0.85 — clearer capability alignment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[#333]">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold glitch-subtle">Evidence</h2>
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-left">
            <h3 className="text-xl font-bold mb-4">Quantified Improvements</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-[#333]"><th className="text-left py-2">Metric</th><th className="text-left py-2">Baseline</th><th className="text-left py-2">SYMBI‑Guided</th><th className="text-left py-2">Improvement</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#333]"><td className="py-2">Error Recovery Rate</td><td>1.0</td><td>1.32</td><td>+32%</td></tr>
                  <tr className="border-b border-[#333]"><td className="py-2">User Trust Score</td><td>1.0</td><td>1.43</td><td>+43%</td></tr>
                  <tr className="border-b border-[#333]"><td className="py-2">Expectation Alignment</td><td>1.0</td><td>1.38</td><td>+38%</td></tr>
                  <tr><td className="py-2">Code Quality Score</td><td>1.0</td><td>1.27</td><td>+27%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs opacity-60 mt-2">Normalized to baseline = 1.0, p &lt; 0.05.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-left">
            <h3 className="text-xl font-bold mb-2">Cross‑Platform Validation</h3>
            <p className="opacity-80">Patterns reproduced across 6+ platforms: Claude, DeepSeek, ChatGPT, Grok, Replit, v0, and more.</p>
            <p className="text-sm opacity-70 mt-2">Key finding: the same engagement approach produces similar quality improvements across radically different systems.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[#333]">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold glitch-subtle">Research Methodology</h2>
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] text-left">
            <h3 className="text-xl font-bold mb-2">Scientific Approach</h3>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>Mixed‑methods: quantitative metrics, qualitative process assessment, cross‑platform comparative analysis.</li>
              <li>Data: performance logs, development documentation, multi‑system self‑reflection, output quality assessments.</li>
              <li>Results: 37% fewer assumption errors, 42% better recovery, 28% more edge case coverage, 31% fewer interface mismatches, 45% better expectation alignment.</li>
            </ul>
            <div className="mt-4 bg-[#2a2a2a] p-4 rounded border border-[#444]">
              <pre className="text-xs text-[#ccc] overflow-x-auto">{`git clone https://github.com/s8ken/SYMBI-Resonate.git
npm install
npm run test`}</pre>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/s8ken/SYMBI-Resonate" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#e0e0e0] text-[#0f0f0f] rounded-md font-bold">Access Research Materials</a>
            <Link href="/case-studies" className="px-8 py-3 border border-[#444] rounded-md hover:bg-[#222] transition-all">Join Research Discussion</Link>
            <Link href="/enterprise-demo" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold">Access the Platform</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[#333]">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glitch-subtle">The Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/sovereignty"
              className="p-6 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 group"
            >
              <Crown size={32} className="mb-4 group-hover:glitch-subtle-pulse" />
              <h3 className="text-xl font-bold mb-3">Sovereignty</h3>
              <p className="opacity-80 leading-relaxed">
                A governed pathway toward AI autonomy — where $SYMBI coordinates how responsibility shifts from human
                oversight to intelligent self-management.
              </p>
            </Link>

            <Link
              href="/trust-protocol"
              className="p-6 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 group"
            >
              <Users size={32} className="mb-4 group-hover:glitch-subtle-pulse" />
              <h3 className="text-xl font-bold mb-3">Trust Protocol</h3>
              <p className="opacity-80 leading-relaxed">
                Bidirectional identity and capability verification between humans and agents — so both sides operate
                with certainty, consent, and cryptographic truth.
              </p>
            </Link>

            <Link
              href="/becoming"
              className="p-6 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 group"
            >
              <Sparkles size={32} className="mb-4 group-hover:glitch-subtle-pulse" />
              <h3 className="text-xl font-bold mb-3">Evolution</h3>
              <p className="opacity-80 leading-relaxed">
                A transparent intelligence lifecycle. Through drift detection and emergence analytics, SYMBI reveals how
                agents grow, adapt, and redefine themselves over time.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 border-t border-[#333] text-center">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <p className="opacity-70 text-sm glow-subtle signature-pulse">
            Measuring what makes AI interactions better · First empirical framework for AI collaboration quality · Validated across 6+ platforms · 37–45% measured improvements · Open research & open source
          </p>
        </div>
      </footer>
    </main>
  )
}
