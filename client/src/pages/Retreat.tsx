import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Users, Heart, Shield, Target, Calendar, Building2, Accessibility, TrendingUp, Briefcase, Award, CheckCircle } from 'lucide-react';
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

      {/* Impact Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600/50 via-purple-500/40 to-cyan-400/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Proven Impact Across Industries</h2>
            <p className="text-lg text-white/90">
              Measurable results that transform organizations and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">AI Systems Secured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">47%</div>
              <div className="text-white/80">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$300M+</div>
              <div className="text-white/80">Compliance Risks Mitigated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-white/80">Reduction in Audit Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground">
              Expert consulting services that deliver transformational results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Governance Consulting - incluu */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>AI Governance Consulting</CardTitle>
                <CardDescription>
                  Building responsible AI systems through ethical frameworks, compliance strategies, and security excellence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ethical AI framework development</li>
                  <li>• Regulatory compliance strategy</li>
                  <li>• Security architecture design</li>
                  <li>• Risk assessment & mitigation</li>
                </ul>
                <div className="mt-6">
                  <span className="text-xs text-purple-600 font-semibold">incluu</span>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Excellence - incluu */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Accessibility className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Accessibility Excellence</CardTitle>
                <CardDescription>
                  Creating inclusive experiences that empower all users while ensuring WCAG compliance and legal protection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• WCAG 2.2 AA/AAA compliance</li>
                  <li>• Inclusive design consulting</li>
                  <li>• Accessibility audits & testing</li>
                  <li>• Team training & certification</li>
                </ul>
                <div className="mt-6">
                  <span className="text-xs text-purple-600 font-semibold">incluu</span>
                </div>
              </CardContent>
            </Card>

            {/* Growth Strategy - Dr. Dédé */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle>Growth Strategy</CardTitle>
                <CardDescription>
                  Strategic advisory services that accelerate business growth while maintaining social responsibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market expansion strategy</li>
                  <li>• Executive team alignment</li>
                  <li>• Transformation roadmapping</li>
                  <li>• Innovation acceleration</li>
                </ul>
                <div className="mt-6">
                  <span className="text-xs text-cyan-400 font-semibold">Dr. Dédé</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dual Brand Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Two Brands, One Mission</h2>
            <p className="text-lg text-muted-foreground">
              Complementary expertise that delivers comprehensive transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dr. Dédé Brand Card */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <CardTitle>Dr. Dédé</CardTitle>
                    <p className="text-sm text-cyan-400">Executive Advisory & Strategy</p>
                  </div>
                </div>
                <CardDescription>
                  Premium consulting services for C-suite executives and organizations seeking transformational growth with social impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Fortune 500 executive advisory</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Strategic transformation consulting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Executive retreat facilitation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Keynote speaking & thought leadership</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/dr-dede">
                    <Button variant="outline" className="w-full" data-testid="button-learn-dr-dede">
                      Learn More About Dr. Dédé
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* incluu Brand Card */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>incluu</CardTitle>
                    <p className="text-sm text-purple-600">AI Governance & Accessibility</p>
                  </div>
                </div>
                <CardDescription>
                  Specialized consulting for organizations building responsible AI systems and inclusive digital experiences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">AI ethics & governance frameworks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">WCAG compliance & accessibility</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Inclusive design implementation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Regulatory compliance strategy</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/incluu">
                    <Button variant="outline" className="w-full" data-testid="button-learn-incluu">
                      Learn More About incluu
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
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