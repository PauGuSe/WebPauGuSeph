
import React, { useState, useEffect } from 'react';
import { PHOTOS } from '../constants';
import { Category } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [activeCategory]);

  const filteredPhotos = activeCategory === 'Todos' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === activeCategory);

  const categories = ['Todos', Category.SPORTS, Category.PORTRAITS, Category.ALBUMS];

  const handleFilter = (cat: any) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveCategory(cat);
    }, 300);
  };

  return (
    <div className="bg-[#050505] py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-24 gap-12 border-b border-white/10 pb-12">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-8xl font-bold mb-6 italic serif tracking-tight">El Trabajo.</h2>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed font-light">
              Momentos capturados bajo una lente profesional. Desde la vibrante acción deportiva hasta el detalle íntimo del retrato.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] px-8 py-4 transition-all duration-500 rounded-sm border ${
                  activeCategory === (cat === 'Colecciones' ? Category.ALBUMS : cat)
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-white/40 border-white/10 hover:border-white/40 hover:text-white'
                }`}
              >
                {cat === Category.ALBUMS ? 'Colecciones' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`relative group cursor-pointer ${photo.category === Category.ALBUMS ? 'mt-8' : ''}`}
            >
              {/* Efecto de Stack para Álbumes */}
              {photo.category === Category.ALBUMS && (
                <>
                  <div className="absolute inset-0 bg-neutral-800 translate-x-2 -translate-y-2 rounded-sm -z-10 opacity-40 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-neutral-700 translate-x-4 -translate-y-4 rounded-sm -z-20 opacity-20 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
                </>
              )}

              <div className="relative overflow-hidden bg-neutral-900 border border-white/5 aspect-[4/5]">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Badge flotante para Colecciones */}
                {photo.category === Category.ALBUMS && (
                  <div className="absolute top-6 left-6 z-20">
                    <span className="glass-morphism px-3 py-1 rounded-full text-[7px] uppercase tracking-widest font-bold">
                      Full Gallery
                    </span>
                  </div>
                )}

                {/* Overlay de información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">
                    {photo.category}
                  </span>
                  <h3 className="text-3xl font-bold serif italic text-white mb-2 leading-none">
                    {photo.title}
                  </h3>
                  {photo.description && (
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono mb-6">
                      {photo.description}
                    </p>
                  )}
                  <div className="flex items-center gap-3 group/btn w-full">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/80">Revelar</span>
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="py-60 text-center">
            <p className="text-white/10 uppercase tracking-[1em] italic text-3xl">Buscando en el archivo</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
