const Hero = () => {
    const imageId = "113"; 
    const bgUrl = `https://picsum.photos/id/${imageId}/2560/1440.webp?blur=8`;
  
    return (
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* CAPA 1: Fondo con la técnica de fundido que ya dominas */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${bgUrl}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9F9F7]/40 to-[#F9F9F7]"></div>
        </div>
  
        {/* CAPA 3: Contenido Minimalista */}
        <div className="relative z-10 text-center px-6">
          
          {/* Nombre: Usamos Serif, bajamos el peso a 'medium' y el tamaño */}
          <h1 className="font-raleway text-1xl md:text-4xl text-gray-800 font-light tracking-[0.1em] mb-4">
            i.am.rocío<br /> 
            <span className="font-semibold text-emerald-800/80">
            
            </span>
          </h1>

          {/* Tagline: Más pequeña, más aire entre letras (tracking-widest) */}
          <p className="font-raleway text-gray-500 text-xs md:text-sm uppercase tracking-[0.4em] mb-12">
            Artista
          </p>

          {/* Botón: Menos "pesado", más elegante */}
          <div className="flex justify-center">
            <a 
              href="#galeria" 
              className="group relative inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-2 hover:border-emerald-600 transition-all duration-300"
            >
              Obras
              <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </a>
          </div>

        </div>
      </section>
    )
  }
  
  export default Hero