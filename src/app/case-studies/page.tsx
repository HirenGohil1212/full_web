import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Smartphone } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Case Studies | Success Stories in AI, Web & Mobile',
  description: 'Explore how Indicortex Solutions delivers real business value through innovative technology. Read our detailed case studies on SMM, streaming, and logistics.',
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
    category: "Mobile App",
    icon: Smartphone,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8",
    hint: "logistics app"
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
              <Card key={study.slug} className="group overflow-hidden border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
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
                <CardContent className="px-6 pb-6">
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
