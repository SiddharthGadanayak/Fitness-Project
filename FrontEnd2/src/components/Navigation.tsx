import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import AuthDialog from "./AuthDialog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "signup">("login");

  const openAuthDialog = (tab: "login" | "signup") => {
    setAuthTab(tab);
    setAuthDialogOpen(true);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-primary">FitLife</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="navGhost">Dashboard</Button>
            <Button variant="outline" onClick={() => openAuthDialog("signup")}>Sign Up</Button>
            <Button variant="hero" size="default" onClick={() => openAuthDialog("login")}>Login</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            <Button variant="navGhost" className="w-full justify-start">Dashboard</Button>
            <Button variant="outline" className="w-full" onClick={() => openAuthDialog("signup")}>Sign Up</Button>
            <Button variant="hero" className="w-full" onClick={() => openAuthDialog("login")}>Login</Button>
          </div>
        )}
      </div>

      <AuthDialog 
        open={authDialogOpen} 
        onOpenChange={setAuthDialogOpen} 
        defaultTab={authTab}
      />
    </nav>
  );
};

export default Navigation;
