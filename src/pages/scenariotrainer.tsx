
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const ScenarioTrainer: FC = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-background to-muted min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Making Roleplay-Based Training Accessible to All
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-text/80">
            Scenario Trainer transforms theoretical knowledge into practical skills with AI-driven interactive roleplays at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="font-semibold text-lg">
              Join Waitlist
            </Button>
            <Button variant="outline" size="lg" className="font-semibold text-lg">
              Download PDF
            </Button>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-text">Bridging the Gap Between Learning and Doing</h2>
                <p className="text-lg mb-6 text-text/80">
                  Scenario Trainer transforms traditional corporate training with interactive, AI-driven roleplays that complement existing resources.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-text">The Problem with Traditional Training</h3>
                <ul className="space-y-3 text-text/80">
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-destructive">✕</span>
                    </div>
                    <p>Passive learning methods like lectures and videos result in low retention</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-destructive">✕</span>
                    </div>
                    <p>Gap between theoretical knowledge and practical application</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-destructive">✕</span>
                    </div>
                    <p>Human-led roleplay training is expensive and difficult to scale</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-text">The Scenario Trainer Solution</h3>
                <p className="text-lg mb-6 text-text/80">
                  Our platform delivers interactive, AI-driven roleplays at scale, working in synergy with your existing training content.
                </p>
                <ul className="space-y-3 text-text/80">
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <p>Complement videos or reading materials with unlimited practice sessions</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <p>Active rehearsals of real-world scenarios with immediate feedback</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <p>Built-in evaluation logic that tracks progress and provides meaningful assessments</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">Key Features</h2>
            <p className="text-xl max-w-3xl mx-auto text-text/80">
              A deeper level of engagement through intelligent roleplay scenarios
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Interactive Roleplay",
                description: "Simulate real-world scenarios like negotiations, classroom management, or crisis handling with AI-powered characters."
              },
              {
                title: "Performance Evaluation",
                description: "Receive immediate, personalized feedback on your performance with specific improvement suggestions."
              },
              {
                title: "Visualization Exercises",
                description: "Enhance learning with guided visualization for sports, meditation, or self-reflection scenarios."
              },
              {
                title: "Reverse Teaching",
                description: "Solidify knowledge by teaching concepts back to the AI, reinforcing understanding through explanation."
              },
              {
                title: "Safe Practice Environment",
                description: "Practice high-stakes or sensitive scenarios without real-world consequences, building confidence before actual implementation."
              },
              {
                title: "Customizable Scenarios",
                description: "Tailor training to your organization's specific needs, integrating internal data, policies, and real-world challenges."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-primary/10 bg-card/50">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary text-xl">✦</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-text">{feature.title}</h3>
                <p className="text-text/80">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">Why Choose Scenario Trainer</h2>
            <p className="text-xl max-w-3xl mx-auto text-text/80">
              Transforming corporate learning with accessible, engaging roleplay training
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Unlimited Practice Opportunities",
                description: "Train anytime, anywhere with no scheduling constraints or additional costs per session."
              },
              {
                title: "Cost-Effective Scaling",
                description: "Reduce training costs while expanding access to high-quality roleplay experiences across your organization."
              },
              {
                title: "Complements Existing Materials",
                description: "Enhance rather than replace your current training resources, adding the crucial practice component."
              },
              {
                title: "Data-Driven Improvement",
                description: "Gain insights into common challenges and learning patterns to continuously refine your training approach."
              }
            ].map((reason, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-text">{reason.title}</h3>
                  <p className="text-text/80">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">Who Benefits from Scenario Trainer</h2>
            <p className="text-xl max-w-3xl mx-auto text-text/80">
              Versatile applications across industries and use cases
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="education">Schools & Education</TabsTrigger>
                <TabsTrigger value="corporate">Corporate & Enterprise</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare & Services</TabsTrigger>
              </TabsList>
              <TabsContent value="education" className="bg-card/50 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-text">Schools & Education</h3>
                <p className="mb-6 text-text/80">Help teachers practice classroom management, parent conferences, and difficult conversations with students.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Classroom Management</h4>
                    <p className="text-sm text-text/70">Practice handling challenging classroom situations</p>
                  </Card>
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Parent Meetings</h4>
                    <p className="text-sm text-text/70">Prepare for difficult parent-teacher conferences</p>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="corporate" className="bg-card/50 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-text">Corporate & Enterprise</h3>
                <p className="mb-6 text-text/80">Train employees in sales negotiations, customer service scenarios, and conflict resolution.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Sales Training</h4>
                    <p className="text-sm text-text/70">Master sales techniques through roleplay</p>
                  </Card>
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Leadership</h4>
                    <p className="text-sm text-text/70">Practice difficult conversations and team management</p>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="healthcare" className="bg-card/50 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-text">Healthcare & Services</h3>
                <p className="mb-6 text-text/80">Practice sensitive patient interactions, crisis management, and interprofessional communication.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Patient Communication</h4>
                    <p className="text-sm text-text/70">Practice delivering difficult news with empathy</p>
                  </Card>
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Crisis Response</h4>
                    <p className="text-sm text-text/70">Prepare for high-pressure medical situations</p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <p className="text-center mt-8 text-text/80 max-w-3xl mx-auto">
              Early pilots with schools and kindergartens show promise, with staff benefiting from practicing sensitive interactions in a low-risk environment.
            </p>
            <div className="text-center mt-8">
              <Button size="lg" className="font-semibold">
                Join Our Pilot Program
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-text">Frequently Asked Questions</h2>
            <p className="text-xl max-w-3xl mx-auto text-center mb-12 text-text/80">
              Everything you need to know about Scenario Trainer
            </p>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "When will Scenario Trainer be available?",
                  answer: "We're planning to launch Scenario Trainer in April 2024. Join our waitlist to be among the first to access the platform."
                },
                {
                  question: "How does Scenario Trainer integrate with existing training materials?",
                  answer: "Scenario Trainer is designed to complement your current training resources. You can reference materials already in use and create practical exercises based on them."
                },
                {
                  question: "Is my data safe and private?",
                  answer: "Yes, we prioritize data security and privacy. All interactions are encrypted, and we adhere to strict data protection standards. Your organization's information remains confidential."
                },
                {
                  question: "Can I customize scenarios for my organization's specific needs?",
                  answer: "Absolutely. Scenario Trainer allows you to create tailored scenarios that reflect your organization's unique challenges, policies, and procedures."
                },
                {
                  question: "What about future developments?",
                  answer: "While future expansions like voice interactions or VR integration remain on our roadmap, our current focus is on building solid fundamentals first. We're committed to continuously improving the platform based on user feedback and technological advancements."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-text">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background/50 to-muted/50 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Ready to Transform Your Training?</h2>
            <p className="text-xl mb-8 text-text/80">
              Join the waitlist today and be among the first to experience the future of roleplay-based training when we launch in April 2024.
            </p>
            <Button size="lg" className="font-semibold text-lg px-8">
              Join the Waitlist
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ScenarioTrainer;
