import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import { ArrowRight, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 animate-fade-up">
            Steðga at spilla tíð upp á uppgávur, sum ritvit kann gera fyri teg!
          </h1>

          <p className="animate-fade-up mt-2 text-text/80">
            🚀 <strong>Lær at brúka ritvit upp á fáar dagar – og fá meira tíð til tað, sum veruliga hevur týdning.</strong>
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 animate-fade-up mt-8">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-text">
                👉 Tak okkara netskeið nú
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-primary border border-primary">
                📖 Les meira um skeiði
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Introduction / Core Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Glass-like card */}
          <div className="bg-primary/10 p-8 md:p-12 relative overflow-hidden border border-border backdrop-blur-sm rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Byrja við tí týdningarmesta: Lær at brúka ChatGPT
            </h2>

            {/* Course Card */}
            <div className="flex flex-col md:flex-row mb-8 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-lg hover-lift overflow-hidden">
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
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                    Byrjunarskeið í ChatGPT til Føroysk Skrivstovufólk
                  </h3>
                </div>
                <p className="text-text/80">
                  Lær at brúka ChatGPT gjøgnum eitt serligt samansett skeið – serliga lagað til føroysk skrivstovufólk.
                </p>
              </div>
            </div>
            {/* End of Course Card */}

            <p className="text-xl text-text/80 mb-8">
              Hetta skeiðið er <strong>skjótasti mátin at koma í gongd við ritvit</strong> – og serliga lagað til føroysk skrivstovufólk!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>
                  <strong>Lær hvussu tú kann spara tímar hvønn mána</strong> – ímeðan tú ger arbeiði stuttligari.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>
                  <strong>Lær í tínum egna tempo</strong> – online, fleksibult og lætt at skilja.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>
                  <strong>Tann besti sparringspartnarin</strong> – tú fert ikki at minnast hvussu lívið uttan ChatGPT plagdi at vera.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>
                  <strong>Ritvit lærari</strong> – Fá atgongd til ein ritvit-lærara, sum vegleiðir teg alla leiðina.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>
                  <strong>100% vandaleyst</strong> – pengarnir aftur um skeið ikki er nøgdsamt.
                </span>
              </div>
            </div>
            <p className="text-lg text-text/80 mb-8">
              <strong>Skeiðið ger teg kláran at brúka ritvit frá fyrsta degi – uttan tekniskan forkunnleika.</strong>
            </p>
            <p className="text-lg text-text/80 mb-8">
              📌 <strong>Eyka</strong>: Tú fært eisini ókeypis atgongd til okkara komandi skeið, "Copilot til Føroysk skrivstovufólk"!
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-text">
                  👉 Keyp skeiðið nú
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary border border-primary"
                >
                  📖 Lær meira um okkara tænastur
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Offers / Services Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Vit hjálpa tær í gongd við ritvit – uttan mun til hvat støði tú ert á
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition">
              <span className="text-3xl mr-4">📌</span>
              <div>
                <p className="font-bold">Ert tú nýbyrjari?</p>
                <p>
                  <Link to="/services#chatgpt-course" className="text-accent hover:underline">
                    <strong>Tak okkara ChatGPT-skeið</strong> – skjótasti og lættasti háttur at koma í gongd.
                  </Link>
                </p>
              </div>
            </li>
            <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition">
              <span className="text-3xl mr-4">📌</span>
              <div>
                <p className="font-bold">Vilt tú bara finna útav hvussu ritvit kann hjálpa júst tær?</p>
                <p>
                  <Link to="/services#ai-analysis" className="text-accent hover:underline">
                    <strong>Vit finna 15 ting júst tú kann brúka ChatGPT til!</strong> - so kemur tú ígong á besta hátt.
                  </Link>
                </p>
              </div>
            </li>
            <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition">
              <span className="text-3xl mr-4">📌</span>
              <div>
                <p className="font-bold">Vilt tú hava praktiska venjing?</p>
                <p>
                  <Link to="/services#workshops" className="text-accent hover:underline">
                    <strong>Verkstovur & fyrilestrar</strong> – Vit vísa øllum tínum toymi, hvussu ritvit kann gera mun fyri tykkum.
                  </Link>
                </p>
              </div>
            </li>
            <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition">
              <span className="text-3xl mr-4">📌</span>
              <div>
                <p className="font-bold">Ella vilt tú sjálvirka arbeiðsgongdir?</p>
                <p>
                  <Link to="/services#consulting" className="text-accent hover:underline">
                    <strong>Ráðgeving</strong> – Vit hjálpa tær at fáa ritvit at gera tað keðiliga arbeiði.
                  </Link>
                </p>
              </div>
            </li>
          </ul>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-text">
                📖 Les meira um okkara tænastur her!
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Urgency / Why Act Now */}
      <section className="py-20 px-8 my-16 mx-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-primary">
            💡 Ritvit mennist skjótt – ikki sova í tímanum!
          </h2>
          <p className="text-xl font-semibold text-text mb-8">
            Ritvit er longu her – fyritøkur, sum læra tað nú, fáa ein stóran fyrimun.
          </p>
          <p className="text-lg text-text/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Okkara ritvit-skeið er skjótasta og lættasta leiðin at koma í gongd. 
            Við atgongd til ein ritvit-lærara og 100% peningaafturgjald um tú ikki ert nøgd/ur.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-text">
                👉 Tak skeiðið nú
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-primary border border-primary">
                📖 Síggj okkara tænastur
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Who We Are / Trust Builder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Hvør stendur aftanfyri?</h2>
          <div className="prose prose-lg mx-auto text-text/80">
            <p>
              Eg eiti <strong>Gunnleygur Clementsen</strong>, og tað er nokk eingin sum
              hefur spælt meira við ritvit amboð í Føroya enn eg.
            </p>
            <ul className="list-none mt-6 space-y-2">
              <li>
                🧠 <strong>Eg havi brúkt ChatGPT so at siga hvønn dag síðan 2022</strong>,
                fyrst tá ið eg arbeiddi sum el-verkfrøðingur í Danmark. Og í dag
                ígjøgnum mína fyritøku sum bara arbeiður við ritvit øki.
              </li>
              <li>
                📈{" "}
                <strong>
                  Eg havi fylgt við í menningini av ritvit í meira enn 10 ár
                </strong>{" "}
                og roynt fleiri hundra ritvit-amboð – eisini tá ið tey ikki nýttaðu
                nakað.
              </li>
              <li>
                ⚡ <strong>Eg stovnaði Tøkni Tænastuna</strong> fyri at hjálpa
                føroyskum fyritøkum at gagnnýta møguleikarnar við ritvit.
              </li>
              <li>
                📌{" "}
                <strong>Eg leggi dent á praktiskar loysnir</strong> – tú lærir ikki
                teori, men hvussu tú kanst brúka ritvit til at spara tíð í
                gerandisdegnum og gera arbeiði stuttligari.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Ritvit er ikki framtíðin – tað er nútíðin.</strong> So fá
              fingurin úr reyvuni og kom ígongd.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skula vit taka eitt prát?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-primary/10 p-8 border border-border backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Fá samband her:</h3>
              <div className="space-y-4 text-text/80">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@ritvit.fo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+298 919444</span>
                </div>
                <div className="flex items-center gap-3 transition-colors">
                  <a
                    href="https://www.facebook.com/profile.php?id=61557593776267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="flex items-center gap-3 transition-colors">
                  <a
                    href="https://linkedin.com/company/t%C3%B8kni-t%C3%A6nastan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary/10 p-8 border border-border backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Send en besked</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Navn:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-border rounded-md bg-background text-text"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    E-mail:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-border rounded-md bg-background text-text"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Besked:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2 border border-border rounded-md bg-background text-text"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-text"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Neon Glow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-text/90 my-8">
        <div className="max-w-4xl mx-auto p-12 rounded-2xl border-2 border-primary shadow-[0_0_30px_rgba(147,51,234,0.3)] bg-background">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Tíðin er røtt nú – lat okkum býrja!
          </h2>
          <p className="text-xl mb-12 text-center text-primary/80">
            Ritvit er <strong className="text-primary">ikki nakað, tú kanst skoyta til viks</strong> – tað hevur longu broytt spælið.
          </p>
          <div className="space-y-6 mb-12">
            <Link to="/services" className="block">
              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary">
                <span className="text-2xl">🎓</span>
                <div className="text-text">
                  <h3 className="font-bold text-primary/80">Vilt tú læra ritvit frá grundini?</h3>
                  <p>Tekna teg til okkara skeið</p>
                </div>
                <ArrowRight className="ml-auto w-6 h-6 text-primary" />
              </div>
            </Link>
            <Link to="/services" className="block">
              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary">
                <span className="text-2xl">💼</span>
                <div className="text-text">
                  <h3 className="font-bold text-primary/80">Vilt tú innføra ritvit í tína fyritøku?</h3>
                  <p>Hygg eftir okkara tænastum</p>
                </div>
                <ArrowRight className="ml-auto w-6 h-6 text-primary" />
              </div>
            </Link>
            <Link to="/contact" className="block">
              <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors border border-primary">
                <span className="text-2xl">❓</span>
                <div className="text-text">
                  <h3 className="font-bold text-primary/80">Ert tú í iva?</h3>
                  <p>Set teg í samband við okkum</p>
                </div>
                <ArrowRight className="ml-auto w-6 h-6 text-primary" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-text font-bold shadow-[0_0_20px_rgba(147,51,234,0.5)]"
            >
              👉 Keyp skeiðið nú
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/20"
            >
              📖 Sí okkara tænastur
            </Button>
          </div>
        </div>
      </section>

      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default Index;
