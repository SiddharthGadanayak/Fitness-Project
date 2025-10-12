import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Target, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProgressTracker = () => {
  const navigate = useNavigate();

  const trackerFeatures = [
    {
      icon: TrendingUp,
      title: "Weight Tracking",
      description: "Monitor your weight changes over time with detailed graphs and insights.",
      link: "/progress-tracker/weight-tracking",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and track your fitness goals with milestone tracking and achievements.",
      link: "/progress-tracker/goal-setting",
    },
    {
      icon: Calendar,
      title: "Workout History",
      description: "Keep a complete log of all your workouts and training sessions.",
      link: "/progress-tracker/workout-history",
    },
    {
      icon: Award,
      title: "Achievement Badges",
      description: "Earn badges and rewards as you hit your fitness milestones.",
      link: "/progress-tracker/achievement-badges",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(120deg, #43cea2, #185a9d)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Track Your Progress
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Monitor your journey with detailed analytics and insights. Stay motivated by seeing your improvements over time.
          </p>
        </div>
      </section>

      {/* Tracker Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trackerFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:scale-105 transition-smooth hover:shadow-elegant cursor-pointer"
                onClick={() => navigate(feature.link)}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-elegant">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
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

export default ProgressTracker;
