import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Testimonials
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8 text-left">
            <h3 className="font-semibold mb-2">Quise Rodriguez</h3>
            <p className="text-sm text-muted-foreground mb-4">Director of Inclusivity and Community Building, Katherine Delmar Burke School</p>
            <blockquote className="text-muted-foreground italic mb-4">
              "The team at Incluu are incredible to work with. They are skilled professionals who are experts in research, analysis, and providing action steps based on the data collected. Incluu was able to take Burke's needs into consideration and work in partnership with their team to create an Equity Dashboard that will help the school improve for years to come. The Incluu team was friendly, reliable, equity centered, and based every conversation with a problem solving approaching."
            </blockquote>
            <p className="text-xs text-muted-foreground">Verified from incluu.vercel.app</p>
          </div>
          
          <a href="https://incluu.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" data-testid="button-visit-incluu">
              Visit incluu.vercel.app
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}