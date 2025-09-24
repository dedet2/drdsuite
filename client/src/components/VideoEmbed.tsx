import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoEmbedProps {
  provider: 'youtube' | 'vimeo';
  id: string;
  title: string;
  thumbnail?: string;
  autoplay?: boolean;
  className?: string;
}

export default function VideoEmbed({
  provider,
  id,
  title,
  thumbnail,
  autoplay = false,
  className = ""
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(false);
  
  // Mock thumbnail if none provided - in real app this would come from video API
  const defaultThumbnail = thumbnail || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  
  const getEmbedUrl = () => {
    if (provider === 'youtube') {
      return `https://www.youtube.com/embed/${id}?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}`;
    }
    return `https://player.vimeo.com/video/${id}?autoplay=${isPlaying ? 1 : 0}&muted=${isMuted ? 1 : 0}`;
  };

  const handlePlay = () => {
    setIsPlaying(true);
    console.log(`Playing video: ${title}`);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    console.log(`Video ${isMuted ? 'unmuted' : 'muted'}`);
  };

  const toggleFullscreen = () => {
    console.log('Fullscreen toggled');
  };

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden group ${className}`} data-testid="video-embed">
      <div className="aspect-video relative">
        {!isPlaying ? (
          // Thumbnail with play button
          <div className="relative w-full h-full cursor-pointer" onClick={handlePlay}>
            <img 
              src={defaultThumbnail} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg"
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-black hover:scale-110 transition-all duration-300"
                data-testid="button-video-play"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          </div>
        ) : (
          // Embedded video
          <iframe
            src={getEmbedUrl()}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        
        {/* Video Controls Overlay */}
        {isPlaying && (
          <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              className="bg-black/50 hover:bg-black/70 text-white"
              onClick={toggleMute}
              data-testid="button-video-mute"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-black/50 hover:bg-black/70 text-white"
              onClick={toggleFullscreen}
              data-testid="button-video-fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
      
      {/* Video Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2" data-testid="text-video-title">{title}</h3>
        <p className="text-sm text-muted-foreground">
          Dr. Dédé Tetsubayashi discusses AI governance and accessible futures at TEDx
        </p>
      </div>
    </div>
  );
}