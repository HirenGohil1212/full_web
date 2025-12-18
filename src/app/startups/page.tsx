'use client';
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Leaf, BarChart, Store, Droplets, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const coreFeatures = [
    {
        icon: BrainCircuit,
        title: "AI Crop Doctor",
        description: "Instant disease diagnosis using computer vision. Farmers simply snap a photo to get treatment advice."
    },
    {
        icon: Store,
        title: "Market Linkage",
        description: "Directly connecting farmers with buyers to eliminate middlemen and ensure fair pricing for produce."
    },
    {
        icon: Droplets,
        title: "Smart Irrigation",
        description: "IoT-based soil monitoring to optimize water usage, reducing waste and increasing yield."
    }
];

const stats = [
    { value: "5k+", label: "Farmers Helped" },
    { value: "120+", label: "Villages Covered" },
    { value: "15k", label: "Acres Managed" },
    { value: "24/7", label: "AI Support" },
];

export default function StartupsPage() {
    const startupsHeroImage = PlaceHolderImages.find(img => img.id === 'startups-hero');
    const growKrishiDashboardImage = PlaceHolderImages.find(img => img.id === 'growkrishi-dashboard');

    return (
        <div className="animate-fade-in bg-background">
            <section className="relative flex min-h-[400px] flex-col gap-6 overflow-hidden items-center justify-center p-8 text-center">
                {startupsHeroImage && (
                    <Image
                        src={startupsHeroImage.imageUrl}
                        alt={startupsHeroImage.description}
                        data-ai-hint={startupsHeroImage.imageHint}
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-green-900/70" />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center max-w-3xl">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-green-100 text-xs font-bold uppercase tracking-wider">
                        Innovation Lab
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
                        Innovating from Within
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-200">
                        At Indicortex Solutions, we don't just build for clients; we incubate our own ideas into scalable products. Explore our internal ventures that are shaping the future.
                    </p>
                    <div className="pt-4">
                        <Button size="lg" className="h-12 px-6 shadow-lg shadow-green-500/30">
                            Explore Ventures
                        </Button>
                    </div>
                </div>
            </section>

            <section className="w-full bg-card border-y">
                <div className="container py-8 text-center">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Featured Startup</span>
                    <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mt-2">
                        GrowKrishi
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mt-3 mx-auto"></div>
                </div>
            </section>
            
            <section className="container py-10 md:py-16">
                 <div className="grid lg:grid-cols-2 gap-10 items-center">
                     <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg text-green-700 dark:text-green-300">
                                <Leaf className="w-8 h-8"/>
                            </div>
                            <span className="text-xl font-bold">GrowKrishi</span>
                        </div>
                         <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                            Revolutionizing Agriculture with Technology
                        </h1>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            GrowKrishi empowers farmers through AI-driven insights, real-time crop diagnosis, and direct market access. By bridging the gap between traditional farming and modern technology, we ensure sustainable growth and better livelihoods.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border">Flutter</span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border">Python</span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border">AI Agents</span>
                        </div>
                        <div className="pt-4">
                            <Button asChild size="lg" className="h-12 px-6">
                                <Link href="#">
                                    Visit Website
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                     </div>
                     <div className="w-full">
                        {growKrishiDashboardImage && (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-green-900/20 group">
                            <Image
                                src={growKrishiDashboardImage.imageUrl}
                                alt={growKrishiDashboardImage.description}
                                data-ai-hint={growKrishiDashboardImage.imageHint}
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20 text-white">
                                <p className="text-sm font-medium opacity-90">Real-time Dashboard</p>
                            </div>
                        </div>
                        )}
                    </div>
                 </div>
            </section>
            
            <section className="w-full bg-secondary/50 py-12">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x">
                        {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-1 p-2">
                            <h3 className="text-4xl font-black text-primary">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="container py-16 md:py-24">
                <div className="max-w-2xl mb-10">
                    <h2 className="text-3xl font-bold leading-tight">Core Features</h2>
                    <p className="mt-2 text-muted-foreground">
                        How GrowKrishi is changing the agricultural landscape with cutting-edge tech.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {coreFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                        <div key={index} className="flex flex-col gap-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow duration-300">
                             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </section>

            <section className="py-12">
                <div className="container">
                    <div className="rounded-xl bg-card-foreground p-8 md:p-12 text-center md:text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="flex flex-col gap-3 max-w-lg">
                                <h2 className="text-white text-3xl font-bold leading-tight">Have an idea for the next big startup?</h2>
                                <p className="text-slate-200 text-base">We use the same expertise and technology stack that built GrowKrishi to help external founders build their dream products.</p>
                            </div>
                            <div className="flex-shrink-0">
                                 <Button asChild size="lg" className="h-12 px-8">
                                    <Link href="/contact">
                                        Build With Us
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
