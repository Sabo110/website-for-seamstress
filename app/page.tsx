import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Realizations from "@/components/Realizations";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Samira Couture - Créations sur mesure et élégance",
  description: "Bienvenue chez Samira Couture. Découvrez nos créations uniques et sur mesure, alliant élégance, qualité et créativité. Transformez vos idées en pièces d'exception.",
};


export default function Home() {
  return (
    <div>
      {/* hero */}
      <Hero />
      {/* about */}
      <AboutSection />
      {/* services */}
      <Services />
      {/* realization */}
      <Realizations />
      {/* temoignages */}
      <Testimonials />
      {/* Contact */}
      <Contact />
    </div>
  );
}
