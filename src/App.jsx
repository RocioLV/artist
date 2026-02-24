// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-gray-900">
      <Navbar />
      <Hero />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App