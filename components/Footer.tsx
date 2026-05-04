const navLinks = [
  { href: '#o-nas', label: 'O nás' },
  { href: '#najemni-byty', label: 'Nabídka bytů' },
  { href: '#projekty', label: 'Developerské projekty' },
  { href: '#reference', label: 'Reference' },
  { href: '#kontakt', label: 'Kontakt' },
]

const projectLinks = [
  { href: '#projekty', label: 'Rezidence Lipová' },
  { href: '#projekty', label: 'Kluchova Residence' },
  { href: '#projekty', label: 'Projekt Prostějov' },
]

const contactLinks = [
  { href: 'tel:+420606290733', label: '606 290 733' },
  { href: 'mailto:kvasnicka@kavera.cz', label: 'kvasnicka@kavera.cz' },
  { href: '#kontakt', label: 'Pastrnkova 564/61\nBrno' },
]

const linkCls = 'text-[.85rem] no-underline transition-colors duration-200 hover:text-white'

export default function Footer() {
  return (
    <footer className="bg-midnight pt-16 pb-8" style={{ color: 'rgba(244,241,235,.6)' }}>
      <div className="mx-auto max-w-[1600px] px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 pb-12 border-b"
          style={{ borderColor: 'rgba(244,241,235,.1)' }}
        >
          <div className="flex flex-col gap-4">
            <div className="font-heading text-[1.4rem] font-semibold text-white">
              KAVERA<span className="text-terracotta">.</span>
            </div>
            <p className="text-[.85rem] leading-[1.7] max-w-[280px]">
              Stabilní brněnská rodinná realitní a developerská společnost. Přinášíme evropský
              standard nemovitostí do Brna.
            </p>
          </div>

          <div>
            <h5 className="font-sans text-[.72rem] font-semibold tracking-[.12em] uppercase text-white mb-[18px]">
              Navigace
            </h5>
            <ul className="list-none flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={linkCls} style={{ color: 'rgba(244,241,235,.55)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-[.72rem] font-semibold tracking-[.12em] uppercase text-white mb-[18px]">
              Projekty
            </h5>
            <ul className="list-none flex flex-col gap-2.5">
              {projectLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className={linkCls} style={{ color: 'rgba(244,241,235,.55)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-[.72rem] font-semibold tracking-[.12em] uppercase text-white mb-[18px]">
              Kontakt
            </h5>
            <ul className="list-none flex flex-col gap-2.5">
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={linkCls}
                    style={{ color: 'rgba(244,241,235,.55)', whiteSpace: 'pre-line' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-7 flex justify-between items-center flex-wrap gap-4 text-[.78rem]"
          style={{ color: 'rgba(244,241,235,.6)' }}
        >
          <span>© 2026 Kavera Reality s.r.o. — Všechna práva vyhrazena</span>
          <div className="flex gap-6">
            <a href="#" className={linkCls} style={{ color: 'rgba(244,241,235,.4)' }}>
              Ochrana osobních údajů
            </a>
            <a href="#" className={linkCls} style={{ color: 'rgba(244,241,235,.4)' }}>
              Obchodní podmínky
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
