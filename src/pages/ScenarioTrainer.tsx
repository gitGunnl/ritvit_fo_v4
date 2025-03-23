
import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ScenarioTrainer() {
  const [currentScenario, setCurrentScenario] = useState(0);
  
  const scenarios = [
    {
      title: "Fyrstikap og Startseting",
      description: "Í hesum scenarium, tú skalt skriva eina startseting fyri ein fyrstikap í einari frásøgn.",
      prompt: "Ein vakur summarmorgun í Tórshavn..."
    },
    {
      title: "Proffessionell Teldupostur",
      description: "Skriva ein professionellan teldupost til ein kunda um ein nýggjan tænastu.",
      prompt: "Kæri viðskiftafólk..."
    },
    {
      title: "Veðurtýðing",
      description: "Ger eina veðurtýðing fyri næstu vikuna í Føroyum.",
      prompt: "Veðurútlitið fyri vikuna..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 animate-fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scenario Trainer
            </h1>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              Venja seg at skriva og hugsa kreativt við hesum scenarios.
              Venja teg at brúka ChatGPT at hjálpa við tínum skrivligum uppgávum.
            </p>
          </div>

          <Card className="p-6 shadow-lg border-2 border-border">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                {scenarios[currentScenario].title}
              </h2>
              <p className="text-text/80">
                {scenarios[currentScenario].description}
              </p>
            </div>

            <div className="mb-6 p-4 bg-border/10 rounded-lg">
              <p className="font-medium text-text/90 italic">
                "{scenarios[currentScenario].prompt}"
              </p>
            </div>

            <textarea
              className="w-full min-h-[200px] p-3 border border-border rounded-lg bg-background mb-4"
              placeholder="Skriva tína loysn her..."
            />

            <div className="flex justify-between">
              <Button 
                variant="outline"
                onClick={() => setCurrentScenario(prev => 
                  prev > 0 ? prev - 1 : scenarios.length - 1
                )}
              >
                Fyrra Scenario
              </Button>
              
              <Button
                onClick={() => setCurrentScenario(prev => 
                  prev < scenarios.length - 1 ? prev + 1 : 0
                )}
              >
                Næsta Scenario
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
