import { useState, useEffect } from 'react';
import { artworksData } from '../data/artworks';
import ArtCard from '../components/ArtCard';

const Archive = () => {
  const [filter, setFilter] = useState('todos');
  const [selectedArt, setSelectedArt] = useState(null);

  // Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lista de categorías únicas (sacadas automáticamente de tus datos)
  const categories = ['todos', ...new Set(artworksData.map(art => art.category))];

  // Lógica de filtrado
  const filteredArtworks = filter === 'todos' 
    ? artworksData 
    : artworksData.filter(art => art.category === filter);

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-[#F9F9F7]">
      
      {/* Título de la Sección */}
      <header className="mb-20">
        <h1 className="font-raleway text-5xl md:text-7xl font-light italic text-gray-800 mb-6">Archivo</h1>
        <p className="font-raleway text-xs uppercase tracking-[0.4em] text-gray-400">Colección completa por técnica</p>
      </header>

      {/* Barra de Filtros */}
      <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-16 border-b border-gray-100 pb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-raleway text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${
              filter === cat ? 'text-emerald-700 font-bold' : 'text-gray-400 hover:text-gray-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Grid de Archivo: Más compacto (3-4 columnas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {filteredArtworks.map(art => (
          <div key={art.id} onClick={() => setSelectedArt(art)}>
            <ArtCard title={art.title} category={art.technique} image={art.mainImage} />
          </div>
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {filteredArtworks.length === 0 && (
        <p className="text-center font-raleway text-gray-400 py-20">No hay obras en esta categoría aún.</p>
      )}

      {/* Reutilizamos el Modal (puedes luego extraerlo a un componente propio para ser más Senior) */}
      {selectedArt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/10 backdrop-blur-md" onClick={() => setSelectedArt(null)}>
          <div className="bg-[#F9F9F7] max-w-4xl w-full p-8 md:p-12 shadow-2xl relative grid grid-cols-1 md:grid-cols-2 gap-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedArt(null)} className="absolute top-6 right-6 text-gray-400">✕</button>
            <img src={selectedArt.mainImage} alt={selectedArt.title} className="w-full h-auto shadow-lg" />
            <div className="flex flex-col justify-center gap-4">
              <span className="font-raleway text-[10px] text-emerald-700 font-bold uppercase tracking-widest">{selectedArt.technique}</span>
              <h3 className="font-raleway text-3xl font-light italic text-gray-800">{selectedArt.title}</h3>
              <p className="font-raleway text-sm text-gray-500 leading-relaxed">{selectedArt.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;