import { Card } from "@/components/ui/card"
import { Brain, Code, Lightbulb, MessageSquare, Presentation, Users2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const services = [
  {
    icon: <MessageSquare className="w-12 h-12 text-violet-600" />,
    title: "ChatGPT Course",
    description: "Our flagship course teaching you how to leverage ChatGPT effectively in your daily work",
    price: "1.200 DKK",
    highlight: "Most Popular",
    details: "Perfect first step for beginners and professionals alike"
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-indigo-600" />,
    title: "15 ChatGPT Use Cases",
    description: "Save time discovering ChatGPT applications - we provide 15 tailored ways to use ChatGPT in your specific work context",
    price: "1.200 DKK",
    details: "Personalized for your industry and role"
  },
  {
    icon: <Presentation className="w-12 h-12 text-violet-600" />,
    title: "AI Talks & Workshops",
    description: "Inspirational and practical talks for employees and leaders about AI's potential in your organization",
    price: "10.000 DKK",
    details: "Customized presentations for your team"
  },
  {
    icon: <Users2 className="w-12 h-12 text-indigo-600" />,
    title: "AI Implementation Consulting",
    description: "Hands-on assistance implementing ChatGPT or Copilot in your daily workflows",
    details: "Recommended after completing our course"
  },
  {
    icon: <Code className="w-12 h-12 text-violet-600" />,
    title: "Custom AI Automation",
    description: "Turn your AI automation ideas into reality with our development expertise",
    details: "Contact us for custom pricing"
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Navigation />
      <div className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6 animate-fade-down bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              AI Solutions for Faroese Businesses
            </h1>
            <p className="text-lg text-gray-600">
              From beginner-friendly courses to custom AI implementations, we help Faroese businesses embrace the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-shadow glass-card hover-lift animate-fade-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                {service.price && (
                  <p className="text-lg font-semibold text-violet-600 mb-2">
                    {service.price}
                  </p>
                )}
                <p className="text-sm text-gray-500 italic mb-4">{service.details}</p>
                <Link to="/contact">
                  <Button 
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Not sure which service is right for you? Contact us for a free consultation.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline" 
                className="hover-lift hover:shadow-lg hover:shadow-purple-500/30"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}