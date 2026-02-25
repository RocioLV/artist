import ArtCard from './ArtCard'

const Gallery = () => {
  return (
    <section id="galeria" className="py-40 px-6 max-w-7xl mx-auto bg-[#F9F9F7]">
      
      {/* Título de la Sala con aire (White Space) */}
      <div className="mb-40 md:ml-12 border-l-2 border-emerald-600 pl-6">
        <h2 className="font-raleway text-[10px] uppercase tracking-[0.6em] text-emerald-700 mb-2">
          Exposición Permanente
        </h2>
        <p className="font-raleway text-4xl md:text-5xl font-light text-gray-800 italic">
          Espacios y Silencios
        </p>
      </div>

      {/* Grid de 12 columnas. gap-y-72 crea el gran espacio entre obras para que respiren */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-72 items-start">
        
        {/* PIEZA 1: Ocupa 5 columnas (Lado izquierdo) */}
        <div className="md:col-span-5 md:col-start-1">
          <ArtCard 
            title="Inercia Visual" 
            category="Digital Art" 
            image="https://picsum.photos/id/20/800/1000" 
          />
        </div>

        {/* PIEZA 2: Ocupa 4 columnas (Lado derecho y desplazada hacia abajo con mt-48) */}
        <div className="md:col-span-4 md:col-start-8 md:mt-48">
          <ArtCard 
            title="Composición Áurea" 
            category="Óleo" 
            image="https://picsum.photos/id/21/800/1000" 
          />
        </div>

        {/* PIEZA 3: Gran formato central (Para impacto visual) */}
        <div className="md:col-span-8 md:col-start-3">
          <ArtCard 
            title="Abstracción Líquida" 
            category="3D Render" 
            image="https://picsum.photos/id/22/1200/800" 
          />
        </div>

        {/* PIEZA 4: Pequeña y aislada a la derecha para cerrar la sala */}
        <div className="md:col-span-3 md:col-start-9">
          <ArtCard 
            title="Minimalismo II" 
            category="Fotografía" 
            image="https://picsum.photos/id/25/800/1000" 
          />
        </div>

      </div>
    </section>
  )
}

export default Gallery