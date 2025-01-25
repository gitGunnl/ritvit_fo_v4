import { Card } from "@/components/ui/card"
import { Sparkles, Lightbulb, Rocket, Globe, ChevronRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20 animate-fade-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Pioneering AI in the Faroe Islands
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              As the first dedicated AI company in the Faroe Islands, we're on a mission to bridge the gap between cutting-edge technology and local businesses, bringing the future of AI to our unique archipelago.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold text-slate-900">Our Vision for the Future</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision a future where the Faroe Islands leads in AI innovation, where our businesses harness the power of artificial intelligence to compete globally, and where our community thrives through technological advancement.
              </p>
              <Link to="/services">
                <Button className="group bg-yellow-400 hover:bg-yellow-500 text-slate-900">
                  Explore Our Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <Card className="p-8 glass-card hover-lift animate-fade-up">
              <div className="space-y-6">
                <Sparkles className="h-12 w-12 text-yellow-400" />
                <h3 className="text-2xl font-semibold">Why We're Different</h3>
                <p className="text-slate-600">
                  As pioneers in the Faroese AI landscape, we combine global expertise with local understanding, creating solutions that are perfectly tailored to our unique market and culture.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
                title: "Innovation First",
                description: "We're bringing the latest AI advancements to the Faroe Islands, making cutting-edge technology accessible to local businesses."
              },
              {
                icon: <Globe className="h-10 w-10 text-yellow-400" />,
                title: "Local Impact, Global Standards",
                description: "While we're proudly Faroese, we operate at international standards, bringing world-class AI solutions to our archipelago."
              },
              {
                icon: <Rocket className="h-10 w-10 text-blue-600" />,
                title: "Future Ready",
                description: "From AI consulting to robotics and self-driving solutions, we're preparing the Faroe Islands for the technological revolution."
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="p-8 glass-card hover-lift animate-fade-up bg-white/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Join the AI Revolution in the Faroe Islands</h2>
            <p className="text-lg text-blue-100">
              Whether you're looking to implement AI in your business, learn about the latest technologies, or partner with us on innovative projects, we're here to guide you into the future.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="hover-lift">
                Get Started Today
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}