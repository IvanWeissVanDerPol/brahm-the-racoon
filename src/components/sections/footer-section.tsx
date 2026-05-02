export default function FooterSection() {
  return (
    <footer className="py-8 px-6 border-t border-[#2A2A3E]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#5A5678] text-sm font-[family-name:var(--font-accent)] italic">
          &ldquo;Brahm is the real one. The rest is armor.&rdquo;
        </p>
        <p className="text-[#5A5678] text-xs">
          &copy; {new Date().getFullYear()} Brahm the Racoon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
