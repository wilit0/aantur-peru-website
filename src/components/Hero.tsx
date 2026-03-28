import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=2000" 
          alt="Machu Picchu Peru" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Descubre Perú con experiencias <br />
            <span className="text-accent italic">auténticas e inolvidables</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto font-light text-gray-100">
            Especialistas en tours de un día y paquetes turísticos personalizados 
            diseñados para vivir la magia de los Andes y la costa peruana.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-accent w-full sm:w-auto text-lg px-8 py-4">
              Solicita tu cotización
              <ChevronRight size={20} />
            </button>
            <a 
              href="https://wa.me/51900000000" 
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp w-full sm:w-auto text-lg px-8 py-4"
            >
              <MessageCircle size={24} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-70"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
