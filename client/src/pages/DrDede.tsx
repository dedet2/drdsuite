import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Award, Users, Target, Heart, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

const keyInsights = [
  {
    title: "Lead with Curiosity",
    description: "Challenge your assumptions and break out of echo chambers. AI reinforces stereotypes and biases unless we actively break the cycle through curiosity and questioning."
  },
  {
    title: "Be Accountable",
    description: "Ethical technology development requires considering all possible end users—especially those differently abled, impaired, or economically disadvantaged. Your responsibility doesn't end at launch."
  },
  {
    title: "Solve for One, Extend to Many",
    description: "When you design with those on the margins, you create better solutions for everyone. Inclusive design benefits all users throughout your product's entire lifecycle."
  },
  {
    title: "Take Action",
    description: "If an app is inaccessible, reach out to developers. If you see bias in tech or AI, call it out. Change begins with you—demand better technology for all."
  }
];

const speakingTopics = [
  {
    title: "You've Been Coded Out",
    description: "How AI bias excludes communities and what we can do to make technology work for everyone.",
    icon: Award
  },
  {
    title: "The $300M Compliance Risk",
    description: "How AI bias creates massive business liability and the governance frameworks that prevent it.",
    icon: Target
  },
  {
    title: "Anthropology Applied to Algorithms",
    description: "Using social science methodology to identify and fix systemic bias in AI systems.",
    icon: Users
  }
];

const impactStats = [
  {
    number: "$300M+",
    label: "Saved in Compliance Risks"
  },
  {
    number: "$500M+",
    label: "Value Unlocked"
  },
  {
    number: "Fortune 500",
    label: "Companies Served"
  },
  {
    number: "20+ years",
    label: "Technology Leadership"
  }
];

export default function DrDede() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-400/50 via-cyan-500/40 to-purple-600/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">AI Governance Expert • TEDx Speaker</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
                Dr. Dédé Tetsubayashi
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Social Scientist. Technologist. Systems Disruptor.
              </p>
              <p className="text-lg text-white/80 mb-8">
                As a Black, queer, first-generation Togolese immigrant living with sickle-cell disease, 
                Dr. Dédé brings an anthropologist's eye to AI governance. She doesn't just study how technology 
                excludes—she's lived it. Every algorithmic failure has become data for building better systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://nslacnow.manus.space/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" data-testid="button-watch-tedx-talk">
                    <Play className="mr-2 h-5 w-5" />
                    Watch TEDx Talk
                  </Button>
                </a>
                <Link href="/speaking">
                  <Button variant="outline" size="lg" data-testid="button-book-speaking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Speaking
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="/dr_dede_professional_headshot.jpg" 
                alt="Dr. Dédé Tetsubayashi"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEDx Talk Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Featured Presentation</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              You've Been Coded Out: How To Make AI Work For All
            </h2>
            <p className="text-lg text-muted-foreground">
              TEDxAdamsMorgan
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ZnqUquGeUzI?start=1"
                title="You've Been Coded Out: How To Make AI Work For All | Dr. Dédé Tetsubayashi | TEDxAdamsMorgan"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                In this TEDx talk, Dr. Dédé dives into the latest global research on AI's impact and shares 
                the framework she uses as a tech ethicist to guide clients in creating truly responsible apps 
                and software that reflect the rich versatility of their audiences.
              </p>
              <p className="text-sm text-muted-foreground italic">
                "The most dangerous bias in AI isn't in the code—it's in who gets to write it." — Dr. Dédé Tetsubayashi
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Key Insights from This Talk
            </h2>
            <p className="text-lg text-muted-foreground">
              Main takeaways and actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyInsights.map((insight, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Dr. Dédé</h2>
            <h3 className="text-xl text-primary mb-6">
              Social scientist who doesn't just research bias—she's lived it, measured it, and now she's dismantling it.
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              Dr. Dédé Tetsubayashi approaches AI governance like the social scientist she is: observing patterns, 
              questioning assumptions, mapping invisible power structures. As a Black, queer, first-generation Togolese 
              immigrant and transracial adoptee living with sickle-cell disease, she brings an anthropologist's eye to 
              the sterile world of AI governance.
            </p>

            <p>
              She doesn't just study how technology excludes—she's lived it. Every algorithm that failed to recognize 
              her voice, every system that couldn't parse her name, every interface that ignored her needs has become 
              data. This lived experience, combined with rigorous social science methodology, allows her to see 
              compliance risks that others miss.
            </p>

            <p>
              Her work has saved companies $300M+ by identifying algorithmic bias before it becomes liability. She's 
              unlocked $500M+ in value by building frameworks that center human complexity rather than algorithmic 
              convenience. This isn't just about doing good—it's about building sustainable, profitable, and 
              accountable AI systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <Card className="p-8 bg-muted/30">
            <h3 className="text-xl font-bold mb-4">Professional Background</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Cornell University educated social scientist</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">20+ years experience in ethical technology</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Works across U.S., APAC, and African markets</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Speaks 7 languages</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Fractional CPO/CPRO for scaling organizations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">AI governance and ethics expert</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Sickle Cell Warrior and disability advocate</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">TEDx speaker and thought leader</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Speaking Topics</h2>
            <p className="text-lg text-muted-foreground">
              Available presentations for conferences, corporate events, and educational institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakingTopics.map((topic, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <topic.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-cyan-400/85 via-cyan-500/80 to-purple-600/85">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Work With Dr. Dédé
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Whether you're a technologist, organizer, creative, simply dreaming of a better world, or building 
                AI or biometric tech that could backfire, I'd love to help!
              </p>
              <p className="text-lg text-white/90 mb-8">
                I turn risky, biased systems into compliant, high-performing products—fast. My strategies have saved 
                $300M+, unlocked $500M+ in new markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/dr_dede/consultation" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" data-testid="button-book-advisory">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Advisory Call
                  </Button>
                </a>
                <Link href="/speaking">
                  <Button variant="outline" size="lg" data-testid="button-speaking-inquiry">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Speaking Inquiry
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
