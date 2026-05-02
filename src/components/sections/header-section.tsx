'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Music', href: '#music' },
  { label: 'Live', href: '#events' },
  { label: 'Merch', href: '#merch' },
  { label: 'Lyrics', href: '#lyrics' },
  { label: 'About', href: '#about' },
  { label: 'Connect', href: '#contact' },
]

export default function HeaderSection() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0D14]/90 backdrop-blur-md border-b border-[#2A2A3E]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-[#D4956A] tracking-wide">
          Brahm
          <span className="text-[#8A8698] font-[family-name:var(--font-body)] font-light text-sm ml-2">the Racoon</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8A8698] hover:text-[#D4956A] transition-colors text-sm tracking-wider uppercase font-[family-name:var(--font-body)] font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#D4956A]"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#16161F] border-b border-[#2A2A3E]">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#8A8698] hover:text-[#D4956A] transition-colors py-2 uppercase text-sm tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
