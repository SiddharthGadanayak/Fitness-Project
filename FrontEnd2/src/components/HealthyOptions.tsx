import { Button } from "@/components/ui/button";
import { Utensils, Scale, Apple, Salad } from "lucide-react";

const categories = [
  {
    icon: Utensils,
    title: "Feeling Hungry?",
    subtitle: "Eat Healthy",
  },
  {
    icon: Scale,
    title: "Healthy Weight",
    subtitle: "Management",
  },
  {
    icon: Apple,
    title: "Healthy Eating",
    subtitle: "& Nutrition",
  },
  {
    icon: Salad,
    title: "Healthy Food",
    subtitle: "Choices",
  },
];

const HealthyOptions = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-8 flex flex-col items-center gap-4 hover:scale-105 transition-smooth hover:shadow-elegant hover:border-primary group"
            >
              <category.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                <p className="text-muted-foreground">{category.subtitle}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthyOptions;
