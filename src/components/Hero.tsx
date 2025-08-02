import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hajj-umrah.jpg";
import logoImage from "@/assets/pilgrim-connect-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="Pilgrim Connect" className="w-12 h-12" />
            <span className="text-white text-xl font-semibold">Pilgrim Connect</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Connecting Hajj & Umrah Agencies with{" "}
          <span className="text-secondary">Verified Leads</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          We bring you ready-to-book pilgrims, you focus on delivering the service.
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-semibold shadow-button transition-all duration-300 hover:scale-105"
        >
          Get Started
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;