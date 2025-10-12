import { useEffect, useRef } from "react";
import saladImg from "@/assets/food-salad.jpg";
import salmonImg from "@/assets/food-salmon.jpg";
import fruitsImg from "@/assets/food-fruits.jpg";
import smoothieImg from "@/assets/food-smoothie.jpg";
import chickenImg from "@/assets/food-chicken.jpg";
import nutsImg from "@/assets/food-nuts.jpg";

const foods = [
  { id: 1, name: "Fresh Salad Bowl", image: saladImg },
  { id: 2, name: "Grilled Salmon", image: salmonImg },
  { id: 3, name: "Mixed Fruits", image: fruitsImg },
  { id: 4, name: "Green Smoothie", image: smoothieImg },
  { id: 5, name: "Grilled Chicken", image: chickenImg },
  { id: 6, name: "Nuts & Seeds", image: nutsImg },
];

const FoodCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const autoScroll = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Explore Healthy Foods
        </h2>
        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate items for seamless loop */}
          {[...foods, ...foods].map((food, index) => (
            <div
              key={`${food.id}-${index}`}
              className="flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-elegant hover:scale-105 transition-smooth cursor-pointer"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-card">
                <h3 className="text-lg font-semibold text-foreground">{food.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCarousel;
