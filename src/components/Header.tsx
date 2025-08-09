import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-semibold">YourApp</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="default">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;