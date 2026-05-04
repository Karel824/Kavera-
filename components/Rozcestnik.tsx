export default function Rozcestnik() {
  return (
    <div id="rozcestnik" className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-midnight px-16 py-[72px] flex flex-col gap-5 max-md:px-8">
        <span className="font-heading text-[4.5rem] leading-none text-white/10 -mb-2">01</span>
        <p className="label" style={{ color: 'rgba(244,241,235,.55)' }}>Nájemní bydlení</p>
        <h3 className="text-white" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)' }}>
          Kvalitní startovací byty v Brně
        </h3>
        <p className="font-light text-[.95rem]" style={{ color: 'rgba(244,241,235,.75)' }}>
          Pečlivě spravované portfolio přímo od majitele. Nabízíme férové bydlení s jasnými
          náklady, bez provize a s garancí stabilního zázemí.
        </p>
        <a href="#najemni-byty" className="btn btn-primary self-start mt-2">Zobrazit nabídku</a>
      </div>

      <div className="bg-forest px-16 py-[72px] flex flex-col gap-5 max-md:px-8">
        <span className="font-heading text-[4.5rem] leading-none text-white/10 -mb-2">02</span>
        <p className="label" style={{ color: 'rgba(244,241,235,.55)' }}>Developerské projekty</p>
        <h3 className="text-white" style={{ fontSize: 'clamp(1.5rem,2.5vw,2.2rem)' }}>
          Rezidenční projekty a revitalizace
        </h3>
        <p className="font-light text-[.95rem]" style={{ color: 'rgba(244,241,235,.75)' }}>
          Realizujeme moderní novostavby i citlivé rekonstrukce se zaměřením na trvalou hodnotu,
          evropský standard a kvalitu provedení.
        </p>
        <a href="#projekty" className="btn btn-outline self-start mt-2">Prozkoumat projekty</a>
      </div>
    </div>
  )
}
