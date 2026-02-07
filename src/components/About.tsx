
import React from 'react';
import { CLIENT_LOGOS, RECOGNITIONS, GEAR } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-[#050505] py-40 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Titular Editorial Impactante */}
        <div className="relative mb-32 group">
          <span className="text-[10px] uppercase tracking-[0.8em] text-white/20 font-bold mb-4 block animate-pulse">Visionaria Visual</span>
          <h2 className="text-7xl md:text-[11rem] font-bold tracking-tighter leading-[0.8] mix-blend-difference">
            Paulina <br />
            <span className="serif italic text-white/30 ml-0 md:ml-48 group-hover:text-white transition-colors duration-1000">Gutiérrez S.</span>
          </h2>
          <div className="absolute top-1/2 right-0 hidden lg:block w-1/4 p-10 glass-morphism border-white/5 -translate-y-1/2">
             <p className="text-sm leading-relaxed text-white/50 italic font-light">
               "Cada disparo es una oportunidad para inmortalizar la esencia del movimiento y la verdad detrás de una mirada."
             </p>
          </div>
        </div>

        {/* Grid Principal Asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Columna Biografía y Hitos */}
          <div className="lg:col-span-4 space-y-24">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white/20" />
                <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Biografía</h3>
              </div>
              <div className="space-y-6 text-xl text-white/70 font-light leading-relaxed">
                <p>
                  Fotógrafa profesional con base en Chile, especializada en capturar la <span className="text-white font-medium">potencia del deporte</span> y la <span className="text-white font-medium">intimidad del retrato</span>.
                </p>
                <p className="text-base text-white/40">
                  Con años de experiencia y una técnica perfeccionada en eventos de alto rendimiento, mi trabajo fusiona el dinamismo de la acción con una estética editorial limpia y de alto contraste.
                </p>
              </div>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white/20" />
                <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Reconocimientos</h3>
              </div>
              <div className="space-y-12">
                {RECOGNITIONS.map((rec, i) => (
                  <div key={i} className="group border-l border-white/10 pl-6 hover:border-white transition-colors duration-500">
                    <span className="text-[10px] text-white/20 block mb-2">{rec.year}</span>
                    <h4 className="text-lg font-bold mb-2 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">{rec.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{rec.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Columna Imagen Central "Hero" */}
          <div className="lg:col-span-5 relative group">
            <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl">
              <img 
                src="https://static.wixstatic.com/media/c85f44_f43c5329d57c46fda714a69e48877c29~mv2.jpg" 
                alt="Paulina Gutiérrez S." 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />
              {/* Overlay Decorativo */}
              <div className="absolute inset-0 border-[20px] border-[#050505] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Badge de Experiencia */}
            <div className="absolute -bottom-10 -left-10 bg-white text-black p-10 hidden md:block rotate-[-2deg] shadow-2xl group-hover:rotate-0 transition-transform duration-500">
              <span className="text-5xl font-bold tracking-tighter serif italic leading-none block">Profesional</span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold block mt-2">Equipo de Vanguardia</span>
            </div>
          </div>

          {/* Columna Especificaciones de Equipo */}
          <div className="lg:col-span-3 space-y-16">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Hardware</h3>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest block">Cámaras</span>
                <div className="space-y-2">
                  {GEAR.cameras.map(cam => (
                    <div key={cam} className="text-sm font-medium border-b border-white/5 pb-2 hover:text-white/90 transition-colors cursor-default">{cam}</div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest block">Lentes & Óptica</span>
                <div className="space-y-2">
                  {GEAR.lenses.map(lens => (
                    <div key={lens} className="text-sm font-medium border-b border-white/5 pb-2 hover:text-white/90 transition-colors cursor-default">{lens}</div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest block">Iluminación</span>
                <div className="space-y-2">
                  {GEAR.lighting.map(light => (
                    <div key={light} className="text-sm font-medium border-b border-white/5 pb-2 hover:text-white/90 transition-colors cursor-default">{light}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10">
               <a 
                href="#contact"
                className="group inline-flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white"
               >
                 <span>Hablemos de tu proyecto</span>
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                 </div>
               </a>
            </div>
          </div>
        </div>

        {/* Marcas / Clientes Strip */}
        <div className="mt-48 pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold whitespace-nowrap">Socios Estratégicos</span>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
              {CLIENT_LOGOS.map(logo => (
                <a key={logo.id} href={logo.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <img src={logo.url} alt={logo.name} className="h-8 md:h-12 w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
