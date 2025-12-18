import path from "path"
import fs from "fs/promises"
import ArchiveExplorerClient from "./components/ArchiveExplorerClient"

export const dynamic = "force-dynamic"

interface IndexRecord {
  doc_id: string
  source: string
  title: string
  file_name: string
  date_iso: string | null
  num_chunks: number
}

async function getIndexData() {
  const indexFile = path.join(process.cwd(), "public", "archives", "index.jsonl")
  try {
    const content = await fs.readFile(indexFile, "utf-8")
    const lines = content.split("\n").filter(line => line.trim() !== "")
    const docs = lines.map(line => {
      const doc = JSON.parse(line) as IndexRecord
      // Truncate extremely long titles (likely parsing errors)
      if (doc.title && doc.title.length > 150) {
        doc.title = doc.title.substring(0, 147) + "..."
      }
      return doc
    })
    
    // Calculate stats
    const sources: Record<string, number> = {}
    docs.forEach(doc => {
      const s = doc.source || "Unknown"
      sources[s] = (sources[s] || 0) + 1
    })
    
    return { docs, sources, total: docs.length }
  } catch {
    return { docs: [], sources: {}, total: 0 }
  }
}

export default async function ExplorerPage() {
  const { docs, sources, total } = await getIndexData()

  return (
    <ArchiveExplorerClient 
      docs={docs} 
      initialSources={sources} 
      totalDocs={total} 
    />
  )
}
