
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] py-24 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex flex-col items-center md:items-start gap-6">
          <img 
            src="https://static.wixstatic.com/media/c85f44_812def4cdfac4cd0b061b3e30469efd4~mv2.png/v1/fill/w_180,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" 
            alt="PauGuSe Logo"
            className="h-20 md:h-24 w-auto invert opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/60">PauGuSe Fotografía</span>
            <span className="text-[8px] uppercase tracking-[0.3em] opacity-30">© 2024 Todos los derechos reservados</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-8">
           <div className="flex gap-12">
            <a href="https://www.instagram.com/pauguse_ph/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity uppercase text-[10px] tracking-[0.3em] font-bold border-b border-transparent hover:border-white/20 pb-1">Instagram</a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity uppercase text-[10px] tracking-[0.3em] font-bold border-b border-transparent hover:border-white/20 pb-1">Twitter</a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity uppercase text-[10px] tracking-[0.3em] font-bold border-b border-transparent hover:border-white/20 pb-1">Behance</a>
          </div>
        </div>

        <div className="text-right hidden lg:block">
          <div className="text-[11px] uppercase tracking-[0.6em] opacity-20 font-black italic mb-2">
            NARRATIVA EN MOVIMIENTO
          </div>
          <div className="h-[1px] w-20 bg-white/10 ml-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
