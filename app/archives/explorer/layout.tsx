import React from 'react'

const SHARED_STYLES = `
  /* Reset & Root Variables */
  .human-explorer-root {
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
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .human-explorer-root * {
    box-sizing: border-box;
  }

  .human-explorer-root .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Header */
  .human-explorer-root header {
    background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%);
    border-bottom: 1px solid rgba(124, 92, 255, 0.2);
    padding: 40px 0;
    text-align: center;
  }

  .human-explorer-root header h1 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--accent) 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
    display: inline-block;
  }

  .human-explorer-root .subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
  }

  .human-explorer-root main {
    padding: 40px 0;
  }

  /* Controls & Search */
  .human-explorer-root .controls {
    margin-bottom: 30px;
  }

  .human-explorer-root .search-form {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .human-explorer-root .search-input {
    flex: 1;
    min-width: 200px;
    padding: 12px 16px;
    background: var(--bg-card);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
  }

  .human-explorer-root .search-input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
  }

  .human-explorer-root .source-select {
    padding: 12px 16px;
    background: var(--bg-card);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
    cursor: pointer;
  }

  .human-explorer-root .btn {
    padding: 12px 24px;
    background: var(--accent);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .human-explorer-root .btn:hover {
    background: #6b4eee;
    transform: translateY(-1px);
  }

  /* Stats */
  .human-explorer-root .stats {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }

  .human-explorer-root .stat-card {
    background: var(--bg-card);
    padding: 15px 20px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .human-explorer-root .stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
  }

  .human-explorer-root .stat-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .human-explorer-root .stat-card.source-claude .stat-number { color: var(--claude); }
  .human-explorer-root .stat-card.source-gpt4 .stat-number { color: var(--gpt4); }
  .human-explorer-root .stat-card.source-grok .stat-number { color: var(--grok); }
  .human-explorer-root .stat-card.source-deepseek .stat-number { color: var(--deepseek); }
  .human-explorer-root .stat-card.source-symbi .stat-number { color: var(--symbi); }
  .human-explorer-root .stat-card.source-misc .stat-number { color: var(--misc); }

  /* Documents Grid */
  .human-explorer-root .documents {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
  }

  .human-explorer-root .doc-card {
    background: var(--bg-card);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 20px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
    display: block;
  }

  .human-explorer-root .doc-card:hover {
    background: var(--bg-hover);
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  }

  .human-explorer-root .doc-source {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
    background: rgba(124, 92, 255, 0.2);
    color: var(--accent);
  }

  .human-explorer-root .doc-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .human-explorer-root .doc-meta {
    display: flex;
    gap: 15px;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .human-explorer-root .no-results {
    grid-column: 1 / -1;
    text-align: center;
    padding: 60px 20px;
    color: var(--text-secondary);
  }

  /* Document View Specifics */
  .human-explorer-root .back-link {
    display: inline-block;
    color: var(--accent);
    text-decoration: none;
    margin-bottom: 20px;
    font-size: 0.9rem;
  }

  .human-explorer-root .back-link:hover {
    text-decoration: underline;
  }

  .human-explorer-root .doc-header-meta {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 15px;
    flex-wrap: wrap;
  }

  .human-explorer-root .source-badge {
    background: var(--accent);
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .human-explorer-root .date, .human-explorer-root .chunks {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .human-explorer-root .document-view {
    max-width: 900px;
    margin: 0 auto;
  }

  .human-explorer-root .document-info {
    background: var(--bg-card);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
  }

  .human-explorer-root .info-table {
    width: 100%;
    border-collapse: collapse;
  }

  .human-explorer-root .info-table th {
    text-align: left;
    color: var(--text-secondary);
    font-weight: 500;
    padding: 8px 15px 8px 0;
    width: 120px;
  }

  .human-explorer-root .info-table td {
    padding: 8px 0;
  }

  .human-explorer-root .info-table code {
    background: rgba(124, 92, 255, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.85rem;
  }

  .human-explorer-root .document-content {
    background: var(--bg-card);
    border-radius: 12px;
    padding: 30px;
  }

  .human-explorer-root .document-content h2 {
    margin-bottom: 20px;
    color: var(--accent);
  }

  .human-explorer-root .content-text {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-primary);
    max-height: 70vh;
    overflow-y: auto;
    padding-right: 15px;
  }

  /* Chat Bubbles */
  .human-explorer-root .chat-message {
    margin-bottom: 25px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.05);
    background: rgba(255,255,255,0.02);
  }

  .human-explorer-root .chat-message.user {
    border-left: 3px solid var(--accent);
    background: linear-gradient(90deg, rgba(124, 92, 255, 0.05) 0%, rgba(0,0,0,0) 100%);
  }

  .human-explorer-root .chat-message.ai {
    border-left: 3px solid var(--claude);
  }
  
  .human-explorer-root .chat-message.symbi {
    border-left: 3px solid var(--symbi);
    background: linear-gradient(90deg, rgba(124, 92, 255, 0.05) 0%, rgba(0,0,0,0) 100%);
  }

  .human-explorer-root .chat-header {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    font-weight: 600;
    opacity: 0.7;
  }
  
  .human-explorer-root .chat-message.user .chat-header { color: var(--accent); }
  .human-explorer-root .chat-message.ai .chat-header { color: var(--claude); }
  .human-explorer-root .chat-message.symbi .chat-header { color: var(--symbi); }

  .human-explorer-root .content-text::-webkit-scrollbar {
    width: 8px;
  }

  .human-explorer-root .content-text::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.05);
    border-radius: 4px;
  }

  .human-explorer-root .content-text::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }

  /* Footer */
  .human-explorer-root footer {
    background: var(--bg-card);
    border-top: 1px solid rgba(255,255,255,0.05);
    padding: 30px 0;
    text-align: center;
    margin-top: 60px;
  }

  .human-explorer-root footer a {
    color: var(--accent);
    text-decoration: none;
  }

  .human-explorer-root footer a:hover {
    text-decoration: underline;
  }

  .human-explorer-root .footer-links {
    margin-top: 10px;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    .human-explorer-root header h1 {
        font-size: 1.8rem;
    }
    
    .human-explorer-root .documents {
        grid-template-columns: 1fr;
    }
    
    .human-explorer-root .search-form {
        flex-direction: column;
    }
    
    .human-explorer-root .stats {
        justify-content: center;
    }
  }
`

export default function ArchivesExplorerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="human-explorer-root">
      <style>{SHARED_STYLES}</style>
      {children}
    </div>
  )
}
