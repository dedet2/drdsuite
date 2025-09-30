import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Target, Heart, Globe, Award, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

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

const services = [
  "Product Inclusion Strategy",
  "AI Governance & Ethics", 
  "Accessibility Implementation",
  "DEI + Business Integration",
  "Executive Advisory",
  "Team Training & Workshops",
  "Policy Development",
  "Compliance Strategy"
];

export default function Incluu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600/50 via-purple-500/40 to-cyan-400/50 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 px-4 sm:px-0 text-white">
              incluu
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              Black-woman-owned consultancy
            </p>
          </div>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-4xl mx-auto px-4 sm:px-0">
            We help organizations build inclusive technology systems that drive business value. 
            Founded on the principle that social justice and profitable growth are not just compatible—they're 
            essential to each other. Partnering with Dr. Dédé Tetsubayashi, we combine deep AI governance expertise 
            with groundbreaking accessibility innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-0">
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">Black-Woman-Owned</Badge>
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">Disability-Led</Badge>
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">Tech Ethics</Badge>
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">AI Governance</Badge>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="p-12 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(90, 80, 155, 0.1) 0%, rgba(24, 255, 255, 0.2) 100%))' }} />
            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto italic">
                "To prove that when you center the most marginalized communities in your technology design, 
                you don't just serve those communities better—you build better technology for everyone."
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                incluu exists to demonstrate that inclusive practices aren't a cost center or compliance 
                requirement—they're a competitive advantage that drives innovation, expands markets, 
                and creates sustainable business value.
              </p>
            </div>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four core principles guide every strategy, every implementation, and every partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
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
        </section>

        {/* Impact Metrics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Proven Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable results that demonstrate the business value of inclusive technology practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.metric}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground mb-6">
                incluu provides strategic consulting that integrates social justice principles with 
                business objectives. We don't just add diversity—we redesign systems to be inherently inclusive.
              </p>
              <p className="text-muted-foreground mb-8">
                Our approach combines deep technical expertise with lived experience of marginalization, 
                creating solutions that are both ethically sound and commercially viable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consulting">
                  <Button size="lg" data-testid="button-learn-services">
                    <Target className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" size="lg" data-testid="button-case-studies">
                    <Award className="w-4 h-4 mr-2" />
                    See Success Stories
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">Service Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-20">
          <Card className="p-12 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(90, 80, 155, 0.1) 0%, rgba(24, 255, 255, 0.2) 100%))' }} />
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Strategic Leadership Partnership</h2>
                <h3 className="text-2xl font-bold mb-4">Dr. Dédé Tetsubayashi - Founder & Chief AI Governance Expert</h3>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Black, queer, first-generation Togolese immigrant and Cornell-educated social scientist 
                  with 16+ years of experience in ethical technology and social justice. Through incluu and her 
                  personal practice, Dr. Dédé delivers comprehensive AI governance and accessibility solutions.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Living with sickle-cell disease, brings unique insights to accessibility 
                      and systems design rooted in lived experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Background</h4>
                    <p className="text-sm text-muted-foreground">
                      Fractional CPO/CPRO, product inclusion expert, tech ethicist, 
                      and disability advocate with multilingual capabilities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Industry Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Member of Equity Army, founding member of Tech Ladies, 
                      Women Talk Design speaker, TEDx presenter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">
            Ready to Build Inclusive Technology?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Partner with incluu to prove that social justice and business success aren't 
            just compatible—they're essential to sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-partner-incluu">
                <Users className="w-4 h-4 mr-2" />
                Schedule Strategy Session
              </Button>
            </Link>
            <Link href="/dr-dede">
              <Button variant="outline" size="lg" data-testid="button-learn-dr-dede">
                <Sparkles className="w-4 h-4 mr-2" />
                Meet Dr. Dédé
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}