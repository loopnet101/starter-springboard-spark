import { Shield, Search, Gavel, DollarSign } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Investigation & Analysis",
      description: "Comprehensive blockchain forensics to trace your stolen funds across multiple networks and exchanges."
    },
    {
      icon: Shield,
      title: "Legal Action",
      description: "Aggressive legal pursuit against scammers and fraudulent entities to recover your cryptocurrency."
    },
    {
      icon: Gavel,
      title: "Court Representation",
      description: "Expert litigation services with specialized knowledge in cryptocurrency and blockchain technology."
    },
    {
      icon: DollarSign,
      title: "Asset Recovery",
      description: "Proven track record of successfully recovering lost funds with minimum case value of $1,000."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Recovery Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized legal services for cryptocurrency fraud victims. Our tech-savvy legal team 
            combines legal expertise with cutting-edge blockchain technology to recover your lost funds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mb-6 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card rounded-2xl p-8 border border-border shadow-elegant">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Minimum Case Value: $1,000 USD</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on substantial recovery cases to ensure the best return on investment for our clients. 
              Our success fee structure aligns our interests with yours - we only succeed when you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;