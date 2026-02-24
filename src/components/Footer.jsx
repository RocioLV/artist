const Footer = () => {
    return (
      <footer className="py-12 px-8 border-t border-gray-100 bg-[#F9F9F7]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="font-raleway font-bold text-sm tracking-[0.2em] text-gray-900">
            ROCÍO<span className="text-emerald-600 font-light">LORCA</span>
          </div>
  
          <div className="text-[10px] font-raleway text-gray-400 uppercase tracking-widest">
            © 2026 — Hecho con amor y código
          </div>
  
          <div className="flex gap-6">
            {/* Aquí irían tus redes sociales en texto pequeño */}
            <a href="#" className="font-raleway text-[10px] uppercase tracking-widest text-gray-500 hover:text-emerald-600 transition-colors">Instagram</a>
            <a href="#" className="font-raleway text-[10px] uppercase tracking-widest text-gray-500 hover:text-emerald-600 transition-colors">Behance</a>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer