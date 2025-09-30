import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Sparkles, Users, Heart, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import retreatImage1 from '@assets/stock_images/luxury_executive_ret_c90fbc14.jpg';
import retreatImage2 from '@assets/stock_images/luxury_executive_ret_f2d3928f.jpg';
import retreatImage3 from '@assets/stock_images/luxury_executive_ret_51bd911f.jpg';

const retreatOfferings = [
  {
    title: "Executive Leadership Retreats",
    description: "Transform your leadership through immersive experiences that blend strategic thinking with embodied wisdom.",
    features: [
      "AI Governance & Ethics Integration",
      "Disability Justice in Tech Leadership",
      "Inclusive Systems Design Workshops",
      "Personal Leadership Development"
    ],
    icon: Users,
    image: retreatImage1
  },
  {
    title: "Luxury Wellness Escapes",
    description: "Rejuvenate mind, body, and spirit in curated environments designed for deep rest and transformation.",
    features: [
      "Accessible Luxury Accommodations",
      "Culturally-Responsive Healing Practices",
      "Technology Detox & Digital Wellness",
      "Community & Connection Building"
    ],
    icon: Sparkles,
    image: retreatImage2
  },
  {
    title: "Strategic Planning Offsites",
    description: "Design your organization's inclusive AI future in inspiring settings that foster creativity and collaboration.",
    features: [
      "AI Risk Assessment Frameworks",
      "Product Inclusion Strategy Sessions",
      "Team Alignment & Culture Building",
      "Actionable Implementation Roadmaps"
    ],
    icon: Mountain,
    image: retreatImage3
  }
];

const retreatBenefits = [
  "Curated mountain and coastal retreat locations",
  "Fully accessible luxury accommodations",
  "Expert facilitation by Dr. Dédé Tetsubayashi",
  "Small group sizes (12-20 participants max)",
  "Culturally-responsive programming",
  "Follow-up support & community access"
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Retreat Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={retreatImage1} 
            alt="Luxury Executive Retreat" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/85 to-cyan-900/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            Executive Retreats & Wellness Experiences
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
            Transform Your Leadership
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Immersive executive retreats where AI governance meets embodied wisdom, 
            accessibility meets luxury, and transformation meets community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/retreat">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90" data-testid="button-explore-retreats">
                <Mountain className="mr-2 h-5 w-5" />
                Explore Retreats
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
      </section>

      {/* Retreat Offerings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Retreat Experiences</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Curated transformational experiences for leaders ready to build inclusive, 
              ethical AI futures while nurturing their own wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {retreatOfferings.map((offering, index) => (
              <Card key={index} className="overflow-hidden hover-elevate h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={offering.image} 
                    alt={offering.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <offering.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{offering.title}</CardTitle>
                  <CardDescription className="text-base">
                    {offering.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {offering.features.map((feature, idx) => (
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

      {/* Retreat Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every retreat is thoughtfully designed to provide transformational experiences 
              in accessible, luxurious environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retreatBenefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-cyan-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join tech leaders, executives, and changemakers who have experienced profound 
            transformation through our retreats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/retreat">
              <Button size="lg" data-testid="button-view-retreats">
                <Mountain className="mr-2 h-5 w-5" />
                View Retreat Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" data-testid="button-schedule-call">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Discovery Call
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Limited spots available • Early bird pricing for 2025 • Scholarships available</p>
          </div>
        </div>
      </section>
    </div>
  );
}
