import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Ready to build amazing things</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Your Blank Canvas
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Awaits
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Start building your next amazing project with a beautiful, modern foundation. 
          Clean design, smooth animations, and endless possibilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" className="group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant backdrop-blur-sm border border-border max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Modern Design</h3>
                <p className="text-muted-foreground text-sm">
                  Beautiful gradients and smooth animations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Responsive</h3>
                <p className="text-muted-foreground text-sm">
                  Looks perfect on every device
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Ready to Build</h3>
                <p className="text-muted-foreground text-sm">
                  Start developing immediately
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;