import HeroSection from "@/components/HeroSection";
import ClassSection from "@/components/ClassSection";
import CoursesSection from "@/components/CoursesSection";
import WhyLearnSection from "@/components/WhyLearnSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClassSection />
      <CoursesSection />
      <WhyLearnSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
