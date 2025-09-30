import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Heart, Shield, Users, Target, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from '@/components/ContactForm';

export default function RetreatsAdvocacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/50 via-cyan-500/40 to-purple-600/50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Transform Leadership & Create Impact</Badge>
          <h1 className="text-4xl font-bold text-white mb-6">
            Retreats & Advocacy
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Transformational experiences that combine executive wellness, strategic leadership development, 
            and disability advocacy. Led by Dr. Dédé's unique perspective as a disability advocate, AI 
            governance expert, and inclusive leadership consultant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              triggerText="Schedule Consultation"
              triggerVariant="default"
              triggerSize="lg"
              description="Discuss how our retreats and advocacy programs can transform your organization"
              context="retreats-advocacy-overview"
              defaultType="consultation"
              defaultService="Retreats & Advocacy"
              icon={Calendar}
            />
            <Button variant="outline" size="lg" asChild data-testid="button-explore-programs">
              <a href="#programs">
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Programs
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="programs">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Transform Your Organization</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive programs designed to create lasting change through 
              executive development, wellness transformation, and inclusive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive Retreats Card */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Executive Retreats</CardTitle>
                <CardDescription>
                  Strategic leadership development experiences that integrate wellness, authentic 
                  leadership, and organizational transformation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Leadership wellness assessments</li>
                  <li>• Strategic planning workshops</li>
                  <li>• Organizational resilience building</li>
                  <li>• Authentic leadership development</li>
                </ul>
                <div className="space-y-3">
                  <Link href="/retreat">
                    <Button variant="outline" className="w-full" data-testid="link-executive-retreats">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <ContactForm 
                    triggerText="Schedule Retreat"
                    triggerVariant="default"
                    triggerClassName="w-full"
                    description="Book an executive retreat for your leadership team"
                    context="retreats-advocacy-executive"
                    defaultType="consultation"
                    defaultService="Executive Retreat"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Luxury Wellness Card */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Luxury Wellness</CardTitle>
                <CardDescription>
                  Premium "Rest as Resistance" experiences combining luxury hospitality with 
                  transformational wellness programs for executives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• 5-star luxury destinations</li>
                  <li>• Executive wellness coaching</li>
                  <li>• Rest as Resistance philosophy</li>
                  <li>• Holistic wellness integration</li>
                </ul>
                <div className="space-y-3">
                  <Link href="/luxury-wellness">
                    <Button variant="outline" className="w-full" data-testid="link-luxury-wellness">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="https://rar.dr-dede.com">
                    <Button className="w-full" data-testid="button-visit-rar">
                      <Globe className="mr-2 h-4 w-4" />
                      Visit RAR Retreat
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Disability Advocacy Card */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Disability Advocacy</CardTitle>
                <CardDescription>
                  Authentic advocacy rooted in lived experience, creating systemic change through 
                  intersectional leadership and inclusive design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Lived experience leadership</li>
                  <li>• Healthcare system advocacy</li>
                  <li>• Workplace inclusion strategies</li>
                  <li>• Intersectional identity navigation</li>
                </ul>
                <div className="space-y-3">
                  <Link href="/disability-advocacy">
                    <Button variant="outline" className="w-full" data-testid="link-disability-advocacy">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <ContactForm 
                    triggerText="Partner With Us"
                    triggerVariant="default"
                    triggerClassName="w-full"
                    description="Discuss disability advocacy and accessibility needs"
                    context="retreats-advocacy-disability"
                    defaultType="consultation"
                    defaultService="Disability Advocacy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our unique approach combines Dr. Dédé's expertise in AI governance, disability advocacy, 
              and inclusive leadership with incluu's technology solutions for comprehensive transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg">Lived Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Programs informed by authentic lived experience with disability, chronic illness, 
                  and intersectional identity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creating systemic change through policy development, inclusive design, and 
                  organizational transformation worldwide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg">AI & Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integrating responsible AI governance and ethical technology frameworks into 
                  all leadership development programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg">Holistic Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive approach addressing physical, mental, emotional, and spiritual 
                  dimensions of leadership wellness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/50 via-cyan-500/40 to-purple-600/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're seeking executive development, wellness transformation, or disability 
            advocacy expertise, we're here to create lasting change for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              triggerText="Get Started Today"
              triggerVariant="default"
              triggerSize="lg"
              description="Let's discuss how our programs can transform your organization"
              context="retreats-advocacy-cta"
              defaultType="consultation"
              defaultService="Retreats & Advocacy"
            />
            <a href="https://dr-dede.vercel.app/">
              <Button variant="outline" size="lg" data-testid="button-learn-about-dede">
                <Globe className="mr-2 h-5 w-5" />
                Learn About Dr. Dédé
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}