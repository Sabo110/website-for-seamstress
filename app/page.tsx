import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Realizations from "@/components/Realizations";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* about */}
      <AboutSection />
      {/* services */}
      <Services />
      {/* realization */}
      <Realizations />
      {/* Contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
}
