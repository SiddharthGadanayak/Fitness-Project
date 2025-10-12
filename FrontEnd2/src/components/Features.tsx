import FeatureCard from "./FeatureCard";
import { Calculator, UtensilsCrossed, Dumbbell, Sparkles, TrendingUp, Lightbulb, Heart } from "lucide-react";
import bmiBg from "@/assets/feature-bmi.jpg";
import mealsBg from "@/assets/feature-meals.jpg";
import workoutBg from "@/assets/feature-workout.jpg";
import aiNutritionBg from "@/assets/feature-ai-nutrition.jpg";
import progressBg from "@/assets/feature-progress.jpg";
import tipsBg from "@/assets/feature-tips.jpg";
import yogaBg from "@/assets/feature-yoga.jpg";

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index and Basal Metabolic Rate instantly to understand your body better.",
      gradient: false,
      backgroundImage: bmiBg,
      openPage: "/bmi",
    },
    {
      icon: UtensilsCrossed,
      title: "Personalized Meal Plans",
      description: "Get customized nutrition plans tailored to your goals, preferences, and dietary requirements.",
      gradient: true,
      backgroundImage: mealsBg,
      openPage: "/meal-plans",
    },
    {
      icon: Dumbbell,
      title: "Custom Workout Plans",
      description: "Access workout routines designed specifically for your fitness level and objectives.",
      gradient: false,
      backgroundImage: workoutBg,
      openPage: "/workout-plans",
    },
    {
      icon: Heart,
      title: "Yoga & Mindfulness Plans",
      description: "Discover personalized yoga routines and meditation practices for mental and physical balance.",
      gradient: true,
      backgroundImage: yogaBg,
      openPage: "/yoga-plans",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracker",
      description: "Monitor your weight, workouts, and achievements with detailed tracking and analytics.",
      gradient: false,
      backgroundImage: progressBg,
      openPage: "/progress-tracker",
    },
    {
      icon: Lightbulb,
      title: "Daily Fitness Tips",
      description: "Get expert fitness tips and motivation delivered daily to keep you on track.",
      gradient: true,
      backgroundImage: tipsBg,
      openPage: "/fitness-tips",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and features to help you achieve your fitness goals faster and smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
