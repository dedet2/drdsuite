import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import VideoEmbed from '@/components/VideoEmbed';
import { Button } from '@/components/ui/button';
import { Shield, Users, Zap, ArrowRight } from 'lucide-react';
import drDedeImage from '@assets/dr_dede_professional_headshot.jpg';
import retreatImage from '@assets/generated_images/Luxury_accessible_retreat_center_c5a186a2.png';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="AI Governance"
        subtitle="Accessible Futures"
        description="Systems design for compliance, access, and growth. Built from embodied expertise."
        primaryCta={{
          text: "Work With Me",
          action: () => console.log('Work With Me clicked')
        }}
        secondaryCta={{
          text: "Watch TEDx",
          action: () => console.log('Watch TEDx clicked')
        }}
      />

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4">
              Expertise That Delivers Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From compliance frameworks to accessible design, I help organizations build systems that work for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              title="AI Governance"
              description="Compliance systems that scale with your business"
              features={[
                "Risk assessment frameworks",
                "Regulatory compliance audits", 
                "Policy development & implementation",
                "Team training & workshops"
              ]}
              icon={Shield}
              cta={{
                text: "Learn More",
                action: () => console.log('AI Governance clicked')
              }}
            />
            
            <ServiceCard
              title="Accessibility Systems"
              description="Inclusive design that opens new markets"
              features={[
                "WCAG 2.2 compliance audits",
                "Assistive technology integration",
                "User experience optimization", 
                "Accessibility training programs"
              ]}
              icon={Users}
              cta={{
                text: "Get Started",
                action: () => console.log('Accessibility clicked')
              }}
              highlighted={true}
            />
            
            <ServiceCard
              title="Growth Strategy"
              description="ROI-focused implementation roadmaps"
              features={[
                "Market opportunity analysis",
                "Implementation planning",
                "Performance metrics & KPIs",
                "Ongoing optimization support"
              ]}
              icon={Zap}
              cta={{
                text: "Schedule Call", 
                action: () => console.log('Growth Strategy clicked')
              }}
            />
          </div>
        </div>
      </section>

      {/* TEDx Video Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif mb-4">
                The Future of AI Governance
              </h2>
              <p className="text-xl text-muted-foreground">
                Watch my TEDx talk on building accessible futures through responsible AI governance
              </p>
            </div>
            
            <VideoEmbed
              provider="youtube"
              id="dQw4w9WgXcQ"
              title="AI Governance and Accessible Futures | Dr. Dédé Tetsubayashi | TEDx"
            />
          </div>
        </div>
      </section>

      {/* About & Retreat CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-6">
                Embodied Expertise, Proven Results
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Black, queer, first-generation Togolese immigrant and Cornell-educated social scientist with 20+ years of experience in ethical technology and social justice. Living with sickle-cell disease, I bring unique insights to AI governance and systems design rooted in lived experience.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                As founder of incluu, I've delivered $300M+ in cost savings and $500M+ in market expansion for enterprise clients through strategic AI governance and tech equity implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" data-testid="button-luxury-retreat">
                  Luxury Retreat Program
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" data-testid="button-learn-more">
                  Learn More About Me
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={drDedeImage} 
                alt="Dr. Dédé Tetsubayashi - AI Governance Expert and founder of incluu"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <p className="font-semibold">AI Governance Expert</p>
                <p className="text-sm opacity-90">$300M+ Cost Savings Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={retreatImage}
                alt="Luxury accessible retreat center"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold font-serif mb-6">
                Executive Retreat Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your leadership approach in our luxury, fully accessible retreat center. 
                Intimate cohorts of senior executives explore AI governance, accessibility strategy, 
                and inclusive leadership.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>5-day immersive program in nature</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Maximum 12 participants per cohort</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Fully accessible facilities & programming</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Personalized action plans & 6-month follow-up</span>
                </li>
              </ul>
              <Button size="lg" data-testid="button-apply-retreat">
                Apply for Next Cohort
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}