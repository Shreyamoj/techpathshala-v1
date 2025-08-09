import { useState } from "react";
import { ArrowLeft, Clock, Users, Star, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import { Link } from "react-router-dom";

// Course data
const courses = [
  {
    id: 1,
    title: "Python Programming Fundamentals",
    subtitle: "Build Your First Python Projects",
    description: "Learn Python from scratch with fun projects and games. Perfect for beginners who want to start their coding journey.",
    image: "/placeholder.svg",
    duration: "8 weeks",
    students: "2,500+",
    rating: 4.8,
    level: "Beginner",
    price: "₹2,999",
    originalPrice: "₹4,999",
    discount: "40% OFF",
    topics: ["Variables & Data Types", "Loops & Conditions", "Functions", "File Handling", "Mini Projects"],
    projects: ["Calculator App", "Quiz Game", "Student Database", "Weather App"],
    whatYoullLearn: [
      "Python syntax and fundamentals",
      "Problem-solving with programming",
      "Build 4+ real projects",
      "Debugging and testing code",
      "Basic data structures"
    ],
    prerequisites: ["Basic computer skills", "Class 8+ mathematics"],
    classesFor: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    instructor: "Raj Kumar",
    instructorBio: "5+ years teaching experience, IIT graduate",
    modules: [
      { title: "Getting Started with Python", lessons: 6, duration: "2 hours" },
      { title: "Variables and Data Types", lessons: 8, duration: "3 hours" },
      { title: "Control Structures", lessons: 10, duration: "4 hours" },
      { title: "Functions and Modules", lessons: 7, duration: "3 hours" },
      { title: "File Operations", lessons: 5, duration: "2 hours" },
      { title: "Final Projects", lessons: 4, duration: "6 hours" }
    ]
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    subtitle: "HTML, CSS & JavaScript Mastery",
    description: "Create beautiful websites from scratch. Learn HTML, CSS, and JavaScript to build responsive web applications.",
    image: "/placeholder.svg",
    duration: "10 weeks",
    students: "1,800+",
    rating: 4.9,
    level: "Beginner to Intermediate",
    price: "₹3,999",
    originalPrice: "₹6,999",
    discount: "43% OFF",
    topics: ["HTML Structure", "CSS Styling", "JavaScript Logic", "Responsive Design", "Web Projects"],
    projects: ["Personal Portfolio", "Restaurant Website", "Interactive Games", "Blog Platform"],
    whatYoullLearn: [
      "Complete HTML & CSS mastery",
      "JavaScript programming",
      "Responsive web design",
      "Building real websites",
      "Modern web development practices"
    ],
    prerequisites: ["Basic computer skills", "Interest in web design"],
    classesFor: ["Class 9", "Class 10", "Class 11", "Class 12"],
    instructor: "Priya Sharma",
    instructorBio: "Frontend developer at top tech company",
    modules: [
      { title: "HTML Fundamentals", lessons: 8, duration: "3 hours" },
      { title: "CSS Styling & Layout", lessons: 12, duration: "5 hours" },
      { title: "JavaScript Basics", lessons: 10, duration: "4 hours" },
      { title: "Responsive Design", lessons: 6, duration: "3 hours" },
      { title: "Advanced JavaScript", lessons: 8, duration: "4 hours" },
      { title: "Final Projects", lessons: 6, duration: "8 hours" }
    ]
  },
  {
    id: 3,
    title: "Data Analysis with Excel & Python",
    subtitle: "Turn Numbers into Insights",
    description: "Master data analysis skills using Excel and Python. Learn to create charts, analyze trends, and make data-driven decisions.",
    image: "/placeholder.svg",
    duration: "6 weeks",
    students: "1,200+",
    rating: 4.7,
    level: "Beginner",
    price: "₹2,499",
    originalPrice: "₹3,999",
    discount: "38% OFF",
    topics: ["Excel Formulas", "Data Visualization", "Python Pandas", "Statistical Analysis", "Dashboard Creation"],
    projects: ["School Grade Analysis", "Sports Statistics", "Market Research", "Personal Finance Tracker"],
    whatYoullLearn: [
      "Advanced Excel techniques",
      "Data analysis with Python",
      "Creating interactive charts",
      "Statistical thinking",
      "Business intelligence basics"
    ],
    prerequisites: ["Basic math skills", "Class 10+ statistics knowledge"],
    classesFor: ["Class 10", "Class 11", "Class 12"],
    instructor: "Amit Gupta",
    instructorBio: "Data scientist with 7+ years experience",
    modules: [
      { title: "Excel Mastery", lessons: 10, duration: "4 hours" },
      { title: "Data Cleaning & Preparation", lessons: 6, duration: "3 hours" },
      { title: "Python for Data Analysis", lessons: 8, duration: "4 hours" },
      { title: "Visualization Techniques", lessons: 7, duration: "3 hours" },
      { title: "Statistical Analysis", lessons: 5, duration: "2 hours" },
      { title: "Capstone Projects", lessons: 4, duration: "6 hours" }
    ]
  }
];

const CourseCard = ({ course, onClick }: { course: any; onClick: () => void }) => (
  <Card className="group cursor-pointer overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1" onClick={onClick}>
    <div className="relative overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
        {course.discount}
      </Badge>
      <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
        {course.level}
      </Badge>
    </div>
    
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
        <span className="text-muted-foreground">•</span>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{course.students}</span>
        </div>
        <span className="text-muted-foreground">•</span>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{course.duration}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">{course.price}</span>
          <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
        </div>
        <Button size="sm" className="group-hover:bg-primary-dark transition-colors">
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
);

const CourseDetail = ({ course, onBack }: { course: any; onBack: () => void }) => (
  <div className="min-h-screen bg-background">
    <ScrollProgress />
    <Navbar />
    
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Button>
        
        {/* Course Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{course.level}</Badge>
              <Badge className="bg-green-100 text-green-800">{course.discount}</Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{course.subtitle}</p>
            <p className="text-lg mb-8">{course.description}</p>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-muted-foreground">({course.students} students)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">{course.price}</span>
                <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Enroll Now
              </Button>
              <Button variant="outline" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full rounded-2xl shadow-card"
            />
          </div>
        </div>
        
        {/* Course Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                  <ul className="space-y-3">
                    {course.whatYoullLearn.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold">Prerequisites:</span>
                      <ul className="mt-2 space-y-1">
                        {course.prerequisites.map((req: string, index: number) => (
                          <li key={index} className="text-muted-foreground">• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-semibold">Suitable for Classes:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {course.classesFor.map((cls: string, index: number) => (
                          <Badge key={index} variant="outline">{cls}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Course Modules</h3>
                <div className="space-y-4">
                  {course.modules.map((module: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Module {index + 1}: {module.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{module.lessons} lessons</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="projects">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Projects You'll Build</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {course.projects.map((project: string, index: number) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Project {index + 1}</h4>
                      <p className="text-lg">{project}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="instructor">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {course.instructor.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{course.instructor}</h3>
                    <p className="text-muted-foreground mb-4">{course.instructorBio}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>4.9 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>5,000+ Students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    
    <Footer />
    <FloatingWhatsApp />
  </div>
);

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  const filteredCourses = courses.filter(course => {
    if (filter === "all") return true;
    if (filter === "beginner") return course.level === "Beginner";
    if (filter === "intermediate") return course.level.includes("Intermediate");
    return true;
  });

  if (selectedCourse) {
    return <CourseDetail course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master in-demand tech skills with hands-on projects designed specifically for Class 8-12 students
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              <Button 
                variant={filter === "all" ? "default" : "ghost"}
                onClick={() => setFilter("all")}
                size="sm"
              >
                All Courses
              </Button>
              <Button 
                variant={filter === "beginner" ? "default" : "ghost"}
                onClick={() => setFilter("beginner")}
                size="sm"
              >
                Beginner
              </Button>
              <Button 
                variant={filter === "intermediate" ? "default" : "ghost"}
                onClick={() => setFilter("intermediate")}
                size="sm"
              >
                Intermediate
              </Button>
            </div>
          </div>
          
          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onClick={() => setSelectedCourse(course)}
              />
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Can't decide which course to take?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a free consultation with our experts to find the perfect learning path for you.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg">Book Free Consultation</Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/">Back to Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Courses;