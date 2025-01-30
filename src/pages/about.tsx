import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Moon, Sparkles, Lightbulb, Rocket, Globe, ChevronRight, ArrowRight, Code, Cpu, Database, Network } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Toggle } from "@/components/ui/toggle"
import { useTheme } from "@/hooks/use-theme"

export default function About() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animated Text */}
      <section className="relative overflow-hidden py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-tracking-in-expand">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up">
              Discover how we're pushing the boundaries of what's possible with artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid with Glass Cards */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-blue-500" />,
                title: "Advanced AI Development",
                description: "Building cutting-edge AI solutions tailored to your needs"
              },
              {
                icon: <Database className="h-10 w-10 text-purple-500" />,
                title: "Data Processing",
                description: "Transform raw data into actionable insights"
              },
              {
                icon: <Network className="h-10 w-10 text-pink-500" />,
                title: "Neural Networks",
                description: "Implementing state-of-the-art neural architectures"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="glass-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {item.icon}
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section with Animated Numbers */}
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

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2023", title: "Company Founded", description: "Started with a vision to revolutionize AI" },
              { year: "2024", title: "Rapid Growth", description: "Expanded our team and services" },
              { year: "2025", title: "Global Reach", description: "Started serving international clients" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-24">
                  <span className="text-xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-grow glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
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

      {/* Theme Toggle */}
      <div className="fixed bottom-4 right-4">
        <Toggle 
          pressed={theme === 'dark'} 
          onPressedChange={toggleTheme}
          className="w-10 h-10 rounded-full glass-card"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Toggle>
      </div>

      <Footer />
    </div>
  )
}