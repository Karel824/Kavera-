import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    text: 'S Kavera Reality jsem uzavřel nájemní smlouvu bez jediného zbytečného papírování. Vše online, transparentně, vybavení bytu přesně odpovídalo fotografiím. Konečně pronajímatel, který respektuje nájemníka.',
    name: 'Martin K.',
    role: 'IT specialista · Byt 2+kk, Veveří',
  },
  {
    text: 'Investiční byt v projektu Kluchova jsme vybrali právě díky profesionalitě Kavery. Architektonická kvalita, férová komunikace o postupu výstavby a transparentní smluvní podmínky. Přesně to, co jsme hledali.',
    name: 'Ing. Petra M.',
    role: 'Podnikatelka · Projekt Kluchova',
  },
  {
    text: 'Bydlíme v kavera bytě tři roky a každá oprava proběhla do 48 hodin. Nikdy jsme se necítili jako číslo — vždy jako lidé. Kvalita správy je výrazně nad průměrem brněnského trhu.',
    name: 'Lucie a Tomáš V.',
    role: 'Rodina · Byt 3+kk, Královo Pole',
  },
]

export default function Reference() {
  return (
    <section id="reference" className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-8">
        <ScrollReveal>
          <div className="text-center max-w-[540px] mx-auto">
            <p className="label">Reference</p>
            <h2 className="mt-3">Co říkají naši klienti</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14 md:items-stretch">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100} className="h-full">
              <div className="bg-greige rounded-[2px] p-9 flex flex-col gap-5 h-full">
                <div className="font-heading text-[3rem] text-terracotta/40 leading-none">"</div>
                <p className="text-[.92rem] leading-[1.8] italic text-muted">{t.text}</p>
                <div
                  className="mt-auto pt-5 border-t"
                  style={{ borderColor: 'rgba(26,26,46,.10)' }}
                >
                  <div className="text-terracotta text-[.85rem] tracking-[2px] mb-2">★★★★★</div>
                  <strong className="block text-[.85rem] font-semibold text-midnight">{t.name}</strong>
                  <span className="text-[.78rem] text-muted-light">{t.role}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
