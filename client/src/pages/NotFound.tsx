import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl font-bold text-muted-foreground mb-4">404</div>
          <h1 className="text-4xl font-bold font-serif mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" data-testid="button-home">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}