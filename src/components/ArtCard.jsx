const ArtCard = ({ title, category, image }) => {
    return (
      <div 
        onClick={() => alert(`Pieza seleccionada: ${title}`)}
        className="group relative overflow-hidden rounded-2xl bg-gray-900 transition-all hover:-translate-y-2 cursor-pointer shadow-2xl"
      >
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-1">{category}</p>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
    )
  }
  
  export default ArtCard