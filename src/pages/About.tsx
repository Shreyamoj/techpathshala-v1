import { Users, Target, Heart, Award, BookOpen, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Happy Students", value: "5,000+", icon: Users },
    { label: "Courses Completed", value: "1,200+", icon: BookOpen },
    { label: "Success Rate", value: "95%", icon: Target },
    { label: "Expert Mentors", value: "25+", icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Every decision we make is centered around what's best for our students' learning journey and future success."
    },
    {
      icon: Lightbulb,
      title: "Innovation in Education",
      description: "We constantly evolve our teaching methods to make technology education engaging, practical, and fun."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We foster a supportive community where students learn together, share knowledge, and grow as future technologists."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "IIT graduate with 10+ years in tech education. Passionate about making coding accessible to every student.",
      initials: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Head of Curriculum",
      bio: "Former software engineer turned educator. Specializes in creating age-appropriate tech curricula.",
      initials: "PS"
    },
    {
      name: "Amit Gupta",
      role: "Lead Data Science Instructor",
      bio: "Data scientist with experience at top tech companies. Makes complex concepts simple for students.",
      initials: "AG"
    },
    {
      name: "Sneha Roy",
      role: "Student Success Manager",
      bio: "Dedicated to ensuring every student achieves their learning goals and builds confidence in technology.",
      initials: "SR"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-accent via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">TechPathshala</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering the next generation of innovators through accessible, engaging, and practical technology education for Class 8-12 students across India.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At TechPathshala, we believe every student deserves the opportunity to learn technology skills that will shape their future. 
                  We're on a mission to bridge the gap between traditional education and the digital skills needed in today's world.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Founded in 2020, we started with a simple idea: make coding and technology education accessible, 
                  enjoyable, and relevant for Indian students. Today, we're proud to have helped thousands of students 
                  discover their passion for technology.
                </p>
                <Button size="lg" asChild>
                  <Link to="/courses">Explore Our Courses</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-card p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at TechPathshala
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate educators and technologists dedicated to your success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{member.initials}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                <p className="text-xl text-muted-foreground">
                  How TechPathshala began and where we're heading
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
                  <p className="text-muted-foreground mb-6">
                    TechPathshala was born from a simple observation: while technology was rapidly changing the world, 
                    students in Indian schools weren't getting the practical tech skills they needed to thrive in the digital age.
                  </p>
                  <p className="text-muted-foreground">
                    Our founder, Rajesh Kumar, an IIT graduate and experienced software engineer, noticed this gap during 
                    his volunteering work at local schools in West Bengal.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Today & Tomorrow</h3>
                  <p className="text-muted-foreground mb-6">
                    Today, we've grown from a small initiative to a recognized platform serving thousands of students 
                    across India. Our bilingual approach and focus on practical projects have made us a trusted choice 
                    for students and parents.
                  </p>
                  <p className="text-muted-foreground">
                    Looking ahead, we're committed to expanding our reach and continuously improving our curriculum to 
                    ensure every student can build a bright tech future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tech Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of students who are already building their future with TechPathshala
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/courses">View Courses</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/#contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;