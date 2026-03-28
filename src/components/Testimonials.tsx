import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Testimonios</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 text-primary">
            Lo que dicen nuestros viajeros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-lg relative"
            >
              <Quote className="absolute top-6 right-8 text-accent/20" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#d4af37" className="text-accent" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
