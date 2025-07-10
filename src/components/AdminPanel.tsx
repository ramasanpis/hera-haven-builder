import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Save, 
  Plus, 
  Trash2, 
  Edit, 
  Users, 
  Settings, 
  Database,
  Image as ImageIcon 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/hooks/useFirestore";
import { useAuth } from "@/hooks/useAuth";

interface AdminPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdminPanel = ({ open, onOpenChange }: AdminPanelProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("companions");
  
  // Firebase integration
  const { documents: companions, addDocument, updateDocument, deleteDocument } = useFirestore('companions');

  const [siteSettings, setSiteSettings] = useState({
    siteName: "AIHaven",
    tagline: "Create your own AI Companion",
    heroTitle: "Create your own AI Companion",
    heroDescription: "Your virtual AI companion is waiting to meet you...",
    primaryColor: "#8B5CF6",
    secondaryColor: "#A855F7"
  });

  const handleSaveSettings = () => {
    // In real app, save to database
    toast({
      title: "Settings Saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleAddCompanion = async () => {
    const newCompanion = {
      name: "New Companion",
      age: 20,
      status: "active",
      lastActive: "Just now"
    };
    try {
      await addDocument(newCompanion);
      toast({
        title: "Companion Added",
        description: "New companion has been created.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add companion",
        variant: "destructive"
      });
    }
  };

  const handleDeleteCompanion = async (id: string) => {
    try {
      await deleteDocument(id);
      toast({
        title: "Companion Deleted",
        description: "Companion has been removed.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete companion",
        variant: "destructive"
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Admin Dashboard
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="companions" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Companions
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Database
            </TabsTrigger>
          </TabsList>

          <TabsContent value="companions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Manage Companions</h3>
              <Button onClick={handleAddCompanion} className="bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Companion
              </Button>
            </div>

            <div className="grid gap-4">
              {companions.map((companion) => (
                <Card key={companion.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {companion.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{companion.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {companion.personality || "Age 20"} • {companion.lastActive || "Just now"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={companion.status === "active" ? "default" : "secondary"}>
                        {companion.status}
                      </Badge>
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleDeleteCompanion(companion.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="heroTitle">Hero Title</Label>
                  <Input
                    id="heroTitle"
                    value={siteSettings.heroTitle}
                    onChange={(e) => setSiteSettings({...siteSettings, heroTitle: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="heroDescription">Hero Description</Label>
                  <Textarea
                    id="heroDescription"
                    value={siteSettings.heroDescription}
                    onChange={(e) => setSiteSettings({...siteSettings, heroDescription: e.target.value})}
                  />
                </div>
                <Button onClick={handleSaveSettings} className="bg-gradient-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={siteSettings.siteName}
                    onChange={(e) => setSiteSettings({...siteSettings, siteName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={siteSettings.tagline}
                    onChange={(e) => setSiteSettings({...siteSettings, tagline: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <Input
                      id="primaryColor"
                      type="color"
                      value={siteSettings.primaryColor}
                      onChange={(e) => setSiteSettings({...siteSettings, primaryColor: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={siteSettings.secondaryColor}
                      onChange={(e) => setSiteSettings({...siteSettings, secondaryColor: e.target.value})}
                    />
                  </div>
                </div>
                <Button onClick={handleSaveSettings} className="bg-gradient-primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Database Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Database className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Connect Database</h4>
                  <p className="text-muted-foreground mb-4">
                    Connect to Supabase for real-time database functionality
                  </p>
                  <Button className="bg-gradient-primary">
                    Connect Supabase
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;