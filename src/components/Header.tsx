import { Button } from "@/components/ui/button";
import { Menu, Settings, Users, User, LogOut } from "lucide-react";
import { useState } from "react";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  onAdminClick: () => void;
}

const Header = ({ onAdminClick }: HeaderProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { user, logout } = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AIHaven
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Companions
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={onAdminClick}
                className="hidden md:flex"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={logout}
                className="hidden md:flex"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <Button 
              variant="outline" 
              onClick={() => setIsAuthOpen(true)}
              className="hidden md:flex"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          )}
          <Button className="bg-gradient-primary hover:opacity-90">
            Get Started
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </header>
  );
};

export default Header;