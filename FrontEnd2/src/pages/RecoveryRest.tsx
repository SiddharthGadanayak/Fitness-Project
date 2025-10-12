import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const RecoveryRest = () => {
  const navigate = useNavigate();

  const tips = [
    "Active recovery techniques",
    "Rest day planning",
    "Muscle soreness management",
    "Foam rolling guidance",
    "Injury prevention strategies",
    "Recovery nutrition tips"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(120deg, #43cea2, #185a9d)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Recovery & Rest
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn the importance of rest days and proper recovery techniques
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">Daily Tips Include</h2>
            <div className="grid gap-4 mb-8">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{tip}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button onClick={() => navigate("/")} size="lg">
                Join Waitlist
              </Button>
              <Button onClick={() => navigate("/fitness-tips")} variant="outline" size="lg">
                Back to Tips
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecoveryRest;
