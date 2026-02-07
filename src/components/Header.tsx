
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onOpenContact }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 glass-morphism shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="group flex items-center">
          <img 
            src="https://static.wixstatic.com/media/c85f44_812def4cdfac4cd0b061b3e30469efd4~mv2.png/v1/fill/w_180,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" 
            alt="PauGuSe Logo"
            className={`object-contain invert transition-all duration-700 group-hover:scale-105 ${
              isScrolled ? 'h-12 md:h-20' : 'h-14 md:h-28'
            }`}
          />
        </a>
        
        <div className="flex items-center">
          <button 
            onClick={onOpenContact}
            className="relative group px-8 py-3 overflow-hidden border border-white/20 text-[10px] font-extrabold uppercase tracking-[0.3em]"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">CONTACTANOS</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
