import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="font-clean text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent pricing for individuals and teams.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-8">Pricing page coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;