// src/pages/about.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function About() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-down">
            Om os
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-down text-gray-300">
            Vi bringer AI til Færøerne – og videre
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300 animate-fade-down">
            AI ændrer verden. Vi sørger for, at Færøerne ikke halter bagefter.
          </p>
        </div>
      </section>

      {/* Introduktion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-purple-500/20 animate-fade-up">
            <p className="text-lg mb-4">
              Vi startede <strong>Tøkni Tænastan</strong> af én simpel grund:
            </p>
            <p className="text-lg mb-4">
              <strong>
                At hjælpe færøske virksomheder med at udnytte AI – uden bøvl, uden hype, uden unødvendigt teknisk snak.
              </strong>
            </p>
            <p className="text-lg mb-4">
              Sandheden? <strong>AI er her allerede.</strong> Og dem, der lærer at bruge det først, får et stort forspring.
            </p>
            <p className="text-lg">
              Derfor gør vi AI <strong>simpelt, brugbart og praktisk</strong> – så virksomheder kan <strong>spare tid, arbejde smartere og få tingene gjort hurtigere</strong>.
            </p>
            <p className="text-lg mt-4">
              🚀 <strong>Ingen teknisk viden nødvendig. Ingen dyre konsulenter. Bare AI, der fungerer.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Vores historie */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-down">
            Vores historie: Fra nysgerrighed til innovation
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-purple-500/20 animate-fade-up">
            <h3 className="text-2xl font-semibold mb-4">Mød Gunnleygur</h3>
            <p className="text-lg mb-4">
              Jeg har altid været besat af <strong>ny teknologi</strong> – alt det, der ændrer måden, vi arbejder og lever på.
            </p>
            <p className="text-lg mb-4">
              Som ingeniør arbejdede jeg med avancerede systemer, men intet fascinerede mig som AI.
            </p>
            <p className="text-lg mb-4">Så en dag gik det op for mig:</p>
            <ul className="list-disc ml-6 text-lg mb-4">
              <li>
                💡 <strong>AI er ikke kun for store tech-giganter.</strong>
              </li>
              <li>
                💡 <strong>AI er ikke kun fremtidssnak – det er lige nu.</strong>
              </li>
              <li>
                💡 <strong>AI kan bruges i alle virksomheder, også på Færøerne.</strong>
              </li>
            </ul>
            <p className="text-lg mb-4">
              Problemet? <strong>De fleste har ikke tid til at sætte sig ind i det.</strong>
            </p>
            <p className="text-lg mt-4">
              Derfor startede jeg <strong>Tøkni Tænastan</strong> – for at bygge bro mellem{" "}
              <strong>AI’s potentiale</strong> og{" "}
              <strong>de reelle behov i færøske virksomheder</strong>.
            </p>
            <p className="text-lg mt-4">
              Nu hjælper vi virksomheder med at{" "}
              <strong>automatisere opgaver, effektivisere deres arbejde og udnytte AI’s fulde kraft</strong> – så de kan fokusere på det, der virkelig betyder noget.
            </p>
          </div>
        </div>
      </section>

      {/* Vores mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-purple-500/20 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Vores mission: AI for alle</h2>
            <p className="text-lg mb-4">
              AI er ikke kun for <strong>Silicon Valley</strong>. Det er for din virksomhed. Dit team. Din hverdag.
            </p>
            <p className="text-lg mb-4">
              Vores mål hos <strong>Tøkni Tænastan</strong> er at:
            </p>
            <ul className="list-disc ml-6 text-lg mb-4">
              <li>
                ✅ <strong>Gøre AI nemt og tilgængeligt</strong> for alle.
              </li>
              <li>
                ✅ <strong>Hjælpe virksomheder med at spare tid og ressourcer</strong> – uden at ansætte ekstra personale.
              </li>
              <li>
                ✅ <strong>Lave AI-løsninger, der rent faktisk virker i praksis.</strong>
              </li>
            </ul>
            <p className="text-lg">
              Vi sælger ikke bare "AI-rådgivning". Vi <strong>træner, implementerer og bygger</strong> løsninger, der giver <strong>konkrete resultater</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Hvad gør os anderledes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-purple-500/20 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Hvad gør os anderledes?</h2>
            <p className="text-lg mb-4">
              AI er <strong>overalt</strong>, men de fleste virksomheder kæmper med de samme udfordringer:
            </p>
            <ul className="list-disc ml-6 text-lg mb-4">
              <li>
                ❌ <strong>Hvor starter vi?</strong>
              </li>
              <li>
                ❌ <strong>Hvordan fungerer det i praksis?</strong>
              </li>
              <li>
                ❌ <strong>Er AI for komplekst for os?</strong>
              </li>
            </ul>
            <p className="text-lg mb-4">Her er, hvad der gør os anderledes:</p>
            <ul className="list-disc ml-6 text-lg">
              <li>
                💡 <strong>Vi taler dit sprog.</strong> Ingen kompliceret AI-snak – kun klar, brugbar vejledning.
              </li>
              <li>
                🚀 <strong>Vi fokuserer på små, hurtige sejre.</strong> AI behøver ikke være et stort projekt. Vi starter med én ting, du kan automatisere nu – så du ser resultater med det samme.
              </li>
              <li>
                🇫🇴 <strong>Vi forstår det færøske marked.</strong> Internationale AI-firmaer kan give generelle råd, men vi kender <strong>de faktiske udfordringer</strong> og <strong>den unikke færøske arbejdskultur</strong>.
              </li>
              <li>
                🤖 <strong>Vi bruger selv AI hver dag.</strong> Det her er ikke teori. Vi har testet, bygget og optimeret AI-løsninger, så vi ved præcis, hvad der virker – og hvad der ikke gør.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hvor vi er på vej hen */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-purple-500/20 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Hvor vi er på vej hen: AI’s fremtid på Færøerne
            </h2>
            <p className="text-lg mb-4">
              Vi hjælper ikke bare virksomheder <strong>i dag</strong> – vi bygger <strong>for fremtiden</strong>.
            </p>
            <ul className="list-disc ml-6 text-lg mb-4">
              <li>
                🚀 <strong>Uddanne en hel generation af færøske medarbejdere i AI.</strong>
              </li>
              <li>
                🤖 <strong>Udvikle skræddersyede AI-værktøjer til færøske brancher.</strong>
              </li>
              <li>
                🌍 <strong>Udbrede færøsk AI-ekspertise til resten af verden.</strong>
              </li>
            </ul>
            <p className="text-lg">
              Og måske, bare måske…<br />
              🦾 <strong>Bygge robotter. Selvstyrende systemer. Den næste store AI-innovation.</strong>
              <br />
              Hey, man skal jo drømme stort, ikke?
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600/20 to-indigo-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-up">
            Vil du arbejde smartere? Lad os tage en snak.
          </h2>
          <p className="text-lg mb-8 animate-fade-up">
            Er du klar til at:
          </p>
          <ul className="list-disc ml-6 text-lg mb-8 animate-fade-up">
            <li>✅ Stoppe med at spilde tid på gentagne opgaver?</li>
            <li>✅ Få AI til at hjælpe dig med e-mails, rapporter og oversættelser?</li>
            <li>✅ Komme foran dine konkurrenter?</li>
          </ul>
          <p className="text-lg mb-8 animate-fade-up">
            Så er vi klar til at hjælpe.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-up">
            <Link to="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Send os en besked
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-purple-600 border-purple-600">
                Book et møde
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Se vores services
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-purple-600 border-purple-600">
                Tag kurset
              </Button>
            </Link>
          </div>
          <p className="text-lg mt-8 animate-fade-up">
            🚀 Fremtiden for AI på Færøerne starter nu. Er du med?
          </p>
        </div>
      </section>

      {/* Theme Toggle */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 bg-white dark:bg-gray-800"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <Footer />
    </div>
  );
}
