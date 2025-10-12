import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Coffee, UtensilsCrossed, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WeightLossPlans = () => {
  const navigate = useNavigate();

  const weekPlan = [
    {
      day: "Monday",
      meals: {
        breakfast: "Greek yogurt with berries and almonds (300 cal)",
        lunch: "Grilled chicken salad with olive oil dressing (400 cal)",
        dinner: "Baked salmon with roasted vegetables (450 cal)",
        snacks: "Apple and green tea (100 cal)"
      }
    },
    {
      day: "Tuesday",
      meals: {
        breakfast: "Oatmeal with banana and honey (350 cal)",
        lunch: "Turkey wrap with mixed greens (380 cal)",
        dinner: "Grilled tilapia with quinoa and broccoli (420 cal)",
        snacks: "Carrot sticks with hummus (80 cal)"
      }
    },
    {
      day: "Wednesday",
      meals: {
        breakfast: "Scrambled eggs with spinach and tomatoes (280 cal)",
        lunch: "Tuna salad with whole grain crackers (400 cal)",
        dinner: "Chicken stir-fry with brown rice (440 cal)",
        snacks: "Mixed nuts (120 cal)"
      }
    },
    {
      day: "Thursday",
      meals: {
        breakfast: "Smoothie bowl with chia seeds (320 cal)",
        lunch: "Grilled vegetable and chicken bowl (410 cal)",
        dinner: "Lean beef with sweet potato and green beans (460 cal)",
        snacks: "Cottage cheese with cucumber (90 cal)"
      }
    },
    {
      day: "Friday",
      meals: {
        breakfast: "Whole grain toast with avocado and poached egg (340 cal)",
        lunch: "Mediterranean chickpea salad (390 cal)",
        dinner: "Baked cod with asparagus and wild rice (430 cal)",
        snacks: "Protein shake (110 cal)"
      }
    },
    {
      day: "Saturday",
      meals: {
        breakfast: "Protein pancakes with fresh berries (330 cal)",
        lunch: "Grilled shrimp Caesar salad (400 cal)",
        dinner: "Turkey meatballs with zucchini noodles (420 cal)",
        snacks: "Rice cakes with almond butter (100 cal)"
      }
    },
    {
      day: "Sunday",
      meals: {
        breakfast: "Egg white omelet with vegetables (290 cal)",
        lunch: "Grilled chicken with quinoa salad (410 cal)",
        dinner: "Baked salmon with roasted Brussels sprouts (450 cal)",
        snacks: "Fresh fruit salad (95 cal)"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary m-4">
            Weight Loss Meal Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully designed 7-day meal plan to help you achieve your weight loss goals. 
            Each day provides approximately 1250 calories with balanced nutrition.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto mb-8">
          {weekPlan.map((day, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-2xl">{day.day}</CardTitle>
                <CardDescription>Total: ~1250 calories</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-3">
                  <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Breakfast</h4>
                    <p className="text-muted-foreground">{day.meals.breakfast}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UtensilsCrossed className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Lunch</h4>
                    <p className="text-muted-foreground">{day.meals.lunch}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Moon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Dinner</h4>
                    <p className="text-muted-foreground">{day.meals.dinner}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Apple className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Snacks</h4>
                    <p className="text-muted-foreground">{day.meals.snacks}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={() => navigate("/")} size="lg">
            Join Waitlist
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WeightLossPlans;
