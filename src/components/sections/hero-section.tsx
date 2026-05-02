'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D14] via-[#16161F] to-[#0D0D14]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,149,106,0.08)_0%,_transparent_60%)]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#7C5CBF]/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4956A]/5 blur-3xl" />

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Raccoon icon */}
        <div className="mb-6 text-6xl">🦝</div>

        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,4.5rem)] text-[#E8E4E0] mb-4 leading-tight">
          Brahm
          <br />
          <span className="text-[#D4956A]">the Racoon</span>
        </h1>

        <p className="font-[family-name:var(--font-accent)] text-xl md:text-2xl text-[#8A8698] italic mb-8 max-w-xl mx-auto">
          &ldquo;Some songs are letters you never thought you&apos;d send. These are mine.&rdquo;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#music"
            className="px-8 py-3 bg-[#D4956A] text-[#0D0D14] rounded-full font-medium hover:bg-[#E8C4A0] transition-all text-sm tracking-wider uppercase"
          >
            Listen
          </a>
          <a
            href="#lyrics"
            className="px-8 py-3 border border-[#2A2A3E] text-[#E8E4E0] rounded-full font-medium hover:border-[#D4956A] hover:text-[#D4956A] transition-all text-sm tracking-wider uppercase"
          >
            Read Lyrics
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="#8A8698" strokeWidth="2" className="mx-auto">
            <rect x="1" y="1" width="18" height="28" rx="9" />
            <circle cx="10" cy="10" r="2" fill="#D4956A" stroke="none" />
          </svg>
        </div>
      </div>
    </section>
  )
}
