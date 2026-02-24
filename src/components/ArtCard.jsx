const ArtCard = ({ title, category, image }) => {
    return (
      <div className="group cursor-pointer">
        {/* Contenedor de Imagen con bordes más suaves o rectos para minimalismo */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 mb-4">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Un sutil overlay que solo aparece al hacer hover */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
  
        {/* Información de la Obra: Raleway en estado puro */}
        <div className="flex flex-col gap-1">
          <span className="font-raleway text-[10px] uppercase tracking-[0.3em] text-emerald-700 font-bold">
            {category}
          </span>
          <h3 className="font-raleway text-lg font-light text-gray-800 tracking-wide group-hover:text-emerald-900 transition-colors">
            {title}
          </h3>
        </div>
      </div>
    )
  }
  
  export default ArtCard