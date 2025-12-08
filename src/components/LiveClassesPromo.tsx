import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, Calendar, MessageCircle, Award, Clock, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Video,
    title: "Live Interactive Class",
    titleBn: "সরাসরি ক্লাস",
    description: "Real-time teaching with screen sharing"
  },
  {
    icon: MessageCircle,
    title: "Doubt Solving",
    titleBn: "প্রশ্ন করার সুযোগ",
    description: "Ask questions, get instant answers"
  },
  {
    icon: Users,
    title: "Small Batches",
    titleBn: "ছোট ব্যাচ",
    description: "Only 15-20 students per batch"
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    titleBn: "সুবিধামতো সময়",
    description: "Weekend & evening batches"
  },
  {
    icon: Award,
    title: "Certificate",
    titleBn: "সার্টিফিকেট",
    description: "Get certified after completion"
  },
  {
    icon: Clock,
    title: "Recording Access",
    titleBn: "রেকর্ডিং দেখো",
    description: "Miss a class? Watch recording"
  }
];

const pricingPlans = [
  {
    name: "Demo Class",
    nameBn: "ডেমো ক্লাস",
    price: "Free",
    priceBn: "বিনামূল্যে",
    duration: "1 class",
    features: ["1 Hour Live Session", "Course Overview", "Q&A with Teacher"],
    cta: "Book Demo",
    popular: false,
    color: "border-border"
  },
  {
    name: "Monthly",
    nameBn: "মাসিক",
    price: "₹999",
    priceBn: "মাত্র ৯৯৯ টাকা",
    duration: "/month",
    features: ["12 Live Classes", "Recording Access", "WhatsApp Support", "Practice Projects", "Progress Tracking"],
    cta: "Start Learning",
    popular: true,
    color: "border-primary"
  },
  {
    name: "Full Course",
    nameBn: "সম্পূর্ণ কোর্স",
    price: "₹2,499",
    priceBn: "২,৪৯৯ টাকা",
    duration: "3 months",
    features: ["36+ Live Classes", "Lifetime Recording", "1-on-1 Mentoring", "Job Preparation", "Certificate", "Internship Help"],
    cta: "Enroll Now",
    popular: false,
    color: "border-secondary"
  }
];

const LiveClassesPromo = () => {
  return (
    <section id="live-classes" className="py-16 bg-accent/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/20 text-primary mb-4 text-sm px-4 py-1">
            🎓 Premium Live Classes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            শিক্ষকের কাছে <span className="gradient-text">সরাসরি শেখো</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Free videos দেখে শেখা শুরু করো, তারপর Live Class এ জয়েন করো আরও গভীরভাবে শিখতে।
            <br />
            <span className="text-sm">Start with free videos, then join live classes for deeper learning.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.titleBn}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 ${plan.color} ${plan.popular ? 'scale-105 shadow-glow' : 'shadow-card'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium rounded-bl-xl flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.nameBn}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">{plan.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.priceBn}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link to="/contact">
                    {plan.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Message */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          💳 সহজ পেমেন্ট | 📱 UPI, Paytm, PhonePe সব চলবে | 🔒 ১০০% নিরাপদ
        </p>
      </div>
    </section>
  );
};

export default LiveClassesPromo;
