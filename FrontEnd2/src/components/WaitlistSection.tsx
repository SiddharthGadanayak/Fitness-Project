import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Twitter } from "lucide-react";
import { useState } from "react";

const WaitlistSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Submitted:", { fullName, email, message });

    setFullName("");
    setEmail("");
    setMessage("");
    alert("Thank you for subscribing! We'll be in touch soon.");
  };
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(120deg, #43cea2, #185a9d)' }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Join Waitlist Form */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Be a Subscriber
              </h2>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-white font-medium">Full Name *</label>
                <Input
                  placeholder="Enter your full name"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-sm"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-white font-medium">Email Address *</label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-sm"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-white font-medium">Message</label>
                <Textarea
                  placeholder="Tell us about your fitness goals..."
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-sm min-h-[100px] resize-none"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg py-3"
              >
                Subscribe
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Right Side - Get in Touch */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-white/90">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Email */}
            <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Mail className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-white/80">contact@healthapp.com</p>
              </div>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Early Access Benefits */}
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Early Access Benefits</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">✓</span>
                  <span>Free premium features for 3 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">✓</span>
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">✓</span>
                  <span>Exclusive wellness resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white font-bold">✓</span>
                  <span>Beta feature access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
