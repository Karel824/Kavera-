import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Rozcestnik from '@/components/Rozcestnik'
import ONas from '@/components/ONas'
import NajemniBty from '@/components/NajemniBty'
import Projekty from '@/components/Projekty'
import Statistiky from '@/components/Statistiky'
import Reference from '@/components/Reference'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Rozcestnik />
        <ONas />
        <NajemniBty />
        <Projekty />
        <Statistiky />
        <Reference />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
