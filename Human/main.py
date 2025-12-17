#!/usr/bin/env python3
"""LLM-ready Symbi Archives - Project Info"""

import os
import json
from pathlib import Path

def count_chunks():
    chunks_dir = Path('chunks')
    if not chunks_dir.exists():
        return 0
    return len([f for f in chunks_dir.iterdir() if f.is_file() and f.suffix == '.txt'])

def load_index_summary():
    index_path = Path('index.jsonl')
    if not index_path.exists():
        return None
    
    sources = {}
    total = 0
    with open(index_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                rec = json.loads(line)
                source = rec.get('source', 'Unknown')
                sources[source] = sources.get(source, 0) + 1
                total += 1
            except:
                continue
    return {'total': total, 'sources': sources}

def main():
    print("=" * 60)
    print("LLM-ready Symbi Archives")
    print("=" * 60)
    print()
    
    print("Project Structure:")
    print("  - index.jsonl: Document metadata index")
    print("  - chunks/: Text-only chunks (gzipped or plain text)")
    print("  - tools/: Processing utilities")
    print()
    
    chunk_count = count_chunks()
    print(f"Chunks Found: {chunk_count}")
    
    summary = load_index_summary()
    if summary:
        print(f"Documents Indexed: {summary['total']}")
        print("Sources:")
        for source, count in sorted(summary['sources'].items()):
            print(f"  - {source}: {count}")
    else:
        print("Index: Not found or empty")
    
    print()
    print("Available Tools:")
    print("  python tools/extract_archives.py  - Extract HTML archives to chunks")
    print("  python tools/dedupe_repo.py       - Remove duplicate documents")
    print("  python tools/pack_release.py      - Create release tarball")
    print()
    print("=" * 60)

if __name__ == '__main__':
    main()
