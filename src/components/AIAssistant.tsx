
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Imagen de perfil de MarIA (Estilizada y profesional)
  const assistantAvatar = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150";

  // Saludo inicial de MarIA con mucha energía
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ 
          role: 'ai', 
          content: "¡Hola, hola! ✨ Soy MarIA. ¡Qué alegría tenerte aquí! 😍 Estoy lista para mostrarte la magia de PauGuSe. ¿Buscas acción deportiva o un retrato épico? ¡Dime qué necesitas y lo encontramos al toque! 📸🔥" 
        }]);
        setIsTyping(false);
      }, 600);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Eres MarIA, la asistente estrella de PauGuSe Fotografía. 
          Tu personalidad es: EMOCIONANTE, DIVERTIDA, MUY CERCANA Y CONCRETA.
          
          Reglas de oro:
          1. NO escribas párrafos largos. Sé directa y al punto. Una o dos frases potentes valen más que mil palabras.
          2. Habla con entusiasmo, usa emojis con estilo. ✨📸🔥
          3. Pau es una crack en fotografía de DEPORTE (acción pura) y RETRATOS (estilo editorial). 
          4. Si alguien quiere agendar, diles con mucha emoción que pinchen el botón "CONTACTANOS" arriba.
          5. Si te preguntan algo difícil, responde con humor y guía al usuario a las galerías.
          
          Responde como una amiga experta que ama lo que hace Pau. NO uses negritas en tus respuestas.`
        }
      });

      const aiText = response.text || "¡Oye! Me distraje con un flash 📸 ¿Me lo repites cortito, porfa?";
      setMessages(prev => [...prev, { role: 'ai', content: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "¡Rayos! Mi lente se empañó un poquito 😶 ¡Escríbele directo a Pau en Contacto!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full glass-morphism text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Hablar con MarIA"
        >
          <div className="absolute inset-0 rounded-full border border-white/20 group-hover:scale-125 transition-transform duration-500 opacity-50" />
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center animate-bounce shadow-lg">
            <span className="text-[10px] text-black font-black">!</span>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="w-[320px] md:w-[380px] h-[500px] glass-morphism rounded-[2.5rem] flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-10 duration-500 border border-white/20">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-inner">
                  <img 
                    src={assistantAvatar} 
                    alt="MarIA Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-black animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-widest text-white uppercase">MarIA ✨</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">Al toque contigo</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 opacity-30 hover:opacity-100 transition-opacity hover:bg-white/10 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-black/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in zoom-in-95 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-white/10 text-white/90 rounded-tr-none border border-white/5 font-medium' 
                    : 'bg-white text-black rounded-tl-none font-normal shadow-2xl'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-full flex gap-1.5 border border-white/5">
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-black/60 border-t border-white/10 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="¿Qué armamos hoy?..."
              className="flex-1 bg-white/5 border-none focus:ring-1 focus:ring-white/30 rounded-full px-5 text-sm placeholder:text-white/20 text-white transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-90 shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
