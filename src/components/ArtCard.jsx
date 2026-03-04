import { useState } from 'react';
import Skeleton from './Skeleton';

const ArtCard = ({ title, category, image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group relative w-full h-full">
      {/* 1. El Skeleton: Solo se ve si isLoaded es false */}
      {!isLoaded && (
        <div className="aspect-[3/4] w-full">
           <Skeleton />
        </div>
      )}

      {/* 2. La Imagen: Hidden hasta que carga */}
      <img
        src={image}
        alt={title}
        onLoad={() => setIsLoaded(true)}
        className={`
        w-full h-auto object-cover transition-all duration-1000 ease-in-out
        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute top-0 left-0'}
        group-hover:scale-[1.02]
      `}
      />

      {/* Info de la obra */}
      {isLoaded && (
        <div className="mt-4">
          <p className="font-raleway text-[10px] uppercase tracking-widest text-emerald-700">
            {category}
          </p>
          <h3 className="font-raleway text-sm font-light text-gray-800 italic">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default ArtCard;