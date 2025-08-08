import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent via-background to-primary/5 overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          <div className="order-2 lg:order-2 relative animate-slide-up">
            <div className="relative z-10 bg-white rounded-3xl shadow-glow overflow-hidden">
              <img 
                src={heroImage} 
                alt="Students learning coding and technology" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-card animate-bounce-gentle">
              <Code className="w-8 h-8" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-2xl shadow-card animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
              <Users className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;