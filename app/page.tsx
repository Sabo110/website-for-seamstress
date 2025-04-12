import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Realizations from "@/components/Realizations";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

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
