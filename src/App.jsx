import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Archive from './pages/Archive'; 
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="bg-[#F9F9F7] min-h-screen flex flex-col">
        <Navbar /> 
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* 2. AHORA SÍ USARÁ EL COMPONENTE COMPLETO */}
            <Route path="/archivo" element={<Archive />} />
            <Route path="/sobre-mi" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;