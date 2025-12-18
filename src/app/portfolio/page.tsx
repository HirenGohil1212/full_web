
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioProjects = [
  {
    title: "Dune Shisha SMM",
    description: "Comprehensive social media marketing strategy and analytics dashboard for a luxury lounge brand.",
    category: "Marketing",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWAPjr8rSasfEzt9DAa-SWrxTtiRhOJLJZvYyf2drVp5mVhKmQAFV7hM5MDjsQQl8m_mqcoqj4V2MnYeiHnBkLWWX4yWlk_Mb8u0ZFwEJ6qQ2arbl8EvVs3QaXb8AK8b5yB_B-QBw1hb7fmgArtGylaJLdq77jHvdWfbFuzwyHvIP9h03DhIW3KZS2kaAUFHPYtKFATJP62-ULhqa-qCVHAacsd1Bqozlowsrgvt0ON3MxpH0ox-3ILYQ7ID6oZIzhR5wk2nAoXp4",
    imageHint: "social media analytics",
  },
  {
    title: "The Match Live",
    description: "High-performance sports streaming platform delivering real-time stats and low-latency video.",
    category: "Web App",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCEtYZMmaa2L_YE9m2qb2IoAda299FZ8HoBuS4I-bA-IIYF40ZLx4SRRMzIM7hRHh2U7apR1zRhsA5emK6rkhbJuvwf7sG_8fcs_Gk0OiVW6Vy9OLfmY7VP7EC8pz_kaA6Hp69FTsVBFAtUSxROZJUlA5AS3ntwTf7PO4IGt91JidxoKR0eKH2K_cB-L-kYDUGWBUj69HZMMWVgtrRFWRTwrANRn17JL3z86q9o_Ji6W2oZQfHrDpuiNn2heVeC_6QRqFk7ZesXB0",
    imageHint: "sports streaming",
  },
  {
    title: "Pinakin Prayaan",
    description: "End-to-end travel and logistics solution for booking, tracking, and itinerary management.",
    category: "Travel",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8",
    imageHint: "travel app",
  },
  {
    title: "Balance Astro Vastu",
    description: "Web application connecting users with astrology and Vastu consultants via video and chat.",
    category: "Consultancy",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjcV_ly2-6rP_MJdPdfrDbYjrEVV5F-EKIjyWkI5djpu8LI6a7OklIobyGQKF3R_zFW8KIg5Zkb7VRqjtzIIig2xGkMs2ifJV2hyv7XGTN78OdHgz_Podmsc2aeWzT9AoKDBPXzAFIZ6IzxRqK9FBYpU9xuhNYSK_h0j24_pWrTcpydlqK53HGR-mv3-P_1VYisDsxjPq6bLU4d3DMcx-bkztQc9_UIlZfVWQoocTUWbFPcBNEM_77dK2fskLZvk3lTWQIObCFbuk",
    imageHint: "astrology chart",
  },
  {
    title: "Pure Planet Recycling",
    description: "Tech platform streamlining waste management and recycling processes for businesses.",
    category: "Sustainability",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvza2w5Bbju5MQwyFocU-7uhYsGsOMhHC1Oo6HkDHV-cBNOqUV7eS4s6k1GvqYb0q-1eT7ehPIFZ_wZRlHQ7XKYOQim-LCDUTzFMFB5BcZ8bPXowshFpUv2lz2pGvYp7_VTkBUGYbIe7QO_keK1dFSCjtiOhyT46URdirr3xMWHP-1PQGP-d3SyDCqYgnUQgHLqr2OwPaIq2T1nG__Lf_sAiw-CmZdiJjbGEfu0xbvqxHUnbUh7JsDVEmTZzr3TX0h6gTx083UyPc",
    imageHint: "recycling plant",
  },
  {
    title: "aTown",
    description: "Hyper-local community engagement app fostering neighborhood connections and events.",
    category: "Community",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDARGUzmFzvctw7wq1uSopvHN40G-MYi44RNkmlhYg3M5XIq8eK5kuhUrzR6lenI1O6BOqjF1zKvV38ulB93zhljL_dC0wYGNimxG8HKnd-m4X1qvKaildM57_bN8KQxnXR53RjFgVY5aBdD1cxWrma_D-UdcIUhnrjz8jXAsswhuRn4pOR4fcZN40w2qGV0G9T1OgTB-vW2CbFt8BRMq-w_RLnuUpG5NJ-4s-0NjpwxYJZQONwCa0llt3aRqGIW0bVt5O_lYJS4y4",
    imageHint: "small town",
  },
    {
    title: "Catering Idea",
    description: "Integrated management system for catering businesses to handle orders and inventory.",
    category: "Food Tech",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPF3Cv9AhUpeuUlnBpfYRO9kcQG078lX3aLxqN1zPAFi-q1652QKISa2AJiVXZgquzhi2tzI00q_S80s6x-ZzVM-keHFRVa4BFzjKk1eDBpIDUf7PWi_ktqi0bo-M8fOlLEk5E-RHG2INAGf2kWcTm-dU85oKt6DRmmZ96KEkxTa_o-7apjfkZj3afKVOVP3ssLzAsTfNKnFtq5Ldsw4dLG4j0A0gpfW9E73cDdoeyf11BGPMA64LMRGYZ1-iL2tyhoWXEdNSo_qA",
    imageHint: "catering food",
  },
  {
    title: "UPI 11",
    description: "Seamless UPI payment integration solution with enhanced security features.",
    category: "FinTech",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKelDUN9LMUgX9G3rl1LslakrN19aJGG8qq7ZmhWJ_W75kdhm1rsZG5FDVS8C9YsSWqJurY1hwBpOx1xtHgXDagOLYzaZ6vpw571Vu9Tr-IIXpuMJ8XShG9MxSmm4I_4waFBQ_HqMYBgwegHiHfE24j1766SkqjpkGleGoUCcBbKBo6RD6QkozJPJEkfdAZTOxfmGWFq7TGo0SQ1rpuYxFJJBgOSZumJlGv1PnnIKWuKTCCeM3zyVn6Cwggw_FtmLzgPtdFo18FwY",
    imageHint: "fantasy sports",
  },
  {
    title: "Mediclock Healthcare",
    description: "Mobile application for patient appointment scheduling and medication reminders.",
    category: "HealthTech",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsaxn3tpfO7j_zTE4Y1vgSR1KZhnwHHu8fBI-unrj8FHUbR5jY0onbhjqXepNy86FV-VfV7zwsw-1Umq_JtqQbN5Yr69zjpPFBv-WjKanPJ4ixg2UMTA3DqTmd_JgTAlaMl5tCdRIIsd4vp0Sos627ShqLjvHMiAxi66OWAfZjetTRP5TID_WG6cwu_DE0e-69oKYDkYCcSu8siFRI9LcHRUrWJwCFBM8pzfI0auV8AeFTt0XmL7A1K43yGU9ZoecUpIcHUADc8mU",
    imageHint: "hospital reception",
  },
];

const heroImage = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvA__j5la34TKGTKSm9Kyldwnu-SjIE4a2-JmHsXeel7dnmcqM_6nlmTQOkr5bX6uLiaK7JsWLuBVahzoZM5C1qtjaI0X1GPraNhnfvcP2F3HMJB4WD8E5MoXFGPzUwajVbsKC9PNMC1wzh_mKhNUAEhaspsoa6HuTxjB2g43Y_PVRHkIeYHw7E6i8PyH9OJPSBikMiP7vVfZzdqJt-55jevlC71JFBfoSEeP6z5DIg-ibj4jrKGBRtBs1wHR2ftpjOYZ3qinNNts',
  hint: 'abstract technology background',
};

export default function PortfolioPage() {
  return (
    <div className="flex-1 animate-fade-in">
       <section className="relative container py-8 lg:py-12">
        <div className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center justify-center text-center p-8"
          style={{backgroundImage: `linear-gradient(rgba(13, 22, 27, 0.7), rgba(16, 26, 34, 0.9)), url("${heroImage.src}")`}}
          data-ai-hint={heroImage.hint}
        >
          <div className="flex flex-col gap-4 max-w-3xl z-10">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Our Work
            </h1>
            <p className="text-green-100 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Explore how Indicortex Solutions transforms ideas into reality through Mobile, Web, and AI innovation.
            </p>
            <div className="mt-4">
              <Button asChild size="lg" className="h-12 px-8 shadow-lg shadow-primary/25 border border-primary-light/20">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button>All</Button>
          <Button variant="secondary">Mobile Apps</Button>
          <Button variant="secondary">Web Development</Button>
          <Button variant="secondary">AI Agents</Button>
        </div>
      </section>

      <section className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10"></div>
                <Image
                    src={project.imageUrl} 
                    alt={`Showcase for ${project.title}`} 
                    data-ai-hint={project.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 gap-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-primary dark:bg-primary/20 dark:text-primary-light">{project.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/case-studies" className="inline-flex items-center text-primary text-sm font-bold hover:underline gap-1 group-hover:text-primary-dark">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card border-t">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Ready to build your next digital product?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with our expert development team. From AI agents to mobile apps, we have you covered.
            </p>
            <Button asChild size="lg" className="h-12 px-8 shadow-lg shadow-primary/20">
                <Link href="/contact">Start Your Project</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
