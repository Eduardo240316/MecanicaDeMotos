export default function PageBanner({ title, subtitle }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container-x relative text-center">
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="mt-3 section-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
