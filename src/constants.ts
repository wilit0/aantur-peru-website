import { Destination, Package, Service, Testimonial } from "./types";

export const DESTINATIONS: Destination[] = [
  {
    id: "cusco",
    name: "Cusco",
    description: "La capital histórica del Imperio Inca, rodeada de majestuosas montañas y ruinas milenarias.",
    image: "https://picsum.photos/seed/cusco/800/600"
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    description: "Una de las siete maravillas del mundo moderno, el tesoro más preciado del Perú.",
    image: "https://picsum.photos/seed/machupicchu/800/600"
  },
  {
    id: "lima",
    name: "Lima",
    description: "La ciudad de los reyes, famosa por su gastronomía de clase mundial y su arquitectura colonial.",
    image: "https://picsum.photos/seed/lima/800/600"
  },
  {
    id: "puno",
    name: "Puno",
    description: "Hogar del místico Lago Titicaca, el lago navegable más alto del mundo.",
    image: "https://picsum.photos/seed/puno/800/600"
  },
  {
    id: "valle-sagrado",
    name: "Valle Sagrado",
    description: "Un valle fértil salpicado de pueblos pintorescos y sitios arqueológicos impresionantes.",
    image: "https://picsum.photos/seed/sacredvalley/800/600"
  },
  {
    id: "lago-titicaca",
    name: "Lago Titicaca",
    description: "Descubre las islas flotantes de los Uros y la cultura viva de Taquile.",
    image: "https://picsum.photos/seed/titicaca/800/600"
  }
];

export const SERVICES: Service[] = [
  {
    id: "full-day-cusco",
    title: "Tours de un día en Cusco",
    description: "Explora la ciudad imperial y sus alrededores en un solo día con guías expertos.",
    image: "https://picsum.photos/seed/tourcusco/600/400"
  },
  {
    id: "full-day-lima",
    title: "Tours de un día en Lima",
    description: "Descubre la historia, cultura y gastronomía de la capital peruana.",
    image: "https://picsum.photos/seed/tourlima/600/400"
  },
  {
    id: "full-day-puno",
    title: "Tours de un día en Puno",
    description: "Navega por el Lago Titicaca y visita las famosas islas flotantes.",
    image: "https://picsum.photos/seed/tourpuno/600/400"
  },
  {
    id: "paquetes-peru",
    title: "Paquetes turísticos por Perú",
    description: "Itinerarios completos que cubren los destinos más emblemáticos del país.",
    image: "https://picsum.photos/seed/perupackage/600/400"
  },
  {
    id: "viajes-personalizados",
    title: "Viajes personalizados",
    description: "Diseñamos el viaje de tus sueños adaptado a tus gustos y presupuesto.",
    image: "https://picsum.photos/seed/customtrip/600/400"
  }
];

export const PACKAGES: Package[] = [
  {
    id: "peru-clasico",
    name: "Perú Clásico",
    duration: "8 Días / 7 Noches",
    destinations: ["Lima", "Cusco", "Valle Sagrado", "Machu Picchu"],
    description: "La introducción perfecta a las maravillas del Perú, desde la costa hasta los Andes.",
    image: "https://picsum.photos/seed/classicperu/600/400"
  },
  {
    id: "aventura-inca",
    name: "Aventura Inca",
    duration: "5 Días / 4 Noches",
    destinations: ["Cusco", "Camino Inca", "Machu Picchu"],
    description: "Para los amantes del trekking y la historia, una experiencia inolvidable.",
    image: "https://picsum.photos/seed/incatrail/600/400"
  },
  {
    id: "sur-magico",
    name: "Sur Mágico",
    duration: "12 Días / 11 Noches",
    destinations: ["Lima", "Paracas", "Nazca", "Arequipa", "Puno", "Cusco"],
    description: "Un recorrido completo por los paisajes más variados del sur peruano.",
    image: "https://picsum.photos/seed/southperu/600/400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    text: "Aantur Peru hizo que nuestro viaje a Machu Picchu fuera perfecto. Todo estuvo muy bien organizado y los guías fueron excepcionales.",
    rating: 5,
    location: "Estados Unidos"
  },
  {
    id: "2",
    name: "Carlos Méndez",
    text: "Excelente servicio y atención personalizada. Los tours de un día en Cusco son altamente recomendados.",
    rating: 5,
    location: "España"
  },
  {
    id: "3",
    name: "Elena Rossi",
    text: "Una experiencia auténtica e inolvidable. Gracias por ayudarnos a descubrir la magia del Lago Titicaca.",
    rating: 5,
    location: "Italia"
  }
];
