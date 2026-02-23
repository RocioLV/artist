const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-md border-b border-white/10 fixed top-0 w-full z-50">
        <div className="text-white font-black text-2xl tracking-tighter">
          ART<span className="text-purple-500">IST.</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Galería</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-purple-500/20">
          Explorar
        </button>
      </nav>
    )
  }
  
  export default Navbar