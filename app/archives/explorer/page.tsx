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
      return doc
    })
    return { docs, total: docs.length }
  } catch {
    return { docs: [], total: 0 }
  }
}

export default async function ArchivesExplorerPage() {
  const { docs, total } = await getIndexData()
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Archives Explorer</h1>
            <p className="text-sm text-[#aaa]">Human-friendly view • {total} items</p>
          </div>
          <a
            href="/archives/machineexplorer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1a1a1a] border border-[#333] text-[#e0e0e0] hover:bg-[#222]"
          >
            Machine Explorer
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d, i) => {
            const title = d.title || d.file_name || d.rel_path || d.doc_id || ""
            return (
              <div key={i} className="bg-[#111317] border border-[#1b1f24] rounded-lg p-4">
                <div className="text-sm text-[#9fd2ff] font-semibold mb-1">{title}</div>
                <div className="text-xs text-[#888]">
                  {d.source ? <span>Source: {d.source}</span> : null}
                  {d.created_at ? <span className="ml-2">Created: {d.created_at}</span> : d.date_iso ? <span className="ml-2">Date: {d.date_iso}</span> : null}
                </div>
                {d.rel_path ? (
                  <div className="text-xs text-[#aaa] mt-2">rel_path: {d.rel_path}</div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
