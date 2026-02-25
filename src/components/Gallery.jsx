import { useState } from 'react';
import { artworksData } from '../data/artworks';
import { Link } from 'react-router-dom';
import ArtCard from './ArtCard';
import { motion, AnimatePresence } from 'framer-motion'; // 1. Importamos motion

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  // Tomamos solo las 5 destacadas
  const featured = artworksData.filter(art => art.featured).slice(0, 5);

  // Definimos una variante de animación para reutilizar
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } // Ease-out tipo museo
  };

  return (
    <section id="galeria" className="py-40 px-6 max-w-7xl mx-auto bg-[#F9F9F7]">
      
      {/* Encabezado con animación */}
      <motion.div 
        {...fadeInUp}
        className="mb-64 md:ml-12 border-l border-emerald-600 pl-8"
      >
        <h2 className="font-raleway text-[10px] uppercase tracking-[0.6em] text-emerald-700 mb-4">
          Selección de Obras
        </h2>
        <p className="font-raleway text-4xl md:text-5xl font-light text-gray-800 italic">
          Curaduría Personal
        </p>
      </motion.div>

      {/* Grid de 12 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-40 md:gap-y-80 items-start">
        
        {/* OBRA 1 */}
        <motion.div 
          {...fadeInUp}
          className="md:col-span-5 md:col-start-1 cursor-pointer" 
          onClick={() => setSelectedArt(featured[0])}
        >
          <ArtCard title={featured[0]?.title} category={featured[0]?.technique} image={featured[0]?.mainImage} />
        </motion.div>

        {/* OBRA 2 */}
        <motion.div 
          {...fadeInUp}
          className="md:col-span-4 md:col-start-8 md:mt-64 cursor-pointer" 
          onClick={() => setSelectedArt(featured[1])}
        >
          <ArtCard title={featured[1]?.title} category={featured[1]?.technique} image={featured[1]?.mainImage} />
        </motion.div>

        {/* OBRA 3 */}
        <motion.div 
          {...fadeInUp}
          className="md:col-span-7 md:col-start-3 cursor-pointer" 
          onClick={() => setSelectedArt(featured[2])}
        >
          <ArtCard title={featured[2]?.title} category={featured[2]?.technique} image={featured[2]?.mainImage} />
        </motion.div>

        {/* OBRA 4 */}
        <motion.div 
          {...fadeInUp}
          className="md:col-span-4 md:col-start-2 md:mt-32 cursor-pointer" 
          onClick={() => setSelectedArt(featured[3])}
        >
          <ArtCard title={featured[3]?.title} category={featured[3]?.technique} image={featured[3]?.mainImage} />
        </motion.div>

        {/* OBRA 5 */}
        <motion.div 
          {...fadeInUp}
          className="md:col-span-5 md:col-start-7 cursor-pointer" 
          onClick={() => setSelectedArt(featured[4])}
        >
          <ArtCard title={featured[4]?.title} category={featured[4]?.technique} image={featured[4]?.mainImage} />
        </motion.div>

      </div>

      {/* Botón Explorar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-80 flex justify-center"
      >
        <Link 
            to="/archivo" 
            className="font-raleway text-[10px] uppercase tracking-[0.5em] border border-gray-200 px-12 py-6 hover:bg-gray-900 hover:text-white transition-all duration-500 inline-block"
        >
            Explorar Archivo Completo
        </Link>
      </motion.div>

      {/* MODAL ANIMADO */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/20 backdrop-blur-md"
            onClick={() => setSelectedArt(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#F9F9F7] max-w-4xl w-full p-8 md:p-12 shadow-2xl relative grid grid-cols-1 md:grid-cols-2 gap-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedArt(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors text-xl">✕</button>
              
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;