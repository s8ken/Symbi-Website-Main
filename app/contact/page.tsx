"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function submitForm(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent("Contact from SYMBI.world")
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:stephen@symbi.world?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to SYMBI.world
          </Link>
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-[#ccc]">We’d love to hear from you. Send us a message using the form below.</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <form onSubmit={submitForm} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] space-y-4">
            <div>
              <label className="block text-sm text-[#aaa] mb-2">Your Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Lovelace" required />
            </div>
            <div>
              <label className="block text-sm text-[#aaa] mb-2">Your Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#aaa] mb-2">Message</label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Mail size={16} className="mr-2" /> Send Email
              </Button>
              <span className="text-[#999] text-sm">Sends via your email client to stephen@symbi.world</span>
            </div>
          </form>

          {submitted && (
            <div className="mt-6 bg-[#0f0f0f] border border-[#333] p-4 rounded flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              <div>
                <p className="text-[#e0e0e0] font-medium">Ready to send</p>
                <p className="text-[#999] text-sm">Your email client should open with your message pre-filled.</p>
              </div>
            </div>
          )}

          <div className="mt-8 text-sm text-[#999]">
            Or email us directly at <a className="text-purple-400" href="mailto:stephen@symbi.world">stephen@symbi.world</a>.
          </div>
        </div>
      </div>
    </div>
  )
}

