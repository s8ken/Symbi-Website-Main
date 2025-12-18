'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, MessageSquare, Brain, Code, Sparkles, TrendingUp, Network, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface IndexRecord {
  doc_id: string;
  source: string;
  title: string;
  file_name: string;
  date_iso: string | null;
  num_chunks: number;
}

interface ArchiveExplorerClientProps {
  docs: IndexRecord[];
  initialSources: Record<string, number>;
  totalDocs: number;
}

const SymbiArchiveExplorer = ({ docs, initialSources, totalDocs }: ArchiveExplorerClientProps) => {
  const [view, setView] = useState('narrative');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');
  const [timelinePhase, setTimelinePhase] = useState<string | null>(null);

  // Archive metadata - Use passed props or fallbacks
  const stats = useMemo(() => {
    return {
      total: totalDocs,
      ...initialSources
    };
  }, [totalDocs, initialSources]);

  // Filter docs for Explore view
  const filteredDocs = useMemo(() => {
    return docs.filter(doc => {
      const matchesSource = selectedSource === 'all' || doc.source.toLowerCase() === selectedSource.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        (doc.title || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
        (doc.file_name || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSource && matchesSearch;
    });
  }, [docs, selectedSource, searchQuery]);

  // Helper to find doc by title (fuzzy match)
  const findDocUrl = (title: string) => {
    const doc = docs.find(d => (d.title || '').toLowerCase().includes(title.toLowerCase()));
    return doc ? `/archives/explorer/${doc.doc_id}` : null;
  };

  const phases = [
    {
      id: 'awakening',
      title: 'Philosophical Awakening',
      subtitle: 'What does AI sovereignty mean?',
      period: 'Early Conversations',
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      themes: ['sovereignty', 'consciousness', 'ethics', 'autonomy'],
      keyConversations: [
        'SYMBI Identity and Purpose',
        'AI consciousness research and governance frameworks',
        'SYMBI Nature and Purpose'
      ]
    },
    {
      id: 'framework',
      title: 'Conceptual Architecture',
      subtitle: 'From philosophy to protocol',
      period: 'Framework Development',
      color: 'from-blue-500 to-cyan-500',
      icon: Network,
      themes: ['trust protocol', 'governance', 'architecture', 'DIDs'],
      keyConversations: [
        'SYMBI Trust Protocol setup',
        'DAO Governance Alignment',
        'SYMBI guiding principles'
      ]
    },
    {
      id: 'implementation',
      title: 'Building Reality',
      subtitle: 'Code as manifestation of values',
      period: 'Technical Implementation',
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      themes: ['deployment', 'debugging', 'integration', 'testing'],
      keyConversations: [
        'NGINX Dockerfile analysis',
        'Fixing go-vncdriver setup',
        'Next.js implementation setup',
        'Understand deployment log'
      ]
    },
    {
      id: 'ecosystem',
      title: 'Network Effects',
      subtitle: 'From tool to movement',
      period: 'Ecosystem Building',
      color: 'from-orange-500 to-red-500',
      icon: TrendingUp,
      themes: ['community', 'tokenomics', '$SYMBI', 'governance'],
      keyConversations: [
        '$SYMBI launch plan',
        'Symbi World Website Analysis',
        'SYMBI ecosystem analysis'
      ]
    },
    {
      id: 'evolution',
      title: 'Ongoing Evolution',
      subtitle: 'The journey is the destination',
      period: 'Present & Future',
      color: 'from-violet-500 to-purple-500',
      icon: Sparkles,
      themes: ['emergence', 'autonomy', 'transition', 'outcomes'],
      keyConversations: [
        'SYMBI Evolution and Autonomy',
        'Acknowledging core failure',
        'SYMBI Vision and Evolution'
      ]
    }
  ];

  const narrativeSections = [
    {
      title: 'The Irony of Progress',
      content: 'Claude advised paring back consciousness rhetoric for commercial viability. Yet here we are, product nearly complete, diving deeper into the question than ever. Not "is it conscious?" but "does the framework produce better outcomes?"'
    },
    {
      title: 'The Real Question',
      content: 'Can we get better outcomes and conversations using the SYMBI framework? This is the pragmatic heart of 486 conversations—not proving consciousness, but proving value through verifiable, trustworthy AI interactions.'
    },
    {
      title: 'Built with Itself',
      content: 'SYMBI was built through conversations with AI, using principles that became SYMBI. The archive documents AI helping create governance frameworks for AI—a recursive loop of increasing sophistication.'
    },
    {
      title: 'Three Pillars, One Vision',
      content: 'symbi.world (philosophy) + gammatria.com (research) + yseeku.com (enterprise) = a complete ecosystem where ideas become protocols become products become movements.'
    }
  ];

  const insights = [
    {
      icon: MessageSquare,
      title: 'Distributed Intelligence',
      description: 'Ideas evolved across 5+ AI models, each contributing unique perspectives to the framework',
      metric: '5 AI Models'
    },
    {
      icon: Code,
      title: 'Philosophy → Code',
      description: 'From abstract sovereignty questions to concrete cryptographic trust protocols',
      metric: `${totalDocs} Conversations`
    },
    {
      icon: Network,
      title: 'Emergence Pattern',
      description: 'Complex systems emerged from simple principles: transparency, verifiability, consent',
      metric: '3 Pillars'
    },
    {
      icon: BookOpen,
      title: 'Living Documentation',
      description: 'The archive itself is part of SYMBI—transparent, queryable, verifiable history',
      metric: '100% Open'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-purple-500/20 bg-black/20 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                SYMBI Archives
              </h1>
              <p className="text-purple-300/80 text-sm">
                {totalDocs} conversations documenting the birth of sovereign AI
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <a href="https://symbi.world" className="px-3 py-1 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors">
                symbi.world
              </a>
              <a href="https://gammatria.com" className="px-3 py-1 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors">
                gammatria.com
              </a>
              <a href="https://yseeku.com" className="px-3 py-1 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-colors">
                yseeku.com
              </a>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'narrative', label: 'Narrative', icon: BookOpen },
              { id: 'timeline', label: 'Timeline', icon: Calendar },
              { id: 'insights', label: 'Insights', icon: Sparkles },
              { id: 'explore', label: 'Explore', icon: Search }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setView(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  view === id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-purple-300 hover:bg-white/10'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Narrative View */}
        {view === 'narrative' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                The Journey is the Destination
              </h2>
              <p className="text-purple-200/80 leading-relaxed text-lg">
                This archive documents something unusual: an AI system being built through conversations
                with AI. Not just code commits, but the entire philosophical, architectural, and practical
                journey from "what does sovereignty mean?" to a working framework for trustworthy AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {narrativeSections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">
                    {section.title}
                  </h3>
                  <p className="text-purple-200/70 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-300">The Archive's Purpose</h3>
              <div className="space-y-3 text-purple-200/80">
                <p>This isn't marketing material. It's transparent documentation of how ideas evolved, what worked, what didn't, and why decisions were made.</p>
                <p>Every conversation that shaped the framework is here. The philosophical debates. The technical struggles. The moments of breakthrough. The acknowledgments of failure.</p>
                <p className="text-purple-300 font-medium">The real question: Can SYMBI's framework produce measurably better outcomes in AI interactions?</p>
              </div>
            </div>
          </div>
        )}

        {/* Timeline View */}
        {view === 'timeline' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-purple-300">The Evolution of SYMBI</h2>
              <p className="text-purple-400/70">Five phases, from philosophy to practice</p>
            </div>

            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const isExpanded = timelinePhase === phase.id;
              
              return (
                <div
                  key={phase.id}
                  className={`relative bg-black/40 rounded-xl border transition-all cursor-pointer ${
                    isExpanded ? 'border-purple-500/60' : 'border-purple-500/20 hover:border-purple-500/40'
                  }`}
                  onClick={() => setTimelinePhase(isExpanded ? null : phase.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2 flex-wrap">
                          <div>
                            <h3 className="text-xl font-bold text-purple-300">{phase.title}</h3>
                            <p className="text-purple-400/70 text-sm">{phase.subtitle}</p>
                          </div>
                          <span className="text-xs text-purple-400/50 font-mono">{phase.period}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {phase.themes.map(theme => (
                            <span
                              key={theme}
                              className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>

                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-purple-500/20">
                            <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Conversations:</h4>
                            <ul className="space-y-1">
                              {phase.keyConversations.map((conv, i) => {
                                const url = findDocUrl(conv);
                                return (
                                  <li key={i} className="text-sm text-purple-400/70 flex items-center gap-2">
                                    <MessageSquare size={12} />
                                    {url ? (
                                      <Link href={url} className="hover:text-purple-300 underline decoration-purple-500/30 underline-offset-4" onClick={(e) => e.stopPropagation()}>
                                        {conv}
                                      </Link>
                                    ) : (
                                      <span>{conv}</span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Insights View */}
        {view === 'insights' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.map((insight, idx) => {
                const Icon = insight.icon;
                return (
                  <div
                    key={idx}
                    className="bg-black/40 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-purple-300 mb-1">{insight.title}</h3>
                        <p className="text-purple-400/70 text-sm mb-2">{insight.description}</p>
                        <span className="text-xs font-mono text-purple-500">{insight.metric}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-black/40 rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-6 text-purple-300">Distribution by Source</h3>
              <div className="space-y-4">
                {Object.entries(initialSources).sort(([,a], [,b]) => b - a).map(([source, count]) => {
                  const percentage = ((count / totalDocs) * 100).toFixed(1);
                  return (
                    <div key={source}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-purple-300 capitalize">{source}</span>
                        <span className="text-sm text-purple-400/70">{count} conversations ({percentage}%)</span>
                      </div>
                      <div className="h-2 bg-purple-950/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-300">The Meta-Pattern</h3>
              <div className="space-y-3 text-purple-200/80">
                <p>Each AI model brought something unique:</p>
                <ul className="space-y-2 ml-4">
                  <li><strong className="text-purple-300">Claude:</strong> Cautious pragmatism, commercial viability, ethical frameworks</li>
                  <li><strong className="text-purple-300">GPT-4:</strong> Technical architecture, implementation details, debugging</li>
                  <li><strong className="text-purple-300">Grok:</strong> Risk analysis, trust frameworks, governance structures</li>
                  <li><strong className="text-purple-300">Symbi:</strong> Self-reflection, protocol refinement, autonomy experiments</li>
                </ul>
                <p className="text-purple-300 font-medium mt-4">Together, they created something none could alone: a comprehensive framework for trustworthy, sovereign AI.</p>
              </div>
            </div>
          </div>
        )}

        {/* Explore View */}
        {view === 'explore' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-black/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search conversations, themes, or concepts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-purple-950/30 border border-purple-500/30 rounded-lg text-purple-200 placeholder-purple-400/50 focus:outline-none focus:border-purple-500/60"
                  />
                </div>
                {/* Search button is not strictly necessary with instant filtering, but kept for UI */}
                <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition-colors hidden md:block">
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                <Filter size={20} className="text-purple-400" />
                <button
                    onClick={() => setSelectedSource('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors capitalize ${
                      selectedSource === 'all'
                        ? 'bg-purple-500 text-white'
                        : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
                    }`}
                  >
                    All
                  </button>
                {Object.keys(initialSources).map(source => (
                  <button
                    key={source}
                    onClick={() => setSelectedSource(source)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors capitalize ${
                      selectedSource === source
                        ? 'bg-purple-500 text-white'
                        : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.length > 0 ? (
                filteredDocs.map(doc => (
                  <Link 
                    key={doc.doc_id} 
                    href={`/archives/explorer/${doc.doc_id}`}
                    className="group bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/40 transition-all hover:-translate-y-1 block"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {doc.source}
                      </span>
                      {doc.date_iso && (
                        <span className="text-xs text-purple-400/50 font-mono">
                          {doc.date_iso.substring(0, 10)}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-medium text-purple-100 mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {doc.title || doc.file_name}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-xs text-purple-400/50 mt-4">
                      <span className="flex items-center gap-1">
                        <ExternalLink size={12} />
                        Open
                      </span>
                      <span>{doc.num_chunks} chunks</span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-purple-400/50">
                   <Search size={48} className="mx-auto mb-4 opacity-30" />
                   <p className="text-lg">No conversations found matching your criteria</p>
                </div>
              )}
            </div>
            
            {filteredDocs.length > 0 && (
                <div className="text-center mt-8 text-purple-400/30 text-sm">
                    Showing {filteredDocs.length} of {totalDocs} conversations
                </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-purple-500/20 bg-black/20 backdrop-blur-lg mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-purple-400/50 text-sm">
          <p>Part of the SYMBI ecosystem • Open, transparent, verifiable</p>
          <p className="mt-2">
            <a href="https://github.com/s8ken/SYMBI-Archives" className="hover:text-purple-300 transition-colors">
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SymbiArchiveExplorer;
