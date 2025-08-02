import { Check } from "lucide-react";

const About = () => {
  const features = [
    "Verified Leads Database",
    "Commission-Based Model",
    "100% Data Privacy"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            About Pilgrim Connect
          </h2>
          <p className="text-lg md:text-xl text-foreground mb-12 leading-relaxed">
            Pilgrim Connect is a verified marketing agency specializing in Hajj & Umrah lead generation. 
            We help travel agencies grow by delivering authentic and pre-qualified client leads.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 p-6 bg-card rounded-lg shadow-card">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-secondary-foreground" />
                </div>
                <span className="text-lg font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;