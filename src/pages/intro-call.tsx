
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, Shield, Users, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  microsoft365: string;
  preferredTime: string;
  notes: string;
  consent: boolean;
}

const IntroCallLanding = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    microsoft365: '',
    preferredTime: '',
    notes: '',
    consent: false
  });

  useEffect(() => {
    // Capture UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utm = {
      source: urlParams.get('utm_source') || '',
      medium: urlParams.get('utm_medium') || '',
      campaign: urlParams.get('utm_campaign') || ''
    };
    setUtmParams(utm);

    // Fire view event
    if (window.gtag) {
      window.gtag('event', 'book_intro_view', {
        utm_source: utm.source,
        utm_medium: utm.medium,
        utm_campaign: utm.campaign
      });
    }
  }, []);

  const handleBookClick = () => {
    // Fire click event
    if (window.gtag) {
      window.gtag('event', 'book_intro_click', {
        utm_source: utmParams.source,
        utm_medium: utmParams.medium,
        utm_campaign: utmParams.campaign
      });
    }
    
    setShowForm(true);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    
    if (!formData.email.trim()) {
      toast.error('Please enter your email');
      return;
    }
    
    if (!formData.company.trim()) {
      toast.error('Please enter your company');
      return;
    }
    
    if (!formData.role.trim()) {
      toast.error('Please enter your role');
      return;
    }
    
    if (!formData.consent) {
      toast.error('Please consent to be contacted');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        utm_params: utmParams,
        timestamp: new Date().toISOString()
      };

      // Submit to API
      const response = await fetch('/api/intro-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      // Fire form submitted event
      if (window.gtag) {
        window.gtag('event', 'book_intro_form_submitted', {
          utm_source: utmParams.source,
          utm_medium: utmParams.medium,
          utm_campaign: utmParams.campaign
        });
      }

      toast.success('Your intro call request has been submitted!');
      
      // Navigate to thank you page
      navigate('/intro-call/thank-you');
      
    } catch (error) {
      console.error('Submission error:', error);
      
      // Fire error event
      if (window.gtag) {
        window.gtag('event', 'book_intro_error', {
          error_message: 'Form submission failed'
        });
      }
      
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDynamicSubhead = () => {
    const baseText = "Practical, safe, Microsoft 365–first. See how we upskill your team.";
    if (utmParams.campaign) {
      return `${baseText} (${utmParams.campaign})`;
    }
    return baseText;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="/logos/logo-header.png" alt="Ritvit" className="h-8" />
            <div className="text-sm text-muted-foreground">
              Prefer email? <a href="mailto:info@ritvit.fo" className="text-primary hover:underline">info@ritvit.fo</a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Book a free 15-minute AI intro call
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {getDynamicSubhead()}
          </p>
          
          {!showForm ? (
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={handleBookClick}
            >
              Book your time
            </Button>
          ) : null}
        </section>

        {/* Scheduler/Form Section */}
        {showForm && (
          <section className="mb-16">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Schedule Your Free Intro Call</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Role *</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="teamSize">Team Size</Label>
                      <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 people</SelectItem>
                          <SelectItem value="6-20">6-20 people</SelectItem>
                          <SelectItem value="21-50">21-50 people</SelectItem>
                          <SelectItem value="51+">51+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="microsoft365">Microsoft 365/Copilot</Label>
                      <Select onValueChange={(value) => handleInputChange('microsoft365', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Current status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, we have it</SelectItem>
                          <SelectItem value="no">No, we don't</SelectItem>
                          <SelectItem value="unsure">Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Time Window</Label>
                    <Input
                      id="preferredTime"
                      placeholder="e.g., Mornings, Afternoons, specific days"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Anything specific you'd like to discuss?"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked === true)}
                    />
                    <Label htmlFor="consent" className="text-sm leading-5">
                      I consent to be contacted about this inquiry. 
                      <a href="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</a>
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule My Call'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        )}

        {/* How We Help */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">How we help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Check, text: "Simple rules people follow (green/amber/red)" },
              { icon: Users, text: "Copilot access mapped (two-click start)" },
              { icon: Clock, text: "Short, role-based sessions using your docs" },
              { icon: FileText, text: "Personal best-use-case templates" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Trust/Safety */}
        <section className="mb-16">
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Trust & Safety</h3>
                  <p className="text-sm text-muted-foreground">
                    Data stays in Microsoft 365; light governance; human-in-the-loop approach ensures safety and control.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Micro-FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Quick FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Who is this for?</h3>
              <p className="text-muted-foreground">
                Teams and businesses looking to safely implement AI tools, especially Microsoft 365 Copilot, with proper training and governance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What's covered in 15 minutes?</h3>
              <p className="text-muted-foreground">
                We'll understand your current setup, discuss your goals, and outline a practical path forward with AI implementation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Which tools?</h3>
              <p className="text-muted-foreground">
                Primarily Microsoft 365 suite including Copilot, Teams, SharePoint, and other productivity tools your team already uses.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="space-x-4">
            <a href="/privacy" className="hover:text-foreground">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntroCallLanding;
