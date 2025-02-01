
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Target, Users, Cpu, Network, Code } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-tracking-in-expand">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Transform Your Business with AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up">
              Unlock the power of artificial intelligence to drive innovation and growth in your organization
            </p>
            <Link to="/services">
              <Button size="lg" className="animate-fade-up hover-lift">
                Explore Our Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-10 w-10 text-blue-500" />,
                title: "AI Consulting",
                description: "Expert guidance on implementing AI solutions tailored to your business needs"
              },
              {
                icon: <Network className="h-10 w-10 text-purple-500" />,
                title: "Workshops",
                description: "Interactive sessions to help your team master AI tools and technologies"
              },
              {
                icon: <Code className="h-10 w-10 text-pink-500" />,
                title: "Custom Solutions",
                description: "Bespoke AI implementations designed to achieve your specific goals"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="glass-card hover-lift animate-fade-up p-8 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold my-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
              { number: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 glass-card rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">
              Join us in shaping the future of AI technology
            </p>
            <Link to="/contact">
              <Button size="lg" className="hover-lift group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
