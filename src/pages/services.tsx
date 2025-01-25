import { Card } from "@/components/ui/card"
import { Brain, Code, Lightbulb, MessageSquare, Presentation, Users2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Navigation />
      <div className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6 animate-fade-down bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Start Your AI Journey Today
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help Faroese businesses embrace AI technology, starting with practical tools like ChatGPT and Microsoft Copilot. Our structured approach ensures your team can effectively implement AI in their daily work.
            </p>
          </div>

          {/* Main Course Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Here: Our Flagship Course</h2>
              <p className="text-lg text-gray-600">The perfect first step in your AI journey</p>
            </div>
            
            <Card className="p-8 glass-card hover-lift animate-fade-up max-w-2xl mx-auto">
              <div className="flex items-start gap-6">
                <MessageSquare className="w-12 h-12 text-violet-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">ChatGPT Course</h3>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive course teaches you how to leverage ChatGPT effectively in your daily work. Perfect for beginners and professionals alike.
                  </p>
                  <p className="text-xl font-semibold text-violet-600 mb-4">1.200 DKK</p>
                  <Link to="/contact">
                    <Button 
                      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Journey Steps */}
          <div className="space-y-24">
            {/* Step 2: Use Cases */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <Lightbulb className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Next Step: 15 ChatGPT Use Cases</h3>
                <p className="text-gray-600 mb-4">
                  Save time discovering ChatGPT applications - we provide 15 tailored ways to use ChatGPT in your specific work context.
                </p>
                <p className="text-xl font-semibold text-violet-600 mb-4">1.200 DKK</p>
                <Link to="/contact">
                  <Button variant="outline" className="hover-lift">Learn More</Button>
                </Link>
              </div>
              <Card className="md:w-1/2 p-6 glass-card">
                <p className="text-gray-600">
                  After completing our course, this service helps you identify specific opportunities for AI implementation in your workflow, saving weeks of discovery time.
                </p>
              </Card>
            </div>

            {/* Step 3: Talks & Workshops */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Card className="md:w-1/2 p-6 glass-card order-2 md:order-1">
                <p className="text-gray-600">
                  Perfect for organizations wanting to introduce AI concepts to multiple employees simultaneously. Our talks combine inspiration with practical demonstrations.
                </p>
              </Card>
              <div className="md:w-1/2 order-1 md:order-2">
                <Presentation className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Scale Up: AI Talks & Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Inspirational and practical talks for employees and leaders about AI's potential in your organization.
                </p>
                <p className="text-xl font-semibold text-violet-600 mb-4">10.000 DKK</p>
                <Link to="/contact">
                  <Button variant="outline" className="hover-lift">Book a Session</Button>
                </Link>
              </div>
            </div>

            {/* Step 4: Implementation */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <Users2 className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Implement: AI Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Once your team understands the basics, we provide hands-on assistance implementing ChatGPT or Copilot in your daily workflows.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="hover-lift">Get Support</Button>
                </Link>
              </div>
              <Card className="md:w-1/2 p-6 glass-card">
                <p className="text-gray-600">
                  Our experts work directly with your team to integrate AI tools into their specific workflows, ensuring successful adoption and maximum benefit.
                </p>
              </Card>
            </div>

            {/* Step 5: Custom Solutions */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Card className="md:w-1/2 p-6 glass-card order-2 md:order-1">
                <p className="text-gray-600">
                  Have a specific process you want to automate with AI? We can help turn your automation ideas into reality with our development expertise.
                </p>
              </Card>
              <div className="md:w-1/2 order-1 md:order-2">
                <Code className="w-12 h-12 text-violet-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Build: Custom AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Turn your AI automation ideas into reality with our development expertise.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="hover-lift">Discuss Your Project</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your AI journey? Begin with our ChatGPT course today.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}