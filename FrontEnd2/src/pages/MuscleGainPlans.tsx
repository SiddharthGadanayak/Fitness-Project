import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, UtensilsCrossed, Moon, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MuscleGainPlans = () => {
  const navigate = useNavigate();

  const weekPlan = [
    {
      day: "Monday",
      meals: {
        breakfast: "Whole grain toast with peanut butter, banana and protein shake (650 cal)",
        lunch: "Grilled chicken breast with brown rice and steamed vegetables (700 cal)",
        dinner: "Lean beef steak with sweet potato and broccoli (750 cal)",
        snacks: "Greek yogurt with granola and protein bar (400 cal)"
      }
    },
    {
      day: "Tuesday",
      meals: {
        breakfast: "Oatmeal with protein powder, berries and almonds (620 cal)",
        lunch: "Tuna sandwich on whole grain with avocado and salad (680 cal)",
        dinner: "Salmon fillet with quinoa and roasted vegetables (720 cal)",
        snacks: "Trail mix and chocolate milk (420 cal)"
      }
    },
    {
      day: "Wednesday",
      meals: {
        breakfast: "Scrambled eggs with cheese, spinach and whole grain toast (640 cal)",
        lunch: "Turkey and cheese wrap with hummus and mixed greens (690 cal)",
        dinner: "Grilled chicken thighs with pasta and marinara sauce (740 cal)",
        snacks: "Cottage cheese with fruit and nuts (410 cal)"
      }
    },
    {
      day: "Thursday",
      meals: {
        breakfast: "Protein pancakes with maple syrup and Greek yogurt (660 cal)",
        lunch: "Beef burrito bowl with beans, rice and guacamole (710 cal)",
        dinner: "Baked cod with roasted potatoes and asparagus (700 cal)",
        snacks: "Peanut butter banana smoothie (430 cal)"
      }
    },
    {
      day: "Friday",
      meals: {
        breakfast: "Breakfast burrito with eggs, cheese, beans and salsa (670 cal)",
        lunch: "Grilled chicken Caesar salad with croutons and parmesan (680 cal)",
        dinner: "Pork chops with mashed potatoes and green beans (730 cal)",
        snacks: "Protein shake with almond butter (420 cal)"
      }
    },
    {
      day: "Saturday",
      meals: {
        breakfast: "French toast with eggs and turkey sausage (650 cal)",
        lunch: "Shrimp pasta with vegetables and olive oil (720 cal)",
        dinner: "Grilled ribeye steak with baked potato and salad (760 cal)",
        snacks: "Granola bars and string cheese (390 cal)"
      }
    },
    {
      day: "Sunday",
      meals: {
        breakfast: "Bagel with cream cheese, smoked salmon and fruit (640 cal)",
        lunch: "Chicken quesadilla with sour cream and guacamole (700 cal)",
        dinner: "Turkey meatloaf with wild rice and roasted carrots (720 cal)",
        snacks: "Mixed nuts and dried fruit (410 cal)"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Muscle Gain Meal Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A protein-rich 7-day meal plan designed to support muscle growth and recovery. 
            Each day provides approximately 2500 calories with high-quality protein sources.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto mb-8">
          {weekPlan.map((day, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-2xl">{day.day}</CardTitle>
                <CardDescription>Total: ~2500 calories | High Protein</CardDescription>
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

export default MuscleGainPlans;
