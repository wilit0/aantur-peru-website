import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { RecommendedPackages } from './components/RecommendedPackages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedDestinations />
        <WhyChooseUs />
        <RecommendedPackages />
        <Testimonials />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              ¿Listo para vivir la magia del Perú?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              No dejes para mañana el viaje que puedes disfrutar hoy. 
              Nuestros expertos están listos para ayudarte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-xl">
                Reservar mi Viaje
              </button>
              <a 
                href="https://wa.me/51900000000" 
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2"
              >
                <MessageCircle size={24} className="text-[#25D366]" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/51900000000" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={36} />
      </a>
    </div>
  );
}
