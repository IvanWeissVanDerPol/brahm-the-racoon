export default function AboutSection() {
  return (
    <section id="about" className="py-[clamp(3rem,6vw,6rem)] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#D4956A]/20 via-[#7C5CBF]/20 to-[#1C1C2A] flex items-center justify-center border border-[#2A2A3E]">
              <span className="text-7xl">🦝</span>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#E8E4E0] mb-6">
              Who is Brahm?
            </h2>

            <div className="space-y-4 text-[#B0ACB8] leading-relaxed">
              <p className="font-[family-name:var(--font-accent)] text-lg italic text-[#D4956A]">
                &ldquo;Brahm isn&apos;t a character I play. Brahm is the real one. The Engineer is the armor.&rdquo;
              </p>
              <p>
                Brahm the Racoon is the musical voice of the soft, vulnerable self that exists underneath
                the mask of competence. Every song is a letter written from the inside out — about
                touch starvation, about being &ldquo;too much,&rdquo; about learning to ask for what you need.
              </p>
              <p>
                The music lives at the intersection of alternative, acoustic, and indie rock —
                intimate confessions set to melodies that build from whisper to roar.
              </p>
              <p>
                Inspired by the psychology of the self, the journey from Engineer to Brahm,
                and the courage it takes to let someone hold you.
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
