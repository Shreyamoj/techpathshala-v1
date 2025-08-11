import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import pythonIcon from "@/assets/python-icon.jpg";
import webDevIcon from "@/assets/web-dev-icon.jpg";
import dataAnalysisIcon from "@/assets/data-analysis-icon.jpg";
import excelIcon from "@/assets/excel-icon.jpg";

const courses = [
  {
    title: "Python with Fun Projects",
    description: "Learn Python through games, animations, and interactive projects that make coding exciting!",
    image: pythonIcon,
    duration: "8 weeks",
    students: "150+",
    rating: "4.9",
    level: "Beginner",
    topics: ["Variables & Functions", "Games Development", "File Handling", "Mini Projects"]
  },
  {
    title: "HTML, CSS & Build a Website", 
    description: "Create your own responsive websites from scratch and learn modern web design principles.",
    image: webDevIcon,
    duration: "6 weeks", 
    students: "200+",
    rating: "4.8",
    level: "Beginner",
    topics: ["HTML Structure", "CSS Styling", "Responsive Design", "Portfolio Website"]
  },
  {
    title: "Data Analysis for Beginners",
    description: "Discover insights from data using Python libraries and create beautiful visualizations.",
    image: dataAnalysisIcon,
    duration: "10 weeks",
    students: "120+", 
    rating: "4.9",
    level: "Intermediate",
    topics: ["Data Cleaning", "Pandas Library", "Data Visualization", "Real Datasets"]
  },
  {
    title: "Excel + Graphs for School Projects",
    description: "Master Excel skills for school presentations, data analysis, and academic projects.",
    image: excelIcon,
    duration: "4 weeks",
    students: "180+",
    rating: "4.7", 
    level: "Beginner",
    topics: ["Formulas & Functions", "Charts & Graphs", "Data Analysis", "Project Templates"]
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-accent/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What You'll <span className="gradient-text">Learn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on courses designed to build real skills that you can use in school and beyond
          </p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 w-max lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:w-full">
            {courses.map((course, index) => (
              <div 
                key={course.title}
                className="group w-80 lg:w-full animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="h-full bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 flex flex-col">
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  {/* Course Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {course.description}
                      </p>
                    </div>
                    
                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </div>
                    </div>
                    
                    {/* Topics */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">What you'll learn:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.topics.map((topic) => (
                          <span 
                            key={topic}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground mt-auto">
                      <a href="/contact">
                        Start Learning
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
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