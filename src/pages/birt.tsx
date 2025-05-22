
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Birt = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-24 animate-fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Birt
            </h1>
            <p className="text-text/80 max-w-2xl mx-auto">
              Welcome to the Birt page
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Birt;
