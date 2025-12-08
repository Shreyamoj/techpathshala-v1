import { useState } from "react";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    questionBn: "আমার কম্পিউটার/ল্যাপটপ নেই, শিখতে পারব?",
    questionEn: "I don't have a computer, can I learn?",
    answerBn: "অবশ্যই পারবে! আমাদের ৭০% student মোবাইল থেকেই শেখে। Free video গুলো মোবাইলেই দেখতে পারো। Live class এও মোবাইল থেকে join করা যায়।",
    answerEn: "Absolutely! 70% of our students learn on mobile. You can watch free videos and join live classes from your phone."
  },
  {
    questionBn: "কোডিং সম্পর্কে কিছুই জানি না, সমস্যা হবে?",
    questionEn: "I know nothing about coding, is that okay?",
    answerBn: "একদম সমস্যা নেই! আমরা একদম বেসিক থেকে শুরু করি। বাংলায় সবকিছু বুঝিয়ে দেওয়া হয়। তোমার মতো অনেকেই জিরো থেকে শুরু করেছে।",
    answerEn: "No problem at all! We start from absolute basics. Everything is explained in Bengali. Many students like you started from zero."
  },
  {
    questionBn: "Free videos দেখেই কি সব শেখা যাবে?",
    questionEn: "Can I learn everything from free videos?",
    answerBn: "Free videos থেকে basic concepts শিখতে পারবে। কিন্তু Live class এ teacher এর কাছে প্রশ্ন করতে পারবে, projects করবে, আর certificate পাবে। Serious learning এর জন্য Live class best!",
    answerEn: "Free videos teach basics. But Live classes let you ask questions, do projects, and get certificates. For serious learning, Live class is best!"
  },
  {
    questionBn: "সপ্তাহে কত সময় দিতে হবে?",
    questionEn: "How much time do I need per week?",
    answerBn: "মাত্র ২-৩ ঘন্টা! স্কুলের পরে বা weekend এ class হয়। Class মিস করলে recording দেখতে পারবে।",
    answerEn: "Just 2-3 hours! Classes are after school or on weekends. Miss a class? Watch the recording."
  },
  {
    questionBn: "কোর্স শেষে কি certificate পাব?",
    questionEn: "Will I get a certificate?",
    answerBn: "হ্যাঁ! Course complete করলে TechPathshala certificate পাবে। এটা school project, college admission, বা job application এ কাজে আসবে।",
    answerEn: "Yes! You get a TechPathshala certificate after completing the course. It helps in college applications and jobs."
  },
  {
    questionBn: "পেমেন্ট কিভাবে করব?",
    questionEn: "How do I pay?",
    answerBn: "UPI (Paytm, PhonePe, Google Pay), Bank Transfer সব চলবে। EMI option ও আছে। Demo class সম্পূর্ণ Free!",
    answerEn: "UPI, Bank Transfer, all accepted. EMI available. Demo class is completely free!"
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
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            প্রশ্ন আছে? <span className="gradient-text">উত্তর আছে!</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Students এবং Parents দের সবচেয়ে common প্রশ্নগুলোর উত্তর
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-3 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
                <button
                  className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="pr-4">
                    <h3 className="text-base font-semibold text-foreground">
                      {faq.questionBn}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{faq.questionEn}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-4 animate-fade-in">
                    <div className="border-t border-border/30 pt-3">
                      <p className="text-foreground leading-relaxed text-sm mb-2">
                        {faq.answerBn}
                      </p>
                      <p className="text-muted-foreground text-xs italic">
                        {faq.answerEn}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            আরও প্রশ্ন আছে? আমরা সাহায্য করতে প্রস্তুত!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://wa.me/919876543210?text=Hi%20TechPathshala%2C%20আমার%20একটা%20প্রশ্ন%20আছে" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp এ জিজ্ঞেস করো
            </a>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border bg-card hover:bg-accent text-foreground rounded-lg font-medium transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call করো
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;