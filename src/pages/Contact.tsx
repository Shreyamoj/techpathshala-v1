import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      class: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["123 Tech Street", "Kolkata, West Bengal", "India - 700001"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109", "Mon-Sat, 9AM-7PM"],
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@techpathshala.com", "support@techpathshala.com", "careers@techpathshala.com"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 7PM", "Saturday: 10AM - 6PM", "Sunday: Closed"],
      color: "text-secondary"
    }
  ];

  const quickActions = [
    {
      title: "Book a Free Demo",
      description: "Experience our teaching style with a free demo class",
      action: "Schedule Demo",
      variant: "default" as const
    },
    {
      title: "WhatsApp Support",
      description: "Get instant answers to your questions",
      action: "Chat Now",
      variant: "outline" as const
    },
    {
      title: "Call Us Directly",
      description: "Speak with our counselors immediately",
      action: "Call Now",
      variant: "secondary" as const
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our courses? Want to book a demo? We're here to help you start your tech journey!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Student's Class
                        </label>
                        <Select value={formData.class} onValueChange={(value) => handleInputChange("class", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="class-8">Class 8</SelectItem>
                            <SelectItem value="class-9">Class 9</SelectItem>
                            <SelectItem value="class-10">Class 10</SelectItem>
                            <SelectItem value="class-11">Class 11</SelectItem>
                            <SelectItem value="class-12">Class 12</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="What is this about?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="course-inquiry">Course Inquiry</SelectItem>
                          <SelectItem value="demo-request">Demo Request</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about what you need help with..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="hover:shadow-card transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg bg-primary/10 ${info.color}`}>
                              <info.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <Card key={index} className="hover:shadow-card transition-all duration-300 cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold mb-1">{action.title}</h4>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                            <Button variant={action.variant} size="sm">
                              {action.action}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              {[
                {
                  question: "How quickly will I receive a response?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
                },
                {
                  question: "Can I schedule a demo class?",
                  answer: "Absolutely! We offer free demo classes for all our courses. You can book one through our contact form or by calling us directly."
                },
                {
                  question: "Do you offer support in regional languages?",
                  answer: "Yes, we provide support in both English and Bengali. Our instructors are fluent in both languages to ensure clear communication."
                },
                {
                  question: "What if I have technical issues during class?",
                  answer: "Our technical support team is available during all class hours. You can reach them via WhatsApp or phone for immediate assistance."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground">
                Located in the heart of Kolkata, West Bengal
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    123 Tech Street, Kolkata, West Bengal - 700001
                  </p>
                  <Button className="mt-4">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;