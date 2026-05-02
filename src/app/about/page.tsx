import HeaderSection from '@/components/sections/header-section'
import AboutSection from '@/components/sections/about-section'
import ContactSection from '@/components/sections/contact-section'
import FooterSection from '@/components/sections/footer-section'

export default function AboutPage() {
  return (
    <>
      <HeaderSection />
      <main className="pt-20">
        <AboutSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
