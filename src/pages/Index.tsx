import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology solutions for modern businesses",
  },
  {
    title: "Expert Support",
    description: "24/7 support from our team of experienced professionals",
  },
  {
    title: "Scalable Infrastructure",
    description: "Built to grow with your business needs",
  },
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the glitch effect after component mounts
    setIsLoaded(true);
    
    // Reset the glitch effect after 2 seconds
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.glitch-text');
      elements.forEach(el => {
        (el as HTMLElement).style.animation = 'none';
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[bounce_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[bounce_8s_ease-in-out_infinite_1s]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-8">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text glitch-text ${isLoaded ? 'animate-glitch-1' : ''}`}>
              Transform Your Digital Experience
            </h1>
            <p className={`max-w-2xl mx-auto text-xl text-gray-600 glitch-text ${isLoaded ? 'animate-glitch-2' : ''}`}>
              Elevate your business with our innovative solutions and expert guidance.
            </p>
            <div className={`flex justify-center gap-4 glitch-text ${isLoaded ? 'animate-glitch-3' : ''}`}>
              <Link to="/services">
                <Button size="lg" className="hover-lift bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="hover-lift hover:shadow-lg hover:shadow-indigo-500/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`glass-card p-8 rounded-xl hover-lift hover:shadow-xl hover:shadow-purple-500/10 glitch-text ${isLoaded ? `animate-glitch-${index + 1}` : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CheckCircle2 className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`glass-card p-12 rounded-2xl space-y-6 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 glitch-text ${isLoaded ? 'animate-glitch-2' : ''}`}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their
              digital presence with our solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="hover-lift bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 mt-4">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Index;