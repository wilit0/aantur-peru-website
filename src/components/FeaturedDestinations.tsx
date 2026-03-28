import React from 'react';
import { motion } from 'motion/react';
import { DESTINATIONS } from '../constants';

export const FeaturedDestinations = () => {
  return (
    <section id="destinos" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">Destinos Destacados</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 text-primary">
              Los Rincones más Mágicos del Perú
            </h2>
          </div>
          <button className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
            Ver todos los destinos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-3xl font-serif font-bold mb-2">{dest.name}</h3>
                <p className="text-sm text-gray-200 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.description}
                </p>
                <div className="w-12 h-1 bg-accent rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
