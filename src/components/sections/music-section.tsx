'use client'

import { useState } from 'react'
import { songs } from '@/data/songs'
import { streamingLinks } from '@/data/socials'

export default function MusicSection() {
  const [playingId, setPlayingId] = useState<string | null>(null)

  return (
    <section id="music" className="py-[clamp(3rem,6vw,6rem)] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#E8E4E0] mb-2">
          Music
        </h2>
        <p className="text-[#8A8698] mb-6 max-w-lg">
          Alternative, acoustic, indie rock — music for the ones who feel too much.
        </p>

        {/* Streaming platform links */}
        <div className="mb-8 p-5 rounded-xl border border-[#2A2A3E] bg-[#16161F]">
          <p className="text-[#8A8698] text-xs font-medium uppercase tracking-wider mb-3">Listen on</p>
          <div className="flex flex-wrap gap-2">
            {streamingLinks.map(platform => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#2A2A3E] text-[#8A8698] hover:text-[#E8E4E0] hover:border-[#E8E4E0]/30 transition-all text-xs font-medium"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: platform.color }}
                />
                {platform.name}
              </a>
            ))}
          </div>
        </div>

        {/* Tracklist */}
        <div className="space-y-1">
          {songs.map((song, i) => (
            <div
              key={song.id}
              className="group flex items-center gap-4 p-3 rounded-lg hover:bg-[#1C1C2A] transition-all cursor-pointer"
              onClick={() => setPlayingId(playingId === song.id ? null : song.id)}
            >
              {/* Play button */}
              <div className="w-10 h-10 rounded-full border border-[#2A2A3E] flex items-center justify-center shrink-0 group-hover:border-[#D4956A] group-hover:bg-[#D4956A]/10 transition-all">
                {playingId === song.id ? (
                  <div className="flex gap-0.5 items-end h-4">
                    <span className="w-0.5 bg-[#D4956A] rounded-full h-3 animate-pulse" />
                    <span className="w-0.5 bg-[#D4956A] rounded-full h-4 animate-pulse delay-75" />
                    <span className="w-0.5 bg-[#D4956A] rounded-full h-2 animate-pulse delay-150" />
                  </div>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#8A8698" className="ml-0.5 group-hover:fill-[#D4956A] transition-colors">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </div>

              {/* Track info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[#5A5678] text-xs font-mono w-5">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-sm text-[#E8E4E0] group-hover:text-[#D4956A] transition-colors truncate">
                    {song.title}
                  </h3>
                </div>
                <p className="text-[#5A5678] text-xs ml-7 truncate">{song.subtitle}</p>
              </div>

              {/* Meta */}
              <div className="hidden sm:flex items-center gap-3 text-xs text-[#5A5678]">
                <span>{song.genre}</span>
                <span>{song.duration}</span>
              </div>
              <span className="text-[#5A5678] text-xs sm:hidden">{song.duration}</span>
            </div>
          ))}
        </div>

        {/* Currently playing / expand area */}
        {playingId && (
          <div className="mt-6 p-5 rounded-xl border border-[#D4956A]/30 bg-[#16161F] animate-in fade-in slide-in-from-top-2 duration-300">
            {(() => {
              const song = songs.find(s => s.id === playingId)!
              return (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4956A]/20 to-[#7C5CBF]/20 flex items-center justify-center border border-[#2A2A3E]">
                      <span className="text-xl">🎵</span>
                    </div>
                    <div>
                      <h4 className="text-[#E8E4E0] font-medium">{song.title}</h4>
                      <p className="text-[#8A8698] text-xs">{song.genre} &middot; {song.duration} &middot; {song.mood}</p>
                    </div>
                  </div>

                  {/* Audio player placeholder */}
                  <div className="mb-3 p-4 rounded-lg bg-[#0D0D14] border border-[#2A2A3E] text-center">
                    <p className="text-[#5A5678] text-xs">
                      Audio file not uploaded yet. Drop your mp3 in /public/audio/ and it plays here.
                    </p>
                  </div>

                  {/* Waveform placeholder */}
                  <div className="flex items-center gap-0.5 h-12 opacity-30">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#D4956A] rounded-full"
                        style={{
                          height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 10}px`,
                          opacity: 0.3 + Math.sin(i * 0.3) * 0.2
                        }}
                      />
                    ))}
                  </div>

                  <a
                    href="#lyrics"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#D4956A] hover:text-[#E8C4A0] transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    Read lyrics for &ldquo;{song.title}&rdquo;
                  </a>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </section>
  )
}
