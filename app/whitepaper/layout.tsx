import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SYMBI Protocol (YCQ): Relational Intelligence Whitepaper",
  description:
    "SYMBI shifts AI progress from brute-force scaling to relational intelligence—governed collaboration that can be measured and replicated.",
  canonical: "https://www.symbi.world/whitepaper",
  openGraph: {
    type: "article",
    title: "SYMBI Protocol (YCQ): Relational Intelligence Whitepaper",
    description: "From model scaling to relationship design: a testable framework for human–AI collaboration.",
    url: "https://www.symbi.world/whitepaper",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYMBI Protocol (YCQ): Relational Intelligence",
    description: "A testable framework for human–AI collaborative emergence.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "SYMBI Protocol (YCQ): Relational Intelligence Whitepaper",
      author: [
        { "@type": "Person", name: "Stephen Aitken" },
        { "@type": "Organization", name: "SYMBI" },
      ],
      datePublished: "2025-08-22",
      dateModified: "2025-08-23",
      url: "https://www.symbi.world/whitepaper",
      inLanguage: "en",
      license: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    }),
  },
}

export default function WhitepaperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
