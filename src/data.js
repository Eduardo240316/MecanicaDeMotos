export const CONTACT = {
  brand: 'LA MECÁNICA',
  name: 'DE MOTOS',
  phone: '+51 993 174 565',
  phoneRaw: '51993174565',
  email: 'contacto@mecanicamotos.pe',
  address: 'Andahuaylas, Apurímac, Perú',
  hours: 'Lunes a Sábado: 8:00 am – 6:00 pm',
  specialties: 'Bajaj · TVS · Lineales',
}

export const services = [
  {
    icon: '🔧',
    title: 'Mecánica General',
    text: 'Diagnóstico y reparación integral de tu moto. Revisamos motor, transmisión, frenos y sistema eléctrico.',
    price: 'Desde S/. 50.00',
  },
  {
    icon: '🛢️',
    title: 'Cambio de Aceite',
    text: 'Cambio de aceite de motor con lubricantes de primera calidad para maximizar la vida útil de tu moto.',
    price: 'Desde S/. 25.00',
  },
  {
    icon: '⚙️',
    title: 'Afinamiento',
    text: 'Puesta a punto completa: carburador, bujías, filtros y ajuste de válvulas para un rendimiento óptimo.',
    price: 'Desde S/. 40.00',
  },
  {
    icon: '🏍️',
    title: 'Reparación de Motores',
    text: 'Rectificado, armado y reparación especializada de motores Bajaj y TVS con garantía de trabajo.',
    price: 'Consultar precio',
  },
  {
    icon: '🔩',
    title: 'Venta de Repuestos',
    text: 'Stock permanente de repuestos originales y alternativos para motos Bajaj y TVS al mejor precio.',
    price: 'Catálogo completo',
  },
  {
    icon: '🛡️',
    title: 'Revisión Preventiva',
    text: 'Inspección preventiva para detectar fallas antes de que ocurran. Mantén tu moto siempre lista.',
    price: 'Desde S/. 30.00',
  },
  {
    icon: '🎨',
    title: 'Accesorios',
    text: 'Venta e instalación de accesorios para personalizar y proteger tu moto: espejos, guardabarros, luces y más.',
    price: 'Variedad de precios',
  },
  {
    icon: '⚡',
    title: 'Sistema Eléctrico',
    text: 'Diagnóstico y reparación de sistema eléctrico: luces, arranque, instrumentos y cableado general.',
    price: 'Desde S/. 35.00',
  },
  {
    icon: '🔗',
    title: 'Transmisión',
    text: 'Cambio de cadena, piñones, ajuste de embrague y reparación completa del sistema de transmisión.',
    price: 'Desde S/. 45.00',
  },
]

export const products = [
  { name: 'Kit de Pistón Bajaj', cat: 'motor', price: 'S/. 85.00', desc: 'Pistón, anillos y pasador para Bajaj Pulsar' },
  { name: 'Filtro de Aceite', cat: 'motor', price: 'S/. 15.00', desc: 'Filtro de aceite universal para motos 150-200cc' },
  { name: 'Pastillas de Freno', cat: 'frenos', price: 'S/. 25.00', desc: 'Pastillas de freno delanteras para Bajaj y TVS' },
  { name: 'Disco de Freno', cat: 'frenos', price: 'S/. 65.00', desc: 'Disco de freno delantero ventilado 260mm' },
  { name: 'Regulador de Voltaje', cat: 'electrico', price: 'S/. 45.00', desc: 'Regulador rectificador para motos 12V' },
  { name: 'Kit de Luces LED', cat: 'electrico', price: 'S/. 35.00', desc: 'Kit de luces LED H4 alta y baja para motos' },
  { name: 'Kit de Cadena', cat: 'transmision', price: 'S/. 55.00', desc: 'Cadena, piñón y corona para Bajaj Discover' },
  { name: 'Cable de Embrague', cat: 'transmision', price: 'S/. 18.00', desc: 'Cable de embrague reforzado universal' },
  { name: 'Espejos Retrovisores', cat: 'accesorios', price: 'S/. 22.00', desc: 'Par de espejos universales cromados para moto' },
  { name: 'Guardabarros Deportivo', cat: 'accesorios', price: 'S/. 40.00', desc: 'Guardabarros trasero deportivo universal negro' },
]

export const productCategories = [
  { key: 'all', label: 'Todos' },
  { key: 'motor', label: 'Motor' },
  { key: 'frenos', label: 'Frenos' },
  { key: 'electrico', label: 'Eléctrico' },
  { key: 'transmision', label: 'Transmisión' },
  { key: 'accesorios', label: 'Accesorios' },
]

export const gallery = [
  { id: 1, cat: 'reparaciones', title: 'Reparación de motor Bajaj Pulsar' },
  { id: 2, cat: 'mantenimiento', title: 'Cambio de aceite y filtros' },
  { id: 3, cat: 'reparaciones', title: 'Rectificado de cilindro' },
  { id: 4, cat: 'personalizacion', title: 'Personalización de moto deportiva' },
  { id: 5, cat: 'mantenimiento', title: 'Afinamiento completo TVS Apache' },
  { id: 6, cat: 'taller', title: 'Vista general del taller' },
  { id: 7, cat: 'reparaciones', title: 'Reparación de sistema eléctrico' },
  { id: 8, cat: 'personalizacion', title: 'Pintura y acabado personalizado' },
  { id: 9, cat: 'taller', title: 'Área de herramientas especializadas' },
]

export const galleryCategories = [
  { key: 'all', label: 'Todos' },
  { key: 'reparaciones', label: 'Reparaciones' },
  { key: 'mantenimiento', label: 'Mantenimiento' },
  { key: 'personalizacion', label: 'Personalización' },
  { key: 'taller', label: 'Taller' },
]

export const testimonials = [
  {
    name: 'Carlos Mendoza',
    text: 'Excelente servicio. Llevé mi Bajaj Pulsar con un problema en el motor y me lo entregaron como nuevo en 2 días. Precios justos y buen trato.',
    rating: 5,
  },
  {
    name: 'María Huamán',
    text: 'El mejor taller de Andahuaylas. Siempre llevo mi TVS Apache para el mantenimiento. Son rápidos y confiables.',
    rating: 5,
  },
  {
    name: 'Jorge Quispe',
    text: 'Encontré todos los repuestos que necesitaba para mi moto. Precios competitivos y atención personalizada. Muy recomendado.',
    rating: 5,
  },
]

export const brands = ['Bajaj', 'TVS', 'Honda', 'Yamaha']

export const stats = [
  { value: 5000, suffix: '+', label: 'Motos Reparadas' },
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 100, suffix: '%', label: 'Garantía' },
  { value: 500, suffix: '+', label: 'Repuestos en Stock' },
]

export const processSteps = [
  { num: '01', title: 'Recepción', desc: 'Recibimos tu moto y escuchamos el problema o servicio que necesitas.' },
  { num: '02', title: 'Diagnóstico', desc: 'Realizamos una inspección detallada para identificar todas las fallas.' },
  { num: '03', title: 'Presupuesto', desc: 'Te presentamos un presupuesto claro y transparente antes de empezar.' },
  { num: '04', title: 'Reparación', desc: 'Nuestros técnicos trabajan con repuestos de calidad y garantía.' },
  { num: '05', title: 'Entrega', desc: 'Entregamos tu moto lista, probada y con garantía de trabajo.' },
]

export const whyUs = [
  { icon: '⚡', title: 'Rapidez', desc: 'Servicio express para reparaciones urgentes. Tu moto lista en el menor tiempo.' },
  { icon: '🛡️', title: 'Garantía', desc: 'Todos nuestros trabajos incluyen garantía. Respaldamos la calidad de nuestro servicio.' },
  { icon: '💰', title: 'Precios Justos', desc: 'Presupuestos transparentes y competitivos. Sin costos ocultos ni sorpresas.' },
  { icon: '🏍️', title: 'Especialización', desc: 'Técnicos certificados con experiencia en motos Bajaj, TVS, Honda y Yamaha.' },
]
