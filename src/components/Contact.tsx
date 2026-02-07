
import React from 'react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white text-black overflow-y-auto animate-in fade-in duration-300">
      {/* Barra superior del modal */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10 flex justify-between items-start">
        <div className="w-12" /> {/* Espaciador */}
        
        <div className="flex flex-col items-center">
          <span className="text-3xl font-black tracking-tighter leading-none">pauguse</span>
          <span className="text-[12px] font-light italic self-end -mr-1">Ph</span>
        </div>

        <button 
          onClick={onClose}
          className="p-2 hover:scale-110 transition-transform"
          aria-label="Cerrar"
        >
          <svg className="w-8 h-8 font-thin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Información de la Izquierda */}
          <div className="space-y-8">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Santiago de Chile</h3>
              <p className="text-xl font-bold">
                Email: <span className="font-normal underline">paulinagutierrez.ucae@gmail.com</span>
              </p>
            </div>
            
            <div className="flex gap-3">
              <a href="https://www.instagram.com/pauguse_ph/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center opacity-30">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-2xl font-black">Trabajemos junt@s.</h2>
            </div>
          </div>

          {/* Formulario */}
          <div className="space-y-10">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-1">
                  <label className="text-[14px] font-extralight text-gray-400">Nombre</label>
                  <input type="text" className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-400 transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-[14px] font-extralight text-gray-400">Apellidos</label>
                  <input type="text" className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-400 transition-colors" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[14px] font-extralight text-gray-400">Correo electrónico *</label>
                <input type="email" required className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-400 transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="text-[14px] font-extralight text-gray-400">Mensaje</label>
                <textarea rows={3} className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-400 resize-none transition-colors" />
              </div>

              <button className="w-full bg-black text-white py-4 text-sm font-bold tracking-widest hover:bg-neutral-800 transition-colors">
                ENVIAR
              </button>
            </form>
          </div>
        </div>

        {/* Footer del modal */}
        <div className="mt-32 pt-8 border-t border-gray-100">
           <p className="text-2xl font-black">Disponibles en Santiago de Chile.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
