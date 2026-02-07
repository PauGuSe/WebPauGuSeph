
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del cuerpo cuando el formulario está abierto
  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isContactOpen]);

  return (
    <div className="relative min-h-screen">
      <Header 
        isScrolled={isScrolled} 
        onOpenContact={() => setIsContactOpen(true)} 
      />
      <main>
        <section id="home">
          <Hero />
        </section>
        {/* scroll-mt permite que al bajar, la sección no quede tapada por el Header fijo */}
        <section id="portfolio" className="scroll-mt-24 md:scroll-mt-32">
          <Portfolio />
        </section>
        <section id="about" className="scroll-mt-24 md:scroll-mt-32">
          <About />
        </section>
      </main>
      <Footer />
      <AIAssistant />

      {/* El componente Contact actúa como un modal de pantalla completa */}
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;
