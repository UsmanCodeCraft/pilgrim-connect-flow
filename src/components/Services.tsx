import { TrendingUp, Mail, BarChart3, Handshake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Lead Generation Campaigns",
      description: "Targeted digital marketing campaigns to reach potential pilgrims actively searching for Hajj & Umrah services."
    },
    {
      icon: Mail,
      title: "Email & Call Outreach",
      description: "Professional outreach through email marketing and targeted phone campaigns to qualified prospects."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Marketing",
      description: "Analytics-powered strategies that optimize campaign performance and maximize your return on investment."
    },
    {
      icon: Handshake,
      title: "Commission-Based Partnerships",
      description: "Risk-free partnership model where you only pay for successful lead conversions and bookings."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive lead generation solutions tailored for Hajj & Umrah travel agencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;