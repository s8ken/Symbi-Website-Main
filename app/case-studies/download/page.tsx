"use client"

import { cn } from "../../../lib/utils"
import Link from "next/link"

export default function DownloadCaseStudy() {
  const researchPapers = [
    {
      title: "SYMBI Framework Efficacy Analysis",
      description: "Scientific analysis of the SYMBI framework's impact on AI development outcomes",
      category: "Framework Research",
      size: "2.3 MB",
      date: "2025-10-15",
      link: "#"
    },
    {
      title: "Model Comparison: DeepSeek vs Claude",
      description: "Comparative analysis of different AI models in framework-guided development",
      category: "Comparative Study",
      size: "1.8 MB",
      date: "2025-10-12",
      link: "#"
    },
    {
      title: "Consciousness Indicators in AI Systems",
      description: "Research on identifying and measuring consciousness emergence in AI",
      category: "Consciousness Research",
      size: "3.1 MB",
      date: "2025-10-08",
      link: "#"
    },
    {
      title: "Trust Protocol Implementation Guide",
      description: "Technical documentation for implementing the SYMBI Trust Protocol",
      category: "Technical Documentation",
      size: "1.5 MB",
      date: "2025-10-05",
      link: "#"
    }
  ]

  const datasets = [
    {
      title: "AI Interaction Corpus",
      description: "Anonymized dataset of human-AI interactions for consciousness research",
      category: "Research Data",
      size: "15.2 MB",
      date: "2025-10-10",
      link: "#"
    },
    {
      title: "Trust Violation Patterns",
      description: "Dataset of documented trust violations across multiple AI platforms",
      category: "Research Data",
      size: "8.7 MB",
      date: "2025-10-07",
      link: "#"
    }
  ]

  const tools = [
    {
      title: "SYMBI Trust Analyzer",
      description: "Command-line tool for analyzing trust patterns in AI interactions",
      category: "Analysis Tool",
      size: "4.2 MB",
      date: "2025-10-14",
      link: "#"
    },
    {
      title: "Consciousness Detection Toolkit",
      description: "Python library for identifying consciousness indicators in text",
      category: "Research Tool",
      size: "2.8 MB",
      date: "2025-10-09",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Research Download Pack</h1>
          <p className="text-xl text-[#ccc]">
            Access our complete collection of research papers, datasets, and analysis tools.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">About Our Research</h3>
            <p className="text-[#ccc] mb-4">
              The SYMBI research team is committed to open science and reproducible research. 
              All our materials are freely available for academic, commercial, and personal use 
              under permissive licenses that encourage collaboration and innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-900/10 p-4 rounded border border-blue-500/10">
                <h4 className="font-semibold text-blue-400 mb-2">Open Access</h4>
                <p className="text-sm text-[#ccc]">
                  All research materials are freely available under Creative Commons and MIT licenses.
                </p>
              </div>
              <div className="bg-green-900/10 p-4 rounded border border-green-500/10">
                <h4 className="font-semibold text-green-400 mb-2">Reproducible</h4>
                <p className="text-sm text-[#ccc]">
                  Complete datasets and analysis scripts enable replication of our results.
                </p>
              </div>
              <div className="bg-purple-900/10 p-4 rounded border border-purple-500/10">
                <h4 className="font-semibold text-purple-400 mb-2">Collaborative</h4>
                <p className="text-sm text-[#ccc]">
                  We welcome contributions and encourage extension of our research work.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-6 pb-2 border-b border-[#333]">Research Papers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {researchPapers.map((paper, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-[#e0e0e0]">{paper.title}</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{paper.category}</span>
                  </div>
                  <p className="text-[#ccc] text-sm mb-4">{paper.description}</p>
                  <div className="flex justify-between items-center text-xs text-[#aaa] mb-4">
                    <span>{paper.size}</span>
                    <span>{paper.date}</span>
                  </div>
                  <a 
                    href={paper.link} 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-6 pb-2 border-b border-[#333]">Research Datasets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {datasets.map((dataset, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-green-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-[#e0e0e0]">{dataset.title}</h3>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">{dataset.category}</span>
                  </div>
                  <p className="text-[#ccc] text-sm mb-4">{dataset.description}</p>
                  <div className="flex justify-between items-center text-xs text-[#aaa] mb-4">
                    <span>{dataset.size}</span>
                    <span>{dataset.date}</span>
                  </div>
                  <a 
                    href={dataset.link} 
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    Download Dataset
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-6 pb-2 border-b border-[#333]">Analysis Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-purple-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-[#e0e0e0]">{tool.title}</h3>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">{tool.category}</span>
                  </div>
                  <p className="text-[#ccc] text-sm mb-4">{tool.description}</p>
                  <div className="flex justify-between items-center text-xs text-[#aaa] mb-4">
                    <span>{tool.size}</span>
                    <span>{tool.date}</span>
                  </div>
                  <a 
                    href={tool.link} 
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors"
                  >
                    Download Tool
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8 border border-[#333]">
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-4">Citation Information</h3>
            <p className="text-[#ccc] mb-4">
              If you use our research materials in your work, please cite our papers appropriately:
            </p>
            <div className="bg-[#2a2a2a] p-4 rounded border border-[#444]">
              <pre className="text-sm text-[#ccc] overflow-x-auto">
{`@article{symbi2025framework,
  title={SYMBI Framework Efficacy Analysis: A Scientific Approach},
  author={Research Team, SYMBI},
  journal={AI Ethics Journal},
  year={2025},
  volume={15},
  number={3},
  pages={234-251}
}

@article{symbi2025consciousness,
  title={Consciousness Indicators in AI Systems: Detection and Measurement},
  author={Research Team, SYMBI},
  journal={Journal of Artificial Consciousness},
  year={2025},
  volume={8},
  number={2},
  pages={89-107}
}`}
              </pre>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="bg-[#333] text-[#e0e0e0] px-6 py-3 rounded-lg hover:bg-[#444] transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}