"use client"

import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
        <p className="text-[#ccc] mb-6">This site is provided for research, educational, and community purposes. By using it, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
          <li>Respect privacy and data sovereignty.</li>
          <li>Avoid misuse or attempts to harm systems or users.</li>
          <li>Comply with applicable laws and institutional policies.</li>
        </ul>
        <p className="text-[#999] mt-6">See also <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>.</p>
      </div>
    </div>
  )
}

