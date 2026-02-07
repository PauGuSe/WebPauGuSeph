
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 scale-105 animate-[pulse_10s_infinite]">
        <img 
          src="https://static.wixstatic.com/media/c85f44_1d751449fa5e474e979072983a3f3e05~mv2.jpg" 
          alt="Sports Photography Background"
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-block overflow-hidden mb-4">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] animate-[slide-up_1s_ease-out] text-white/40">
            Estética Visual • Narrativa en Movimiento
          </p>
        </div>
        <h1 className="text-6xl md:text-[9rem] font-bold mb-8 leading-[0.85] tracking-tighter">
          PAU GUSE <br />
          <span className="italic font-normal serif text-white/90">Fotografía.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12">
          <a 
            href="#portfolio" 
            className="group relative px-10 py-4 overflow-hidden border border-white/20 transition-all hover:border-white"
          >
            <span className="relative z-10 text-xs uppercase tracking-widest">Explorar Trabajo</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="absolute inset-0 z-20 flex items-center justify-center text-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ver Galerías
            </span>
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:flex flex-col gap-20 opacity-20">
        <div className="h-40 w-[1px] bg-white" />
        <p className="vertical-text text-[10px] uppercase tracking-[0.5em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Basado en Chile • Disponible Globalmente
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-16 bg-white animate-[bounce_2s_infinite]" />
      </div>
    </div>
  );
};

export default Hero;
