import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Users, Target, Heart, Globe, Award, Shield, Lightbulb, Calendar } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';

const achievements = [
  {
    metric: "$500M+",
    description: "Market expansion delivered through inclusive product strategies"
  },
  {
    metric: "$300M+", 
    description: "Cost savings achieved via accessibility-first implementations"
  },
  {
    metric: "30+",
    description: "Strategic engagements completed across diverse industries"
  },
  {
    metric: "50+",
    description: "AI governance frameworks deployed with inclusion principles"
  }
];

const coreServices = [
  {
    title: "AI Governance & Risk Management",
    description: "Comprehensive frameworks for responsible AI implementation with built-in compliance and risk mitigation.",
    features: [
      "AI governance policy development",
      "Risk assessment and mitigation strategies", 
      "Regulatory compliance frameworks",
      "Ethical AI implementation guidelines"
    ],
    metrics: "50+ AI governance frameworks deployed",
    icon: Shield
  },
  {
    title: "Product Inclusion Strategy",
    description: "Integration of DEI principles with product development to unlock new markets and improve user experience.",
    features: [
      "Inclusive design methodologies",
      "Accessibility-first development",
      "User research and testing",
      "Market expansion strategies"
    ],
    metrics: "$500M+ market expansion delivered",
    icon: Users
  },
  {
    title: "Strategic Technology Advisory", 
    description: "Fractional CPO/CPRO services for scaling organizations seeking ethical technology leadership.",
    features: [
      "Technology strategy development",
      "Product roadmap optimization",
      "Team building and leadership",
      "Vendor evaluation and selection"
    ],
    metrics: "30+ strategic engagements completed",
    icon: Target
  }
];

const values = [
  {
    title: "Embodied Expertise",
    description: "Lived experience drives authentic solutions. Our perspectives as Black, queer, disabled, and immigrant leaders inform every strategy.",
    icon: Heart
  },
  {
    title: "Business Impact", 
    description: "Social justice isn't separate from business success. We deliver measurable results that prove inclusive practices drive growth.",
    icon: Target
  },
  {
    title: "Systemic Change",
    description: "Individual accommodations aren't enough. We build systems and frameworks that create lasting organizational transformation.",
    icon: Globe
  },
  {
    title: "Community-Centered",
    description: "Authentic inclusion happens when marginalized communities lead the conversation. We center affected voices in every solution.",
    icon: Users
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Dr. Dédé + incluu"
        subtitle="AI Governance & Accessible Futures"
        description="Systems design for compliance, access, and growth. Built from embodied expertise. Transforming how organizations approach AI governance and inclusive technology through authentic, lived-experience leadership."
        primaryCta={{
          text: "Schedule Consultation",
          action: () => {}
        }}
        secondaryCta={{
          text: "Watch TEDx Talk",
          action: () => window.open("https://nslacnow.manus.space/", "_blank")
        }}
      />

      {/* Brand Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Black-Woman-Owned • Disability-Led • Tech Ethics</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-6">Unified Expertise, Dual Impact</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Combining <strong>Dr. Dédé's</strong> thought leadership in AI governance and accessibility with 
              <strong>incluu's</strong> proven business impact in inclusive technology systems. Two complementary brands 
              united by a commitment to creating technology that serves everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Dr. Dédé Tetsubayashi</CardTitle>
                <CardDescription>
                  AI GRC Executive, TEDx Speaker, Disability Advocate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Thought leadership in AI governance, accessibility, and systems transformation. Personal experience as a Black, queer, disabled technology leader informs every strategy.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Executive Retreats & Leadership Development</li>
                  <li>• Speaking Engagements & Keynote Presentations</li>
                  <li>• Disability Advocacy & Healthcare Navigation</li>
                  <li>• TEDx: "AI Governance and Accessible Futures"</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">incluu consultancy</CardTitle>
                <CardDescription>
                  Black-woman-owned strategic AI governance & tech equity consulting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Proven business impact through inclusive technology systems. When you center marginalized communities in design, you build better technology for everyone.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• AI Governance & Regulatory Compliance</li>
                  <li>• Product Inclusion Strategy & Market Expansion</li>
                  <li>• Executive Training & Organizational Transformation</li>
                  <li>• Strategic Technology Advisory Services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for AI governance, inclusive technology, and strategic leadership development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                cta={{
                  text: "Learn More",
                  action: () => {}
                }}
                highlighted={index === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Measurable Business Impact</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Real results from strategic AI governance and tech equity implementations across industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four core principles guide every strategy, every implementation, and every partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full hover-elevate">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured TEDx */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Featured Presentation</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-6">TEDx: AI Governance and Accessible Futures</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Watch Dr. Dédé's powerful 18-minute presentation exploring how responsible AI governance 
            can create more inclusive and accessible futures for everyone.
          </p>
          
          <a href="https://nslacnow.manus.space/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" data-testid="button-watch-tedx">
              <Play className="mr-2 h-5 w-5" />
              Watch TEDx Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Transform Your AI Future?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the Fortune 500 companies, innovative startups, and leading healthcare networks who trust 
            Dr. Dédé and incluu to guide their AI governance transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ContactForm 
              triggerText="Schedule Strategy Session"
              triggerVariant="default"
              triggerSize="lg"
              description="Discuss your AI governance, accessibility, and inclusion needs"
              context="home-page-cta"
              defaultType="consultation"
              defaultService="Strategic Consultation"
            />
            <Button variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              View Success Stories
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Global reach and impact • 48hr response time guaranteed • 100% client satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
}