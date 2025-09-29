import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import VideoEmbed from '@/components/VideoEmbed';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/ContactForm';
import { Shield, Users, Zap, ArrowRight, Download, ExternalLink, Star, Calculator, FileText, Award } from 'lucide-react';
import drDedeImage from '@assets/dr_dede_headshot.jpg';
import retreatImage from '@assets/generated_images/Luxury_accessible_retreat_center_c5a186a2.png';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="AI Governance"
        subtitle="Accessible Futures"
        description="Systems design for compliance, access, and growth. Built from embodied expertise."
        primaryCta={{
          text: "Work With Me",
          action: () => console.log('Work With Me clicked')
        }}
        secondaryCta={{
          text: "Watch TEDx",
          action: () => console.log('Watch TEDx clicked')
        }}
      />

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 px-4 sm:px-0">
              Expertise That Delivers Results
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              From compliance frameworks to accessible design, I help organizations build systems that work for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <ServiceCard
              title="AI Governance"
              description="Compliance systems that scale with your business"
              features={[
                "Risk assessment frameworks",
                "Regulatory compliance audits", 
                "Policy development & implementation",
                "Team training & workshops"
              ]}
              icon={Shield}
              cta={{
                text: "Learn More",
                action: () => console.log('AI Governance clicked')
              }}
            />
            
            <ServiceCard
              title="Accessibility Systems"
              description="Inclusive design that opens new markets"
              features={[
                "WCAG 2.2 compliance audits",
                "Assistive technology integration",
                "User experience optimization", 
                "Accessibility training programs"
              ]}
              icon={Users}
              cta={{
                text: "Get Started",
                action: () => console.log('Accessibility clicked')
              }}
              highlighted={true}
            />
            
            <ServiceCard
              title="Growth Strategy"
              description="ROI-focused implementation roadmaps"
              features={[
                "Market opportunity analysis",
                "Implementation planning",
                "Performance metrics & KPIs",
                "Ongoing optimization support"
              ]}
              icon={Zap}
              cta={{
                text: "Schedule Call", 
                action: () => console.log('Growth Strategy clicked')
              }}
            />
          </div>
        </div>
      </section>

      {/* TEDx Video Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative">
        <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 px-4 sm:px-0">
                The Future of AI Governance
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
                Watch my TEDx talk on building accessible futures through responsible AI governance
              </p>
            </div>
            
            <VideoEmbed
              provider="youtube"
              id="ZnqUquGeUzI"
              title="You've Been Coded Out: How To Make AI Work For All | Dr. Dédé Tetsubayashi | TEDxAdamsMorgan"
            />
          </div>
        </div>
      </section>

      {/* About & Retreat CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-background relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 px-4 sm:px-0">
                Embodied Expertise, Proven Results
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Black, queer, first-generation Togolese immigrant and Cornell-educated social scientist with 20+ years of experience in ethical technology and social justice. Living with sickle-cell disease, I bring unique insights to AI governance and systems design rooted in lived experience.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                As founder of incluu, I've delivered $300M+ in cost savings and $500M+ in market expansion for enterprise clients through strategic AI governance and tech equity implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" data-testid="button-luxury-retreat">
                  Luxury Retreat Program
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all" data-testid="button-learn-more">
                  Learn More About Me
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-md lg:max-w-lg">
                <img 
                  src={drDedeImage} 
                  alt="Dr. Dédé Tetsubayashi - AI Governance Expert and founder of incluu"
                  className="rounded-lg shadow-2xl w-full h-auto object-cover object-center"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 lg:p-6 rounded-lg shadow-lg">
                  <p className="font-semibold text-sm lg:text-base">AI Governance Expert</p>
                  <p className="text-xs lg:text-sm opacity-90">$300M+ Cost Savings Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Preview */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative">
        <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={retreatImage}
                alt="Luxury accessible retreat center"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold font-serif mb-6">
                Executive Retreat Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your leadership approach in our luxury, fully accessible retreat center. 
                Intimate cohorts of senior executives explore AI governance, accessibility strategy, 
                and inclusive leadership.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>5-day immersive program in nature</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Maximum 12 participants per cohort</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Fully accessible facilities & programming</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Personalized action plans & 6-month follow-up</span>
                </li>
              </ul>
              <Button size="lg" data-testid="button-apply-retreat">
                Apply for Next Cohort
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 px-4 sm:px-0">
              Proven Results
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Real case studies from organizations that transformed their AI governance and accessibility practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Financial Services</Badge>
                  <Badge variant="outline">Enterprise</Badge>
                </div>
                <CardTitle className="text-xl">$87M Risk Mitigation</CardTitle>
                <CardDescription>
                  Global fintech eliminates AI bias while expanding to underserved markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Implemented comprehensive AI governance framework that reduced regulatory risk by 89% while opening access to 2.3M previously excluded customers.
                </p>
                <div className="flex items-center text-sm text-primary font-semibold">
                  <Award className="w-4 h-4 mr-1" />
                  42% Revenue Growth
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Healthcare Tech</Badge>
                  <Badge variant="outline">Series B</Badge>
                </div>
                <CardTitle className="text-xl">$156M Market Expansion</CardTitle>
                <CardDescription>
                  Healthcare AI platform achieves WCAG 2.2 compliance and FDA approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Accessibility-first design strategy enabled platform to serve patients with disabilities, unlocking new market segments and meeting regulatory requirements.
                </p>
                <div className="flex items-center text-sm text-primary font-semibold">
                  <Award className="w-4 h-4 mr-1" />
                  3x User Base Growth
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">EdTech</Badge>
                  <Badge variant="outline">Public Company</Badge>
                </div>
                <CardTitle className="text-xl">$73M Cost Avoidance</CardTitle>
                <CardDescription>
                  Learning platform prevents discrimination lawsuit through proactive AI auditing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Systematic bias detection and mitigation prevented potential class action lawsuit while improving learning outcomes for underrepresented students.
                </p>
                <div className="flex items-center text-sm text-primary font-semibold">
                  <Award className="w-4 h-4 mr-1" />
                  95% Compliance Score
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <ContactForm
              defaultType="download"
              defaultService="Case Studies"
              triggerText="Download Full Case Studies"
              triggerVariant="outline"
              triggerSize="lg"
              icon={Download}
              description="Get detailed case studies with ROI analysis, implementation timelines, and lessons learned."
              context="case-studies"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative">
        <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 px-4 sm:px-0">
              Client Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              What leaders say about working with Dr. Dédé and the incluu team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6">
                  "Dr. Dédé's expertise in AI governance saved our company from a $40M compliance violation. Her systematic approach to bias detection and mitigation is unmatched in the industry."
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold">Sarah Chen, Chief Technology Officer</p>
                  <p className="text-sm text-muted-foreground">Fortune 500 Financial Services</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6">
                  "The accessibility improvements Dr. Dédé recommended didn't just help us avoid legal risk - they opened up entirely new markets. ROI exceeded 300% in the first year."
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold">Marcus Rodriguez, VP Product</p>
                  <p className="text-sm text-muted-foreground">Healthcare Technology Unicorn</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6">
                  "Dr. Dédé brings both the technical depth and lived experience needed to build truly inclusive AI systems. Her executive retreat was transformational for our leadership team."
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold">Jennifer Park, Chief Diversity Officer</p>
                  <p className="text-sm text-muted-foreground">Global Technology Corporation</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6">
                  "Working with incluu transformed how we think about AI governance. The framework they provided scales with our growth while keeping us compliant."
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold">David Kim, CEO</p>
                  <p className="text-sm text-muted-foreground">Series C AI Startup</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 sm:mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12">
              Discover the potential impact of AI governance and accessibility improvements on your business
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Risk Mitigation</h3>
                <p className="text-muted-foreground">Calculate potential savings from avoiding discrimination lawsuits and compliance violations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Market Expansion</h3>
                <p className="text-muted-foreground">Estimate revenue growth from reaching underserved populations and new market segments</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                <p className="text-muted-foreground">Quantify cost savings from streamlined processes and reduced technical debt</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-card-border shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Typical ROI Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Risk Avoidance</span>
                      <span className="font-semibold text-primary">$5M - $87M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Expansion</span>
                      <span className="font-semibold text-primary">15% - 42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Implementation Cost</span>
                      <span className="font-semibold">$150K - $800K</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-semibold">Net ROI</span>
                      <span className="font-semibold text-primary">300% - 2,100%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Timeline to Value</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Assessment Complete</span>
                      <span className="font-semibold">30 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Initial Improvements</span>
                      <span className="font-semibold">90 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Full Implementation</span>
                      <span className="font-semibold">6-12 months</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-semibold">Measurable ROI</span>
                      <span className="font-semibold text-primary">3-6 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm
              defaultType="consultation"
              defaultService="ROI Analysis"
              triggerText="Get Custom ROI Analysis"
              triggerSize="lg"
              icon={Calculator}
              description="Schedule a consultation to calculate the specific ROI potential for your organization and industry."
              context="roi-calculator"
            />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative">
        <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 px-4 sm:px-0">
              Free Resources
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Expert guides, frameworks, and tools to jumpstart your AI governance and accessibility journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI Governance Checklist</CardTitle>
                <CardDescription>
                  Essential 47-point checklist for implementing responsible AI practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive checklist covering bias detection, fairness metrics, explainability requirements, and regulatory compliance across industries.
                </p>
                <ContactForm
                  defaultType="download"
                  defaultService="AI Governance Resources"
                  triggerText="Download Free"
                  triggerVariant="outline"
                  triggerSize="sm"
                  className="w-full"
                  icon={Download}
                  description="Get the AI Governance Checklist and join our resource library for ongoing updates."
                  context="resources-governance"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>WCAG 2.2 Compliance Guide</CardTitle>
                <CardDescription>
                  Step-by-step guide to achieving digital accessibility compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Practical implementation guide with code examples, testing strategies, and accessibility audit templates for web and mobile applications.
                </p>
                <ContactForm
                  defaultType="download"
                  defaultService="Accessibility Resources"
                  triggerText="Download Free"
                  triggerVariant="outline"
                  triggerSize="sm"
                  className="w-full"
                  icon={Download}
                  description="Get the WCAG 2.2 Compliance Guide and accessibility implementation templates."
                  context="resources-accessibility"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>ROI Measurement Framework</CardTitle>
                <CardDescription>
                  Metrics and KPIs for measuring AI governance and accessibility ROI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive framework with calculation templates, benchmark data, and reporting dashboards for quantifying business impact.
                </p>
                <ContactForm
                  defaultType="download"
                  defaultService="ROI Framework"
                  triggerText="Download Free"
                  triggerVariant="outline"
                  triggerSize="sm"
                  className="w-full"
                  icon={Download}
                  description="Get the ROI Measurement Framework with calculation templates and KPI dashboards."
                  context="resources-roi"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Bias Detection Toolkit</CardTitle>
                <CardDescription>
                  Open-source tools and methodologies for identifying AI bias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Python libraries, testing frameworks, and statistical methods for systematic bias detection in machine learning models and datasets.
                </p>
                <Button variant="outline" size="sm" className="w-full" data-testid="button-github-toolkit">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Industry Benchmarks</CardTitle>
                <CardDescription>
                  AI governance maturity benchmarks across 12 industry sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive benchmark data showing AI governance practices, compliance rates, and ROI metrics across industries and company sizes.
                </p>
                <ContactForm
                  defaultType="download"
                  defaultService="Industry Benchmarks"
                  triggerText="Download Free"
                  triggerVariant="outline"
                  triggerSize="sm"
                  className="w-full"
                  icon={Download}
                  description="Get the Industry Benchmarks report with sector-specific insights and maturity assessments."
                  context="resources-benchmarks"
                />
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Executive Summary Templates</CardTitle>
                <CardDescription>
                  Business case templates for AI governance investments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready-to-use PowerPoint and PDF templates for presenting AI governance business cases to executives and board members.
                </p>
                <ContactForm
                  defaultType="download"
                  defaultService="Executive Templates"
                  triggerText="Download Free"
                  triggerVariant="outline"
                  triggerSize="sm"
                  className="w-full"
                  icon={Download}
                  description="Get executive summary templates and presentation materials for building AI governance business cases."
                  context="resources-templates"
                />
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <ContactForm
              defaultType="newsletter"
              defaultService="Resource Updates"
              triggerText="Subscribe for New Resources"
              triggerSize="lg"
              icon={FileText}
              description="Get notified when new resources, guides, and tools are published. Join 15,000+ professionals building inclusive technology."
              context="resources-newsletter"
            />
          </div>
        </div>
      </section>
    </div>
  );
}