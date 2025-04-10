
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function TariffsPodcast() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

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
        audioRef.current.play();
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
                particularly focusing on the seafood industry which accounts for over 90% of the country's exports. Our experts 
                analyze the economic implications and proposed strategies for Faroese businesses navigating these challenging trade dynamics.
              </p>
            </div>

            <div className="mb-4">
              <audio
                ref={audioRef}
                src="/other media/Faroe Islands_ Impact of New U_S_ Tariffs.wav"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
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
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={skipBackward}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                aria-label="Skip backward 15 seconds"
              >
                <SkipBack size={24} />
              </button>
              
              <button
                onClick={handlePlayPause}
                className="p-6 rounded-full bg-primary hover:bg-primary/90 transition-colors text-background"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
              </button>
              
              <button
                onClick={skipForward}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                aria-label="Skip forward 15 seconds"
              >
                <SkipForward size={24} />
              </button>
            </div>
          </div>

          <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-xl font-semibold mb-4">Episode Notes</h3>
            <ul className="list-disc list-inside space-y-2 text-text/80">
              <li>Overview of the new U.S. tariff structure affecting Faroese exports</li>
              <li>Analysis of impact on the Faroese fishing industry and economy</li>
              <li>Interviews with local business owners and industry representatives</li>
              <li>Discussion of potential mitigation strategies and government response</li>
              <li>Long-term outlook for Faroe-U.S. trade relations</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
