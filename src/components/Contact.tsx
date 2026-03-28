import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">Contacto</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 text-primary mb-8">
              Planeemos tu próxima aventura
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              ¿Tienes preguntas sobre nuestros tours o quieres un paquete a medida? 
              Estamos aquí para ayudarte a organizar el viaje de tus sueños por Perú.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-base rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Teléfono / WhatsApp</h4>
                  <p className="text-gray-600">+51 900 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-base rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@aanturperu.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-base rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Av. El Sol 123, Cusco, Perú</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/51900000000" 
                className="btn-whatsapp inline-flex"
              >
                <MessageCircle size={24} />
                Habla con un asesor ahora
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-base p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
                    placeholder="juan@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
                    placeholder="+51 900 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destino de Interés</label>
                  <select className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent bg-white shadow-sm appearance-none">
                    <option>Cusco & Machu Picchu</option>
                    <option>Lima Gastronómica</option>
                    <option>Puno & Lago Titicaca</option>
                    <option>Paquete Completo Perú</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Estimada</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">N° de Pasajeros</label>
                  <input 
                    type="number" 
                    min="1"
                    className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
                    placeholder="2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
                  placeholder="Cuéntanos más sobre tu viaje ideal..."
                ></textarea>
              </div>

              <button className="w-full btn-primary py-4 text-lg">
                Enviar Solicitud
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
