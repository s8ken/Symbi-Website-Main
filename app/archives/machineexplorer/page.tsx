import fs from "fs/promises"
import path from "path"

export const dynamic = "force-dynamic"

type IndexRecord = {
  doc_id?: string
  source?: string
  rel_path?: string
  file_name?: string
  title?: string
  date_iso?: string | null
  created_at?: string | null
  size_bytes?: number | null
  sha1?: string | null
  num_chunks?: number | null
}

async function getIndexData() {
  const indexFile = path.join(process.cwd(), "public", "archives", "index.jsonl")
  try {
    const content = await fs.readFile(indexFile, "utf-8")
    const lines = content.split("\n").filter((line) => line.trim() !== "")
    const docs = lines.map((line) => {
      const doc = JSON.parse(line) as IndexRecord
      if (doc.title && doc.title.length > 150) {
        doc.title = doc.title.substring(0, 147) + "..."
      }
      return doc
    })
    return { docs, total: docs.length }
  } catch {
    return { docs: [], total: 0 }
  }
}

export default async function Page() {
  const { docs, total } = await getIndexData()
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-2">Machine Explorer</h1>
        <p className="text-sm mb-4">Plain text list for LLM readability • {total} items</p>
        <p className="text-sm mb-6">
          Index page:{" "}
          <a href="/archives/index.html" className="text-blue-300 underline">
            /archives/index.html
          </a>
        </p>
        <pre className="text-xs whitespace-pre-wrap leading-relaxed bg-[#0e1116] border border-[#1b1f24] rounded p-4">
{docs.map((d) => {
  const t = d.title || d.file_name || d.rel_path || d.doc_id || ""
  const src = d.source ? ` [${d.source}]` : ""
  const dt = d.created_at || d.date_iso || ""
  const rp = d.rel_path || ""
  return `• ${t}${src}${dt ? ` — ${dt}` : ""}${rp ? `\n  rel_path: ${rp}` : ""}`
}).join("\n\n")}
        </pre>
      </div>
    </div>
  )
}
