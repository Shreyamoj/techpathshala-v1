import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need a laptop or computer to join?",
    answer: "While having your own laptop is helpful, it's not mandatory. We provide computer access during classes, and you can practice on any device including tablets. We also offer guidance on choosing budget-friendly laptops for students."
  },
  {
    question: "What if I don't know anything about coding?",
    answer: "Perfect! Our courses are designed for complete beginners. We start from the very basics and build up gradually. Many of our successful students had zero coding experience when they started. Our Bengali and English explanations make concepts super easy to understand."
  },
  {
    question: "Is this aligned with school syllabus?",
    answer: "Yes! While we go beyond the basic school curriculum, everything we teach complements what you learn in school. Many concepts help you excel in computer science subjects, math, and even science projects. Plus, you'll be ahead of your peers!"
  },
  {
    question: "How much time do I need to dedicate?",
    answer: "Our courses are designed for busy students! You'll need just 2-3 hours per week. Classes are scheduled after school hours and on weekends. We provide recorded sessions so you can learn at your own pace if you miss a live class."
  },
  {
    question: "What's the age limit? Can younger students join?",
    answer: "We focus on Class 8-12 students (ages 13-18), but we've had successful younger students too. If you're in Class 6-7 and interested in technology, feel free to reach out - we can assess if you're ready for our beginner courses."
  },
  {
    question: "Will I get a certificate?",
    answer: "Absolutely! Every student who completes a course gets a TechPathshala certificate. These certificates are recognized and can be added to your school projects, college applications, or future job applications. We also provide LinkedIn skill badges!"
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers! Here are the most common questions from students and parents.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <div className="border-t border-border/30 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Our team is here to help!
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919876543210?text=Hi%20TechPathshala%20team%2C%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">
                WhatsApp Us
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card hover:bg-accent text-foreground rounded-lg font-medium transition-colors">
                Schedule a Call
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;