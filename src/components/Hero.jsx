const Hero = () => {
    const imageId = "192"; 
    const bgColor = "#F9F9F7"; // Usando el color sugerido
    const bgUrl = `https://picsum.photos/id/${imageId}/2560/1440.webp?blur=8`;
  
    return (
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* CAPA 1: La imagen de fondo */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${bgUrl}")` }}
        >
          {/* CAPA 2: El degradado corregido para el nuevo color */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9F9F7]/30 to-[#F9F9F7]"
          ></div>
        </div>
  
        {/* CAPA 3: El contenido */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-8xl font-black leading-tight mb-6 uppercase tracking-tighter text-gray-900">
            Rocío <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-700">
              Lorca Villalobos
            </span>
          </h1>
          <p className="font-sans text-gray-700 text-xl max-w-2xl mx-auto font-light mb-10 italic">
            Explorando nuevas fronteras visuales.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#galeria" className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200">
              Explorar Galería
            </a>
          </div>
        </div>
        
      </section>
    )
  }
  
  export default Hero