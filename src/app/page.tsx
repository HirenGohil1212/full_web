'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, Verified } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps built with Flutter and React Native that engage users and perform flawlessly.'
  },
  {
    icon: 'language',
    title: 'Web Development',
    description: 'Scalable, high-performance websites and web applications using modern frameworks like React and Next.js.'
  },
  {
    icon: 'smart_toy',
    title: 'AI Agent Development',
    description: 'Next-gen automation and intelligence for your workflow using LLMs and custom AI agents.'
  }
];

const techStack = [
    { name: 'React', icon: 'code' },
    { name: 'Flutter', icon: 'smartphone' },
    { name: 'Python', icon: 'terminal' },
    { name: 'AWS', icon: 'cloud' },
    { name: 'OpenAI', icon: 'smart_toy' },
]

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const whyUsMeeting = PlaceHolderImages.find(img => img.id === 'why-us-meeting');
  const whyUsCode = PlaceHolderImages.find(img => img.id === 'why-us-code');

  return (
    <div className="flex flex-col min-h-[100dvh]">
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

      <section className="w-full border-y py-10 bg-card">
          <div className="container flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">POWERED BY MODERN TECH</p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4 text-muted-foreground opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {techStack.map(tech => (
                      <div key={tech.name} className="flex items-center gap-2 text-xl font-bold text-foreground">
                          <span className="material-symbols-outlined">{tech.icon}</span>
                          <span>{tech.name}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center md:text-left max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We deliver scalable and innovative solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group bg-card p-8 rounded-xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                 </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                 <Link href="/services" className="inline-flex items-center text-primary font-bold hover:underline gap-1 group-hover:gap-2 transition-all">
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary w-fit">
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
                  <h4 className="font-bold">Agile Methodology</h4>
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
                  <h4 className="font-bold">Future-Proof Tech</h4>
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
