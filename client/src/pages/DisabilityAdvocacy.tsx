import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, Users, Globe, Target, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function DisabilityAdvocacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Lived Experience Leadership</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Disability Advocacy
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Authentic advocacy rooted in lived experience as a Black, queer, first-generation Togolese immigrant and transracial adoptee living with sickle-cell disease. Creating systemic change through intersectional leadership and inclusive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              triggerText="Partner With Us"
              triggerVariant="default"
              triggerSize="lg"
              description="Discuss disability advocacy and accessibility consulting needs"
              context="disability-advocacy-page"
              defaultType="consultation"
              defaultService="Disability Advocacy"
            />
            <a href="https://dr-dede.vercel.app/">
              <Button variant="outline" size="lg" data-testid="button-learn-more">
                <Globe className="mr-2 h-5 w-5" />
                Learn More About Dr. Dédé
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Lived Experience Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Advocacy informed by personal experience with chronic illness, intersectional identity, and systemic barriers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Chronic Illness Navigation</CardTitle>
                <CardDescription>
                  Living with sickle-cell disease while building a successful career in technology and consulting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Healthcare system advocacy and navigation</li>
                  <li>• Workplace accommodation strategies</li>
                  <li>• Energy management and productivity frameworks</li>
                  <li>• Chronic illness disclosure decisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Intersectional Identity</CardTitle>
                <CardDescription>
                  Navigating multiple marginalized identities in technology, healthcare, and professional environments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Black identity in predominantly white spaces</li>
                  <li>• Queer advocacy and workplace inclusion</li>
                  <li>• First-generation immigrant experience</li>
                  <li>• Transracial adoption perspectives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advocacy Focus Areas */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Advocacy Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Creating systemic change through targeted advocacy, policy development, and inclusive design strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Healthcare Access</CardTitle>
                <CardDescription>
                  Improving healthcare systems for chronic illness patients and marginalized communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Healthcare equity consulting</li>
                  <li>• Patient advocacy training</li>
                  <li>• Medical system navigation</li>
                  <li>• Policy development support</li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">$25M+ Healthcare Savings</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Workplace Inclusion</CardTitle>
                <CardDescription>
                  Building truly inclusive workplaces that accommodate chronic illness and disability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Accommodation strategy development</li>
                  <li>• Inclusive hiring practices</li>
                  <li>• Manager training programs</li>
                  <li>• Policy and culture transformation</li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">500+ Leaders Trained</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Technology Access</CardTitle>
                <CardDescription>
                  Ensuring technology serves all users, including those with chronic illness and disability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Accessibility compliance consulting</li>
                  <li>• Inclusive product design</li>
                  <li>• User experience audits</li>
                  <li>• Assistive technology integration</li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">$200M+ Market Access</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Measurable Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$300M+</div>
              <div className="text-sm text-muted-foreground">Cost savings through accessibility-first implementations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Organizations transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Compliance success rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years of advocacy experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Advocacy Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive consulting services rooted in lived experience and proven methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle>Organizational Consultation</CardTitle>
                <CardDescription>
                  Strategic guidance for building inclusive organizations and disability-friendly policies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Accessibility audits and compliance</li>
                  <li>• Inclusive policy development</li>
                  <li>• Leadership training and education</li>
                  <li>• Culture transformation strategies</li>
                </ul>
                <ContactForm 
                  triggerText="Learn More"
                  triggerVariant="outline"
                  className="w-full"
                  description="Discuss organizational consultation needs"
                  context="disability-advocacy-org"
                  defaultType="consultation"
                  defaultService="Organizational Consultation"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle>Speaking & Education</CardTitle>
                <CardDescription>
                  Powerful presentations and workshops on disability advocacy, inclusion, and systemic change.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Keynote presentations</li>
                  <li>• Workshop facilitation</li>
                  <li>• Panel participation</li>
                  <li>• Educational curriculum development</li>
                </ul>
                <ContactForm 
                  triggerText="Book Speaking"
                  triggerVariant="outline"
                  className="w-full"
                  description="Request speaking engagement"
                  context="disability-advocacy-speaking"
                  defaultType="speaking"
                  defaultService="Disability Advocacy Speaking"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Partner With Us for Systemic Change</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join organizations worldwide who are transforming their approach to disability inclusion through authentic, lived-experience leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              triggerText="Schedule Consultation"
              triggerVariant="default"
              triggerSize="lg"
              description="Discuss your disability advocacy and accessibility needs"
              context="disability-advocacy-cta"
              defaultType="consultation"
              defaultService="Disability Advocacy Consulting"
            />
            <a href="https://dr-dede.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Globe className="mr-2 h-5 w-5" />
                Explore Dr. Dédé's Full Story
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}