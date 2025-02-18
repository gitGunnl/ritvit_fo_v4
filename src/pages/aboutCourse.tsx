// aboutCourse.tsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Vinarliga skriva ein galdandi teldupost")
});

/**
 * Data sets that were in the old Jinja templates – now arrays we can .map over in React
 */
const courseFeatures = [
  {
    icon: "🚀",
    title: "Lær at spara tíð við at lata ChatGPT handfara tínar rútinuuppgávur",
    description:
      "Fá innlit í, hvørjar uppgávur tú kanst gera automatiseraðar, so tú kanst brúka tíðina uppá tað, sum veruliga hevur týdning.",
  },
  {
    icon: "📧",
    title:
      "Lær at skriva, betra um og samanfata teldupostar og frágreiðingar skjótari",
    description:
      "Tú fert at duga at brúka ChatGPT til at skriva og rætta tekstir, so tú kanst senda týdandi boð við sjálvsáliti.",
  },
  {
    icon: "🎨",
    title: "Lær at skapa myndir til framløgur og marknaðarføring",
    description:
      "Framleið myndir, sum gera títt arbeiði meira sjónligt og innbjóðandi.",
  },
  {
    icon: "📊",
    title: "Lær at greina data og fáa innsikt upp á fá sekund",
    description:
      "Fá hjálp frá ChatGPT til at skilja talvur, finna mynstur og samanfata týdningarmiklar upplýsingar.",
  },
  {
    icon: "💡",
    title: "Lær at brúka ChatGPT sum tín persónliga hugskotsmennara",
    description:
      "Set upp ChatGPT sum tín besta viðleikara til at viðgera loysnir upp á trupulleikar.",
  },
  {
    icon: "📝",
    title:
      "Lær at gera fundir meira effektivar við AI-sniðgivnum dagsskrám og notatum",
    description:
      "Lær at brúka ChatGPT til at fyrireika fundir og skriva niðursetingar, so tú altíð hevur yvirlit.",
  },
  {
    icon: "🗂️",
    title: "Lær at skipa uppgávur og verkætlanir meira skilagott",
    description:
      "Nýt ChatGPT til at gera skipaðar arbeiðslistar, tíðarætlanir og arbeiðsgongdir, sum hjálpa tær at halda fokus.",
  },
  {
    icon: "✍️",
    title: "Lær at fáa ChatGPT at skriva í tínum egna stíli",
    description:
      "Tillaga svarini, so tey hóska til tín máta at samskifta – bæði professionelt og álítandi.",
  },
  {
    icon: "🔍",
    title: "Lær at finna og vátta upplýsingar skjótt",
    description:
      "Brúk ChatGPT til kanningararbeiði, og lær hvussu tú metir um álítandi keldur.",
  },
  {
    icon: "🛡️",
    title: "Lær at brúka ChatGPT á tryggan hátt og verja tínar dátur",
    description:
      "Fá skil á týdningarmiklar trygdarfyriskipanir, so tú kanst nýta ChatGPT uttan at seta dátuvernd í váða.",
  },
];

const courseBenefits = [
  {
    icon: "🤖",
    title: "Altíð ein 'lærari' við hondina",
    description:
      "Størsta trupulleikin við net skeiðum plagar at vera, at ein ikki kann seta spurningar, um ein situr fastur. Ikki her. Tú fært atgongd til ein AI-rikin samskiftisrobot, sum kann svara tínum spurningum á leiðini – akkurát sum ein lærari vildi gjørt.",
  },
  {
    icon: "⏳",
    title: "Lær í tínum egna tempo – uttan strongd",
    description:
      "Tú avgerð sjálv/ur, nær tú vilt taka skeiðið. Lær um morgunin, í døgurðapáusuni ella um kvøldið. Ongar freistir, ongin trýst.",
  },
  {
    icon: "🍽️",
    title: "Læring í smáum, yvirskoðiligum bitum",
    description:
      "Ístaðin fyri at fáa alla kunningina blakaða í høvdið í senn, er skeiðið býtt upp í smáar lektiónir, so tú kanst royna tað, tú lærir, beinanvegin. Tað merkir, at tú veruliga minnist og skilur tilfarið betur.",
  },
  {
    icon: "💰",
    title: "Bíligari enn eitt vanligt skeið",
    description:
      "Fysisk skeið kosta meira, tí tað skal gjaldast fyri lærarar, fundarhøli og tilfar. Við at læra online sparir tú pengar – uttan at fara á kompromis við dygdina.",
  },
  {
    icon: "🚗",
    title: "Ongin flutningur, ongin spilt tíð",
    description:
      "Tú sleppur at brúka tíð og pengar uppá at koma fram og aftur til eitt skeiðsstað. Lær beinleiðis frá tínum arbeiðsplássi ella heimanífrá.",
  },
  {
    icon: "📅",
    title: "Ongin vandi fyri avlýsingum",
    description:
      "Hetta skeiðið verður ongantíð avlýst orsakað av ov fáum luttakarum ella ringum veðri. Tað er altíð klárt, tá tú ert.",
  },
  {
    icon: "🔄",
    title: "Altíð dagført við teimum nýggjastu ChatGPT-funkum",
    description:
      "Tá ChatGPT mennist, verður skeiðið dagført – so tú altíð lærir tað nýggjasta og besta.",
  },
  {
    icon: "🎯",
    title: "Lær akkurát tað, tú hevur tørv á",
    description:
      "Í einum fysiskum skeiði fylgja øll sama skrá. Her kanst tú leypa um tað, tú longu kennir, og fokusera uppá tað, sum er týdningarmikið fyri teg.",
  },
  {
    icon: "📂",
    title: "Atgongd til skeiðstilfarið fyri altíð",
    description:
      "Hevur tú tørv á at uppfrískja eina lektión um 6 mánaðir? Onki problem. Tú hevur atgongd til skeiðið, so tú kanst venda aftur, tá tú vilt.",
  },
  {
    icon: "🛠️",
    title: "Praktiskar venjingar beinanvegin",
    description:
      "Ístaðin fyri bert at lesa ella lurta fært tú hands-on uppgávur, har tú beinleiðis nýtir ChatGPT til tínar egnu uppgávur. Tað merkir, at tú lærir nakað, tú veruliga kanst brúka í tínum gerandisdegi.",
  },
];

const courseOverview = [
  {
    day: "Dagur 1",
    lessons: [
      "Væl komin",
      "Kjatta við KjattGPT",
      "Hjálp KjattGPT at hjálpa tær",
      "Hvat kann KjattGPT brúkast til?",
      "Finn runt í brúkara grunninum",
    ],
  },
  {
    day: "Dagur 2",
    lessons: [
      "Hitta tín skeið lærara 'Vitiligi'",
      "Ver varin við persónsupplýsingum!",
      "Skapa myndir við KjattGPT",
      "Finn tað røttu uppgávuna til KjattGPT",
    ],
  },
  {
    day: "Dagur 3",
    lessons: [
      "KjattGPT og Føroyska málið",
      "Brúka KjattGPT til sparring",
      "Avmarkingar hjá KjattGPT",
      "KjattGPT riggar betur, um vit eru neyv",
      "Hald skil á longum kjattráðum",
    ],
  },
  {
    day: "Dagur 4",
    lessons: [
      "Skapilónir",
      "Finn góð byrt á netinum",
      "Fortel samanhang, ein snilda.",
      "Nýtsla av myndagreining í KjattGPT",
    ],
  },
  {
    day: "Dagur 5",
    lessons: [
      "Betur ritverk",
      "Fá hjálp við tínum byrtum",
      "Lætta dátu-greining við KjattGPT",
    ],
  },
  {
    day: "Dagur 6",
    lessons: [
      "Top tuna KjattGPT til at umseta til Føroyskt fyri teg.",
      "Munurin millum GPT-4o og GPT-o1",
      "Almennt um ritvit lóggeving",
      "Verulig dømir frá veruligum royndum",
    ],
  },
];

const whatYouGet = [
  {
    title: "Alt skeiðstilfarið yvir 6 dagar",
    description:
      "Lær við greiðum lektiónum, sum brúka tekst, myndir og video dømi fyri at tryggja góða innlæring.",
  },
  {
    title: "Praktisk dømi og skabalónir",
    description:
      "Amboð, sum gera tað lætt at brúka ChatGPT í tínum arbeiði beinanvegin.",
  },
  {
    title: "Serkunnleika lagaðan til Føroyar",
    description:
      "Skeiðið er serliga sniðgivið til føroyskar fyritøkur og arbeiðsøki.",
  },
  {
    title: "Ókeypis atgongd til CoPilot byrjunarskeið",
    description:
      "Ver millum tey fyrstu at læra, tá ið hetta skeiðið fyri skrivstovufólk verður almannakunngjørt.",
  },
];

/**
 * Main component
 */
const AboutCourse: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      toast({
        title: "Takk fyri áhugan!",
        description: "Vit senda tær boð, tá ið skeiðið er tøkt.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Villa!",
        description: "Tað eydnaðist ikki at skriva seg upp. Royn aftur seinni.",
        variant: "destructive",
      });
    }
  }

  // React state for the countdown text
  const [countdown, setCountdown] = useState("");

  // Equivalent to the old countdown <script>
  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // set time to next midnight
      const diff = midnight.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setCountdown(`${hours} tímar og ${minutes} minuttir`);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 mb-12 animate-fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ger títt arbeiðið stuttligari og skjótari við ChatGPT
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-text/80">
            Tak tað fyrsta stigi til at læra hvussu hendan spennandi nýggja tøknin riggar.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {/* Example: text-primary for color highlight */}
            <div className="flex items-center justify-center space-x-2 text-primary font-medium">
              {/* Shield icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 2l7 4v5c0 5.25-3.75 10-7 11.5C8.75 21 5 16.25 5 11V6l7-4z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>100% nøgdsemi, ella pengarnir aftur</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-primary font-medium">
              {/* Award icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.21 13.89l-1.2 5.09c-.15.66.52 1.23 1.14.88l2.66-1.44 2.66 1.44c.62.35 1.29-.22 1.14-.88l-1.2-5.09"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Royndur undirvísari</span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-primary font-medium">
              {/* Clock icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7v5l3 3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Lívstíðar Atgongd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Price and CTA */}
      <section className="text-center px-4 space-y-6 mb-16 animate-fade-up">
        <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-xl border border-border bg-primary/10">
          <h3 className="text-2xl font-bold mb-6">Skeiðið kemur skjótt!</h3>
          <p className="text-xl mb-8 text-text/80">
            Vit arbeiða við at gera eitt spennandi skeið til tín. 
            Skriva teg upp fyri at fáa boð, tá ið skeiðið er tøkt.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full sm:w-auto">
                    <FormControl>
                      <Input {...field} type="email" placeholder="Teldupostur" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/80 text-text font-bold w-full sm:w-auto"
              >
                Skriva meg upp
              </Button>
            </form>
          </Form>
        </div>
      </section>

      {/* Course Overview: "Hetta lærir tú á skeiðinum" */}
      <section className="py-16 px-4 bg-border/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
            Hetta lærir tú á skeiðinum
          </h2>
          <div className="space-y-8">
            {courseFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-primary/10 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text/80">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
            Hitta tín undirvísara
          </h2>
          <div className="bg-border/10 rounded-xl p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
              <img
                src="/images/headshot.jpg"
                alt="Gunnleygur Clementsen"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 space-y-4 text-text/80">
              <h3 className="text-2xl font-semibold text-text">
                Gunnleygur Clementsen
              </h3>
              <p>
                Eg eiti Gunnleygur Clementsen, og longu fyrsta dagin í 2022 byrjaði
                eg at brúka ChatGPT í mínum starvi sum el-verkfrøðingur í Danmark.
                Síðani tá havi eg brúkt ChatGPT so at siga hvønn einasta dag og havi
                so drúgvar royndir sum til ber.
              </p>
              <p>
                Eg havi fylgt menningini innan ritvit í meira enn 10 ár og havi
                roynt øll tey størstu ritvit-amboðini á marknaðinum – eisini tá tey
                veruliga høvdu lítið at bjóða. Fyri meg er ritvit ein máttmikil
                tøkni, ið kann gera arbeiðið lættari, snildari og stuttligari.
              </p>
              <p>
                Í dag reki eg mína egnu fyritøku, Tøkni Tænastan, har eg hjálpi
                føroyskum fyritøkum at brúka ritvit sum eitt effektivt amboð. Eg
                leggji dent á at gera læringina ítøkiliga, við veruligakendum dømum
                og uppgávum, so tú beinanvegin kanst brúka tað, tú lærir.
              </p>
              <p className="font-medium italic border-l-4 pl-4 border-accent text-text">
                "Tað kann tykjast eitt sindur torført at koma í gongd við ChatGPT,
                men tá tú einaferð hevur loyst knútin, sært tú títt arbeiði við heilt
                nýggjum brillum."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why a net skeið? */}
      <section className="py-16 px-4 bg-border/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
            Hví velja eitt net skeið?
          </h2>
          <div className="prose prose-lg max-w-none text-text/90">
            <div className="bg-primary/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-text flex items-center gap-2">
                <span>💡</span> Vælkomin til 2025 og allar fyrimunirnir við net skeiðum.
              </h3>
              <p className="mt-4">
                Vanlig skeið krevja, at tú møtir til ávísa tíð, situr í einum høli
                í fleiri tímar og eftirá roynir at minnast alt tað, tú lærdi. Tað
                er ein seinur og trupul máti at læra uppá.
              </p>
              <p className="mt-4">
                Eitt netskeið ger tað møguligt at læra í tínum egna tempo,
                beinleiðis frá tínari teldu – uttan at spilla tíð og pengar uppá
                flutning og vánaligan millummála?
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-text mb-6">
              Fyrimunir við at taka hetta net skeiðið
            </h3>
            <div className="space-y-6">
              {courseBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-primary/10 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-text mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-text/80">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-xl p-8 mt-8">
              <h3 className="text-2xl font-semibold text-text flex items-center gap-2">
                <span>🎯</span> Niðurstøða: Tú lærir skjótari, snildari og bíligari
              </h3>
              <p className="mt-4 text-text/80">
                Hetta skeiðið er bygt til at hjálpa tær við at fáa tað mesta burturúr
                ChatGPT – uttan trupulleikarnar við einum vanligum skeiði.
              </p>
              <p className="text-text font-medium mt-4">
                Meld teg til í dag, og lær ChatGPT á ein hátt, sum passar til teg. 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Short Course Overview mention */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            Skeiðsyvirlit
          </h2>
          <div className="space-y-8">
            {courseOverview.map((dayItem, idx) => (
              <div
                key={idx}
                className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-text"
              >
                <h3 className="text-2xl font-semibold mb-4">{dayItem.day}</h3>
                <ul className="space-y-4">
                  {dayItem.lessons.map((lesson, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-primary mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <p className="text-text/80">{lesson}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            Tú fært:
          </h2>
          <div className="bg-background/50 p-8 rounded-xl border border-border/20 backdrop-blur-sm">
            <ul className="space-y-4 text-text">
              {whatYouGet.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <strong className="text-primary">{item.title}:</strong>
                    <span className="text-text/80 ml-2">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 bg-gradient-to-b from-background to-border/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Kostnaður
          </h2>
          <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-xl border border-border bg-primary/10">
            <h3 className="text-2xl font-bold mb-6">Skeiðið kemur skjótt!</h3>
            <p className="text-xl mb-8 text-text/80">
              Vit arbeiða við at gera eitt spennandi skeið til tín. 
              Skriva teg upp fyri at fáa boð, tá ið skeiðið er tøkt.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Teldupostur"
                className="px-4 py-2 rounded-lg border border-border bg-background w-full sm:w-auto"
              />
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-text font-bold w-full sm:w-auto"
              >
                Skriva meg upp
              </Button>
            </form>
          </div>

          {/* Original pricing section (commented out) */}
          {/* <div className="relative bg-background rounded-3xl shadow-xl p-10 text-center overflow-hidden border border-border">
            <div className="absolute top-0 right-0 bg-primary text-text text-sm font-semibold px-4 py-2 rounded-bl-3xl">
              -50% Avsláttur!
            </div>

            <p className="text-xl text-text/80 mb-3">Vanligur prísur:</p>
            <p className="text-2xl text-text/50 line-through">1800 DKK</p>
            <p className="text-text text-5xl font-extrabold mt-2">
              <span className="text-primary">900</span> DKK
            </p>
            <p className="text-lg text-text/80 mt-2">
              Avmarkað tilboð til <span className="font-semibold">31. Februar</span>
            </p>

            <Link to="/register">
              <Button
                size="lg"
                className="mt-6 bg-primary text-text font-bold py-4 px-8 rounded-full text-xl hover:scale-105 transition-all duration-300"
              >
                Keyp Skeiðið Nú
              </Button>
            </Link>

            <div className="flex items-center justify-center space-x-2 mt-6 text-text/80">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <p className="text-lg font-semibold">
                100% nøgdsemi ella pengarnir aftur
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Optional Chatbot floating button, if desired */}
      <ChatbotButton />
    </div>
  );
};

export default AboutCourse;