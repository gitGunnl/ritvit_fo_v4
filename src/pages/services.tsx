import { Card } from "@/components/ui/card"
import { Brain, Code, LineChart, MessageSquare, Presentation, Users2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const services = [
  {
    icon: <Brain className="w-12 h-12 text-violet-600" />,
    title: "AI Strategy Consulting",
    description: "Develop a comprehensive AI roadmap for your organization"
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-indigo-600" />,
    title: "ChatGPT Integration",
    description: "Leverage ChatGPT to enhance your customer service and operations"
  },
  {
    icon: <Users2 className="w-12 h-12 text-violet-600" />,
    title: "Team Training",
    description: "Empower your team with AI skills and knowledge"
  },
  {
    icon: <LineChart className="w-12 h-12 text-indigo-600" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights"
  },
  {
    icon: <Code className="w-12 h-12 text-violet-600" />,
    title: "Custom AI Development",
    description: "Build tailored AI solutions for your specific needs"
  },
  {
    icon: <Presentation className="w-12 h-12 text-indigo-600" />,
    title: "AI Workshops",
    description: "Interactive sessions to explore AI capabilities"
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Navigation />
      <div className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 animate-fade-down bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-shadow glass-card hover-lift animate-fade-up hover:shadow-purple-200/50 hover:border-purple-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}