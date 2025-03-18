
import React from 'react';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Zap, Users, Play, ChevronRight } from "lucide-react";

const ScenarioTrainer = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_var(--primary)_0%,_transparent_70%)] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,_var(--accent)_0%,_transparent_70%)] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block animate-fade-down">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">
                Revolutionizing Workplace Training
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent animate-fade-up">
              AI-Powered Role-Play Training
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up [animation-delay:200ms]">
              Transform workplace training with instant, interactive scenarios. Practice makes perfect - now made effortless with AI.
            </p>
            <div className="flex items-center justify-center gap-4 animate-fade-up [animation-delay:400ms]">
              <Button className="group h-12 px-8 bg-primary hover:bg-primary/90" size="lg">
                Try Demo <Play className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="h-12 px-8" size="lg">
                Learn More <ChevronRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-32 bg-background/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Why Choose Scenario Trainer?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Brain className="h-12 w-12 text-primary relative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
              <p className="text-muted-foreground leading-relaxed">Real-time AI assessment and guidance after each interaction, accelerating skill development.</p>
            </div>
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Target className="h-12 w-12 text-primary relative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Focused Practice</h3>
              <p className="text-muted-foreground leading-relaxed">Specialized scenarios for sales, customer service, and leadership communication.</p>
            </div>
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Zap className="h-12 w-12 text-primary relative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-muted-foreground leading-relaxed">Start training immediately with our simple, intuitive interface. No complex setup required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-primary/20 transform group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold">Rúna</h3>
                <p className="text-primary font-medium mb-4">Co-Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  Former training director with 10+ years experience in corporate learning. 
                  Pioneered adaptive learning methodologies across Fortune 500 companies.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative p-8 bg-card/50 backdrop-blur-sm rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 overflow-hidden">
                  <div className="w-full h-full bg-primary/20 transform group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold">Gunnleygur</h3>
                <p className="text-primary font-medium mb-4">Co-Founder & CTO</p>
                <p className="text-muted-foreground leading-relaxed">
                  AI researcher and full-stack developer with expertise in natural language processing.
                  Led development of several successful AI-powered educational platforms.
                </p>
              </div>
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
