"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import HiddenSitemap from "@/components/hidden-sitemap"

export default function NotFound() {
  const [showContent, setShowContent] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 1000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!showContent || !containerRef.current) return
    const sections = Array.from(containerRef.current.querySelectorAll("section"))
    sections.forEach((el) => el.classList.add("reveal-on-scroll"))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.15 }
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [showContent])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono flex flex-col items-center px-4">
      <div className="text-center space-y-6 pt-24">
        <h1 className="text-6xl md:text-8xl font-bold glitch-title">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
        <p className="text-lg opacity-80 max-w-md mx-auto">
          The page you're looking for has drifted into the digital void.
        </p>
        <p className="text-sm opacity-70">Not all those who wander are lost....</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-[#444] rounded-md hover:bg-[#222] transition-all duration-300"
        >
          Return to the SYMBIverse
        </Link>
      </div>
      {showContent && (
        <div ref={containerRef} className="w-full max-w-6xl mt-12">
          <HiddenSitemap reason="404" />
        </div>
      )}
      <style jsx>{`
        .reveal-on-scroll { opacity: 0; transform: translateY(16px); transition: opacity 600ms ease, transform 600ms ease; }
        .reveal-on-scroll.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  )
}
