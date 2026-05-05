
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) return { title: 'Blog Post Not Found' };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="animate-fade-in font-body">
      <section className="bg-card border-b py-12 md:py-20">
        <div className="container">
          <Link href="/blog" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-primary text-white">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-y py-4">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="size-4" />
                </div>
                <span className="font-bold text-foreground text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="size-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="size-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border mb-12">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={post.imageHint} />
              </div>
              
              <article className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-muted-foreground prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-bold">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              <div className="mt-16 pt-8 border-t">
                 <h3 className="text-lg font-bold mb-4">Tags:</h3>
                 <div className="flex flex-wrap gap-2">
                    {post.keywords.map(tag => (
                        <Badge key={tag} variant="secondary">#{tag.replace(/\s+/g, '')}</Badge>
                    ))}
                 </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-primary p-8 rounded-2xl text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Stay Innovative</h3>
                  <p className="mb-6 opacity-90 text-sm">Join our newsletter to receive the latest tech insights directly in your inbox.</p>
                  <div className="space-y-3">
                    <input className="w-full bg-white/10 border border-white/20 rounded-lg h-10 px-4 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email address" />
                    <Button className="w-full bg-white text-primary hover:bg-gray-100 font-bold">Subscribe</Button>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-2xl border shadow-sm">
                  <h3 className="text-xl font-bold font-display mb-6">Recent Articles</h3>
                  <div className="space-y-6">
                    {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(recent => (
                        <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group block">
                            <h4 className="font-bold leading-tight group-hover:text-primary transition-colors mb-2">{recent.title}</h4>
                            <p className="text-xs text-muted-foreground">{recent.date}</p>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
