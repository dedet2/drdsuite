import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Shield, Accessibility, TrendingUp, Briefcase, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:flex lg:items-center overflow-hidden">
        {/* Background gradient - diagonal and transparent enough to see image */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-purple-500/40 to-cyan-400/50 z-0"></div>
        
        {/* Mobile/Tablet: Image at top */}
        <div className="lg:hidden relative z-10 w-full h-[40vh] min-h-[300px]">
          <img 
            src="/hero-banner.jpg" 
            alt="Dr. Dédé Tetsubayashi"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-purple-600/70"></div>
        </div>
        
        {/* Hero Content - full width on mobile, left side on desktop */}
        <div className="relative z-20 w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transforming AI Through Equitable Innovation
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
            Expert consulting, strategic advisory, and transformative retreats that prove social justice and business success aren't just compatible—they're essential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tedx">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90" data-testid="button-watch-tedx">
                Watch TEDx Talk
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm" data-testid="button-book-consultation">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop: Hero Image - right side with proper object-fit */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-10">
          <img 
            src="/hero-banner.jpg" 
            alt="Dr. Dédé Tetsubayashi"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-600/10 to-purple-600/70"></div>
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
    </div>
  );
}