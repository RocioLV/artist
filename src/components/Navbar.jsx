import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  // Clase para los enlaces que no están activos
  const baseClass = "font-raleway text-[10px] uppercase tracking-[0.2em] transition-colors duration-300";
  // Clase para el enlace de la página donde estoy
  const activeClass = "text-emerald-800 font-bold";
  const inactiveClass = "text-gray-400 hover:text-gray-900";

  return (
    <nav className="fixed top-0 w-full z-100 bg-[#F9F9F7]/90 backdrop-blur-md px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo consistente con tu marca */}
        <Link to="/" className="font-raleway text-sm tracking-[0.3em] text-gray-900">
          del<span className="font-bold">Rocío</span>
        </Link>

        <div className="flex gap-10">
          <NavLink 
            to="/" 
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
          >
            Inicio
          </NavLink>

          <NavLink 
            to="/archivo" // <-- REVISA QUE ESTA RUTA SEA IGUAL EN App.jsx
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
          >
            Archivo
          </NavLink>

          <NavLink 
            to="/sobre-mi" // <-- REVISA QUE ESTA RUTA SEA IGUAL EN App.jsx
            className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}
          >
            Sobre mí
          </NavLink>

          <a href="#contacto" className={`${baseClass} ${inactiveClass}`}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;