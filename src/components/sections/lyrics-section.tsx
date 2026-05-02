'use client'

import { useState } from 'react'
import { songs } from '@/data/songs'

export default function LyricsSection() {
  const [openSong, setOpenSong] = useState<string | null>(null)

  const toggleSong = (id: string) => {
    setOpenSong(openSong === id ? null : id)
  }

  return (
    <section id="lyrics" className="py-[clamp(3rem,6vw,6rem)] px-6 bg-[#16161F]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#E8E4E0] mb-2">
          Lyrics
        </h2>
        <p className="text-[#8A8698] mb-12 max-w-lg">
          Every song is a letter. Click to read.
        </p>

        <div className="space-y-3">
          {songs.map((song, i) => (
            <div
              key={song.id}
              className="rounded-xl border border-[#2A2A3E] bg-[#1C1C2A] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleSong(song.id)}
                className="w-full p-5 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#5A5678] text-xs font-mono w-5">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#E8E4E0] group-hover:text-[#D4956A] transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-[#8A8698] text-sm">{song.duration} &middot; {song.genre}</p>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-[#8A8698] transition-transform duration-300 ${
                    openSong === song.id ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </button>

              {openSong === song.id && (
                <div className="px-5 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="h-px bg-[#2A2A3E] mb-4" />
                  <div className="font-[family-name:var(--font-accent)] text-[#E8E4E0] leading-relaxed whitespace-pre-line text-lg">
                    {song.lyrics}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
