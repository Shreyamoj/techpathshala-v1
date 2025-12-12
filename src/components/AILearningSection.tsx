import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, Sparkles, Brain, Zap, MessageSquare, Code, 
  FileCheck, Lightbulb, ArrowRight, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Study Buddy",
    titleBn: "AI স্টাডি বাডি",
    description: "24/7 available to answer your doubts instantly",
    descriptionBn: "যেকোনো সময় প্রশ্নের উত্তর পাও",
    color: "from-purple-500/20 to-blue-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    icon: Code,
    title: "AI Code Review",
    titleBn: "AI কোড রিভিউ",
    description: "Get instant feedback on your code quality",
    descriptionBn: "তোমার কোডের ভুল ধরো সাথে সাথে",
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/30"
  },
  {
    icon: Brain,
    title: "Smart Practice",
    titleBn: "স্মার্ট প্র্যাক্টিস",
    description: "AI generates personalized practice problems",
    descriptionBn: "তোমার জন্য বিশেষ প্র্যাক্টিস প্রশ্ন",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30"
  },
  {
    icon: Lightbulb,
    title: "Concept Explainer",
    titleBn: "সহজ ব্যাখ্যা",
    description: "Complex topics explained in simple Bengali",
    descriptionBn: "কঠিন বিষয় সহজ ভাষায়",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30"
  }
];

const aiCourseHighlights = [
  "ChatGPT ও AI Tools দিয়ে Coding শেখো",
  "AI দিয়ে Bug খুঁজে বের করো",
  "Prompt Engineering বেসিক",
  "AI-Powered Project তৈরি করো",
  "GitHub Copilot পরিচিতি",
  "AI দিয়ে Data Analysis"
];

const AILearningSection = () => {
  return (
    <section id="ai-learning" className="py-16 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-purple-500/20 text-purple-700 mb-4 text-sm px-4 py-1">
            <Sparkles className="w-4 h-4 mr-2" /> AI-Powered Learning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI দিয়ে <span className="gradient-text">দ্রুত শেখো</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn Faster with AI | আধুনিক AI tools দিয়ে coding শেখো আরো সহজে, আরো দ্রুত।
            <br />
            <span className="text-sm">No need to wait for answers - AI is always ready to help!</span>
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 border ${feature.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{feature.titleBn}</p>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* AI Course Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Course Highlights */}
          <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">AI Integrated Curriculum</h3>
                <p className="text-sm text-muted-foreground">সব কোর্সে AI শেখার সুযোগ</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              {aiCourseHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="w-full gap-2">
              <Link to="/courses">
                Explore AI Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right - AI Demo Chat */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-6 h-6 text-purple-600" />
              <span className="font-semibold">AI Study Buddy Demo</span>
            </div>
            
            {/* Chat Messages */}
            <div className="space-y-4 mb-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">You</span>
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                  <p className="text-sm">Python এ loop কিভাবে কাজ করে?</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-purple-600" />
                </div>
                <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] border border-border/50">
                  <p className="text-sm mb-2">
                    Loop হলো এমন একটা structure যা একটা কাজ বারবার করে! 🔄
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs mb-2">
                    <code>
                      for i in range(5):<br />
                      &nbsp;&nbsp;print("Hello!", i)
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    এটা "Hello!" ৫ বার print করবে। বুঝতে পারলে? আরো প্রশ্ন থাকলে জিজ্ঞেস করো! 😊
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-background rounded-xl p-2 border border-border/50">
              <MessageSquare className="w-5 h-5 text-muted-foreground ml-2" />
              <input 
                type="text" 
                placeholder="Ask AI anything..." 
                className="flex-1 bg-transparent border-none outline-none text-sm"
                disabled
              />
              <Button size="sm" className="gap-1">
                <Sparkles className="w-4 h-4" /> Ask
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground mt-3">
              * This is a demo. Sign up to use AI Study Buddy! | সাইন আপ করো AI ব্যবহার করতে
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILearningSection;
