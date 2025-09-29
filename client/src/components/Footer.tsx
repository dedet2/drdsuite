import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Email', href: 'mailto:hello@drdede.com', icon: Mail },
];

const footerLinks = {
  Services: [
    { name: 'AI Governance', href: '/consulting' },
    { name: 'Accessibility Systems', href: '/consulting' },
    { name: 'Growth Strategy', href: '/consulting' },
    { name: 'Retreat Program', href: '/retreat' },
  ],
  Resources: [
    { name: 'TEDx Talk', href: '/tedx' },
    { name: 'Stories & Articles', href: '/stories' },
    { name: 'Case Studies', href: '/stories' },
    { name: 'Speaking', href: '/contact' },
  ],
  Company: [
    { name: 'About Dr. Dédé', href: 'https://dr-dede.vercel.app/', external: true },
    { name: 'incluu Brand', href: '/incluu' },
    { name: 'RaR Program', href: '/rar' },
    { name: 'Contact', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Admin Portal', href: '/admin' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-4">Dr. Dédé + incluu</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Systems design for compliance, access, and growth. Built from embodied expertise.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-elevate"
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link: any) => (
                  <li key={link.name}>
                    {link.external || link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                          data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                          data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {link.name}
                        </Button>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Dr. Dédé Tetsubayashi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Built with accessibility and inclusion in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}