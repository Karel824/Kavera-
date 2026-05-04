import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const properties = [
  {
    img: '/hf_20260501_225344_1ddaf51d-cf0f-4c71-81e9-6ada3fad1d78.png',
    alt: 'Byt 3+kk, Židenice',
    tag: 'Nový',
    tagNew: true,
    location: 'Brno — Židenice',
    name: 'Byt 3+kk se světlým obývacím pokojem',
    meta: ['↔ 82 m²', '↑ 3. patro', '⬤ Volný ihned'],
    price: '22 500 Kč',
  },
  {
    img: '/hf_20260501_225412_6d5d9339-8f78-4f1b-93eb-425fe73b4616.png',
    alt: 'Byt 2+kk, Masarykova čtvrť',
    tag: 'K dispozici',
    tagNew: false,
    location: 'Brno — Masarykova čtvrť',
    name: 'Byt 2+kk s designovou kuchyní',
    meta: ['↔ 58 m²', '↑ 2. patro', '⬤ Volný od 1. 6.'],
    price: '17 200 Kč',
  },
  {
    img: '/hf_20260501_225354_c85522ff-fb66-4054-8457-6489a7c919dd.png',
    alt: 'Byt 1+kk, Židenice',
    tag: 'K dispozici',
    tagNew: false,
    location: 'Brno — Židenice',
    name: 'Byt 1+kk, plně zařízený',
    meta: ['↔ 38 m²', '↑ 4. patro', '⬤ Volný ihned'],
    price: '13 900 Kč',
  },
]

export default function NajemniBty() {
  return (
    <section id="najemni-byty" className="bg-greige py-24">
      <div className="mx-auto max-w-[1600px] px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14 gap-8 max-md:flex-col max-md:items-start">
            <div className="flex flex-col gap-3">
              <p className="label">Nájemní portfolio</p>
              <h2>Aktuální nabídka bytů</h2>
              <p className="max-w-[480px] text-[.95rem]">
                Výběr z pečlivě spravovaného portfolia. Každý byt osobně připraven na váš příchod.
              </p>
            </div>
            <a href="#kontakt" className="btn btn-ghost flex-shrink-0">Zobrazit vše</a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {properties.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group bg-white rounded-[2px] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(26,26,46,.12)] hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className={`absolute top-4 left-4 text-white text-[.68rem] font-semibold tracking-[.1em] uppercase px-3 py-[5px] rounded-[1px] ${p.tagNew ? 'bg-terracotta' : 'bg-forest'}`}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="px-7 pt-6 pb-7">
                  <p className="text-[.75rem] font-semibold tracking-[.08em] uppercase text-muted-light mb-1.5">
                    {p.location}
                  </p>
                  <h4 className="font-heading text-[1.25rem] mb-3">{p.name}</h4>
                  <div className="flex gap-5 text-[.8rem] text-muted-light mb-5">
                    {p.meta.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                  <div
                    className="border-t pt-[18px]"
                    style={{ borderColor: 'rgba(26,26,46,.10)' }}
                  >
                    <div className="font-heading text-[1.45rem] text-midnight font-medium mb-4">
                      {p.price}
                      <small className="font-sans text-[.72rem] text-muted-light font-normal ml-1">
                        / měsíc vč. energií
                      </small>
                    </div>
                    <a
                      href="#kontakt"
                      className="btn btn-primary w-full text-center text-[.72rem] py-3"
                    >
                      Domluvit prohlídku
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
