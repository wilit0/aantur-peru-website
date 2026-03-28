import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Paquetes', href: '#paquetes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">A</div>
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
              Aantur <span className="text-accent">Peru</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-accent ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/51900000000" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#25D366] hover:scale-110 transition-transform"
              >
                <MessageCircle size={28} fill="currentColor" className="text-white" />
              </a>
              <button className="btn-accent text-sm px-5 py-2">
                Reservar ahora
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <a href="https://wa.me/51900000000" className="text-[#25D366]">
              <MessageCircle size={24} />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-primary' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-800 hover:text-accent"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full btn-accent">
                Reservar ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
