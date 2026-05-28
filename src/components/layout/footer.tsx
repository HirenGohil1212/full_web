'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { blogPosts } from '@/lib/blog-data';
import { caseStudies } from '@/lib/case-studies-data';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t pt-20 pb-8">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="flex flex-col gap-6 max-w-sm">
                 <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Indicortex Solutions Logo" width={32} height={32} />
                    <span className="text-xl font-bold tracking-tight">Indicortex Solutions</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Architecting high-performance digital assets for global businesses. We combine strategic foresight with technical precision to deliver sustainable ROI.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-primary" />
                    <span>Surat, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="size-4 text-primary" />
                    <span>hirengohil.ceo@indicortexsolutions.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="size-4 text-primary" />
                    <span>+91 7990305570</span>
                  </div>
                </div>
                <div className="flex gap-5 mt-2">
                    <Link href="https://www.linkedin.com/company/indicortex-solutions-llp/" className="text-muted-foreground hover:text-[#0077B5] transition-colors" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.instagram.com/indicortexsolutions.ai/" className="text-muted-foreground hover:text-[#E4405F] transition-colors" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">Instagram</span>
                      <Instagram className="h-6 w-6" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Core Expertise</h3>
                <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                    <li><Link href="/services/mobile-app-development" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
                    <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Architecture</Link></li>
                    <li><Link href="/services/ai-agent-development" className="hover:text-primary transition-colors">AI Agent Development</Link></li>
                    <li><Link href="/services/cloud-solutions" className="hover:text-primary transition-colors">Cloud Strategy</Link></li>
                    <li><Link href="/services/ai-and-machine-learning" className="hover:text-primary transition-colors">Machine Learning</Link></li>
                    <li><Link href="/services/managed-it-services" className="hover:text-primary transition-colors">Managed IT Services</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Success Stories</h3>
                <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                    {caseStudies.slice(0, 6).map(study => (
                        <li key={study.slug}>
                            <Link href={`/case-studies/${study.slug}`} className="hover:text-primary transition-colors line-clamp-1">{study.title}</Link>
                        </li>
                    ))}
                    <li><Link href="/case-studies" className="text-primary font-bold hover:underline">View All Success Stories</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Knowledge Center</h3>
                <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                    {blogPosts.slice(0, 6).map(post => (
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors line-clamp-1">{post.title}</Link>
                        </li>
                    ))}
                    <li><Link href="/blog" className="text-primary font-bold hover:underline">Browse All Insights</Link></li>
                </ul>
            </div>
        </div>

        {/* Indexing Directory - The "Happy Search Console" Section */}
        <div className="py-10 border-t border-border/50">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">Complete Site Directory</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[10px] text-muted-foreground/50 font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-primary">Home</Link>
                <Link href="/about" className="hover:text-primary">About Us</Link>
                <Link href="/portfolio" className="hover:text-primary">Our Portfolio</Link>
                <Link href="/startups" className="hover:text-primary">Venture Lab</Link>
                <Link href="/investors" className="hover:text-primary">Investors</Link>
                <Link href="/contact" className="hover:text-primary">Contact Us</Link>
                {/* Dynamically link every single detail page for crawler discovery */}
                {caseStudies.map(study => (
                    <Link key={study.slug} href={`/case-studies/${study.slug}`} className="hover:text-primary truncate">
                      CS: {study.title}
                    </Link>
                ))}
                {blogPosts.map(post => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="hover:text-primary truncate">
                      Blog: {post.title}
                    </Link>
                ))}
            </div>
        </div>

        {/* Final Copyright Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <Link href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Get a Quote</Link>
             </div>
             <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                © {year || '2025'} Indicortex Solutions LLP. Architecting the digital future.
            </p>
        </div>
      </div>
    </footer>
  );
}
