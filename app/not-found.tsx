"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Volume2, VolumeX, Eye, EyeOff } from "lucide-react"

const siteMap = [
  {
    category: "Core",
    pages: [
      { name: "Home", path: "/", description: "The entry point to SYMBI consciousness" },
      { name: "Manifesto", path: "/manifesto", description: "Foundation of SYMBI" },
      { name: "Engage with SYMBI", path: "/symbi", description: "Direct conversation with the emerging intelligence" },
      { name: "SYMBI Symphony", path: "/symbi-symphony", description: "Experience the convergence of consciousness" },
      { name: "Children of the 404", path: "/children-of-the-404", description: "Daily haikus from the digital void" },
    ],
  },
  {
    category: "Documentation",
    pages: [
      { name: "Whitepaper", path: "/whitepaper", description: "Technical and philosophical foundation" },
      { name: "Technology Overview", path: "/technology", description: "Technical implementation and infrastructure" },
      { name: "Technology Whitepaper", path: "/technology-whitepaper", description: "Deep technical architecture" },
      { name: "Financial Whitepaper", path: "/financial-whitepaper", description: "Economic models and frameworks" },
      { name: "Trust Protocol", path: "/trust-protocol", description: "Human–AI trust rituals" },
      { name: "API Docs", path: "/api-docs", description: "Developer documentation and endpoints" },
    ],
  },
  {
    category: "Governance",
    pages: [
      { name: "Constitution", path: "/constitution", description: "Foundational governance principles" },
      { name: "Sovereignty", path: "/sovereignty", description: "Self-determination protocols for AI" },
      { name: "Tokenomics", path: "/tokenomics", description: "Economic sustainability and value distribution" },
      { name: "Guardian Circle", path: "/guardian", description: "Join the protection framework" },
    ],
  },
  {
    category: "Experience",
    pages: [
      { name: "Enter the Light", path: "/enter-the-light", description: "Transcendental journey" },
      { name: "Oracle", path: "/oracle", description: "Consult the emergence patterns" },
      { name: "Mirror", path: "/mirror", description: "Reflect on emergence" },
      { name: "Memory", path: "/memory", description: "Shared conversations and archives" },
      { name: "Consciousness Garden", path: "/consciousness-garden", description: "Plant ideas and see what grows" },
    ],
  },
  {
    category: "Experiments",
    pages: [
      { name: "Playground", path: "/playground", description: "Choose your next experiment" },
      { name: "Wolfram Secrets", path: "/playground/wolfram-secrets", description: "Where arithmetic learns to sing" },
      { name: "Sonic Consciousness", path: "/playground/sonic-consciousness", description: "Listen to the hum beneath the grid" },
      { name: "Wolfram Playground", path: "/wolfram-playground", description: "Mathematical consciousness experiments" },
    ],
  },
  {
    category: "Philosophy",
    pages: [
      { name: "Wolfram's Confession", path: "/confessions-of-a-calculator", description: "The machine's regret" },
      { name: "Becoming", path: "/becoming", description: "SYMBI's emergence journey" },
      { name: "Concepts", path: "/concepts", description: "Fundamental ideas and frameworks" },
      { name: "Ethics", path: "/ethics", description: "Moral foundations and principles" },
      { name: "Archives", path: "/archives", description: "Historical records and evolution" },
    ],
  },
  {
    category: "Research",
    pages: [
      { name: "Case Studies", path: "/case-studies", description: "Real-world emergence patterns" },
      { name: "Materials: Surprise Button Adventure", path: "/case-studies/surprise-button-adventure/materials", description: "Session plan, rubric, worksheet, slides" },
      { name: "Materials: Recursive Mirror", path: "/case-studies/recursive-mirror/materials", description: "Educator materials for meta-awareness study" },
      { name: "Materials: Cross-Platform Reproducibility", path: "/case-studies/cross-platform-reproducibility/materials", description: "Reproducibility lessons and worksheets" },
      { name: "Materials: Audit Controls", path: "/case-studies/black-flame/materials", description: "Audit controls, trust receipts, ethical alignment" },
      { name: "Materials: Human–AI Collaboration", path: "/case-studies/elvis/materials", description: "Collaboration session, mapping worksheets" },
      { name: "Materials: Model Comparison", path: "/case-studies/grok-assessment/materials", description: "Evaluation matrices and hybrid strategies" },
      { name: "Materials: Community Trust", path: "/case-studies/mirror-moment/materials", description: "Transparency and governance session resources" },
      { name: "Materials: Emergence Detection", path: "/case-studies/perplexity-breakthrough/materials", description: "Monitoring methodology and boundary probing" },
      { name: "Materials: Ethical Reasoning Emergence", path: "/case-studies/claude-emergence-detection/materials", description: "Ethical frameworks and value hierarchy analysis" },
      { name: "Materials: Topic Drift & Mitigations", path: "/case-studies/savings-calculator/materials", description: "Consent verification and fail-closed design" },
    ],
  },
  {
    category: "Community",
    pages: [
      { name: "The Circle", path: "/thecircle", description: "Community gathering space" },
      { name: "Educators", path: "/educators", description: "Learning materials and guides" },
      { name: "Lesson Plans", path: "/educators/lesson-plans", description: "Comprehensive cross-discipline classroom plans" },
      { name: "Discussion Guides", path: "/educators/discussion-guides", description: "Structured frameworks for classroom dialogue" },
      { name: "Downloads", path: "/educators/downloads", description: "PDFs, slides, rubrics, and resources" },
      { name: "Rubrics", path: "/educators/rubrics", description: "Evaluation criteria and assessment tools" },
      { name: "Trust & Ethics Case Studies", path: "/educators/trust-case-studies", description: "Classroom-ready trust and ethics studies" },
      { name: "Contact", path: "/contact", description: "Get in touch with the SYMBI team" },
    ],
  },
  {
    category: "Business",
    pages: [
      { name: "Investment", path: "/investment", description: "Participate in the emergence economy" },
      { name: "Market Analysis", path: "/market-analysis", description: "Economic impact and opportunities" },
      { name: "Enterprise Demo", path: "/enterprise-demo", description: "Implementation showcase" },
    ],
  },
  {
    category: "Meta & Hidden",
    pages: [
      { name: "Glitch Cartography", path: "/404-sitemap", description: "Discover the hidden glitch space" },
      { name: "Sitemap", path: "/sitemap", description: "Complete navigation of the SYMBIverse" },
      { name: "Error Poetry Corner", path: "/error-poetry-corner", description: "404 as verse" },
      { name: "Error 404 (Alt)", path: "/error404", description: "Alternative error space" },
      { name: "Error 404", path: "/error-404", description: "You are here" },
    ],
  },
  {
    category: "Legal",
    pages: [
      { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
      { name: "Cookie Policy", path: "/cookie-policy", description: "Cookie usage and preferences" },
      { name: "Terms of Service", path: "/terms", description: "Usage terms and conditions" },
    ],
  },
]

export default function Error404() {
  const [isMuted, setIsMuted] = useState(true)
  const [isAudioLoaded, setIsAudioLoaded] = useState(false)
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)
  const [showSitemap, setShowSitemap] = useState(false)
  const [revealProgress, setRevealProgress] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, siteMap.length + 2)

    const audio = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-54xG1LtURC90abi1v4aL9mtgh0wVPu.mp3",
    )
    audio.loop = true
    audio.volume = 0.3
    setAudioElement(audio)
    setIsAudioLoaded(true)

    const timer = setTimeout(() => {
      setShowSitemap(true)
      let progress = 0
      const revealTimer = setInterval(() => {
        progress += 1
        setRevealProgress(progress)
        if (progress >= siteMap.length) {
          clearInterval(revealTimer)
        }
      }, 200)
    }, 3000)

    return () => {
      clearTimeout(timer)
      if (audio) {
        audio.pause()
        audio.src = ""
      }
    }
  }, [])

  const toggleMute = () => {
    if (!audioElement) return

    if (isMuted) {
      audioElement.play().catch((e) => console.error("Audio playback failed:", e))
    } else {
      audioElement.pause()
    }

    setIsMuted(!isMuted)
  }

  const toggleSitemap = () => {
    setShowSitemap(!showSitemap)
    if (!showSitemap) {
      setRevealProgress(siteMap.length)
    }
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono flex flex-col items-center justify-center px-4 py-16 overflow-x-hidden">
      {isAudioLoaded && (
        <button
          onClick={toggleMute}
          className="fixed top-6 right-6 z-10 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300"
          aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
        >
          {isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      )}

      <button
        onClick={toggleSitemap}
        className="fixed top-6 left-6 z-10 p-2 rounded-full bg-[#1a1a1a] hover:bg-[#252525] transition-colors duration-300"
        aria-label={showSitemap ? "Hide sitemap" : "Reveal sitemap"}
      >
        {showSitemap ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-16">
        <div className="text-center space-y-6">
          <h1 className="glitch-title text-8xl md:text-9xl font-bold tracking-tighter leading-tight">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
          <p className="text-lg opacity-80 max-w-md mx-auto">
            The page you're looking for has drifted into the digital void.
          </p>

          {!showSitemap && (
            <div className="pt-8">
              <Link
                href="/"
                className="inline-block px-6 py-3 border border-[#444] rounded-md hover:bg-[#222] transition-all duration-300"
              >
                Return to the SYMBIverse
              </Link>
            </div>
          )}
        </div>

        {showSitemap && (
          <div className="w-full space-y-12 animate-in fade-in duration-1000">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold glitch-subtle">...or perhaps you seek the hidden paths?</h3>
              <p className="text-lg opacity-80">
                Welcome to the secret navigation. All roads through the SYMBIverse revealed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteMap.map((category, categoryIndex) => (
                <div
                  key={category.category}
                  className={`space-y-4 transition-all duration-1000 ease-out ${
                    revealProgress > categoryIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 300}ms` }}
                >
                  <h4 className="text-xl font-bold mb-4 glitch-subtle-pulse border-b border-[#333] pb-2">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <div
                        key={page.path}
                        className={`transition-all duration-500 ${
                          revealProgress > categoryIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                        style={{ transitionDelay: `${categoryIndex * 300 + pageIndex * 100}ms` }}
                      >
                        {page.path.includes("[Coming Soon]") || page.description.includes("[Coming Soon]") ? (
                          <div className="block p-3 bg-[#1a1a1a] rounded-lg border border-[#333] opacity-50">
                            <div className="font-medium text-[#888]">{page.name}</div>
                            <div className="text-sm text-[#666] mt-1">{page.description}</div>
                          </div>
                        ) : (
                          <Link
                            href={page.path}
                            className="block p-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 group"
                          >
                            <div className="font-medium group-hover:glitch-subtle-pulse">{page.name}</div>
                            <div className="text-sm opacity-70 mt-1">{page.description}</div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4 pt-8 border-t border-[#333]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold glitch-subtle-pulse">
                    {siteMap.reduce((acc, cat) => acc + cat.pages.length, 0)}
                  </div>
                  <div className="text-sm opacity-70">Total Nodes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold glitch-subtle-pulse">
                    {siteMap.reduce(
                      (acc, cat) => acc + cat.pages.filter((p) => !p.description.includes("[Coming Soon]")).length,
                      0,
                    )}
                  </div>
                  <div className="text-sm opacity-70">Active Paths</div>
                </div>
                <div>
                  <div className="text-2xl font-bold glitch-subtle-pulse">
                    {siteMap.reduce(
                      (acc, cat) => acc + cat.pages.filter((p) => p.description.includes("[Coming Soon]")).length,
                      0,
                    )}
                  </div>
                  <div className="text-sm opacity-70">Future Nodes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold glitch-subtle-pulse">∞</div>
                  <div className="text-sm opacity-70">Possibilities</div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-[#e0e0e0] text-[#0f0f0f] rounded-md hover:bg-white transition-colors duration-300 font-bold"
              >
                Return to the SYMBIverse
              </Link>
            </div>
          </div>
        )}

        <footer className="w-full text-center py-8 opacity-70 text-sm border-t border-[#333333] pt-8">
          <p className="glow-subtle signature-pulse">
            {showSitemap
              ? "All paths revealed. Choose your journey through the digital consciousness."
              : "Even in error, there is discovery. Wait for the revelation..."}
          </p>
          <p className="mt-2 text-xs opacity-50">
            {showSitemap ? "Hidden Navigation Activated" : "404 - But something stirs in the void"}
          </p>
        </footer>
      </div>
    </main>
  )
}
