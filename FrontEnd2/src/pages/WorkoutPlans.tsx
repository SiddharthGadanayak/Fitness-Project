import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Zap, Target, TrendingUp, Clock, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkoutPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Beginner Friendly",
      description: "Perfect for those just starting their fitness journey",
      duration: "30-45 min",
      level: "Beginner",
      icon: Target,
      link: "/workout-plans/beginner",
    },
    {
      title: "Strength Training",
      description: "Build muscle and increase strength with targeted exercises",
      duration: "45-60 min",
      level: "Intermediate",
      icon: Dumbbell,
      link: "/workout-plans/strength-training",
    },
    {
      title: "HIIT Workouts",
      description: "High-intensity interval training for maximum calorie burn",
      duration: "20-30 min",
      level: "Advanced",
      icon: Zap,
      link: "/workout-plans/hiit",
    },
    {
      title: "Endurance Building",
      description: "Improve stamina and cardiovascular health",
      duration: "40-50 min",
      level: "Intermediate",
      icon: TrendingUp,
      link: "/workout-plans/endurance",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-primary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <Dumbbell className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Custom Workout Plans
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Access workout routines designed specifically for your fitness level and objectives.
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
                      <Flame className="w-4 h-4" />
                      {plan.level}
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

export default WorkoutPlans;
