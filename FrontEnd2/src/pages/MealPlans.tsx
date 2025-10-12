import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UtensilsCrossed, ChefHat, Apple, Salad, CalendarDays, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MealPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Weight Loss Plan",
      description: "Balanced meals designed to help you lose weight healthily",
      calories: "1200-1500 kcal/day",
      icon: Target,
      link: "weight-loss",
    },
    {
      title: "Muscle Gain Plan",
      description: "High-protein meals to support muscle growth and recovery",
      calories: "2500-3000 kcal/day",
      icon: ChefHat,
      link: "/meal-plans/muscle-gain",
    },
    {
      title: "Balanced Nutrition",
      description: "Well-rounded meals for maintaining optimal health",
      calories: "1800-2200 kcal/day",
      icon: Apple,
      link: "/meal-plans/balanced-nutrition",
    },
    {
      title: "Vegan/Vegetarian",
      description: "Plant-based meal options packed with nutrients",
      calories: "1500-2000 kcal/day",
      icon: Salad,
      link: "/meal-plans/vegan",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-primary text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <UtensilsCrossed className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Personalized Meal Plans
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get customized nutrition plans tailored to your goals, preferences, and dietary requirements.
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
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <CalendarDays className="w-4 h-4" />
                    {plan.calories}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MealPlans;
