import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Verified, Smartphone, Globe, Bot, Code, Terminal, Cloud, ArrowRight, Briefcase, TrendingUp, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Indicortex Solutions LLP - AI, Web & Mobile Development',
  description: 'Indicortex Solutions LLP empowers businesses through cutting-edge Mobile, Web, and AI development designed for scale and impact. We build the future with intelligent digital solutions.',
};

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps built with Flutter and React Native that engage users and perform flawlessly.'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Scalable, high-performance websites and web applications using modern frameworks like React and Next.js.'
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Next-gen automation and intelligence for your workflow using LLMs and custom AI agents.'
  }
];

const techStack = [
    { name: 'React', icon: Code },
    { name: 'Flutter', icon: Smartphone },
    { name: 'Python', icon: Terminal },
    { name: 'AWS', icon: Cloud },
    { name: 'GenAI', icon: Bot },
]

export default function Home() {
  const whyUsMeeting = PlaceHolderImages.find(img => img.id === 'why-us-meeting');
  const whyUsCode = PlaceHolderImages.find(img => img.id === 'why-us-code');
  const growKrishiPreview = PlaceHolderImages.find(img => img.id === 'growkrishi-dashboard');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* High-Impact Centered Hero Section */}
      <section className="relative w-full py-24 md:py-48 overflow-hidden bg-background border-b flex items-center justify-center min-h-[90vh]">
        {/* Immersive Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          {/* Highlighted Tagline */}
          <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="text-primary font-black text-xs md:text-sm tracking-[0.6em] uppercase border-b-2 border-primary/20 pb-2">
                Ideate. Innovate. Impact.
             </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-10 max-w-[1300px] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-green-600 to-accent">Digital Future</span> with Intelligent Solutions
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 font-medium">
            Empowering global businesses through cutting-edge Mobile, Web, and AI development designed for massive impact and seamless scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full shadow-[0_20px_50px_rgba(56,124,43,0.3)] hover:scale-105 transition-all font-bold">
              <Link href="/portfolio">Our Portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full hover:bg-primary/5 transition-all border-2 font-bold">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Modern Tech Stack Indicator */}
          <div className="mt-28 w-full max-w-4xl animate-in fade-in duration-1000 delay-1000">
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 hover:opacity-100 transition-opacity duration-500">
                {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 text-sm font-bold tracking-widest text-foreground uppercase">
                        <tech.icon className="size-5 text-primary" />
                        <span>{tech.name}</span>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 1. Services Highlight */}
      <section id="services-highlight" className="py-24 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">What We Build</h2>
              <p className="text-muted-foreground text-xl">
                Scalable software architectures and intelligent AI systems tailored to your unique business logic.
              </p>
            </div>
            <Button asChild variant="link" size="lg" className="text-primary font-bold text-lg">
                <Link href="/services">View All Services <ArrowRight className="ml-2 size-5" /></Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-card p-10 rounded-3xl border hover:border-primary/50 transition-all duration-500 flex flex-col hover:shadow-2xl">
                   <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icon className="size-7" />
                   </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow">{service.description}</p>
                   <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center text-primary font-bold hover:underline gap-2 group-hover:gap-3 transition-all" aria-label={`Explore ${service.title}`}>
                      Explore Details <ArrowRight className="size-5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Success Stories (Case Studies Highlight) */}
      <section id="case-studies-highlight" className="py-24 bg-muted/20 border-b">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">Proven Results</h2>
            <p className="text-muted-foreground text-xl">
              Deep dives into how we've transformed complex challenges into high-growth digital assets.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-3xl bg-card border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-video relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAPjr8rSasfEzt9DAa-SWrxTtiRhOJLJZvYyf2drVp5mVhKmQAFV7hM5MDjsQQl8m_mqcoqj4V2MnYeiHnBkLWWX4yWlk_Mb8u0ZFwEJ6qQ2arbl8EvVs3QaXb8AK8b5yB_B-QBw1hb7fmgArtGylaJLdq77jHvdWfbFuzwyHvIP9h03DhIW3KZS2kaAUFHPYtKFATJP62-ULhqa-qCVHAacsd1Bqozlowsrgvt0ON3MxpH0ox-3ILYQ7ID6oZIzhR5wk2nAoXp4" alt="Dune Shisha" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="social media dashboard" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Badge className="mb-4 w-fit">Marketing</Badge>
                  <h3 className="text-2xl font-bold mb-3">Dune Shisha SMM</h3>
                  <p className="text-muted-foreground mb-8 flex-1">Boosted engagement by 300% using AI-powered sentiment analysis.</p>
                  <Link href="/case-studies/dune-shisha-smm" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Full Case Study <ArrowRight className="size-5" />
                  </Link>
                </div>
            </div>
             <div className="group relative overflow-hidden rounded-3xl bg-card border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-video relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEtYZMmaa2L_YE9m2qb2IoAda299FZ8HoBuS4I-bA-IIYF40ZLx4SRRMzIM7hRHh2U7apR1zRhsA5emK6rkhbJuvwf7sG_8fcs_Gk0OiVW6Vy9OLfmY7VP7EC8pz_kaA6Hp69FTsVBFAtUSxROZJUlA5AS3ntwTf7PO4IGt91JidxoKR0eKH2K_cB-L-kYDUGWBUj69HZMMWVgtrRFWRTwrANRn17JL3z86q9o_Ji6W2oZQfHrDpuiNn2heVeC_6QRqFk7ZesXB0" alt="Live Streaming" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="streaming dashboard" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Badge className="mb-4 w-fit">Web App</Badge>
                  <h3 className="text-2xl font-bold mb-3">The Match Live</h3>
                  <p className="text-muted-foreground mb-8 flex-1">Real-time stats and sub-1s latency for 55k concurrent viewers.</p>
                  <Link href="/case-studies/the-match-live" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Full Case Study <ArrowRight className="size-5" />
                  </Link>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-card border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-video relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8" alt="Travel App" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="travel planning app" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Badge className="mb-4 w-fit">Travel</Badge>
                  <h3 className="text-2xl font-bold mb-3">Pinakin Prayaan</h3>
                  <p className="text-muted-foreground mb-8 flex-1">60% reduction in manual dispatch via real-time GPS fleet management.</p>
                  <Link href="/case-studies/pinakin-prayaan" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Full Case Study <ArrowRight className="size-5" />
                  </Link>
                </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-10 h-14 font-bold">
                <Link href="/case-studies">Explore All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Our Startups (Innovation Lab Highlight) */}
      <section id="innovation-lab-highlight" className="py-24 border-b">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-xs font-bold uppercase tracking-widest">
                    Venture Studio
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">We Incubate the Next Generation of Impact</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Beyond client work, Indicortex is a cradle for innovation. We build and scale our own products to solve global problems.
                </p>
                <div className="flex flex-col gap-6">
                    <div className="p-8 rounded-3xl bg-muted/30 border-2 border-transparent hover:border-primary/20 transition-all flex gap-6 items-start">
                        <div className="size-14 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0">
                            <Sparkles className="size-7" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">GrowKrishi</h3>
                            <p className="text-muted-foreground">Revolutionizing agritech with AI-driven crop diagnosis and direct market linkage. Selected for GTU Ventures incubator.</p>
                        </div>
                    </div>
                </div>
                <Button asChild variant="outline" size="lg" className="w-fit h-14 px-8 rounded-full border-2 font-bold">
                  <Link href="/startups">View All Ventures <ArrowRight className="ml-2 size-5" /></Link>
                </Button>
            </div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                {growKrishiPreview && (
                    <Image src={growKrishiPreview.imageUrl} alt="GrowKrishi Innovation" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" data-ai-hint="smart agriculture" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                    <div className="text-white">
                        <p className="font-bold flex items-center gap-2 mb-2 text-primary-light"><Verified className="size-5" /> Innovation Milestone</p>
                        <h3 className="text-3xl font-black">GTU Ventures Selected</h3>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. About Us (Philosophy Highlight) */}
      <section id="about-highlight" className="py-24 bg-card">
        <div className="container">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="relative h-[600px]">
              {whyUsMeeting && (
                <Image
                  src={whyUsMeeting.imageUrl}
                  alt="Team Collaboration"
                  width={400}
                  height={500}
                  data-ai-hint="team meeting"
                  className="absolute top-0 left-0 rounded-3xl shadow-2xl object-cover w-[400px] h-[500px] z-10 border-4 border-white"
                />
              )}
              {whyUsCode && (
                <Image
                  src={whyUsCode.imageUrl}
                  alt="Code Focus"
                  width={350}
                  height={250}
                  data-ai-hint="code screen"
                  className="absolute bottom-10 right-0 rounded-3xl shadow-2xl object-cover w-[350px] h-[250px] z-20 border-4 border-white"
                />
              )}
            </div>
            <div className="flex flex-col gap-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-primary w-fit text-xs font-black uppercase tracking-widest">
                Our Philosophy
              </div>
              <h2 className="text-5xl font-black leading-tight">
                More Than Just Code. We Build Sustainable Business Value.
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground">
                At Indicortex, we combine strategic foresight with technical precision. Every project is an opportunity to architect a better digital future.
              </p>
              <div className="grid gap-6">
                <div className="flex items-start gap-6">
                  <div className="mt-1 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                    <Check className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Agile Strategy</h3>
                    <p className="text-muted-foreground">Rapid iterations fueled by transparent data and constant feedback.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="mt-1 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                    <Check className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Future-Ready Stack</h3>
                    <p className="text-muted-foreground">Built on modern, scalable technologies that grow alongside your ambition.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="w-fit h-14 px-10 rounded-full font-bold">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Investors (Partnership Highlight) */}
      <section id="investors-highlight" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 size-[600px] bg-white/10 rounded-full blur-[120px]"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
            <Briefcase className="size-20 mb-10 opacity-80" />
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">Invest in Intelligent Innovation</h2>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mb-14 font-medium leading-relaxed">
              Join us as we scale towards Series A. We are looking for strategic partners who bring capital, mentorship, and vision to our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-primary hover:bg-green-50 font-bold shadow-2xl">
                <Link href="/investors">Join as Investor</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-12 text-xl rounded-full border-2 border-white/40 hover:bg-white/10 text-white font-bold">
                    <Link href="/contact">Request Pitch Deck</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Final Global CTA */}
      <section id="cta" className="py-32 relative overflow-hidden bg-background">
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-[700px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="relative z-10 container text-center flex flex-col items-center gap-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]">Ready to transform <br /> your business?</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl font-medium">
            Let's discuss how our expertise in AI, Mobile, and Web can help you reach your goals.
          </p>
          <Button asChild size="lg" className="rounded-full h-18 px-16 text-2xl font-bold hover:scale-105 transition-all shadow-2xl bg-foreground text-background hover:bg-foreground/80">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
