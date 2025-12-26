import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Jason Jarmacz | NeuroDivergent AI Evolution Strategist',
  description: 'Pioneering Human-as-the-Loop AI systems, strategic innovation consulting, and transformative solutions across healthcare, infrastructure, and enterprise intelligence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
          strategy="lazyOnload"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

