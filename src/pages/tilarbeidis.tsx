
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Play, Image } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

const Tilarbeidis = () => {
  const [activeSection, setActiveSection] = useState<string>("evt-001");
  const [selectedMedia, setSelectedMedia] = useState<TimelineEvent | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short'
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
            Vitlíki til arbeiðis
          </h1>
          <p className="text-xl text-text/80 mb-8">
            A transparent look at our journey and progress.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-500 font-semibold">All Systems Operational</span>
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
                ROADMAP
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
                      <span className="text-sm text-primary/80 font-semibold uppercase tracking-wide">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-text group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-text/70 mb-6 leading-relaxed text-lg">
                      {event.summary}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedMedia(event)}
                      className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary/50 border-primary/20"
                    >
                      {event.mediaType === 'video' ? (
                        <Play className="w-4 h-4" />
                      ) : (
                        <Image className="w-4 h-4" />
                      )}
                      View Media →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <section className="mt-24 py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
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

      {/* Media Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>{selectedMedia?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            {selectedMedia?.mediaType === 'video' ? (
              <iframe
                src={selectedMedia.mediaSrc}
                className="w-full h-full rounded-lg"
                allowFullScreen
                title={selectedMedia.title}
              />
            ) : (
              <img
                src={selectedMedia?.mediaSrc}
                alt={selectedMedia?.title}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Tilarbeidis;
