import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Heart, Utensils, Dumbbell, Moon, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FitnessTips = () => {
  const navigate = useNavigate();

  const tipCategories = [
    {
      icon: Dumbbell,
      title: "Workout Tips",
      description: "Expert advice on exercise form, routines, and maximizing your training effectiveness.",
      link: "/fitness-tips/workout-tips",
    },
    {
      icon: Utensils,
      title: "Nutrition Advice",
      description: "Daily nutrition tips to fuel your body and support your fitness goals.",
      link: "/fitness-tips/nutrition-advice",
    },
    {
      icon: Heart,
      title: "Recovery & Rest",
      description: "Learn the importance of rest days and proper recovery techniques.",
      link: "/fitness-tips/recovery-rest",
    },
    {
      icon: Moon,
      title: "Sleep Optimization",
      description: "Discover how quality sleep impacts your fitness journey and performance.",
      link: "/fitness-tips/sleep-optimization",
    },
    {
      icon: Droplets,
      title: "Hydration Tips",
      description: "Stay properly hydrated with personalized water intake recommendations.",
      link: "/fitness-tips/hydration-tips",
    },
    {
      icon: Lightbulb,
      title: "Motivation & Mindset",
      description: "Daily inspiration and mental strategies to keep you motivated and focused.",
      link: "/fitness-tips/motivation-mindset",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(120deg, #43cea2, #185a9d)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Daily Fitness Tips
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get expert fitness tips and motivation delivered daily. Small changes lead to big results.
          </p>
        </div>
      </section>

      {/* Tips Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tipCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 hover:scale-105 transition-smooth hover:shadow-elegant cursor-pointer"
                onClick={() => navigate(category.link)}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-elegant">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FitnessTips;
