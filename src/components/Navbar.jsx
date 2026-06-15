import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { CONTACT } from '../data'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/repuestos', label: 'Repuestos' },
  { to: '/galeria', label: 'Galería' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/96 shadow-lg shadow-black/30'
          : 'bg-dark-900/88 backdrop-blur-xl'
      }`}
      style={{ borderBottom: '1px solid rgba(232,0,29,0.2)' }}
    >
      <div className="container-x flex items-center justify-between h-16">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `font-condensed text-sm uppercase tracking-wider font-semibold transition hover:text-red ${
                  isActive ? 'text-red' : 'text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`https://wa.me/${CONTACT.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            WhatsApp 📲
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-dark-900/95 backdrop-blur-xl px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-condensed text-sm uppercase tracking-wider font-semibold ${isActive ? 'text-red' : 'text-white'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={`https://wa.me/${CONTACT.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-red mt-2"
            >
              WhatsApp 📲
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
