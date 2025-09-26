import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

export default function DisabilityAdvocacy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Disability Advocacy
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Black, queer, first-generation Togolese immigrant and transracial adoptee living with sickle-cell disease.
          </p>
          
          <a href="https://dr-dede.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" data-testid="button-visit-dr-dede">
              <Users className="mr-2 h-5 w-5" />
              Visit Dr. Dédé Site
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}