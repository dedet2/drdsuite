import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Shield, Lock, AlertTriangle } from 'lucide-react';

export default function Admin() {
  const handleDashboardAccess = () => {
    window.open('https://replit.com/@admin3035/risktravel-dashboard', '_blank', 'noopener,noreferrer');
    console.log('Opening RiskTravel Dashboard');
  };

  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 px-4 sm:px-0">
            Private Control Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Admin access is managed off-site for security and operational efficiency.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <Lock className="w-5 h-5 mr-2" />
              Secure Access Portal
            </CardTitle>
            <CardDescription>
              This control center is private and requires authenticated access
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                    Authentication Required
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Access to the admin dashboard requires valid authentication credentials. 
                    No user data or credentials are stored on this public website.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleDashboardAccess}
                className="px-8"
                data-testid="button-open-dashboard"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Open RiskTravel Dashboard
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Opens in a new secure window
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">What you can manage:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Content management for all brand properties
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Analytics and performance monitoring
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Client project tracking and reporting
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Retreat program administration
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Financial and operational dashboards
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            For technical support or access issues, contact the system administrator.
            <br />
            This portal maintains separation between public-facing content and private operations.
          </p>
        </div>
      </div>
    </div>
  );
}