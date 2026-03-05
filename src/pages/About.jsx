import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Mantenemos el mismo padding y max-width que en Archive para consistencia
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-[#F9F9F7]">
      
      {/* Título de la Sección: AHORA IGUAL AL ARCHIVO */}
      <header className="mb-20">
        <h1 className="section-title">
          Sobre la <span className="font-normal not-italic">Artista</span>
        </h1>
        <p className="section-subtitle">Biografía y visión</p>
      </header>

      {/* Grid de contenido */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* Lado Izquierdo: Tu "Retrato" */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 shadow-2xl">
            <img 
              src="/assets/artworks/tinta-autoretrato.jpg" // Usa tu foto real aquí
              alt="Rocío"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-emerald-800/30"></div>
        </div>

        {/* Lado Derecho: Tu historia */}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-6 font-raleway text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
            <p>
              Aquí va tu declaración artística...
            </p>
            <p className="section-subtitle">
              "El arte no es lo que ves, sino lo que haces que otros vean."
            </p>
            <p>
              Menciona tus técnicas favoritas...
            </p>
          </div>

          <div className="pt-8">
             <span className="font-raleway text-[10px] uppercase tracking-[0.4em] text-emerald-800 font-bold">
               Basada en Chile / Disponible para proyectos
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;