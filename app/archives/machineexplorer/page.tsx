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

export default async function MachineExplorerPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { docs, total } = await getIndexData()
  
  // Simple server-side filtering
  const query = (await searchParams).q
  const search = typeof query === 'string' ? query.toLowerCase() : ''
  
  const filteredDocs = search 
    ? docs.filter(d => 
        (d.title || '').toLowerCase().includes(search) || 
        (d.file_name || '').toLowerCase().includes(search) ||
        d.source.toLowerCase().includes(search)
      )
    : docs

  return (
    <div className="max-w-4xl mx-auto p-8 font-mono bg-[#0b0d10] min-h-screen text-[#e7ebef]">
      <header className="mb-8 pb-8 border-b border-[#1b1f24]">
        <Link href="/archives/index" className="text-sm text-[#9fd2ff] hover:underline mb-4 block">← Back to Index</Link>
        <h1 className="text-2xl font-bold mb-2">Machine Explorer</h1>
        <p className="text-[#8b949e] text-sm mb-4">
          Plain HTML list of the {total} full unedited archive conversations. No JavaScript required.
        </p>
        
        <form className="flex gap-2">
          <input 
            type="text" 
            name="q" 
            defaultValue={search}
            placeholder="Filter by title or source..." 
            className="bg-[#0d1117] border border-[#30363d] px-3 py-1 text-[#c9d1d9] flex-1 rounded"
          />
          <button type="submit" className="bg-[#21262d] border border-[#30363d] px-4 py-1 text-[#c9d1d9] rounded hover:bg-[#30363d]">
            Filter
          </button>
        </form>
      </header>

      <div className="space-y-4">
        {filteredDocs.map(doc => (
          <div key={doc.doc_id} className="border border-[#30363d] bg-[#0d1117] p-4 rounded hover:border-[#8b949e]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs uppercase tracking-wider text-[#8b949e] border border-[#30363d] px-2 py-0.5 rounded">
                {doc.source}
              </span>
              {doc.date_iso && (
                <span className="text-xs text-[#8b949e] font-mono">
                  {doc.date_iso.substring(0, 10)}
                </span>
              )}
            </div>
            <h2 className="text-lg font-semibold mb-2">
              <Link href={`/archives/explorer/${doc.doc_id}`} className="text-[#58a6ff] hover:underline">
                {doc.title || doc.file_name}
              </Link>
            </h2>
            <div className="text-xs text-[#8b949e]">
              ID: {doc.doc_id} • {doc.num_chunks} chunks
            </div>
          </div>
        ))}
        
        {filteredDocs.length === 0 && (
          <div className="text-[#8b949e] text-center py-12">
            No documents found matching "{search}"
          </div>
        )}
      </div>
    </div>
  )
}
