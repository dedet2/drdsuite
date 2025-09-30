import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Sparkles, Users, Heart, Calendar, ArrowRight, CheckCircle, Target } from 'lucide-react';
import { Link } from 'wouter';
import drDedePhoto from '/dr_dede_professional_headshot.jpg';
import retreatImage1 from '@assets/stock_images/luxury_executive_ret_c90fbc14.jpg';
import retreatImage2 from '@assets/stock_images/luxury_executive_ret_f2d3928f.jpg';
import retreatImage3 from '@assets/stock_images/luxury_executive_ret_51bd911f.jpg';

const services = [
  {
    title: "AI Governance & Ethics",
    description: "Strategic consulting to help organizations build ethical AI systems that drive business value and mitigate risk.",
    features: [
      "Regulatory compliance strategies",
      "Ethical AI framework development",
      "Risk assessment methodologies",
      "Policy development & implementation"
    ],
    icon: Target,
    brand: "incluu"
  },
  {
    title: "Executive Retreats & Speaking",
    description: "Transformative leadership experiences and keynotes that blend AI governance with embodied wisdom.",
    features: [
      "Executive leadership retreats",
      "TEDx-style keynote presentations",
      "Custom workshops & training",
      "Strategic planning offsites"
    ],
    icon: Users,
    brand: "dr-dede"
  },
  {
    title: "Product Inclusion Strategy",
    description: "Turn accessibility and inclusion into competitive advantages that expand markets and drive innovation.",
    features: [
      "Accessibility-first implementation",
      "Inclusive design frameworks",
      "Bias detection & mitigation",
      "Market expansion strategies"
    ],
    icon: Heart,
    brand: "incluu"
  }
];

const impactMetrics = [
  {
    metric: "$1.5B+",
    description: "Total client value delivered through inclusive practices"
  },
  {
    metric: "100%",
    description: "Regulatory compliance success rate"
  },
  {
    metric: "47",
    description: "Countries served globally"
  },
  {
    metric: "85%",
    description: "Reduction in compliance review time"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Dr. Dédé Photo */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient and Dr. Dédé photo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/90 to-cyan-900/85"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30">
            <img 
              src={drDedePhoto} 
              alt="Dr. Dédé Tetsubayashi" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              AI Governance • Accessibility • Executive Leadership
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
              Transforming AI Through Equitable Innovation
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light">
              Expert consulting, strategic advisory, and transformative retreats that prove 
              social justice and business success aren't just compatible—they're essential.
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
        </div>
      </section>

      {/* Combined Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Combining strategic consulting from incluu with transformative leadership experiences from Dr. Dédé
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="mb-2 w-fit">{service.brand}</Badge>
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

      {/* Impact Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proven Impact</h2>
            <p className="text-lg text-muted-foreground">
              Real results that demonstrate the business value of inclusive technology
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">{item.metric}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Dédé Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge variant="outline" className="mb-4">Your Retreat Guide</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">Dr. Dédé Tetsubayashi</h2>
              <h3 className="text-xl text-primary mb-6">AI Governance Expert • TEDx Speaker • Disability Advocate</h3>
              
              <p className="text-muted-foreground mb-4">
                As a Black, queer, first-generation Togolese immigrant living with sickle-cell disease, 
                Dr. Dédé brings an anthropologist's eye to AI governance and systems transformation.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Her work has saved companies $300M+ in compliance risks and unlocked $500M+ in value 
                through inclusive frameworks. Now she channels this expertise into transformational 
                retreat experiences for leaders ready to build ethical AI futures.
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  <span>20+ years technology leadership</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  <span>Fortune 500 AI governance advisor</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  <span>Certified in disability justice frameworks</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  <span>Fluent in 7 languages</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="/dr_dede_professional_headshot.jpg" 
                alt="Dr. Dédé Tetsubayashi"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Organizations Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proven expertise at the intersection of business value and social justice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl">incluu Consulting</CardTitle>
                <CardDescription>
                  Black-woman-owned consultancy delivering measurable ROI through inclusive practices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5" />
                  <span className="text-sm">$500M+ market expansion delivered</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5" />
                  <span className="text-sm">100% regulatory compliance success</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5" />
                  <span className="text-sm">30+ strategic engagements completed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl">Dr. Dédé Leadership</CardTitle>
                <CardDescription>
                  TEDx speaker and AI governance expert transforming how leaders approach technology
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5" />
                  <span className="text-sm">Executive retreats & workshops</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5" />
                  <span className="text-sm">Keynote speaking worldwide</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5" />
                  <span className="text-sm">Disability justice & accessibility focus</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-cyan-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build an Inclusive AI Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need strategic consulting, executive leadership experiences, or transformative speaking engagements, 
            we're here to help you prove that social justice and business success are essential to each other.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-get-started">
                <Calendar className="mr-2 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg" data-testid="button-view-case-studies">
                View Case Studies
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Global reach • 100% compliance success • Proven ROI</p>
          </div>
        </div>
      </section>
    </div>
  );
}
