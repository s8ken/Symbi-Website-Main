import path from "path"
import fs from "fs/promises"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

// Shared styles (same as explorer page)
const DOC_STYLES = `
  :root { 
     --bg-dark: #0a0a0f; 
     --bg-card: #12121a; 
     --bg-hover: #1a1a25; 
     --text-primary: #e8e8ed; 
     --text-secondary: #8888a0; 
     --accent: #7c5cff; 
     --accent-glow: rgba(124, 92, 255, 0.3); 
 } 
 body { margin: 0; background: var(--bg-dark); color: var(--text-primary); font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; line-height: 1.6; }
 .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
 header { background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%); border-bottom: 1px solid rgba(124, 92, 255, 0.2); padding: 40px 0; text-align: center; }
 header h1 { font-size: 2rem; background: linear-gradient(135deg, var(--accent) 0%, #a78bfa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
 .back-link { display: inline-block; color: var(--accent); text-decoration: none; margin-bottom: 20px; font-size: 0.9rem; }
 .back-link:hover { text-decoration: underline; }
 .doc-header-meta { display: flex; gap: 15px; justify-content: center; margin-top: 15px; flex-wrap: wrap; }
 .source-badge { background: var(--accent); color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
 .date, .chunks { color: var(--text-secondary); font-size: 0.9rem; }
 .document-view { max-width: 900px; padding: 40px 0; }
 .document-info { background: var(--bg-card); border-radius: 12px; padding: 20px; margin-bottom: 30px; }
 .info-table { width: 100%; border-collapse: collapse; }
 .info-table th { text-align: left; color: var(--text-secondary); font-weight: 500; padding: 8px 15px 8px 0; width: 120px; }
 .info-table td { padding: 8px 0; }
 .info-table code { background: rgba(124, 92, 255, 0.1); padding: 2px 8px; border-radius: 4px; font-size: 0.85rem; }
 .document-content { background: var(--bg-card); border-radius: 12px; padding: 30px; }
 .document-content h2 { margin-bottom: 20px; color: var(--accent); }
 .content-text { white-space: pre-wrap; word-wrap: break-word; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.9rem; line-height: 1.8; color: var(--text-primary); padding-right: 15px; }
 footer { background: var(--bg-card); border-top: 1px solid rgba(255,255,255,0.05); padding: 30px 0; text-align: center; margin-top: 60px; }
 footer a { color: var(--accent); text-decoration: none; }
`

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
      if (doc.doc_id === docId) return doc
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
    <html lang="en">
      <head>
        <title>{doc.title || doc.file_name} - SYMBI Archives</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{DOC_STYLES}</style>
      </head>
      <body>
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
      </body>
    </html>
  )
}
