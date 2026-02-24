const Navbar = () => {
    return (
      // bg-white/70 + backdrop-blur: Crea el efecto de vidrio sobre el fondo claro
      // border-b: Una línea muy sutil abajo para separar el nav del contenido
      <nav className="flex justify-between items-center p-6 bg-white/70 backdrop-blur-lg border-b border-gray-100 fixed top-0 w-full z-50">
        
        {/* LOGO: Ahora en gris oscuro con el detalle en esmeralda */}
        <div className="text-gray-900 font-display font-black text-2xl tracking-tighter">
          ROCÍO<span className="text-emerald-600">.</span>
        </div>
  
        {/* LINKS: Gris medio que cambia a esmeralda al pasar el mouse */}
        <div className="hidden md:flex gap-10 text-gray-600 font-medium tracking-wide uppercase text-xs">
          <a href="#" className="hover:text-emerald-600 transition-colors">Inicio</a>
          <a href="#galeria" className="hover:text-emerald-600 transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-emerald-600 transition-colors">Contacto</a>
        </div>
  
        {/* BOTÓN: Mantener el esmeralda pero con una sombra más suave */}
        <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
          Hablemos
        </button>
  
      </nav>
    )
  }
  
  export default Navbar