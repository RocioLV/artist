const Contact = () => {
    return (
      <section id="contacto" className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Cabecera del formulario */}
          <div className="mb-16">
            <h2 className="font-raleway text-xs font-bold uppercase tracking-[0.5em] text-emerald-700 mb-4">
              Contacto
            </h2>
            <p className="font-raleway text-3xl md:text-5xl font-light text-gray-800 leading-tight">
              ¿Tienes una idea en mente? <br />
              <span className="italic">Escríbeme.</span>
            </p>
          </div>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex flex-col border-b border-gray-200 pb-2 focus-within:border-emerald-600 transition-colors">
              <label className="font-raleway text-[10px] uppercase tracking-widest text-gray-400 mb-2">Nombre</label>
              <input 
                type="text" 
                className="font-raleway text-gray-800 bg-transparent outline-none py-2 font-light"
                placeholder="Tu nombre"
              />
            </div>
  
            <div className="flex flex-col border-b border-gray-200 pb-2 focus-within:border-emerald-600 transition-colors">
              <label className="font-raleway text-[10px] uppercase tracking-widest text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                className="font-raleway text-gray-800 bg-transparent outline-none py-2 font-light"
                placeholder="hola@tuemail.com"
              />
            </div>
  
            <div className="flex flex-col md:col-span-2 border-b border-gray-200 pb-2 focus-within:border-emerald-600 transition-colors">
              <label className="font-raleway text-[10px] uppercase tracking-widest text-gray-400 mb-2">Mensaje</label>
              <textarea 
                rows="4"
                className="font-raleway text-gray-800 bg-transparent outline-none py-2 font-light resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
  
            <div className="md:col-span-2 mt-8">
              <button className="font-raleway text-xs uppercase tracking-[0.3em] bg-gray-900 text-white px-12 py-5 rounded-sm hover:bg-emerald-700 transition-all duration-500 shadow-lg shadow-gray-200">
                Enviar Propuesta
              </button>
            </div>
          </form>
  
        </div>
      </section>
    )
  }
  
  export default Contact