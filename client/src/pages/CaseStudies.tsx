import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, DollarSign, Users, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

const caseStudies = [
  {
    id: 1,
    title: "Fortune 500 Financial Services",
    category: "AI Governance & Compliance",
    challenge: "Legacy biometric authentication system showed 45% failure rate for users with darker skin tones, creating compliance risk and customer churn.",
    solution: "Implemented comprehensive AI bias audit and redesigned system using inclusive dataset. Developed ongoing monitoring framework with quarterly reviews.",
    results: [
      "Reduced authentication failure rate to <2% across all demographics",
      "Saved $300M+ in potential regulatory fines and litigation costs",
      "Increased customer satisfaction by 68% among previously excluded groups",
      "Established industry-leading AI governance framework adopted by 3 competitors"
    ],
    metrics: {
      value: "$300M+",
      label: "Compliance Risk Mitigated"
    },
    icon: Shield,
    tags: ["AI Governance", "Biometric Systems", "Compliance", "Financial Services"]
  },
  {
    id: 2,
    title: "Global Healthcare Platform",
    category: "Product Inclusion Strategy",
    challenge: "Telehealth platform inaccessible to 40% of disabled users, missing massive market opportunity and facing accessibility lawsuits.",
    solution: "Conducted accessibility audit with disabled user testing. Rebuilt interface following WCAG 2.1 AAA standards. Implemented assistive technology integration.",
    results: [
      "Expanded addressable market by $500M through disability community access",
      "Achieved 100% WCAG 2.1 AAA compliance across all features",
      "Reduced support tickets by 55% through improved UX",
      "Won 2 major federal healthcare contracts requiring accessibility compliance"
    ],
    metrics: {
      value: "$500M+",
      label: "Market Expansion"
    },
    icon: TrendingUp,
    tags: ["Accessibility", "Healthcare", "Product Strategy", "Market Expansion"]
  },
  {
    id: 3,
    title: "Katherine Delmar Burke School",
    category: "Educational Equity Dashboard",
    challenge: "Independent K-8 school needed data-driven approach to track and improve DEI outcomes across student experience, curriculum, and hiring.",
    solution: "Designed and implemented equity dashboard tracking 40+ metrics across academics, discipline, enrichment, and staff diversity. Created actionable insights framework.",
    results: [
      "Identified and closed 3 major equity gaps in enrichment program access",
      "Improved teacher diversity hiring by 35% through bias-free job descriptions",
      "Reduced disciplinary disparities by 60% through restorative justice integration",
      "Dashboard adopted by 12 other independent schools in network"
    ],
    metrics: {
      value: "60%",
      label: "Disparity Reduction"
    },
    icon: Users,
    tags: ["Education", "DEI Analytics", "System Design", "Data Visualization"]
  },
  {
    id: 4,
    title: "E-Commerce Technology Platform",
    category: "Algorithmic Fairness Audit",
    challenge: "Product recommendation algorithm showed gender and racial bias, recommending lower-priced items to women and people of color despite similar browsing patterns.",
    solution: "Conducted comprehensive algorithmic audit. Retrained models on balanced datasets. Implemented fairness constraints and ongoing bias monitoring.",
    results: [
      "Eliminated price recommendation bias across all demographic groups",
      "Increased average order value by 28% among previously disadvantaged groups",
      "Generated $180M in incremental revenue from fairer recommendations",
      "Established algorithmic fairness as competitive differentiator"
    ],
    metrics: {
      value: "$180M",
      label: "Revenue Growth"
    },
    icon: DollarSign,
    tags: ["AI Ethics", "E-Commerce", "Algorithmic Fairness", "Revenue Growth"]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-cyan-900/85">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">Proven Impact</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            Case Studies
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real transformations. Measurable results. From Fortune 500 enterprises to 
            innovative startups, see how inclusive technology drives business value.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden hover-elevate">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Left Column - Overview */}
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <study.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3">{study.category}</Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{study.title}</h2>
                  
                  <div className="bg-primary/5 rounded-lg p-6 mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">{study.metrics.value}</div>
                    <div className="text-sm text-muted-foreground">{study.metrics.label}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">THE CHALLENGE</h3>
                    <p className="text-foreground">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">OUR SOLUTION</h3>
                    <p className="text-foreground">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">KEY RESULTS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Cumulative Impact Across All Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable business value delivered through inclusive technology practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$500M+</div>
              <div className="text-sm text-muted-foreground">Market Expansion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$300M+</div>
              <div className="text-sm text-muted-foreground">Risk Mitigation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Strategic Engagements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">AI Frameworks Deployed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how inclusive technology practices can drive measurable 
            business value for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-schedule-consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button variant="outline" size="lg" data-testid="button-view-testimonials">
                View Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
