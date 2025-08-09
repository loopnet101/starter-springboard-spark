import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary-glow/20 to-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-1.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="flex items-center space-x-3 glass-effect rounded-full px-6 py-3 shadow-soft">
            <Shield className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Professional Crypto Recovery Services</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Recover Your Lost
          <br />
          <span className="text-gradient">
            Crypto Funds
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Tech-savvy lawyers specialized in cryptocurrency fraud recovery. 
          We help victims recover lost funds from crypto scams with our proven legal expertise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-scale-in" style={{animationDelay: '0.6s'}}>
          <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 h-auto">
            Start Recovery Process
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto hover:bg-primary/5 transition-all duration-300">
            Free Consultation
          </Button>
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-slide-in-left" style={{animationDelay: '0.8s'}}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">$50M+</div>
            <p className="text-muted-foreground">Recovered for Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">95%</div>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</div>
            <p className="text-muted-foreground">Cases Won</p>
          </div>
        </div>

        {/* Enhanced features section */}
        <div className="animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="bg-gradient-card rounded-3xl p-10 shadow-elegant backdrop-blur-sm border border-border/50 max-w-5xl mx-auto hover-lift">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Legal Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tech-savvy lawyers with deep crypto expertise and proven track record
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Successfully recovered millions in lost funds with our innovative approach
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Minimum $1,000</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We handle substantial recovery cases with no upfront fees
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