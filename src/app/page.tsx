import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TestimonialSection from "@/components/TestimonialSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
