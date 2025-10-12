import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-yoga.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: 'linear-gradient(120deg, #43cea2, #185a9d)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Fitness motivation" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Your Personalized Path to a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-blue-300">
              Healthier You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Transform your body and mind with personalized workout plans, nutrition guidance, and progress tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
      
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/100 text-white hover:bg-white/20 backdrop-blur-sm"
              disabled
            >
              Scroll Down to Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
