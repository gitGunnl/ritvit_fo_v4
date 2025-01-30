import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Moon, Sparkles, Lightbulb, Rocket, Globe, ChevronRight, ArrowRight, Code, Cpu, Database, Network } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animated Text */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="container px-4 mx-auto relative">
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-tracking-in-expand">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Pushing Boundaries
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up">
              We're on a mission to revolutionize the way people interact with technology through innovative solutions and cutting-edge AI.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid with Glass Cards */}
      <section className="py-24 bg-gradient-to-b from-background to-background/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12 text-blue-500" />,
                title: "Advanced Development",
                description: "Building cutting-edge solutions with modern technologies"
              },
              {
                icon: <Database className="h-12 w-12 text-purple-500" />,
                title: "Smart Processing",
                description: "Transform complex data into actionable insights"
              },
              {
                icon: <Network className="h-12 w-12 text-pink-500" />,
                title: "Neural Networks",
                description: "Implementing state-of-the-art AI architectures"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="glass-card hover-lift animate-fade-up overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4 text-center">
                  <div className="mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section with Animated Numbers */}
      <section className="py-24 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="container px-4 mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
              { number: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 glass-card rounded-lg animate-fade-up group hover:bg-white/10 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-4xl font-bold bg-gradient-to-br from-white via-white/80 to-white/60 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-background to-background/90">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">Our Journey</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              { year: "2023", title: "Company Founded", description: "Started with a vision to revolutionize AI" },
              { year: "2024", title: "Rapid Growth", description: "Expanded our team and global reach" },
              { year: "2025", title: "Innovation Hub", description: "Launched our AI research division" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-8 animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-32">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {item.year}
                  </span>
                </div>
                <div className="flex-grow glass-card p-8 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-purple-500/20 via-background to-blue-500/20">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us in shaping the future of technology
            </p>
            <Link to="/contact">
              <Button size="lg" className="hover-lift group glass-card">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ThemeToggle />
      <Footer />
    </div>
  );
}