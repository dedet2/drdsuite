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

      {/* Comprehensive Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comprehensive Advocacy Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Evidence-based consulting services rooted in 15+ years of lived experience navigating complex systems as a Black, queer, disabled professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Organizational Transformation</CardTitle>
                <CardDescription>
                  End-to-end disability inclusion strategy for organizations seeking systemic change.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Accessibility audits and compliance</li>
                  <li>• Inclusive policy development</li>
                  <li>• Leadership training and education</li>
                  <li>• Culture transformation strategies</li>
                  <li>• Employee resource group development</li>
                  <li>• Accommodation process optimization</li>
                </ul>
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">Starting at $25,000</Badge>
                </div>
                <ContactForm 
                  triggerText="Learn More"
                  triggerVariant="outline"
                  className="w-full"
                  description="Discuss organizational transformation needs"
                  context="disability-advocacy-org"
                  defaultType="consultation"
                  defaultService="Organizational Transformation"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Healthcare Navigation Consulting</CardTitle>
                <CardDescription>
                  Strategic guidance for healthcare organizations and chronic illness advocacy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Patient advocacy training</li>
                  <li>• Healthcare equity consulting</li>
                  <li>• Medical system navigation</li>
                  <li>• Chronic illness workplace support</li>
                  <li>• Insurance advocacy strategies</li>
                  <li>• Care team communication</li>
                </ul>
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">From $15,000</Badge>
                </div>
                <ContactForm 
                  triggerText="Explore Healthcare"
                  triggerVariant="outline"
                  className="w-full"
                  description="Discuss healthcare navigation consulting"
                  context="disability-advocacy-healthcare"
                  defaultType="consultation"
                  defaultService="Healthcare Navigation"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Leadership Development</CardTitle>
                <CardDescription>
                  Empowering disabled leaders and building intersectional leadership capacity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Disabled leader mentorship</li>
                  <li>• Intersectional identity coaching</li>
                  <li>• Career advancement strategies</li>
                  <li>• Executive presence development</li>
                  <li>• Public speaking and advocacy</li>
                  <li>• Network building and community</li>
                </ul>
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">$5,000/month</Badge>
                </div>
                <ContactForm 
                  triggerText="Develop Leadership"
                  triggerVariant="outline"
                  className="w-full"
                  description="Discuss leadership development programs"
                  context="disability-advocacy-leadership"
                  defaultType="consultation"
                  defaultService="Leadership Development"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Technology Accessibility</CardTitle>
                <CardDescription>
                  Comprehensive accessibility strategy for digital products and platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Accessibility compliance audits</li>
                  <li>• Inclusive product design</li>
                  <li>• User experience testing</li>
                  <li>• Assistive technology integration</li>
                  <li>• Developer training programs</li>
                  <li>• Legal compliance strategy</li>
                </ul>
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">From $35,000</Badge>
                </div>
                <ContactForm 
                  triggerText="Assess Technology"
                  triggerVariant="outline"
                  className="w-full"
                  description="Discuss technology accessibility needs"
                  context="disability-advocacy-tech"
                  defaultType="consultation"
                  defaultService="Technology Accessibility"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Speaking & Education</CardTitle>
                <CardDescription>
                  Transformational presentations and workshops on disability advocacy and inclusion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Keynote presentations</li>
                  <li>• Workshop facilitation</li>
                  <li>• Panel participation</li>
                  <li>• Educational curriculum development</li>
                  <li>• Media interviews and commentary</li>
                  <li>• Conference and event hosting</li>
                </ul>
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">From $15,000/event</Badge>
                </div>
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

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Emergency Advocacy</CardTitle>
                <CardDescription>
                  Rapid response advocacy for urgent accessibility and discrimination issues.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Crisis intervention strategies</li>
                  <li>• Legal compliance support</li>
                  <li>• Media relations and messaging</li>
                  <li>• Stakeholder communication</li>
                  <li>• Rapid training deployment</li>
                  <li>• 24/7 consultation availability</li>
                </ul>
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">$10,000/week</Badge>
                </div>
                <ContactForm 
                  triggerText="Emergency Support"
                  triggerVariant="outline"
                  className="w-full"
                  description="Request emergency advocacy support"
                  context="disability-advocacy-emergency"
                  defaultType="consultation"
                  defaultService="Emergency Advocacy"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Transformation Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real impact from organizations that have embraced disability inclusion through authentic advocacy and systemic change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">Fortune 500 Healthcare</Badge>
                <CardTitle>$50M Healthcare Equity Initiative</CardTitle>
                <CardDescription>
                  Comprehensive accessibility transformation across 200+ facilities serving 2M+ patients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Challenge:</h4>
                    <p className="text-xs text-muted-foreground">
                      Legacy healthcare system with significant accessibility gaps, rising litigation risk, and poor patient satisfaction scores among disabled patients.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Solution:</h4>
                    <p className="text-xs text-muted-foreground">
                      18-month comprehensive accessibility audit, staff training program, policy overhaul, and technology modernization guided by lived experience insights.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Results:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• 94% improvement in patient satisfaction scores</li>
                      <li>• Zero accessibility-related legal issues</li>
                      <li>• $25M cost savings through early intervention</li>
                      <li>• 500+ staff trained in disability advocacy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">Global Technology Company</Badge>
                <CardTitle>Inclusive Product Development</CardTitle>
                <CardDescription>
                  Complete product accessibility overhaul reaching 50M+ users worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Challenge:</h4>
                    <p className="text-xs text-muted-foreground">
                      Major accessibility compliance gaps, user complaints, and missed market opportunities due to inaccessible product design.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Solution:</h4>
                    <p className="text-xs text-muted-foreground">
                      Embedded accessibility expert team, implemented inclusive design methodology, comprehensive user testing with disabled users.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Results:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• $150M new market segment access</li>
                      <li>• 99.2% accessibility compliance rate</li>
                      <li>• 300% increase in disabled user engagement</li>
                      <li>• Industry accessibility leadership recognition</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Advocacy Methodology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven framework combining lived experience with strategic business transformation for sustainable disability inclusion.
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Assess & Discover</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive organizational assessment including accessibility audits, culture evaluation, and gap analysis through both technical and lived experience lenses.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Design & Strategize</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom strategy development incorporating intersectional approach, business objectives, and sustainable implementation roadmap with clear metrics and accountability.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Transform & Sustain</h3>
                    <p className="text-sm text-muted-foreground">
                      Implementation support, training delivery, culture transformation, and ongoing accountability systems to ensure lasting organizational change.
                    </p>
                  </div>
                </div>
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
            <a href="https://dr-dede.vercel.app/">
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