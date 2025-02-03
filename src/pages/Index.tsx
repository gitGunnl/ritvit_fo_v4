import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Zap,
  Users,
  Sun,
  Moon
} from "lucide-react";
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
            Stop med at spilde tid på opgaver, AI kan klare for dig
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-up">
            Du har travlt. Alligevel bruger du stadig tid på at skrive e-mails,
            organisere mødenotater og lave dokumentation manuelt.{" "}
            <strong>Men hvorfor?</strong>
            <br />
            <br />
            Med ChatGPT kan du <strong>sætte opgaver på autopilot</strong> – og
            spare <strong>timer</strong> hver uge. Ingen teknisk viden nødvendig.
            <br />
            <br />
            🚀 <strong>Lær at bruge AI på få dage – og få mere tid til det, der
            betyder noget.</strong>
          </p>
          <div className="flex justify-center gap-4 animate-fade-up">
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                👉 Tag hvores online kursus nu
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-purple-600 border-purple-600">
                📖 Læs mere
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Introduction / Core Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-6">
              Start med det vigtigste: Lær at bruge ChatGPT
            </h2>
            <h3 className="text-xl font-semibold mb-4">
              Býrjunarskeið í ChatGPT til Føroysk Skrivstovufólk
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Dette kursus er <strong>den hurtigste vej til at komme i gang med AI</strong> – skræddersyet til færøske kontorfolk!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>Spar timer hver uge</strong> – Slip for manuelle opgaver.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>Lær i dit eget tempo</strong> – Online, fleksibelt og letforståeligt.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>Bliv mere effektiv</strong> – Brug ChatGPT til e-mails, oversættelser, rapporter og brainstorming.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>AI-assisteret undervisning</strong> – Få adgang til en AI-lærer, der guider dig hele vejen.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>100% risikofrit</strong> – Er du ikke tilfreds, får du pengene tilbage.
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              <strong>Kurset gør dig produktiv med AI fra dag ét – uden tekniske forudsætninger.</strong>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              📌 <strong>Bonus</strong>: Du får adgang til en <strong>dedikeret AI-chatbot</strong>, der besvarer dine spørgsmål undervejs!
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  👉 Køb kurset nu
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-purple-600 border-purple-600">
                  📖 Se vores services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Offers / Services Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Vi hjælper dig igang med AI – uanset hvor du starter
          </h2>
          <div className="prose prose-lg mx-auto dark:prose-invert text-gray-600 dark:text-gray-300 mb-8">
            <p>
              Uanset om du <strong>lige er begyndt</strong> eller allerede <strong>bruger AI</strong>, har vi en løsning, der passer til dig.
            </p>
            <p>
              <strong>🔹 Er du nybegynder?</strong><br />
              📌 <strong>Tag vores ChatGPT-kursus</strong> – en hurtig og effektiv måde at komme i gang på.
            </p>
            <p>
              <strong>🔹 Vil du se, hvordan AI kan bruges i din virksomhed?</strong><br />
              📌 <strong>Få en analyse af dine arbejdsopgaver</strong> og se, hvordan AI kan spare dig tid.
            </p>
            <p>
              <strong>🔹 Vil du have hands-on træning?</strong><br />
              📌 <strong>Workshops & foredrag</strong> – Vi viser hele dit team, hvordan AI kan gøre en forskel.
            </p>
            <p>
              <strong>🔹 Klar til at automatisere processer?</strong><br />
              📌 <strong>Rådgivning & AI-implementering</strong> – Vi hjælper dig med at integrere AI i din virksomhed.
            </p>
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                📖 Se vores services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency / Why Act Now */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            💡 AI udvikler sig hurtigt – lad være med at sakke bagud
          </h2>
          <ul className="list-disc list-inside text-xl text-gray-600 dark:text-gray-300 mb-8">
            <li>
              <strong>AI er allerede her</strong> – virksomheder, der lærer det først, får en kæmpe fordel.
            </li>
            <li>
              <strong>Hvis du ikke gør det, vil dine konkurrenter.</strong>
            </li>
            <li>
              <strong>Vores AI-kursus er den hurtigste vej til at komme i gang.</strong>
            </li>
            <li>
              <strong>Få adgang til en AI-lærer</strong> der hjælper dig undervejs.
            </li>
            <li>
              <strong>100% risikofrit</strong> – hvis du ikke er tilfreds, får du pengene tilbage.
            </li>
          </ul>
          <div className="flex justify-center gap-4">
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                👉 Tag kurset nu
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-purple-600 border-purple-600">
                📖 Se vores services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are / Trust Builder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Hvem står bag?</h2>
          <div className="prose prose-lg mx-auto dark:prose-invert text-gray-600 dark:text-gray-300">
            <p>
              Mit navn er <strong>Gunnleygur Clementsen</strong>, og jeg er <strong>Færøernes første AI-specialist</strong>.
            </p>
            <ul className="list-none mt-6">
              <li>
                🧠 <strong>Jeg har brugt ChatGPT hver dag siden 2022</strong>, da jeg arbejdede som el-ingeniør i Danmark.
              </li>
              <li>
                📈 <strong>Jeg har fulgt AI’s udvikling i over 10 år</strong> og testet de største AI-værktøjer – også dengang de ikke var særlig gode.
              </li>
              <li>
                ⚡ <strong>Jeg startede Tøkni Tænastan</strong> for at hjælpe færøske virksomheder med at udnytte AI’s potentiale.
              </li>
              <li>
                📌 <strong>Jeg fokuserer på praktiske løsninger</strong> – du lærer ikke teori, men hvordan du får AI til at spare dig tid i hverdagen.
              </li>
            </ul>
            <p className="mt-4">
              <strong>AI er ikke fremtiden – det er nutiden.</strong> Skal vi hjælpe din virksomhed i gang?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Skal vi tage en snak?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Kontakt mig</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>info@ditfirma.fo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span>+298 XX XX XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  <span>@DitFirma på Facebook</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/linkedin">
                    <span className="text-purple-600 font-semibold">LinkedIn: Dit Firma</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Send en besked</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Navn:</label>
                  <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">E-mail:</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Besked:</label>
                  <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded-md" required></textarea>
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">
          Tiden er nu – lad os komme i gang!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          AI er <strong>ikke noget, du kan ignorere</strong> – det er allerede en game-changer for dem, der bruger det rigtigt.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 mb-8">
          <li><strong>Vil du lære AI fra bunden?</strong> Tag vores kursus.</li>
          <li><strong>Vil du implementere AI i din virksomhed?</strong> Se vores services.</li>
          <li><strong>Er du i tvivl om, hvor du skal starte?</strong> Kontakt os.</li>
        </ul>
        <div className="flex justify-center gap-4">
          <Link to="/services">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              👉 Køb kurset nu
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg" className="text-purple-600 border-purple-600">
              📖 Se vores services
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          © 2025 <strong>Tøkni Tænastan</strong> – Færøernes første AI-specialist.
        </p>
        <p className="text-sm">
          Vi gør AI simpelt og praktisk – så du kan bruge det med det samme.
        </p>
      </footer>

      {/* Dark Mode Toggle */}
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

      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Index;
