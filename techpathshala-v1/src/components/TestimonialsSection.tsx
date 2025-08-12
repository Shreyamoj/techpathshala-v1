import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rishita Das",
    class: "Class 10",
    school: "South Point High School",
    location: "Kolkata",
    text: "TechPathshala made coding so easy to understand! I built my first website in just 3 weeks. The Bengali explanations really helped me grasp the concepts better.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Arjun Sharma", 
    class: "Class 11",
    school: "DAV Public School",
    location: "Siliguri",
    text: "The Python course was amazing! I never thought I could create games and data visualizations. Now I help my classmates with their computer projects.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Priya Mukherjee",
    class: "Class 9", 
    school: "Loreto House",
    location: "Kolkata",
    text: "My daughter learned Excel and web development here. She's now the tech expert in our family! The mentors are very patient and supportive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    isParent: true
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-accent/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Students & Parents <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students who've transformed their tech skills with TechPathshala
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="group animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="h-full bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border/50 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-3 rounded-2xl shadow-card">
                  <Quote className="w-6 h-6" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                      {testimonial.isParent && (
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full ml-2">
                          Parent
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-primary font-medium">{testimonial.class}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.school}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Course Completion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Schools Trust Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;