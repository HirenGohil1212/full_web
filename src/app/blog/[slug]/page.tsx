
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
    <div className="animate-fade-in font-body bg-background">
      {/* Article Header */}
      <section className="bg-card border-b py-12 md:py-20 lg:py-24">
        <div className="container">
          <Link href="/blog" className="inline-flex items-center text-primary font-bold mb-8 hover:underline group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to All Articles
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary text-white px-4 py-1 text-xs uppercase tracking-widest font-bold">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black font-display tracking-tight leading-[1.1] mb-10 text-foreground">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-y border-border/50 py-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <User className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Author</span>
                  <span className="font-bold text-foreground leading-tight">{post.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <Calendar className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Published</span>
                  <span className="font-bold text-foreground leading-tight">{post.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <Clock className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Read Time</span>
                  <span className="font-bold text-foreground leading-tight">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-border/50 mb-16">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  fill 
                  className="object-cover" 
                  data-ai-hint={post.imageHint} 
                  priority
                />
              </div>
              
              <article className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-6
                prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-6 prose-h3:text-primary
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg prose-p:mb-8
                prose-ul:my-10 prose-ul:list-none prose-ul:pl-0
                prose-li:relative prose-li:pl-10 prose-li:text-muted-foreground prose-li:mb-4 prose-li:text-lg
                prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-3 prose-li:before:size-3 prose-li:before:bg-primary prose-li:before:rounded-full
                prose-strong:text-foreground prose-strong:font-black prose-strong:bg-primary/5 prose-strong:px-1
                prose-img:rounded-3xl prose-img:border
              ">
                <div 
                  className="flex flex-col"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </article>

              <div className="mt-20 pt-10 border-t border-border/50">
                 <h3 className="text-lg font-black font-display uppercase tracking-widest mb-6 flex items-center gap-2">
                   <span className="size-2 bg-primary rounded-full" /> Topics Covered:
                 </h3>
                 <div className="flex flex-wrap gap-3">
                    {post.keywords.map(tag => (
                        <Badge key={tag} variant="secondary" className="px-4 py-1.5 bg-muted/50 border-border/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                          #{tag.replace(/\s+/g, '')}
                        </Badge>
                    ))}
                 </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                <div className="bg-primary p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 size-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                  <h3 className="text-2xl font-black mb-4 relative z-10">Stay Innovative</h3>
                  <p className="mb-8 opacity-90 text-sm leading-relaxed relative z-10">
                    Get the latest insights on AI agents, mobile ecosystems, and web architecture delivered directly to your inbox.
                  </p>
                  <div className="space-y-4 relative z-10">
                    <input 
                      className="w-full bg-white/10 border border-white/20 rounded-xl h-12 px-5 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" 
                      placeholder="Enter your email" 
                    />
                    <Button className="w-full bg-white text-primary hover:bg-green-50 font-black h-12 rounded-xl shadow-xl">
                      Subscribe Now
                    </Button>
                  </div>
                </div>

                <div className="bg-card p-10 rounded-[2.5rem] border border-border/50 shadow-sm">
                  <h3 className="text-xl font-black font-display uppercase tracking-wider mb-8 flex items-center gap-3">
                    <span className="size-2 bg-primary rounded-full" /> Recent Articles
                  </h3>
                  <div className="space-y-8">
                    {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(recent => (
                        <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group block">
                            <h4 className="font-bold leading-snug text-foreground group-hover:text-primary transition-colors mb-2 text-lg">
                              {recent.title}
                            </h4>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                              <span className="flex items-center gap-1"><Calendar className="size-3" /> {recent.date}</span>
                              <span className="flex items-center gap-1"><Clock className="size-3" /> {recent.readTime}</span>
                            </div>
                        </Link>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-10 rounded-xl font-bold border-2">
                    <Link href="/blog">View All Posts</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            Ready to apply these <span className="text-primary">insights</span> to your project?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Our team of expert architects is ready to transform your vision into a high-performance digital asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full bg-primary text-white hover:scale-105 transition-all font-bold shadow-2xl">
              <Link href="/contact">Schedule a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
