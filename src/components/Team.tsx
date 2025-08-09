import lawyersTeam from "@/assets/lawyers-team.jpg";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Lead Crypto Recovery Attorney",
      image: lawyer1,
      expertise: "Blockchain Forensics & Litigation"
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Partner",
      image: lawyer2,
      expertise: "Cryptocurrency Law & Fraud Investigation"
    },
    {
      name: "Emily Thompson",
      role: "Digital Assets Specialist",
      image: lawyer3,
      expertise: "Cross-border Recovery & Compliance"
    }
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Expert Legal Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tech-savvy lawyers with deep expertise in cryptocurrency, blockchain technology, 
            and digital asset recovery. Our team combines legal excellence with technical knowledge.
          </p>
        </div>

        {/* Hero team image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
            <img 
              src={lawyersTeam} 
              alt="LoopNet Recovery Legal Team" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">United in Recovery</h3>
              <p className="text-white/90">Dedicated to getting your cryptocurrency back</p>
            </div>
          </div>
        </div>

        {/* Individual team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-glow transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-elegant max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Team?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">✓ Technical Expertise</h4>
                <p className="text-muted-foreground text-sm">Deep understanding of blockchain technology and crypto ecosystems</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Legal Excellence</h4>
                <p className="text-muted-foreground text-sm">Years of experience in financial fraud and asset recovery law</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Global Reach</h4>
                <p className="text-muted-foreground text-sm">International network for cross-border cryptocurrency recovery</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✓ Success Rate</h4>
                <p className="text-muted-foreground text-sm">Proven track record with millions recovered for our clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;