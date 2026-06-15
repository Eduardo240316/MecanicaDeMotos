import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Repuestos from './pages/Repuestos'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/repuestos" element={<Repuestos />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <WhatsAppButton />
          </Layout>
        }
      />
    </Routes>
  )
}
