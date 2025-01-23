import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Transform Your Digital Experience
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Elevate your business with our innovative solutions and expert guidance.
            </p>
            <div className="flex justify-center gap-4">
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

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-8 rounded-xl hover-lift hover:shadow-xl hover:shadow-purple-500/10"
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-card p-12 rounded-2xl space-y-6 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10">
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