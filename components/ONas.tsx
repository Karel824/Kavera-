import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const values = [
  {
    title: 'Přímý vztah bez provize',
    desc: 'Jednáte s majitelem 40 bytů v Brně. Žádné provize RK, jen férová dohoda napřímo.',
  },
  {
    title: 'Dostupnost bez kompromisů',
    desc: 'Startovací byty za jasnou cenu včetně energií. Funkční domov, který dává smysl.',
  },
  {
    title: 'Trvalá hodnota',
    desc: 'Poctivé rekonstrukce i novostavby v evropském standardu. Kvalita, která neztrácí časem na ceně.',
  },
  {
    title: 'Garance osobní správy',
    desc: 'O byty se staráme i po předání klíčů. Profesionální servis se zárukou rodinné firmy.',
  },
]

export default function ONas() {
  return (
    <section id="o-nas" className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <ScrollReveal direction="left" className="relative pb-5 pr-5">
            <div className="group overflow-hidden rounded-[2px]">
              <Image
                src="/fotka-o-nas.png"
                alt="Interiér nájemního bytu Kavera Reality"
                width={900}
                height={900}
                className="w-full h-auto object-cover transition-transform duration-[600ms] ease group-hover:scale-[1.03]"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] border-[1.5px] border-terracotta rounded-[2px] -z-10 pointer-events-none" />
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col gap-7">
              <p className="label">O nás</p>
              <h2>Váš partner pro bydlení.</h2>
              <p className="text-[.96rem] leading-[1.8]">
                Kavera Reality spojuje vlastní správu nájemních bytů s realizací rezidenčních
                staveb a rekonstrukcí v Brně a okolí. Naše práce nekončí předáním klíčů nebo
                podpisem smlouvy – v našich objektech zůstáváme i po jejich dokončení jako přímí
                majitelé a správci.
              </p>
              <div className="grid grid-cols-2 gap-5 mt-2">
                {values.map(({ title, desc }, i) => (
                  <div
                    key={title}
                    className="group bg-greige border-l-[3px] border-terracotta px-6 py-6 hover:shadow-[0_8px_32px_rgba(26,26,46,.08)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="font-heading text-[2.2rem] leading-none font-semibold text-terracotta/20 block mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-heading text-[1rem] font-semibold text-midnight mb-2 leading-snug">
                      {title}
                    </h4>
                    <p className="text-[.85rem] leading-[1.7]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
