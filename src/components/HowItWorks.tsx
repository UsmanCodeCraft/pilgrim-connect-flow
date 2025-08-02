import { FileText, Target, Users, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Share Your Packages",
      description: "Agencies provide their brochures and service details."
    },
    {
      icon: Target,
      title: "We Run Outreach",
      description: "Targeted campaigns to verified leads and potential pilgrims."
    },
    {
      icon: Users,
      title: "You Get Clients",
      description: "Pre-qualified customers ready to book their pilgrimage."
    },
    {
      icon: CreditCard,
      title: "Pay on Results",
      description: "Commission-based model - you only pay for successful conversions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step process to connect you with qualified pilgrims
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:bg-secondary transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-primary-foreground group-hover:text-secondary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;