import { useState } from 'react';
import { artworksData } from '../data/artworks';
import ArtCard from './ArtCard';

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  // Tomamos solo las 5 destacadas
  const featured = artworksData.filter(art => art.featured).slice(0, 5);

  return (
    <section id="galeria" className="py-40 px-6 max-w-7xl mx-auto bg-[#F9F9F7]">
      
      {/* Encabezado con aire */}
      <div className="mb-64 md:ml-12 border-l border-emerald-600 pl-8">
        <h2 className="font-raleway text-[10px] uppercase tracking-[0.6em] text-emerald-700 mb-4">
          Selección de Obras
        </h2>
        <p className="font-raleway text-4xl md:text-5xl font-light text-gray-800 italic">
          Curaduría Personal
        </p>
      </div>

      {/* Grid de 12 columnas: Recuperamos la asimetría y el gap extremo */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-40 md:gap-y-80 items-start">
        
        {/* OBRA 1: Izquierda */}
        <div className="md:col-span-5 md:col-start-1" onClick={() => setSelectedArt(featured[0])}>
          <ArtCard title={featured[0]?.title} category={featured[0]?.technique} image={featured[0]?.mainImage} />
        </div>

        {/* OBRA 2: Derecha y desplazada abajo */}
        <div className="md:col-span-4 md:col-start-8 md:mt-64" onClick={() => setSelectedArt(featured[1])}>
          <ArtCard title={featured[1]?.title} category={featured[1]?.technique} image={featured[1]?.mainImage} />
        </div>

        {/* OBRA 3: Central y ancha */}
        <div className="md:col-span-7 md:col-start-3" onClick={() => setSelectedArt(featured[2])}>
          <ArtCard title={featured[2]?.title} category={featured[2]?.technique} image={featured[2]?.mainImage} />
        </div>

        {/* OBRA 4: Izquierda media */}
        <div className="md:col-span-4 md:col-start-2 md:mt-32" onClick={() => setSelectedArt(featured[3])}>
          <ArtCard title={featured[3]?.title} category={featured[3]?.technique} image={featured[3]?.mainImage} />
        </div>

        {/* OBRA 5: Derecha superior */}
        <div className="md:col-span-5 md:col-start-7" onClick={() => setSelectedArt(featured[4])}>
          <ArtCard title={featured[4]?.title} category={featured[4]?.technique} image={featured[4]?.mainImage} />
        </div>

      </div>

      {/* Botón Ver Más */}
      <div className="mt-80 flex justify-center">
        <button className="font-raleway text-[10px] uppercase tracking-[0.5em] border border-gray-200 px-12 py-6 hover:bg-gray-900 hover:text-white transition-all duration-500">
          Explorar Archivo Completo
        </button>
      </div>

      {/* MODAL (Versión 1: Elegante y contenido) */}
      {selectedArt && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/10 backdrop-blur-md"
          onClick={() => setSelectedArt(null)}
        >
          <div 
            className="bg-[#F9F9F7] max-w-4xl w-full p-8 md:p-12 shadow-2xl relative grid grid-cols-1 md:grid-cols-2 gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedArt(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black">✕</button>
            
            <div className="overflow-hidden">
              <img src={selectedArt.mainImage} alt={selectedArt.title} className="w-full h-auto object-cover shadow-lg" />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <span className="font-raleway text-[10px] text-emerald-700 font-bold uppercase tracking-widest">{selectedArt.technique}</span>
              <h3 className="font-raleway text-3xl font-light italic text-gray-800">{selectedArt.title}</h3>
              <p className="font-raleway text-sm text-gray-500 leading-relaxed">
                {selectedArt.description || "Sin descripción disponible."}
              </p>
              <div className="h-[1px] w-12 bg-gray-200 mt-4"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;