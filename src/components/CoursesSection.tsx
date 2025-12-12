import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, Sparkles, Bot } from "lucide-react";
import pythonIcon from "@/assets/python-icon.jpg";
import webDevIcon from "@/assets/web-dev-icon.jpg";
import dataAnalysisIcon from "@/assets/data-analysis-icon.jpg";
import excelIcon from "@/assets/excel-icon.jpg";

const courses = [
  {
    title: "Python + AI Fundamentals",
    titleBn: "পাইথন + AI বেসিক",
    description: "Learn Python with AI tools - code faster, debug smarter, build projects with ChatGPT assistance!",
    image: pythonIcon,
    duration: "8 weeks",
    students: "150+",
    rating: "4.9",
    level: "Beginner",
    hasAI: true,
    topics: ["Python Basics + AI", "ChatGPT for Coding", "AI-Powered Debugging", "Smart Projects"]
  },
  {
    title: "Web Dev with AI Tools", 
    titleBn: "ওয়েব ডেভ + AI",
    description: "Create websites using modern AI assistants - design faster, code efficiently with AI help!",
    image: webDevIcon,
    duration: "6 weeks", 
    students: "200+",
    rating: "4.8",
    level: "Beginner",
    hasAI: true,
    topics: ["HTML/CSS + AI", "AI Design Tools", "Copilot Integration", "Portfolio Website"]
  },
  {
    title: "Data Analysis + AI",
    titleBn: "ডেটা অ্যানালাইসিস + AI",
    description: "Analyze data using AI - automate insights, create visualizations with intelligent tools!",
    image: dataAnalysisIcon,
    duration: "10 weeks",
    students: "120+", 
    rating: "4.9",
    level: "Intermediate",
    hasAI: true,
    topics: ["AI Data Cleaning", "Smart Visualization", "Automated Insights", "Real Projects"]
  },
  {
    title: "Excel + AI Mastery",
    titleBn: "এক্সেল + AI মাস্টারি",
    description: "Master Excel with AI formulas, automated charts, and smart data analysis for school projects!",
    image: excelIcon,
    duration: "4 weeks",
    students: "180+",
    rating: "4.7", 
    level: "Beginner",
    hasAI: true,
    topics: ["AI Formulas", "Smart Charts", "Automated Reports", "Project Templates"]
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-accent/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="bg-purple-500/20 text-purple-700 mb-4">
            <Sparkles className="w-4 h-4 mr-1" /> AI-Enhanced Courses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            তুমি কী <span className="gradient-text">শিখবে?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered courses designed for real skills | AI দিয়ে শেখো, দ্রুত শেখো
          </p>
        </div>
        
        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div 
              key={course.title}
              className="group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 flex flex-col">
                {/* Course Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-primary text-primary-foreground text-xs">
                      {course.level}
                    </Badge>
                    {course.hasAI && (
                      <Badge className="bg-purple-500 text-white text-xs">
                        <Bot className="w-3 h-3 mr-1" /> AI
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{course.titleBn}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  
                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {course.students}
                    </div>
                  </div>
                  
                  {/* Topics */}
                  <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild size="sm" className="w-full mt-auto">
                    <a href="/contact">
                      Start Learning
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <a href="/courses">
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;