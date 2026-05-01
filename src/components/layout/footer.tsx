import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t pt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-4 max-w-sm">
                 <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Indicortex Solutions Logo" width={32} height={32} />
                    <span className="text-lg font-bold">Indicortex Solutions</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Empowering businesses through cutting-edge digital solutions. We specialize in mobile apps, web development, and AI integration.
                </p>
            </div>
            <div className="md:col-start-3 flex flex-wrap gap-12">
              <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider">Services</h3>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <li><Link href="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                      <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
                      <li><Link href="/services" className="hover:text-primary transition-colors">AI Solutions</Link></li>
                      <li><Link href="/services" className="hover:text-primary transition-colors">Consulting</Link></li>
                  </ul>
              </div>
              <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider">Company</h3>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                      <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                      <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                      <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                  </ul>
              </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
             <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Indicortex Solutions LLP. All rights reserved.
            </p>
            <div className="flex gap-6">
                <Link href="https://www.linkedin.com/company/indicortex-solutions-llp/" className="text-muted-foreground hover:text-[#0077B5] transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/indicortexsolutions.ai/" className="text-muted-foreground hover:text-[#E4405F] transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
