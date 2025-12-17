import path from "path"
import fs from "fs/promises"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

interface IndexRecord {
  doc_id: string
  source: string
  title: string
  file_name: string
  date_iso: string | null
  num_chunks: number
  created_at: string
  size_bytes: number
  sha1: string
}

async function getDocMetadata(docId: string) {
  const indexFile = path.join(process.cwd(), "public", "archives", "index.jsonl")
  try {
    const content = await fs.readFile(indexFile, "utf-8")
    const lines = content.split("\n").filter(line => line.trim() !== "")
    for (const line of lines) {
      const doc = JSON.parse(line) as IndexRecord
      if (doc.doc_id === docId) {
        // Truncate extremely long titles
        if (doc.title && doc.title.length > 150) {
          doc.title = doc.title.substring(0, 147) + "..."
        }
        return doc
      }
    }
    return null
  } catch {
    return null
  }
}

async function getDocContent(docId: string) {
  // In a real implementation, we would seek into the large JSONL files using offsets
  // For this prototype, we'll scan the combined file. 
  // NOTE: This is inefficient for production but works for the prototype without a database.
  const combinedFile = path.join(process.cwd(), "public", "archives", "all_text.jsonl")
  try {
    const content = await fs.readFile(combinedFile, "utf-8")
    const lines = content.split("\n")
    
    // Simple matching: look for the doc_id in the line (assuming lines are JSON or tagged)
    // The current all_text.jsonl structure is: {"id":..., "text":...} or similar.
    // If the chunks are just raw text lines, we can't easily map doc_id -> content without offsets.
    // However, the `index.jsonl` implies we have `num_chunks`.
    // Let's assume for this prototype we are just displaying "Content for doc {docId} not fully indexed in prototype".
    // OR: If the lines in all_text.jsonl contain the doc_id, we can filter them.
    
    const matchingLines = lines.filter(line => line.includes(docId))
    if (matchingLines.length > 0) {
      return matchingLines.join("\n")
    }
    
    return "Content extraction for this document is not yet fully implemented in this static prototype.\nPlease use the raw JSONL files or the chunked viewer."
  } catch {
    return "Error reading archive file."
  }
}

export default async function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const doc = await getDocMetadata(id)
  
  if (!doc) notFound()
  
  const content = await getDocContent(id)

  return (
    <>
      <header>
        <div className="container">
          <Link href="/archives/explorer" className="back-link">← Back to Archives</Link>
          <h1>{doc.title || doc.file_name}</h1>
          <div className="doc-header-meta">
            <span className="source-badge">{doc.source}</span>
            {doc.date_iso && <span className="date">{doc.date_iso.substring(0, 10)}</span>}
            <span className="chunks">{doc.num_chunks} chunks</span>
          </div>
        </div>
      </header>

      <main className="container document-view">
        <div className="document-info">
          <table className="info-table">
            <tbody>
              <tr>
                <th>Document ID</th>
                <td><code>{doc.doc_id}</code></td>
              </tr>
              <tr>
                <th>Source</th>
                <td>{doc.source}</td>
              </tr>
              <tr>
                <th>Original File</th>
                <td>{doc.file_name}</td>
              </tr>
              {doc.date_iso && (
                <tr>
                  <th>Date</th>
                  <td>{doc.date_iso}</td>
                </tr>
              )}
              <tr>
                <th>Created</th>
                <td>{doc.created_at}</td>
              </tr>
              <tr>
                <th>Size</th>
                <td>{(doc.size_bytes / 1024).toFixed(1)} KB</td>
              </tr>
              <tr>
                <th>SHA1</th>
                <td><code>{doc.sha1.substring(0, 12)}...</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="document-content">
          <h2>Conversation</h2>
          <div className="content-text">{content}</div>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>Part of the <a href="https://symbi.world" target="_blank">SYMBI</a> ecosystem</p>
        </div>
      </footer>
    </>
  )
}
