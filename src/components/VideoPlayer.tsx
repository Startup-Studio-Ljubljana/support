import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export const VideoPlayer = ({ src, poster, className }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = value[0];
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const isIOS = () => {
    if (typeof navigator === "undefined") return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    const video = videoRef.current;
    const ios = isIOS();
    if (!container || !video) return;

    try {
      if (ios) {
        if (typeof (video as any).webkitEnterFullscreen === "function") {
          (video as any).webkitEnterFullscreen();
        }
      } else {
        if (!document.fullscreenElement) {
          await container.requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.error("Error toggling fullscreen:", err);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative group rounded-2xl overflow-hidden bg-card",
        "shadow-[0_0_50px_rgba(139,92,246,0.15)]",
        className,
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(!isPlaying)}
    >
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        poster={poster}
        className={cn(
          "w-full h-full object-cover",
          "scale-[1.005] object-center translate-y-[1%]",
        )}
        onClick={togglePlay}
      />

      {/* Center Play Button Overlay */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          "bg-black/20 backdrop-blur-[1px] transition-opacity duration-300",
          isPlaying && "opacity-0 pointer-events-none",
        )}
      >
        <Button
          onClick={togglePlay}
          size="lg"
          className={cn(
            "size-24 rounded-full",
            "bg-primary/90 hover:bg-primary",
            "transition-all duration-300",
            "cursor-pointer",
          )}
        >
          <Play className="size-12 ml-1" fill="currentColor" />
        </Button>
      </div>

      {/* Controls Bar */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0",
          "bg-gradient-to-t from-black/50 to-black/30",
          "backdrop-blur-md p-2.5 md:p-4 transition-all duration-300 m-1 mb-3 rounded-2xl",
          (showControls || !isPlaying) && currentTime > 1
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0",
        )}
      >
        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={togglePlay}
              size="sm"
              variant="ghost"
              className="hover:bg-white/10"
            >
              {isPlaying ? (
                <Pause className="size-6 text-white" />
              ) : (
                <Play className="size-6 text-white" />
              )}
            </Button>

            <div className="flex items-center gap-2 group/volume">
              <Button
                onClick={toggleMute}
                size="sm"
                variant="ghost"
                className="hover:bg-white/10"
              >
                {isMuted ? (
                  <VolumeX className="size-6 text-white" />
                ) : (
                  <Volume2 className="size-6 text-white" />
                )}
              </Button>
              <div className="w-0 group-hover/volume:w-20 group-hover/volume:h-auto transition-all duration-300 overflow-hidden group-hover/volume:overflow-visible group-hover/volume:px-1">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            onValueChange={handleSeek}
            className="cursor-pointer flex-1"
          />
          <div className="flex justify-between mt-1 text-sm mx-2 text-white mb-1 gap-1">
            <span>{formatTime(currentTime)}</span>/
            <span>{formatTime(duration)}</span>
          </div>

          <Button
            onClick={toggleFullscreen}
            size="sm"
            variant="ghost"
            className="hover:bg-white/10"
          >
            {isFullscreen ? (
              <Minimize className="size-6 text-white" />
            ) : (
              <Maximize className="size-6 text-white" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
