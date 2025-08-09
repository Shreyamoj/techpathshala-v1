import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Database, Palette, Calculator, Rocket } from "lucide-react";

const classes = [
  {
    class: "Class 8",
    skills: "Scratch Programming + Basic HTML",
    icon: Code,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    description: "Start with visual programming and web basics"
  },
  {
    class: "Class 9", 
    skills: "Python Basics + Web Design",
    icon: Palette,
    color: "bg-gradient-to-br from-green-400 to-green-600",
    description: "Learn Python fundamentals and create websites"
  },
  {
    class: "Class 10",
    skills: "Python Projects + CSS Styling",
    icon: Rocket,
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    description: "Build real projects and beautiful interfaces"
  },
  {
    class: "Class 11",
    skills: "Advanced Programming + Data Analysis",
    icon: Database,
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    description: "Master programming concepts and data skills"
  },
  {
    class: "Class 12",
    skills: "Full Stack + Career Prep",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-red-400 to-red-600",
    description: "Complete web development and career guidance"
  }
];

const ClassSection = () => {
  return (
    <section id="classes" className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pick Your <span className="gradient-text">Class</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored learning paths for every grade level, designed to build upon your current knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {classes.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.class}
                className="group relative animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-full bg-card rounded-3xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {item.class}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-3">
                        {item.skills}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    <Button variant="class" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground mt-auto">
                      View Curriculum
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which class to pick? Take our quick assessment!
          </p>
          <Button variant="outline" size="lg">
            <Calculator className="w-5 h-5" />
            Find My Level
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassSection;