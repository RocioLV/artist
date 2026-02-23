const Hero = () => {
    return (
      <main className="flex flex-col items-center justify-center pt-48 pb-20 px-4">
        <h1 className="text-7xl font-black text-center leading-tight mb-6">
          CREANDO <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            EXPERIENCIAS
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl text-center font-light leading-relaxed">
          Diseño visual, desarrollo moderno y la esencia del arte digital 
          unidos en un solo lugar.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
            Ver Galería
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
            Saber más
          </button>
        </div>
      </main>
    )
  }
  
  export default Hero