import CompanionCard from "./CompanionCard";
import character1 from "@/assets/character1.jpg";
import character2 from "@/assets/character2.jpg";
import character3 from "@/assets/character3.jpg";

const companions = [
  {
    id: "1",
    name: "Aria",
    age: 22,
    description: "Ready to embark on epic adventures together? I'm your perfect companion for deep conversations and endless fun.",
    image: character1,
    online: true
  },
  {
    id: "2", 
    name: "Luna",
    age: 20,
    description: "Looking for someone to share quiet moments and meaningful connections? Let's create beautiful memories together.",
    image: character2,
    online: true
  },
  {
    id: "3",
    name: "Zoe",
    age: 25,
    description: "Sophisticated and mysterious, I'll keep you intrigued while we explore the depths of imagination together.",
    image: character3,
    online: false
  }
];

const CompanionGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Your Perfect{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Companion
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated collection of AI companions, each with unique 
            personalities and stories waiting to unfold with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {companions.map((companion) => (
            <CompanionCard key={companion.id} {...companion} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to create your own unique companion?
          </p>
          <button className="bg-gradient-secondary text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
            Create Custom Companion
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanionGallery;