import { Card } from "@/components/ui/card"
import { Brain, Code, Lightbulb, MessageSquare, Presentation, Users2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-tracking-in-expand">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Start Your AI Journey Today
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up">
              We help Faroese businesses embrace AI technology, starting with practical tools like ChatGPT and Microsoft Copilot. Our structured approach ensures your team can effectively implement AI in their daily work.
            </p>
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <span className="bg-purple-500/20 text-primary text-sm font-medium px-4 py-1 rounded-full border border-purple-500/20">
              Best First Step
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-4">Start Here: Our Flagship Course</h2>
            <p className="text-xl text-muted-foreground">The perfect introduction to AI for your business</p>
          </div>

          <Card className="glass-card hover-lift animate-fade-up max-w-3xl mx-auto p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <MessageSquare className="w-16 h-16 text-purple-500" />
              <div>
                <h3 className="text-2xl font-semibold mb-3">ChatGPT Course</h3>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive course teaches you how to leverage ChatGPT effectively in your daily work. Perfect for beginners and professionals alike.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <p className="text-xl font-semibold">1.200 DKK</p>
                  <Link to="/contact" className="flex-1 sm:flex-none">
                    <Button className="w-full sm:w-auto hover-lift">Get Started Today</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-12 h-12 text-purple-500" />,
                title: "15 ChatGPT Use Cases",
                price: "1.200 DKK",
                description: "Save weeks of discovery time with 15 tailored ways to use ChatGPT for your work context."
              },
              {
                icon: <Presentation className="w-12 h-12 text-blue-500" />,
                title: "AI Talks & Workshops",
                price: "10.000 DKK",
                description: "Inspirational and practical talks for employees about AI's potential in your organization."
              },
              {
                icon: <Users2 className="w-12 h-12 text-pink-500" />,
                title: "Implementation Support",
                price: "Custom",
                description: "Hands-on assistance implementing AI tools in your daily workflows."
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="glass-card hover-lift animate-fade-up p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.icon}
                <h3 className="text-2xl font-semibold my-4">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-xl font-semibold mb-4">{service.price}</p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full hover-lift">Learn More</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your AI journey with our expert guidance and practical solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="hover-lift">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}