import { useEffect, useRef } from 'react'
import { services } from '../data'
import PageBanner from '../components/PageBanner'
import ServiceCard from '../components/ServiceCard'

export default function Servicios() {
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

  return (
    <div ref={ref}>
      <PageBanner title="Nuestros Servicios" subtitle="Lo que hacemos" />

      <section className="pb-20">
        <div className="container-x">
          <p className="text-gray max-w-2xl mb-12 fade-in">
            Ofrecemos una gama completa de servicios para mantener tu moto en óptimas condiciones. Trabajamos con repuestos originales y alternativos de calidad.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
