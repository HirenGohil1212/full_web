
import { blogPosts } from "@/lib/blog-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Insights on AI, Web & Mobile Development',
  description: 'Stay updated with the latest trends in technology. Our blog covers AI automation, mobile app frameworks, and scalable web architectures for modern businesses.',
};

export default function BlogPage() {
  return (
    <div className="animate-fade-in font-body">
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-6">Insights & Innovations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore the latest thinking from our experts on artificial intelligence, mobile ecosystems, and the future of web technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group overflow-hidden border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={post.imageHint}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-white font-bold">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="size-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="size-3" /> {post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold font-display group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button asChild className="w-full">
                    <Link href={`/blog/${post.slug}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="text-3xl md:text-4xl font-black mb-6">Have a project in mind?</h2>
          <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to apply these insights to your specific business challenges.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
