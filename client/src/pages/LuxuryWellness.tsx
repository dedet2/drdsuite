import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LuxuryWellness() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Luxury Wellness
          </h1>
          
          <a href="https://rar.dr-dede.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" data-testid="button-visit-rar">
              <Globe className="mr-2 h-5 w-5" />
              Visit RAR Wellness
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}