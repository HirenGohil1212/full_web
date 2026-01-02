import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Rocket, Eye, ShieldCheck, Link, Mail } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Hiren Gohil",
    role: "Founder & CEO",
    image: PlaceHolderImages.find((img) => img.id === "founder-ceo"),
  },
];

const pillars = [
    {
        icon: Rocket,
        title: "Our Mission",
        description: "Empowering businesses through seamless digital transformation and robust software architecture that scales with their ambition."
    },
    {
        icon: Eye,
        title: "Our Vision",
        description: "To be the leading global architect of intelligent, scalable, and future-ready software solutions that define the next era of tech."
    },
    {
        icon: ShieldCheck,
        title: "Our Values",
        description: "Innovation, Integrity, and Agility are the cornerstones of our operational philosophy, ensuring we deliver value at every step."
    }
]

const journey = [
    {
        year: "2020",
        title: "Inception",
        description: "Indicortex Solutions LLP was founded with a vision to bridge the gap between complex technology and business needs."
    },
    {
        year: "2022",
        title: "Mobile Expansion",
        description: "Expanded our service portfolio to include native mobile app development, securing our first Fortune 500 client."
    },
    {
        year: "2024",
        title: "AI Division Launch",
        description: "Launched a dedicated AI research and development wing to build autonomous agents and predictive models."
    }
]

const aboutUsHeroImage = PlaceHolderImages.find(
  (img) => img.id === "about-us-hero"
);

export default function AboutPage() {
  return (
    <div className="animate-fade-in font-body">
      <section className="container p-6 lg:p-10">
        <div
          className="relative flex min-h-[480px] flex-col gap-6 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 lg:p-16"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 26, 18, 0.8) 0%, rgba(16, 26, 18, 0.95) 100%), url("${aboutUsHeroImage?.imageUrl}")`,
          }}
          data-ai-hint={aboutUsHeroImage?.imageHint}
        >
          <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black font-display leading-tight tracking-[-0.033em]">
              Architecting the Digital Future
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Indicortex Solutions LLP combines strategic foresight with
              technical precision. We specialize in robust mobile apps,
              scalable web platforms, and intelligent AI agents that drive
              business evolution.
            </p>
          </div>
          <div className="flex gap-4 z-10 mt-4">
            <Button size="lg" className="h-12 px-8 bg-primary-light text-foreground font-bold hover:bg-white hover:text-primary">
                View Our Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-card">
          <div className="container px-6 lg:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-2 p-4 border-l-4 border-primary">
                      <p className="text-primary text-3xl md:text-4xl font-black font-display">50+</p>
                      <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">Projects Delivered</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 border-l-4 border-primary">
                      <p className="text-primary text-3xl md:text-4xl font-black font-display">3</p>
                      <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">Global Offices</p>
                  </div>
                   <div className="flex flex-col gap-2 p-4 border-l-4 border-primary">
                      <p className="text-primary text-3xl md:text-4xl font-black font-display">100%</p>
                      <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">Client Satisfaction</p>
                  </div>
                   <div className="flex flex-col gap-2 p-4 border-l-4 border-primary">
                      <p className="text-primary text-3xl md:text-4xl font-black font-display">24/7</p>
                      <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">Support Available</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-16">
        <div className="container px-6 lg:px-10">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight tracking-[-0.02em]">Our Core Pillars</h2>
                    <p className="text-muted-foreground text-lg font-normal max-w-2xl">
                        We are driven by a commitment to excellence and innovation in every line of code we write and every solution we design.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div key={index} className="group flex flex-col gap-4 rounded-xl border bg-card p-8 transition-all hover:border-primary hover:shadow-lg">
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Icon className="text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold font-display">{pillar.title}</h3>
                                <p className="text-muted-foreground text-base leading-relaxed">{pillar.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>
      
      <section className="bg-card py-16">
        <div className="container px-6 lg:px-10">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight tracking-[-0.02em] mb-4">Our Journey</h2>
                <p className="text-muted-foreground text-lg">From a small startup to a global IT solutions provider.</p>
            </div>
            <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
                <div className="flex flex-col gap-12">
                    {journey.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                             <div className={`w-full md:w-1/2 md:pr-12 ${index % 2 !== 0 ? 'md:pr-0 md:pl-12 md:text-left' : 'md:text-right' } mb-4 md:mb-0`}>
                                <h3 className="text-2xl font-bold text-primary">{item.year}</h3>
                                <h4 className="text-xl font-bold font-display mt-1">{item.title}</h4>
                                <p className="text-muted-foreground mt-2">{item.description}</p>
                            </div>
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-card z-10 hidden md:block"></div>
                             <div className="w-full md:w-1/2 md:pl-12"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      
      <section className="py-16">
          <div className="container px-6 lg:px-10 flex flex-col items-center">
            <div className="flex flex-col gap-4 mb-10 text-center max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight tracking-[-0.02em]">Meet the Mind Behind Indicortex</h2>
                <p className="text-muted-foreground text-lg">Our leadership brings decades of combined experience in software engineering and business strategy.</p>
            </div>
            <div className="flex justify-center">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col gap-0 rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow max-w-sm">
                        <div className="h-80 w-full bg-gray-200 overflow-hidden">
                            {member.image && (
                                <Image
                                src={member.image.imageUrl}
                                alt={`Portrait of ${member.name}`}
                                data-ai-hint={member.image.imageHint}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover scale-110"
                                />
                            )}
                        </div>
                         <div className="p-5 flex flex-col gap-2">
                            <h3 className="text-lg font-bold font-display">{member.name}</h3>
                            <p className="text-primary text-sm font-medium">{member.role}</p>
                            <div className="flex gap-3 mt-2 text-gray-400">
                                <Link className="cursor-pointer hover:text-primary" href="#"><Link className="h-5 w-5" /></Link>
                                <Link className="cursor-pointer hover:text-primary" href="#"><Mail className="h-5 w-5" /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>

      <section className="py-16 bg-primary text-white">
          <div className="container flex flex-col items-center text-center max-w-[800px] px-6">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-[-0.02em]">Ready to Transform Your Business?</h2>
              <p className="text-green-50 text-lg mb-8 max-w-xl">
                  Whether you need a cutting-edge mobile app or an AI-powered agent, Indicortex is your partner in innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">Work With Us</Button>
                  <Button variant="outline" size="lg" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold">Contact Sales</Button>
              </div>
          </div>
      </section>

    </div>
  );
}
