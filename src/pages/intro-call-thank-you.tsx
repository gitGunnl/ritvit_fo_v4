
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar, Mail, ArrowLeft } from 'lucide-react';

const IntroCallThankYou = () => {
  useEffect(() => {
    // Fire scheduled event
    if (window.gtag) {
      window.gtag('event', 'book_intro_scheduled');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="/logos/logo-header.png" alt="Ritvit" className="h-8" />
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to main site
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Thank you for booking!</h1>
          <p className="text-lg text-muted-foreground">
            We're excited to discuss how AI can help your team.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2 mt-0.5">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Calendar Invite Sent</h3>
                <p className="text-sm text-muted-foreground">
                  Check your email for the calendar invitation with meeting details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2 mt-0.5">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  No preparation needed! We'll discuss your current setup and goals during the call.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2 mt-0.5">
                <ArrowLeft className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Need to Reschedule?</h3>
                <p className="text-sm text-muted-foreground">
                  Reply to the calendar invite or email us directly at{' '}
                  <a href="mailto:info@ritvit.fo" className="text-primary hover:underline">
                    info@ritvit.fo
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20 text-center">
          <h3 className="font-semibold mb-2">Questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Feel free to reach out if you have any questions before our call.
          </p>
          <Button variant="outline" asChild>
            <a href="mailto:info@ritvit.fo">
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </a>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Return to main website
          </Link>
        </div>
      </main>
    </div>
  );
};

export default IntroCallThankYou;
