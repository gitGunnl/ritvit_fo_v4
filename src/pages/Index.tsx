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
            Steðga at spilla tíð upp á uppgávur, sum ritvit kann gera fyri teg!
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-up">
            Tú hevur nógv um at vera. Kortini brúkar tú enn tíð upp á at skriva teldupostar,  
            skipa fundarfrágreiðingar og skriva dokumentatión. <strong>Men hví?</strong>  
            <br />
            <br />
            Við KjattGPT kanst tú seta arbeiði á autopilot –  
            og spara <strong>tímar</strong> hvønn mána. Og onki tøkni innlit krevst.  
            <br />
            <br />
            🚀 <strong>Lær at brúka ritvit upp á fáar dagar – og fá meira tíð til tað, sum  
            veruliga hevur týdning.</strong>
          </p>
          <div className="flex justify-center gap-4 animate-fade-up">
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                👉 Tak okkara netskeið nú
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-purple-600 border-purple-600">
                📖 Les meira um skeiði
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
              Byrja við tí týdningarmesta: Lær at brúka ChatGPT
            </h2>
            {/* Course Card */}
            <div className="glass-card overflow-hidden flex flex-col md:flex-row mb-8 hover-lift bg-black/20 border border-purple-500/20">
              {/* Course Screenshot */}
              <div className="md:w-1/2">
                <img
                  src="public/images/course-screenshot.png"
                  alt="Course Screenshot"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Course Info */}
              <div className="p-8 flex flex-col justify-center md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="public/images/ChatGPT-Logo.webp"
                    alt="OpenAI Logo"
                    className="w-10 h-10"
                  />
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
                    Byrjunarskeið í ChatGPT til Føroysk Skrivstovufólk
                  </h3>
                </div>
                <p className="text-gray-300">
                  Lær at brúka ChatGPT gjøgnum eitt serligt samansett skeið – serliga lagað til føroysk skrivstovufólk.
                </p>
              </div>
            </div>
            {/* End of Course Card */}
            <p className="text-xl text-white-600 mb-8">
              Hetta skeiðið er <strong>skjótasti mátin at koma í gongd við ritvit</strong> – og serliga lagað til føroysk skrivstovufólk!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>Lær hvussu tú kann spara tímar hvønn mána</strong> – ímeðan tú ger arbeiði stuttligari.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>Lær í tínum egna tempo</strong> – online, fleksibult og lætt at skilja.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>Tann besti sparringspartnarin</strong> – tú fert ikki at minnast hvussu lívið uttan ChatGPT plagdi at vera.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>Ritvit lærari</strong> – Fá atgongd til ein ritvit-lærara, sum vegleiðir teg alla leiðina.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span>
                  <strong>100% vandaleyst</strong> – pengarnir aftur um skeið ikki er nøgdsamt.
                </span>
              </div>
            </div>
            <p className="text-lg text-white-600 mb-8">
              <strong>Skeiðið ger teg kláran at brúka ritvit frá fyrsta degi – uttan tekniskan forkunnleika.</strong>
            </p>
            <p className="text-lg text-white-600 mb-8">
              📌 <strong>Eyka</strong>: Tú fært eisini ókeypis atgongd til okkara komandi skeið, "Copilot til Føroysk skrivstovufólk"!
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  👉 Keyp skeiðið nú
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-purple-600 border-purple-600">
                  📖 Lær meira um okkara tænastur
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
            Vit hjálpa tær í gongd við AI – uttan mun til hvat støði tú ert á
          </h2>
          <div className="prose prose-lg mx-auto dark:prose-invert text-gray-600 dark:text-gray-300 mb-8">

            <Link to="/services/beginner" className="block mb-6 group">
                <div className="flex items-center justify-between">
                  <p>
                    <strong>📌 Ert tú nýbyrjari?</strong><br />
                    <strong>Tak okkara ChatGPT-skeið</strong> – skjótasti og lættasti háttur at koma í gongd.
                  </p>
                  <ArrowRight className="w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link to="/services/use-cases" className="block mb-6 group">
                <div className="flex items-center justify-between">
                  <p>
                    <strong>📌 Vilt tú síggja, hvussu ritvit kann nýtast í tínari fyritøku?</strong><br />
                    <strong>Vit finna 15 ting júst tú kann brúka ChatGPT til!</strong> - So sparir tú tíðina.
                  </p>
                  <ArrowRight className="w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link to="/services/workshops" className="block mb-6 group">
                <div className="flex items-center justify-between">
                  <p>
                    <strong>📌 Vilt tú hava praktiska venjing?</strong><br />
                    <strong>Verkstovur & fyrilestrar</strong> – Vit vísa øllum tínum toymi, hvussu ritvit kann gera mun.
                  </p>
                  <ArrowRight className="w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link to="/services/automation" className="block mb-6 group">
                <div className="flex items-center justify-between">
                  <p>
                    <strong>📌 Klár/ur at automatisera arbeiðsgongdir?</strong><br />
                    <strong>Ráðgeving & AI-innføring</strong> – Vit hjálpa tær at innlima AI í tína fyritøku.
                  </p>
                  <ArrowRight className="w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                📖 Síggið okkara tænastur
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
