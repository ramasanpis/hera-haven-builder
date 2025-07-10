import { Button } from "@/components/ui/button";
import { Sparkles, Heart, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-character.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Create your own{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Companion
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your virtual AI companion is waiting to meet you. Looks, personality, 
                quirks... they're yours to create. One click, and your AI companion 
                is here to make your fantasies come true.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Create Companion
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Heart className="mr-2 h-5 w-5" />
                Browse Gallery
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Real-time Chat</div>
                  <div className="text-sm text-muted-foreground">Instant responses</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Personalized</div>
                  <div className="text-sm text-muted-foreground">Unique to you</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AI Companion" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;