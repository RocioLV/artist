const Hero = () => {
  // Asegúrate de que esta ruta sea la correcta en tu carpeta public
  const bgUrl = "/assets/artworks/pastel-paisaje.jpg";

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* CAPA 1: Tu Obra con Blur */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-100" // scale-110 evita bordes blancos al usar blur
          style={{ 
            backgroundImage: `url("${bgUrl}")`,
            filter: 'blur(4px)' // Aquí controlas qué tan sutil es el desenfoque
          }}
        ></div>

        {/* CAPA 2: Degradado para fundir con el fondo de la web */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#F9F9F7]/20 to-[#F9F9F7]"></div>
      </div>

      {/* CAPA 3: Contenido Minimalista */}
      <div className="relative z-10 text-center px-6">
        
        {/* Nombre */}
        <h1 className="font-raleway text-3xl md:text-5xl text-gray-00 font-light tracking-widest mb-4">
          del<span className="font-bold">Rocío</span>
        </h1>

        {/* Tagline */}
        <p className="font-raleway text-gray-500 text-xs md:text-sm uppercase tracking-[0.4em] mb-12">
          Artista Visual
        </p>

        {/* Botón */}
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

export default Hero;