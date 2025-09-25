import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Users, Target, Shield, Lightbulb, Clock, TrendingUp, Calendar, Download } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const services = [
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
  },
  {
    title: "Compliance & Security Consulting",
    description: "Expertise in security frameworks, ethical hacking, and regulatory compliance across multiple industries.",
    features: [
      "Security audit and penetration testing",
      "Compliance framework implementation",
      "Data governance and privacy",
      "Incident response planning"
    ],
    metrics: "$300M+ cost savings achieved",
    icon: Lightbulb
  }
];

const industries = [
  "Financial Services & FinTech",
  "Healthcare & Life Sciences", 
  "Government & Public Sector",
  "Technology & Software",
  "Gaming & Entertainment",
  "Consumer Products",
  "Artificial Intelligence & ML",
  "Augmented & Virtual Reality"
];

const methodology = [
  {
    phase: "Discovery & Assessment",
    description: "Comprehensive analysis of current state, challenges, and opportunities",
    duration: "2-4 weeks"
  },
  {
    phase: "Strategy Development", 
    description: "Custom framework creation with stakeholder input and validation",
    duration: "3-6 weeks"
  },
  {
    phase: "Implementation Planning",
    description: "Detailed roadmap with milestones, resources, and success metrics",
    duration: "2-3 weeks"
  },
  {
    phase: "Execution & Support",
    description: "Hands-on implementation with ongoing guidance and optimization",
    duration: "Ongoing"
  }
];

export default function Consulting() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6 px-4 sm:px-0">
            AI Governance & Strategic Consulting
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0">
            16+ years of expertise in ethical technology, AI governance, and product inclusion. 
            Helping organizations build responsible AI systems that drive business value while 
            ensuring compliance and accessibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <ContactForm
              defaultType="consultation"
              defaultService="AI Governance & Risk Management"
              triggerText="Schedule Consultation"
              triggerSize="lg"
              icon={Calendar}
              description="Book a strategic consultation to discuss AI governance, product inclusion, or technology leadership needs."
              context="consulting-page"
            />
            <ContactForm
              defaultType="download"
              defaultService="Strategic Consulting"
              triggerText="Download Capabilities Deck"
              triggerVariant="outline"
              triggerSize="lg"
              icon={Download}
              description="Get our comprehensive capabilities deck with case studies and service details."
              context="consulting-page"
            />
          </div>
        </div>

        {/* Impact Metrics */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">$500M+</h3>
                <p className="text-muted-foreground">Market Expansion Delivered</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">$300M+</h3>
                <p className="text-muted-foreground">Cost Savings Achieved</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">30+</h3>
                <p className="text-muted-foreground">Strategic Engagements</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting services designed to help organizations navigate 
              the complex landscape of AI governance and inclusive technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="text-xs">
                      {service.metrics}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Consulting Methodology</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven 4-phase approach that ensures sustainable results and measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{phase.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Industry Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              16+ years across diverse industries, from Fortune 500 enterprises to innovative startups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="p-4 text-center hover-elevate">
                <p className="text-sm font-medium">{industry}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
                Ready to Transform Your AI Strategy?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how AI governance and product inclusion can drive measurable 
                business value for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" data-testid="button-book-consultation">
                  Book Strategy Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" data-testid="button-contact-consulting">
                  Get in Touch
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}