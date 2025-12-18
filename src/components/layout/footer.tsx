import { Sprout, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
                 <div className="flex items-center gap-2 mb-4">
                    <Sprout className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold font-headline">Indicortex</span>
                </div>
                <p className="text-sm text-muted-foreground">
                    Empowering businesses with intelligent digital solutions. Mobile, Web, and AI development for the modern world.
                </p>
                 <div className="flex items-center gap-4 mt-4">
                    <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                </div>
            </div>
            <div className="md:col-span-2 md:col-start-6">
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Our Team</Link></li>
                    <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
                    <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                </ul>
            </div>
            <div className="md:col-span-2">
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                    <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Mobile Development</Link></li>
                    <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Web Development</Link></li>
                    <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">AI Agents</Link></li>
                    <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Cloud Solutions</Link></li>
                </ul>
            </div>
            <div className="md:col-span-2">
                 <h3 className="font-semibold mb-4">Contact</h3>
                 <ul className="space-y-3">
                    <li><a href="mailto:hello@indicortex.com" className="text-sm text-muted-foreground hover:text-primary">hello@indicortex.com</a></li>
                    <li><a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary">+1 (555) 123-4567</a></li>
                    <li className="text-sm text-muted-foreground">Tech Plaza, Suite 100</li>
                 </ul>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Indicortex Solutions LLP. All rights reserved.
            </p>
            <div className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
