import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Smartphone, Users, Zap, Recycle, Utensils, Activity } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Case Studies | Success Stories in AI, Web & Mobile',
  description: 'Explore how Indicortex Solutions delivers real business value through innovative technology. Read our detailed case studies across various industries.',
};

const caseStudies = [
  {
    slug: "dune-shisha-smm",
    title: "Dune Shisha SMM Strategy",
    description: "How we boosted social engagement by 300% for a luxury brand using data-driven content and AI analytics.",
    category: "Marketing",
    icon: BarChart3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWAPjr8rSasfEzt9DAa-SWrxTtiRhOJLJZvYyf2drVp5mVhKmQAFV7hM5MDjsQQl8m_mqcoqj4V2MnYeiHnBkLWWX4yWlk_Mb8u0ZFwEJ6qQ2arbl8EvVs3QaXb8AK8b5yB_B-QBw1hb7fmgArtGylaJLdq77jHvdWfbFuzwyHvIP9h03DhIW3KZS2kaAUFHPYtKFATJP62-ULhqa-qCVHAacsd1Bqozlowsrgvt0ON3MxpH0ox-3ILYQ7ID6oZIzhR5wk2nAoXp4",
    hint: "social media analytics"
  },
  {
    slug: "the-match-live",
    title: "The Match Live Streaming",
    description: "Architecting a low-latency sports streaming platform capable of handling 50k+ concurrent viewers.",
    category: "Web App",
    icon: Globe,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCEtYZMmaa2L_YE9m2qb2IoAda299FZ8HoBuS4I-bA-IIYF40ZLx4SRRMzIM7hRHh2U7apR1zRhsA5emK6rkhbJuvwf7sG_8fcs_Gk0OiVW6Vy9OLfmY7VP7EC8pz_kaA6Hp69FTsVBFAtUSxROZJUlA5AS3ntwTf7PO4IGt91JidxoKR0eKH2K_cB-L-kYDUGWBUj69HZMMWVgtrRFWRTwrANRn17JL3z86q9o_Ji6W2oZQfHrDpuiNn2heVeC_6QRqFk7ZesXB0",
    hint: "sports streaming"
  },
  {
    slug: "pinakin-prayaan",
    title: "Pinakin Prayaan Logistics",
    description: "Developing a cross-platform travel management system with real-time GPS tracking and automated dispatch.",
    category: "Travel",
    icon: Smartphone,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8",
    hint: "logistics app"
  },
  {
    slug: "balance-astro-vastu",
    title: "Balance Astro Vastu",
    description: "Empowering spiritual consultations with a robust real-time booking and video suite.",
    category: "Consultancy",
    icon: Zap,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjcV_ly2-6rP_MJdPdfrDbYjrEVV5F-EKIjyWkI5djpu8LI6a7OklIobyGQKF3R_zFW8KIg5Zkb7VRqjtzIIig2xGkMs2ifJV2hyv7XGTN78OdHgz_Podmsc2aeWzT9AoKDBPXzAFIZ6IzxRqK9FBYpU9xuhNYSK_h0j24_pWrTcpydlqK53HGR-mv3-P_1VYisDsxjPq6bLU4d3DMcx-bkztQc9_UIlZfVWQoocTUWbFPcBNEM_77dK2fskLZvk3lTWQIObCFbuk",
    hint: "astrology platform"
  },
  {
    slug: "pure-planet-recycling",
    title: "Pure Planet Recycling",
    description: "Streamlining sustainability tracking and industrial waste management for corporate accountability.",
    category: "Sustainability",
    icon: Recycle,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvza2w5Bbju5MQwyFocU-7uhYsGsOMhHC1Oo6HkDHV-cBNOqUV7eS4s6k1GvqYb0q-1eT7ehPIFZ_wZRlHQ7XKYOQim-LCDUTzFMFB5BcZ8bPXowshFpUv2lz2pGvYp7_VTkBUGYbIe7QO_keK1dFSCjtiOhyT46URdirr3xMWHP-1PQGP-d3SyDCqYgnUQgHLqr2OwPaIq2T1nG__Lf_sAiw-CmZdiJjbGEfu0xbvqxHUnbUh7JsDVEmTZzr3TX0h6gTx083UyPc",
    hint: "recycling tech"
  },
  {
    slug: "atown",
    title: "aTown Hyper-Local",
    description: "Connecting local communities through a centralized hyper-local social and commerce ecosystem.",
    category: "Community",
    icon: Users,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDARGUzmFzvctw7wq1uSopvHN40G-MYi44RNkmlhYg3M5XIq8eK5kuhUrzR6lenI1O6BOqjF1zKvV38ulB93zhljL_dC0wYGNimxG8HKnd-m4X1qvKaildM57_bN8KQxnXR53RjFgVY5aBdD1cxWrma_D-UdcIUhnrjz8jXAsswhuRn4pOR4fcZN40w2qGV0G9T1OgTB-vW2CbFt8BRMq-w_RLnuUpG5NJ-4s-0NjpwxYJZQONwCa0llt3aRqGIW0bVt5O_lYJS4y4",
    hint: "community app"
  },
  {
    slug: "catering-idea",
    title: "Catering Idea",
    description: "Optimizing catering logistics and order management for large-scale operations.",
    category: "Food Tech",
    icon: Utensils,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPF3Cv9AhUpeuUlnBpfYRO9kcQG078lX3aLxqN1zPAFi-q1652QKISa2AJiVXZgquzhi2tzI00q_S80s6x-ZzVM-keHFRVa4BFzjKk1eDBpIDUf7PWi_ktqi0bo-M8fOlLEk5E-RHG2INAGf2kWcTm-dU85oKt6DRmmZ96KEkxTa_o-7apjfkZj3afKVOVP3ssLzAsTfNKnFtq5Ldsw4dLG4j0A0gpfW9E73cDdoeyf11BGPMA64LMRGYZ1-iL2tyhoWXEdNSo_qA",
    hint: "catering tech"
  },
  {
    slug: "mediclock-healthcare",
    title: "Mediclock Healthcare",
    description: "Reducing clinic wait times and improving patient adherence with AI-driven flow management.",
    category: "HealthTech",
    icon: Activity,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsaxn3tpfO7j_zTE4Y1vgSR1KZhnwHHu8fBI-unrj8FHUbR5jY0onbhjqXepNy86FV-VfV7zwsw-1Umq_JtqQbN5Yr69zjpPFBv-WjKanPJ4ixg2UMTA3DqTmd_JgTAlaMl5tCdRIIsd4vp0Sos627ShqLjvHMiAxi66OWAfZjetTRP5TID_WG6cwu_DE0e-69oKYDkYCcSu8siFRI9LcHRUrWJwCFBM8pzfI0auV8AeFTt0XmL7A1K43yGU9ZoecUpIcHUADc8mU",
    hint: "healthcare app"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="animate-fade-in font-body">
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-6">Success Stories</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't just build features; we solve business problems. Explore our in-depth case studies to see how Indicortex Solutions transforms industries through technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.slug} className="group overflow-hidden border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={study.hint}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-white font-bold">{study.category}</Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <study.icon className="size-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {study.description}
                  </p>
                  <Button asChild className="w-full">
                    <Link href={`/case-studies/${study.slug}`}>
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Want to be our next success story?</h2>
          <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise in AI, Mobile, and Web can help your business reach new heights.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}