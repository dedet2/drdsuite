import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ExternalLink, Download, Play } from 'lucide-react';
import VideoEmbed from '@/components/VideoEmbed';

const pastTalks = [
  {
    title: "AI Governance and Accessible Futures",
    event: "TEDxStanford",
    date: "March 2024",
    location: "Stanford University",
    type: "Keynote",
    audience: "2,500+",
    views: "2.3M+",
    description: "Exploring how responsible AI governance can create more inclusive and accessible futures for everyone.",
    videoId: "dQw4w9WgXcQ",
    featured: true
  },
  {
    title: "Building Inclusive Tech: Beyond Compliance",
    event: "SXSW 2024",
    date: "March 2024", 
    location: "Austin, TX",
    type: "Panel",
    audience: "1,200+",
    description: "A deep dive into how accessibility-first design creates better products for everyone."
  },
  {
    title: "The Business Case for Accessible AI",
    event: "AI Summit 2023",
    date: "November 2023",
    location: "New York, NY", 
    type: "Keynote",
    audience: "800+",
    description: "How accessibility considerations drive innovation and unlock new market opportunities."
  },
  {
    title: "Embodied Expertise in Tech Governance",
    event: "Grace Hopper Celebration",
    date: "September 2023",
    location: "Orlando, FL",
    type: "Workshop",
    audience: "150+",
    description: "Interactive workshop on leveraging lived experience in technology policy and governance."
  }
];

const speakingTopics = [
  {
    category: "AI & Technology",
    topics: [
      "AI Governance and Risk Management",
      "Accessible Technology Design",
      "Bias Mitigation in AI Systems",
      "Responsible AI Implementation",
      "Technology Policy and Regulation"
    ]
  },
  {
    category: "Leadership & Strategy", 
    topics: [
      "Inclusive Leadership in Tech",
      "Building Diverse Teams",
      "Executive Decision Making",
      "Change Management",
      "Strategic Planning for Accessibility"
    ]
  },
  {
    category: "Social Impact",
    topics: [
      "Disability Rights and Technology",
      "Intersectionality in Design",
      "Social Justice in Tech",
      "Community-Centered Innovation",
      "Ethical Technology Development"
    ]
  }
];

export default function Speaking() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-6">
            Speaking & Workshops
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bringing insights from the intersection of AI governance, accessibility, and inclusive design 
            to audiences worldwide through keynotes, panels, and interactive workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-book-speaking">
              <Calendar className="w-4 h-4 mr-2" />
              Book Dr. Dédé to Speak
            </Button>
            <Button variant="outline" size="lg" data-testid="button-speaking-kit">
              <Download className="w-4 h-4 mr-2" />
              Download Speaker Kit
            </Button>
          </div>
        </div>

        {/* Featured Talk */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Featured Talk</h2>
            <p className="text-lg text-muted-foreground">Most recent keynote presentation</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <VideoEmbed
                  provider="youtube"
                  id="dQw4w9WgXcQ"
                  title="AI Governance and Accessible Futures | Dr. Dédé Tetsubayashi | TEDx"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">TEDx Talk</Badge>
                  <Badge variant="outline">2.3M+ Views</Badge>
                  <Badge variant="outline">18 min</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Governance and Accessible Futures</h3>
                <p className="text-muted-foreground mb-4">
                  TEDxStanford • March 2024 • Stanford University
                </p>
                <p className="text-lg">
                  Exploring how responsible AI governance can create more inclusive and accessible 
                  futures for everyone. This talk challenges the tech industry to rethink AI 
                  governance through the lens of accessibility and inclusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Speaking Engagements */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Recent Speaking Engagements</h2>
            <p className="text-lg text-muted-foreground">
              Selected presentations from conferences, summits, and corporate events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastTalks.slice(1).map((talk, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={talk.type === 'Keynote' ? 'default' : 'secondary'}>
                      {talk.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{talk.date}</span>
                  </div>
                  <CardTitle className="text-xl">{talk.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {talk.event}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {talk.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {talk.audience} attendees
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{talk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Speaking Topics</h2>
            <p className="text-lg text-muted-foreground">
              Key areas of expertise for keynotes, panels, and workshops
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {speakingTopics.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Booking Information */}
        <section className="bg-muted/30 py-16 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif mb-6">
              Book Dr. Dédé for Your Event
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Available for keynotes, panel discussions, workshops, and corporate training. 
              All presentations are designed to be fully accessible and inclusive.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Keynotes</h3>
                <p className="text-sm text-muted-foreground">
                  45-60 minute presentations for conferences and corporate events
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive 2-4 hour sessions with hands-on learning
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Consulting</h3>
                <p className="text-sm text-muted-foreground">
                  Custom training and strategic guidance for organizations
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-speaking-inquiry">
                Schedule Speaking Consultation
              </Button>
              <Button variant="outline" size="lg" data-testid="button-past-events">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Past Events
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}