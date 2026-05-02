import HeaderSection from '@/components/sections/header-section'
import LyricsSection from '@/components/sections/lyrics-section'
import FooterSection from '@/components/sections/footer-section'

export default function LyricsPage() {
  return (
    <>
      <HeaderSection />
      <main className="pt-20">
        <LyricsSection />
      </main>
      <FooterSection />
    </>
  )
}
