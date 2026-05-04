import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function Projekty() {
  return (
    <section id="projekty" className="bg-midnight py-24 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14 gap-8 max-md:flex-col max-md:items-start">
            <div className="flex flex-col gap-3">
              <p className="label" style={{ color: 'rgba(244,241,235,.5)' }}>
                Developerské projekty
              </p>
              <h2 className="text-white">
                Architektura,<br />která přetrvává.
              </h2>
              <p className="text-[.95rem]" style={{ color: 'rgba(244,241,235,.7)' }}>
                Prémiové novostavby v Brně. Každý projekt navrhujeme, stavíme a spravujeme sami.
              </p>
            </div>
            <a href="#kontakt" className="btn btn-outline flex-shrink-0">Stáhnout ceník</a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-7">
            {/* Main project card */}
            <div className="group relative aspect-[4/3] rounded-[2px] overflow-hidden cursor-pointer">
              <Image
                src="/hf_20260429_221421_f1beea6b-f496-420b-8906-691590775326.png"
                alt="Projekt Lipová — Pisárky"
                fill
                className="object-cover transition-transform duration-[600ms] ease group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 100vw, 57vw"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300"
                style={{
                  background:
                    'linear-gradient(to top, rgba(26,26,46,.85) 0%, transparent 55%)',
                }}
              >
                <p className="label text-terracotta mb-1.5">Prémiový projekt</p>
                <h3 className="text-white text-[1.5rem] mb-2">Rezidence Lipová</h3>
                <p
                  className="text-[.85rem] max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100"
                  style={{ color: 'rgba(244,241,235,.75)' }}
                >
                  Exkluzivní vila v Pisárkách. Architektonicky výjimečný projekt s privátní
                  zahradou a prémiovými materiály.
                </p>
                <span className="inline-block mt-3 text-[.68rem] font-semibold tracking-[.1em] uppercase text-terracotta border border-terracotta px-[10px] py-1 rounded-[1px] self-start">
                  Ve výstavbě · 2026
                </span>
              </div>
            </div>

            {/* Sub cards */}
            <div className="grid grid-rows-2 gap-7 max-lg:grid-rows-none max-lg:grid-cols-2">
              <div className="group relative rounded-[2px] overflow-hidden cursor-pointer min-h-[220px]">
                <Image
                  src="/kluchova.png"
                  alt="Projekt Kluchova — Nový Lískovec"
                  fill
                  className="object-cover transition-transform duration-[600ms] ease group-hover:scale-[1.05]"
                  sizes="(max-width: 1024px) 50vw, 43vw"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(26,26,46,.85) 0%, transparent 55%)',
                  }}
                >
                  <p className="label text-terracotta mb-1.5">Nový Lískovec</p>
                  <h3 className="text-white text-[1.5rem] mb-2">Kluchova Residence</h3>
                  <p
                    className="text-[.85rem] max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100"
                    style={{ color: 'rgba(244,241,235,.75)' }}
                  >
                    Na hranici lesa. Moderní standard s výhledem na přírodu.
                  </p>
                  <span className="inline-block mt-3 text-[.68rem] font-semibold tracking-[.1em] uppercase text-terracotta border border-terracotta px-[10px] py-1 rounded-[1px] self-start">
                    Předprodej otevřen
                  </span>
                </div>
              </div>

              <div className="group relative rounded-[2px] overflow-hidden cursor-pointer min-h-[220px]">
                <Image
                  src="/prostejov.png"
                  alt="Projekt Prostějov"
                  fill
                  className="object-cover transition-transform duration-[600ms] ease group-hover:scale-[1.05]"
                  sizes="(max-width: 1024px) 50vw, 43vw"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,26,46,.85) 0%, transparent 55%)',
                  }}
                >
                  <p className="label text-terracotta mb-1.5">Připravujeme</p>
                  <h3 className="text-white text-[1.5rem] mb-2">Projekt Prostějov</h3>
                  <p
                    className="text-[.85rem] max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100"
                    style={{ color: 'rgba(244,241,235,.75)' }}
                  >
                    Nová bytová výstavba. Exkluzivní přístup pro registrované zájemce.
                  </p>
                  <a
                    href="#kontakt"
                    className="inline-block mt-3 text-[.68rem] font-semibold tracking-[.1em] uppercase text-terracotta border border-terracotta px-[10px] py-1 rounded-[1px] self-start"
                  >
                    Registrovat zájem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
