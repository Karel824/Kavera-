'use client'
import { useState, FormEvent } from 'react'
import ScrollReveal from './ScrollReveal'

const contactItems = [
  {
    label: 'Telefon',
    value: '606 290 733',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    value: 'kvasnicka@kavera.cz',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: 'Sídlo',
    value: 'Pastrnkova 564/61, Brno',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
]

const fieldCls =
  'font-sans text-[.9rem] px-4 py-3 bg-white border-[1.5px] border-midnight/10 rounded-[2px] text-midnight transition-colors duration-200 outline-none focus:border-midnight w-full'

export default function Kontakt() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3500)
  }

  return (
    <section id="kontakt" className="bg-greige py-24">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20 items-start">

          <ScrollReveal direction="left">
            <div className="flex flex-col gap-8">
              <div>
                <p className="label">Kontakt</p>
                <h2 className="mt-3">Jsme tu pro vás.</h2>
              </div>
              <p className="text-[.96rem] leading-[1.8]">
                Ať už hledáte nájemní bydlení, nebo vás zajímá koupě bytu v našich rezidenčních
                projektech — napište nebo zavolejte.
              </p>
              <div className="flex flex-col gap-4">
                {contactItems.map(({ label, value, icon }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-midnight rounded-[2px] flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <small className="text-[.72rem] tracking-[.06em] uppercase text-muted-light block">
                        {label}
                      </small>
                      <strong className="text-[.96rem] text-midnight font-semibold">{value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[.72rem] font-semibold tracking-[.08em] uppercase text-muted" htmlFor="jmeno">
                    Jméno a příjmení
                  </label>
                  <input id="jmeno" type="text" placeholder="Jan Novák" required className={fieldCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[.72rem] font-semibold tracking-[.08em] uppercase text-muted" htmlFor="email">
                    E-mailová adresa
                  </label>
                  <input id="email" type="email" placeholder="jan@novak.cz" required className={fieldCls} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[.72rem] font-semibold tracking-[.08em] uppercase text-muted" htmlFor="telefon">
                  Telefon (volitelné)
                </label>
                <input id="telefon" type="tel" placeholder="+420 7XX XXX XXX" className={fieldCls} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[.72rem] font-semibold tracking-[.08em] uppercase text-muted" htmlFor="zajem">
                  Mám zájem o
                </label>
                <select id="zajem" className={`${fieldCls} appearance-none cursor-pointer`}>
                  <option value="">— Vyberte kategorii —</option>
                  <option>Nájemní byt</option>
                  <option>Projekt Lipová (Pisárky)</option>
                  <option>Projekt Kluchova (Nový Lískovec)</option>
                  <option>Projekt Prostějov</option>
                  <option>Investiční možnosti</option>
                  <option>Jiné</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[.72rem] font-semibold tracking-[.08em] uppercase text-muted" htmlFor="zprava">
                  Zpráva
                </label>
                <textarea
                  id="zprava"
                  placeholder="Napište nám, co hledáte nebo se na cokoliv zeptejte..."
                  className={`${fieldCls} resize-y min-h-[120px]`}
                />
              </div>

              <p className="text-[.78rem] text-muted-light">
                Odesláním formuláře souhlasíte se zpracováním osobních údajů. Neposíláme spam.
              </p>

              <button
                type="submit"
                className="btn self-start transition-colors duration-300"
                style={{
                  background: sent ? '#2D5A4A' : '#C67D53',
                  color: '#fff',
                }}
                disabled={sent}
              >
                {sent ? 'Odesláno ✓' : 'Odeslat nezávaznou poptávku'}
              </button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
