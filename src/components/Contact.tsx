import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Recovery Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't let crypto scammers get away with your hard-earned money. 
            Contact our expert legal team for a free consultation and case evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-bold mb-6">Free Case Evaluation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Amount Lost (USD)</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="Minimum $1,000"
                  min="1000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Describe Your Case</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                  placeholder="Tell us about the scam, cryptocurrency involved, and any evidence you have..."
                />
              </div>
              
              <Button className="w-full" size="lg">
                Request Free Consultation
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Official Communication</h4>
                    <p className="text-muted-foreground">loopnet.technologies@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-muted-foreground">24/7 Emergency Cases</p>
                    <p className="text-sm text-muted-foreground mt-1">Urgent matters handled immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Service</h4>
                    <p className="text-muted-foreground">Worldwide Recovery Operations</p>
                    <p className="text-sm text-muted-foreground mt-1">Cross-border cryptocurrency cases</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-elegant">
              <h3 className="text-xl font-bold mb-4">🚨 Time is Critical</h3>
              <p className="text-muted-foreground mb-4">
                The longer you wait, the harder it becomes to recover your funds. 
                Crypto scammers move quickly to hide their tracks.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Free initial consultation</li>
                <li>✓ No upfront fees</li>
                <li>✓ Success-based pricing</li>
                <li>✓ Confidential case handling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;