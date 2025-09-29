import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Case Studies
          </h1>
          
          <p className="text-lg mb-4">Katherine Delmar Burke School - Equity Dashboard</p>
          <p className="text-sm text-muted-foreground mb-8">Verified from incluu.vercel.app</p>
          
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