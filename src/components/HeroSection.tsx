import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent via-background to-primary/5 overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Content - Always on top on mobile */}
          <div className="order-1 lg:order-1">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-secondary font-medium">
                  <Star className="w-5 h-5" />
                  <span>Trusted by 500+ Students</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Start Your{" "}
                  <span className="gradient-text">Tech Journey</span>{" "}
                  in School
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  TechPathshala empowers Class 8–12 students with real-world{" "}
                  <span className="font-semibold text-primary">coding</span>,{" "}
                  <span className="font-semibold text-secondary">web</span>, and{" "}
                  <span className="font-semibold text-primary">data skills</span> — in Bengali and English.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="xl" className="bg-white/80 backdrop-blur-sm">
                  <Users className="w-5 h-5" />
                  Join Community
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Student Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image - Below content on mobile */}
          <div className="order-2 lg:order-2 relative animate-slide-up lg:pl-8">
            <div className="relative z-10 bg-white rounded-2xl shadow-card overflow-hidden max-w-lg mx-auto lg:mx-0">
              <img 
                src={heroImage} 
                alt="Students learning coding and technology" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating cards - Hidden on mobile to prevent overlap */}
            <div className="hidden lg:block absolute -top-4 -left-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-card animate-bounce-gentle">
              <Code className="w-6 h-6" />
            </div>
            
            <div className="hidden lg:block absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-3 rounded-xl shadow-card animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;