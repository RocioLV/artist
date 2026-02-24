// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    // bg-[#F1F1F1] pone el fondo claro
    // text-gray-900 hace que todo el texto sea gris oscuro (legible)
    <div className="min-h-screen bg-[#F9F9F7] text-gray-900">
      <Navbar />
      <Hero />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App