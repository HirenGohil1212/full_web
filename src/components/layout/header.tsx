
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/startups', label: 'Our Startups', hot: true },
  { href: '/about', label: 'About' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
];

function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map(({ href, label, hot }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            'relative text-sm font-medium text-foreground transition-colors hover:text-primary',
            pathname === href ? 'text-primary font-bold' : ''
          )}
        >
          {label}
          {hot && <span className="absolute -top-5 -right-3 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">HOT</span>}
        </Link>
      ))}
    </nav>
  );
}

function MobileNav({ closeMenu }: { closeMenu: () => void }) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        </SheetHeader>
        <Link href="/" className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="Indicortex Solutions Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight">
            Indicortex
          </span>
        </Link>
        <div className="flex flex-col space-y-4">
            {navLinks.map(({ href, label, hot }) => (
                <Link
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className={cn(
                        'relative text-lg font-medium text-muted-foreground transition-colors hover:text-primary',
                        pathname === href && 'text-primary'
                    )}
                >
                    {label}
                    {hot && <span className="absolute -top-2 right-0 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full -translate-y-1/2 translate-x-full">HOT</span>}
                </Link>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}


export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm dark:border-primary/20">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Indicortex Solutions Logo" width={40} height={40} />
           <span className="text-xl font-bold tracking-tight">
            Indicortex Solutions
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          {isClient ? (
            <>
              <NavLinks />
              <Button asChild className="hidden md:flex rounded-lg h-10 px-6 font-bold shadow-sm shadow-primary/30">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <MobileNav closeMenu={() => setIsMobileMenuOpen(false)} />
            </>
          ) : (
            <>
              {/* Fallback skeleton for SSR to prevent hydration mismatch */}
              <div className="hidden md:flex h-10 items-center gap-8 w-[584px]">
                  <div className="h-6 w-[480px]"></div>
                  <div className="h-10 w-[104px]"></div>
              </div>
              <div className="h-10 w-10 md:hidden"></div>
            </>
           )}
        </div>

      </div>
    </header>
  );
}
