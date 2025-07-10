import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanionGallery from "@/components/CompanionGallery";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onAdminClick={() => setShowAdminPanel(true)} />
      <Hero />
      <CompanionGallery />
      <Footer />
      
      <AdminPanel 
        open={showAdminPanel} 
        onOpenChange={setShowAdminPanel}
      />
    </div>
  );
};

export default Index;
