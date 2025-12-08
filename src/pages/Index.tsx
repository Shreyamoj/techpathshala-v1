import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import FreeCoursesSection from "@/components/FreeCoursesSection";
import LiveClassesPromo from "@/components/LiveClassesPromo";
import StudentSuccessStories from "@/components/StudentSuccessStories";
import CoursesSection from "@/components/CoursesSection";
import WhyLearnSection from "@/components/WhyLearnSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <FreeCoursesSection />
      <LiveClassesPromo />
      <StudentSuccessStories />
      <CoursesSection />
      <WhyLearnSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;