
import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ChatbotButton from "@/components/ChatbotButton";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />

      {/* Hero Section - Enhanced with animations */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)] opacity-40 animate-pulse [animation-duration:12s]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--accent)_0%,_transparent_70%)] opacity-20 mix-blend-overlay"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down drop-shadow-md">
            Um <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent">okkum</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-down [animation-delay:200ms] text-text/80">
            Vit bera ritvit til Føroyar – og víðari
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-text/80 animate-fade-down [animation-delay:400ms]">
            Stig fyri stig broytur ritvit heimin. Vit syrgja fyri, at tú ikki dettur afturúr.
          </p>
        </div>
      </section>

      {/* Introduction - Enhanced with glass card */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-primary/10 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-xl border border-primary/30 animate-fade-up hover:shadow-primary/5 transition-all duration-300">
            <p className="text-xl mb-6 leading-relaxed">
              <strong className="text-primary/90">Tøkni Tænastan</strong> var stovna av einføldum orsøkum:
            </p>
            <p className="text-2xl mb-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              At hjálpa føroyskum fyritøkum at brúka ritvit.
            </p>
            <p className="text-lg">
              Vit eru nú komin fram til at hettar skal gerast í trimum stigum og vit hjálpa allan vegin.
            </p>
          </div>
        </div>
      </section>

      {/* Okkara søga - Enhanced with better layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Okkara søga:</span> Nýskapan
          </h2>
          <div className="max-w-4xl mx-auto bg-primary/10 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-xl border border-primary/30 animate-fade-up relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
            
            <p className="text-lg mb-6 relative z-10">
              Eg havi altíð verið bergtikin av <strong className="text-primary">nýggjari tøkni</strong> –
              øllum tí, sum broytir, hvussu vit arbeiða og liva.
            </p>
            <p className="text-lg mb-6 relative z-10">
              Sum verkfrøðingur arbeiddi eg við framkomnum skipanum, men einki
              fangaði meg sum ritvit.
            </p>
            <p className="text-lg mb-6 relative z-10">So ein dag gekk tað upp fyri mær:</p>
            <ul className="space-y-4 text-lg mb-6 relative z-10">
              <li className="flex items-start gap-3 p-3 bg-background/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                <div className="text-2xl">💡</div>
                <div>
                  <strong className="text-primary/90">Ritvit er ikki bara fyri stórar tøkni-risar.</strong>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-background/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                <div className="text-2xl">💡</div>
                <div>
                  <strong className="text-primary/90">Ritvit er ikki bara framtíð – tað er nú.</strong>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-background/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                <div className="text-2xl">💡</div>
                <div>
                  <strong className="text-primary/90">Ritvit kann nýtast í øllum fyritøkum – eisini í Føroyum.</strong>
                </div>
              </li>
            </ul>
            <p className="text-lg mb-6 relative z-10">
              Trupulleikin? <strong className="text-accent">Flestu hava ikki tíð at seta seg inn í tað.</strong>
            </p>
            <p className="text-lg mb-6 relative z-10">
              Tí stovnaði eg <strong className="text-primary">Tøkni Tænastuna</strong> – fyri at byggja brúnna
              millum <strong>møguleikarnar hjá ritviti</strong> og{" "}
              <strong>veruligu tørvin hjá føroyskum fyritøkum</strong>.
            </p>
            <p className="text-lg relative z-10">
              Nú hjálpa vit fyritøkum at{" "}
              <strong className="text-primary">
                sjálvvirka uppgávur, effektivisera arbeiðið og brúka ritvit fult
                út
              </strong>{" "}
              – so tær kunnu fokusera uppá tað, sum veruliga hevur týdning.
            </p>
          </div>
        </div>
      </section>

      {/* Okkara visjón - Enhanced with better visual design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-primary/10 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-xl border border-primary/30 animate-fade-up hover:shadow-primary/10 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Okkara visjón: Ritvit til øll</h2>
            <p className="text-lg mb-6">
              Ritvit er ikki bara fyri <strong>Silicon Valley</strong>. Tað er fyri
              tína fyritøku. Títt toymi. Tína gerandisdag.
            </p>
            <p className="text-lg mb-6">
              Mál okkara hjá <strong className="text-primary">Tøkni Tænastuni</strong> er at:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 p-4 bg-background/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <span className="text-xl text-primary">✅</span>
                </div>
                <div>
                  <strong className="text-primary/90">Gera ritvit lætt og atkomiligt</strong> fyri øll.
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-background/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <span className="text-xl text-primary">✅</span>
                </div>
                <div>
                  <strong className="text-primary/90">Hjálpa fyritøkum at spara tíð og tilfeingi</strong> – uttan
                  at seta fleiri fólk í starv.
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-background/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <span className="text-xl text-primary">✅</span>
                </div>
                <div>
                  <strong className="text-primary/90">Skapa ritvit-loysnir, sum veruliga rigga.</strong>
                </div>
              </li>
            </ul>
            <p className="text-lg text-center p-4 bg-accent/10 border border-accent/30 rounded-lg shadow-inner">
              Vit selja ikki bara "ritvit-ráðgeving". Vit{" "}
              <strong className="text-primary">læra, innføra og byggja</strong> loysnir, sum geva{" "}
              <strong className="text-accent">verulig úrslit</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Hvat ger okkum øðrvísi? - Enhanced with cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-down">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Hvat ger okkum øðrvísi?</span>
            </h2>
            
            <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-xl border border-primary/30 animate-fade-up mb-12">
              <p className="text-xl mb-6">
                Ritvit er <strong className="text-primary">allastaðni</strong>, men flestu fyritøkur stríðast
                við somu spurningar:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-background/30 rounded-lg border border-border hover:border-primary/40 transition-all hover:shadow-md text-center">
                  <span className="text-3xl mb-2 block">❌</span>
                  <strong className="text-primary/90">Hvar skulu vit byrja?</strong>
                </div>
                <div className="p-4 bg-background/30 rounded-lg border border-border hover:border-primary/40 transition-all hover:shadow-md text-center">
                  <span className="text-3xl mb-2 block">❌</span>
                  <strong className="text-primary/90">Hvussu riggar tað í verki?</strong>
                </div>
                <div className="p-4 bg-background/30 rounded-lg border border-border hover:border-primary/40 transition-all hover:shadow-md text-center">
                  <span className="text-3xl mb-2 block">❌</span>
                  <strong className="text-primary/90">Er ritvit ov trupult fyri okkum?</strong>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-xl border border-primary/30 animate-fade-up relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
              
              <p className="text-xl mb-8 text-center font-semibold relative z-10">
                Tað, sum ger okkum øðrvísi:
              </p>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4 p-5 bg-background/30 rounded-xl border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:translate-x-1 group">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary/90 group-hover:text-primary transition-colors mb-1">Vit tosa títt mál</h3>
                    <p className="text-text/80">Ongar torgreiddar forklaringar – bara greið ráðgeving.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-background/30 rounded-xl border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:translate-x-1 group">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary/90 group-hover:text-primary transition-colors mb-1">Vit leggja dent á skjót úrslit</h3>
                    <p className="text-text/80">Tú sært mun beinanvegin.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-background/30 rounded-xl border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:translate-x-1 group">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🇫🇴</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary/90 group-hover:text-primary transition-colors mb-1">Vit kenna føroyska marknaðin</h3>
                    <p className="text-text/80">Vit skilja veruligu avbjóðingarnar.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-background/30 rounded-xl border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:translate-x-1 group">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary/90 group-hover:text-primary transition-colors mb-1">Vit brúka sjálvi ritvit hvønn dag</h3>
                    <p className="text-text/80">Tað her er ikki bara teori – vit vita, hvat riggar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl border-2 border-primary shadow-[0_0_50px_rgba(147,51,234,0.4)] bg-background/95 backdrop-blur-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Klárt at snakka um títt projekt?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-center text-text">
            Lat okkum hjálpa tær at brúka <strong className="text-primary animate-pulse">ritvit til títt fyrimun</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-text py-6 px-8 font-semibold shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]"
              >
                <span className="flex items-center gap-2">
                  Tak samband við okkum <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/20 py-6 px-8 transition-all duration-300"
              >
                Síggj tænastur
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ChatbotButton />
      <Footer />
    </div>
  );
}
