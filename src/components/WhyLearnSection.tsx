import { CheckCircle, Languages, BookOpen, Trophy, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Bilingual Instruction",
    description: "Learn in both Bengali and English - choose what's comfortable for you",
    color: "bg-blue-500"
  },
  {
    icon: BookOpen,
    title: "Designed for Class 8–12",
    description: "Age-appropriate curriculum that matches your school level and learning pace",
    color: "bg-green-500"
  },
  {
    icon: Lightbulb,
    title: "Hands-on Mini Projects",
    description: "Build real projects like games, websites, and data dashboards you can show off",
    color: "bg-purple-500"
  },
  {
    icon: Users,
    title: "Learn from Mentors",
    description: "Get guidance from experienced developers and student mentors",
    color: "bg-orange-500"
  },
  {
    icon: Trophy,
    title: "Get Certificates",
    description: "Earn recognized certificates to showcase your skills in school and beyond",
    color: "bg-red-500"
  },
  {
    icon: CheckCircle,
    title: "Small Batch Learning",
    description: "Maximum 15 students per batch for personalized attention and better learning",
    color: "bg-indigo-500"
  }
];

const WhyLearnSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Learn with <span className="gradient-text">Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another coding platform - we're your tech learning partners designed specifically for Indian students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-full bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional benefits */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white shadow-glow">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            🚀 Plus, You Get Access To:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">💬</div>
              <h4 className="font-semibold">24/7 Doubt Support</h4>
              <p className="text-white/80 text-sm">Ask questions anytime via WhatsApp</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">👥</div>
              <h4 className="font-semibold">Student Community</h4>
              <p className="text-white/80 text-sm">Connect with peers from across India</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎯</div>
              <h4 className="font-semibold">Career Guidance</h4>
              <p className="text-white/80 text-sm">Plan your tech career from school itself</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnSection;