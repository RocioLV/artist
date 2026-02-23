import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Contact />
      
      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
        © 2026 Artist Project - Rocío LV. Creado con React + Tailwind.
      </footer>
    </div>
  )
}

export default App