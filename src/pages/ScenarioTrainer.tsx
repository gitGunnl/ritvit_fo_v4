import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Sparkles, Shield, BarChart, Clock, MessageSquare } from "lucide-react";

export default function ScenarioTrainer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const scenarios = [
    {
      title: "Customer Complaint Resolution",
      description: "Practice handling difficult customers with empathy and effective solutions",
      icon: <MessageSquare className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Sales Negotiation Mastery",
      description: "Develop skills to handle price objections and close deals confidently",
      icon: <BarChart className="h-10 w-10 text-primary mb-4" />
    },
    {
      title: "Leadership Feedback Sessions",
      description: "Learn to deliver constructive feedback that motivates and improves performance",
      icon: <Users className="h-10 w-10 text-primary mb-4" />
    }
  ];

  const benefits = [
    {
      title: "Practice Anytime",
      description: "Train at your own pace, without scheduling constraints",
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: "Immediate Feedback",
      description: "Get instant assessments on your performance and areas for improvement",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Realistic Interactions",
      description: "Experience true-to-life scenarios tailored to your industry",
      icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
      title: "Privacy Focused",
      description: "GDPR compliant with minimized data retention",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
              <span className="text-primary">Scenario Trainer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform passive learning into practical skills with AI-driven roleplay. Practice real workplace scenarios anytime, receive instant feedback, and develop confidence faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Try Free Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why It Matters Section */}
      <motion.section 
        className="py-20 bg-muted/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Scenario Training Matters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most workplace training relies on passive learning. Scenario Trainer changes that with active, AI-driven practice that builds real skills.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{benefit.icon}</div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Scenarios */}
      <motion.section 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Realistic Scenarios That Matter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practice handling common workplace situations in a safe environment, with AI that provides realistic responses and helpful feedback.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  {scenario.icon}
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{scenario.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-primary hover:bg-primary/10 hover:text-primary px-0">
                    Try this scenario →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform provides everything you need to create effective, engaging training experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border border-border">
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Industry-Specific Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Train with scenarios tailored to your specific industry—healthcare, finance, retail, technology, and more. Each scenario reflects real challenges employees face daily.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Multilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practice scenarios in multiple languages, making training accessible to diverse teams across global organizations. Perfect for international teams and customer-facing roles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Privacy & Security Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your data stays secure with end-to-end encryption and GDPR compliance. We never use your training interactions to train our models.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-primary/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Training?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the power of AI-driven scenario training with our free demo. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Start Free Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}