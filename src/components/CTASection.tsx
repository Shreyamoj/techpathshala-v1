import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Calendar, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            Ready to Start <span className="gradient-text">Learning?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Join hundreds of students already building their tech future. Limited seats available for our next batch starting this month!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="text-lg px-12 py-4 h-auto">
              Join the First Batch Now
              <ArrowRight className="w-6 h-6" />
            </Button>
            
            <Button variant="outline" size="xl" className="text-lg px-8 py-4 h-auto bg-white/80 backdrop-blur-sm">
              <Calendar className="w-5 h-5" />
              Book Free Demo Class
            </Button>
          </div>
          
          {/* Urgency indicators */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Users className="w-4 h-4" />
              <span>Only 12 seats left in this batch</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4" />
              <span>Batch starts March 15th</span>
            </div>
          </div>
        </div>
        
        {/* Contact Options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp Contact */}
            <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 animate-slide-up">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">WhatsApp Chat</h3>
                <p className="text-muted-foreground">
                  Get instant answers to your questions and course details
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground">
                  Available 9 AM - 8 PM, Monday to Saturday
                </p>
              </div>
            </div>
            
            {/* Phone Contact */}
            <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">
                  Speak directly with our education counselors
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </Button>
                <p className="text-xs text-muted-foreground">
                  Free counseling and course guidance
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits reminder */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white shadow-glow animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            🎉 Early Bird Benefits (Valid till March 10th)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl">💰</div>
              <h4 className="font-semibold">20% Off Course Fees</h4>
              <p className="text-white/80 text-sm">Save ₹2,000 on any course package</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎁</div>
              <h4 className="font-semibold">Free Starter Kit</h4>
              <p className="text-white/80 text-sm">Includes books, stickers, and certificate</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🏆</div>
              <h4 className="font-semibold">Priority Support</h4>
              <p className="text-white/80 text-sm">Direct mentor access for 3 months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;