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
      {/* Immersive Hero Section */}
      <section className="relative w-full py-24 md:py-40 overflow-hidden bg-background border-b">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 opacity-60 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            Architecting Digital Excellence
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.95] tracking-tight mb-8 max-w-[1200px] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Building the Future with <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-green-600 to-accent">Intelligent</span> Digital Solutions
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Empowering businesses through cutting-edge Mobile, Web, and AI development designed for global scale and massive impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
            <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-all font-bold">
              <Link href="/portfolio">Explore Our Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full hover:bg-primary/5 transition-all border-2 font-bold">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
          
          <div className="mt-24 pt-12 border-t w-full max-w-5xl flex flex-wrap justify-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 animate-in fade-in duration-1000 delay-1000">
             {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 text-lg font-black tracking-tighter text-foreground">
                    <tech.icon className="size-6 text-primary" />
                    <span>{tech.name}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">Our Core Services</h2>
            <p className="text-muted-foreground text-xl">
              We deliver scalable and innovative solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-card p-10 rounded-2xl border shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col">
                   <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icon className="size-8" />
                   </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow">{service.description}</p>
                   <Link href="/services" className="inline-flex items-center text-primary font-bold hover:underline gap-2 group-hover:gap-3 transition-all text-lg" aria-label={`Learn more about ${service.title}`}>
                      Learn More <ArrowRight className="size-5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Highlight */}
      <section id="case-studies-preview" className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">Success Stories</h2>
              <p className="text-muted-foreground text-xl">
                Discover how we've helped businesses transform their operations and achieve measurable growth.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 font-bold">
              <Link href="/case-studies">Read All Stories <ArrowRight className="ml-2 size-5" /></Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-3xl bg-card border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-video relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAPjr8rSasfEzt9DAa-SWrxTtiRhOJLJZvYyf2drVp5mVhKmQAFV7hM5MDjsQQl8m_mqcoqj4V2MnYeiHnBkLWWX4yWlk_Mb8u0ZFwEJ6qQ2arbl8EvVs3QaXb8AK8b5yB_B-QBw1hb7fmgArtGylaJLdq77jHvdWfbFuzwyHvIP9h03DhIW3KZS2kaAUFHPYtKFATJP62-ULhqa-qCVHAacsd1Bqozlowsrgvt0ON3MxpH0ox-3ILYQ7ID6oZIzhR5wk2nAoXp4" alt="Dune Shisha" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="social media dashboard" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Badge className="mb-4 w-fit px-4 py-1">Marketing</Badge>
                  <h3 className="text-2xl font-bold mb-3">Dune Shisha SMM</h3>
                  <p className="text-muted-foreground mb-8 flex-1 text-lg">300% increase in monthly social engagement and 45% growth in reservations.</p>
                  <Link href="/case-studies/dune-shisha-smm" className="text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Case Study <ArrowRight className="size-5" />
                  </Link>
                </div>
            </div>
             <div className="group relative overflow-hidden rounded-3xl bg-card border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-video relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEtYZMmaa2L_YE9m2qb2IoAda299FZ8HoBuS4I-bA-IIYF40ZLx4SRRMzIM7hRHh2U7apR1zRhsA5emK6rkhbJuvwf7sG_8fcs_Gk0OiVW6Vy9OLfmY7VP7EC8pz_kaA6Hp69FTsVBFAtUSxROZJUlA5AS3ntwTf7PO4IGt91JidxoKR0eKH2K_cB-L-kYDUGWBUj69HZMMWVgtrRFWRTwrANRn17JL3z86q9o_Ji6W2oZQfHrDpuiNn2heVeC_6QRqFk7ZesXB0" alt="Live Streaming" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="streaming dashboard" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Badge className="mb-4 w-fit px-4 py-1">Web App</Badge>
                  <h3 className="text-2xl font-bold mb-3">The Match Live</h3>
                  <p className="text-muted-foreground mb-8 flex-1 text-lg">Sub-1.5 second global latency achieved for over 55,000 concurrent viewers.</p>
                  <Link href="/case-studies/the-match-live" className="text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Case Study <ArrowRight className="size-5" />
                  </Link>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-card border shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-video relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8" alt="Travel App" fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint="travel planning app" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <Badge className="mb-4 w-fit px-4 py-1">Travel</Badge>
                  <h3 className="text-2xl font-bold mb-3">Pinakin Prayaan</h3>
                  <p className="text-muted-foreground mb-8 flex-1 text-lg">60% reduction in manual dispatch overhead with real-time GPS integration.</p>
                  <Link href="/case-studies/pinakin-prayaan" className="text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Case Study <ArrowRight className="size-5" />
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Spotlight */}
      <section id="startups-preview" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
               {growKrishiPreview && (
                <Image src={growKrishiPreview.imageUrl} alt="GrowKrishi Dashboard" fill className="object-cover group-hover:scale-105 transition-transform duration-700" data-ai-hint="agritech dashboard" />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                  <div className="text-white">
                    <p className="font-bold flex items-center gap-2 mb-2 text-primary-light"><Verified className="size-5" /> GTU Ventures Selected</p>
                    <h3 className="text-3xl font-black">GrowKrishi</h3>
                  </div>
               </div>
            </div>
            <div className="flex flex-col gap-8">
                <Badge variant="secondary" className="w-fit text-primary font-black px-6 py-1 uppercase tracking-widest">Innovation Lab</Badge>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">We Incubate Impactful Ideas</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Beyond client work, Indicortex is a cradle for innovation. Our flagship startup, <strong>GrowKrishi</strong>, is revolutionizing agriculture using AI and IoT.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-muted/50 border hover:border-primary/30 transition-colors group">
                    <TrendingUp className="text-primary mb-4 size-8 group-hover:scale-110 transition-transform" />
                    <p className="text-xl font-bold mb-1">Scalable</p>
                    <p className="text-sm text-muted-foreground">Built for millions.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/50 border hover:border-primary/30 transition-colors group">
                    <Users className="text-primary mb-4 size-8 group-hover:scale-110 transition-transform" />
                    <p className="text-xl font-bold mb-1">Impactful</p>
                    <p className="text-sm text-muted-foreground">Empowering farmers.</p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-fit h-14 px-10 text-lg rounded-full font-bold">
                  <Link href="/startups">Explore Our Ventures <ArrowRight className="ml-2 size-5" /></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Why Us Highlight */}
      <section id="why-us" className="py-24 bg-card">
        <div className="container grid items-center gap-16 lg:grid-cols-2">
          <div className="relative h-[500px]">
            {whyUsMeeting && (
              <Image
                src={whyUsMeeting.imageUrl}
                alt={whyUsMeeting.description}
                width={350}
                height={450}
                data-ai-hint={whyUsMeeting.imageHint}
                className="absolute top-0 left-0 rounded-3xl shadow-2xl object-cover w-[350px] h-[450px] z-10 border-4 border-white"
              />
            )}
            {whyUsCode && (
              <Image
                src={whyUsCode.imageUrl}
                alt={whyUsCode.description}
                width={350}
                height={250}
                data-ai-hint={whyUsCode.imageHint}
                className="absolute bottom-0 right-0 rounded-3xl shadow-2xl object-cover w-[350px] h-[250px] z-20 border-4 border-white"
              />
            )}
          </div>
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-primary w-fit">
              <Verified className="size-5" />
              <span className="text-xs font-black uppercase tracking-widest">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              More Than Just Code. <br /> We Build Business Value.
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              At Indicortex, we don&apos;t just deliver software; we deliver
              growth. We combine deep technical expertise with creative
              problem-solving to ensure every solution drives results.
            </p>
            <div className="mt-4 flex flex-col gap-6">
              <div className="flex items-start gap-6">
                <div className="mt-1 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Check className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Agile Methodology</h3>
                  <p className="text-muted-foreground">
                    Rapid iteration and constant feedback loops.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="mt-1 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Check className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Future-Proof Tech</h3>
                  <p className="text-muted-foreground">
                    Built on modern stacks that scale with your ambition.
                  </p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-6 w-fit h-14 px-10 text-lg rounded-full font-bold" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investors Section Highlight */}
      <section id="investors-preview" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 size-[500px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
            <Briefcase className="size-16 mb-8 opacity-80" />
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Invest in the Future of Tech</h2>
            <p className="text-xl text-green-50 max-w-2xl mb-12 font-medium">
              Join us on our journey to Series A. Whether you provide capital, mentorship, or expertise, there's a seat at our table for strategic partners.
            </p>
            <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-primary hover:bg-green-50 font-bold shadow-2xl">
              <Link href="/investors">Join as Investor</Link>
            </Button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 size-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="relative z-10 container text-center flex flex-col items-center gap-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">Ready to transform <br className="hidden md:block" /> your business?</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl font-medium">
            Whether you need a new mobile app, a complex web platform, or an AI agent, we are ready to help you succeed.
          </p>
          <Button asChild size="lg" className="rounded-full h-16 px-14 text-xl font-bold hover:scale-105 transition-all shadow-2xl bg-foreground text-background hover:bg-foreground/80">
            <Link href="/contact">Start Your Project Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
