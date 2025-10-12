import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const FlexibilityYoga = () => {
  const navigate = useNavigate();

  const practiceDetails = [
    "Deep stretching sequences",
    "Hip and hamstring openers",
    "Spine flexibility work",
    "Progressive flexibility training",
    "Injury prevention techniques",
    "Full body mobility improvement"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(120deg, #43cea2, #185a9d)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Flexibility & Stretching
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Improve your range of motion and prevent injuries with targeted flexibility work
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="grid gap-4 mb-8">
              {practiceDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{detail}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button onClick={() => navigate("/")} size="lg">
                Join Waitlist
              </Button>
              <Button onClick={() => navigate("/yoga-plans")} variant="outline" size="lg">
                Back to Plans
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FlexibilityYoga;
