import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sunrise, Moon, Wind, Sparkles, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const YogaPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Morning Energy Flow",
      description: "Start your day with energizing poses and breathwork",
      duration: "20-30 min",
      focus: "Energy & Focus",
      icon: Sunrise,
      link: "/yoga-plans/morning-yoga",
    },
    {
      title: "Stress Relief Yoga",
      description: "Release tension and find inner peace through gentle practice",
      duration: "30-45 min",
      focus: "Relaxation",
      icon: Wind,
      link: "/yoga-plans/stress-relief",
    },
    {
      title: "Flexibility & Stretching",
      description: "Improve flexibility and range of motion with deep stretches",
      duration: "25-35 min",
      focus: "Flexibility",
      icon: Moon,
      link: "/yoga-plans/flexibility",
    },
    {
      title: "Mindfulness Meditation",
      description: "Guided meditation sessions for mental clarity and balance",
      duration: "15-20 min",
      focus: "Mental Wellness",
      icon: Sparkles,
      link: "/yoga-plans/meditation",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-primary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Yoga & Mindfulness Plans
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover personalized yoga routines and meditation practices for mental and physical balance.
            </p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {plans.map((plan, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:scale-105 transition-smooth hover:shadow-elegant cursor-pointer"
                  onClick={() => navigate(plan.link)}
                >
                  <plan.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Clock className="w-4 h-4" />
                      {plan.duration}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Heart className="w-4 h-4" />
                      {plan.focus}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="gradient-primary text-white hover:shadow-elegant"
                onClick={() => navigate('/')}
              >
                Join Waitlist to Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default YogaPlans;
