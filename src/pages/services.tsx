import { Card } from "@/components/ui/card";
import {
  Brain,
  Code,
  Lightbulb,
  MessageSquare,
  Presentation,
  Users2,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />
      <div className="py-20">
        <div className="container px-4 mx-auto">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl font-bold mb-6 animate-fade-down">
              Byrja tína ritvit ferð í dag
            </h1>
            <p className="text-lg text-text/80 mb-8">
              Vit hjálpa føroyskum fyritøkum at taka ritvit-tøkni til sín, við praktiskum
              amboðum sum KjattGPT, mynda generering og Microsoft Copilot. Við einari
              skipaðari tilgongd tryggja vit, at tykkara toymi kann nýta ritvit á ein
              munagóðan hátt í gerandisdegnum.
            </p>
          </div>

          {/* Main Course Section */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-center mb-4">
                Byrja her: Okkara net-skeið
              </h2>
              <p className="text-lg text-text/80">
                Eitt fullkomið innlit í ritvit til tína fyritøku
              </p>
            </div>

            <span className="bg-accent text-text text-sm font-bold px-6 py-2 rounded-full border-2 border-accent shadow-[0_0_10px_rgba(147,51,234,0.5)]">
              Besta fyrsta stig
            </span>

            <Card className="p-8 hover-lift animate-fade-up max-w-3xl mx-auto bg-primary/10 border border-border shadow-xl backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <MessageSquare className="w-16 h-16 text-primary flex-shrink-0" />
                <div>
                  <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Fyrilestur</span>
                  <div className="flex items-center justify-between mb-4">
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    ChatGPT Net-skeið
                  </h3>
                  <p className="text-text/80 mb-6">
                    Okkara umfatandi skeið lærir teg at brúka KjattGPT effektivt í
                    gerandisarbeiði. Perfekt til bæði ný byrjandi og yrkisfólk. Flestu av
                    okkara kundum byrja sína ritvit-ferð her.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-xl font-semibold text-primary">1.200 DKK</p>
                    <Link to="/contact" className="flex-1 sm:flex-none">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-text border border-primary/50">
                        Byrja í dag
                      </Button>
                      
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Journey Steps */}
          <div className="max-w-3xl mx-auto space-y-24">
            {/* Step 2 */}
            <div className="fade-in">
              <span className="text-sm text-text/60 mb-2 block">
                Mælt til sum næsta stig
              </span>
              <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-border">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  15 hættir at brúka KjattGPT
                </h3>
                <p className="text-text/80 mb-6">
                  Spar tær vikur av feilum og skeivum royndum – vit geva tær 15 tillagaðar
                  mátar at brúka KjattGPT í tínum arbeiði. Hendan tænastan hjálpir tær at
                  finna beinraktar uppgáur tú kann brúka KjattGPT til í júst tínum arbeiði - í dag.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-xl font-semibold text-primary">1.200 DKK</p>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="hover-lift border-primary/50 text-primary hover:text-primary/80 hover:border-primary"
                    >
                      Les meira
                    </Button>
                  </Link>
                </div>
                <p className="text-text/60 text-sm">
                  Eftir at hava lokið skeiðið hjálpir henda tænastan tær at finna ítøkiligar
                  møguleikar at innleiða ritvit í tínum arbeiði.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="fade-in">
              <span className="text-sm text-text/60 mb-2 block">
                Til toymir & fyritøkur
              </span>
              <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-border">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Fyrilestur</span>
                <Presentation className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  Ritvit: Frá Óvissu til Møguleikar
                </h3>
                <p className="text-text/80 mb-6">
                  Ritvit er komið – og tað broytir máta okkara at arbeiða uppá. Men hvat merkir tað í veruleikanum? Hvat kann ritvit – og hvat kann tað ikki? Hetta fyrilesturin gevur eina greiða fatan av, hvussu ritvit kann nýtast í gerandisdegnum, so óvissa og ivi verða skift út við forvitni og nýggjar møguleikar.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex gap-2">
                    <span className="text-primary">🔹</span>
                    <p className="text-text/80"><strong>Minni ógreiðni, meira greiða</strong> – Skil ritvit uttan torskilt tekniskt mál.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">🔹</span>
                    <p className="text-text/80"><strong>Frá ræðslu til spenning</strong> – Síggj, hvussu ritvit kann vera ein hjálp, ikki ein hóttan.</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">🔹</span>
                    <p className="text-text/80"><strong>Konkret íblástur</strong> – Uppliv, hvussu ritvit kann gera arbeiðið lættari og meir munagott.</p>
                  </div>
                </div>
                <p className="text-text/80 mb-6">
                  Ein fyrilestur, sum gevur yvirlit, vísir møguleikar og leggur fram praktisk dømi, so tit fara avstað við nýggjari tilgongd til ritvit – og eini sterkari støðu í framtíðini.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-xl font-semibold text-primary">18.000 DKK</p>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="hover-lift border-primary/50 text-primary hover:text-primary/80 hover:border-primary"
                    >
                      Bílegg ein fyrilestur nú
                    </Button>
                  </Link>
                </div>
                <p className="text-text/60 text-sm">
                  Perfekt til fyritøkur, ið vilja vera á odda við ritviti – uttan óneyðuga ótta ella óvissu.
                </p>
              </div>
            </div>



            {/* Step 4 */}
            <div className="fade-in">
              <span className="text-sm text-text/60 mb-2 block">
                Handalig hjálp
              </span>
              <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-border">
                <Users2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  Ritvit-ráðgeving
                </h3>
                <p className="text-text/80 mb-6">
                  Tá ið títt toymi hevur fingið grundvitan, veita vit hándsama hjálp til at
                  innarbeiða KjattGPT ella Copilot í tykkara arbeiðsgongd. Vit arbeiða
                  beinleiðis saman við tykkara starvsfólki fyri at tryggja at øll fáa sum
                  mest burturúr hesa nýggju tøkni.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="hover-lift border-primary/50 text-primary hover:text-primary/80 hover:border-primary"
                    >
                      Fá hjálp
                    </Button>
                  </Link>
                </div>
                <p className="text-text/60 text-sm">
                  Okkara serfrøði ger tað nógv smidligari at fáa tykkara toymi at innleiða
                  ritvit-amboð inn í teirra dagliga arbeiði.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="fade-in">
              <span className="text-sm text-text/60 mb-2 block">
                Sniðgjørdar loysnir
              </span>
              <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-border">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  Serloysnir til sjálvirkan
                </h3>
                <p className="text-text/80 mb-6">
                  Ger tínar ritvit-automatións hugskot til veruleika við okkara
                  menningarserfrøði. Vit hjálpa tær at byggja sniðgjørdar loysnir, ið hóska til
                  tín tørv.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="hover-lift border-primary/50 text-primary hover:text-primary/80 hover:border-primary"
                    >
                      Fortel okkum títt hugskot
                    </Button>
                  </Link>
                </div>
                <p className="text-text/60 text-sm">
                  Hefur tú eina ítøkiliga mannagongd, tú vilt automatisera við ritvit? Ella
                  hevur tú eitt slóðbrótandi hugskot til hvussu tín vinna kann brúka ritvit á
                  ein nýggjan hátt? Vit kunnu hjálpa við at gera tínar visjónir til veruleika.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-32 text-center max-w-2xl mx-auto">
            <p className="text-lg text-text/80 mb-6">
              Vilt tú býrja tína Ritvit-ferð? Byrja við okkara KjattGPT-skeiði í dag.
            </p>
            <Link to="/contact">
              <Button
                className="bg-primary hover:bg-primary/80 text-text border border-primary/50"
                size="lg"
              >
                Byrja nú
              </Button>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
