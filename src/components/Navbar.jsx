const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-8 py-6 bg-[#F9F9F7]/80 backdrop-blur-md fixed top-0 w-full z-50">
        
        {/* LOGO: Raleway en peso 700 para que destaque sutilmente */}
        <div className="font-raleway font-bold text-xl tracking-[0.2em] text-gray-900">
          ROCÍO<span className="text-emerald-600 font-light">LORCA</span>
        </div>
  
        {/* MENÚ: Muy minimalista, texto pequeño y espaciado */}
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-raleway font-semibold text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Inicio</a>
          <a href="#galeria" className="hover:text-gray-900 transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-gray-900 transition-colors">Contacto</a>
        </div>
  
        {/* BOTÓN: En lugar de un botón sólido, usaremos uno con borde fino (Ghost Button) */}
        <button className="font-raleway text-[10px] uppercase tracking-[0.3em] border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
          Mensaje
        </button>
  
      </nav>
    )
  }
  
  export default Navbar