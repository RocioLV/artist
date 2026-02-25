import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* Lado Izquierdo: Tu "Retrato" o foto de proceso */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 shadow-2xl">
            <img 
              src="https://picsum.photos/id/64/800/1200" // Aquí irá tu foto
              alt="Rocío en su estudio"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          {/* Un detalle decorativo minimalista */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-emerald-800/30"></div>
        </div>

        {/* Lado Derecho: Tu historia */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <h1 className="font-raleway text-5xl md:text-7xl font-light italic text-gray-800 tracking-tighter">
            Sobre la <span className="font-normal not-italic">Artista</span>
          </h1>
          
          <div className="space-y-6 font-raleway text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
            <p>
              Aquí va tu declaración artística. Puedes hablar de tu búsqueda con el color, 
              las texturas o qué es lo que te motiva a crear. Mantén frases cortas y poderosas.
            </p>
            <p className="italic border-l-2 border-emerald-600 pl-4 py-2 bg-emerald-50/30">
              "El arte no es lo que ves, sino lo que haces que otros vean."
            </p>
            <p>
              Menciona tus técnicas favoritas: desde la fluidez de la acuarela hasta 
              la precisión del arte digital. Tu formación y tu visión del mundo.
            </p>
          </div>

          <div className="mt-8">
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