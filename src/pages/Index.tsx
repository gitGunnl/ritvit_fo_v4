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
            Vit hjálpa tær í gongd við ritvit – uttan mun til hvat støði tú ert á
          </h2>
          <div className="prose prose-lg mx-auto dark:prose-invert text-gray-600 dark:text-gray-300 mb-8">

            <Link to="/services/beginner" className="block mb-6 group">
                <div className="flex flex-col">
                  <p className="mb-1">
                    <strong>📌 Ert tú nýbyrjari?</strong>
                  </p>
                  <div className="flex items-center">
                    <p>
                      <strong>Tak okkara ChatGPT-skeið</strong> – skjótasti og lættasti háttur at koma í gongd. <ArrowRight className="inline w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1 ml-1" />
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/services/use-cases" className="block mb-6 group">
                <div className="flex flex-col">
                  <p className="mb-1">
                    <strong>📌 Vilt tú bara finna útav hvussu ritvit kann hjálpa júst tær?</strong>
                  </p>
                  <div className="flex items-center">
                    <p>
                      <strong>Vit finna 15 ting júst tú kann brúka ChatGPT til!</strong> - so kemur tú ígong á besta hátt. <ArrowRight className="inline w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1 ml-1" />
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/services/workshops" className="block mb-6 group">
                <div className="flex flex-col">
                  <p className="mb-1">
                    <strong>📌 Vilt tú hava praktiska venjing?</strong>
                  </p>
                  <div className="flex items-center">
                    <p>
                      <strong>Verkstovur & fyrilestrar</strong> – Vit vísa øllum tínum toymi, hvussu ritvit kann gera mun fyri tykkum. <ArrowRight className="inline w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1 ml-1" />
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/services/automation" className="block mb-6 group">
                <div className="flex flex-col">
                  <p className="mb-1">
                    <strong>📌 Ella vilt tú sjálvirka arbeiðsgongdir?</strong>
                  </p>
                  <div className="flex items-center">
                    <p>
                      <strong>Ráðgeving</strong> – Vit hjálpa tær at at fáa ritvit at gera tað keðiliga arbeiði. <ArrowRight className="inline w-5 h-5 text-purple-600 transform transition-transform group-hover:translate-x-1 ml-1" />
                    </p>
                  </div>
                </div>
              </Link>
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                📖 Les meira um okkara tænastur her!
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Urgency / Why Act Now */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 dark:text-white">
                  💡 Ritvit mennist skjótt – ikki sova í tímanum!
                </h2>
                <ul className="list-disc list-inside text-xl text-gray-600 dark:text-gray-300 mb-8">
                  <li>
                    <strong>Ritvit er longu her</strong> – fyritøkur, sum læra tað nú, fáa ein stóran fyrimun.
                  </li>
                  <li>
                    <strong>Um tú ikki gert tað, so gera tínir kappingarneytar tað.</strong>
                  </li>
                  <li>
                    <strong>Okkara ritvit-skeið er skjótasta og lættasta leiðin at koma í gongd.</strong>
                  </li>
                  <li>
                    <strong>Fá atgongd til ein ritvit-lærara</strong> sum hjálpir tær á vegnum.
                  </li>
                  <li>
                    <strong>100% vandaleyst</strong> – um skeiði ikki er nøgdandi so fært tú pengarnar aftur.
                  </li>
                </ul>
                <div className="flex justify-center gap-4">
                  <Link to="/services">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                      👉 Tak skeiðið nú
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="text-purple-600 border-purple-600">
                      📖 Síggj okkara tænastur
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

      {/* Who We Are / Trust Builder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Hvør stendur aftanfyri?</h2>
          <div className="prose prose-lg mx-auto dark:prose-invert text-gray-600 dark:text-gray-300">
            <p>
              Eg eiti <strong>Gunnleygur Clementsen</strong>, og tað er nokk eingin sum hevur spælt meira við ritvit amboð í Føroya enn eg.
            </p>
            <ul className="list-none mt-6">
              <li>
                🧠 <strong>Eg havi brúkt ChatGPT so at siga hvønn dag síðan 2022</strong>, fyrst tá ið eg arbeiddi sum el-verkfrøðingur í Danmark. Og í dag ígjøgnum mína fyritøku sum bara arbeiður við ritvit øki.
              </li>
              <li>
                📈 <strong>Eg havi fylgt við í menningini av ritvit í meira enn 10 ár</strong> og roynt fleiri hundra ritvit-amboð – eisini tá ið tey ikki nýttaðu nakað.
              </li>
              <li>
                ⚡ <strong>Eg stovnaði Tøkni Tænastuna</strong> fyri at hjálpa føroyskum fyritøkum at gagnnýta møguleikarnar við ritvit.
              </li>
              <li>
                📌 <strong>Eg leggi dent á praktiskar loysnir</strong> – tú lærir ikki teori, men hvussu tú kanst brúka ritvit til at spara tíð í gerandisdegnum og gera arbeiði stuttligari.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Ritvit er ikki framtíðin – tað er nútíðin.</strong> So fá fingurin úr reyvuni og kom ígongd.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Skula vit taka eitt prát?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Fá samband her:</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>info@ritvit.fo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span>+298 919444</span>
                </div>
                <div className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                  <a href="https://www.facebook.com/profile.php?id=61557593776267" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-600">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                  <a href="https://linkedin.com/company/t%C3%B8kni-t%C3%A6nastan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-600">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
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

      {/* Style 4: Smooth Glass */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 my-8">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 p-12 rounded-2xl border border-white/20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Tíðin er røtt nú – lat okkum býrja!
          </h2>
          <p className="text-xl mb-12 text-center">
            Ritvit er <strong>ikki nakað, tú kanst skoyta til viks</strong> – tað hevur longu broytt spælið.
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 p-4 bg-white/20 dark:bg-gray-800/20 rounded-lg hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors">
              <span className="text-2xl">🎓</span>
              <div>
                <h3 className="font-bold">Vilt tú læra ritvit frá grundini?</h3>
                <p>Tekna teg til okkara skeið</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/20 dark:bg-gray-800/20 rounded-lg hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="font-bold">Vilt tú innføra ritvit í tína fyritøku?</h3>
                <p>Hygg eftir okkara tænastum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/20 dark:bg-gray-800/20 rounded-lg hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors">
              <span className="text-2xl">❓</span>
              <div>
                <h3 className="font-bold">Ert tú í iva?</h3>
                <p>Set teg í samband við okkum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white/90 hover:bg-white text-purple-600 font-bold">
              👉 Keyp skeiðið nú
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/90 text-white hover:bg-white/10">
              📖 Sí okkara tænastur
            </Button>
          </div>
        </div>
      </section>

      {/* Style 5: Bold Dark */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-indigo-900 my-8">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-black/40 p-12 rounded-2xl border-2 border-purple-500/50">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Tíðin er røtt nú – lat okkum býrja!
          </h2>
          <p className="text-xl mb-12 text-center text-purple-100">
            Ritvit er <strong>ikki nakað, tú kanst skoyta til viks</strong> – tað hevur longu broytt spælið.
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 p-4 bg-purple-800/30 rounded-lg hover:bg-purple-700/40 transition-colors border border-purple-500/30">
              <span className="text-2xl">🎓</span>
              <div className="text-white">
                <h3 className="font-bold">Vilt tú læra ritvit frá grundini?</h3>
                <p className="text-purple-200">Tekna teg til okkara skeið</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-300" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-800/30 rounded-lg hover:bg-purple-700/40 transition-colors border border-purple-500/30">
              <span className="text-2xl">💼</span>
              <div className="text-white">
                <h3 className="font-bold">Vilt tú innføra ritvit í tína fyritøku?</h3>
                <p className="text-purple-200">Hygg eftir okkara tænastum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-300" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-800/30 rounded-lg hover:bg-purple-700/40 transition-colors border border-purple-500/30">
              <span className="text-2xl">❓</span>
              <div className="text-white">
                <h3 className="font-bold">Ert tú í iva?</h3>
                <p className="text-purple-200">Set teg í samband við okkum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-300" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white font-bold border-2 border-purple-400">
              👉 Keyp skeiðið nú
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-purple-400 text-purple-200 hover:bg-purple-800/50">
              📖 Sí okkara tænastur
            </Button>
          </div>
        </div>
      </section>

      {/* Style 6: Neon Glow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black my-8">
        <div className="max-w-4xl mx-auto p-12 rounded-2xl border-2 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Tíðin er røtt nú – lat okkum býrja!
          </h2>
          <p className="text-xl mb-12 text-center text-purple-300">
            Ritvit er <strong className="text-purple-400">ikki nakað, tú kanst skoyta til viks</strong> – tað hevur longu broytt spælið.
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 p-4 bg-purple-950 rounded-lg hover:bg-purple-900 transition-colors border border-purple-500">
              <span className="text-2xl">🎓</span>
              <div className="text-white">
                <h3 className="font-bold text-purple-300">Vilt tú læra ritvit frá grundini?</h3>
                <p>Tekna teg til okkara skeið</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-400" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-950 rounded-lg hover:bg-purple-900 transition-colors border border-purple-500">
              <span className="text-2xl">💼</span>
              <div className="text-white">
                <h3 className="font-bold text-purple-300">Vilt tú innføra ritvit í tína fyritøku?</h3>
                <p>Hygg eftir okkara tænastum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-400" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-950 rounded-lg hover:bg-purple-900 transition-colors border border-purple-500">
              <span className="text-2xl">❓</span>
              <div className="text-white">
                <h3 className="font-bold text-purple-300">Ert tú í iva?</h3>
                <p>Set teg í samband við okkum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-[0_0_20px_rgba(147,51,234,0.5)]">
              👉 Keyp skeiðið nú
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-purple-500 text-purple-300 hover:bg-purple-950">
              📖 Sí okkara tænastur
            </Button>
          </div>
        </div>
      </section>

      {/* Style 7: Sharp Modern */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-purple-900 my-8">
        <div className="max-w-4xl mx-auto p-12 rounded-none border-l-4 border-r-4 border-purple-500">
          <h2 className="text-4xl font-bold mb-8 text-center text-white tracking-tight">
            Tíðin er røtt nú – lat okkum býrja!
          </h2>
          <p className="text-xl mb-12 text-center text-gray-300">
            Ritvit er <strong className="text-purple-400">ikki nakað, tú kanst skoyta til viks</strong> – tað hevur longu broytt spælið.
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 p-4 bg-black/40 hover:bg-black/60 transition-colors border-l-2 border-purple-500">
              <span className="text-2xl">🎓</span>
              <div className="text-white">
                <h3 className="font-bold">Vilt tú læra ritvit frá grundini?</h3>
                <p className="text-gray-400">Tekna teg til okkara skeið</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-500" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-black/40 hover:bg-black/60 transition-colors border-l-2 border-purple-500">
              <span className="text-2xl">💼</span>
              <div className="text-white">
                <h3 className="font-bold">Vilt tú innføra ritvit í tína fyritøku?</h3>
                <p className="text-gray-400">Hygg eftir okkara tænastum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-500" />
            </div>
            <div className="flex items-center gap-4 p-4 bg-black/40 hover:bg-black/60 transition-colors border-l-2 border-purple-500">
              <span className="text-2xl">❓</span>
              <div className="text-white">
                <h3 className="font-bold">Ert tú í iva?</h3>
                <p className="text-gray-400">Set teg í samband við okkum</p>
              </div>
              <ArrowRight className="ml-auto w-6 h-6 text-purple-500" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold border-b-4 border-purple-800">
              👉 Keyp skeiðið nú
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-purple-500 text-white hover:bg-purple-900/50">
              📖 Sí okkara tænastur
            </Button>
          </div>
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
