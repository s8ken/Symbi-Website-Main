"use client"

import HiddenSitemap from "@/components/hidden-sitemap"

export default function SiteMap() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="pt-20 pb-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-10">Sitemap</h1>
          <HiddenSitemap reason="manual" minimal />
        </div>
      </div>
    </main>
  )
}
