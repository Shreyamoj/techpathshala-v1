import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Star, Globe, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-students.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent via-background to-primary/5 overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-bounce-gentle"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="order-1 lg:order-1">
            <div className="space-y-6 animate-fade-in">
              {/* Language Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  <Globe className="w-3 h-3" />
                  বাংলা + English
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 border-green-200">
                  <Play className="w-3 h-3" />
                  Free Videos Available
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-secondary font-medium">
                  <Star className="w-5 h-5 fill-secondary" />
                  <span>Trusted by 500+ Students across Bengal</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  তোমার{" "}
                  <span className="gradient-text">Tech Journey</span>{" "}
                  শুরু করো!
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Class 8–12 ছাত্রছাত্রীদের জন্য{" "}
                  <span className="font-semibold text-primary">Coding</span>,{" "}
                  <span className="font-semibold text-secondary">Web Design</span> ও{" "}
                  <span className="font-semibold text-primary">Data Analysis</span> — 
                  বাংলা ও English এ শেখো, মোবাইলেই!
                </p>
                
                {/* Mobile friendly message */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2 w-fit">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span>📱 কম্পিউটার নেই? চিন্তা নেই! মোবাইলেই শেখা যায়</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="group text-base">
                  <a href="#free-videos">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Free Videos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="bg-background/80 backdrop-blur-sm text-base">
                  <Link to="/contact">
                    <Users className="w-5 h-5 mr-2" />
                    Book Demo Class
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">4.9★</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">৭০%</div>
                  <div className="text-xs text-muted-foreground">Mobile Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Free</div>
                  <div className="text-xs text-muted-foreground">Videos</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-2 lg:order-2 relative animate-slide-up lg:pl-8">
            <div className="relative z-10 bg-card rounded-2xl shadow-card overflow-hidden max-w-lg mx-auto lg:mx-0">
              <img 
                src={heroImage} 
                alt="Students learning coding" 
                className="w-full h-auto"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">Free Course শুরু করো!</p>
                    <p className="text-xs text-muted-foreground">কোনো টাকা লাগবে না</p>
                  </div>
                  <Button size="sm" asChild>
                    <a href="#free-videos">
                      <Play className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;