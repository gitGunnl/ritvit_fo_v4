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
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl font-bold mb-6 animate-fade-down">
              Start Your AI Journey Today
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help Faroese businesses embrace AI technology, starting with practical tools like ChatGPT and Microsoft Copilot. Our structured approach ensures your team can effectively implement AI in their daily work.
            </p>
          </div>

          {/* Main Course Section - The First Step */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-1 rounded-full">Best First Step</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Start Here: Our Flagship Course</h2>
              <p className="text-lg text-gray-600">The perfect introduction to AI for your business</p>
            </div>
            
            <Card className="p-8 hover-lift animate-fade-up max-w-3xl mx-auto bg-white border-2 border-yellow-200/50 shadow-xl">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <MessageSquare className="w-16 h-16 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">ChatGPT Course</h3>
                  <p className="text-gray-600 mb-6">
                    Our comprehensive course teaches you how to leverage ChatGPT effectively in your daily work. Perfect for beginners and professionals alike. This is where most of our clients start their AI journey.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-xl font-semibold text-gray-900">1.200 DKK</p>
                    <Link to="/contact" className="flex-1 sm:flex-none">
                      <Button 
                        className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black hover:text-black shadow-lg"
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
          <div className="max-w-3xl mx-auto space-y-24">
            {/* Step 2: Use Cases */}
            <div className="fade-in">
              <span className="text-sm text-gray-500 mb-2 block">Recommended Second Step</span>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <Lightbulb className="w-12 h-12 text-gray-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">15 ChatGPT Use Cases</h3>
                <p className="text-gray-600 mb-6">
                  Save weeks of discovery time - we provide 15 tailored ways to use ChatGPT specifically for your work context. This service helps you identify immediate opportunities for AI implementation in your workflow.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-xl font-semibold">1.200 DKK</p>
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift">Learn More</Button>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm">
                  After completing our course, this service helps you identify specific opportunities for AI implementation in your workflow.
                </p>
              </div>
            </div>

            {/* Step 3: Talks & Workshops */}
            <div className="fade-in">
              <span className="text-sm text-gray-500 mb-2 block">For Teams & Organizations</span>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <Presentation className="w-12 h-12 text-gray-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">AI Talks & Workshops</h3>
                <p className="text-gray-600 mb-6">
                  Inspirational and practical talks for employees and leaders about AI's potential in your organization. Perfect for introducing key concepts to multiple employees simultaneously.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-xl font-semibold">10.000 DKK</p>
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift">Book a Session</Button>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm">
                  Perfect for organizations wanting to introduce AI concepts to multiple employees at once.
                </p>
              </div>
            </div>

            {/* Step 4: Implementation */}
            <div className="fade-in">
              <span className="text-sm text-gray-500 mb-2 block">Hands-on Support</span>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <Users2 className="w-12 h-12 text-gray-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">AI Implementation Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Once your team understands the basics, we provide hands-on assistance implementing ChatGPT or Copilot in your daily workflows. We work directly with your employees to ensure successful adoption.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift">Get Support</Button>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm">
                  Our experts work directly with your team to integrate AI tools into their specific workflows.
                </p>
              </div>
            </div>

            {/* Step 5: Custom Solutions */}
            <div className="fade-in">
              <span className="text-sm text-gray-500 mb-2 block">Custom Development</span>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <Code className="w-12 h-12 text-gray-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Custom AI Automation</h3>
                <p className="text-gray-600 mb-6">
                  Turn your AI automation ideas into reality with our development expertise. We help you build custom solutions that perfectly fit your needs.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <Link to="/contact">
                    <Button variant="outline" className="hover-lift">Discuss Your Project</Button>
                  </Link>
                </div>
                <p className="text-gray-500 text-sm">
                  Have a specific process you want to automate with AI? We can help turn your automation ideas into reality.
                </p>
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
                className="bg-yellow-400 hover:bg-yellow-500 text-black hover:text-black shadow-lg"
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