import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Heart, Star, Clock, Users, MapPin, Calendar, Sparkles, Target, Shield } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const luxuryFeatures = [
  {
    title: "Rest as Resistance Philosophy",
    description: "Revolutionary approach to executive wellness that reframes rest as an act of resistance against burnout culture.",
    icon: Heart,
    features: [
      "Personalized wellness assessments",
      "Mindfulness and meditation practices", 
      "Executive energy management strategies",
      "Sustainable leadership frameworks"
    ]
  },
  {
    title: "Luxury Retreat Experiences",
    description: "Exclusive accommodations and transformational programming in carefully curated luxury settings worldwide.",
    icon: Star,
    features: [
      "5-star resort partnerships",
      "Private villa retreats",
      "World-class spa treatments",
      "Gourmet wellness cuisine"
    ]
  },
  {
    title: "Executive Transformation",
    description: "Comprehensive leadership development integrating wellness principles with strategic business thinking.",
    icon: Target,
    features: [
      "1:1 executive coaching sessions",
      "Leadership authenticity workshops",
      "Strategic thinking intensives",
      "Personal brand development"
    ]
  },
  {
    title: "Holistic Wellness Integration",
    description: "Complete wellness ecosystem addressing physical, mental, emotional, and spiritual dimensions of leadership.",
    icon: Shield,
    features: [
      "Fitness and movement programs",
      "Nutrition and lifestyle optimization",
      "Stress management techniques",
      "Work-life integration strategies"
    ]
  }
];

const retreatPrograms = [
  {
    title: "Rest as Resistance Signature Retreat",
    duration: "5-7 Days",
    location: "Various Luxury Destinations",
    description: "Our flagship program combining luxury wellness with transformational leadership development.",
    highlights: [
      "Private executive suites",
      "Daily 1:1 coaching sessions",
      "Luxury spa treatments",
      "Gourmet wellness cuisine",
      "Strategic planning workshops"
    ],
    investment: "From $15,000"
  },
  {
    title: "Corporate Wellness Intensives",
    duration: "2-3 Days", 
    location: "Custom Locations",
    description: "Exclusive team wellness programs for C-suite executives and senior leadership teams.",
    highlights: [
      "Team wellness assessments", 
      "Group coaching sessions",
      "Luxury team activities",
      "Strategic alignment workshops",
      "Wellness infrastructure planning"
    ],
    investment: "From $25,000"
  },
  {
    title: "Executive Wellness Coaching",
    duration: "3-6 Months",
    location: "Virtual + In-Person",
    description: "Ongoing wellness coaching for high-achieving executives seeking sustainable transformation.",
    highlights: [
      "Monthly luxury retreat days",
      "Weekly coaching sessions",
      "Wellness accountability systems",
      "Access to luxury wellness partners",
      "Emergency wellness support"
    ],
    investment: "From $8,000/month"
  }
];

export default function LuxuryWellness() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Premium Executive Wellness</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Luxury Wellness Experiences
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionary "Rest as Resistance" wellness programs that transform how executives approach leadership, wellness, and sustainable success. Experience luxury accommodations with world-class coaching in carefully curated destinations worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rar.dr-dede.com">
              <Button size="lg" data-testid="button-visit-rar">
                <Globe className="mr-2 h-5 w-5" />
                Explore RAR Retreat
              </Button>
            </a>
            <ContactForm 
              triggerText="Schedule Consultation"
              triggerVariant="outline"
              triggerSize="lg"
              description="Discuss luxury wellness programs for executives and leadership teams"
              context="luxury-wellness-page"
              defaultType="consultation"
              defaultService="Luxury Wellness Program"
            />
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Luxury Wellness Framework</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive wellness experiences that integrate luxury hospitality with transformational leadership development and sustainable executive practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryFeatures.map((feature, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat Programs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Signature Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exclusive wellness programs designed for high-achieving executives, leadership teams, and organizations committed to sustainable transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {retreatPrograms.map((program, index) => (
              <Card key={index} className={`hover-elevate ${index === 0 ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  {index === 0 && <Badge className="w-fit mb-2">Most Popular</Badge>}
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{program.location}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Program Highlights:</h4>
                      <ul className="space-y-1">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border/50">
                      <div className="text-lg font-semibold text-primary mb-3">{program.investment}</div>
                      <ContactForm 
                        triggerText="Learn More"
                        triggerVariant="outline"
                        triggerSize="sm"
                        description={`Inquire about ${program.title} program details, availability, and customization options`}
                        context={`luxury-wellness-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                        defaultType="consultation"
                        defaultService={program.title}
                        className="w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rest as Resistance Philosophy */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Rest as Resistance Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revolutionary approach to executive wellness that challenges traditional productivity culture and reframes rest as strategic advantage.
            </p>
          </div>
          
          <Card className="hover-elevate">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Philosophy</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Rest as Resistance" challenges the toxic productivity culture that leads to executive burnout, health crises, and unsustainable business practices. We believe that strategic rest and wellness are forms of resistance against a system that prioritizes output over human wellbeing.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our approach integrates luxury wellness experiences with proven leadership development methodologies, creating sustainable transformation that benefits both executives and their organizations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Results</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Sparkles className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">40% improvement in executive decision-making quality</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">60% reduction in stress-related health issues</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">35% increase in team engagement and innovation</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">25% improvement in work-life integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Transform Your Leadership Through Luxury Wellness</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing community of executives who have discovered that strategic rest and luxury wellness aren't indulgences—they're competitive advantages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rar.dr-dede.com">
              <Button size="lg" data-testid="button-explore-rar">
                <Globe className="mr-2 h-5 w-5" />
                Explore RAR Retreat
              </Button>
            </a>
            <ContactForm 
              triggerText="Schedule Discovery Call"
              triggerVariant="outline"
              triggerSize="lg"
              description="Discuss how luxury wellness programs can transform your leadership and organization"
              context="luxury-wellness-cta"
              defaultType="consultation"
              defaultService="Executive Wellness Discovery"
            />
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Investment starts at $8,000/month • Global destinations • 100% satisfaction guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
}