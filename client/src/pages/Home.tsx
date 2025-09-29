import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Governance & Accessible Futures
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Systems design for compliance, access, and growth. Built from embodied expertise.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <ContactForm 
              triggerText="Contact"
              triggerVariant="default"
              triggerSize="lg"
              description="Send a message"
              context="home-page"
            />
            <a href="https://dr-dede-tedx-homepage.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" data-testid="button-watch-tedx">
                <Play className="w-4 h-4 mr-2" />
                Watch TEDx
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}