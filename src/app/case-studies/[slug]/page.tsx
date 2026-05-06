import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { caseStudies } from "@/lib/case-studies-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);
  
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} | Success Stories`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find(s => s.slug === slug);

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
