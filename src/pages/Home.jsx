import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT, services, stats, testimonials, brands, processSteps, whyUs } from '../data'
import ServiceCard from '../components/ServiceCard'

function useScrollReveal() {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    el.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [])
  return ref
}

function AnimatedCounter({ value, suffix }) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let started = false
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true
        const duration = 2000
        const startTime = performance.now()
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.floor(eased * value).toLocaleString() + suffix
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function Home() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef}>
      {/* Ribbon */}
      <div className="bg-red py-2 text-center">
        <div className="container-x flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-white uppercase tracking-wider">
          <span>✓ Servicio Especializado</span>
          <span>✓ Confianza y Garantía</span>
          <span>✓ Rapidez y Eficiencia</span>
          <span className="hidden sm:inline">✓ Repuestos Originales</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-900" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[120px]" />

        <div className="container-x relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-red/10 border border-red/30 rounded-full px-4 py-1.5 mb-6 fade-in">
              <span className="text-xs font-semibold text-red uppercase tracking-wider">
                📍 {CONTACT.address}
              </span>
            </div>

            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-4 fade-in">
              LA<br />
              <em className="not-italic text-red">MECÁNICA</em><br />
              DE MOTOS
            </h1>

            <p className="font-condensed text-xl uppercase tracking-wider text-gold mb-4 fade-in">
              {CONTACT.specialties}
            </p>

            <p className="text-gray leading-relaxed max-w-lg mb-8 fade-in">
              Taller especializado en mantenimiento, reparación y venta de repuestos para motos Bajaj y TVS en Andahuaylas. Servicio rápido, confiable y garantizado para todos los motociclistas de Apurímac.
            </p>

            <div className="flex flex-wrap gap-4 fade-in">
              <a
                href={`https://wa.me/${CONTACT.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
              >
                📲 Cotizar por WhatsApp
              </a>
              <Link to="/servicios" className="btn-outline">
                Ver Servicios →
              </Link>
            </div>
          </div>

          {/* Stats cards (desktop) */}
          <div className="hidden lg:flex absolute bottom-10 right-8 gap-4">
            {stats.slice(0, 3).map((s, i) => (
              <div key={i} className="bg-dark-700/80 backdrop-blur border border-white/10 rounded-xl px-5 py-4 text-center min-w-[120px] fade-in">
                <div className="font-heading text-3xl text-red">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="font-condensed text-[11px] uppercase tracking-wider text-gray mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Bar */}
      <section className="bg-dark-800 border-y border-white/5 py-10">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="fade-in">
              <div className="font-heading text-4xl md:text-5xl text-red">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-condensed text-xs uppercase tracking-wider text-gray mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container-x">
          <div className="mb-12 fade-in">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-red" />
              <span className="eyebrow">Lo que hacemos</span>
            </div>
            <h2 className="section-title">
              Nuestros <em className="not-italic text-red">Servicios</em>
            </h2>
            <p className="mt-4 text-gray max-w-xl">
              Ofrecemos una gama completa de servicios para mantener tu moto en óptimas condiciones.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s, i) => (
              <div key={i} className="fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-in">
            <Link to="/servicios" className="btn-outline">
              Ver Todos los Servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-800/50">
        <div className="container-x">
          <div className="text-center mb-14 fade-in">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="section-title mt-2">
              Nuestro <em className="not-italic text-red">Proceso</em>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 mx-auto rounded-full bg-red/10 border border-red/30 flex items-center justify-center font-heading text-2xl text-red mb-4">
                  {step.num}
                </div>
                <h3 className="font-condensed text-lg font-semibold uppercase tracking-wider text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="container-x">
          <div className="text-center mb-14 fade-in">
            <span className="eyebrow">Nuestra diferencia</span>
            <h2 className="section-title mt-2">
              ¿Por qué <em className="not-italic text-red">Elegirnos</em>?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-dark-700 border border-white/5 p-6 text-center hover:border-red/30 transition fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-condensed text-lg font-semibold uppercase tracking-wider text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-800/50">
        <div className="container-x">
          <div className="text-center mb-14 fade-in">
            <span className="eyebrow">Lo que dicen nuestros clientes</span>
            <h2 className="section-title mt-2">Testimonios</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl bg-dark-700 border border-white/5 p-6 fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-gold mb-3">{'★'.repeat(t.rating)}</div>
                <p className="text-sm text-gray leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center font-heading text-lg text-red">
                    {t.name[0]}
                  </div>
                  <span className="font-condensed text-sm font-semibold text-white uppercase tracking-wider">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 border-y border-white/5">
        <div className="container-x">
          <div className="text-center mb-8 fade-in">
            <span className="eyebrow">Trabajamos con</span>
            <h2 className="section-title mt-2">
              Marcas <em className="not-italic text-red">Especializadas</em>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 fade-in">
            {brands.map((b) => (
              <div
                key={b}
                className="font-heading text-3xl md:text-4xl text-white/30 hover:text-red transition cursor-default"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x text-center fade-in">
          <h2 className="section-title">
            ¿Necesitas <em className="not-italic text-red">Servicio</em>?
          </h2>
          <p className="mt-4 text-gray max-w-lg mx-auto">
            Contáctanos por WhatsApp y obtén un presupuesto rápido y sin compromiso.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={`https://wa.me/${CONTACT.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-lg px-8 py-4"
            >
              📲 Cotizar por WhatsApp
            </a>
            <Link to="/contacto" className="btn-outline">
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
