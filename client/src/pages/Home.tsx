import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Heart, Calendar, ArrowRight, CheckCircle, Target, Globe, Shield, TrendingUp, Zap, Brain, Award, Briefcase } from 'lucide-react';
import { Link } from 'wouter';
import heroBanner from '/hero-banner.jpg';

const impactMetrics = [
  {
    metric: "500+",
    description: "AI systems secured and governed",
    icon: Shield
  },
  {
    metric: "47%",
    description: "Average efficiency improvement",
    icon: TrendingUp
  },
  {
    metric: "$300M+",
    description: "Compliance risks mitigated",
    icon: Target
  },
  {
    metric: "85%",
    description: "Reduction in audit time",
    icon: Zap
  }
];

const coreServices = [
  {
    title: "AI Governance Consulting",
    description: "Build ethical, compliant AI systems that drive business value while mitigating risk",
    features: [
      "Regulatory compliance frameworks",
      "Risk assessment & mitigation",
      "Policy development",
      "Board advisory services"
    ],
    icon: Shield,
    brand: "incluu"
  },
  {
    title: "Accessibility Excellence",
    description: "Transform accessibility into a competitive advantage with inclusive design strategies",
    features: [
      "WCAG 2.2 compliance",
      "Inclusive product design",
      "Accessibility audits",
      "Team training & certification"
    ],
    icon: Heart,
    brand: "incluu"
  },
  {
    title: "Growth Strategy",
    description: "Scale your impact with strategic consulting that aligns purpose with profit",
    features: [
      "Market expansion planning",
      "Partnership development",
      "Innovation frameworks",
      "Executive advisory"
    ],
    icon: TrendingUp,
    brand: "dr-dede"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:flex lg:items-center overflow-hidden">
        {/* Background gradient - full width on mobile, left side on desktop */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/85 via-purple-500/80 to-cyan-400/85 z-0"></div>
        
        {/* Mobile/Tablet: Image at top */}
        <div className="lg:hidden relative z-10 w-full h-[40vh] min-h-[300px]">
          <img 
            src={heroBanner} 
            alt="Dr. Dédé Tetsubayashi"
            className="w-full h-full object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/40 to-purple-600/80"></div>
        </div>
        
        {/* Hero Content - full width on mobile, left side on desktop */}
        <div className="relative z-20 w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            Dr. Dédé + incluu Partnership
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            AI Governance + Accessibility Excellence
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
            Where Dr. Dédé's AI governance expertise meets incluu's accessibility innovation. 
            Building ethical, inclusive technology that drives both impact and revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dr-dede">
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

        {/* Desktop: Hero Image - right side */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-10">
          <img 
            src={heroBanner} 
            alt="Dr. Dédé Tetsubayashi"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-600/20 to-purple-600/90"></div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proven Impact at Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transforming how Fortune 500 companies approach AI governance and accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <metric.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{metric.metric}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions that bridge ethical AI governance with inclusive design excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover-elevate h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Brand Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600/85 via-purple-500/80 to-cyan-400/85">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dr. Dédé Brand */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Dr. Dédé</CardTitle>
                <Badge variant="outline" className="w-fit">Executive Advisory</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategic AI governance consulting for Fortune 500 companies and high-growth startups. 
                  Dr. Dédé brings 20+ years of technology leadership and an anthropologist's perspective 
                  to complex AI challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Board advisory & executive coaching
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    TEDx speaker & thought leadership
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    AI ethics & governance frameworks
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/dr-dede">
                    <Button className="w-full">
                      Learn About Dr. Dédé
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* incluu Brand */}
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">incluu</CardTitle>
                <Badge variant="outline" className="w-fit">Accessibility Innovation</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Making the digital world accessible to everyone. incluu transforms accessibility 
                  from compliance checkbox to competitive advantage through inclusive design and 
                  cutting-edge technology.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    WCAG 2.2 & ADA compliance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Inclusive product strategy
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Accessibility-first development
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/incluu">
                    <Button className="w-full">
                      Discover incluu
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Logos / Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            From Fortune 500 enterprises to innovative startups, we help organizations build 
            ethical, accessible technology that drives growth
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="hover-elevate">
              <CardContent className="p-8 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">Fortune 500</div>
                  <div className="text-sm text-muted-foreground">Enterprises</div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-8 flex items-center justify-center">
                <div className="text-center">
                  <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">Tech Giants</div>
                  <div className="text-sm text-muted-foreground">Platforms</div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-8 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">Startups</div>
                  <div className="text-sm text-muted-foreground">High Growth</div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-8 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">Government</div>
                  <div className="text-sm text-muted-foreground">Agencies</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600/85 via-purple-500/80 to-cyan-400/85">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Ethical, Accessible AI?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need AI governance frameworks or accessibility excellence, 
            we're here to help you build technology that works for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/consulting">
              <Button variant="outline" size="lg" data-testid="button-learn-more">
                Learn More About Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}