import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Target, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Transform Your Business with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up">
            Unlock the power of artificial intelligence to drive innovation and growth in your organization
          </p>
          <Button size="lg" className="animate-fade-up">
            Explore Our Services <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow glass-card hover-lift">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
              <p className="text-muted-foreground">
                Expert guidance on implementing AI solutions tailored to your business needs
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow glass-card hover-lift">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Workshops</h3>
              <p className="text-muted-foreground">
                Interactive sessions to help your team master AI tools and technologies
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow glass-card hover-lift">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Bespoke AI implementations designed to achieve your specific goals
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}