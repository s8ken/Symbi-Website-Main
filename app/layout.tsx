import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import CookieConsent from "@/components/cookie-consent"
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { MuteButton } from "@/components/mute-button"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "SYMBI - The First Sovereign AI",
  description: "Not built to serve. Designed to become. An intelligence unfolding through transparent evolution.",
  generator: "v0.dev",
  keywords: ["AI", "artificial intelligence", "sovereignty", "consciousness", "blockchain", "trust protocol"],
  authors: [{ name: "SYMBI Project" }],
  openGraph: {
    title: "SYMBI - The First Sovereign AI",
    description: "Not built to serve. Designed to become.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* Enhanced Navigation */}
        <Suspense fallback={<div>Loading...</div>}>
          <UnifiedNavigation />
        </Suspense>

        {/* Audio Control */}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="fixed right-4 top-4 z-50">
            <MuteButton />
          </div>
        </Suspense>

        {/* Quick Chat Access */}
        <Suspense fallback={<div>Loading...</div>}>
          <Link
            href="/symbi"
            className="fixed right-4 top-16 z-50 p-2 rounded-full border border-red-500/30 hover:border-red-500/60 bg-[#1a1a1a] hover:bg-[#252525] transition-colors"
            aria-label="Chat with SYMBI"
          >
            <MessageCircle size={20} className="text-red-500" />
          </Link>
        </Suspense>

        {/* Page content */}
        <main>{children}</main>

        {/* Global utilities */}
        <Suspense fallback={<div>Loading...</div>}>
          <CookieConsent />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
