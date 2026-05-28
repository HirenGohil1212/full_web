'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { blogPosts } from '@/lib/blog-data';
import { caseStudies } from '@/lib/case-studies-data';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6 max-w-sm">
                 <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Indicortex Solutions Logo" width={32} height={32} />
                    <span className="text-xl font-bold tracking-tight">Indicortex Solutions</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Empowering businesses through cutting-edge digital solutions. We architect high-performance mobile apps, scalable web platforms, and intelligent AI agents.
                </p>
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
                </ul>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Success Stories</h3>
                <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                    {caseStudies.slice(0, 5).map(study => (
                        <li key={study.slug}>
                            <Link href={`/case-studies/${study.slug}`} className="hover:text-primary transition-colors line-clamp-1">{study.title}</Link>
                        </li>
                    ))}
                    <li><Link href="/case-studies" className="text-primary font-bold hover:underline">View All Stories</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-5">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Knowledge Center</h3>
                <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                    {blogPosts.slice(0, 5).map(post => (
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors line-clamp-1">{post.title}</Link>
                        </li>
                    ))}
                    <li><Link href="/blog" className="text-primary font-bold hover:underline">Read More Insights</Link></li>
                </ul>
            </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/investors" className="hover:text-primary transition-colors">Investors</Link>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link href="/startups" className="hover:text-primary transition-colors">Startups</Link>
                <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
             </div>
             <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                © {year || '2025'} Indicortex Solutions LLP. Architecting the future.
            </p>
        </div>
      </div>
    </footer>
  );
}
