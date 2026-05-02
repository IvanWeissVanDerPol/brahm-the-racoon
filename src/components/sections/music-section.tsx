'use client'

import { songs } from '@/data/songs'

export default function MusicSection() {
  return (
    <section id="music" className="py-[clamp(3rem,6vw,6rem)] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#E8E4E0] mb-2">
          Discography
        </h2>
        <p className="text-[#8A8698] mb-12 max-w-lg">
          Alternative, acoustic, indie rock — music for the ones who feel too much.
        </p>

        {/* Embedded player placeholder */}
        <div className="mb-12 p-8 border border-[#2A2A3E] rounded-2xl bg-[#16161F] text-center">
          <p className="text-[#8A8698] text-sm mb-2">Spotify / SoundCloud Player</p>
          <p className="text-[#5A5678] text-xs">Embed player goes here once tracks are published</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {songs.map((song, i) => (
            <a
              key={song.id}
              href={`#lyrics`}
              className="group p-5 rounded-xl bg-[#1C1C2A] border border-[#2A2A3E] hover:border-[#D4956A]/40 hover:bg-[#28283A] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#5A5678] text-xs font-mono">{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="text-xs text-[#D4956A] font-medium">{song.genre}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-[#E8E4E0] group-hover:text-[#D4956A] transition-colors">
                    {song.title}
                  </h3>
                  <p className="text-[#8A8698] text-sm italic mt-1 line-clamp-1">{song.subtitle}</p>
                </div>
                <span className="text-[#5A5678] text-sm font-mono shrink-0 mt-1">{song.duration}</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A8698" strokeWidth="2">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                <span className="text-[#5A5678] text-xs">{song.mood}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
