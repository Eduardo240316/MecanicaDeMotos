import { useState, useEffect, useRef } from 'react'
import { products, productCategories, CONTACT } from '../data'
import PageBanner from '../components/PageBanner'

export default function Repuestos() {
  const [filter, setFilter] = useState('all')
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    el.querySelectorAll('.fade-in').forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  const filtered = filter === 'all' ? products : products.filter((p) => p.cat === filter)

  return (
    <div ref={ref}>
      <PageBanner title="Repuestos y Productos" subtitle="Catálogo" />

      <section className="pb-20">
        <div className="container-x">
          <p className="text-gray max-w-2xl mb-8 fade-in">
            Contamos con un amplio stock de repuestos originales y alternativos para motos Bajaj y TVS. Consulta disponibilidad por WhatsApp.
          </p>

          <div className="flex flex-wrap gap-2 mb-10 fade-in">
            {productCategories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`font-condensed text-sm uppercase tracking-wider px-5 py-2 rounded-full border transition ${
                  filter === c.key
                    ? 'bg-red border-red text-white'
                    : 'border-white/20 text-gray hover:border-white/50 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <div
                key={p.name}
                className="rounded-xl bg-dark-700 border border-white/5 overflow-hidden group hover:border-red/30 transition fade-in"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="h-48 bg-dark-600 flex items-center justify-center">
                  <span className="text-5xl opacity-20">🏍️</span>
                </div>
                <div className="p-5">
                  <span className="font-condensed text-[11px] uppercase tracking-wider text-red">{p.cat}</span>
                  <h3 className="font-condensed text-lg font-semibold uppercase tracking-wider text-white mt-1">{p.name}</h3>
                  <p className="text-sm text-gray mt-2">{p.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-heading text-2xl text-gold">{p.price}</span>
                    <a
                      href={`https://wa.me/${CONTACT.phoneRaw}?text=Hola, me interesa: ${p.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-red hover:text-red-light transition uppercase tracking-wider"
                    >
                      Consultar →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
