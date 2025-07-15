
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  summary: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
};

const timelineData: TimelineEvent[] = [
  { 
    id: "evt-001", 
    date: "2025-05-01", 
    title: "Project funded", 
    summary: "The initiative secured grant financing, giving us resources to explore vitlíki for frontline staff."
  },
  { 
    id: "evt-002", 
    date: "2025-07-15", 
    title: "Project kickoff", 
    summary: "Core team assembled and initial roadmap published."
  },
  { 
    id: "evt-003", 
    date: "2025-07-15", 
    title: "Group-selection workshop", 
    summary: "Stakeholders met to shortlist nine high-impact professions for pilot projects.",
    mediaType: "image", 
    mediaSrc: "/images/verkstova.jpeg"
  },
  { 
    id: "evt-004", 
    date: "2025-07-15", 
    title: "Ranking in progress", 
    summary: "We're scoring the nine groups by \"Few screens, Head-count, AI touch-points.\" Results will guide pilot selection."
  },
  { 
    id: "evt-005", 
    date: "2025-07-28", 
    title: "Media interview", 
    summary: "Gave first interview to *Granskingaráði* magazine on vitlíki's role in Faroese work-life. Awaiting article for review."
  },
  { 
    id: "evt-006", 
    date: "2025-08-01", 
    title: "Outreach phase", 
    summary: "Next step: contact selected groups and arrange semi-structured interviews to map daily pain-points."
  }
];

const Tilarbeidis = () => {
  const [activeSection, setActiveSection] = useState<string>("evt-001");
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
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
            Project Updates – Vitlíki til arbeiðis
          </h1>
          <p className="text-xl text-text/80 mb-8">
            Follow our roadmap as we bring Faroese-language vitlíki into everyday work.
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
                <h3 className="font-bold text-lg text-primary">Current task:</h3>
                <p className="text-text/90">ranking the shortlisted professional groups against our selection metrics.</p>
              </div>
            </div>
          </div>

          {/* Next Up */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">📅</span>
              <div>
                <h4 className="font-semibold text-accent">Next:</h4>
                <p className="text-text/80 text-sm">contact group representatives and schedule discovery interviews (Aug 2025).</p>
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
                MILESTONES
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
                            className="w-full h-full object-cover"
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
          <h2 className="text-3xl font-bold mb-8 text-center">Project Roadmap</h2>
          
          <div className="overflow-x-auto bg-background/50 border border-text/10 rounded-xl p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-text/20">
                  <th className="text-left py-3 px-2 font-semibold">Phase</th>
                  <th className="text-left py-3 px-2 font-semibold">Start</th>
                  <th className="text-left py-3 px-2 font-semibold">End</th>
                  <th className="text-left py-3 px-2 font-semibold">Duration</th>
                  <th className="text-left py-3 px-2 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-text/10">
                  <td className="py-3 px-2">Setup</td>
                  <td className="py-3 px-2">May 2025</td>
                  <td className="py-3 px-2">Jul 2025</td>
                  <td className="py-3 px-2">3 mán</td>
                  <td className="py-3 px-2">Team assembly, stakeholder mapping, initial research</td>
                </tr>
                <tr className="border-b border-text/10 font-bold bg-primary/10">
                  <td className="py-3 px-2">📦 Delivery: Group selection workshop</td>
                  <td className="py-3 px-2">15 Jul 2025</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">Shortlist 9 high-impact professional groups</td>
                </tr>
                <tr className="border-b border-text/10">
                  <td className="py-3 px-2">Discovery</td>
                  <td className="py-3 px-2">Aug 2025</td>
                  <td className="py-3 px-2">Okt 2025</td>
                  <td className="py-3 px-2">3 mán</td>
                  <td className="py-3 px-2">User interviews, workflow analysis, pain-point mapping</td>
                </tr>
                <tr className="border-b border-text/10 font-bold bg-primary/10">
                  <td className="py-3 px-2">📦 Delivery: Research synthesis</td>
                  <td className="py-3 px-2">Nov 2025</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">Detailed user needs assessment and opportunity ranking</td>
                </tr>
                <tr className="border-b border-text/10">
                  <td className="py-3 px-2">Prototyping</td>
                  <td className="py-3 px-2">Nov 2025</td>
                  <td className="py-3 px-2">Jan 2026</td>
                  <td className="py-3 px-2">3 mán</td>
                  <td className="py-3 px-2">Build and test initial AI assistants for selected groups</td>
                </tr>
                <tr className="border-b border-text/10 font-bold bg-primary/10">
                  <td className="py-3 px-2">📦 Delivery: Working prototypes</td>
                  <td className="py-3 px-2">Feb 2026</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">2-3 functional AI tools ready for pilot testing</td>
                </tr>
                <tr className="border-b border-text/10">
                  <td className="py-3 px-2">Pilot Testing</td>
                  <td className="py-3 px-2">Feb 2026</td>
                  <td className="py-3 px-2">Apr 2026</td>
                  <td className="py-3 px-2">3 mán</td>
                  <td className="py-3 px-2">Live testing with real users, feedback collection, iteration</td>
                </tr>
                <tr className="font-bold bg-primary/10">
                  <td className="py-3 px-2">📦 Delivery: Final report</td>
                  <td className="py-3 px-2">Mai 2026</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">–</td>
                  <td className="py-3 px-2">Impact assessment and recommendations for scaling</td>
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
            Fylg við í menningini av vitlíki í Føroyum og ver fyrsti at vita frá nýggj tilboð.
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
            We publish high-level milestones only; detailed research logs are kept internally.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tilarbeidis;
