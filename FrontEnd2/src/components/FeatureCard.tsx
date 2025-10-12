import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
  backgroundImage?: string;
  openPage?: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient, backgroundImage, openPage }: FeatureCardProps) => {
  return (
    <Card
      className={`relative p-6 h-full transition-smooth hover:scale-105 hover:shadow-elegant cursor-pointer group overflow-hidden ${gradient ? 'gradient-primary text-white' : 'bg-card'
        }`}
        onClick={() => {
          if (openPage) {
            window.location.href = openPage;
          } else {
            console.warn("No page specified for this feature.");
          }
        }}
    >
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-smooth"
          />
          <div className={`absolute inset-0 ${gradient
            ? 'bg-gradient-to-br from-primary/30 via-primary/20 to-primary/40'
            : 'bg-gradient-to-br from-background/90 via-background/80 to-background/90'
            }`} />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 ${gradient ? 'bg-background/80 backdrop-blur-sm rounded-lg p-4' : ''}`}>
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-elegant ${gradient ? 'bg-white/90' : 'gradient-primary'
          }`}>
          <Icon className={`w-7 h-7 ${gradient ? 'text-primary' : 'text-white'}`} />
        </div>

        <h3 className={`text-xl font-bold mb-2 ${gradient ? 'text-foreground' : 'text-foreground'
          }`}>
          {title}
        </h3>

        <p className={`font-medium ${gradient ? 'text-foreground/90' : 'text-muted-foreground'
          }`}>
          {description}
        </p>
      </div>
    </Card>
  );
};

export default FeatureCard;
