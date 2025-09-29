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
import BrandSwitcher from './BrandSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, Play, Calendar, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'AI GRC & Advisory', 
    href: '/consulting',
    submenu: [
      { name: 'AI Governance', href: '/ai-governance' },
      { name: 'Strategic Consulting', href: '/consulting' },
      { name: 'Risk & Compliance', href: '/risk-compliance' }
    ]
  },
  { 
    name: 'Retreats & Advocacy', 
    href: '/retreat',
    submenu: [
      { name: 'Executive Retreats', href: '/retreat' },
      { name: 'Disability Advocacy', href: '/advocacy' },
      { name: 'Wellness Programs', href: '/wellness' }
    ]
  },
  { 
    name: 'Speaking & Events', 
    href: '/speaking',
    submenu: [
      { name: 'TEDx Talk', href: '/tedx' },
      { name: 'Speaking Topics', href: '/speaking' },
      { name: 'Book Event', href: '/book-event' }
    ]
  },
  { name: 'incluu', href: '/incluu' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" className="text-lg font-semibold font-serif" data-testid="link-home">
                Dr. Dédé + incluu
              </Button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger 
                        className={location === item.href || item.submenu.some(sub => location === sub.href) ? 'text-primary' : ''}
                        data-testid={`link-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-48 gap-2 p-4">
                          {item.submenu.map((subItem) => (
                            <NavigationMenuLink key={subItem.name} asChild>
                              <Link 
                                href={subItem.href}
                                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                  location === subItem.href ? 'text-primary bg-accent/50' : ''
                                }`}
                                data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link 
                        href={item.href}
                        className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                          location === item.href ? 'text-primary' : ''
                        }`}
                        data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <BrandSwitcher />
            <Button size="sm" data-testid="button-watch-tedx">
              <Play className="w-4 h-4 mr-2" />
              Watch TEDx
            </Button>
            <Button variant="outline" size="sm" data-testid="button-book-call">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <BrandSwitcher />
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
                                location === item.href || item.submenu.some(sub => location === sub.href) ? 'text-primary' : ''
                              }`}
                              data-testid={`mobile-link-${item.name.toLowerCase()}`}
                            >
                              {item.name}
                              <ChevronDown className="w-4 h-4" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-1">
                            {item.submenu.map((subItem) => (
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
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link href={item.href}>
                          <Button
                            variant="ghost"
                            className={`w-full justify-start ${location === item.href ? 'text-primary' : ''}`}
                            onClick={() => setMobileOpen(false)}
                            data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t space-y-2">
                    <Button className="w-full" data-testid="mobile-button-watch-tedx">
                      <Play className="w-4 h-4 mr-2" />
                      Watch TEDx
                    </Button>
                    <Button variant="outline" className="w-full" data-testid="mobile-button-book-call">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Call
                    </Button>
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