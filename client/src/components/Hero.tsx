import { Button } from '@/components/ui/button';
import { Play, Calendar, ArrowRight } from 'lucide-react';
import professionalHeadshot from '@assets/dr_dede_professional_headshot.jpg';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    action: () => void;
  };
  secondaryCta: {
    text: string;
    action: () => void;
  };
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage = professionalHeadshot
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* Split-Screen Layout */}
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Left Side: Gradient + Content */}
        <div 
          className="flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-16 md:py-0"
          style={{ 
            background: 'linear-gradient(135deg, rgba(98, 0, 234, 0.85) 0%, rgba(124, 77, 255, 0.75) 35%, rgba(68, 138, 255, 0.65) 70%, rgba(24, 255, 255, 0.6) 100%)'
          }}
        >
          <div className="max-w-xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-4 sm:mb-6 leading-tight">
              <span className="block text-white drop-shadow-lg">{title}</span>
              <span className="block drop-shadow-lg" style={{ color: 'hsl(180 100% 55%)' }}>
                {subtitle}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/95 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
                onClick={primaryCta.action}
                data-testid="button-hero-primary"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {primaryCta.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                onClick={secondaryCta.action}
                data-testid="button-hero-secondary"
              >
                <Play className="w-5 h-5 mr-2" />
                {secondaryCta.text}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Photography */}
        <div 
          className="flex-1 relative bg-cover bg-center bg-no-repeat min-h-[40vh] md:min-h-full"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Dark wash for mobile text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 md:hidden" />
        </div>
      </div>
    </section>
  );
}