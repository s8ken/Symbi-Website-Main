import path from "path"
import fs from "fs/promises"

export const dynamic = "force-dynamic"

async function readIfExists(p: string) {
  try {
    return await fs.readFile(p, "utf-8")
  } catch {
    return ""
  }
}

export default async function Page() {
  const dir = path.join(process.cwd(), "public", "archives")
  const part2 = path.join(dir, "all_text_part2.jsonl")

  const content = await readIfExists(part2)

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <div style={{ width: 24, height: 24, background: "linear-gradient(135deg,#56b2ff,#9b5cff)", borderRadius: 6 }} aria-hidden="true" />
        <h1 style={{ fontSize: 18, fontWeight: 600, letterSpacing: 0.2, margin: 0 }}>Symbi Archives — Part 2 Inline</h1>
      </div>
      <div style={{ fontSize: 12, opacity: 0.75, margin: "6px 0 14px" }}>Part 2 raw text rendered inline for LLMs.</div>
      <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <a href="/archives/index.html">Back to index</a>
        <a href="/archives/archives-part2.html">Streaming view</a>
        <a href="/archives/all_text_part2.jsonl">Raw JSONL</a>
      </div>
      <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", background: "#0e1116", border: "1px solid #1b1f24", borderRadius: 10, padding: 16 }}>{content || "No content available."}</pre>
    </div>
  )
}
