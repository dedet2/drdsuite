import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import BrandSwitcher from './BrandSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, Play, Calendar } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'TEDx Talk', href: '/tedx' },
  { name: 'Consulting', href: '/consulting' },
  { name: 'Retreat', href: '/retreat' },
  { name: 'RaR', href: '/rar' },
  { name: 'incluu', href: '/incluu' },
  { name: 'Stories', href: '/stories' },
  { name: 'Contact', href: '/contact' },
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
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === item.href ? 'text-primary' : ''}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

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
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${location === item.href ? 'text-primary' : ''}`}
                        onClick={() => setMobileOpen(false)}
                        data-testid={`mobile-link-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </Button>
                    </Link>
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