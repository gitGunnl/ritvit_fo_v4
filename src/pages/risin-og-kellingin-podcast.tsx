
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";

export default function RisinOgKellinginPodcast() {
  // Add Open Graph metadata for proper thumbnail
  useEffect(() => {
    // Create meta tags for Open Graph
    const ogTitleMeta = document.createElement('meta');
    ogTitleMeta.setAttribute('property', 'og:title');
    ogTitleMeta.setAttribute('content', 'Risin og Kellingin');
    
    const ogDescMeta = document.createElement('meta');
    ogDescMeta.setAttribute('property', 'og:description');
    ogDescMeta.setAttribute('content', 'Risin og Kellingin podcast episode.');
    
    // Create image meta tag pointing to the correct thumbnail
    const ogImageMeta = document.createElement('meta');
    ogImageMeta.setAttribute('property', 'og:image');
    ogImageMeta.setAttribute('content', `${window.location.origin}/images/podcast_thumbnail.png`);

    // Add meta tags to head
    document.head.appendChild(ogImageMeta);
    document.head.appendChild(ogTitleMeta);
    document.head.appendChild(ogDescMeta);

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(ogImageMeta);
      document.head.removeChild(ogTitleMeta);
      document.head.removeChild(ogDescMeta);
    };
  }, []);
  
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // Reference MP3 from the public directory path
  const audioUrl = "/other_media/risin_og_kellingin.mp3";

  React.useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    
    console.log(`Setting audio source to: ${audioUrl}`);
    
    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
      setIsLoading(false);
      setError(null);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = (e: Event) => {
      console.error('Audio Element Error:', e);
      let errorMessage = 'Unknown audio error';
      if (audioElement.error) {
        console.error('Error Code:', audioElement.error.code);
        switch (audioElement.error.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            errorMessage = 'Audio playback aborted.';
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            errorMessage = 'Network error caused audio download to fail.';
            break;
          case MediaError.MEDIA_ERR_DECODE:
            errorMessage = 'Audio decoding error.';
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMessage = 'The audio format is not supported.';
            break;
          default:
            errorMessage = `Unexpected error (${audioElement.error.code}).`;
        }
      }
      setError(errorMessage);
      setIsLoading(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    // Set audio source
    audioElement.src = audioUrl;
    setIsLoading(true);
    setError(null);

    // Add event listeners
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('canplay', handleCanPlay);
    audioElement.addEventListener('error', handleError);
    audioElement.addEventListener('ended', handleEnded);

    // Cleanup function
    return () => {
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('canplay', handleCanPlay);
      audioElement.removeEventListener('error', handleError);
      audioElement.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error("Error playing audio:", err);
          setError(`Playback failed: ${err.message}`);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 15);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        duration,
        audioRef.current.currentTime + 15
      );
    }
  };

  // Component to render markdown episode notes
  const EpisodeNotes = () => {
    const markdownContent = `
Risin og Kellingin podcast episoden udforsker legenden om Risin og Kellingin, to forstenede søstakke ud for Færøernes kyst, som ifølge folkloren er en islandsk kæmpe og heks, der forsøgte at stjæle øerne. Den beskriver, hvordan de to skikkelser blev forvandlet til sten ved solopgang, et klassisk motiv i nordisk mytologi, der symboliserer naturens beskyttelse mod udefrakommende trusler. Artiklen fremhæver historiens kulturelle betydning som en central del af færøsk identitet og national stolthed, der bekræfter øernes urokkelighed. Endvidere trækkes paralleller til lignende forsteningsmyter i Nordatlanten, hvilket viser historiens rødder i en bredere mytologisk tradition, selvom den færøske udgave har sin egen unikke karakter. Til sidst overvejes legendens varige arv, som fortsat fascinerer lokale og turister og beriger landskabets dramatiske skønhed.
`;
    return <MarkdownRenderer content={markdownContent} />;
  };

  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-down">
              Vitlíki podvarpur
            </h1>
            <p className="text-xl text-text/80 max-w-2xl mx-auto animate-fade-down">
              Risin og Kellingin
            </p>
          </div>

          <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-8 border border-primary/20 shadow-lg animate-fade-up">
            <div className="flex gap-4 mb-6 items-center">
              <div className="h-20 w-20 overflow-hidden rounded-lg">
                <img 
                  src="/images/podcast_thumbnail.png" 
                  alt="Risin og Kellingin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text">Risin og Kellingin</h2>
                <p className="text-text/80"> 24 Juni 2025 • Longd: 5 min.</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-text/80 leading-relaxed">
                Risin og Kellingin podcast episode.
              </p>
            </div>

            <div className="mb-4">
              {/* Hidden audio element */}
              <audio
                ref={audioRef}
                preload="metadata"
                className="hidden"
              />

              <div className="flex justify-between text-text/70 text-sm mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSliderChange}
                className="w-full h-2 bg-primary/30 rounded-full appearance-none cursor-pointer accent-primary"
                disabled={isLoading || !!error}
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={skipBackward}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                aria-label="Skip backward 15 seconds"
                disabled={isLoading || !!error}
              >
                <SkipBack size={24} />
              </button>

              <button
                onClick={handlePlayPause}
                className="p-6 rounded-full bg-primary hover:bg-primary/90 transition-colors text-background"
                aria-label={isPlaying ? "Pause" : "Play"}
                disabled={isLoading || !!error}
              >
                {isLoading ? (
                  <span className="animate-spin h-8 w-8 border-2 border-background rounded-full border-t-transparent"></span>
                ) : (
                  isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />
                )}
              </button>

              <button
                onClick={skipForward}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                aria-label="Skip forward 15 seconds"
                disabled={isLoading || !!error}
              >
                <SkipForward size={24} />
              </button>
            </div>

            {/* Error state */}
            {error && (
              <div className="mt-4 p-3 bg-destructive/10 text-destructive rounded-md text-center">
                <p>{error}</p>
                <p className="text-sm mt-1">Please try again or contact support if the issue persists.</p>
              </div>
            )}
          </div>

          <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-xl font-semibold mb-4">Episode Notes</h3>
            <EpisodeNotes />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
