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

interface ConversationSegment {
  speaker: string
  text: string
  type: 'user' | 'ai' | 'symbi' | 'misc'
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

async function getDocContent(docId: string): Promise<string> {
  const combinedFile = path.join(process.cwd(), "public", "archives", "all_text.jsonl")
  try {
    const content = await fs.readFile(combinedFile, "utf-8")
    const lines = content.split("\n")
    
    for (const line of lines) {
      if (!line.trim()) continue;
      if (line.includes(docId)) {
        try {
          const json = JSON.parse(line);
          if (json.doc_id === docId) {
            return json.text || "";
          }
        } catch (e) {
          continue;
        }
      }
    }
    
    return "Content not found in archives."
  } catch {
    return "Error reading archive file."
  }
}

function parseConversation(fullText: string): ConversationSegment[] {
  const segments: ConversationSegment[] = [];
  const text = fullText.replace(/\r\n/g, "\n");
  
  // Regex matches "You said:", "Symbi said:", etc. at start of line or after double newline
  const regex = /(?:^|\n\n)(You|Symbi|ChatGPT|System|User|Assistant|Model) said:\n\n?/g;
  
  let match;
  let matches = [];
  
  // Collect all matches first
  while ((match = regex.exec(text)) !== null) {
      matches.push({
          speaker: match[1],
          index: match.index,
          length: match[0].length
      });
  }
  
  if (matches.length === 0) {
      return [{ speaker: "Document", text: text, type: 'misc' }];
  }
  
  // Handle preamble (text before first speaker)
  if (matches[0].index > 0) {
       segments.push({
          speaker: "Preamble",
          text: text.substring(0, matches[0].index).trim(),
          type: 'misc'
      });
  }
  
  // Process segments
  for (let i = 0; i < matches.length; i++) {
      const current = matches[i];
      const next = matches[i + 1];
      
      const start = current.index + current.length;
      const end = next ? next.index : text.length;
      
      const content = text.substring(start, end).trim();
      
      let type: ConversationSegment['type'] = 'misc';
      const lowerSpeaker = current.speaker.toLowerCase();
      
      if (lowerSpeaker === 'you' || lowerSpeaker === 'user') {
          type = 'user';
      } else if (lowerSpeaker === 'symbi') {
          type = 'symbi';
      } else if (['chatgpt', 'assistant', 'model', 'system'].includes(lowerSpeaker)) {
          type = 'ai';
      }
      
      segments.push({
          speaker: current.speaker,
          text: content,
          type: type
      });
  }
  
  return segments;
}

export default async function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const doc = await getDocMetadata(id)
  
  if (!doc) notFound()
  
  const rawContent = await getDocContent(id)
  const conversation = parseConversation(rawContent)

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
          <div className="conversation-container">
            {conversation.map((segment, idx) => (
              <div key={idx} className={`chat-message ${segment.type}`}>
                <div className="chat-header">{segment.speaker}</div>
                <div className="content-text">{segment.text}</div>
              </div>
            ))}
          </div>
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
