
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import { Calendar, Play, Image as ImageIcon, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GridBackground from "@/components/background/GridBackground";

type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  summary: string;
  mediaType: "image" | "video";
  mediaSrc: string;
};

const timelineData: TimelineEvent[] = [
  { 
    id: "evt-001", 
    date: "2025-02-15", 
    title: "Project Kick-off & Team Assembly", 
    summary: "Initial funding secured and core project team assembled. Strategic planning and initial stakeholder meetings commence.", 
    mediaType: "image", 
    mediaSrc: "https://placehold.co/1200x800/f8fafc/0c0a09?text=Team+Kick-off" 
  },
  { 
    id: "evt-002", 
    date: "2025-04-01", 
    title: "Alpha Version of Data Portal Launched", 
    summary: "The first internal version of the data portal is released for testing and feedback among key partners. Focus on core data ingestion and API stability.", 
    mediaType: "image", 
    mediaSrc: "https://placehold.co/1200x800/e7e5e4/0c0a09?text=Alpha+Portal+UI" 
  },
  { 
    id: "evt-003", 
    date: "2025-06-20", 
    title: "First Public API Documentation Published", 
    summary: "Comprehensive documentation for our public data API is now available, enabling third-party developers to start building integrations.", 
    mediaType: "video", 
    mediaSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    id: "evt-004", 
    date: "2025-09-01", 
    title: "Public Beta Program Opens", 
    summary: "The 'Vitlíki til arbeiðis' platform is now open for public beta testing. We invite all interested parties to sign up and provide valuable feedback.", 
    mediaType: "image", 
    mediaSrc: "https://placehold.co/1200x800/67e8f9/0c0a09?text=Public+Beta" 
  },
  { 
    id: "evt-005", 
    date: "2025-11-10", 
    title: "Integration with National Statistics Office", 
    summary: "A landmark partnership with the National Statistics Office to integrate key demographic and economic datasets directly into the platform.", 
    mediaType: "image", 
    mediaSrc: "https://placehold.co/1200x800/a5b4fc/0c0a09?text=Partnership" 
  },
  { 
    id: "evt-006", 
    date: "2026-01-20", 
    title: "Official v1.0 Launch", 
    summary: "After extensive testing and community feedback, the platform is officially launched. Full public access and enterprise-grade support now available.", 
    mediaType: "video", 
    mediaSrc: "https://www.youtube.com/embed/rokGy0huYEA" 
  }
];

const TilArbeidis = () => {
  const [activeSection, setActiveSection] = useState("");
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-timeline-id");
            if (id) {
              setVisibleItems(prev => new Set([...prev, id]));
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const timelineItems = document.querySelectorAll("[data-timeline-id]");
    if (observerRef.current) {
      timelineItems.forEach((item) => {
        observerRef.current?.observe(item);
      });
    }

    return () => {
      if (observerRef.current) {
        timelineItems.forEach((item) => {
          observerRef.current?.unobserve(item);
        });
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`[data-timeline-id="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fo-FO", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const isPastEvent = (dateString: string) => {
    return new Date(dateString) < new Date();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden">
        <GridBackground />
        
        <div className="max-w-4xl mx-auto text-center px-4 z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-up leading-tight drop-shadow-md">
            Vitlíki til arbeiðis
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-accent block mt-2">
              Roadmap & Status
            </span>
          </h1>
          <p className="text-xl mb-10 text-text/90 animate-fade-up [animation-delay:200ms] max-w-3xl mx-auto">
            Fylg við í menningini av okkara vitlíki verkætlan - frá byrjan til fullkomna lansering.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sticky Navigation - Hidden on Mobile */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-primary/10 border border-primary/30 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-primary">Tímatal Mílisteinir</h3>
                <nav className="space-y-2">
                  {timelineData.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => scrollToSection(event.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        activeSection === event.id
                          ? "bg-primary/20 text-primary border-l-4 border-primary"
                          : "hover:bg-primary/10 text-text/80 hover:text-primary"
                      }`}
                    >
                      <div className="text-sm font-medium">{formatDate(event.date)}</div>
                      <div className="text-sm opacity-90 line-clamp-2">{event.title}</div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="lg:col-span-3">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent"></div>

                <div className="space-y-12">
                  {timelineData.map((event, index) => (
                    <div
                      key={event.id}
                      data-timeline-id={event.id}
                      className={`relative pl-16 md:pl-20 transition-all duration-1000 ${
                        visibleItems.has(event.id)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-2 md:left-6 w-4 h-4 rounded-full border-4 ${
                        isPastEvent(event.date)
                          ? "bg-primary border-primary shadow-lg shadow-primary/50"
                          : "bg-background border-primary/50"
                      }`}></div>

                      {/* Event Card */}
                      <div className="bg-primary/10 border border-primary/30 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:translate-y-[-2px]">
                        
                        {/* Date Badge */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                            isPastEvent(event.date)
                              ? "bg-primary/20 text-primary"
                              : "bg-accent/20 text-accent"
                          }`}>
                            <Calendar className="w-4 h-4" />
                            {formatDate(event.date)}
                          </div>
                          {isPastEvent(event.date) && (
                            <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                              Liðugt
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold mb-4 text-primary">{event.title}</h3>
                        <p className="text-text/80 mb-6 leading-relaxed">{event.summary}</p>

                        {/* Media Button */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              className="border-primary/50 text-primary hover:bg-primary/10 group"
                            >
                              {event.mediaType === "video" ? (
                                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                              ) : (
                                <ImageIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                              )}
                              Síggj Media
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-background/95 backdrop-blur-lg border border-primary/30">
                            <div className="flex items-center justify-center h-full p-6">
                              {event.mediaType === "video" ? (
                                <iframe
                                  src={event.mediaSrc}
                                  className="w-full h-full rounded-lg"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : (
                                <img
                                  src={event.mediaSrc}
                                  alt={event.title}
                                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Vilt tú vita meira um verkætlanina?
          </h2>
          <p className="text-xl text-text/80 mb-8 max-w-2xl mx-auto">
            Set teg í samband við okkum fyri at fáa meira information um "Vitlíki til arbeiðis" verkætlanina og hvussu hon kann gagnnýta tær.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-text group">
                <span className="flex items-center gap-2">
                  Fá samband
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Síggj okkara tænastur
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ChatbotButton />
      <Footer />
    </div>
  );
};

export default TilArbeidis;
