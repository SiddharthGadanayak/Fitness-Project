import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, UtensilsCrossed, Moon, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VeganPlans = () => {
  const navigate = useNavigate();

  const weekPlan = [
    {
      day: "Monday",
      meals: {
        breakfast: "Overnight oats with almond milk, chia seeds and mixed berries (420 cal)",
        lunch: "Quinoa Buddha bowl with chickpeas, avocado and tahini dressing (580 cal)",
        dinner: "Lentil curry with brown rice and steamed vegetables (620 cal)",
        snacks: "Hummus with carrot and cucumber sticks (180 cal)"
      }
    },
    {
      day: "Tuesday",
      meals: {
        breakfast: "Tofu scramble with spinach, tomatoes and whole grain toast (450 cal)",
        lunch: "Black bean and sweet potato burrito bowl with guacamole (600 cal)",
        dinner: "Stir-fried tofu with vegetables and rice noodles (590 cal)",
        snacks: "Apple with almond butter (200 cal)"
      }
    },
    {
      day: "Wednesday",
      meals: {
        breakfast: "Smoothie bowl with banana, spinach, protein powder and granola (480 cal)",
        lunch: "Mediterranean falafel wrap with tahini sauce (570 cal)",
        dinner: "Vegetable and chickpea tagine with couscous (610 cal)",
        snacks: "Trail mix with dried fruits (190 cal)"
      }
    },
    {
      day: "Thursday",
      meals: {
        breakfast: "Vegan protein pancakes with maple syrup and berries (460 cal)",
        lunch: "Thai peanut noodle salad with edamame (590 cal)",
        dinner: "Stuffed bell peppers with quinoa and black beans (580 cal)",
        snacks: "Roasted chickpeas (170 cal)"
      }
    },
    {
      day: "Friday",
      meals: {
        breakfast: "Acai bowl with granola, coconut and mixed fruits (470 cal)",
        lunch: "Lentil soup with whole grain bread and mixed greens salad (560 cal)",
        dinner: "Vegan pad thai with tofu and vegetables (620 cal)",
        snacks: "Energy balls with dates and nuts (210 cal)"
      }
    },
    {
      day: "Saturday",
      meals: {
        breakfast: "Avocado toast on whole grain with cherry tomatoes and hemp seeds (440 cal)",
        lunch: "Tempeh Caesar salad with cashew dressing (580 cal)",
        dinner: "Mushroom and spinach risotto with nutritional yeast (600 cal)",
        snacks: "Banana with peanut butter (200 cal)"
      }
    },
    {
      day: "Sunday",
      meals: {
        breakfast: "Chia pudding with coconut milk, mango and almonds (450 cal)",
        lunch: "Veggie burger with sweet potato fries and salad (610 cal)",
        dinner: "Chickpea pasta with marinara sauce and vegetables (590 cal)",
        snacks: "Mixed nuts and dried cranberries (190 cal)"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Vegan & Vegetarian Meal Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A nutritious 7-day plant-based meal plan packed with protein and essential nutrients. 
            Each day provides approximately 1800 calories with diverse whole food sources.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto mb-8">
          {weekPlan.map((day, index) => (
            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-2xl">{day.day}</CardTitle>
                <CardDescription>Total: ~1800 calories | Plant-Based Protein</CardDescription>
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

export default VeganPlans;
