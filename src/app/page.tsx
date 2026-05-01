import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Verified, Smartphone, Globe, Bot, Code, Terminal, Cloud, ArrowRight, Briefcase, TrendingUp, Users } from 'lucide-react';
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
    { name: 'OpenAI', icon: Bot },
]

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const whyUsMeeting = PlaceHolderImages.find(img => img.id === 'why-us-meeting');
  const whyUsCode = PlaceHolderImages.find(img => img.id === 'why-us-code');
  const growKrishiPreview = PlaceHolderImages.find(img => img.id === 'growkrishi-dashboard');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                  Building the Future with <span className="text-primary">Intelligent</span> Digital Solutions
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Indicortex Solutions LLP empowers businesses through cutting-edge Mobile, Web, and AI development designed for scale and impact.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
                <Button asChild size="lg" className="shadow-lg shadow-green-500/30 h-12 px-8">
                    <Link href="/portfolio">View Portfolio</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8">
                    <Link href="/contact">Contact Us</Link>
                </Button>
                </div>
            </div>
            <div className="relative flex-1 w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
              {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    priority
                    className="object-cover"
                />
              )}
            </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="w-full border-y py-10 bg-card">
          <div className="container flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">POWERED BY MODERN TECH</p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4 text-muted-foreground opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {techStack.map(tech => {
                      const Icon = tech.icon;
                      return (
                        <div key={tech.name} className="flex items-center gap-2 text-xl font-bold text-foreground">
                            <Icon />
                            <span>{tech.name}</span>
                        </div>
                      )
                  })}
              </div>
          </div>
      </section>

      {/* Services Highlight */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center md:text-left max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We deliver scalable and innovative solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-card p-8 rounded-xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                   <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="text-3xl" />
                   </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                   <Link href="/services" className="inline-flex items-center text-primary font-bold hover:underline gap-1 group-hover:gap-2 transition-all" aria-label={`Learn more about ${service.title}`}>
                      Learn More <ArrowRight className="text-sm" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Highlight */}
      <section id="case-studies-preview" className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Success Stories</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Discover how we've helped businesses transform their operations and achieve measurable growth.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/case-studies">Read All Case Studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-card border shadow-md hover:shadow-xl transition-all flex flex-col">
                <div className="aspect-video relative">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAPjr8rSasfEzt9DAa-SWrxTtiRhOJLJZvYyf2drVp5mVhKmQAFV7hM5MDjsQQl8m_mqcoqj4V2MnYeiHnBkLWWX4yWlk_Mb8u0ZFwEJ6qQ2arbl8EvVs3QaXb8AK8b5yB_B-QBw1hb7fmgArtGylaJLdq77jHvdWfbFuzwyHvIP9h03DhIW3KZS2kaAUFHPYtKFATJP62-ULhqa-qCVHAacsd1Bqozlowsrgvt0ON3MxpH0ox-3ILYQ7ID6oZIzhR5wk2nAoXp4" alt="Dune Shisha" fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint="social media dashboard" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Badge className="mb-2 w-fit">Marketing</Badge>
                  <h3 className="text-xl font-bold">Dune Shisha SMM</h3>
                  <p className="text-muted-foreground mt-2 mb-6 flex-1 text-sm">300% increase in monthly social engagement and 45% growth in reservations.</p>
                  <Link href="/case-studies/dune-shisha-smm" className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Case Study <ArrowRight className="size-4" />
                  </Link>
                </div>
            </div>
             <div className="group relative overflow-hidden rounded-2xl bg-card border shadow-md hover:shadow-xl transition-all flex flex-col">
                <div className="aspect-video relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEtYZMmaa2L_YE9m2qb2IoAda299FZ8HoBuS4I-bA-IIYF40ZLx4SRRMzIM7hRHh2U7apR1zRhsA5emK6rkhbJuvwf7sG_8fcs_Gk0OiVW6Vy9OLfmY7VP7EC8pz_kaA6Hp69FTsVBFAtUSxROZJUlA5AS3ntwTf7PO4IGt91JidxoKR0eKH2K_cB-L-kYDUGWBUj69HZMMWVgtrRFWRTwrANRn17JL3z86q9o_Ji6W2oZQfHrDpuiNn2heVeC_6QRqFk7ZesXB0" alt="Live Streaming" fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint="streaming dashboard" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Badge className="mb-2 w-fit">Web App</Badge>
                  <h3 className="text-xl font-bold">The Match Live</h3>
                  <p className="text-muted-foreground mt-2 mb-6 flex-1 text-sm">Sub-1.5 second global latency achieved for over 55,000 concurrent viewers.</p>
                  <Link href="/case-studies/the-match-live" className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Case Study <ArrowRight className="size-4" />
                  </Link>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-card border shadow-md hover:shadow-xl transition-all flex flex-col">
                <div className="aspect-video relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8" alt="Travel App" fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint="travel planning app" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Badge className="mb-2 w-fit">Travel</Badge>
                  <h3 className="text-xl font-bold">Pinakin Prayaan</h3>
                  <p className="text-muted-foreground mt-2 mb-6 flex-1 text-sm">60% reduction in manual dispatch overhead with real-time GPS integration.</p>
                  <Link href="/case-studies/pinakin-prayaan" className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Case Study <ArrowRight className="size-4" />
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Spotlight */}
      <section id="startups-preview" className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border">
               {growKrishiPreview && (
                <Image src={growKrishiPreview.imageUrl} alt="GrowKrishi Dashboard" fill className="object-cover" data-ai-hint="agritech dashboard" />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold flex items-center gap-2 mb-1"><Verified className="h-4 w-4 text-green-400" /> GTU Ventures Selected</p>
                    <h3 className="text-2xl font-black">GrowKrishi</h3>
                  </div>
               </div>
            </div>
            <div className="flex flex-col gap-6">
                <Badge variant="secondary" className="w-fit text-primary font-bold">Innovation Lab</Badge>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">We Incubate Impactful Ideas</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond client work, Indicortex is a cradle for innovation. Our flagship startup, <strong>GrowKrishi</strong>, is revolutionizing agriculture using AI and IoT.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/50 border">
                    <TrendingUp className="text-primary mb-2" />
                    <p className="font-bold">Scalable</p>
                    <p className="text-xs text-muted-foreground">Built for millions.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 border">
                    <Users className="text-primary mb-2" />
                    <p className="font-bold">Impactful</p>
                    <p className="text-xs text-muted-foreground">Empowering farmers.</p>
                  </div>
                </div>
                <Button asChild className="w-fit">
                  <Link href="/startups">Explore Our Ventures <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Why Us Highlight */}
      <section id="why-us" className="py-20 bg-card">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative h-[500px]">
            {whyUsMeeting && (
              <Image
                src={whyUsMeeting.imageUrl}
                alt={whyUsMeeting.description}
                width={300}
                height={400}
                data-ai-hint={whyUsMeeting.imageHint}
                className="absolute top-0 left-0 rounded-xl shadow-lg object-cover w-[300px] h-[400px]"
              />
            )}
            {whyUsCode && (
              <Image
                src={whyUsCode.imageUrl}
                alt={whyUsCode.description}
                width={300}
                height={200}
                data-ai-hint={whyUsCode.imageHint}
                className="absolute bottom-0 right-0 rounded-xl shadow-lg object-cover w-[300px] h-[200px]"
              />
            )}
          </div>
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-primary w-fit">
              <Verified className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              More Than Just Code. <br /> We Build Business Value.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Indicortex, we don&apos;t just deliver software; we deliver
              growth. We combine deep technical expertise with creative
              problem-solving to ensure every solution we build drives real
              business results.
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 p-2 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Agile Methodology</h3>
                  <p className="text-sm text-muted-foreground">
                    Rapid iteration and constant feedback loops.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 p-2 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Future-Proof Tech</h3>
                  <p className="text-sm text-muted-foreground">
                    Built on modern stacks that scale with you.
                  </p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-6 w-fit" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investors Section Highlight */}
      <section id="investors-preview" className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
            <Briefcase className="h-12 w-12 mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-black mb-4">Invest in the Future of Tech</h2>
            <p className="text-lg text-green-50 max-w-2xl mb-8">
              Join us on our journey to Series A. Whether you provide capital, mentorship, or expertise, there's a seat at our table for strategic partners.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-green-50">
                <Link href="/investors">Join as Investor</Link>
              </Button>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 container text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to transform your business?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Whether you need a new mobile app, a complex web platform, or an AI agent, we are ready to help you succeed.
          </p>
          <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold hover:scale-105 transition-transform shadow-xl bg-foreground text-background hover:bg-foreground/80">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
