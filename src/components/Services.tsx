import { Shield, Search, Gavel, DollarSign, Clock, Globe, CheckCircle, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Investigation & Analysis",
      description: "Comprehensive blockchain forensics to trace your stolen funds across multiple networks and exchanges using advanced tracking technology."
    },
    {
      icon: Shield,
      title: "Legal Action",
      description: "Aggressive legal pursuit against scammers and fraudulent entities to recover your cryptocurrency with our proven strategies."
    },
    {
      icon: Gavel,
      title: "Court Representation",
      description: "Expert litigation services with specialized knowledge in cryptocurrency and blockchain technology for complex cases."
    },
    {
      icon: DollarSign,
      title: "Asset Recovery",
      description: "Proven track record of successfully recovering lost funds with minimum case value of $1,000 and no upfront fees."
    }
  ];

  const processSteps = [
    {
      icon: Clock,
      title: "Free Consultation",
      description: "Initial case evaluation within 24 hours"
    },
    {
      icon: Search,
      title: "Investigation",
      description: "Blockchain forensics and evidence gathering"
    },
    {
      icon: Gavel,
      title: "Legal Action",
      description: "Filing claims and pursuing recovery"
    },
    {
      icon: CheckCircle,
      title: "Recovery",
      description: "Successful fund recovery and transfer"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
            Recovery Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Specialized legal services for cryptocurrency fraud victims. Our tech-savvy legal team 
            combines legal expertise with cutting-edge blockchain technology to recover your lost funds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover-lift group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mb-6 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mb-20 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">Our Recovery Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow transform translate-x-4"></div>
                )}
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-soft">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-card rounded-3xl p-10 border border-border/50 shadow-elegant hover-lift animate-scale-in">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-glow">
              <DollarSign className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Minimum Case Value: $1,000 USD</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We focus on substantial recovery cases to ensure the best return on investment for our clients. 
              Our success fee structure aligns our interests with yours - we only succeed when you do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">No Upfront Fees</h4>
                  <p className="text-sm text-muted-foreground">Pay only when we recover your funds</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Global Coverage</h4>
                  <p className="text-sm text-muted-foreground">Worldwide cryptocurrency recovery</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Emergency response available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;