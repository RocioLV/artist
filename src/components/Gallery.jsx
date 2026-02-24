import ArtCard from './ArtCard'

const Gallery = () => {
  const artworks = [
    { id: 1, title: "Nebulosa Eterna", category: "Digital", image: "https://picsum.photos/id/10/800/1000" },
    { id: 2, title: "Caos Orgánico", category: "Óleo", image: "https://picsum.photos/id/12/800/1000" },
    { id: 3, title: "Futuro Líquido", category: "3D", image: "https://picsum.photos/id/15/800/1000" },
  ]

  return (
    <section id="galeria" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Encabezado de la Galería */}
      <div className="mb-20 text-center">
        <h2 className="font-raleway text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.5em] mb-4">
          Selección de Obras
        </h2>
        <p className="font-raleway text-1xl md:text-2xl font-light text-gray-800 tracking-tight">
          GALERÍA
        </p>
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {artworks.map((art) => (
          <ArtCard key={art.id} {...art} />
        ))}
      </div>
    </section>
  )
}

export default Gallery