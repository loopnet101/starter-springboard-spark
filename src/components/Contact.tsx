import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Time is Critical</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
            Start Your Recovery Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Don't let crypto scammers get away with your hard-earned money. 
            Contact our expert legal team for a free consultation and case evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <div className="bg-card rounded-3xl p-10 shadow-elegant border border-border/50 hover-lift animate-slide-in-left">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Free Case Evaluation</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 hover:border-primary/50"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 hover:border-primary/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 hover:border-primary/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Amount Lost (USD)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background transition-all duration-300 hover:border-primary/50"
                  placeholder="Minimum $1,000"
                  min="1000"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Describe Your Case</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-background resize-none transition-all duration-300 hover:border-primary/50"
                  placeholder="Tell us about the scam, cryptocurrency involved, and any evidence you have..."
                />
              </div>
              
              <Button className="w-full text-lg py-4 h-auto bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Request Free Consultation
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-card rounded-3xl p-10 shadow-elegant border border-border/50 hover-lift">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Official Communication</h4>
                    <p className="text-primary font-medium mb-1">loopnet.technologies@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Response Time</h4>
                    <p className="text-muted-foreground mb-1">24/7 Emergency Cases</p>
                    <p className="text-sm text-muted-foreground">Urgent matters handled immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Global Service</h4>
                    <p className="text-muted-foreground mb-1">Worldwide Recovery Operations</p>
                    <p className="text-sm text-muted-foreground">Cross-border cryptocurrency cases</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8 hover-lift">
              <div className="flex items-start space-x-4 mb-6">
                <AlertCircle className="w-8 h-8 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-destructive">🚨 Time is Critical</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The longer you wait, the harder it becomes to recover your funds. 
                    Crypto scammers move quickly to hide their tracks.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Success-based pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Confidential handling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;