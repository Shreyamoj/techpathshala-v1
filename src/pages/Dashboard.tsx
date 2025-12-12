import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, BookOpen, Award, Clock, Target, Flame, 
  Brain, Sparkles, TrendingUp, Calendar, Star,
  CheckCircle, Lock, ChevronRight, Bot, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock student data
const studentData = {
  name: "Rahul",
  streak: 7,
  totalHours: 24,
  coursesEnrolled: 3,
  certificatesEarned: 1,
  aiCredits: 50
};

const enrolledCourses = [
  {
    id: 1,
    title: "Python + AI Fundamentals",
    titleBn: "পাইথন + AI বেসিক",
    progress: 65,
    nextLesson: "Functions & AI Integration",
    totalLessons: 24,
    completedLessons: 16,
    aiPowered: true
  },
  {
    id: 2,
    title: "Web Development with AI Tools",
    titleBn: "ওয়েব ডেভেলপমেন্ট + AI",
    progress: 30,
    nextLesson: "CSS Layouts with AI Assistant",
    totalLessons: 20,
    completedLessons: 6,
    aiPowered: true
  },
  {
    id: 3,
    title: "Excel & Data Visualization",
    titleBn: "এক্সেল ও ডেটা ভিজুয়ালাইজেশন",
    progress: 100,
    nextLesson: "Course Completed!",
    totalLessons: 12,
    completedLessons: 12,
    aiPowered: false
  }
];

const upcomingLiveClasses = [
  {
    id: 1,
    title: "AI-Powered Coding Session",
    titleBn: "AI দিয়ে কোডিং",
    date: "Today, 6:00 PM",
    instructor: "Arka Sir",
    type: "live"
  },
  {
    id: 2,
    title: "Doubt Clearing Session",
    titleBn: "সমস্যা সমাধান",
    date: "Tomorrow, 5:00 PM",
    instructor: "Priya Ma'am",
    type: "doubt"
  }
];

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Study Buddy",
    titleBn: "AI স্টাডি বাডি",
    description: "Ask questions anytime, get instant help",
    credits: 10
  },
  {
    icon: Sparkles,
    title: "AI Code Review",
    titleBn: "AI কোড রিভিউ",
    description: "Get your code reviewed instantly",
    credits: 5
  },
  {
    icon: Brain,
    title: "Smart Practice",
    titleBn: "স্মার্ট প্র্যাক্টিস",
    description: "AI-generated practice problems",
    credits: 3
  }
];

const achievements = [
  { id: 1, title: "7-Day Streak", icon: Flame, unlocked: true },
  { id: 2, title: "First Certificate", icon: Award, unlocked: true },
  { id: 3, title: "AI Explorer", icon: Bot, unlocked: false },
  { id: 4, title: "Code Master", icon: Zap, unlocked: false }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"courses" | "ai" | "live">("courses");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  স্বাগতম, {studentData.name}! 👋
                </h1>
                <p className="text-muted-foreground">
                  Continue your learning journey | তোমার শেখা চালিয়ে যাও
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="font-bold text-orange-600">{studentData.streak} Day Streak!</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Bot className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">{studentData.aiCredits} AI Credits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{studentData.totalHours}h</p>
                  <p className="text-xs text-muted-foreground">Learning Time</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{studentData.coursesEnrolled}</p>
                  <p className="text-xs text-muted-foreground">Courses</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{studentData.certificatesEarned}</p>
                  <p className="text-xs text-muted-foreground">Certificates</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-4 border border-border/50 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                  <p className="text-xs text-muted-foreground">Avg. Score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <Button 
              variant={activeTab === "courses" ? "default" : "outline"}
              onClick={() => setActiveTab("courses")}
              className="gap-2"
            >
              <BookOpen className="w-4 h-4" /> My Courses
            </Button>
            <Button 
              variant={activeTab === "ai" ? "default" : "outline"}
              onClick={() => setActiveTab("ai")}
              className="gap-2"
            >
              <Bot className="w-4 h-4" /> AI Tools
            </Button>
            <Button 
              variant={activeTab === "live" ? "default" : "outline"}
              onClick={() => setActiveTab("live")}
              className="gap-2"
            >
              <Calendar className="w-4 h-4" /> Live Classes
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {activeTab === "courses" && (
                <>
                  {/* Continue Learning */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Play className="w-5 h-5 text-primary" />
                      <h2 className="font-bold text-lg">Continue Learning | শেখা চালিয়ে যাও</h2>
                    </div>
                    <div className="bg-card rounded-xl p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{enrolledCourses[0].title}</h3>
                          <p className="text-sm text-muted-foreground">{enrolledCourses[0].titleBn}</p>
                        </div>
                        {enrolledCourses[0].aiPowered && (
                          <Badge className="bg-purple-500/10 text-purple-600">
                            <Sparkles className="w-3 h-3 mr-1" /> AI-Powered
                          </Badge>
                        )}
                      </div>
                      <Progress value={enrolledCourses[0].progress} className="h-2 mb-3" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {enrolledCourses[0].completedLessons}/{enrolledCourses[0].totalLessons} lessons
                        </span>
                        <Button size="sm" className="gap-2">
                          <Play className="w-4 h-4" /> Continue
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* All Enrolled Courses */}
                  <div>
                    <h2 className="font-bold text-lg mb-4">All Courses | সব কোর্স</h2>
                    <div className="space-y-4">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{course.title}</h3>
                                {course.aiPowered && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Sparkles className="w-3 h-3 mr-1" /> AI
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{course.titleBn}</p>
                            </div>
                            {course.progress === 100 ? (
                              <Badge className="bg-green-500 text-white">
                                <CheckCircle className="w-3 h-3 mr-1" /> Complete
                              </Badge>
                            ) : (
                              <span className="text-sm font-bold text-primary">{course.progress}%</span>
                            )}
                          </div>
                          <Progress value={course.progress} className="h-2 mb-3" />
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Next: {course.nextLesson}
                            </span>
                            <Button variant="ghost" size="sm" className="gap-1">
                              Continue <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "ai" && (
                <div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">AI Learning Assistant</h2>
                        <p className="text-sm text-muted-foreground">AI দিয়ে আরো দ্রুত শেখো</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Use AI to learn faster, get instant help, and practice smarter. 
                      You have <strong className="text-purple-600">{studentData.aiCredits} AI credits</strong> remaining.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {aiFeatures.map((feature, index) => (
                      <div key={index} className="bg-card rounded-xl p-5 border border-border/50 hover:border-purple-500/30 transition-all hover:shadow-lg cursor-pointer group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                            <feature.icon className="w-6 h-6 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground mb-2">{feature.titleBn}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {feature.credits} credits/use
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="bg-card rounded-xl p-5 border border-dashed border-border flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">More AI features coming soon!</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "live" && (
                <div>
                  <h2 className="font-bold text-lg mb-4">Upcoming Live Classes | আসন্ন Live Class</h2>
                  <div className="space-y-4">
                    {upcomingLiveClasses.map((cls) => (
                      <div key={cls.id} className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge className={cls.type === "live" ? "bg-red-500" : "bg-blue-500"} >
                              {cls.type === "live" ? "🔴 Live" : "❓ Doubt Session"}
                            </Badge>
                            <h3 className="font-semibold mt-2">{cls.title}</h3>
                            <p className="text-sm text-muted-foreground">{cls.titleBn}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>{cls.date}</span>
                              <span>• {cls.instructor}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Set Reminder
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 text-center">
                    <h3 className="font-bold mb-2">Want more live classes?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upgrade to Premium for unlimited live sessions and 1:1 doubt solving
                    </p>
                    <Button asChild>
                      <Link to="/contact">Explore Premium</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <div className="bg-card rounded-2xl p-5 border border-border/50">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" /> Achievements
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`p-3 rounded-xl text-center ${
                        achievement.unlocked 
                          ? "bg-yellow-500/10 border border-yellow-500/30" 
                          : "bg-muted/50 opacity-50"
                      }`}
                    >
                      <achievement.icon className={`w-6 h-6 mx-auto mb-1 ${
                        achievement.unlocked ? "text-yellow-500" : "text-muted-foreground"
                      }`} />
                      <p className="text-xs font-medium">{achievement.title}</p>
                      {!achievement.unlocked && <Lock className="w-3 h-3 mx-auto mt-1 text-muted-foreground" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-2xl p-5 border border-border/50">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Brain className="w-4 h-4" /> Practice with AI
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Calendar className="w-4 h-4" /> Schedule 1:1 Session
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <TrendingUp className="w-4 h-4" /> View Progress Report
                  </Button>
                </div>
              </div>

              {/* Daily Goal */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-5 border border-primary/20">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" /> Daily Goal
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Complete 2 lessons today</p>
                <Progress value={50} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">1/2 completed</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
