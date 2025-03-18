
import React from 'react';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Zap, Users } from "lucide-react";

const ScenarioTrainer = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              AI-Powered Role-Play Training
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform workplace training with instant, interactive scenarios. Practice makes perfect - now made effortless with AI.
            </p>
            <Button className="mt-8 text-lg h-12 px-8" size="lg">
              Try Demo Scenario <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-xl border">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
              <p className="text-muted-foreground">Real-time AI assessment and guidance after each interaction, accelerating skill development.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Focused Practice</h3>
              <p className="text-muted-foreground">Specialized scenarios for sales, customer service, and leadership communication.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
              <p className="text-muted-foreground">Start training immediately with our simple, intuitive interface. No complex setup required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Rúna</h3>
              <p className="text-accent mb-2">Co-Founder & CEO</p>
              <p className="text-muted-foreground">
                Former training director with 10+ years experience in corporate learning. 
                Pioneered adaptive learning methodologies across Fortune 500 companies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Gunnleygur</h3>
              <p className="text-accent mb-2">Co-Founder & CTO</p>
              <p className="text-muted-foreground">
                AI researcher and full-stack developer with expertise in natural language processing.
                Led development of several successful AI-powered educational platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Training?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking companies using Scenario Trainer to build confident, skilled teams.
          </p>
          <Button size="lg" className="h-12 px-8">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScenarioTrainer;
