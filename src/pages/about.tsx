import { Card } from "@/components/ui/card"
import { Award, Heart, Target } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-down">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're passionate about helping businesses harness the power of AI to achieve their goals and transform their operations.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 glass-card hover-lift animate-fade-up">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading force in democratizing AI technology, making it accessible and beneficial for businesses of all sizes.
            </p>
          </Card>
          <Card className="p-8 glass-card hover-lift animate-fade-up">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower organizations with cutting-edge AI solutions that drive innovation, efficiency, and sustainable growth.
            </p>
          </Card>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-primary mb-4" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, delivering the highest quality solutions to our clients."
              },
              {
                icon: <Target className="w-12 h-12 text-primary mb-4" />,
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI technology."
              },
              {
                icon: <Heart className="w-12 h-12 text-primary mb-4" />,
                title: "Integrity",
                description: "We maintain the highest standards of integrity and ethics in all our interactions."
              }
            ].map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center glass-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}