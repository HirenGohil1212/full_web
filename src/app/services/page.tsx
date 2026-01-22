import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Code, Bot, Settings2, CloudCog, BrainCircuit, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Discover the core services offered by Indicortex Solutions, including mobile app development, web development, AI agent creation, managed IT services, and cloud solutions.',
};

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Crafting intuitive and high-performing mobile applications for both iOS and Android platforms, tailored to your business goals.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrZjyJH4wQhrLZShfCm-IOLhw7R6d724YDXv91X7UoijxrOwpu7KkbcnRBSnbFwjuXnQ7jKjepvhRivQcdNMoSSPjC3SnVmJyCm5YgKiesyinq0yx5C0Y9Q-s-L-_hjTRlU25n2o-J0iwfiAaHxFRdvk_fUtSFuSIE0oQtFV_GxKj2c_GN_5HGcL7iMmqKBM5Msb-1nreysOotY0oCfq_NtedG6r7TbUl9-Mvmq8kM680bbd6dbaXOzIxIp3QTvHL6twoYt0zS0rE",
      hint: "mobile application interface"
    }
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, scalable, and secure web solutions, from simple websites to complex enterprise applications.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR0LsYLVeLdE-f7zJ8atxOpEDcaXkZfekrpOrFU88ovgCR0ULZL_Aowv4G7o0CtCcHqZIJ4M_tvSs-F2wQeQAPFN2WJ3UPEYIk3wcL0BkILcywsdMNWexhbdomsORlwMzIqMZiwmwabIPi0mOCAC1CbSvI7M0_b7pVlX05TsN_SvuzFBolb5TF3pGoxOeTZLX8ym2gINsdhkcwaHkhPQs74mDOuoZBebUKc0354Dyp-d1_1v6fBCov_juoltch2zcbcydXfqEB9AE",
      hint: "web design interface"
    }
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Developing intelligent AI agents and chatbots to automate tasks, improve customer service, and enhance user engagement.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYRt2Rgntk6owDyXlrz0OTxRb8XqVkjkJySv8emDrpO2wN_1kNfCtgQ00yzZXyM17AQ5E4zDvgtrFN1H94sBeA4i8P52dDfoldvBZ2wXpEO5IDXgS0YYPrdqBXdooHnsbOrUEKmMP57eMeod06NtlW8DFZLZFQ9vZakWMdt3TfKYa_haidENjNSYJ3XJzzCMHPAZ1TMQcGP8Mg5MNmTN1MhJQxJ-RYxq3QFXryglx_xiMUpdwaeBSFyGE4-T7WMnSZcPrrE2ROF5Q",
      hint: "artificial intelligence network"
    }
  },
  {
    icon: Settings2,
    title: "Managed IT Services",
    description: "Focus on your core business while we handle your IT. Our managed services cover everything from helpdesk support to network management and strategic IT consulting.",
    image: {
        src: "https://picsum.photos/seed/managedit/600/400",
        hint: "server room"
    }
  },
  {
    icon: CloudCog,
    title: "Cloud Solutions",
    description: "Leverage the power of the cloud with our bespoke solutions. We offer migration, management, and optimization services for major cloud platforms.",
    image: {
        src: "https://picsum.photos/seed/cloud/600/400",
        hint: "cloud data center"
    }
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Integrate artificial intelligence into your operations. We develop and deploy AI-driven solutions to automate processes and enhance decision-making.",
    image: {
        src: "https://picsum.photos/seed/machinelearning/600/400",
        hint: "machine learning model"
    }
  },
];

const heroImage = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIkkgJH2c_WGE1Vl6_D49jb1lqSMJZqN0j9G8EBqov6QvwfHgsf7J-A4PpiE72U8rviymMs8eoa7xHliSUmKsSZSqEmzCajp_QvLjJMIyj6lfy5QVYFqOvxs3iyIQkftxVONmgUAtHL0iOyotKL8R-BkuLq5huGDxUmz4MwS3hIds1HQT2HJegvoN_jvTpVpaUtHCftIDEF44sXqlB7px8V3W-lRSoYaCNC_4gMJS3Ex2OBVxEfC9kyqghgmwBVqx4rqDqu4gdVrk',
  hint: 'abstract technology background'
}

export default function ServicesPage() {
  return (
    <div className="flex-1 animate-fade-in">
        <section className="relative flex min-h-[480px] flex-col gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center items-center justify-center shadow-lg md:gap-8 m-4"
          style={{backgroundImage: `linear-gradient(rgba(10, 30, 15, 0.75) 0%, rgba(5, 20, 10, 0.85) 100%), url("${heroImage.src}")`}}
          data-ai-hint={heroImage.hint}
        >
            <div className="flex flex-col gap-4 max-w-3xl z-10">
                <span className="text-accent-foreground font-bold tracking-wider uppercase text-xs md:text-sm text-lime-300">Innovation First</span>
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                    Empowering Businesses with Cutting-Edge Technology
                </h1>
                <h2 className="text-slate-100 text-base font-medium leading-relaxed md:text-lg">
                    We specialize in building robust digital solutions that drive growth and innovation. From mobile apps to intelligent AI agents.
                </h2>
            </div>
            <div className="flex gap-4 z-10 flex-col sm:flex-row w-full sm:w-auto">
                <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                    Explore Services
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                    Learn More
                </Button>
            </div>
        </section>

        <section className="py-12 md:py-24 text-center">
             <div className="container max-w-3xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-primary">What We Do</h2>
                <h1 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Tailored IT solutions designed to meet your specific business needs and scale with your growth.
                </p>
             </div>
        </section>

      <section className="pb-12 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group flex flex-col gap-0 rounded-xl bg-card text-card-foreground shadow-sm border overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                    <div className="h-48 w-full bg-cover bg-center relative">
                      <Image 
                          src={service.image.src}
                          alt={service.title}
                          fill
                          className="object-cover"
                          data-ai-hint={service.image.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg group-hover:bg-primary/80 transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 flex-1">
                      <div>
                        <h4 className="text-card-foreground text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 flex items-center text-primary font-bold text-sm cursor-pointer group/link">
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-24">
        <div className="container">
          <div className="w-full rounded-2xl bg-card-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-800/20 blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-16 md:px-20">
                <div className="flex flex-col gap-4 text-center md:text-left max-w-2xl">
                    <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                        Ready to transform your ideas into reality?
                    </h2>
                    <p className="text-slate-300 text-lg font-normal leading-relaxed">
                        Let's build something great together. Contact our team for a free consultation on your next project.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Button asChild size="lg" className="h-14 min-w-[180px] hover:scale-105 transition-transform text-lg">
                        <Link href="/contact">Start a Project</Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
