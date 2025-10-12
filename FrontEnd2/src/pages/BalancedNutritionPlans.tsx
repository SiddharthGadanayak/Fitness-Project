import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, UtensilsCrossed, Moon, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BalancedNutritionPlans = () => {
  const navigate = useNavigate();

  const weekPlan = [
    {
      day: "Monday",
      meals: {
        breakfast: "Whole grain toast with avocado, poached eggs and fruit (450 cal)",
        lunch: "Grilled chicken wrap with mixed vegetables and hummus (550 cal)",
        dinner: "Baked salmon with quinoa and roasted vegetables (600 cal)",
        snacks: "Apple with almond butter (200 cal)"
      }
    },
    {
      day: "Tuesday",
      meals: {
        breakfast: "Greek yogurt parfait with berries, granola and honey (480 cal)",
        lunch: "Turkey and vegetable soup with whole grain roll (520 cal)",
        dinner: "Lean beef stir-fry with brown rice and broccoli (620 cal)",
        snacks: "Carrot sticks with hummus (180 cal)"
      }
    },
    {
      day: "Wednesday",
      meals: {
        breakfast: "Oatmeal with banana, walnuts and cinnamon (460 cal)",
        lunch: "Tuna salad with mixed greens and whole grain crackers (540 cal)",
        dinner: "Grilled chicken breast with sweet potato and green beans (590 cal)",
        snacks: "Trail mix and orange (210 cal)"
      }
    },
    {
      day: "Thursday",
      meals: {
        breakfast: "Smoothie bowl with mixed berries, spinach and chia seeds (470 cal)",
        lunch: "Mediterranean chickpea bowl with feta and vegetables (560 cal)",
        dinner: "Baked cod with wild rice and asparagus (580 cal)",
        snacks: "Greek yogurt with honey (190 cal)"
      }
    },
    {
      day: "Friday",
      meals: {
        breakfast: "Whole grain pancakes with fresh berries and maple syrup (490 cal)",
        lunch: "Grilled vegetable and chicken quesadilla with salsa (570 cal)",
        dinner: "Turkey meatballs with whole wheat pasta and marinara (610 cal)",
        snacks: "Cottage cheese with cucumber slices (170 cal)"
      }
    },
    {
      day: "Saturday",
      meals: {
        breakfast: "Scrambled eggs with spinach, tomatoes and whole grain toast (480 cal)",
        lunch: "Shrimp and avocado salad with citrus dressing (550 cal)",
        dinner: "Roasted chicken with roasted vegetables and quinoa (600 cal)",
        snacks: "Mixed nuts and dried fruit (220 cal)"
      }
    },
    {
      day: "Sunday",
      meals: {
        breakfast: "French toast with Greek yogurt and mixed berries (500 cal)",
        lunch: "Lentil soup with mixed greens salad and whole grain bread (540 cal)",
        dinner: "Grilled salmon with brown rice and steamed broccoli (590 cal)",
        snacks: "Banana with peanut butter (200 cal)"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Balanced Nutrition Meal Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A well-rounded 7-day meal plan with perfect macronutrient balance. 
            Each day provides approximately 1800 calories with healthy portions of protein, carbs, and fats.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto mb-8">
          {weekPlan.map((day, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-2xl">{day.day}</CardTitle>
                <CardDescription>Total: ~1800 calories | Balanced Macros</CardDescription>
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

export default BalancedNutritionPlans;
