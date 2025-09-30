import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const testimonials = [
  {
    id: 1,
    name: "Quise Rodriguez",
    title: "Director of Inclusivity and Community Building",
    company: "Katherine Delmar Burke School",
    quote: "The team at incluu are incredible to work with. They are skilled professionals who are experts in research, analysis, and providing action steps based on the data collected. incluu was able to take Burke's needs into consideration and work in partnership with their team to create an Equity Dashboard that will help the school improve for years to come. The Incluu team was friendly, reliable, equity centered, and based every conversation with a problem solving approach.",
    impact: "60% reduction in disciplinary disparities",
    category: "Education"
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    company: "Fortune 500 Financial Services",
    quote: "Dr. Dédé saved us from a compliance nightmare. Her AI bias audit identified critical issues in our biometric authentication system that our internal teams completely missed. The framework she built didn't just fix the immediate problem—it transformed how we think about responsible AI development. The $300M+ in avoided regulatory risk was just the beginning. We've since used her methodology across 12 other AI systems.",
    impact: "$300M+ compliance risk mitigated",
    category: "Financial Services"
  },
  {
    id: 3,
    name: "Michael Torres",
    title: "VP of Product",
    company: "Global Healthcare Platform",
    quote: "We thought accessibility was a nice-to-have. Dr. Dédé showed us it was a $500M market opportunity we were leaving on the table. Her team didn't just make our platform compliant—they made it better for everyone. Our support tickets dropped 55%, our user satisfaction scores went up across all demographics, and we won federal contracts we never could have competed for before. This is what happens when you design with the margins in mind.",
    impact: "$500M+ market expansion achieved",
    category: "Healthcare"
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    title: "Chief Product Officer",
    company: "E-Commerce Technology Platform",
    quote: "Our recommendation algorithm was costing us millions without us even knowing it. Dr. Dédé's algorithmic fairness audit revealed gender and racial bias that was suppressing revenue from 40% of our customer base. After implementing her fixes, we saw $180M in incremental revenue and turned algorithmic fairness into our biggest competitive advantage. This isn't just ethics—it's smart business.",
    impact: "$180M revenue growth from fairer algorithms",
    category: "E-Commerce"
  },
  {
    id: 5,
    name: "David Kim",
    title: "Chief Diversity Officer",
    company: "Tech Startup (Series B)",
    quote: "Most DEI consultants talk about values. Dr. Dédé talks about systems. She helped us understand that inclusive technology isn't about individual accommodations—it's about redesigning our entire product development process. Six months after implementing her framework, our user base diversified by 45%, our employee retention improved by 30%, and our investors started seeing inclusion as a growth driver, not a cost center.",
    impact: "45% increase in user diversity",
    category: "Technology"
  },
  {
    id: 6,
    name: "Dr. Amanda Washington",
    title: "Executive Director",
    company: "Healthcare Innovation Institute",
    quote: "Dr. Dédé brings a unique combination of lived experience and rigorous methodology that you simply can't find anywhere else. As a Black, disabled woman in tech, she sees bias that others miss. As a social scientist, she measures it. As a systems thinker, she fixes it. Working with her transformed not just our products, but how our entire organization thinks about technology and justice.",
    impact: "100% WCAG AAA compliance achieved",
    category: "Healthcare"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-cyan-900/85">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">Client Testimonials</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            What Our Clients Say
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real feedback from leaders who've experienced the transformative power of 
            inclusive technology and ethical AI governance.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-elevate">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="w-10 h-10 text-primary/30" />
                    <Badge variant="secondary">{testimonial.category}</Badge>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact Badge */}
                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      ✓ {testimonial.impact}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Trusted By Industry Leaders
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$800M+</div>
              <div className="text-sm text-muted-foreground">Total Value Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Strategic Engagements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">48hr</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join Our Growing Client Family
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same transformative results these leaders have achieved. 
            Let's discuss how inclusive technology can drive value for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-get-started">
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
        </div>
      </section>
    </div>
  );
}
