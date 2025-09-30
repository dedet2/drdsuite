import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600/50 via-purple-500/40 to-cyan-400/50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-3 h-3 mr-2" />
            Last Updated: September 30, 2025
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-serif">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy and data security are fundamental to our work. This policy outlines how we collect, 
            use, and protect your information when you use our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Personal Information:</strong> When you use our contact forms, schedule consultations, 
                    or engage our services, we collect information such as your name, email address, company name, 
                    and professional details.
                  </p>
                  <p>
                    <strong>Usage Information:</strong> We collect information about how you interact with our 
                    website, including pages visited, time spent, and navigation patterns. This helps us improve 
                    our services and user experience.
                  </p>
                  <p>
                    <strong>Technical Information:</strong> We automatically collect certain technical information, 
                    including IP address, browser type, device information, and operating system.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and improve our AI governance, accessibility, and inclusion consulting services</li>
                    <li>Respond to your inquiries and schedule consultations</li>
                    <li>Send you relevant information about our services, thought leadership content, and industry insights</li>
                    <li>Analyze usage patterns to improve our website and service delivery</li>
                    <li>Comply with legal obligations and protect our legal rights</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Sharing and Disclosure</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your 
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> We work with trusted third-party service providers who 
                      assist us in operating our website and providing our services. These providers are bound by 
                      confidentiality agreements and may only use your information as necessary to provide services to us.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose your information if required by law or 
                      in response to valid legal processes.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                      your information may be transferred as part of that transaction.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We implement industry-standard security measures to protect your personal information from 
                    unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data privacy and security best practices</li>
                  </ul>
                  <p>
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to protect your personal information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights and Choices</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Access and Correction:</strong> You may request access to or correction of your 
                      personal information we hold.
                    </li>
                    <li>
                      <strong>Deletion:</strong> You may request deletion of your personal information, subject 
                      to legal retention requirements.
                    </li>
                    <li>
                      <strong>Opt-Out:</strong> You may opt out of receiving marketing communications from us at 
                      any time by following the unsubscribe instructions in our emails.
                    </li>
                    <li>
                      <strong>Data Portability:</strong> You may request a copy of your personal information in 
                      a structured, commonly used format.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    Cookies are small text files stored on your device that help us remember your preferences 
                    and understand how you use our site.
                  </p>
                  <p>
                    You can control cookies through your browser settings. However, disabling cookies may limit 
                    your ability to use certain features of our website.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. International Data Transfers</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    As a global consultancy, your information may be transferred to and processed in countries 
                    outside your country of residence. We ensure appropriate safeguards are in place to protect 
                    your information in accordance with this privacy policy and applicable data protection laws.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                    personal information from children. If you believe we have inadvertently collected information 
                    from a child, please contact us immediately.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or 
                    legal requirements. We will notify you of any material changes by posting the updated policy 
                    on our website and updating the "Last Updated" date.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="flex items-center gap-2 text-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:privacy@incluu.com" className="hover:text-primary transition-colors">
                      privacy@incluu.com
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
