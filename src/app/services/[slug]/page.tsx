import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, Smartphone, Code, Bot, Settings2, CloudCog, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

const serviceDetails: Record<string, any> = {
  "mobile-app-development": {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Build high-performance, native-quality mobile applications for iOS and Android using cutting-edge frameworks like Flutter and React Native.",
    image: "/mobile_app.jpg",
    hint: "mobile development",
    longContent: "In today's mobile-first world, having a robust presence on smartphones is non-negotiable. At Indicortex, we specialize in crafting cross-platform mobile apps that don't compromise on performance or user experience. Our development process focuses on intuitive UI, seamless animations, and scalable backend integrations.",
    features: [
      "iOS & Android Development",
      "Flutter & React Native Expertise",
      "Custom UI/UX Design",
      "Real-time Data Integration",
      "App Store & Play Store Optimization"
    ],
    process: "We start with deep discovery and wireframing, followed by iterative development and rigorous testing across hundreds of devices to ensure a flawless launch."
  },
  "web-development": {
    title: "Web Development",
    icon: Code,
    description: "Responsive, scalable, and secure web solutions built with modern technologies like React, Next.js, and Node.js for maximum performance.",
    image: "/web_dev.jpg",
    hint: "web architecture",
    longContent: "Our web development service is centered around performance and scalability. We build websites that are not only visually stunning but also technically superior, ensuring fast load times and excellent SEO. Whether it's a SaaS platform or an enterprise portal, we deliver excellence.",
    features: [
      "Next.js & React Frameworks",
      "Full-stack Architecture",
      "SEO & Performance Optimization",
      "Responsive Desktop & Mobile Design",
      "E-commerce & SaaS Solutions"
    ],
    process: "Our approach involves modular component design, server-side rendering for speed, and automated deployment pipelines for continuous delivery."
  },
  "ai-agent-development": {
    title: "AI Agent Development",
    icon: Bot,
    description: "Automate complex workflows and enhance customer interactions with intelligent AI agents powered by Large Language Models (LLMs).",
    image: "/ai_agent.jpg",
    hint: "ai automation",
    longContent: "We help businesses leverage the power of Generative AI through custom-built agents. These aren't simple chatbots; they are sophisticated agents capable of reasoning, using tools, and performing multi-step tasks to automate your business logic.",
    features: [
      "Custom LLM Integration",
      "Tool-calling & Function-calling",
      "Automated Customer Support",
      "Workflow Automation Agents",
      "Semantic Search & Vector DBs"
    ],
    process: "We identify automation bottlenecks, design agent personas and toolsets, and deploy them within your existing ecosystem for immediate ROI."
  },
  "managed-it-services": {
    title: "Managed IT Services",
    icon: Settings2,
    description: "Comprehensive IT management, from helpdesk support to strategic infrastructure planning, allowing you to focus on your core business.",
    image: "/it_service.jpg",
    hint: "it support",
    longContent: "Our managed services take the burden of IT operations off your shoulders. We provide 24/7 monitoring, robust security, and strategic consulting to ensure your technology stack is always an asset, never a liability.",
    features: [
      "24/7 Network Monitoring",
      "Cybersecurity & Threat Protection",
      "Disaster Recovery & Backups",
      "IT Strategic Consulting",
      "Helpdesk & Remote Support"
    ],
    process: "We conduct a thorough audit of your current infrastructure, implement best-in-class security protocols, and provide ongoing optimization."
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    icon: CloudCog,
    description: "Scale your business with confidence using our cloud migration, management, and architecture optimization services for AWS, Azure, and Google Cloud.",
    image: "/cloud_sol.jpg",
    hint: "cloud infrastructure",
    longContent: "Unlock the full potential of cloud computing. We design and implement cloud-native architectures that are cost-effective, secure, and highly available. From legacy migrations to serverless deployments, we guide your cloud journey.",
    features: [
      "Cloud Migration Strategy",
      "Serverless & Microservices",
      "Infrastructure as Code (Terraform)",
      "Cost Optimization & Right-sizing",
      "Multi-cloud & Hybrid Strategies"
    ],
    process: "We assess your workloads, design a resilient cloud landing zone, and execute a zero-downtime migration strategy."
  },
  "ai-and-machine-learning": {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    description: "Integrate predictive analytics and machine learning models into your products to drive data-driven decision making and automation.",
    image: "/ml.jpg",
    hint: "machine learning",
    longContent: "Go beyond standard software. We implement machine learning models that learn from your data to predict outcomes, categorize information, and personalize experiences. We turn data into your most competitive advantage.",
    features: [
      "Predictive Analytics Models",
      "Natural Language Processing (NLP)",
      "Computer Vision & OCR",
      "Recommendation Systems",
      "MLOps & Model Deployment"
    ],
    process: "We clean and prepare your data, train and validate models, and integrate them into your production environment with continuous monitoring."
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Expert IT Solutions`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="animate-fade-in font-body">
      <section className="bg-card border-b py-12 md:py-20">
        <div className="container">
          <Link href="/services" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Services
          </Link>
          <div className="max-w-4xl flex flex-col md:flex-row gap-8 items-start">
             <div className="size-16 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                <Icon className="size-8" />
             </div>
             <div>
                <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {service.description}
                </p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border">
                <Image src={service.image} alt={service.title} fill className="object-cover" data-ai-hint={service.hint} />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display">Service Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.longContent}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display text-primary">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <p className="font-bold text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

               <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display">Our Process</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.process}</p>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-primary p-8 rounded-2xl text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                  <p className="mb-6 opacity-90">Ready to transform your business with our expertise in {service.title}? Let's schedule a free consultation.</p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-gray-100 font-bold h-12 text-lg">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>

                <div className="bg-card p-8 rounded-2xl border shadow-sm">
                  <h3 className="text-xl font-bold font-display mb-4">Why Indicortex?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Future-proof technology stack</li>
                    <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Agile & transparent process</li>
                    <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Dedicated expert team</li>
                    <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Scalable architecture</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold font-display mb-6">Explore Other Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
             {Object.entries(serviceDetails).filter(([slug]) => slug !== params.slug).slice(0, 3).map(([slug, detail]) => (
                <Button key={slug} asChild variant="outline" className="rounded-full">
                  <Link href={`/services/${slug}`}>{detail.title}</Link>
                </Button>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
