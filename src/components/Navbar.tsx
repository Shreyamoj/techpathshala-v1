import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Sparkles, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl md:text-2xl font-bold gradient-text">
            TechPathshala
          </Link>

          <div className="hidden md:flex items-baseline space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
            <a href="/#starter-videos" className="text-foreground hover:text-primary transition-colors font-medium">Starter Lessons</a>
            <a href="/#ai-learning" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-purple-500" /> AI Learning
            </a>
            <Link to="/courses" className="text-foreground hover:text-primary transition-colors font-medium">Courses</Link>
            <a href="/#live-classes" className="text-foreground hover:text-primary transition-colors font-medium">Live Class</a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/dashboard" className="gap-1"><LayoutDashboard className="w-4 h-4" /> Dashboard</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/contact">Book Demo <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/50">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">Home</Link>
            <a href="/#starter-videos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">Starter Lessons</a>
            <a href="/#ai-learning" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">
              <Sparkles className="w-4 h-4 text-purple-500" /> AI Learning
            </a>
            <Link to="/courses" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">Courses</Link>
            <a href="/#live-classes" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">Live Class</a>
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 font-medium text-foreground hover:text-primary hover:bg-accent rounded-md">
              <LayoutDashboard className="w-4 h-4" /> My Dashboard
            </Link>
            <div className="px-3 py-2">
              <Button asChild size="sm" className="w-full"><Link to="/contact">Book Demo <ArrowRight className="w-4 h-4 ml-1" /></Link></Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
