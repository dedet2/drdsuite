import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Calendar, Clock, BookOpen, Mic, Video, Award, Users, Lightbulb } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const featuredContent = [
  {
    type: "TEDx Talk",
    title: "AI Governance and Accessible Futures",
    description: "Exploring how responsible AI governance can create more inclusive and accessible futures for everyone.",
    date: "2024",
    readTime: "18 minutes",
    category: "AI Ethics",
    link: "/tedx",
    icon: Video,
    featured: true
  },
  {
    type: "Podcast",
    title: "Break Concrete - Product Inclusion",
    description: "Deep dive into product inclusion methodologies and frameworks for building accessible technology.",
    date: "2024",
    readTime: "45 minutes",
    category: "Product Strategy",
    link: "#podcast",
    icon: Mic,
    external: true
  },
  {
    type: "Article",
    title: "The Business Case for Inclusive AI",
    description: "How centering marginalized communities in AI design creates better technology and drives business value.",
    date: "Coming Soon",
    readTime: "12 minutes",
    category: "Business Strategy",
    link: "#article",
    icon: BookOpen,
    draft: true
  }
];

const topics = [
  {
    title: "AI Governance & Ethics",
    description: "Frameworks for responsible AI implementation with built-in compliance and bias mitigation.",
    articles: 5,
    icon: Lightbulb
  },
  {
    title: "Product Inclusion",
    description: "Methodologies for integrating accessibility and inclusion into product development from day one.",
    articles: 8,
    icon: Users
  },
  {
    title: "Executive Leadership",
    description: "Insights on building inclusive cultures and driving organizational transformation.",
    articles: 4,
    icon: Award
  },
  {
    title: "Disability Advocacy",
    description: "Personal stories and professional insights from lived experience with chronic illness and disability.",
    articles: 6,
    icon: Award
  }
];

const upcomingPublications = [
  {
    title: "Memoir: Embodied Innovation",
    description: "A personal journey through disability, technology, and social justice - coming 2025.",
    status: "In Progress",
    type: "Book"
  },
  {
    title: "Product Inclusion Guide",
    description: "Comprehensive framework for building accessible and inclusive technology products.",
    status: "In Development", 
    type: "Professional Guide"
  }
];

const speakingTopics = [
  "AI Governance and Responsible Innovation",
  "Product Inclusion and Accessibility Strategy",
  "The Business Value of Disability Inclusion",
  "Ethical Technology and Social Justice",
  "Building Inclusive Organizational Cultures",
  "Executive Leadership for Equity",
  "Chronic Illness and Professional Excellence",
  "First-Generation Immigrant Success Stories"
];

export default function Stories() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6 px-4 sm:px-0">
            Stories & Resources
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0">
            Thought leadership at the intersection of AI governance, accessibility, and social justice. 
            Insights from 16+ years of lived experience and professional expertise in ethical technology.
          </p>
          <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-0">
            <Badge variant="secondary">Thought Leadership</Badge>
            <Badge variant="secondary">AI Ethics</Badge>
            <Badge variant="secondary">Accessibility</Badge>
            <Badge variant="secondary">Social Justice</Badge>
          </div>
        </div>

        {/* Featured Content */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Featured Content</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore key talks, articles, and resources that showcase our approach to inclusive technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className={`h-full hover-elevate ${content.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <content.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {content.type}
                        </Badge>
                        {content.featured && (
                          <Badge variant="secondary" className="text-xs">
                            Featured
                          </Badge>
                        )}
                        {content.draft && (
                          <Badge variant="outline" className="text-xs text-muted-foreground">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">{content.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">{content.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {content.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {content.readTime}
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="text-xs">
                    {content.category}
                  </Badge>

                  {!content.draft && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      data-testid={`button-view-${content.type.toLowerCase()}`}
                    >
                      {content.external ? 'Listen Now' : 'Watch Now'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Content Topics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Content Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore insights across key areas of expertise and lived experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <topic.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription className="text-sm">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {topic.articles} pieces available
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Publications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">Upcoming Publications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Major works in development that will expand on key themes and methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingPublications.map((publication, index) => (
              <Card key={index} className="p-8 bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">{publication.type}</Badge>
                    <Badge variant="secondary">{publication.status}</Badge>
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-3">{publication.title}</h3>
                  <p className="text-muted-foreground mb-6">{publication.description}</p>
                  <Button variant="outline" size="sm" data-testid={`button-notify-${publication.type.toLowerCase()}`}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Get Notified
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">Speaking Topics</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dr. Dédé brings insights from the intersection of AI governance, accessibility, 
                and inclusive design to audiences worldwide through keynotes, panels, and workshops.
              </p>
              <p className="text-muted-foreground mb-8">
                Drawing from 16+ years of experience and lived expertise as a Black, queer, 
                disabled technologist, these talks combine deep technical knowledge with 
                authentic personal perspectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" data-testid="button-book-speaking">
                  <Mic className="w-4 h-4 mr-2" />
                  Book Speaking Engagement
                </Button>
                <Button variant="outline" size="lg" data-testid="button-speaker-kit">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Download Speaker Kit
                </Button>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">Popular Speaking Topics</h3>
              <div className="space-y-3">
                {speakingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Newsletter/Contact CTA */}
        <section className="text-center">
          <Card className="p-12 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: 'var(--gradient-current, linear-gradient(135deg, rgba(24, 255, 255, 0.1) 0%, rgba(90, 80, 155, 0.2) 100%))' }} />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
                Stay Connected
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get notified when new articles, talks, and resources are published. 
                Join a community of leaders building more inclusive technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactForm
                  defaultType="newsletter"
                  defaultService="Thought Leadership Content"
                  triggerText="Subscribe for Updates"
                  triggerSize="lg"
                  icon={BookOpen}
                  description="Get notified when new articles, talks, and resources are published. Join leaders building inclusive technology."
                  context="stories-page"
                />
                <ContactForm
                  defaultType="general"
                  defaultService="Speaking & Workshops"
                  triggerText="Collaborate With Us"
                  triggerVariant="outline"
                  triggerSize="lg"
                  icon={ArrowRight}
                  description="Interested in collaboration, partnerships, or joint initiatives? Let's explore opportunities together."
                  context="stories-page"
                />
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}