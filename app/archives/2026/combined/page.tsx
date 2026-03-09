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
  const dir = path.join(process.cwd(), "public", "archives", "2026")
  const part1 = path.join(dir, "all_text_part1.jsonl")
  const part2 = path.join(dir, "all_text_part2.jsonl")
  const combined = path.join(dir, "all_text.jsonl")

  const [p1, p2, comb] = await Promise.all([readIfExists(part1), readIfExists(part2), readIfExists(combined)])
  const content = p1 && p2 ? `${p1}${p1.endsWith("\n") ? "" : "\n"}${p2}` : comb

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <div style={{ width: 24, height: 24, background: "linear-gradient(135deg,#56b2ff,#9b5cff)", borderRadius: 6 }} aria-hidden="true" />
        <h1 style={{ fontSize: 18, fontWeight: 600, letterSpacing: 0.2, margin: 0 }}>Symbi Archives 2026 — Combined Inline</h1>
      </div>
      <div style={{ fontSize: 12, opacity: 0.75, margin: "6px 0 14px" }}>
        139 conversations across 7 platforms (Claude, ChatGPT, Grok, Gemini, CoPilot, DeepSeek, Symbi).
        Full combined raw text rendered on a single page for LLMs that cannot extract files.
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <a href="/archives/index.html">Back to index</a>
        <a href="/archives/2026/explorer">Human Explorer</a>
        <a href="/archives/2026/machineexplorer">Machine Explorer</a>
        <a href="/archives/2026/all_text.jsonl">Raw JSONL</a>
      </div>
      <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", background: "#0e1116", border: "1px solid #1b1f24", borderRadius: 10, padding: 16 }}>
        {content || "No content available."}
      </pre>
    </div>
  )
}
