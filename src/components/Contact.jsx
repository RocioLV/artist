const Contact = () => {
    return (
      <section id="contacto" className="py-24 px-6 bg-white/50">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-black text-gray-900 uppercase tracking-tighter">
              ¿Tienes un <span className="text-emerald-600">Proyecto?</span>
            </h2>
            <p className="text-gray-500 mt-4">Hablemos sobre cómo podemos trabajar juntos.</p>
          </div>
  
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-gray-400 mb-2 ml-4">Nombre</label>
                <input 
                  type="text" 
                  className="bg-white border border-gray-200 p-4 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                  placeholder="Tu nombre..."
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase text-gray-400 mb-2 ml-4">Email</label>
                <input 
                  type="email" 
                  className="bg-white border border-gray-200 p-4 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
  
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase text-gray-400 mb-2 ml-4">Mensaje</label>
              <textarea 
                rows="5"
                className="bg-white border border-gray-200 p-4 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors shadow-sm resize-none"
                placeholder="Cuéntame tu idea..."
              ></textarea>
            </div>
  
            <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-gray-200">
              Enviar Mensaje
            </button>
          </form>
  
        </div>
      </section>
    )
  }
  
  export default Contact