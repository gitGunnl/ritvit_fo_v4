import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Calendar, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IntroCallThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="/logos/logo-header.png" alt="Ritvit" className="h-8" />
            <div className="text-sm text-muted-foreground">
              Questions? <a href="mailto:info@ritvit.fo" className="text-primary hover:underline">info@ritvit.fo</a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank you for booking!</h1>
          <p className="text-lg text-muted-foreground">
            Your free 15-minute AI intro call has been requested.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Calendar Invite</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a calendar invite within the next few hours with meeting details.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Confirmation Email</h3>
                  <p className="text-sm text-muted-foreground">
                    A confirmation email has been sent to the address you provided.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Need to make changes or have questions?
          </p>
          <div className="space-x-4">
            <a
              href="mailto:info@ritvit.fo"
              className="text-primary hover:underline"
            >
              Email us at info@ritvit.fo
            </a>
          </div>
          <div className="pt-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
            >
              Back to Homepage
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntroCallThankYou;