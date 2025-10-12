import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 text-white" style={{ background: 'linear-gradient(120deg, #43cea2, #185a9d)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold">FitLoop</span>
            </div>
            <p className="text-white/80">
              Your complete fitness companion for a healthier lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">Home</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-smooth"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} FitLoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
