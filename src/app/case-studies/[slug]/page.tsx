import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

const caseStudyData: Record<string, any> = {
  "dune-shisha-smm": {
    title: "Dune Shisha SMM Strategy",
    category: "Marketing",
    description: "Transforming a luxury lounge's digital presence through AI-powered analytics and high-end visual storytelling.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWAPjr8rSasfEzt9DAa-SWrxTtiRhOJLJZvYyf2drVp5mVhKmQAFV7hM5MDjsQQl8m_mqcoqj4V2MnYeiHnBkLWWX4yWlk_Mb8u0ZFwEJ6qQ2arbl8EvVs3QaXb8AK8b5yB_B-QBw1hb7fmgArtGylaJLdq77jHvdWfbFuzwyHvIP9h03DhIW3KZS2kaAUFHPYtKFATJP62-ULhqa-qCVHAacsd1Bqozlowsrgvt0ON3MxpH0ox-3ILYQ7ID6oZIzhR5wk2nAoXp4",
    hint: "luxury marketing",
    challenge: "Dune Shisha had a strong physical presence but struggled to attract the right demographic online. Their engagement rates were stagnant, and their digital aesthetic didn't match the premium nature of their service.",
    solution: "We implemented a 360-degree Social Media Marketing strategy. This included high-production video content, influencer partnerships, and a custom-built analytics dashboard that tracked customer sentiment using AI. We optimized their posting schedule based on peak activity periods specific to the luxury hospitality sector.",
    results: [
      "300% increase in monthly social engagement",
      "45% growth in high-intent reservation inquiries via Instagram DM",
      "Reached 1M+ unique impressions in the first 90 days",
      "Ranked #1 locally for luxury lounge keywords"
    ],
    tech: ["AI Analytics", "Meta Ads Manager", "Adobe Creative Suite", "Custom SMM Dashboard"]
  },
  "the-match-live": {
    title: "The Match Live Streaming",
    category: "Web App",
    description: "Building a resilient, ultra-low latency streaming architecture for real-time sports broadcasting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCEtYZMmaa2L_YE9m2qb2IoAda299FZ8HoBuS4I-bA-IIYF40ZLx4SRRMzIM7hRHh2U7apR1zRhsA5emK6rkhbJuvwf7sG_8fcs_Gk0OiVW6Vy9OLfmY7VP7EC8pz_kaA6Hp69FTsVBFAtUSxROZJUlA5AS3ntwTf7PO4IGt91JidxoKR0eKH2K_cB-L-kYDUGWBUj69HZMMWVgtrRFWRTwrANRn17JL3z86q9o_Ji6W2oZQfHrDpuiNn2heVeC_6QRqFk7ZesXB0",
    hint: "streaming platform",
    challenge: "The client needed a platform that could stream high-definition sports content with less than 2 seconds of latency to prevent spoilers via social media, while scaling automatically during major events.",
    solution: "We built a custom WebRTC and HLS-based streaming engine. Using AWS Media Services and a global Content Delivery Network (CDN), we ensured that the stream remained stable regardless of the viewer's location. We also integrated a real-time chat and betting odds system that synced perfectly with the video frame.",
    results: [
      "Sub-1.5 second global latency achieved",
      "Successfully handled 55,000 concurrent viewers during peak events",
      "99.99% uptime during high-traffic windows",
      "30% reduction in CDN costs through intelligent edge caching"
    ],
    tech: ["Next.js", "AWS MediaLive", "CloudFront", "WebRTC", "Socket.io"]
  },
  "pinakin-prayaan": {
    title: "Pinakin Prayaan Logistics",
    category: "Mobile App",
    description: "Streamlining end-to-end travel logistics with a robust mobile ecosystem and automated dispatch.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwietv0flvD-GQxlJHMfPi6VBVbyHacqVYHd5dzODD7W3COXTwnKSScyeN4fPqHoPOzkVTr0KYO00xQVsXpTd44XM5snmpHANOsuUGTHLyhiI_mO4yMyBOFnOqSjWysKOlH7l39pLcuw57at6xpNyrHwYA40shfUEukzUJHkguqIcxzjXhrkPGRZ99cMsyRvY0RY6R5PGYLVssvPpcmp6wSCSgzBIw2g_zygZPP5ezj8yESamCm3V-z11nUAsa6zenYhS2rIngC8",
    hint: "mobile logistics",
    challenge: "The travel agency relied on manual coordination via phone calls, leading to double bookings, route inefficiencies, and customer frustration due to lack of real-time updates.",
    solution: "We developed a dual-app ecosystem (Driver & Customer) built with Flutter. The backend, powered by Node.js, features an intelligent dispatch algorithm that assigns the closest driver based on real-time traffic data. Customers get live GPS tracking and automated notifications.",
    results: [
      "60% reduction in manual dispatch overhead",
      "4.8/5 average customer rating on mobile stores",
      "Fuel costs reduced by 15% through optimized routing",
      "Zero double-booking incidents since launch"
    ],
    tech: ["Flutter", "Node.js", "Google Maps API", "Firebase Cloud Messaging"]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyData[slug];
  
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} | Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudyData[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="animate-fade-in font-body">
      <section className="bg-card border-b py-12 md:py-20">
        <div className="container">
          <Link href="/case-studies" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Success Stories
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-primary text-white">{study.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-tight mb-6">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {study.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border">
                <Image src={study.image} alt={study.title} fill className="object-cover" data-ai-hint={study.hint} />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display text-primary">Key Results</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {study.results.map((result: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <p className="font-bold text-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-card p-8 rounded-2xl border shadow-sm">
                  <h3 className="text-xl font-bold font-display mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((item: string) => (
                      <Badge key={item} variant="secondary" className="px-3 py-1 font-medium">{item}</Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-primary p-8 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Start your journey with us</h3>
                  <p className="mb-6 opacity-90 text-sm">Have a similar project in mind? Let's discuss how we can achieve these results for your business.</p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-gray-100 font-bold">
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 border-t">
        <div className="container">
          <div className="flex justify-between items-center">
             <h2 className="text-2xl font-bold font-display">More Success Stories</h2>
             <Button asChild variant="link" className="text-primary font-bold">
               <Link href="/case-studies">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
