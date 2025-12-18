
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Bot, Hexagon, Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/startups', label: 'Our Startups' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm dark:border-primary/20">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
            <Hexagon className="text-primary h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">
                Indicortex
            </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'text-sm font-medium text-foreground transition-colors hover:text-primary',
                pathname === href && 'text-primary font-bold'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
           <Button asChild className="hidden md:flex rounded-lg h-10 px-6 font-bold shadow-sm shadow-primary/30">
              <Link href="/contact">Get a Quote</Link>
           </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <Link href="/" className="flex items-center gap-3 mb-6">
                    <Hexagon className="text-primary h-8 w-8" />
                    <span className="text-xl font-bold tracking-tight">
                        Indicortex
                    </span>
                </Link>
              <div className="flex flex-col space-y-4">
                {[...navLinks, { href: '/contact', label: 'Contact' }].map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium text-muted-foreground transition-colors hover:text-primary',
                      pathname === href && 'text-primary'
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
