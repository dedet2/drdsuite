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
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'wouter';

type NavigationItem = {
  name: string;
  href?: string;
  external?: boolean;
  openInSameTab?: boolean;
  submenu?: Array<{
    name: string;
    href?: string;
    external?: boolean;
    openInSameTab?: boolean;
    submenu?: Array<{
      name: string;
      href: string;
      external?: boolean;
      openInSameTab?: boolean;
    }>;
  }>;
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'incluu',
    href: '/incluu',
    submenu: [
      { name: 'Blog', href: 'https://www.incluu.us/blog', external: true, openInSameTab: true },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Testimonials', href: '/testimonials' }
    ]
  },
  { 
    name: 'Resources',
    href: '/resources',
    submenu: [
      { name: 'ROI Calculator', href: 'https://pmukyznd.manus.space/', external: true, openInSameTab: true },
      { name: 'Stories', href: '/stories' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  },
  { 
    name: 'Dr. Dédé',
    href: '/dr-dede',
    submenu: [
      { 
        name: 'Retreats & Advocacy',
        submenu: [
          { name: 'Executive Retreats', href: '/retreat' },
          { name: 'Luxury Wellness', href: '/luxury-wellness' },
          { name: 'Disability Advocacy', href: '/disability-advocacy' }
        ]
      },
      { name: 'Speaking & Events', href: '/speaking' },
      { name: 'Watch TEDx', href: 'https://nslacnow.manus.space/', external: true, openInSameTab: true }
    ]
  },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, setLocation] = useLocation();

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
                        className={`transition-colors hover:bg-primary/10 ${item.submenu && item.submenu.some(sub => location === sub.href) ? 'text-primary bg-primary/5' : ''} ${location === item.href ? 'text-primary' : ''}`}
                        data-testid={`link-${item.name.toLowerCase()}`}
                        onPointerDown={(e) => {
                          if (item.href && e.button === 0) {
                            e.preventDefault();
                            setLocation(item.href);
                          }
                        }}
                      >
                        <span>{item.name}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-56 gap-2 p-4">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.name}>
                              {subItem.submenu ? (
                                <div>
                                  <div className="text-sm font-medium leading-none px-3 py-2 text-muted-foreground">
                                    {subItem.name}
                                  </div>
                                  <div className="pl-3 space-y-1">
                                    {subItem.submenu.map((nestedItem) => (
                                      <NavigationMenuLink key={nestedItem.name} asChild>
                                        {nestedItem.external ? (
                                          <a 
                                            href={nestedItem.href}
                                            target={nestedItem.openInSameTab ? undefined : "_blank"}
                                            rel={nestedItem.openInSameTab ? undefined : "noopener noreferrer"}
                                            className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-sm"
                                            data-testid={`link-${nestedItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                          >
                                            {nestedItem.name}
                                          </a>
                                        ) : (
                                          <Link 
                                            href={nestedItem.href}
                                            className={`block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-sm ${
                                              location === nestedItem.href ? 'text-primary bg-primary/20' : ''
                                            }`}
                                            data-testid={`link-${nestedItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                          >
                                            {nestedItem.name}
                                          </Link>
                                        )}
                                      </NavigationMenuLink>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <NavigationMenuLink asChild>
                                  {subItem.external ? (
                                    <a 
                                      href={subItem.href}
                                      target={subItem.openInSameTab ? undefined : "_blank"}
                                      rel={subItem.openInSameTab ? undefined : "noopener noreferrer"}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                                      data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    >
                                      <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                    </a>
                                  ) : (
                                    <Link 
                                      href={subItem.href!}
                                      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary ${
                                        location === subItem.href ? 'text-primary bg-primary/20' : ''
                                      }`}
                                      data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    >
                                      <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                    </Link>
                                  )}
                                </NavigationMenuLink>
                              )}
                            </div>
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
                          <div className="flex items-center">
                            <Link href={item.href || '#'} className="flex-1">
                              <Button
                                variant="ghost"
                                className={`w-full justify-start ${
                                  location === item.href ? 'text-primary' : ''
                                }`}
                                onClick={() => setMobileOpen(false)}
                                data-testid={`mobile-link-${item.name.toLowerCase()}`}
                              >
                                {item.name}
                              </Button>
                            </Link>
                            <CollapsibleTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10"
                                data-testid={`mobile-expand-${item.name.toLowerCase()}`}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </Button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent className="pl-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              <div key={subItem.name}>
                                {subItem.submenu ? (
                                  <Collapsible>
                                    <CollapsibleTrigger asChild>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full justify-between"
                                        data-testid={`mobile-link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                      >
                                        {subItem.name}
                                        <ChevronDown className="w-3 h-3" />
                                      </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="pl-4 space-y-1">
                                      {subItem.submenu.map((nestedItem) => (
                                        nestedItem.external ? (
                                          <a key={nestedItem.name} href={nestedItem.href} target={nestedItem.openInSameTab ? undefined : "_blank"} rel={nestedItem.openInSameTab ? undefined : "noopener noreferrer"}>
                                            <Button
                                              variant="ghost"
                                              size="sm"
                                              className="w-full justify-start text-xs"
                                              onClick={() => setMobileOpen(false)}
                                              data-testid={`mobile-link-${nestedItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            >
                                              {nestedItem.name}
                                            </Button>
                                          </a>
                                        ) : (
                                          <Link key={nestedItem.name} href={nestedItem.href}>
                                            <Button
                                              variant="ghost"
                                              size="sm"
                                              className={`w-full justify-start text-xs ${location === nestedItem.href ? 'text-primary' : ''}`}
                                              onClick={() => setMobileOpen(false)}
                                              data-testid={`mobile-link-${nestedItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            >
                                              {nestedItem.name}
                                            </Button>
                                          </Link>
                                        )
                                      ))}
                                    </CollapsibleContent>
                                  </Collapsible>
                                ) : (
                                  subItem.external ? (
                                    <a href={subItem.href} target={subItem.openInSameTab ? undefined : "_blank"} rel={subItem.openInSameTab ? undefined : "noopener noreferrer"}>
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
                                    <Link href={subItem.href!}>
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
                                )}
                              </div>
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
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}