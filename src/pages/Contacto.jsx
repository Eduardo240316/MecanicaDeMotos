import { useState, useEffect, useRef } from 'react'
import { CONTACT } from '../data'
import PageBanner from '../components/PageBanner'

export default function Contacto() {
  const ref = useRef()
  const [form, setForm] = useState({ nombre: '', telefono: '', moto: '', servicio: '', mensaje: '' })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `🏍️ *CONSULTA — La Mecánica de Motos*%0A%0A👤 *Nombre:* ${form.nombre}%0A📱 *Teléfono:* ${form.telefono}%0A🏍️ *Moto:* ${form.moto}%0A🔧 *Servicio:* ${form.servicio}%0A%0A📝 *Mensaje:*%0A${form.mensaje}`
    window.open(`https://wa.me/${CONTACT.phoneRaw}?text=${msg}`, '_blank')
  }

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <div ref={ref}>
      <PageBanner title="Contáctanos" subtitle="Estamos aquí para ti" />

      <section className="pb-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div className="fade-in">
              <p className="text-gray mb-8 leading-relaxed">
                ¿Tienes alguna consulta o quieres agendar un servicio? Escríbenos por WhatsApp o llena el formulario.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red shrink-0">📍</div>
                  <div>
                    <h4 className="font-condensed text-sm font-semibold uppercase tracking-wider text-white">Ubicación</h4>
                    <p className="text-sm text-gray mt-1">{CONTACT.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red shrink-0">📱</div>
                  <div>
                    <h4 className="font-condensed text-sm font-semibold uppercase tracking-wider text-white">Teléfono / WhatsApp</h4>
                    <a href={`tel:${CONTACT.phone}`} className="text-sm text-gray mt-1 hover:text-red transition">{CONTACT.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red shrink-0">🕐</div>
                  <div>
                    <h4 className="font-condensed text-sm font-semibold uppercase tracking-wider text-white">Horario</h4>
                    <p className="text-sm text-gray mt-1">{CONTACT.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center text-red shrink-0">📧</div>
                  <div>
                    <h4 className="font-condensed text-sm font-semibold uppercase tracking-wider text-white">Email</h4>
                    <a href={`mailto:${CONTACT.email}`} className="text-sm text-gray mt-1 hover:text-red transition">{CONTACT.email}</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="btn-red">📲 WhatsApp</a>
                <a href="#" className="btn-dark">📘 Facebook</a>
                <a href="#" className="btn-dark">📸 Instagram</a>
              </div>
            </div>

            {/* Form */}
            <div className="fade-in">
              <form onSubmit={handleSubmit} className="rounded-2xl bg-dark-700 border border-white/5 p-6 md:p-8 space-y-5">
                <div>
                  <label className="field-label">Tu nombre *</label>
                  <input type="text" required value={form.nombre} onChange={update('nombre')} className="field-input" placeholder="Ej: Juan Pérez" />
                </div>
                <div>
                  <label className="field-label">Tu teléfono *</label>
                  <input type="tel" required value={form.telefono} onChange={update('telefono')} className="field-input" placeholder="Ej: 993 174 565" />
                </div>
                <div>
                  <label className="field-label">Modelo de moto</label>
                  <select value={form.moto} onChange={update('moto')} className="field-input">
                    <option value="">Seleccionar modelo</option>
                    <option>Bajaj Pulsar</option>
                    <option>Bajaj Discover</option>
                    <option>Bajaj Boxer</option>
                    <option>TVS Apache</option>
                    <option>TVS Sport</option>
                    <option>TVS Star City</option>
                    <option>Honda CB</option>
                    <option>Yamaha FZ</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="field-label">Servicio requerido</label>
                  <select value={form.servicio} onChange={update('servicio')} className="field-input">
                    <option value="">Seleccionar servicio</option>
                    <option>Mecánica General</option>
                    <option>Cambio de Aceite</option>
                    <option>Afinamiento</option>
                    <option>Reparación de Motor</option>
                    <option>Sistema Eléctrico</option>
                    <option>Repuestos</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="field-label">Descripción del problema</label>
                  <textarea rows={4} value={form.mensaje} onChange={update('mensaje')} className="field-input resize-none" placeholder="Describe el problema o servicio que necesitas..." />
                </div>
                <button type="submit" className="btn-red w-full py-4 text-base">
                  📲 Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-x">
          <div className="text-center mb-8 fade-in">
            <span className="eyebrow">Visítanos</span>
            <h2 className="section-title mt-2">Nuestra <em className="not-italic text-red">Ubicación</em></h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/5 fade-in" style={{ filter: 'grayscale(0.8) invert(0.92) contrast(1.1)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31065.89!2d-73.39!3d-13.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916c1b5b5b5b5b5b%3A0x0!2sAndahuaylas!5e0!3m2!1ses!2spe!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación de La Mecánica de Motos"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
