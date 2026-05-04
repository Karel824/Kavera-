'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    requestAnimationFrame(() => bgRef.current?.classList.add('loaded'))
  }, [])

  return (
    <section id="hero" className="relative h-screen min-h-[640px] flex items-end pb-36 overflow-hidden">
      <div
        ref={bgRef}
        className="hero-bg"
        style={{
          backgroundImage:
            "url('/hf_20260501_225354_c85522ff-fb66-4054-8457-6489a7c919dd.png')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(26,26,46,.82) 0%, rgba(26,26,46,.40) 50%, rgba(26,26,46,.10) 100%)',
        }}
      />

      <div className="relative z-10 w-full px-6 md:pl-20 md:pr-0 lg:pl-28">
        <div className="max-w-[540px] mx-auto md:mx-0">
          <h1 className="text-white font-semibold mb-6">
            Dostupné bydlení{' '}
            <span className="text-terracotta">v&nbsp;Brně.</span>
          </h1>
          <p className="text-[rgba(244,241,235,.85)] text-[1.05rem] mb-11 font-light leading-[1.75]">
            Již od roku 2010 tvoříme stabilní zázemí pro život v&nbsp;Brně. Jako rodinná firma
            nemovitosti vlastníme, stavíme i spravujeme – s osobním přístupem a odpovědností
            za každý detail.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
            <a href="#najemni-byty" className="btn btn-primary whitespace-nowrap text-center sm:text-left">Prohlédnout nájemní byty</a>
            <a href="#projekty" className="btn btn-outline whitespace-nowrap text-center sm:text-left">Developerské projekty</a>
          </div>
        </div>
      </div>

      <a
        href="#rozcestnik"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full items-center justify-center border border-white/30 hover:border-white/70 transition-all duration-300 group"
        aria-label="Přejít níže"
        style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }}
      >
        <svg
          className="w-4 h-4 transition-colors duration-300"
          style={{ color: 'rgba(255,255,255,.5)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
