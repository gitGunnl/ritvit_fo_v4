import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import { ArrowRight, Mail, Phone, MessageSquare, CheckCircle2, Clock, Users, Zap, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 animate-fade-up">
            Før din arbejdsplads ind i fremtiden med AI – lokalt forankret i Færøerne
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-up">
            Vi er Færøernes første og eneste virksomhed, der udelukkende arbejder med AI. Uanset om du er nybegynder eller allerede har kendskab til kunstig intelligens, er vi her for at hjælpe dig godt i gang og åbne op for de mange muligheder, AI kan tilbyde.
          </p>
          <Link to="/services">
            <Button size="lg" className="animate-fade-up bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600">
              Tag vores ChatGPT-kursus <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Hvem er vi?</h2>
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Mit navn er [DIT NAVN], og jeg er både stifter og eneste fuldtidsansatte i virksomheden. Jeg har arbejdet med AI i flere år og brænder for at gøre teknologien mere tilgængelig for alle – særligt her på Færøerne. Mine mål er at skabe innovative AI-løsninger, hjælpe lokale virksomheder med at udnytte kunstig intelligens, og på længere sigt være med til at sælge alt fra robotter til selvkørende biler.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Indgående AI-viden</h3>
                <p className="text-gray-600 dark:text-gray-300">Jeg holder mig konstant opdateret om de nyeste tendenser inden for AI.</p>
              </div>
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Praktisk erfaring</h3>
                <p className="text-gray-600 dark:text-gray-300">Jeg bruger AI dagligt i både udvikling og undervisning.</p>
              </div>
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Lokalkendskab</h3>
                <p className="text-gray-600 dark:text-gray-300">Som færing kender jeg vilkårene og behovene her på øerne.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-bl-lg font-medium">
              Anbefalet første skridt
            </div>
            <h2 className="text-3xl font-bold mb-6">Býrjunarskeið í ChatGPT til Føroysk Skrivstovufólk</h2>
            <p className="text-xl text-gray-600 mb-8">
              Det bedste skridt for alle, der er nye inden for AI, er at tage netop dette kursus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Skræddersyet til færøske kontormedarbejdere</h3>
                  <p className="text-gray-600">Lær, hvordan ChatGPT kan effektivisere e-mails, tekstdokumenter og andre opgaver i din hverdag.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Fleksibel online undervisning</h3>
                  <p className="text-gray-600">Du kan lære i dit eget tempo, uden at skulle møde fysisk op.</p>
                </div>
              </div>
            </div>
            <Link to="/services">
              <Button size="lg" className="w-full md:w-auto bg-purple-600 hover:bg-purple-700">
                Tag kurset nu <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Hvad kan AI gøre for dig og din virksomhed?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Automatisér rutineopgaver</h3>
                <p className="text-gray-600 dark:text-gray-300">Lad ChatGPT håndtere gentagne opgaver som e-mails, grundlæggende rapportskrivning og informationssøgning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Effektivisér kontorarbejdet</h3>
                <p className="text-gray-600 dark:text-gray-300">Integrér AI-værktøjer i programmer som Word eller Excel, og få kontrol over tidskrævende processer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Kontakt mig</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>info@ditfirma.fo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span>(+298) XX XX XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  <span>@DitFirma på Facebook</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Send en besked</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Navn"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 border rounded-md"
                />
                <textarea
                  placeholder="Besked"
                  className="w-full p-2 border rounded-md h-32"
                ></textarea>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Send besked
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Toggle */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 bg-white dark:bg-gray-800"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>

      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Index;
