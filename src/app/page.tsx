import Navbar           from "@/components/layout/Navbar";
import Footer           from "@/components/layout/Footer";
import NebulaBackground from "@/components/ui/NebulaBackground";
import HeroSection      from "@/components/sections/HeroSection";
import ServicesSection  from "@/components/sections/ServicesSection";
import WhyUsSection     from "@/components/sections/WhyUsSection";
import ProcessSection   from "@/components/sections/ProcessSection";
import ContactSection   from "@/components/sections/ContactSection";
import ProductsSection from "@/components/sections/Products";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative bg-[#06010f]">
      <NebulaBackground />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProductsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}