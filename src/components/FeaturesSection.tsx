import { Shield, FolderOpen, Users, Zap, Globe, Puzzle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Self-hosted with end-to-end encryption. Your data never leaves your control.",
      gradient: "from-tech-glow/20 to-tech-glow/5"
    },
    {
      icon: FolderOpen,
      title: "File Management",
      description: "Upload, organize, and preview all file types with an intuitive interface.",
      gradient: "from-success-glow/20 to-success-glow/5"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Share folders, set permissions, and collaborate securely with your team.",
      gradient: "from-tech-glow/20 to-tech-glow/5"
    },
    {
      icon: Zap,
      title: "Fast Sync",
      description: "Desktop & mobile clients with instant synchronization across all devices.",
      gradient: "from-success-glow/20 to-success-glow/5"
    },
    {
      icon: Globe,
      title: "Anywhere Access",
      description: "Access your files from web, desktop, or mobile apps with seamless experience.",
      gradient: "from-tech-glow/20 to-tech-glow/5"
    },
    {
      icon: Puzzle,
      title: "Extensible",
      description: "Add plugins & integrations for calendar, docs, tasks, and more functionality.",
      gradient: "from-success-glow/20 to-success-glow/5"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-clean text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Privacy & Performance
          </h2>
          <p className="font-clean text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for secure file storage and collaboration, without the compromises of traditional cloud services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group glass-card p-8 rounded-2xl hover-lift fade-in stagger-${index + 1}`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-clean text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-clean text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/features"
            className="font-clean text-tech-glow hover:text-success-glow transition-colors duration-200 font-medium inline-flex items-center"
          >
            See All Features
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;