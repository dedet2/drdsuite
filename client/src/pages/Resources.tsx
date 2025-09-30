import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, BookOpen, Shield, FileText, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const resources = [
  {
    title: "ROI Calculator",
    description: "Calculate the business impact of inclusive AI and accessibility improvements",
    href: "https://pmukyznd.manus.space/",
    icon: Calculator,
    external: true,
    featured: true
  },
  {
    title: "Stories & Insights",
    description: "Thought leadership articles, case studies, and industry perspectives",
    href: "/stories",
    icon: BookOpen,
    external: false,
    featured: false
  },
  {
    title: "Privacy Policy",
    description: "Our commitment to protecting your data and privacy",
    href: "/privacy",
    icon: Shield,
    external: false,
    featured: false
  },
  {
    title: "Terms of Service",
    description: "Legal terms and conditions for using our services",
    href: "/terms",
    icon: FileText,
    external: false,
    featured: false
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/80 via-purple-800/80 to-cyan-900/85">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">Tools & Documentation</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
            Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Access our tools, documentation, and insights to support your journey toward 
            inclusive technology and responsible AI governance.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <Card 
                key={resource.title} 
                className={`hover-elevate ${resource.featured ? 'border-primary/50' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    {resource.featured && (
                      <Badge variant="default">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {resource.external ? (
                    <a 
                      href={resource.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button data-testid={`button-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Access Resource
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={resource.href}>
                      <Button data-testid={`button-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Resource
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Need More Information?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is ready to provide additional resources and support tailored to your 
            specific needs in AI governance and inclusive technology.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-contact-resources">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}