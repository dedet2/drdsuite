import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import VideoEmbed from '@/components/VideoEmbed';
import { Download, Share2, Quote, ExternalLink } from 'lucide-react';

export default function TEDx() {
  return (
    <div className="min-h-screen">
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-cyan-400/50 via-cyan-500/40 to-purple-600/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 sm:mb-6 px-4 sm:px-0 text-white">
              AI Governance and Accessible Futures
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              A TEDx talk exploring how responsible AI governance can create more inclusive and accessible futures for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" data-testid="button-share-talk">
                <Share2 className="w-4 h-4 mr-2" />
                Share This Talk
              </Button>
              <Button variant="outline" size="lg" data-testid="button-download-transcript">
                <Download className="w-4 h-4 mr-2" />
                Download Transcript
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        {/* Video */}
        <div className="max-w-4xl mx-auto mb-16 mt-16">
          <VideoEmbed
            provider="youtube"
            id="ZnqUquGeUzI"
            title="AI Governance and Accessible Futures | Dr. Dédé Tetsubayashi | TEDx"
          />
        </div>

        {/* Talk Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Quote className="w-5 h-5 mr-2" />
                  Talk Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  In this powerful 18-minute talk, Dr. Dédé Tetsubayashi challenges the tech industry 
                  to rethink AI governance through the lens of accessibility and inclusion. Drawing 
                  from personal experience and industry expertise, the talk explores:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Why traditional AI governance frameworks fail marginalized communities</li>
                  <li>The business case for accessibility-first AI development</li>
                  <li>Practical frameworks for implementing inclusive AI governance</li>
                  <li>How embodied expertise can transform corporate compliance strategies</li>
                </ul>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                  "When we design AI systems with accessibility at the core, we don't just serve 
                  people with disabilities—we create better technology for everyone."
                </blockquote>
              </CardContent>
            </Card>

            {/* Transcript Preview */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Transcript</CardTitle>
                <CardDescription>
                  Full transcript available with timestamps and speaker notes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2">[00:00:15]</p>
                  <p className="mb-4">
                    "Good evening. I want to start with a question that might make you uncomfortable. 
                    When your company talks about AI governance, whose voices are in the room?"
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">[00:00:32]</p>
                  <p className="mb-4">
                    "Because if those voices don't include people who live with disabilities, 
                    if they don't include marginalized communities, then you're not governing AI—you're 
                    just managing legal risk."
                  </p>
                  <div className="text-center">
                    <Button variant="outline" data-testid="button-read-full-transcript">
                      Read Full Transcript
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">Event</p>
                  <p className="text-sm text-muted-foreground">TEDxStanford 2024</p>
                </div>
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-sm text-muted-foreground">March 15, 2024</p>
                </div>
                <div>
                  <p className="font-medium">Duration</p>
                  <p className="text-sm text-muted-foreground">18 minutes</p>
                </div>
                <div>
                  <p className="font-medium">Views</p>
                  <p className="text-sm text-muted-foreground">2.3M+ views</p>
                </div>
              </CardContent>
            </Card>

            {/* Press Kit */}
            <Card>
              <CardHeader>
                <CardTitle>Press Kit</CardTitle>
                <CardDescription>
                  Media assets and resources for journalists
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" data-testid="button-speaker-bio">
                  <Download className="w-4 h-4 mr-2" />
                  Speaker Bio
                </Button>
                <Button variant="outline" className="w-full justify-start" data-testid="button-high-res-photos">
                  <Download className="w-4 h-4 mr-2" />
                  High-res Photos
                </Button>
                <Button variant="outline" className="w-full justify-start" data-testid="button-talk-slides">
                  <Download className="w-4 h-4 mr-2" />
                  Presentation Slides
                </Button>
                <Button variant="outline" className="w-full justify-start" data-testid="button-media-quotes">
                  <Download className="w-4 h-4 mr-2" />
                  Key Quotes
                </Button>
              </CardContent>
            </Card>

            {/* Related Content */}
            <Card>
              <CardHeader>
                <CardTitle>Related Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start" data-testid="link-ai-governance-guide">
                  AI Governance Framework Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start" data-testid="link-accessibility-checklist">
                  Accessibility Implementation Checklist
                </Button>
                <Button variant="ghost" className="w-full justify-start" data-testid="link-case-studies">
                  Corporate Case Studies
                </Button>
                <Button variant="ghost" className="w-full justify-start" data-testid="link-speaking-requests">
                  Speaking & Workshop Requests
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 py-16 rounded-lg">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Ready to Transform Your AI Governance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with me to implement accessibility-first AI governance frameworks that deliver 
            compliance, inclusion, and business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-book-consultation">
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg" data-testid="button-download-framework">
              Download Framework Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}