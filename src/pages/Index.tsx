import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import { ArrowRight, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"; // Added imports


const Index = () => {
  const signupUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfDtowxpOMTXaccvE49FM-e-LC9Hb6-pWO-E8Rr2jyOlgJnLg/viewform?usp=sf_link";

const openSignupForm = () => {
  window.open(signupUrl, '_blank', 'noopener,noreferrer');
};

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      {/* Hero Section - Enhanced with Animations */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)] opacity-80 animate-pulse [animation-duration:8s]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--accent)_0%,_transparent_70%)] opacity-30 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 z-10">
          <div className="inline-block mb-8 px-8 py-3 bg-primary/20 backdrop-blur-sm rounded-full animate-fade-down border border-primary/30 shadow-lg shadow-primary/10">
            <span className="text-primary font-semibold tracking-wide">Nýtt skeið byrjar skjótt!</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-up leading-tight drop-shadow-md">
            Steðga at spilla tíð upp á uppgávur, sum 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent px-2 whitespace-nowrap">ritvit</span> 
            kann gera fyri teg!
          </h1>
          <p className="text-xl mb-10 text-text/90 animate-fade-up [animation-delay:200ms] max-w-3xl mx-auto">
            Lær at brúka ritvit upp á fáar dagar – og fá meira tíð til tað, sum veruliga hevur týdning fyri teg.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-up [animation-delay:400ms]">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-text group transition-all duration-300 shadow-lg shadow-primary/20 border border-primary/80 px-8 py-6"
              onClick={openSignupForm}
            >
              <span className="group-hover:translate-x-2 transition-transform flex items-center gap-2">
                Skriva teg upp til net skeið
                <ArrowRight className="w-5 h-5 inline-block" />
              </span>
            </Button>
            <Link to="/aboutCourse">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/70 text-primary hover:bg-primary/10 px-8 py-6 backdrop-blur-sm"
              >
                Les meira um skeiði
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Introduction / Core Offer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background/30">
        <div className="max-w-7xl mx-auto">
          {/* Glass-like card with enhanced styling */}
          <div className="bg-primary/10 p-8 md:p-12 relative overflow-hidden border border-primary/30 backdrop-blur-sm rounded-xl shadow-xl shadow-primary/5">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-accent/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10 drop-shadow-sm">
              Byrja við tí týdningarmesta: Lær at brúka ChatGPT
            </h2>

            {/* Course Card - Enhanced */}
            <div className="flex flex-col md:flex-row mb-12 bg-primary/5 border-2 border-primary/20 backdrop-blur-sm rounded-xl hover-lift overflow-hidden shadow-lg transition-all duration-500 hover:shadow-primary/20">
              {/* Course Screenshot with overlay effect */}
              <div className="md:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="/images/course-screenshot.png"
                  alt="Course Screenshot"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Course Info - Enhanced */}
              <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2 bg-background/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-background/50 rounded-full shadow-inner">
                    <img
                      src="/images/ChatGPT-Logo.webp"
                      alt="OpenAI Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary via-primary/90 to-accent text-transparent bg-clip-text">
                    Byrjunarskeið í ChatGPT til Føroysk Skrivstovufólk
                  </h3>
                </div>
                <p className="text-text/80 text-lg leading-relaxed">
                  Lær at brúka ChatGPT gjøgnum eitt serligt samansett skeið – serliga lagað til føroysk skrivstovufólk.
                </p>
              </div>
            </div>
            {/* End of Enhanced Course Card */}

            <p className="text-xl text-text/90 mb-10 leading-relaxed">
              Hetta skeiðið er skjótasti háttur at koma í gongd við ritvit – og serliga lagað til føroysk skrivstovufólk!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary/90 mb-1">Spar tímar hvønn mána</h4>
                  <p className="text-text/80">Lær hvussu tú kann spara tímar hvønn mána – ímeðan tú ger arbeiði stuttligari.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary/90 mb-1">Lær í tínum egna tempo</h4>
                  <p className="text-text/80">Online, fleksibult og lætt at skilja – tilpassað tær.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary/90 mb-1">Tann besti sparringspartnarin</h4>
                  <p className="text-text/80">Tú fert ikki at minnast hvussu lívið uttan ChatGPT plagdi at vera.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary/90 mb-1">Ritvit lærari</h4>
                  <p className="text-text/80">Fá atgongd til ein ritvit-lærara, sum vegleiðir teg alla leiðina.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group md:col-span-2">
                <div className="bg-primary/20 p-3 rounded-full mt-1 group-hover:bg-primary/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary/90 mb-1">100% vandaleyst</h4>
                  <p className="text-text/80">Pengarnir aftur um skeið ikki er nøgdsamt – vit vilja at tú ert nøgd/ur.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg mb-10 shadow-inner">
              <p className="text-lg mb-2">
                <strong className="text-text">Skeiðið ger teg kláran at brúka ritvit frá fyrsta degi – uttan tekniskan forkunnleika.</strong>
              </p>
              <p className="text-lg flex items-center gap-2">
                <span className="text-2xl">📌</span> 
                <span>
                  <strong className="text-accent">Eyka bonus:</strong> Tú fært eisini ókeypis atgongd til okkara komandi skeið, "Copilot til Føroysk skrivstovufólk"!
                </span>
              </p>
            </div>
            {/*Removed Form Here*/}
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
            <Link to="/aboutCourse" className="block">
              <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition cursor-pointer">
                <span className="text-3xl mr-4">📌</span>
                <div>
                  <p className="font-bold">Ert tú nýbyrjari?</p>
                  <p>
                    <strong>Tak okkara ChatGPT-skeið</strong> – skjótasti og lættasta háttur at koma í gongd.
                  </p>
                </div>
              </li>
            </Link>
            <Link to="/services#ai-analysis" className="block">
              <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition cursor-pointer">
                <span className="text-3xl mr-4">📌</span>
                <div>
                  <p className="font-bold">Vilt tú bara finna útav hvussu ritvit kann hjálpa júst tær?</p>
                  <p>
                    <strong>Vit finna 15 ting júst tú kann brúka ChatGPT til!</strong> - so kemur tú ígong á besta hátt.
                  </p>
                </div>
              </li>
            </Link>
            <Link to="/services#workshops" className="block">
              <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition cursor-pointer">
                <span className="text-3xl mr-4">📌</span>
                <div>
                  <p className="font-bold">Vilt tú hava praktiska venjing?</p>
                  <p>
                    <strong>Verkstovur & fyrilestrar</strong> – Vit vísa øllum tínum toymi, hvussu ritvit kann gera mun fyri tykkum.
                  </p>
                </div>
              </li>
            </Link>
            <Link to="/services#consulting" className="block">
              <li className="flex items-start p-4 border rounded-lg hover:bg-primary/20 transition cursor-pointer">
                <span className="text-3xl mr-4">📌</span>
                <div>
                  <p className="font-bold">Ella vilt tú sjálvirka arbeiðsgongdir?</p>
                  <p>
                    <strong>Ráðgeving</strong> – Vit hjálpa tær at fáa ritvit at gera tað keðiliga arbeiði.
                  </p>
                </div>
              </li>
            </Link>
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
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/services" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-text">
                👉 Tak skeiðið nú
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-primary border border-primary">
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

      {/* Contact Section - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skula vit taka eitt prát?</h2>
            <p className="text-text/70 max-w-xl mx-auto">Fá skjóta vegleiðing um, hvussu vit kunnu hjálpa tær at loysa tínar avbjóðingar við ritvit</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details - Enhanced */}
            <div className="bg-primary/10 p-8 border border-primary/30 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 border-b border-border pb-3">Fá samband her:</h3>
              <div className="space-y-6 text-text/80">
                <a href="mailto:info@ritvit.fo" className="flex items-center gap-4 p-3 hover:bg-primary/10 rounded-lg transition-colors group">
                  <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors">info@ritvit.fo</span>
                </a>
                
                <a href="tel:+298919444" className="flex items-center gap-4 p-3 hover:bg-primary/10 rounded-lg transition-colors group">
                  <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors">+298 919444</span>
                </a>
                
                <a
                  href="https://www.facebook.com/profile.php?id=61557593776267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 hover:bg-primary/10 rounded-lg transition-colors group"
                >
                  <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors">Facebook</span>
                </a>
                
                <a
                  href="https://linkedin.com/company/t%C3%B8kni-t%C3%A6nastan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 hover:bg-primary/10 rounded-lg transition-colors group"
                >
                  <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </div>
                  <span className="text-lg group-hover:text-primary transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contact Form - Enhanced */}
            <div className="bg-primary/10 p-8 border border-primary/30 backdrop-blur-sm rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 border-b border-border pb-3">Send eini boð</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-text/90">
                    Navn:
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="entry.1179687836"
                    className="w-full p-3 border border-primary/30 rounded-lg bg-background/70 text-text focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-text/90">
                    Teldupostur:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="entry.263197538"
                    className="w-full p-3 border border-primary/30 rounded-lg bg-background/70 text-text focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-text/90">
                    Boð:
                  </label>
                  <textarea
                    id="message"
                    name="entry.240567695"
                    rows={5}
                    className="w-full p-3 border border-primary/30 rounded-lg bg-background/70 text-text focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-text py-6 font-semibold shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" /> 
                    Send boð
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Neon Glow Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-text/95 my-16 relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-accent/30 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '20s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-3xl border-2 border-primary shadow-[0_0_50px_rgba(147,51,234,0.4)] bg-background/95 backdrop-blur-lg relative z-10">
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-80"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Tíðin er røtt nú – lat okkum býrja!
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-center text-text">
            Ritvit er <strong className="text-primary animate-pulse">ikki nakað, tú kanst skoyta til viks</strong> – tað hevur longu broytt spælið.
          </p>
          
          <div className="space-y-6 mb-12">
            <Link to="/services" className="block">
              <div className="flex items-center gap-4 p-5 bg-primary/10 rounded-xl hover:bg-primary/20 transition-all duration-300 border-2 border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:translate-x-1 group">
                <div className="p-2 bg-background/50 rounded-full">
                  <span className="text-3xl">🎓</span>
                </div>
                <div className="text-text flex-1">
                  <h3 className="font-bold text-xl text-primary/90 group-hover:text-primary transition-colors">Vilt tú læra ritvit frá grundini?</h3>
                  <p className="text-text/80">Tekna teg til okkara skeið</p>
                </div>
                <ArrowRight className="w-7 h-7 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
            
            <Link to="/services" className="block">
              <div className="flex items-center gap-4 p-5 bg-primary/10 rounded-xl hover:bg-primary/20 transition-all duration-300 border-2 border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:translate-x-1 group">
                <div className="p-2 bg-background/50 rounded-full">
                  <span className="text-3xl">💼</span>
                </div>
                <div className="text-text flex-1">
                  <h3 className="font-bold text-xl text-primary/90 group-hover:text-primary transition-colors">Vilt tú innføra ritvit í tína fyritøku?</h3>
                  <p className="text-text/80">Hygg eftir okkara tænastum</p>
                </div>
                <ArrowRight className="w-7 h-7 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
            
            <Link to="/contact" className="block">
              <div className="flex items-center gap-4 p-5 bg-primary/10 rounded-xl hover:bg-primary/20 transition-all duration-300 border-2 border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:translate-x-1 group">
                <div className="p-2 bg-background/50 rounded-full">
                  <span className="text-3xl">❓</span>
                </div>
                <div className="text-text flex-1">
                  <h3 className="font-bold text-xl text-primary/90 group-hover:text-primary transition-colors">Ert tú í iva?</h3>
                  <p className="text-text/80">Set teg í samband við okkum</p>
                </div>
                <ArrowRight className="w-7 h-7 text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/aboutCourse">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-text font-bold text-lg py-7 px-8 shadow-[0_0_30px_rgba(147,51,234,0.6)] hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] transition-all duration-300 animate-pulse hover:animate-none"
                onClick={openSignupForm}
              >
                <span className="flex items-center gap-2">
                  👉 Skriva meg upp <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
            <Link to="/aboutCourse">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/20 text-lg py-7 px-8 transition-all duration-300"
              >
                📖 Les meira um skeiðið
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* <ChatbotButton /> */}
      <Footer />
    </div>
  );
};

export default Index;