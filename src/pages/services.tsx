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
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6 animate-fade-down bg-gradient-to-r from-violet-600 via-yellow-400 to-indigo-600 bg-clip-text text-transparent">
              Start Your AI Journey Today
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help Faroese businesses embrace AI technology, starting with practical tools like ChatGPT and Microsoft Copilot. Our structured approach ensures your team can effectively implement AI in their daily work.
            </p>
          </div>

          {/* Main Course Section - The First Step */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-1 rounded-full">Best First Step</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Start Here: Our Flagship Course</h2>
              <p className="text-lg text-gray-600">The perfect introduction to AI for your business</p>
            </div>
            
            <Card className="p-8 hover-lift animate-fade-up max-w-3xl mx-auto bg-gradient-to-br from-white via-yellow-50 to-white border-2 border-yellow-200/50 shadow-xl">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <MessageSquare className="w-16 h-16 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">ChatGPT Course</h3>
                  <p className="text-gray-600 mb-6">
                    Our comprehensive course teaches you how to leverage ChatGPT effectively in your daily work. Perfect for beginners and professionals alike. This is where most of our clients start their AI journey.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-xl font-semibold text-yellow-600">1.200 DKK</p>
                    <Link to="/contact" className="flex-1 sm:flex-none">
                      <Button 
                        className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black hover:text-black shadow-lg hover:shadow-yellow-200/50"
                      >
                        Get Started Today
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Journey Steps */}
          <div className="space-y-32">
            {/* Step 2: Use Cases */}
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-1 rounded-full">Recommended Second Step</span>
                <div className="mt-4">
                  <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">15 ChatGPT Use Cases</h3>
                  <p className="text-gray-600 mb-6">
                    Save weeks of discovery time - we provide 15 tailored ways to use ChatGPT specifically for your work context. This service helps you identify immediate opportunities for AI implementation in your workflow.
                  </p>
                  <p className="text-xl font-semibold text-yellow-600 mb-4">1.200 DKK</p>
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift border-yellow-200 hover:bg-yellow-50">Learn More</Button>
                  </Link>
                </div>
              </div>
              <Card className="md:w-1/2 p-8 glass-card bg-gradient-to-br from-white to-yellow-50/30">
                <p className="text-gray-600 leading-relaxed">
                  After completing our course, this service helps you identify specific opportunities for AI implementation in your workflow. We'll analyze your specific work processes and provide you with 15 concrete ways you can use ChatGPT to improve efficiency.
                </p>
              </Card>
            </div>

            {/* Step 3: Talks & Workshops */}
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
              <Card className="md:w-1/2 p-8 glass-card order-2 md:order-1">
                <p className="text-gray-600 leading-relaxed">
                  Perfect for organizations wanting to introduce AI concepts to multiple employees simultaneously. Our talks combine inspiration with practical demonstrations, helping your team understand the potential of AI in their daily work.
                </p>
              </Card>
              <div className="md:w-1/2 order-1 md:order-2">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">For Teams & Organizations</span>
                <div className="mt-4">
                  <Presentation className="w-12 h-12 text-violet-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">AI Talks & Workshops</h3>
                  <p className="text-gray-600 mb-6">
                    Inspirational and practical talks for employees and leaders about AI's potential in your organization. Perfect for introducing key concepts to multiple employees simultaneously.
                  </p>
                  <p className="text-xl font-semibold text-violet-600 mb-4">10.000 DKK</p>
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift">Book a Session</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 4: Implementation */}
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1 rounded-full">Hands-on Support</span>
                <div className="mt-4">
                  <Users2 className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">AI Implementation Consulting</h3>
                  <p className="text-gray-600 mb-6">
                    Once your team understands the basics, we provide hands-on assistance implementing ChatGPT or Copilot in your daily workflows. We work directly with your employees to ensure successful adoption.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift">Get Support</Button>
                  </Link>
                </div>
              </div>
              <Card className="md:w-1/2 p-8 glass-card">
                <p className="text-gray-600 leading-relaxed">
                  Our experts work directly with your team to integrate AI tools into their specific workflows, ensuring successful adoption and maximum benefit. We help turn knowledge into practical, everyday use.
                </p>
              </Card>
            </div>

            {/* Step 5: Custom Solutions */}
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
              <Card className="md:w-1/2 p-8 glass-card order-2 md:order-1">
                <p className="text-gray-600 leading-relaxed">
                  Have a specific process you want to automate with AI? We can help turn your automation ideas into reality with our development expertise. From simple automations to complex integrations.
                </p>
              </Card>
              <div className="md:w-1/2 order-1 md:order-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">Custom Development</span>
                <div className="mt-4">
                  <Code className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Custom AI Automation</h3>
                  <p className="text-gray-600 mb-6">
                    Turn your AI automation ideas into reality with our development expertise. We help you build custom solutions that perfectly fit your needs.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift">Discuss Your Project</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-32 text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your AI journey? Begin with our ChatGPT course today.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black hover:text-black shadow-lg hover:shadow-yellow-200/50"
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}