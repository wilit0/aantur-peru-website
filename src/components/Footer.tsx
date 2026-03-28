import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">A</div>
              <span className="text-2xl font-serif font-bold">
                Aantur <span className="text-accent">Peru</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu agencia de confianza para descubrir la magia del Perú. 
              Creamos experiencias auténticas, seguras y memorables 
              en cada rincón de nuestra tierra.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Nuestros Servicios</a></li>
              <li><a href="#destinos" className="hover:text-accent transition-colors">Destinos Destacados</a></li>
              <li><a href="#paquetes" className="hover:text-accent transition-colors">Paquetes Turísticos</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Tours Full Day Cusco</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">City Tour Lima</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Lago Titicaca Tours</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Paquetes a Medida</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Asesoría de Viajes</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Suscríbete</h4>
            <p className="text-gray-400 text-sm mb-6">
              Recibe ofertas exclusivas y consejos de viaje directamente en tu email.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/10 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-accent flex-grow"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
          <p>© 2026 Aantur Peru. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
