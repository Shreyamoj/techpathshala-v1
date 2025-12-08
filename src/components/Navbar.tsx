import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold gradient-text">
              TechPathshala
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link 
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <a 
                href="/#free-videos"
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                <span className="text-green-500 text-xs">●</span>
                Free Videos
              </a>
              <Link 
                to="/courses"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Courses
              </Link>
              <a 
                href="/#live-classes"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Live Class
              </a>
              <Link 
                to="/about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-green-500 hover:bg-green-600 text-white">
              <Link to="/contact">
                Book Demo
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/50">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              >
                Home
              </Link>
              <a
                href="/#free-videos"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              >
                <span className="text-green-500 text-xs">●</span>
                Free Videos
              </a>
              <Link
                to="/courses"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              >
                Courses
              </Link>
              <a
                href="/#live-classes"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              >
                Live Class
              </a>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              >
                About
              </Link>
              <div className="px-3 py-2">
                <Button asChild size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <Link to="/contact">
                    Book Demo Class
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;