import path from "path"
import fs from "fs/promises"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

// 486 lines total / 20 chunks = ~25 lines per chunk
const LINES_PER_CHUNK = 25

async function getChunkContent(chunkId: number) {
  const filePath = path.join(process.cwd(), "public", "archives", "all_text.jsonl")
  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    const lines = fileContent.split("\n").filter(line => line.trim() !== "")
    
    const totalChunks = Math.ceil(lines.length / LINES_PER_CHUNK)
    if (chunkId < 1 || chunkId > totalChunks) return null

    const start = (chunkId - 1) * LINES_PER_CHUNK
    const end = start + LINES_PER_CHUNK
    const chunkLines = lines.slice(start, end)
    
    return {
      content: chunkLines.join("\n"),
      totalChunks,
      totalLines: lines.length,
      range: `${start + 1}-${Math.min(end, lines.length)}`
    }
  } catch {
    return null
  }
}

export default async function ChunkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const chunkId = parseInt(id)
  
  if (isNaN(chunkId)) notFound()
  
  const data = await getChunkContent(chunkId)
  if (!data) notFound()

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <div style={{ width: 24, height: 24, background: "linear-gradient(135deg,#56b2ff,#9b5cff)", borderRadius: 6 }} aria-hidden="true" />
        <h1 style={{ fontSize: 18, fontWeight: 600, letterSpacing: 0.2, margin: 0 }}>
          Symbi Archives — Chunk {chunkId}/{data.totalChunks}
        </h1>
      </div>
      
      <div style={{ fontSize: 12, opacity: 0.75, margin: "6px 0 14px" }}>
        Lines {data.range} of {data.totalLines}. Rendered inline for LLM accessibility.
      </div>
      
      <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <a href="/archives/index.html">Back to index</a>
        {chunkId > 1 && <a href={`/archives/chunk/${chunkId - 1}`}>Previous Chunk</a>}
        {chunkId < data.totalChunks && <a href={`/archives/chunk/${chunkId + 1}`}>Next Chunk</a>}
      </div>

      <pre style={{ 
        whiteSpace: "pre-wrap", 
        wordWrap: "break-word", 
        background: "#0e1116", 
        border: "1px solid #1b1f24", 
        borderRadius: 10, 
        padding: 16 
      }}>
        {data.content}
      </pre>
    </div>
  )
}
