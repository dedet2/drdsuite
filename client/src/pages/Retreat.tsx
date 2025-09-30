import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Users, Heart, Shield, Target, Calendar } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/ContactForm';

export default function Retreat() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/50 via-cyan-500/40 to-purple-600/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Retreats & Advocacy
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Dr. Dédé and incluu offer transformational executive retreats and disability advocacy programs 
            that create lasting personal and organizational change. Combining AI governance expertise with 
            inclusive leadership development for comprehensive transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              triggerText="Schedule Executive Retreat"
              triggerVariant="default"
              triggerSize="lg"
              description="Book a transformational retreat for your leadership team"
              context="retreat-page-hero"
              defaultType="consultation"
              defaultService="Executive Retreat"
              icon={Calendar}
            />
            <Link href="/disability-advocacy">
              <Button variant="outline" size="lg" data-testid="button-explore-advocacy">
                <Heart className="mr-2 h-5 w-5" />
                Explore Advocacy Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Retreats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Executive Retreats</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exclusive leadership development experiences that integrate wellness, strategic thinking, and authentic leadership principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Leadership Wellness</CardTitle>
                <CardDescription>
                  Integrative approach to executive wellness combining mindfulness, strategic thinking, and authentic leadership.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Executive wellness assessments</li>
                  <li>• Stress management techniques</li>
                  <li>• Leadership authenticity workshops</li>
                  <li>• Work-life integration strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Organizational Resilience</CardTitle>
                <CardDescription>
                  Building resilient organizations through inclusive leadership and strategic thinking frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Change management strategies</li>
                  <li>• Inclusive leadership development</li>
                  <li>• Crisis response planning</li>
                  <li>• Team resilience building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Strategic Transformation</CardTitle>
                <CardDescription>
                  Executive retreats focused on strategic thinking, innovation, and sustainable business transformation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strategic planning workshops</li>
                  <li>• Innovation methodology</li>
                  <li>• Market expansion strategies</li>
                  <li>• Sustainable growth frameworks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Luxury Wellness Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/50 via-cyan-500/40 to-purple-600/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Luxury Wellness</h2>
          <p className="text-lg text-white/90 mb-8">
            Premium wellness experiences designed for high-achieving executives and organizations seeking transformational outcomes.
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Globe className="mr-2 h-6 w-6" />
                Rest as Resistance Retreat
              </CardTitle>
              <CardDescription>
                One of our flagship wellness offerings combining luxury accommodations with transformational leadership development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">
                Experience our signature retreat program that integrates wellness, leadership development, and strategic thinking in an exclusive luxury setting.
              </p>
              <a href="https://rar.dr-dede.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" data-testid="button-visit-rar">
                  <Globe className="mr-2 h-5 w-5" />
                  Explore RAR Retreat
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disability Advocacy Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Disability Advocacy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Authentic advocacy rooted in lived experience as a Black, queer, first-generation Togolese immigrant and transracial adoptee living with sickle-cell disease.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Lived Experience Leadership</CardTitle>
                <CardDescription>
                  Advocacy informed by personal experience with chronic illness and systemic barriers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Chronic illness accommodation strategies</li>
                  <li>• Intersectional identity advocacy</li>
                  <li>• Healthcare access improvement</li>
                  <li>• Workplace inclusion initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Systemic Change</CardTitle>
                <CardDescription>
                  Creating lasting organizational and societal transformation through disability advocacy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Policy development consultation</li>
                  <li>• Accessibility implementation</li>
                  <li>• Inclusive design strategies</li>
                  <li>• Community partnership building</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Link href="/disability-advocacy">
            <Button size="lg" data-testid="button-disability-advocacy">
              <Users className="mr-2 h-5 w-5" />
              Learn More About Our Advocacy Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/50 via-cyan-500/40 to-purple-600/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Leadership?</h2>
          <p className="text-lg text-white/90 mb-8">
            Join executives from Fortune 500 companies who have transformed their leadership through our retreat programs.
          </p>
          <ContactForm 
            triggerText="Schedule Consultation"
            triggerVariant="default"
            triggerSize="lg"
            description="Discuss your executive retreat and advocacy needs"
            context="retreat-page"
            defaultType="consultation"
            defaultService="Executive Retreats"
          />
        </div>
      </section>
    </div>
  );
}