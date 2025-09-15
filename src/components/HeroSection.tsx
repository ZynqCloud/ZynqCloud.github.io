import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-glow/5 to-success-glow/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(66,133,244,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(52,168,83,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl mb-6 pixel-glow fade-in">
            <span className="block text-foreground">ZYNQ CLOUD</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-muted-foreground">
              YOUR DATA. YOUR CLOUD. YOUR CONTROL.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-clean text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed fade-in stagger-2">
            Self-hosted cloud storage for teams & individuals. Privacy-first file sharing and collaboration without losing control of your data.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in stagger-3">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              <Download className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button variant="ghost" size="lg" className="min-w-[200px] border border-tech-border hover:bg-tech-border/20">
              <Play className="w-5 h-5 mr-2" />
              Live Demo
            </Button>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground fade-in stagger-4">
            <span className="px-3 py-1 rounded-full bg-tech-border/20 border border-tech-border">
              🔒 Privacy First
            </span>
            <span className="px-3 py-1 rounded-full bg-tech-border/20 border border-tech-border">
              ⚡ Fast Sync
            </span>
            <span className="px-3 py-1 rounded-full bg-tech-border/20 border border-tech-border">
              🌐 Self-Hosted
            </span>
            <span className="px-3 py-1 rounded-full bg-tech-border/20 border border-tech-border">
              👥 Team Ready
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tech-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-glow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;