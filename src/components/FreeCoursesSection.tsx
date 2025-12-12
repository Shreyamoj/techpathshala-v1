import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, BookOpen, Lock, Globe, Check } from "lucide-react";
import { Link } from "react-router-dom";

// Starter video lessons - mixed from different courses
const starterVideos = [
  {
    id: 1,
    title: "Python কি? কেন শিখবে?",
    titleEn: "What is Python & Why Learn It?",
    duration: "12 min",
    course: "Python + AI",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "bn",
    views: "2.5K",
    isStarter: true,
    hasAI: true
  },
  {
    id: 2,
    title: "তোমার প্রথম HTML Page",
    titleEn: "Your First HTML Page",
    duration: "15 min",
    course: "Web Dev",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "bn",
    views: "3.1K",
    isStarter: true,
    hasAI: false
  },
  {
    id: 3,
    title: "AI দিয়ে Excel শেখো",
    titleEn: "Learn Excel with AI",
    duration: "18 min",
    course: "Excel + AI",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "bn",
    views: "1.8K",
    isStarter: true,
    hasAI: true
  },
  {
    id: 4,
    title: "ChatGPT for Coding",
    titleEn: "ChatGPT for Coding",
    duration: "20 min",
    course: "AI Tools",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "en",
    views: "4.2K",
    isStarter: true,
    hasAI: true
  },
  {
    id: 5,
    title: "CSS দিয়ে সুন্দর Design",
    titleEn: "Beautiful Design with CSS",
    duration: "22 min",
    course: "Web Dev",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "bn",
    views: "2.9K",
    isStarter: true,
    hasAI: false
  },
  {
    id: 6,
    title: "AI দিয়ে Data Analysis",
    titleEn: "Data Analysis with AI",
    duration: "16 min",
    course: "Data + AI",
    thumbnail: "/placeholder.svg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "bn",
    views: "1.5K",
    isStarter: true,
    hasAI: true
  }
];

const VideoCard = ({ video, onPlay }: { video: typeof starterVideos[0]; onPlay: () => void }) => {
  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50 cursor-pointer"
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-secondary text-white">
          🎯 Starter
        </Badge>
        {video.hasAI && (
          <Badge className="absolute top-3 left-20 bg-purple-500 text-white">
            ✨ AI
          </Badge>
        )}
        <div className="absolute bottom-3 right-3 bg-foreground/80 text-background px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
        <div className="absolute top-3 right-3 bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
          <Globe className="w-3 h-3" />
          {video.language === "bn" ? "বাংলা" : "English"}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <Badge variant="secondary" className="mb-2 text-xs">
          {video.course}
        </Badge>
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="text-xs text-muted-foreground">{video.titleEn}</p>
        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <span>{video.views} views</span>
        </div>
      </div>
    </div>
  );
};

const StarterCoursesSection = () => {
  const [playingVideo, setPlayingVideo] = useState<typeof starterVideos[0] | null>(null);
  const [language, setLanguage] = useState<"all" | "bn" | "en">("all");

  const filteredVideos = starterVideos.filter(v => 
    language === "all" || v.language === language
  );

  return (
    <section id="starter-videos" className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <Badge className="bg-primary/20 text-primary mb-4 text-sm px-4 py-1">
            🚀 Start Your Journey | তোমার যাত্রা শুরু করো
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Starter <span className="gradient-text">Lessons</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            বাংলা ও ইংরেজিতে শেখো, যখন ইচ্ছা, যেখান থেকে ইচ্ছা। AI দিয়ে আরো সহজে!
            <br />
            <span className="text-sm">Learn in Bengali & English with AI-powered assistance!</span>
          </p>
          
          {/* Language Filter */}
          <div className="flex justify-center gap-2 mb-8">
            <Button 
              variant={language === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setLanguage("all")}
            >
              All
            </Button>
            <Button 
              variant={language === "bn" ? "default" : "outline"} 
              size="sm"
              onClick={() => setLanguage("bn")}
            >
              বাংলা
            </Button>
            <Button 
              variant={language === "en" ? "default" : "outline"} 
              size="sm"
              onClick={() => setLanguage("en")}
            >
              English
            </Button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredVideos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onPlay={() => setPlayingVideo(video)}
            />
          ))}
        </div>

        {/* CTA for Live Classes */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 text-center border border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold text-foreground">আরও শিখতে চাও?</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Live Class এ জয়েন করো! 🎯
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            সরাসরি শিক্ষকের কাছ থেকে শেখো, প্রশ্ন করো, প্র্যাক্টিস করো। 
            সপ্তাহে ৩ দিন Live Class + Recording Access।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                <BookOpen className="w-5 h-5" />
                Book Free Demo Class
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp এ জানতে চাই
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div 
          className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <div 
            className="bg-card rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                src={playingVideo.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{playingVideo.title}</h3>
              <p className="text-sm text-muted-foreground">{playingVideo.titleEn}</p>
              <div className="flex items-center justify-between mt-4">
                <Badge variant="secondary">{playingVideo.course}</Badge>
                <Button variant="ghost" size="sm" onClick={() => setPlayingVideo(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StarterCoursesSection;
