import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, ExternalLink, Calendar, MessageSquare, Linkedin, Clock, Globe } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactMethods = [
  {
    title: "Strategy Consultation",
    description: "Book a strategic consultation to discuss AI governance, product inclusion, or technology leadership needs.",
    icon: Calendar,
    action: "Schedule Meeting",
    href: "#book-consultation",
    priority: "primary"
  },
  {
    title: "Speaking Engagement",
    description: "Invite Dr. Dédé to speak at your conference, workshop, or corporate event.",
    icon: MessageSquare,
    action: "Book Speaking",
    href: "#book-speaking",
    priority: "secondary"
  },
  {
    title: "General Inquiry",
    description: "For partnerships, media requests, or other general inquiries.",
    icon: Mail,
    action: "Send Message",
    href: "#general-contact",
    priority: "outline"
  }
];

const serviceAreas = [
  "AI Governance & Ethics",
  "Product Inclusion Strategy", 
  "Fractional CPO/CPRO Services",
  "Accessibility Consulting",
  "Executive Retreats",
  "Speaking & Workshops",
  "Technology Advisory",
  "Risk & Compliance"
];

const languages = [
  "English (Native)",
  "French (Fluent)",
  "Japanese (Fluent)", 
  "Spanish (Conversational)",
  "Portuguese (Conversational)",
  "Ewe (Native - Togolese)",
  "American Sign Language (ASL)"
];

export default function Contact() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6 px-4 sm:px-0">
            Let's Work Together
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Ready to transform your AI strategy, build inclusive products, or bring thought leadership 
            to your organization? Let's start the conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-0">
            <Badge variant="secondary">Available for Consulting</Badge>
            <Badge variant="secondary">Speaking Engagements</Badge>
            <Badge variant="secondary">Executive Advisory</Badge>
          </div>
        </div>

        {/* Contact Methods */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="h-full hover-elevate">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-center">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ContactForm
                    defaultType={method.href === "#book-consultation" ? "consultation" : method.href === "#book-speaking" ? "speaking" : "general"}
                    triggerText={method.action}
                    triggerVariant={method.priority === "primary" ? "default" : method.priority as "secondary" | "outline"}
                    triggerSize="lg"
                    className="w-full"
                    icon={ExternalLink}
                    description={method.description}
                    context="contact-page"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Details */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Professional Information</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">United States</p>
                      <p className="text-sm text-muted-foreground">Available for global remote consulting</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Availability</h3>
                      <p className="text-muted-foreground">Currently accepting new clients</p>
                      <p className="text-sm text-muted-foreground">Response time: 24-48 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Languages</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        {languages.map((language, index) => (
                          <p key={index}>{language}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Linkedin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Professional Networks</h3>
                      <div className="space-y-2">
                        <a href="https://www.linkedin.com/in/dr-dede/" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                          LinkedIn Profile <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                        <a href="https://www.incluu.us" target="_blank" rel="noopener noreferrer"
                           className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                          incluu Company <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Areas of Expertise</h2>
              
              <Card className="p-6 mb-6">
                <h3 className="font-semibold mb-4">Consulting Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Background & Credentials</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Education:</strong> Cornell University, Social Science & Technology
                  </p>
                  <p>
                    <strong className="text-foreground">Experience:</strong> 16+ years in product development, AI/ML, governance
                  </p>
                  <p>
                    <strong className="text-foreground">Founder & CEO:</strong> incluu - Black-woman-owned consultancy
                  </p>
                  <p>
                    <strong className="text-foreground">Specializations:</strong> AI ethics, product inclusion, accessibility advocacy
                  </p>
                  <p>
                    <strong className="text-foreground">Professional Affiliations:</strong> Equity Army, Tech Ladies, Women Talk Design
                  </p>
                  <p>
                    <strong className="text-foreground">Personal:</strong> Disability advocate, sickle cell warrior, first-generation Togolese immigrant
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need strategic AI governance, product inclusion expertise, or thought leadership 
                for your next event, let's explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" data-testid="button-primary-contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Consultation
                </Button>
                <Button variant="outline" size="lg" data-testid="button-email-contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email Inquiry
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}