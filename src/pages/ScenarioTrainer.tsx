import React from 'react';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Zap, Users, Shield, Sparkles, Globe, Clock } from "lucide-react";

const ScenarioTrainer = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up">
              Transform passive learning into active skill development. Practice real workplace scenarios with AI-driven roleplay, anytime, anywhere.
            </p>
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-border max-w-3xl mx-auto">
              <p className="text-lg text-text/80">
                This is a research and development project exploring the possibilities of AI-driven scenario training. We're actively working on launching an MVP (Minimum Viable Product) to bring this innovative learning approach to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="py-32 bg-background/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Transforming Training Through Innovation</h2>
            <p className="mt-4 text-xl text-muted-foreground">Practice makes perfect - now made effortless with AI</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Brain className="h-12 w-12 text-primary relative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
              <p className="text-muted-foreground leading-relaxed">Get immediate performance assessment and actionable insights after each interaction, accelerating your skill development journey.</p>
            </div>
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Clock className="h-12 w-12 text-primary relative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Setup</h3>
              <p className="text-muted-foreground leading-relaxed">Start training immediately with our simple, intuitive interface. No complex integrations or setup required.</p>
            </div>
            <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Globe className="h-12 w-12 text-primary relative" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Access</h3>
              <p className="text-muted-foreground leading-relaxed">Available in multiple languages, making effective training accessible to teams worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Sales Negotiation</h3>
              <p className="text-muted-foreground">Master price negotiations and handle difficult customer requests with confidence through realistic practice scenarios.</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-muted-foreground">Learn to manage customer complaints effectively and turn challenging situations into positive outcomes.</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Leadership Skills</h3>
              <p className="text-muted-foreground">Develop crucial management skills like giving constructive feedback and conducting performance reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-muted-foreground">Your data privacy and security is our top priority</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">GDPR Compliant</h3>
                <p className="text-muted-foreground">Fully compliant with EU data protection laws, ensuring your data is handled with the utmost care.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Minimal Data Retention</h3>
                <p className="text-muted-foreground">We only store essential, anonymized data to maintain your privacy while improving your experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Global Impact</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            With corporate training spending approaching $493 billion by 2028, Scenario Trainer is positioned to revolutionize how organizations develop their talent.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-4xl font-bold text-primary mb-2">350M+</h3>
              <p className="text-muted-foreground">Potential Users Worldwide</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Available Training</p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground">Privacy Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Training?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join forward-thinking companies using Scenario Trainer to build confident, skilled teams through practical, AI-driven roleplay.
          </p>
          <Button size="lg" className="h-12 px-8">
            Start Free Trial <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ScenarioTrainer;