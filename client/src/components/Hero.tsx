import { Button } from '@/components/ui/button';
import { Play, Calendar, ArrowRight } from 'lucide-react';
import aiGovernanceImage from '@assets/stock_images/professional_black_w_b86625b4.jpg';

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
  backgroundImage = aiGovernanceImage
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            <span className="block text-white">{title}</span>
            <span className="block text-primary">
              {subtitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30 text-white"
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
              className="text-lg px-8 py-6 bg-white/10 hover:bg-primary/20 backdrop-blur-sm border border-primary/50 text-white"
              onClick={secondaryCta.action}
              data-testid="button-hero-secondary"
            >
              <Play className="w-5 h-5 mr-2" />
              {secondaryCta.text}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}