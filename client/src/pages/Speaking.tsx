import { Button } from '@/components/ui/button';
import { Play, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Speaking() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Speaking & Events
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Featured Talk</h2>
            <p className="text-lg mb-4">AI Governance and Accessible Futures - TEDx</p>
            <a href="https://dr-dede-tedx-homepage.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-watch-tedx">
                <Play className="mr-2 h-5 w-5" />
                Watch TEDx Talk
              </Button>
            </a>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Book Speaking Engagement</h2>
            <ContactForm 
              triggerText="Contact"
              triggerVariant="default"
              triggerSize="lg"
              description="Send a message"
              context="speaking-page"
            />
          </div>
        </div>
      </section>
    </div>
  );
}