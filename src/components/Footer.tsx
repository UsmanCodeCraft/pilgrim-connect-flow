import { Facebook, Linkedin } from "lucide-react";
import logoImage from "@/assets/pilgrim-connect-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Policies Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Data Privacy & Compliance</h3>
            <p className="text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              We comply with all data privacy standards. We only deliver result-oriented marketing services 
              and ensure complete confidentiality of your business and client information.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary hover:text-secondary/80 transition-colors">
                Data Compliance Notice
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={logoImage} alt="Pilgrim Connect" className="w-10 h-10" />
            <span className="text-xl font-semibold">Pilgrim Connect</span>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="text-primary-foreground/80 text-sm text-center md:text-right">
            <p>&copy; 2025 Pilgrim Connect – All Rights Reserved</p>
            <p className="mt-1">ClientFlowagency.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;