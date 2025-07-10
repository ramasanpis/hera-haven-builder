import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Sparkles } from "lucide-react";

interface CompanionCardProps {
  id: string;
  name: string;
  age: number;
  description: string;
  image: string;
  online?: boolean;
}

const CompanionCard = ({ name, age, description, image, online = true }: CompanionCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {online && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Online</span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-sm text-gray-300">Age {age}</p>
              </div>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Premium AI Model</span>
        </div>
        
        <div className="flex space-x-2">
          <Button className="flex-1 bg-gradient-primary hover:opacity-90">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat Now
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanionCard;