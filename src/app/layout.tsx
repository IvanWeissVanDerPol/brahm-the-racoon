import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brahm the Racoon — Music',
  description: 'Brahm the Racoon is the musical voice of the soft, vulnerable self. Alternative, acoustic, and indie rock — intimate confessions set to melodies.',
  openGraph: {
    title: 'Brahm the Racoon',
    description: 'Music from the edge of vulnerability.',
    siteName: 'Brahm the Racoon',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
