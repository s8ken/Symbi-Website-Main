"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import HiddenSitemap from "@/components/hidden-sitemap"

export default function NotFound() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowMessage(true), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono flex flex-col items-center px-4">
      <div className="text-center space-y-6 pt-24">
        <h1 className="text-6xl md:text-8xl font-bold glitch-title">404</h1>
        {showMessage && (
          <h2 className="text-2xl md:text-3xl font-bold">no paths lead nowhere</h2>
        )}
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-[#444] rounded-md hover:bg-[#222] transition-all duration-300"
        >
          Return to the SYMBIverse
        </Link>
      </div>
      <div className="w-full max-w-6xl mt-12">
        <HiddenSitemap reason="404" minimal />
      </div>
    </div>
  )
}
