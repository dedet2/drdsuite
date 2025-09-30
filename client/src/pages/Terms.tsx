import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600/50 via-purple-500/40 to-cyan-400/50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            <FileText className="w-3 h-3 mr-2" />
            Last Updated: September 30, 2025
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-serif">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These terms govern your use of our services and website. Please read them carefully 
            before engaging with our AI governance and inclusion consulting services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    By accessing or using the services provided by Dr. Dédé Tetsubayashi and incluu 
                    ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not 
                    agree to these terms, please do not use our services or website.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>We provide the following professional services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI Governance and Risk Management consulting</li>
                    <li>Product Inclusion Strategy development</li>
                    <li>Accessibility and compliance implementation</li>
                    <li>Strategic Technology Advisory services</li>
                    <li>Executive Retreats and Leadership Development</li>
                    <li>Speaking Engagements and Workshops</li>
                    <li>Disability Advocacy and Healthcare Navigation</li>
                  </ul>
                  <p>
                    Our services are provided on a consulting basis and may be customized based on client needs. 
                    Specific terms for individual engagements will be outlined in separate service agreements.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Professional Relationship</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Our consulting services establish an independent contractor relationship. We are not employees, 
                    agents, partners, or joint venturers of our clients. Each engagement is governed by a separate 
                    written agreement that outlines scope, deliverables, timeline, and compensation.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Our IP:</strong> All content on this website, including text, graphics, logos, and 
                    software, is the property of Dr. Dédé Tetsubayashi and incluu and is protected by copyright, 
                    trademark, and other intellectual property laws.
                  </p>
                  <p>
                    <strong>Client Work Product:</strong> Ownership of deliverables created during consulting 
                    engagements will be specified in individual service agreements. Generally, frameworks, 
                    methodologies, and tools developed by us remain our property, while client-specific 
                    implementations and customizations may be jointly owned or transferred to the client.
                  </p>
                  <p>
                    <strong>Confidential Information:</strong> Both parties agree to maintain confidentiality 
                    of proprietary information shared during engagements, as detailed in Non-Disclosure Agreements.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Client Responsibilities</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Clients engaging our services agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information necessary for service delivery</li>
                    <li>Grant reasonable access to relevant systems, data, and personnel</li>
                    <li>Respond to information requests in a timely manner</li>
                    <li>Pay invoices according to agreed payment terms</li>
                    <li>Implement recommendations in good faith, understanding that results may vary</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Fees and Payment</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Consultation Fees:</strong> Our professional fees are based on the scope and complexity 
                    of each engagement. Specific rates and payment terms will be outlined in individual service agreements.
                  </p>
                  <p>
                    <strong>Payment Terms:</strong> Unless otherwise specified, invoices are due within 30 days of 
                    issuance. Late payments may incur interest charges at the rate of 1.5% per month or the maximum 
                    rate permitted by law, whichever is lower.
                  </p>
                  <p>
                    <strong>Expenses:</strong> Reasonable expenses incurred in connection with service delivery 
                    (travel, accommodation, materials) will be billed separately with prior client approval.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Our consulting services provide recommendations and guidance based on our professional expertise 
                    and industry best practices. However, we cannot guarantee specific outcomes or results.
                  </p>
                  <p>
                    To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                    special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                    directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting 
                    from your use of our services.
                  </p>
                  <p>
                    Our total liability for any claims arising from our services shall not exceed the fees paid by 
                    the client for the specific engagement giving rise to the claim.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Disclaimers</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Professional Advice:</strong> Our services are provided for informational and strategic 
                    purposes. They do not constitute legal, financial, or medical advice. Clients should consult 
                    appropriate licensed professionals for such matters.
                  </p>
                  <p>
                    <strong>No Warranties:</strong> Our services are provided "as is" without warranties of any kind, 
                    either express or implied, including but not limited to warranties of merchantability or fitness 
                    for a particular purpose.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Either party may terminate a consulting engagement with written notice as specified in the 
                    individual service agreement. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Client shall pay for all services rendered and expenses incurred up to the termination date</li>
                    <li>We will deliver all completed work product to the client</li>
                    <li>Confidentiality obligations shall survive termination</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Dispute Resolution</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Any disputes arising from these Terms or our services shall first be attempted to be resolved 
                    through good faith negotiations. If negotiations fail, disputes shall be resolved through binding 
                    arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of 
                    California, without regard to its conflict of law provisions.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We reserve the right to modify these Terms at any time. Material changes will be communicated 
                    to active clients. Continued use of our services after such modifications constitutes acceptance 
                    of the updated Terms.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="flex items-center gap-2 text-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:legal@incluu.com" className="hover:text-primary transition-colors">
                      legal@incluu.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
