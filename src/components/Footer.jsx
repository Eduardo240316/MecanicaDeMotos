import { Link } from 'react-router-dom'
import Logo from './Logo'
import { CONTACT } from '../data'

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray leading-relaxed">
              Taller especializado en motos Bajaj, TVS, Honda y Yamaha. Servicio de mantenimiento, reparación y venta de repuestos en Andahuaylas, Apurímac.
            </p>
          </div>

          <div>
            <h4 className="font-condensed text-sm font-semibold uppercase tracking-wider text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray">
              <li><Link to="/servicios" className="hover:text-red transition">Mecánica General</Link></li>
              <li><Link to="/servicios" className="hover:text-red transition">Cambio de Aceite</Link></li>
              <li><Link to="/servicios" className="hover:text-red transition">Afinamiento</Link></li>
              <li><Link to="/servicios" className="hover:text-red transition">Reparación de Motores</Link></li>
              <li><Link to="/servicios" className="hover:text-red transition">Sistema Eléctrico</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-condensed text-sm font-semibold uppercase tracking-wider text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray">
              <li><Link to="/" className="hover:text-red transition">Inicio</Link></li>
              <li><Link to="/repuestos" className="hover:text-red transition">Repuestos</Link></li>
              <li><Link to="/galeria" className="hover:text-red transition">Galería</Link></li>
              <li><Link to="/contacto" className="hover:text-red transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-condensed text-sm font-semibold uppercase tracking-wider text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray">
              <li>
                <a href={`https://wa.me/${CONTACT.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="hover:text-red transition">
                  📲 WhatsApp
                </a>
              </li>
              <li><a href="#" className="hover:text-red transition">📘 Facebook</a></li>
              <li><a href="#" className="hover:text-red transition">📸 Instagram</a></li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-red transition">
                  📞 {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-red transition">
                  📧 Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-gray">
          © {new Date().getFullYear()} La Mecánica de Motos · Andahuaylas, Apurímac, Perú
        </div>
      </div>
    </footer>
  )
}
