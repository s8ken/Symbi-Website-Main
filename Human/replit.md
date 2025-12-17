# Symbi Archives

## Overview
LLM-ready archive of AI conversation data. This project processes and indexes conversation archives from various AI sources (Claude, GPT-4, Grok, DeepSeek, Symbi) into text chunks suitable for LLM training and analysis.

## Project Structure
- `index.jsonl` - Document metadata index with source, titles, dates, and SHA1 hashes
- `chunks/` - Text-only chunks (~4000 chars each) from processed documents
- `tools/` - Python processing utilities:
  - `extract_archives.py` - Extract HTML archives to chunked text
  - `dedupe_repo.py` - Remove duplicate documents using SHA1/text hashing
  - `pack_release.py` - Create release tarball
- `main.py` - Project info script showing stats and available commands

## Current State
- **Documents Indexed**: 486
- **Total Chunks**: 10,149
- **Sources**: Claude (45), GPT4 (30), Grok (12), Symbi (68), DeepSeek (1), Misc (330)

## Running
```bash
python main.py              # Show project info
python tools/dedupe_repo.py # Remove duplicates
python tools/pack_release.py # Create release tarball
```

## Technology
- Python 3.11
- Standard library only (json, gzip, hashlib, tarfile)
