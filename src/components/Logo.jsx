import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="w-10 h-10 bg-red rounded-lg flex items-center justify-center text-white font-heading text-xs leading-tight">
        <div className="text-center">
          <div className="text-[10px]">LA</div>
          <div className="text-[8px] text-gold">MOTO</div>
        </div>
      </div>
      <span className="font-condensed text-white text-sm font-semibold uppercase tracking-wider leading-tight">
        La Mecánica<br />de Motos
      </span>
    </Link>
  )
}
