export default function ServiceCard({ icon, title, text, price }) {
  return (
    <div className="group rounded-xl bg-dark-700 border border-white/5 p-6 transition hover:border-red/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-red/5">
      <div className="w-12 h-12 rounded-lg bg-dark-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-red/10 transition">
        {icon}
      </div>
      <h3 className="font-condensed text-lg font-semibold uppercase tracking-wider text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray leading-relaxed mb-3">{text}</p>
      <span className="font-condensed text-sm font-semibold uppercase tracking-wider text-red">
        {price}
      </span>
    </div>
  )
}
