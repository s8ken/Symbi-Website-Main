import path from "path"
import fs from "fs/promises"
import Link from "next/link"

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

export default async function ExplorerPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; source?: string }>
}) {
  const { search, source } = await searchParams
  const { docs, sources, total } = await getIndexData()

  // Filter docs
  let filteredDocs = docs
  if (source) {
    filteredDocs = filteredDocs.filter(d => d.source === source)
  }
  if (search) {
    const q = search.toLowerCase()
    filteredDocs = filteredDocs.filter(d => 
      (d.title || "").toLowerCase().includes(q) || 
      (d.file_name || "").toLowerCase().includes(q)
    )
  }

  return (
    <>
      <header>
        <div className="container">
          <h1>SYMBI Archives</h1>
          <p className="subtitle">{total} conversations documenting the birth and evolution of SYMBI</p>
        </div>
      </header>

      <main className="container">
        <div className="controls">
          <form className="search-form">
            <input 
              type="text" 
              name="search" 
              placeholder="Search conversations..." 
              defaultValue={search || ""} 
              className="search-input" 
            />
            <select 
              name="source" 
              className="source-select" 
              defaultValue={source || ""}
            >
              <option value="">All Sources ({total})</option>
              {Object.entries(sources).map(([s, count]) => (
                <option key={s} value={s}>{s} ({count})</option>
              ))}
            </select>
            <button type="submit" className="btn">Filter</button>
            {/* Reset link */}
            {(search || source) && (
              <Link href="/archives/explorer" className="btn" style={{ background: '#333' }}>Reset</Link>
            )}
          </form>
        </div>

        <div className="stats">
          <div className="stat-card">
            <span className="stat-number">{filteredDocs.length}</span>
            <span className="stat-label">{(search || source) ? "Filtered" : "Total"} Documents</span>
          </div>
          {Object.entries(sources).map(([s, count]) => (
            <div key={s} className={`stat-card source-${s.toLowerCase()}`}>
              <span className="stat-number">{count}</span>
              <span className="stat-label">{s}</span>
            </div>
          ))}
        </div>

        <div className="documents">
          {filteredDocs.map(doc => (
            <Link key={doc.doc_id} href={`/archives/explorer/${doc.doc_id}`} className="doc-card">
              <div className="doc-source">{doc.source}</div>
              <h3 className="doc-title">{doc.title || doc.file_name}</h3>
              <div className="doc-meta">
                {doc.date_iso && (
                  <span className="doc-date">{doc.date_iso.substring(0, 10)}</span>
                )}
                <span className="doc-chunks">{doc.num_chunks} chunks</span>
              </div>
            </Link>
          ))}
          
          {filteredDocs.length === 0 && (
            <div className="no-results">
              <p>No documents found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <footer>
        <div className="container">
          <p>Part of the <a href="https://symbi.world" target="_blank">SYMBI</a> ecosystem</p>
          <p className="footer-links">
            <a href="https://symbi.world" target="_blank">symbi.world</a> | 
            <a href="https://gammatria.com" target="_blank">gammatria.com</a> | 
            <a href="https://yseeku.com" target="_blank">yseeku.com</a>
          </p>
        </div>
      </footer>
    </>
  )
}
