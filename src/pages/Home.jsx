import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact'; // Importamos el contacto

const Home = () => {
  return (
    <>
      <Hero />
      <div id="galeria"> 
        <Gallery />
      </div>
      <div id="contacto">
        <Contact />
      </div>
    </>
  );
};

export default Home;