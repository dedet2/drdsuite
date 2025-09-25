import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Users, Heart, MapPin, Clock, Star, CheckCircle, Mountain, Wifi, Accessibility, Download } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const retreatFeatures = [
  {
    title: "Intimate Cohorts",
    description: "Maximum 12 senior executives per retreat ensuring personalized attention and meaningful connections.",
    icon: Users
  },
  {
    title: "Fully Accessible",
    description: "Purpose-built facilities with universal design principles, accessible programming, and disability-inclusive approach.",
    icon: Accessibility
  },
  {
    title: "Nature Immersion",
    description: "5-day residential experience in carefully selected natural settings that promote reflection and renewal.",
    icon: Mountain
  },
  {
    title: "Technology Integration",
    description: "Strategic use of technology to enhance learning while maintaining focus on human connection and presence.",
    icon: Wifi
  }
];

const program = [
  {
    day: "Day 1",
    focus: "Foundation & Connection",
    activities: [
      "Welcome & accessibility orientation",
      "Executive presence assessment",
      "Group dynamics establishment",
      "Personal leadership philosophy exploration"
    ]
  },
  {
    day: "Day 2",
    focus: "Inclusive Leadership",
    activities: [
      "Bias awareness & mitigation strategies",
      "Inclusive decision-making frameworks", 
      "Cultural competency deep-dive",
      "Case study analysis & discussion"
    ]
  },
  {
    day: "Day 3",
    focus: "AI Governance & Ethics",
    activities: [
      "Responsible AI implementation",
      "Governance framework development",
      "Risk assessment methodologies",
      "Regulatory compliance strategies"
    ]
  },
  {
    day: "Day 4", 
    focus: "Strategic Implementation",
    activities: [
      "Personal action plan creation",
      "Organizational change strategies",
      "Stakeholder engagement planning",
      "Measurement & accountability systems"
    ]
  },
  {
    day: "Day 5",
    focus: "Integration & Commitment",
    activities: [
      "Peer accountability partnerships",
      "90-day implementation roadmap",
      "Resource network establishment",
      "Closing ceremony & commitments"
    ]
  }
];

const testimonials = [
  {
    quote: "This retreat fundamentally changed how I approach leadership. The accessibility-first mindset isn't just about compliance—it's about innovation.",
    author: "Sarah Chen",
    title: "CEO, TechForward",
    cohort: "Fall 2023"
  },
  {
    quote: "Dr. Dédé's approach to AI governance gave us practical frameworks we implemented immediately. Our risk assessment improved dramatically.",
    author: "Marcus Williams", 
    title: "CTO, Financial Solutions Inc",
    cohort: "Spring 2024"
  },
  {
    quote: "The combination of personal growth and strategic business insight was remarkable. I left with actionable plans and lasting connections.",
    author: "Dr. Amanda Rodriguez",
    title: "Chief Innovation Officer, MedTech Global", 
    cohort: "Summer 2024"
  }
];

export default function Retreat() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6 px-4 sm:px-0">
            Executive Retreat Experience
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0">
            Transform your leadership approach in our luxury, fully accessible retreat center. 
            Intimate cohorts of senior executives explore AI governance, accessibility strategy, 
            and inclusive leadership in an immersive 5-day experience.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4 sm:px-0">
            <Badge variant="secondary">5-Day Immersive</Badge>
            <Badge variant="secondary">Max 12 Executives</Badge>
            <Badge variant="secondary">Fully Accessible</Badge>
            <Badge variant="secondary">Nature Setting</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <ContactForm
              defaultType="retreat"
              defaultService="Executive Retreats"
              triggerText="Apply for Next Cohort"
              triggerSize="lg"
              icon={Calendar}
              description="Apply for the next executive retreat cohort. Maximum 12 senior executives per retreat."
              context="retreat-page"
            />
            <ContactForm
              defaultType="download"
              defaultService="Executive Retreats"
              triggerText="Download Program Guide"
              triggerVariant="outline"
              triggerSize="lg"
              icon={Download}
              description="Get the comprehensive program guide with curriculum, logistics, and testimonials."
              context="retreat-page"
            />
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Retreat Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every aspect designed with accessibility, inclusion, and executive-level learning in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retreatFeatures.map((feature, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Curriculum */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">5-Day Curriculum</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A carefully structured journey from foundation-building to actionable implementation.
            </p>
          </div>

          <div className="space-y-6">
            {program.map((day, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{day.day}</CardTitle>
                      <CardDescription className="text-lg font-medium">{day.focus}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {day.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Executive Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from leaders who have transformed their organizations through our retreat experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-lg italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.cohort}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Logistics & Investment */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Logistics */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold font-serif mb-6">Retreat Logistics</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Duration</h4>
                    <p className="text-sm text-muted-foreground">5 days, 4 nights residential experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Cohort Size</h4>
                    <p className="text-sm text-muted-foreground">Maximum 12 senior executives per retreat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-muted-foreground">Accessible luxury retreat center in natural setting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Accessibility</h4>
                    <p className="text-sm text-muted-foreground">Fully accessible facilities, programming, and accommodations</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Investment */}
            <Card className="p-8 bg-muted/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
              <div className="relative">
                <h3 className="text-2xl font-bold font-serif mb-6">Investment & Outcomes</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Program Investment</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$15,000</p>
                    <p className="text-sm text-muted-foreground">
                      Includes all meals, accommodation, materials, and 6-month follow-up support
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {[
                        "5-day residential program",
                        "All meals & accommodations", 
                        "Personalized action plans",
                        "Peer accountability network",
                        "6-month implementation support",
                        "Resource library access",
                        "Executive coaching session",
                        "Annual alumni gathering"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
                Ready to Transform Your Leadership?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join an exclusive cohort of senior executives committed to building more 
                inclusive, accessible, and ethically-driven organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" data-testid="button-apply-now">
                  <Calendar className="w-4 h-4 mr-2" />
                  Apply for Next Cohort
                </Button>
                <Button variant="outline" size="lg" data-testid="button-schedule-call">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Discovery Call
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Next cohort begins Spring 2025 • Applications due February 15th
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}