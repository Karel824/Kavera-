'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { count: 40,  suffix: '',       label: 'Bytů v portfoliu' },
  { count: 16,  suffix: '',       label: 'Let na trhu' },
  { count: 98,  suffix: '%',      label: 'Obsazenost portfolia' },
  { count: 250, suffix: ' mil.+', label: 'Hodnota portfolia (Kč)' },
]

const borderCls = [
  'border-r border-b lg:border-b-0 border-white/25',
  'border-b lg:border-r lg:border-b-0 border-white/25',
  'border-r border-white/25',
  '',
]

function Counter({ count, suffix }: { count: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const duration = 1800
        const start = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.round(eased * count) + suffix
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        observer.unobserve(el)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [count, suffix])

  return (
    <div
      ref={ref}
      className="font-heading text-white font-medium leading-none mb-2"
      style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)' }}
    >
      0
    </div>
  )
}

export default function Statistiky() {
  return (
    <section id="statistiky" className="bg-terracotta py-[72px]">
      <div className="mx-auto max-w-[1600px] px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={`text-center px-6 py-8 ${borderCls[i]}`}>
              <Counter count={s.count} suffix={s.suffix} />
              <p className="text-[.78rem] font-medium tracking-[.08em] uppercase text-white/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
