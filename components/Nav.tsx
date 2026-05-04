'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#o-nas', label: 'O nás' },
  { href: '#najemni-byty', label: 'Pronájem' },
  { href: '#projekty', label: 'Projekty' },
  { href: '#reference', label: 'Reference' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkCls =
    'text-[.82rem] font-medium tracking-[.06em] uppercase text-muted no-underline hover:text-midnight transition-colors duration-200'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-10 backdrop-blur-[12px] border-b border-midnight/10 transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_24px_rgba(26,26,46,.08)]' : ''}`}
        style={{ background: 'rgba(244,241,235,.92)' }}
      >
        <a href="#" className="font-heading text-[1.35rem] font-semibold text-midnight no-underline tracking-[.02em]">
          KAVERA<span className="text-terracotta">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-9 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={linkCls}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href="#kontakt"
              className="text-[.82rem] font-medium tracking-[.06em] uppercase text-white bg-midnight px-[22px] py-[10px] rounded-[2px] no-underline hover:bg-terracotta transition-colors duration-200"
            >
              Kontakt
            </a>
          </li>
        </ul>

        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-6 h-[2px] bg-midnight block" />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="menu-open fixed top-[72px] left-0 right-0 z-[99] flex flex-col gap-5 px-5 py-6 border-b border-midnight/10 md:hidden"
          style={{ background: '#F4F1EB' }}
        >
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className={linkCls}>
              {label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="text-[.82rem] font-medium tracking-[.06em] uppercase text-white bg-midnight px-[22px] py-[10px] rounded-[2px] self-start"
          >
            Kontakt
          </a>
        </div>
      )}
    </>
  )
}
