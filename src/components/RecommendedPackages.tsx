import React from 'react';
import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import { Clock, MapPin, MessageCircle } from 'lucide-react';

export const RecommendedPackages = () => {
  return (
    <section id="paquetes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Paquetes Recomendados</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 text-primary">
            Nuestras Mejores Ofertas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              <div className="relative h-64">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{pkg.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock size={16} className="text-accent" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <MapPin size={16} className="text-accent mt-1 shrink-0" />
                    <span>{pkg.destinations.join(', ')}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-8 line-clamp-3">
                  {pkg.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <button className="btn-primary flex-1 text-sm py-2 px-4">
                    Consultar
                  </button>
                  <a 
                    href="https://wa.me/51900000000" 
                    className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
