import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">hub</span>
                    <span className="text-xl font-bold">Indicortex</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Empowering businesses with intelligent digital solutions. Mobile, Web, and AI development for the modern world.
                </p>
                 <div className="flex gap-4">
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">public</span></Link>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></Link>
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-6">Company</h4>
                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="/about" className="hover:text-primary transition-colors">Our Team</Link></li>
                    <li><Link href="/portfolio" className="hover:text-primary transition-colors">Careers</Link></li>
                    <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-6">Services</h4>
                <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <li><Link href="/services" className="hover:text-primary transition-colors">Mobile Development</Link></li>
                    <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
                    <li><Link href="/services" className="hover:text-primary transition-colors">AI Agents</Link></li>
                    <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                </ul>
            </div>
            <div>
                 <h4 className="font-bold mb-6">Contact</h4>
                 <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">mail</span> 
                        hello@indicortex.com
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">call</span> 
                        +1 (555) 123-4567
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span> 
                        Tech Plaza, Suite 100
                    </li>
                 </ul>
            </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Indicortex Solutions LLP. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
