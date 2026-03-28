import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Map, Headphones, Calendar, CheckCircle } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Atención Personalizada",
      desc: "Nos tomamos el tiempo para entender tus deseos y crear el viaje perfecto para ti."
    },
    {
      icon: <Map className="text-accent" size={32} />,
      title: "Experiencia Local",
      desc: "Somos expertos en Perú, conocemos cada rincón y secreto de nuestra tierra."
    },
    {
      icon: <CheckCircle className="text-accent" size={32} />,
      title: "Tours Bien Organizados",
      desc: "Logística impecable para que solo te preocupes por disfrutar tu aventura."
    },
    {
      icon: <Headphones className="text-accent" size={32} />,
      title: "Soporte Rápido",
      desc: "Atención inmediata vía WhatsApp para cualquier consulta durante tu viaje."
    },
    {
      icon: <Calendar className="text-accent" size={32} />,
      title: "Itinerarios a Medida",
      desc: "Flexibilidad total para ajustar fechas, destinos y actividades a tu gusto."
    },
    {
      icon: <Shield className="text-accent" size={32} />,
      title: "Confianza y Seguridad",
      desc: "Tu seguridad es nuestra prioridad, operamos con los más altos estándares."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Nuestros Valores</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">
            ¿Por qué elegir Aantur Peru?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
