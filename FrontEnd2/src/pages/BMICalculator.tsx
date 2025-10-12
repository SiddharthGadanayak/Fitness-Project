import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters
    
    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBMI(parseFloat(bmiValue.toFixed(1)));
      
      // Determine category
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 25) setCategory("Normal weight");
      else if (bmiValue < 30) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "text-foreground";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi < 25) return "text-green-500";
    if (bmi < 30) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            BMI Calculator
          </h2>
          <p className="text-xl text-muted-foreground">
            Calculate your Body Mass Index to understand your current fitness level
          </p>
        </div>

        <Card className="p-8 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="weight" className="text-base font-semibold">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter your weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-2 h-12 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="height" className="text-base font-semibold">
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter your height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-2 h-12 text-lg"
                />
              </div>

              <Button 
                onClick={calculateBMI}
                variant="hero"
                size="lg"
                className="w-full"
              >
                <Calculator className="mr-2" />
                Calculate BMI
              </Button>
            </div>

            {/* Result Section */}
            <div className="flex items-center justify-center">
              {bmi !== null ? (
                <div className="text-center space-y-4 animate-scale-in">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full gradient-primary flex items-center justify-center animate-glow">
                      <div className="w-40 h-40 rounded-full bg-white flex flex-col items-center justify-center">
                        <span className={`text-5xl font-bold ${getBMIColor()}`}>
                          {bmi}
                        </span>
                        <span className="text-sm text-muted-foreground mt-1">BMI</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{category}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your Body Mass Index
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p>Enter your details to calculate BMI</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BMICalculator;
