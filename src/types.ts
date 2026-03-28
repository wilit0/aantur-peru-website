export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  destinations: string[];
  description: string;
  image: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
}
