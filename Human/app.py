from flask import Flask, render_template, request, jsonify
import json
import re
from pathlib import Path

app = Flask(__name__, static_folder='static', static_url_path='/static')

CHUNKS_DIR = Path('chunks')
INDEX_FILE = Path('index.jsonl')

def clean_title(title):
    """Clean quoted-printable encoding artifacts from titles"""
    if not title:
        return title
    title = re.sub(r'=\r?\n', '', title)
    title = re.sub(r'=\s+', ' ', title)
    title = title.replace('=3D', '=')
    return title.strip()

def load_index():
    """Load all documents from index.jsonl"""
    docs = []
    if INDEX_FILE.exists():
        with open(INDEX_FILE, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line:
                    try:
                        doc = json.loads(line)
                        doc['title'] = clean_title(doc.get('title', ''))
                        docs.append(doc)
                    except:
                        continue
    return docs

def get_document_content(doc_id, num_chunks):
    """Load all chunks for a document and concatenate"""
    content = []
    for i in range(num_chunks):
        chunk_path = CHUNKS_DIR / f'{doc_id}_{i}.txt'
        if chunk_path.exists():
            with open(chunk_path, 'r', encoding='utf-8', errors='ignore') as f:
                content.append(f.read())
    return '\n'.join(content)

def get_sources():
    """Get unique sources from index"""
    docs = load_index()
    sources = {}
    for doc in docs:
        src = doc.get('source', 'Unknown')
        sources[src] = sources.get(src, 0) + 1
    return dict(sorted(sources.items()))

@app.route('/')
def index():
    docs = load_index()
    sources = get_sources()
    
    source_filter = request.args.get('source', '')
    search = request.args.get('search', '').lower()
    
    filtered = docs
    if source_filter:
        filtered = [d for d in filtered if d.get('source') == source_filter]
    if search:
        filtered = [d for d in filtered if search in d.get('title', '').lower() or search in d.get('file_name', '').lower()]
    
    filtered.sort(key=lambda x: x.get('title', ''))
    
    return render_template('index.html', 
                         docs=filtered, 
                         sources=sources,
                         current_source=source_filter,
                         current_search=search,
                         total=len(docs))

@app.route('/doc/<doc_id>')
def view_document(doc_id):
    docs = load_index()
    doc = next((d for d in docs if d.get('doc_id') == doc_id), None)
    
    if not doc:
        return "Document not found", 404
    
    content = get_document_content(doc_id, doc.get('num_chunks', 0))
    
    return render_template('document.html', doc=doc, content=content)

@app.route('/api/stats')
def api_stats():
    docs = load_index()
    sources = get_sources()
    total_chunks = sum(d.get('num_chunks', 0) for d in docs)
    return jsonify({
        'total_documents': len(docs),
        'total_chunks': total_chunks,
        'sources': sources
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
