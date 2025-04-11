import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";

export default function TariffsPodcast() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // Reference MP3 from the correct public directory path with better error handling
  const audioUrl = "/other_media/Faroe_Islands_Impact_of_New_US_Tariffs.mp3";

  React.useEffect(() => {
    const audioElement = audioRef.current;
    
    if (audioElement) {
      console.log(`Setting audio source to: ${audioUrl}`);
      
      // Add error handling for audio loading
      const handleError = (e: Event) => {
        console.error("Audio Element Error:", e);
        if (audioElement.error) {
          console.error("Error Code:", audioElement.error.code);
        }
      };
      
      audioElement.addEventListener('error', handleError);
      
      return () => {
        audioElement.removeEventListener('error', handleError);
      };
    }
    if (!audioElement) return;

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
    if (audioElement.src !== new URL(audioUrl, window.location.href).href) {
      console.log(`Setting audio source to: ${audioUrl}`);
      audioElement.src = audioUrl;
      setIsLoading(true);
      setError(null);
    }

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
  }, [audioUrl]);

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
# Impact of New U.S. Tariffs on the Faroe Islands – April 2025

## Executive Summary  
The **Faroe Islands' export-driven economy** faces significant challenges from the new U.S. import tariffs introduced on April 5, 2025. A universal 10% tariff now applies to most Faroese goods entering the U.S., with seafood – the **backbone of Faroese exports** – directly in the crosshairs. Faroese salmon, a premium export that makes up nearly half of the nation's export value, is particularly exposed. Approximately **one-third of leading producer Bakkafrost's exports go to the U.S.** ([Færøsk lakseproducent køber eget fragtfly - skal styrke USA-eksport](https://www.sermitsiaq.ag/erhverv/faerosk-lakseproducent-kober-eget-fragtfly-skal-styrke-usa-eksport/417139#:~:text=Fersk%20fisk%20til%20sushi%20i,Y)), so a 10% price handicap threatens to erode profit margins, reduce export revenues, and weaken the competitive position of Faroese salmon in the critical American market. Other fish products and any minor exports (such as wool textiles) will likewise become more expensive in the U.S., squeezing those niche industries. 

**Immediate economic impacts** are expected to include a dip in the Faroe Islands' trade surplus as U.S.-bound shipments decline or fetch lower prices. Export earnings could fall by tens of millions of dollars, weighing on GDP growth and tax revenues in this small economy. With fisheries contributing about **20% of GDP and 15% of jobs** ([Foreign Trade - The Government](https://www.government.fo/en/foreign-relations/foreign-trade#:~:text=Fisheries%20and%20Aquaculture%20Fisheries%2C%20and,employed%20by%20the%20fishing%20industry)), any slowdown in the seafood sector could ripple through employment and incomes. 

In terms of **market dynamics**, the Faroe Islands fortunately face the same 10% tariff rate as most other seafood suppliers (e.g. the UK, Chile, Iceland) ([Analysis: Here are five big takeaways from Trump's tariff bombshell : Intrafish - Siam Canadian](https://siamcanadian.com/analysis-here-are-five-big-takeaways-from-trumps-tariff-bombshell-intrafish/#:~:text=The%20rate%20puts%20Norway%20at,also%20face%2010%20percent%20rates)), avoiding a disadvantage relative to those competitors. Notably, Norway – a major salmon rival – was hit with a 15% tariff ([Analysis: Here are five big takeaways from Trump's tariff bombshell : Intrafish - Siam Canadian](https://siamcanadian.com/analysis-here-are-five-big-takeaways-from-trumps-tariff-bombshell-intrafish/#:~:text=Norway%20took%20the%20bullet%20on,salmon)), potentially giving Faroese salmon a price edge over Norwegian product in the U.S. However, **Canada's exemption** under USMCA means Canadian salmon enters tariff-free ([Analysis: Here are five big takeaways from Trump's tariff bombshell : Intrafish - Siam Canadian](https://siamcanadian.com/analysis-here-are-five-big-takeaways-from-trumps-tariff-bombshell-intrafish/#:~:text=Canada%2C%20meanwhile%2C%20came%20out%20the,its%20exports%20to%20the%20US)), posing a new competitive threat. Faroe producers will likely seek to **redirect exports to alternative markets** (EU, UK, Asia) to compensate for any U.S. decline, though absorbing large volumes elsewhere may prove challenging in the short run. 

Policymakers and industry leaders in the Faroe Islands are beginning to respond with **mitigation strategies**. The Faroese government had already revised its salmon tax regime effective 2025 to support industry stability ([Faroese revision to salmon tax presents mixed bag for producers | SeafoodSource](https://www.seafoodsource.com/news/aquaculture/faroese-revision-to-salmon-tax-presents-mixed-bag-for-producers#:~:text=This%20new%20framework%2C%20effective%20from,term%20agreement%20extending%20until%202032)) ([Faroese revision to salmon tax presents mixed bag for producers | SeafoodSource](https://www.seafoodsource.com/news/aquaculture/faroese-revision-to-salmon-tax-presents-mixed-bag-for-producers#:~:text=index%20used%20for%20the%20tax)), a move that could cushion producers' finances amid the tariff shock. Industry groups are expected to lobby for further relief – for example, streamlined regulations or temporary subsidies – to maintain competitiveness. Companies are also adapting: from **cost-cutting and pricing adjustments** to pursuing value-added products and emphasizing Faroe salmon's premium quality to justify higher costs to U.S. buyers. In the long term, the Faroe Islands will need to bolster their economic resilience through diversification and strategic trade relationships to weather a protracted period of U.S. protectionism. 

**Key recommendations** include accelerating efforts to diversify export markets (especially in Europe and Asia), negotiating trade agreements or exemptions where possible, and investing in product innovation and efficiency improvements. By taking proactive measures, Faroese authorities and businesses can mitigate the immediate pain of the tariffs, protect employment in vital industries, and chart a more resilient course for the future.

---

## 1. Sectoral Impact Analysis

 ([Færøsk lakseproducent køber eget fragtfly - skal styrke USA-eksport](https://www.sermitsiaq.ag/erhverv/faerosk-lakseproducent-kober-eget-fragtfly-skal-styrke-usa-eksport/417139)) **Figure:** A FarCargo Boeing 757 freighter acquired by Bakkafrost to transport fresh Faroese salmon directly to the U.S. (New York) in 2022. Around one-third of Bakkafrost's total exports were destined for the U.S. prior to the new tariffs ([Færøsk lakseproducent køber eget fragtfly - skal styrke USA-eksport](https://www.sermitsiaq.ag/erhverv/faerosk-lakseproducent-kober-eget-fragtfly-skal-styrke-usa-eksport/417139#:~:text=Fersk%20fisk%20til%20sushi%20i,Y)). The 10% import duty now imposed threatens th

<div className="mt-8">
  <h3 className="text-xl font-semibold mb-2">Listen to the Analysis</h3>
  <audio
    controls
    src={import.meta.env.MODE === 'production' 
      ? '/other_media/Faroe_Islands_Impact_of_New_US_Tariffs.mp3'
      : '/other_media/Faroe_Islands_Impact_of_New_US_Tariffs.mp3'}
    className="w-full"
    onError={(e) => {
      console.log("Audio Element Error:", e);
      console.log("Error Code:", e.target.error?.code);
      console.log("Current path:", window.location.pathname);
      console.log("Current mode:", import.meta.env.MODE);
    }}
  />
  <div className="text-xs text-gray-500 mt-1">
    If audio doesn't play, you can <a href="/other_media/Faroe_Islands_Impact_of_New_US_Tariffs.mp3" download className="underline">download it here</a>
  </div>
</div>is crucial supply line.  

**Primary Industries Affected:** The **seafood industry dominates Faroese exports**, accounting for 90–95% of total export value ([Foreign Trade - The Government](https://www.government.fo/en/foreign-relations/foreign-trade#:~:text=Fisheries%20and%20Aquaculture%20Fisheries%2C%20and,employed%20by%20the%20fishing%20industry)). Thus, the newly imposed 10% U.S. tariff will principally affect **fish and aquaculture products**, with salmon farming taking center stage. Other exporting sectors – though much smaller in scale – include **traditional fisheries (whitefish and pelagic species)**, and a modest **wool/textiles industry** known for knitwear. All of these will now face a 10% cost hurdle in the U.S. market.
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
              Faroe Islands Podcast
            </h1>
            <p className="text-xl text-text/80 max-w-2xl mx-auto animate-fade-down">
              Special Episode: Impact of New U.S. Tariffs on Faroese Exports
            </p>
          </div>

          <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-8 border border-primary/20 shadow-lg animate-fade-up">
            <div className="flex gap-4 mb-6 items-center">
              <div className="h-20 w-20 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-primary"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text">Impact of New U.S. Tariffs</h2>
                <p className="text-text/80">Released: June 15, 2023 • 16:32 min</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-text/80 leading-relaxed">
                In this special episode, we discuss the potential impact of newly introduced U.S. tariffs on Faroese exports, 
                particularly focusing on the seafood industry which accounts for over 90% of the country's exports.
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