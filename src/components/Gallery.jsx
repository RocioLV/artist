import ArtCard from './ArtCard'

const Gallery = () => {
  const artworks = [
    { 
      id: 1, 
      title: "Nebulosa Eterna", 
      category: "Digital", 
      image: "https://picsum.photos/id/10/800/1000" 
    },
    { 
      id: 2, 
      title: "Caos Orgánico", 
      category: "Óleo", 
      image: "https://picsum.photos/id/12/800/1000" 
    },
    { 
      id: 3, 
      title: "Futuro Líquido", 
      category: "3D", 
      image: "https://picsum.photos/id/15/800/1000" 
    },
  ]

  return (
    <section id="galeria" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((art) => (
          <ArtCard 
            key={art.id} 
            title={art.title} 
            category={art.category} 
            image={art.image}  // <--- ¡REVISA QUE ESTA LÍNEA ESTÉ AQUÍ!
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery