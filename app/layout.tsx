import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Kavera Reality — Váš stabilní základ',
  description:
    'Moderní brněnská realitní a developerská společnost. Prémiové nájemní byty a developerské projekty v Brně.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link
          rel="preload"
          href="/hf_20260501_225354_c85522ff-fb66-4054-8457-6489a7c919dd.png"
          as="image"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
