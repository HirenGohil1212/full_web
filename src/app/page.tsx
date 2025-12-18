import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Smartphone, Code, Bot, Check, Tv, Wind, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps built with Flutter and React Native that engage users and perform flawlessly.'
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Web Development',
    description: 'Scalable, high-performance websites and web applications using modern frameworks like React and Next.js.'
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'AI Agent Development',
    description: 'Next-gen automation and intelligence for your workflow using LLMs and custom AI agents.'
  }
];

const techStack = [
    { name: 'React', icon: <Tv className="w-6 h-6" /> },
    { name: 'Flutter', icon: <Wind className="w-6 h-6" /> },
    { name: 'Python', icon: <Code className="w-6 h-6" /> },
    { name: 'AWS', icon: <BrainCircuit className="w-6 h-6" /> },
    { name: 'OpenAI', icon: <Bot className="w-6 h-6" /> },
]

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const whyUsMeeting = PlaceHolderImages.find(img => img.id === 'why-us-meeting');
  const whyUsCode = PlaceHolderImages.find(img => img.id === 'why-us-code');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
                <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
                Building the Future <br /> with <span className="text-primary">Intelligent</span> Digital Solutions
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Indicortex Solutions LLP empowers businesses through cutting-edge Mobile, Web, and AI development designed for scale and impact.
                </p>
                <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                    <Link href="/portfolio">View Portfolio</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Us</Link>
                </Button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    width={500}
                    height={400}
                    className="rounded-xl shadow-2xl"
                    priority
                />
                )}
            </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
          <div className="container text-center">
              <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-6">POWERED BY MODERN TECH</p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4 text-muted-foreground">
                  {techStack.map(tech => (
                      <div key={tech.name} className="flex items-center gap-2 text-lg font-medium">
                          {tech.icon}
                          <span>{tech.name}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-left max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We deliver scalable and innovative solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col items-start text-left p-6 transition-transform hover:scale-105 hover:shadow-xl bg-card">
                 <div className="mb-4 bg-primary/10 p-3 rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{service.description}</p>
                 <Button variant="link" asChild className="p-0 mt-4 h-auto">
                    <Link href="/services">Learn More &rarr;</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 md:py-28 bg-secondary/30">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
            <div className="flex gap-4">
                {whyUsMeeting && (
                    <Image src={whyUsMeeting.imageUrl} alt={whyUsMeeting.description} data-ai-hint={whyUsMeeting.imageHint} width={300} height={400} className="rounded-xl shadow-lg mt-8 object-cover"/>
                )}
                {whyUsCode && (
                    <Image src={whyUsCode.imageUrl} alt={whyUsCode.description} data-ai-hint={whyUsCode.imageHint} width={300} height={400} className="rounded-xl shadow-lg mb-8 object-cover"/>
                )}
            </div>
          <div>
            <span className="text-primary font-semibold text-sm">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2">More Than Just Code. <br /> We Build Business Value.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              At Indicortex, we don&apos;t just deliver software; we deliver growth. We combine deep technical expertise with creative problem-solving to ensure every solution we build drives real business results.
            </p>
            <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                    <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold">Agile Methodology</h4>
                        <p className="text-muted-foreground">Rapid iteration and constant feedback loops.</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                     <div>
                        <h4 className="font-semibold">Future-Proof Tech</h4>
                        <p className="text-muted-foreground">Built on modern stacks that scale with you.</p>
                    </div>
                </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
          
        </div>
      </section>

      <section id="cta" className="py-20 md:py-28 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to transform your business?</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you need a new mobile app, a complex web platform, or an AI agent, we are ready to help you succeed.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
