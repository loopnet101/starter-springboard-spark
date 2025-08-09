import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-serif">LoopNet Recovery</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#team" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
              Our Team
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hover:bg-primary/10 transition-colors duration-300">
              Case Consultation
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Start Recovery
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;