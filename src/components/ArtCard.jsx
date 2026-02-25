const ArtCard = ({ title, category, image }) => {
    return (
      <div className="group flex flex-col gap-6">
        
        {/* Marco de la Obra: Bordes rectos y sombras que crecen al pasar el mouse */}
        <div className="relative overflow-hidden bg-white p-2 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-[1.03]"
          />
        </div>
  
        {/* Ficha de Museo: Información técnica minimalista */}
        <div className="flex flex-col border-l border-gray-200 pl-4 py-1 ml-2">
          <h3 className="font-raleway text-[11px] font-bold text-gray-800 uppercase tracking-[0.2em]">
            {title}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="font-raleway text-[9px] text-gray-400 uppercase tracking-tighter">
              {category}
            </span>
            {/* Separador visual fino */}
            <span className="w-8 h-[1px] bg-gray-200"></span>
            <span className="font-raleway text-[9px] text-gray-400 font-light">
              2026
            </span>
          </div>
        </div>
  
      </div>
    )
  }
  
  export default ArtCard