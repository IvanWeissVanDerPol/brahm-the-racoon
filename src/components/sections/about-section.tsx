'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-[clamp(3rem,6vw,6rem)] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#D4956A]/20 via-[#7C5CBF]/20 to-[#1C1C2A] flex items-center justify-center border border-[#2A2A3E]">
              <span className="text-7xl">🦝</span>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#E8E4E0] mb-6">
              About Brahm
            </h2>

            <div className="space-y-4 text-[#B0ACB8] leading-relaxed">
              <p className="font-[family-name:var(--font-accent)] text-lg italic text-[#D4956A]">
                &ldquo;Brahm isn&apos;t a character. Brahm is the real one. The rest is armor.&rdquo;
              </p>
              <p>
                Brahm the Racoon is a musical project born at the edge of vulnerability.
                Every song is a letter written from the inside out &mdash; about being &ldquo;too much,&rdquo;
                about learning to ask for what you need, about letting the walls come down.
              </p>
              <p>
                The music lives at the intersection of alternative, acoustic, and indie rock &mdash;
                intimate confessions set to melodies that build from whisper to roar.
              </p>
              <p>
                This is music for the ones who feel too deeply, who carry too much,
                who are still learning that softness is not weakness.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Alternative', 'Indie Rock', 'Acoustic', 'Ambient', 'Art Rock'].map(genre => (
                <span
                  key={genre}
                  className="px-3 py-1 rounded-full border border-[#2A2A3E] text-[#8A8698] text-xs font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
