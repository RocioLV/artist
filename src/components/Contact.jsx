const Contact = () => {
    return (
      <section className="py-20 px-6 bg-purple-900/10 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-400 mb-10 text-lg">Hablemos sobre cómo podemos dar vida a tus ideas.</p>
          
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
            <textarea 
              placeholder="Cuéntame sobre tu idea..." 
              rows="4"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-colors"
            ></textarea>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-purple-500/20">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    )
  }
  
  export default Contact