import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Smartphone, Code, Bot, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: 'Mobile App Development',
    description: 'Crafting intuitive and high-performing mobile applications for iOS and Android.'
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Web Development',
    description: 'Building responsive and scalable web solutions tailored to your business needs.'
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'AI Agent Development',
    description: 'Developing intelligent AI agents to automate tasks and enhance user engagement.'
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[60vh] md:h-[75vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-black/60" />
        <div className="relative container h-full flex flex-col items-start justify-end pb-12 md:pb-24 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary-foreground drop-shadow-md">
              Innovative Solutions for a Digital World
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Indicortex Solutions LLP provides cutting-edge IT services and fosters in-house innovation to tackle tomorrow&apos;s challenges.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Comprehensive IT Services</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We provide a wide range of IT services to help your business thrive in the digital age.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform hover:scale-105 hover:shadow-xl">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services">Explore All Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="startup" className="py-12 md:py-24 bg-secondary/50">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Fueling Innovation: Our Startups</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We are passionate about innovation. Discover our internal startup projects like GrowKrishi, aimed at revolutionizing key industries.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/startups">Learn About Our Startups</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
             <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>GrowKrishi</CardTitle>
                    <CardDescription>On Going</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>An innovative platform for the agricultural sector. We are actively developing this exciting venture.</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Who We Are</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
            Indicortex Solutions LLP is a team of passionate technologists and strategists dedicated to delivering excellence and driving innovation. Our mission is to empower businesses with transformative technology.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/about">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
