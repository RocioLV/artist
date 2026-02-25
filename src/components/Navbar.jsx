import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[50] bg-[#F9F9F7]/80 backdrop-blur-sm px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo: Ahora te lleva al inicio siempre */}
        <Link to="/" className="font-raleway text-sm font-bold tracking-[0.3em] text-gray-800">
          I.AM.ROCÍO
        </Link>

        <div className="flex gap-10">
          {/* Enlace a la Home y scroll a obras */}
          <Link to="/" className="font-raleway text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-emerald-700 transition-colors">
            Inicio
          </Link>

          {/* Enlace directo a la nueva página de Archivo */}
          <Link to="/archivo" className="font-raleway text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-emerald-700 transition-colors">
            Archivo Completo
          </Link>

          <a href="#contacto" className="font-raleway text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-emerald-700 transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;