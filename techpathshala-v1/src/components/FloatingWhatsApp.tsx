import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in TechPathshala courses. Can you help me with more information?"
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 z-40 w-80 max-w-[calc(100vw-2rem)]">
          <div className="bg-card rounded-2xl shadow-glow border border-border/50 overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">TechPathshala Support</h4>
                  <p className="text-xs text-green-100">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 bg-accent/20 max-h-60 overflow-y-auto">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white">TP</span>
                </div>
                <div className="bg-card rounded-lg px-3 py-2 shadow-soft max-w-[85%]">
                  <p className="text-sm text-foreground">
                    Hi! 👋 Welcome to TechPathshala! I'm here to help you with:
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white">TP</span>
                </div>
                <div className="bg-card rounded-lg px-3 py-2 shadow-soft max-w-[85%]">
                  <p className="text-sm text-foreground">
                    📚 Course details & syllabus<br/>
                    💰 Fees & payment options<br/>
                    📅 Batch timings & schedule<br/>
                    🎯 Career guidance
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white">TP</span>
                </div>
                <div className="bg-card rounded-lg px-3 py-2 shadow-soft max-w-[85%]">
                  <p className="text-sm text-foreground">
                    What would you like to know? 😊
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-4 border-t border-border/30">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-3 font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Start WhatsApp Chat
              </button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                We'll reply within minutes!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-glow flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'scale-90' : 'scale-100 animate-bounce-gentle'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Pulse animation for first-time visitors */}
      {!isOpen && (
        <div className="fixed bottom-6 right-4 md:right-8 z-40 w-14 h-14 bg-green-500/30 rounded-full animate-ping"></div>
      )}
    </>
  );
};

export default FloatingWhatsApp;