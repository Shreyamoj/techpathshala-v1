import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Tech</span>
              <span className="text-secondary">Pathshala</span>
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering Class 8-12 students across India with essential tech skills through hands-on learning in Bengali and English.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80">Kolkata, West Bengal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">hello@techpathshala.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
              <button
                onClick={() => scrollToSection('faq')}
                className="block text-background/80 hover:text-primary transition-colors text-sm"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Popular Courses</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/80 hover:text-secondary transition-colors">
                Python with Fun Projects
              </a>
              <a href="#" className="block text-background/80 hover:text-secondary transition-colors">
                HTML, CSS & Website Building
              </a>
              <a href="#" className="block text-background/80 hover:text-secondary transition-colors">
                Data Analysis for Beginners
              </a>
              <a href="#" className="block text-background/80 hover:text-secondary transition-colors">
                Excel + Graphs for School
              </a>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Connect With Us</h4>
            <div className="flex space-x-3">
              <button className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 text-primary group-hover:text-white" />
              </button>
              <button className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 text-primary group-hover:text-white" />
              </button>
              <button className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 text-secondary group-hover:text-white" />
              </button>
              <button className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group">
                <Youtube className="w-5 h-5 text-secondary group-hover:text-white" />
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-background/80">
                Get updates on new courses and tech tips!
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent border-background/30 text-background hover:bg-background/10">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © 2025 TechPathshala. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;