import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HealthyOptions from "@/components/HealthyOptions";
import FoodCarousel from "@/components/FoodCarousel";
import Dashboard from "@/components/Dashboard";
import Features from "@/components/Features";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HealthyOptions />
      <FoodCarousel />
      <Dashboard />
      <Features />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
