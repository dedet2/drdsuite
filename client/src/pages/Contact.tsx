import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Calendar, Globe, MessageSquare, Clock, MapPin, Phone, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Strategic Consultation",
    description: "Book a consultation to discuss AI governance, accessibility, or inclusion strategy",
    action: "consultation",
    highlighted: true
  },
  {
    icon: Calendar,
    title: "Speaking Engagements",
    description: "Inquire about keynotes, workshops, or panel discussions for your event",
    action: "speaking",
    highlighted: false
  },
  {
    icon: Globe,
    title: "Media & Press",
    description: "Media inquiries, interviews, and thought leadership opportunities",
    action: "general",
    highlighted: false
  },
  {
    icon: Mail,
    title: "General Inquiries", 
    description: "Questions about services, partnerships, or collaboration opportunities",
    action: "general",
    highlighted: false
  }
];

const businessHours = [
  { day: "Monday - Thursday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Friday", hours: "9:00 AM - 3:00 PM EST" },
  { day: "Saturday - Sunday", hours: "Limited availability" }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Global Reach • 48hr Response Time</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Let's Transform Your AI Future
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to implement responsible AI governance, build inclusive technology systems, or bring transformational leadership to your organization? Let's discuss how Dr. Dédé and incluu can drive meaningful change for your team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm 
              triggerText="Schedule Strategy Session"
              triggerVariant="default"
              triggerSize="lg"
              description="Book a consultation to discuss your AI governance, accessibility, and inclusion needs"
              context="contact-page-hero"
              defaultType="consultation"
              defaultService="Strategic Consultation"
            />
            <Button variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              View Availability
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Can We Help?</h2>
            <p className="text-lg text-muted-foreground">
              Choose the best way to connect based on your specific needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`hover-elevate ${method.highlighted ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      method.highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                    }`}>
                      <method.icon className={`w-6 h-6 ${method.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                      <CardDescription className="text-base">{method.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ContactForm 
                    triggerText="Get Started"
                    triggerVariant={method.highlighted ? "default" : "outline"}
                    triggerSize="default"
                    description={method.description}
                    context={`contact-page-${method.action}`}
                    defaultType={method.action as "consultation" | "speaking" | "general"}
                    defaultService={method.title}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <CardTitle>Business Hours</CardTitle>
                </div>
                <CardDescription>
                  Response times and availability for consultations and inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm font-medium">{schedule.day}</span>
                      <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Emergency consultations:</strong> Available 24/7 for critical AI governance or accessibility compliance issues.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                  <CardTitle>Connect With Us</CardTitle>
                </div>
                <CardDescription>
                  Multiple ways to reach our team and stay updated on our work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email Response</p>
                      <p className="text-xs text-muted-foreground">Within 48 hours guaranteed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Global Services</p>
                      <p className="text-xs text-muted-foreground">Remote consultations worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Professional Network</p>
                      <p className="text-xs text-muted-foreground">Connect on LinkedIn for updates</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Fortune 500 Trusted</Badge>
                    <Badge variant="secondary">Security Cleared</Badge>
                    <Badge variant="secondary">GDPR Compliant</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing number of organizations transforming their AI governance and inclusion practices with Dr. Dédé and incluu's proven expertise.
          </p>
          
          <ContactForm 
            triggerText="Schedule Your Consultation"
            triggerVariant="default"
            triggerSize="lg"
            description="Book a strategic consultation to discuss your AI governance, accessibility, and inclusion transformation"
            context="contact-page-cta"
            defaultType="consultation"
            defaultService="Strategic Consultation"
          />

          <div className="mt-6 text-sm text-muted-foreground">
            <p>No obligations • Free initial consultation • 48hr response guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
}