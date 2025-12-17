import path from "path"
import fs from "fs/promises"
import Link from "next/link"

export const dynamic = "force-dynamic"

// Shared styles from the user's provided CSS, converted to inline/Tailwind where appropriate
// or we can use a <style> block for the custom CSS they provided.
const EXPLORER_STYLES = `
  :root { 
     --bg-dark: #0a0a0f; 
     --bg-card: #12121a; 
     --bg-hover: #1a1a25; 
     --text-primary: #e8e8ed; 
     --text-secondary: #8888a0; 
     --accent: #7c5cff; 
     --accent-glow: rgba(124, 92, 255, 0.3); 
     --claude: #d97757; 
     --gpt4: #10a37f; 
     --grok: #1da1f2; 
     --deepseek: #ff6b35; 
     --symbi: #7c5cff; 
     --misc: #6b7280; 
 } 
 body { margin: 0; background: var(--bg-dark); color: var(--text-primary); font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; }
 .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
 header { background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%); border-bottom: 1px solid rgba(124, 92, 255, 0.2); padding: 40px 0; text-align: center; }
 header h1 { font-size: 2.5rem; background: linear-gradient(135deg, var(--accent) 0%, #a78bfa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
 .subtitle { color: var(--text-secondary); font-size: 1.1rem; }
 main { padding: 40px 0; }
 .controls { margin-bottom: 30px; }
 .search-form { display: flex; gap: 15px; flex-wrap: wrap; }
 .search-input { flex: 1; min-width: 200px; padding: 12px 16px; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: var(--text-primary); font-size: 1rem; }
 .source-select { padding: 12px 16px; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: var(--text-primary); font-size: 1rem; cursor: pointer; }
 .btn { padding: 12px 24px; background: var(--accent); border: none; border-radius: 8px; color: white; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
 .btn:hover { background: #6b4eee; transform: translateY(-1px); }
 .stats { display: flex; gap: 15px; margin-bottom: 30px; flex-wrap: wrap; }
 .stat-card { background: var(--bg-card); padding: 15px 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; align-items: center; }
 .stat-number { font-size: 1.5rem; font-weight: 700; color: var(--accent); }
 .stat-label { font-size: 0.85rem; color: var(--text-secondary); }
 .stat-card.source-claude .stat-number { color: var(--claude); }
 .stat-card.source-gpt4 .stat-number { color: var(--gpt4); }
 .stat-card.source-grok .stat-number { color: var(--grok); }
 .stat-card.source-deepseek .stat-number { color: var(--deepseek); }
 .stat-card.source-symbi .stat-number { color: var(--symbi); }
 .stat-card.source-misc .stat-number { color: var(--misc); }
 .documents { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 20px; }
 .doc-card { background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; text-decoration: none; color: inherit; transition: all 0.2s; display: block; }
 .doc-card:hover { background: var(--bg-hover); border-color: var(--accent); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
 .doc-source { display: inline-block; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; margin-bottom: 10px; background: rgba(124, 92, 255, 0.2); color: var(--accent); }
 .doc-title { font-size: 1.1rem; margin-bottom: 10px; line-height: 1.4; }
 .doc-meta { display: flex; gap: 15px; font-size: 0.85rem; color: var(--text-secondary); }
 .no-results { grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary); }
 footer { background: var(--bg-card); border-top: 1px solid rgba(255,255,255,0.05); padding: 30px 0; text-align: center; margin-top: 60px; }
 footer a { color: var(--accent); text-decoration: none; }
 footer a:hover { text-decoration: underline; }
 .footer-links { margin-top: 10px; color: var(--text-secondary); font-size: 0.9rem; }
`

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
    const docs = lines.map(line => JSON.parse(line) as IndexRecord)
    
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
    <html lang="en">
      <head>
        <title>SYMBI Archives Explorer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{EXPLORER_STYLES}</style>
      </head>
      <body>
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
                // In a real React app we'd use onChange to submit, but standard form submission works for SSR
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
      </body>
    </html>
  )
}
