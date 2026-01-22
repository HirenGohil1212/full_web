import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Leaf, BrainCircuit, Store, Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Startups',
  description: "Explore the innovative startups incubated at Indicortex Solutions' innovation lab. Discover our internal ventures, like GrowKrishi, that are shaping the future of technology.",
};

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
        <div className="animate-fade-in bg-background-light dark:bg-background-dark">
            <section className="w-full">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="w-full max-w-[960px] flex-1">
                        <div className="p-4">
                            <div 
                                className="flex min-h-[400px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-2xl items-center justify-center p-8 relative overflow-hidden shadow-2xl shadow-green-900/20 bg-cover bg-center bg-no-repeat" 
                                style={{backgroundImage: `linear-gradient(135deg, rgba(20, 60, 30, 0.85) 0%, rgba(10, 35, 15, 0.95) 100%), url("${startupsHeroImage?.imageUrl}")`}}
                                data-ai-hint={startupsHeroImage?.imageHint}
                            >
                                <div className="flex flex-col gap-4 text-center z-10 max-w-[700px]">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-200 text-xs font-bold uppercase tracking-wider">Innovation Lab</span>
                                    </div>
                                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl drop-shadow-sm">
                                        Innovating from Within
                                    </h1>
                                    <h2 className="text-green-50 text-base font-normal leading-relaxed @[480px]:text-lg opacity-90">
                                        At Indicortex Solutions, we don't just build for clients; we incubate our own ideas into scalable products. Explore our internal ventures that are shaping the future.
                                    </h2>
                                </div>
                                <div className="flex gap-4 z-10 pt-4">
                                    <Button size="lg" className="h-12 px-6 shadow-lg shadow-green-600/30 transform hover:-translate-y-0.5 transition-all">
                                        Explore Ventures
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white dark:bg-[#0d1f12] border-y border-[#e0eadd] dark:border-green-900">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="w-full max-w-[960px] flex-1">
                        <div className="flex flex-col items-center gap-2 py-8 text-center">
                            <span className="text-primary-dark font-bold tracking-wider uppercase text-sm">Featured Startup</span>
                            <h2 className="text-[#1a2e1e] dark:text-white tracking-tight text-3xl md:text-4xl font-black leading-tight">
                                GrowKrishi
                            </h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="w-full max-w-[960px] flex-1">
                         <div className="flex flex-col gap-6 px-4 py-10 md:flex-row md:items-center">
                             <div className="w-full md:w-1/2 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 dark:bg-green-900/40 p-2.5 rounded-xl text-primary-dark dark:text-primary-light ring-1 ring-green-200 dark:ring-green-800">
                                        <Leaf className="w-8 h-8"/>
                                    </div>
                                    <span className="text-2xl font-bold text-[#1a2e1e] dark:text-white">GrowKrishi</span>
                                </div>
                                 <h1 className="text-[#1a2e1e] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl">
                                    Revolutionizing Agriculture with Technology
                                </h1>
                                <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                                    GrowKrishi empowers farmers through AI-driven insights, real-time crop diagnosis, and direct market access. By bridging the gap between traditional farming and modern technology, we ensure sustainable growth and better livelihoods.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-800">Flutter</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-lime-50 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300 border border-lime-200 dark:border-lime-800">Python</span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">AI Agents</span>
                                </div>
                                <div className="pt-4">
                                    <Button asChild size="lg" className="h-12 px-6 shadow-lg shadow-green-500/25">
                                        <Link href="#">
                                            Visit Website
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                             </div>
                             <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
                                {growKrishiDashboardImage && (
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-green-900/15 group border border-green-100 dark:border-green-900/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                                    <Image
                                        src={growKrishiDashboardImage.imageUrl}
                                        alt={growKrishiDashboardImage.description}
                                        data-ai-hint={growKrishiDashboardImage.imageHint}
                                        fill
                                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 text-white flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                        <p className="text-sm font-medium opacity-90">Real-time Dashboard</p>
                                    </div>
                                </div>
                                )}
                            </div>
                         </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full bg-green-custom-light dark:bg-[#152e1b] py-14">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                    <div className="w-full max-w-[960px] flex-1">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary/20 dark:divide-primary/20">
                            {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-1 p-2">
                                <h3 className="text-4xl font-black text-primary-dark dark:text-primary">{stat.value}</h3>
                                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium tracking-wide">{stat.label}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             <section className="w-full py-16 bg-white dark:bg-[#0d1f12]">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                    <div className="w-full max-w-[960px] flex-1">
                        <div className="max-w-2xl mb-10">
                            <h2 className="text-[#1a2e1e] dark:text-white text-3xl font-bold leading-tight">Core Features</h2>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                How GrowKrishi is changing the agricultural landscape with cutting-edge tech.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {coreFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                <div key={index} className="flex flex-col gap-4 p-6 rounded-xl border border-green-100 dark:border-green-900 bg-[#fbfdfb] dark:bg-[#112416] hover:shadow-xl hover:shadow-green-100 dark:hover:shadow-none hover:border-primary/30 transition-all duration-300 group">
                                     <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-primary-dark group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#1a2e1e] dark:text-white text-lg font-bold">{feature.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-background-light dark:bg-[#0d1f12] py-12 border-t border-[#e0eadd] dark:border-green-900">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
                    <div className="w-full max-w-[960px] flex-1">
                        <div className="rounded-2xl bg-gradient-to-br from-[#1b4332] to-[#081c15] dark:from-[#1b4332] dark:to-[#081c15] p-8 md:p-12 text-center md:text-left relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                                <div className="flex flex-col gap-3 max-w-lg">
                                    <h2 className="text-white text-3xl font-bold leading-tight">Have an idea for the next big startup?</h2>
                                    <p className="text-green-100 text-base font-medium opacity-90">We use the same expertise and technology stack that built GrowKrishi to help external founders build their dream products.</p>
                                </div>
                                <div className="flex-shrink-0">
                                     <Button asChild size="lg" className="h-12 px-8 shadow-lg shadow-black/20">
                                        <Link href="/contact">
                                            Build With Us
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
