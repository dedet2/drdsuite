import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, Play, Calendar, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import ContactForm from '@/components/ContactForm';

type NavigationItem = {
  name: string;
  href?: string;
  external?: boolean;
  submenu?: Array<{
    name: string;
    href: string;
    external?: boolean;
  }>;
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'incluu', href: '/incluu' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: 'https://www.incluu.us/blog', external: true },
  { name: 'Resources', href: 'https://dr-dede.vercel.app/', external: true },
  { name: 'Dr. Dédé', href: 'https://dr-dede.vercel.app/', external: true },
  { 
    name: 'Retreats & Advocacy',
    submenu: [
      { name: 'Executive Retreats', href: '/retreat' },
      { name: 'Luxury Wellness', href: '/luxury-wellness' },
      { name: 'Disability Advocacy', href: '/disability-advocacy' }
    ]
  },
  { name: 'Speaking & Events', href: '/speaking' },
  { name: 'ROI Calculator', href: 'https://pmukyznd.manus.space/', external: true }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" className="text-lg font-semibold font-serif hover:bg-primary/10 hover:text-primary transition-colors" data-testid="link-home">
                Dr. Dédé + incluu
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex relative">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger 
                        className={`transition-colors hover:bg-primary/10 ${item.submenu && item.submenu.some(sub => location === sub.href) ? 'text-primary bg-primary/5' : ''}`}
                        data-testid={`link-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-56 gap-2 p-4">
                          {item.submenu.map((subItem) => (
                            <NavigationMenuLink key={subItem.name} asChild>
                              {subItem.external ? (
                                <a 
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                                  data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                </a>
                              ) : (
                                <Link 
                                  href={subItem.href}
                                  className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary ${
                                    location === subItem.href ? 'text-primary bg-primary/20' : ''
                                  }`}
                                  data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                </Link>
                              )}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      {item.external ? (
                        <a 
                          href={item.href!}
                          className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`}
                          data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link 
                          href={item.href!}
                          className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                            location === item.href ? 'text-primary' : ''
                          }`}
                          data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://nslacnow.manus.space/">
              <Button size="sm" data-testid="button-watch-tedx">
                <Play className="w-4 h-4 mr-2" />
                Watch TEDx
              </Button>
            </a>
            <ContactForm
              defaultType="consultation"
              defaultService="Strategic Consulting"
              triggerText="Contact"
              triggerVariant="outline"
              triggerSize="sm"
              description="Schedule a consultation to discuss AI governance, product inclusion, or technology leadership needs."
              context="header"
            />
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col space-y-2 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className={`w-full justify-between ${
                                item.submenu && item.submenu.some(sub => location === sub.href) ? 'text-primary' : ''
                              }`}
                              data-testid={`mobile-link-${item.name.toLowerCase()}`}
                            >
                              {item.name}
                              <ChevronDown className="w-4 h-4" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              subItem.external ? (
                                <a key={subItem.name} href={subItem.href} target="_blank" rel="noopener noreferrer">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full justify-start"
                                    onClick={() => setMobileOpen(false)}
                                    data-testid={`mobile-link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {subItem.name}
                                  </Button>
                                </a>
                              ) : (
                                <Link key={subItem.name} href={subItem.href}>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`w-full justify-start ${location === subItem.href ? 'text-primary' : ''}`}
                                    onClick={() => setMobileOpen(false)}
                                    data-testid={`mobile-link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {subItem.name}
                                  </Button>
                                </Link>
                              )
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                          item.external ? (
                            <a href={item.href!}>
                              <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setMobileOpen(false)}
                                data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {item.name}
                              </Button>
                            </a>
                          ) : (
                            <Link href={item.href!}>
                              <Button
                                variant="ghost"
                                className={`w-full justify-start ${location === item.href ? 'text-primary' : ''}`}
                                onClick={() => setMobileOpen(false)}
                                data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {item.name}
                              </Button>
                            </Link>
                          )
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t space-y-2">
                    <a href="https://nslacnow.manus.space/">
                      <Button className="w-full" data-testid="mobile-button-watch-tedx">
                        <Play className="w-4 h-4 mr-2" />
                        Watch TEDx
                      </Button>
                    </a>
                    <ContactForm
                      defaultType="consultation"
                      defaultService="Strategic Consulting"
                      triggerText="Contact"
                      triggerVariant="outline"
                      triggerSize="default"
                      className="w-full"
                      description="Schedule a consultation to discuss AI governance, product inclusion, or technology leadership needs."
                      context="mobile-header"
                    />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}