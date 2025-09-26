import { Button } from '@/components/ui/button';
import { Globe, Users } from 'lucide-react';

export default function Retreat() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Retreats & Advocacy
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Luxury Wellness</h2>
              <a href="https://rar.dr-dede.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" data-testid="button-visit-rar">
                  <Globe className="mr-2 h-5 w-5" />
                  Visit RAR Wellness
                </Button>
              </a>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Disability Advocacy</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Black, queer, first-generation Togolese immigrant and transracial adoptee living with sickle-cell disease.
              </p>
              <a href="https://dr-dede.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" data-testid="button-visit-dr-dede">
                  <Users className="mr-2 h-5 w-5" />
                  Visit Dr. Dédé Site
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}