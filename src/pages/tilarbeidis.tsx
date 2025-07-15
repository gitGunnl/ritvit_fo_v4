import { useState, useEffect } from "react";import { Calendar } from "lucide-react";import { Button } from "@/components/ui/button";import Navigation from "@/components/Navigation";import Footer from "@/components/Footer";



type TimelineEvent = {

  id: string;

  date: string;

  title: string;

  summary: string;

  mediaType?: "image" | "video";

  mediaSrc?: string;

};const timelineData: TimelineEvent[] = [

  {

    id: "evt-001",

    date: "2025-05-01",

    title: "Verkætlanin fíggjað",

    summary: "Verkætlanin hevur fingið játtan, sum gevur okkum førleika at kanna nýtsluna av vitlíki fyri starvsfólk á gólvinum."

  },

  {

    id: "evt-002",

    date: "2025-07-15",

    title: "Verkætlanin byrjar",

    summary: "Kjarnubólkurin er mannaður og fyrsta arbeiðsætlanin er kunngjørd."

  },

  {

    id: "evt-003",

    date: "2025-07-15",

    title: "Verkstova um bólkaval",

    summary: "Áhugabólkar hittust fyri at velja níggju týðandi yrkisbólkar út til royndarverkætlanir.",

    mediaType: "image",

    mediaSrc: "/images/verkstova.jpeg"

  },

  {

    id: "evt-004",

    date: "2025-07-15",

    title: "Raðfesting í gongd",

    summary: "Vit meta nú um teir níggju bólkarnar út frá ásettum mátum: \"Fáir skíggjar, starvsfólkatal, vitlíkis-snertifletur.\" Úrslitini verða nýtt til at velja royndarverkætlanir."

  },

  {

    id: "evt-005",

    date: "2025-07-28",

    title: "Samrøða við miðil",

    summary: "Høvdu fyrstu samrøðu við tíðarrit frá *Granskingarráðnum* um leiklutin hjá vitlíki í føroyska arbeiðslívinum. Vit bíða eftir greinini til gjøgnumlestur."

  },

  {

    id: "evt-006",

    date: "2025-08-01",

    title: "Samskiftisfasa",

    summary: "Næsta stigið: seta okkum í samband við valdu bólkarnar og skipa fyri hálv-skipaðum samrøðum fyri at kortleggja dagligar avbjóðingar."

  }

];const Tilarbeidis = () => {

  const [activeSection, setActiveSection] = useState<string>("evt-001");

  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());



  const formatDate = (dateString: string) => {

    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {

      year: 'numeric',

      month: 'short',

      day: 'numeric'

    };

    return date.toLocaleDateString('fo-FO', options);

  };



  const scrollToEvent = (eventId: string) => {

    const element = document.getElementById(eventId);

    if (element) {

      element.scrollIntoView({ behavior: 'smooth', block: 'center' });

    }

  };



  useEffect(() => {

    const handleScroll = () => {

      const sections = timelineData.map(event => document.getElementById(event.id));

      const scrollPosition = window.scrollY + window.innerHeight / 2;



      for (let i = sections.length - 1; i >= 0; i--) {

        const section = sections[i];

        if (section && section.offsetTop <= scrollPosition) {

          setActiveSection(timelineData[i].id);

          break;

        }

      }

    };



    const observerOptions = {

      threshold: 0.1,

      rootMargin: '-50px 0px'

    };



    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          setVisibleEvents(prev => new Set([...prev, entry.target.id]));

        }

      });

    }, observerOptions);



    timelineData.forEach(event => {

      const element = document.getElementById(event.id);

      if (element) observer.observe(element);

    });



    window.addEventListener('scroll', handleScroll);

    handleScroll();



    return () => {

      window.removeEventListener('scroll', handleScroll);

      observer.disconnect();

    };

  }, []);



  return (

    <div className="min-h-screen bg-background text-text">

      <Navigation />



      {/* Hero Section */}

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">

            Støðan í verkætlanini – Vitlíki til arbeiðis

          </h1>

          <p className="text-xl text-text/80 mb-8">

            Fylg okkara arbeiðsætlan, meðan vit menna føroyskt vitlíki til gerandisdagin á arbeiðsplássinum.

          </p>

        </div>

      </section>



      {/* Status Boxes */}

      <section className="px-4 sm:px-6 lg:px-8 mb-12">

        <div className="max-w-4xl mx-auto space-y-4">

          {/* Current Focus */}

          <div className="bg-primary/20 border-2 border-primary/50 rounded-xl p-6 shadow-lg">

            <div className="flex items-center gap-3">

              <span className="text-2xl">🔍</span>

              <div>

                <h3 className="font-bold text-lg text-primary">Verandi uppgáva:</h3>

                <p className="text-text/90">raðfesta útvaldu yrkisbólkarnar eftir okkara mátum.</p>

              </div>

            </div>

          </div>



          {/* Next Up */}

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">

            <div className="flex items-center gap-3">

              <span className="text-xl">📅</span>

              <div>

                <h4 className="font-semibold text-accent">Næst:</h4>

                <p className="text-text/80 text-sm">seta okkum í samband við umboð fyri bólkarnar og skipa fyri kanningarsamrøðum (aug. 2025).</p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column - Navigation (Desktop Only) */}

          <div className="hidden lg:block lg:w-1/4">

            <div className="sticky top-24">

              <h3 className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-6">

                VARÐAR

              </h3>

              <nav className="space-y-1">

                {timelineData.map((event) => (

                  <button

                    key={event.id}

                    onClick={() => scrollToEvent(event.id)}

                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${

                      activeSection === event.id

                        ? 'bg-primary/15 text-primary border-l-3 border-primary'

                        : 'text-text/70 hover:text-text hover:bg-text/5'

                    }`}

                  >

                    <div className="text-xs text-text/50 mb-1 font-medium">

                      {formatDate(event.date)}

                    </div>

                    <div className="text-sm font-medium">

                      {event.title}

                    </div>

                  </button>

                ))}

              </nav>

            </div>

          </div>



          {/* Right Column - Timeline */}

          <div className="lg:w-3/4">

            <div className="space-y-8">

              {timelineData.map((event, index) => (

                <div

                  key={event.id}

                  id={event.id}

                  className={`transition-all duration-700 transform ${

                    visibleEvents.has(event.id)

                      ? 'opacity-100 translate-y-0'

                      : 'opacity-0 translate-y-8'

                  }`}

                >

                  <div className="bg-background/50 border border-text/10 rounded-xl p-8 hover:border-primary/20 hover:bg-background/60 transition-all duration-300 group">

                    <div className="flex items-center gap-2 mb-4">

                      <Calendar className="w-5 h-5 text-primary/80" />

                      <span className="text-sm text-primary/80 font-bold uppercase tracking-wide">

                        {formatDate(event.date)}

                      </span>

                    </div>



                    <h3 className="text-2xl font-semibold mb-4 text-text group-hover:text-primary transition-colors">

                      {event.title}

                    </h3>



                    <p className="text-text/70 mb-6 leading-relaxed text-lg">

                      {event.summary}

                    </p>



                    {event.mediaSrc && (

                      <div className="aspect-video w-full rounded-lg overflow-hidden border border-text/10">

                        {event.mediaType === 'video' ? (

                          <iframe

                            src={event.mediaSrc}

                            className="w-full h-full"

                            allowFullScreen

                            title={event.title}

                          />

                        ) : (

                          <img

                            src={event.mediaSrc}

                            alt={event.title}

              _                className="w-full h-full object-cover"

                          />

                        )}

                      </div>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>



      {/* Roadmap Table */}

      <section className="mt-24 py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-8 text-center">Arbeiðsætlan fyri verkætlanina</h2>



          <div className="overflow-x-auto bg-background/50 border border-text/10 rounded-xl p-6">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-text/20">

                  <th className="text-left py-3 px-2 font-semibold">Stig</th>

                  <th className="text-left py-3 px-2 font-semibold">Byrjan</th>

                  <th className="text-left py-3 px-2 font-semibold">Endi</th>

                  <th className="text-left py-3 px-2 font-semibold">Tíðarskeið</th>

                  <th className="text-left py-3 px-2 font-semibold">Lýsing</th>

                </tr>

              </thead>

              <tbody className="space-y-2">

                <tr className="border-b border-text/10">

                  <td className="py-3 px-2">Fyrireiking</td>

                  <td className="py-3 px-2">Mai 2025</td>

                  <td className="py-3 px-2">Juli 2025</td>

                  <td className="py-3 px-2">3 mán.</td>

                  <td className="py-3 px-2">Mannan av toymi, kortlegging av áhugabólkum, innleiðandi kanningar</td>

                </tr>

                <tr className="border-b border-text/10 font-bold bg-primary/10">

                  <td className="py-3 px-2">📦 Úrslit: Verkstova um bólkaval</td>

                  <td className="py-3 px-2">15. juli 2025</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">Velja 9 týðandi yrkisbólkar út</td>

                </tr>

                <tr className="border-b border-text/10">

                  <td className="py-3 px-2">Kanningarstig</td>

                  <td className="py-3 px-2">Aug. 2025</td>

                  <td className="py-3 px-2">Okt. 2025</td>

                  <td className="py-3 px-2">3 mán.</td>

                  <td className="py-3 px-2">Brúkarasamrøður, kanning av arbeiðsgongdum, kortlegging av avbjóðingum</td>

                </tr>

                <tr className="border-b border-text/10 font-bold bg-primary/10">

                  <td className="py-3 px-2">📦 Úrslit: Samandráttur av kanningum</td>

                  <td className="py-3 px-2">Nov. 2025</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">Nágreinilig meting av tørvi hjá brúkarum og raðfesting av møguleikum</td>

                </tr>

                <tr className="border-b border-text/10">

                  <td className="py-3 px-2">Frumgerð</td>

                  <td className="py-3 px-2">Nov. 2025</td>

                  <td className="py-3 px-2">Jan. 2026</td>

                  <td className="py-3 px-2">3 mán.</td>

                  <td className="py-3 px-2">Mennna og royna fyrstu vitlíkishjáparar til valdar bólkar</td>

                </tr>

                <tr className="border-b border-text/10 font-bold bg-primary/10">

                  <td className="py-3 px-2">📦 Úrslit: Virkandi frumgerðir</td>

                  <td className="py-3 px-2">Feb. 2026</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">2-3 virkandi vitlíkisamboð klár til royndarkoyring</td>

                </tr>

                <tr className="border-b border-text/10">

                  <td className="py-3 px-2">Royndarkoyring</td>

                  <td className="py-3 px-2">Feb. 2026</td>

                  <td className="py-3 px-2">Apr. 2026</td>

                  <td className="py-3 px-2">3 mán.</td>

                  <td className="py-3 px-2">Royndarkoyring við veruligum brúkarum, innsavnan av afturmeldingum og tillagingar</td>

                </tr>

                <tr className="font-bold bg-primary/10">

                  <td className="py-3 px-2">📦 Úrslit: Endalig frágreiðing</td>

                  <td className="py-3 px-2">Mai 2026</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">–</td>

                  <td className="py-3 px-2">Meting av ávirkan og tilmæli um víðkan</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>



      {/* Contact Banner */}

      <section className="mt-16 py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">

            Vilt tú vera partur av okkara ferð?

          </h2>

          <p className="text-xl text-text/80 mb-8">

            Fylg við í menningini av vitlíki í Føroyum og ver fyrst/ur at vita um nýggjar møguleikar.

          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-text">

            Set teg í samband

          </Button>

        </div>

      </section>



      {/* Footer Note */}

      <section className="py-8 px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm text-text/60">

            Vit kunngera bert høvuðsvarðar; nágreiniligar kanningarfrásagnir verða goymdar innanhýsis.

          </p>

        </div>

      </section>



      <Footer />

    </div>

  );

};export default Tilarbeidis;