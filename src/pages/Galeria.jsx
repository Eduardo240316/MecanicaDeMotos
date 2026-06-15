import { useState, useEffect, useRef } from 'react'
import { gallery, galleryCategories } from '../data'
import PageBanner from '../components/PageBanner'

export default function Galeria() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
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

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const filtered = filter === 'all' ? gallery : gallery.filter((g) => g.cat === filter)

  return (
    <div ref={ref}>
      <PageBanner title="Galería de Trabajos" subtitle="Nuestro trabajo" />

      <section className="pb-20">
        <div className="container-x">
          <p className="text-gray max-w-2xl mb-8 fade-in">
            Mira algunos de nuestros trabajos realizados. Cada moto que pasa por nuestras manos recibe atención al detalle y dedicación profesional.
          </p>

          <div className="flex flex-wrap gap-2 mb-10 fade-in">
            {galleryCategories.map((c) => (
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="relative rounded-xl overflow-hidden bg-dark-700 cursor-pointer group fade-in"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="h-56 bg-dark-600 flex items-center justify-center">
                  <span className="text-5xl opacity-20 group-hover:scale-110 transition">🏍️</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <div>
                    <span className="font-condensed text-[11px] uppercase tracking-wider text-red">{item.cat}</span>
                    <p className="text-sm text-white font-semibold mt-1">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full rounded-2xl bg-dark-700 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="h-[50vh] bg-dark-600 flex items-center justify-center">
              <span className="text-8xl opacity-20">🏍️</span>
            </div>
            <div className="p-6">
              <span className="font-condensed text-xs uppercase tracking-wider text-red">{lightbox.cat}</span>
              <h3 className="font-condensed text-xl font-semibold uppercase text-white mt-1">{lightbox.title}</h3>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-900/80 text-white flex items-center justify-center hover:bg-red transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
