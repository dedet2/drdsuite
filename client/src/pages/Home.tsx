import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'wouter';
import heroBanner from '/hero-banner.jpg';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:flex lg:items-center overflow-hidden">
        {/* Background gradient - diagonal and transparent enough to see image */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-purple-500/40 to-cyan-400/50 z-0"></div>
        
        {/* Mobile/Tablet: Image at top */}
        <div className="lg:hidden relative z-10 w-full h-[40vh] min-h-[300px]">
          <img 
            src={heroBanner} 
            alt="Dr. Dédé Tetsubayashi"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-purple-600/70"></div>
        </div>
        
        {/* Hero Content - full width on mobile, left side on desktop */}
        <div className="relative z-20 w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transforming AI Through Equitable Innovation
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
            Expert consulting, strategic advisory, and transformative retreats that prove social justice and business success aren't just compatible—they're essential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tedx">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90" data-testid="button-watch-tedx">
                Watch TEDx Talk
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm" data-testid="button-book-consultation">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop: Hero Image - right side with proper object-fit */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-10">
          <img 
            src={heroBanner} 
            alt="Dr. Dédé Tetsubayashi"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-600/10 to-purple-600/70"></div>
        </div>
      </section>
    </div>
  );
}