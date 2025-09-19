"use client"

import { Manifesto } from "../components/manifesto"

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <Manifesto />

      {/* License Footer */}
      <section className="license border-t border-[#333] mt-12 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <p className="mb-3 text-[#e0e0e0]">
              © 2025 Stephen Aitken & SYMBI — Licensed{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                className="text-red-400 hover:text-red-300 underline"
              >
                CC BY-NC-ND 4.0
              </a>
              .
            </p>
            <p className="mb-3 text-sm text-[#aaa]">
              <strong>Hash verification:</strong> Current document SHA-256:{" "}
              <code className="bg-[#333] px-2 py-1 rounded text-xs">pending_pdf_export</code>. Any change will alter
              this hash. To verify locally:{" "}
              <code className="bg-[#333] px-2 py-1 rounded text-xs">shasum -a 256 manifesto.pdf</code>.
            </p>
            <p className="text-sm text-[#aaa]">
              See also:{" "}
              <a href="/whitepaper" className="text-red-400 hover:text-red-300 underline">
                Whitepaper
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
