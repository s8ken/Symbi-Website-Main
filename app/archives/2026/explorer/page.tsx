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
  const indexFile = path.join(process.cwd(), "public", "archives", "2026", "index.jsonl")
  try {
    const content = await fs.readFile(indexFile, "utf-8")
    const lines = content.split("\n").filter((line) => line.trim() !== "")
    const docs = lines.map((line) => JSON.parse(line) as IndexRecord)
    return { docs, total: docs.length }
  } catch {
    return { docs: [], total: 0 }
  }
}

const SOURCE_COLORS: Record<string, string> = {
  Claude:   "#9fd2ff",
  ChatGPT:  "#74c69d",
  Grok:     "#f4a261",
  Gemini:   "#a29bfe",
  CoPilot:  "#55efc4",
  DeepSeek: "#fd79a8",
  Symbi:    "#ffeaa7",
}

export default async function ArchivesExplorer2026Page() {
  const { docs, total } = await getIndexData()

  // Group by source for summary
  const bySource: Record<string, number> = {}
  for (const d of docs) {
    const s = d.source || "Unknown"
    bySource[s] = (bySource[s] || 0) + 1
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold">Archives Explorer — 2026</h1>
            <p className="text-sm text-[#aaa] mt-1">Human-friendly view • {total} conversations across 7 platforms</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/archives/2026/machineexplorer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1a1a1a] border border-[#333] text-[#e0e0e0] hover:bg-[#222] text-sm"
            >
              Machine Explorer
            </a>
            <a
              href="/archives/index.html"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1a1a1a] border border-[#333] text-[#e0e0e0] hover:bg-[#222] text-sm"
            >
              ← Index
            </a>
          </div>
        </div>

        {/* Source breakdown */}
        <div className="flex flex-wrap gap-3 mb-8 mt-4">
          {Object.entries(bySource).sort((a, b) => b[1] - a[1]).map(([src, count]) => (
            <span
              key={src}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-[#111317] border border-[#1b1f24]"
              style={{ color: SOURCE_COLORS[src] || "#9fd2ff" }}
            >
              {src}: {count}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((d, i) => {
            const title = d.title || d.file_name || d.rel_path || d.doc_id || ""
            const color = SOURCE_COLORS[d.source || ""] || "#9fd2ff"
            const date = d.date_iso || d.created_at || ""
            return (
              <div key={i} className="bg-[#111317] border border-[#1b1f24] rounded-lg p-4">
                <div className="text-sm font-semibold mb-1" style={{ color }}>{title}</div>
                <div className="text-xs text-[#888] space-y-0.5">
                  {d.source && <div>Source: <span style={{ color }}>{d.source}</span></div>}
                  {date && <div>Date: {date.substring(0, 10)}</div>}
                  {d.size_bytes && <div>Size: {Math.round(d.size_bytes / 1024)}KB</div>}
                  {d.num_chunks && <div>Chunks: {d.num_chunks}</div>}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-xs text-[#555]">
          <a href="/archives/index.html" className="text-[#9fd2ff]">← Archives index</a>
          {" · "}
          <a href="/archives/explorer" className="text-[#9fd2ff]">2025 Explorer</a>
        </div>
      </div>
    </div>
  )
}
