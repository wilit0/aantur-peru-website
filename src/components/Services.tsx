import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-semibold tracking-widest uppercase text-sm"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-bold mt-2 text-primary"
          >
            Experiencias Diseñadas para Ti
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all">
                  Reservar ahora
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
