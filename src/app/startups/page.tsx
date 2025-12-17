import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StartupsPage() {
  const growKrishiImage = PlaceHolderImages.find(img => img.id === 'startup-solution');

  return (
    <div className="animate-fade-in">
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Ventures</h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            At Indicortex Solutions, we don't just build for others; we build for the future. Here are our in-house startup projects.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-24">
        <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">
          <CardHeader className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
                <Leaf className="w-10 h-10 text-primary"/>
                <CardTitle className="font-headline text-3xl md:text-4xl">GrowKrishi</CardTitle>
            </div>
            <p className="text-lg text-muted-foreground mt-2">
              GrowKrishi is our ongoing initiative to revolutionize the agricultural sector through technology. We're developing a comprehensive platform to connect farmers, suppliers, and markets, optimizing the supply chain and promoting sustainable farming practices.
            </p>
            <p className="mt-4 font-semibold text-accent">Status: On Going</p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/contact">
                        Learn More & Partner With Us <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
          </CardHeader>
          <div className="h-64 lg:h-full">
            {growKrishiImage && (
              <Image 
                src={growKrishiImage.imageUrl} 
                alt="GrowKrishi concept image" 
                data-ai-hint="agriculture technology"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
