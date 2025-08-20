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
import SEO from "@/components/SEO";
import { siteUrl } from "@/lib/seo";

/**
 * ScenarioTrainer: A revolutionary platform that democratizes professional development.
 * Our improved copy inspires global change by transforming theoretical knowledge
 * into practical skills through AI-powered, interactive roleplay training.
 */
const ScenarioTrainer: FC = () => {
  return (
    <>
      <SEO
        title="Scenario Trainer - Vitlíkisstovan"
        description="AI-drivin venjingarskipan við realistiskum leiklutspæli."
        url={`${siteUrl}/scenariotrainer`}
      />
      <div className="bg-gradient-to-b from-background to-muted min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Empowering the World with AI-Driven Skill Mastery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-text/80">
            Scenario Trainer democratizes professional development by harnessing advanced AI to provide immersive, realistic roleplay experiences. Move beyond passive learning—equip everyone, everywhere, with the practical skills they need for real-world success.
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
                <h2 className="text-3xl font-bold mb-8 text-text">
                  Bridging the Critical Gap Between Knowing and Doing
                </h2>
                <p className="text-lg mb-6 text-text/80">
                  Traditional training methods—lectures, videos, and online courses—deliver knowledge but fail to cultivate the emotional intelligence and adaptive skills needed for real-world success.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-text">
                  The Challenges with Conventional Methods
                </h3>
                <ul className="space-y-3 text-text/80">
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-destructive">✕</span>
                    </div>
                    <p>
                      Passive learning leads to superficial retention and lacks practical application.
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-destructive">✕</span>
                    </div>
                    <p>
                      Access to skilled trainers—who can both master content and deliver realistic acting—is limited and costly.
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-destructive">✕</span>
                    </div>
                    <p>
                      In-person roleplay sessions are expensive, time-consuming, and unable to scale for mass impact.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-text">
                  Scenario Trainer: The Global Solution
                </h3>
                <p className="text-lg mb-6 text-text/80">
                  Our platform leverages AI to deliver immersive, interactive roleplay sessions on-demand. By breaking down barriers, we enable skill-building that complements existing training materials—empowering learners from local communities to global enterprises.
                </p>
                <ul className="space-y-3 text-text/80">
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <p>
                      Unlimited practice sessions that seamlessly integrate with any curriculum.
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <p>
                      Realistic, active rehearsals with instant, growth-focused feedback.
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <p>
                      Accessible globally, fostering inclusive workforce development regardless of location or budget.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
              Core Features for Lasting Impact
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text/80">
              Each feature is designed to transform passive knowledge into actionable skills through immersive, adaptive practice.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Interactive AI Roleplay",
                description:
                  "Engage in dynamic, realistic scenarios—from negotiations to crisis management and even sports visualization—with AI-driven characters."
              },
              {
                title: "Personalized Performance Evaluation",
                description:
                  "Receive immediate, actionable feedback that spotlights your strengths and identifies key areas for improvement."
              },
              {
                title: "Guided Visualization",
                description:
                  "Harness guided visualization techniques to mentally rehearse critical tasks, manage stress, or enhance focus."
              },
              {
                title: "Reverse Teaching",
                description:
                  "Reinforce your learning by explaining concepts back to the AI, solidifying understanding through active dialogue."
              },
              {
                title: "Risk-Free Practice Environment",
                description:
                  "Practice high-stakes or emotionally challenging scenarios in a safe, simulated environment without real-world consequences."
              },
              {
                title: "Tailored, Customizable Scenarios",
                description:
                  "Adapt training to your organization’s unique needs, reflecting local practices, policies, and cultural nuances."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
              Why Scenario Trainer Matters
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text/80">
              Transforming workforce readiness, driving economic growth, and enabling inclusive education globally.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Unlimited Practice Opportunities",
                description: "Access endless training sessions on-demand, overcoming scheduling constraints and cost barriers."
              },
              {
                title: "Affordable, Scalable Excellence",
                description: "Deliver high-quality roleplay training to thousands, empowering communities in both emerging and established markets."
              },
              {
                title: "Seamless Integration",
                description: "Enhance existing training programs by adding a dynamic, interactive practice component."
              },
              {
                title: "Data-Driven Insights",
                description: "Leverage AI analytics to identify skill gaps, refine training strategies, and optimize performance."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
              Who Benefits from Scenario Trainer
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text/80">
              From local educators to multinational corporations, Scenario Trainer’s immersive roleplay is a game-changer.
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
                <p className="mb-6 text-text/80">
                  Empower educators and administrators to refine classroom management, parent engagement, and crisis response through immersive practice.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Classroom Management</h4>
                    <p className="text-sm text-text/70">
                      Safely rehearse handling disruptive or evolving classroom scenarios.
                    </p>
                  </Card>
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Parent Meetings</h4>
                    <p className="text-sm text-text/70">
                      Prepare for challenging parent-teacher conferences with confidence.
                    </p>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="corporate" className="bg-card/50 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-text">Corporate & Enterprise</h3>
                <p className="mb-6 text-text/80">
                  Elevate your team’s performance with realistic simulations for sales, negotiations, and leadership.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Sales Training</h4>
                    <p className="text-sm text-text/70">
                      Master persuasive techniques and adaptive negotiation strategies in real time.
                    </p>
                  </Card>
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Leadership</h4>
                    <p className="text-sm text-text/70">
                      Develop the skills to handle conflict, inspire teams, and drive strategic growth.
                    </p>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="healthcare" className="bg-card/50 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4 text-text">Healthcare & Services</h3>
                <p className="mb-6 text-text/80">
                  Equip healthcare professionals with the communication and crisis management skills necessary for high-pressure environments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Patient Communication</h4>
                    <p className="text-sm text-text/70">
                      Deliver critical information with empathy and clarity.
                    </p>
                  </Card>
                  <Card className="p-4 bg-muted/30">
                    <h4 className="font-bold">Crisis Response</h4>
                    <p className="text-sm text-text/70">
                      Hone your skills in rapid, decisive action during emergencies.
                    </p>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <p className="text-center mt-8 text-text/80 max-w-3xl mx-auto">
              Early pilots have shown remarkable success, empowering educators, service providers, and enterprises to confidently handle critical interactions.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-center mb-12 text-text/80">
              Discover how Scenario Trainer is paving the way for inclusive, transformative learning.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "When will Scenario Trainer launch?",
                  answer:
                    "We’re set to launch globally in April 2024. Join our waitlist to be among the first to experience the future of interactive skill-building."
                },
                {
                  question: "How does Scenario Trainer integrate with our current training?",
                  answer:
                    "Our platform is designed to seamlessly complement your existing resources, adding an active, hands-on component to your established curriculum."
                },
                {
                  question: "Is my organization’s data secure?",
                  answer:
                    "Absolutely. We use robust encryption and adhere to strict data protection standards, ensuring your information remains completely confidential."
                },
                {
                  question: "Can we customize scenarios for our specific needs?",
                  answer:
                    "Yes. Our flexible framework allows you to tailor scenarios to reflect your organization’s unique challenges, policies, and cultural contexts."
                },
                {
                  question: "What future developments are planned?",
                  answer:
                    "We’re continuously evolving. Upcoming enhancements include voice interaction, multilingual support, and deeper analytics—all driven by user feedback and technological innovation."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
              Ready to Transform Training at Scale?
            </h2>
            <p className="text-xl mb-8 text-text/80">
              Join our waitlist today to bring equitable, AI-enhanced learning to your organization or community—launching globally in April 2024.
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
