import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, MessageSquare, Mic, Award, Users, Target, Calendar, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const speakingTopics = [
  {
    title: "AI Governance & Ethics",
    description: "Frameworks for responsible AI implementation with built-in compliance and bias mitigation.",
    icon: Target,
    topics: [
      "Responsible AI development practices",
      "Algorithmic bias detection and prevention",
      "AI governance frameworks for enterprises",
      "Regulatory compliance strategies"
    ]
  },
  {
    title: "Product Inclusion Strategy",
    description: "Methodologies for integrating accessibility and inclusion into product development from day one.",
    icon: Users,
    topics: [
      "Inclusive design methodologies",
      "Accessibility-first development",
      "Market expansion through inclusion",
      "User research with diverse communities"
    ]
  },
  {
    title: "Executive Leadership",
    description: "Insights on building inclusive cultures and driving organizational transformation.",
    icon: Award,
    topics: [
      "Inclusive leadership practices",
      "Organizational culture transformation",
      "Building diverse technology teams",
      "Executive wellness and authenticity"
    ]
  },
  {
    title: "Disability Advocacy",
    description: "Personal stories and professional insights from lived experience with chronic illness and disability.",
    icon: MessageSquare,
    topics: [
      "Workplace accommodation strategies",
      "Healthcare system navigation",
      "Intersectional identity in tech",
      "Chronic illness and career success"
    ]
  }
];

export default function Speaking() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/85 via-cyan-500/80 to-purple-600/85">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">Global Speaking Expertise</Badge>
          <h1 className="text-4xl font-bold text-white mb-6">
            Speaking & Events
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Transformational presentations on AI governance, accessibility, and inclusive leadership that drive meaningful organizational change. Available worldwide for conferences, corporate events, and educational institutions.
          </p>
        </div>
      </section>

      {/* Recent Presentations Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/85 via-cyan-500/80 to-purple-600/85">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Recent Presentations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-lg">AI Ethics in Healthcare Technology</CardTitle>
                <CardDescription>
                  Healthcare Innovation Summit 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Addressing bias in medical AI systems and ensuring equitable healthcare technology deployment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-lg">Building Inclusive Product Teams</CardTitle>
                <CardDescription>
                  Tech Leadership Conference 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strategies for creating diverse teams that drive innovation and market expansion through inclusion.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <a href="https://nslacnow.manus.space/">
              <Button variant="outline" size="lg" data-testid="button-watch-tedx">
                <Play className="mr-2 h-5 w-5" />
                Watch TEDx Talk
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Speaking Topics</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Engaging presentations that combine lived experience with technical expertise to drive meaningful change in organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakingTopics.map((topic, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <topic.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.topics.map((item, idx) => (
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

      {/* Speaking Formats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Speaking Formats</h2>
            <p className="text-lg text-muted-foreground">
              Flexible presentation options tailored to your audience and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Keynote Presentations</CardTitle>
                <CardDescription>30-90 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Inspiring presentations that energize audiences and drive organizational change through compelling storytelling and actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Interactive Workshops</CardTitle>
                <CardDescription>2-8 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hands-on sessions with practical implementation strategies, group exercises, and customized frameworks for your organization.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Panel Discussions</CardTitle>
                <CardDescription>45-90 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expert panel participation bringing unique perspectives on AI governance, accessibility, and inclusive leadership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking Impact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Speaking Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Leaders trained globally</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Conference presentations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Countries reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction rating</div>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Dr. Dédé's keynote completely transformed how our engineering team approaches AI ethics. Their frameworks are practical, actionable, and deeply rooted in real-world impact."
              </blockquote>
              <div className="text-sm font-medium">
                — Sarah Chen, CTO, TechForward Inc.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/85 via-cyan-500/80 to-purple-600/85">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Book Dr. Dédé for Your Next Event</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your audience with presentations that combine authentic storytelling, technical expertise, and actionable frameworks for inclusive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ContactForm 
              triggerText="Request Speaking Engagement"
              triggerVariant="default"
              triggerSize="lg"
              description="Submit speaking engagement request with event details"
              context="speaking-page-cta"
              defaultType="speaking"
              defaultService="Keynote Speaking"
            />
            <Button variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
          </div>

          <div className="text-sm text-white/70">
            <p>Available worldwide • Virtual or in-person presentations</p>
            <p>Response within 24 hours guaranteed</p>
          </div>
        </div>
      </section>
    </div>
  );
}