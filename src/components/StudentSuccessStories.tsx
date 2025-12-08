import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, MapPin, GraduationCap } from "lucide-react";

const stories = [
  {
    name: "রাহুল মণ্ডল",
    nameEn: "Rahul Mondal",
    location: "মুর্শিদাবাদ, WB",
    school: "Class 10, Govt. High School",
    achievement: "Built first website",
    quote: "আমি ভাবতামই না কম্পিউটার ছাড়া কোডিং শেখা যায়! মোবাইলেই শিখে নিজের স্কুলের website বানিয়েছি।",
    quoteEn: "I never thought I could learn coding without a computer! I learned on mobile and built my school's website.",
    image: "/placeholder.svg",
    courseTaken: "Web Development"
  },
  {
    name: "প্রিয়া সাহা",
    nameEn: "Priya Saha",
    location: "বর্ধমান, WB",
    school: "Class 12, Village School",
    achievement: "Won Science Fair",
    quote: "Python শিখে Science Fair এ Data Analysis প্রজেক্ট দিলাম। প্রথম পুরস্কার পেলাম!",
    quoteEn: "I learned Python and created a Data Analysis project for Science Fair. Won first prize!",
    image: "/placeholder.svg",
    courseTaken: "Python + Data Analysis"
  },
  {
    name: "অর্ণব দাস",
    nameEn: "Arnab Das",
    location: "হাওড়া, WB",
    school: "Class 11, Hindi Medium",
    achievement: "Freelancing Started",
    quote: "এখন ছোট ছোট website বানিয়ে টাকা আয় করছি। বাবা-মায়ের উপর চাপ কমেছে।",
    quoteEn: "Now I'm earning by building small websites. Reduced burden on my parents.",
    image: "/placeholder.svg",
    courseTaken: "Full Web Development"
  }
];

const StudentSuccessStories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="bg-secondary/20 text-secondary mb-4 text-sm px-4 py-1">
            🌟 Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            গ্রামের ছেলেমেয়েরা <span className="gradient-text">কী করছে</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            তোমার মতোই ছাত্রছাত্রীরা শিখেছে, এগিয়ে গেছে। তুমিও পারবে!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-glow transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{story.name}</h3>
                    <p className="text-xs text-muted-foreground">{story.nameEn}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      {story.location}
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <Badge variant="secondary" className="mb-4 flex items-center gap-1 w-fit">
                  <GraduationCap className="w-3 h-3" />
                  {story.achievement}
                </Badge>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-sm text-foreground leading-relaxed pl-4 mb-2">
                    "{story.quote}"
                  </p>
                  <p className="text-xs text-muted-foreground italic pl-4">
                    "{story.quoteEn}"
                  </p>
                </div>

                {/* Course */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Course: <span className="text-primary font-medium">{story.courseTaken}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {story.school}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Encouragement */}
        <div className="text-center mt-10 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
          <p className="text-lg font-medium text-foreground mb-2">
            📱 শুধু মোবাইল আছে? চিন্তা নেই!
          </p>
          <p className="text-muted-foreground">
            আমাদের ৭০% student মোবাইল থেকেই শেখে। তুমিও পারবে!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccessStories;
