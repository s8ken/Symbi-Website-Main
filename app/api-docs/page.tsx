"use client"

import Link from "next/link"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
        <p className="text-[#ccc] mb-6">Formal API docs are in preparation. In the meantime, refer to:</p>
        <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
          <li><Link href="/technology-whitepaper" className="text-purple-400 hover:text-purple-300">Technology Whitepaper</Link></li>
          <li><Link href="/whitepaper" className="text-purple-400 hover:text-purple-300">Research Whitepaper</Link></li>
          <li><Link href="/technology" className="text-purple-400 hover:text-purple-300">Technology Overview</Link></li>
        </ul>
      </div>
    </div>
  )
}

