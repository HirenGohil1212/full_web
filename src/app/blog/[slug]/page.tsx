
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, Mail, Bell } from "lucide-react";
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
      {/* Article Header Section - Case Study Inspired */}
      <section className="bg-card border-b py-12 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center text-primary font-bold mb-8 hover:underline group text-sm uppercase tracking-widest">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Knowledge Center
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary text-white px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-black">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display tracking-tighter leading-[1.05] mb-10 text-foreground">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-muted-foreground border-t border-border/50 pt-8">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <User className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/60">Published By</span>
                  <span className="font-bold text-foreground leading-tight">{post.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-2xl bg-muted/50 flex items-center justify-center text-muted-foreground border">
                    <Calendar className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/60">Post Date</span>
                  <span className="font-bold text-foreground leading-tight">{post.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-2xl bg-muted/50 flex items-center justify-center text-muted-foreground border">
                    <Clock className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/60">Read Time</span>
                  <span className="font-bold text-foreground leading-tight">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Blog Content Area */}
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 mb-16 group">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  data-ai-hint={post.imageHint} 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <article className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground
                
                /* Each content-block acts like a Case Study card */
                [&_.content-block]:mb-12 [&_.content-block]:p-8 [&_.content-block]:md:p-10 [&_.content-block]:rounded-[2.5rem] [&_.content-block]:bg-card [&_.content-block]:border [&_.content-block]:border-border/60 [&_.content-block]:shadow-sm [&_.content-block]:hover:shadow-md [&_.content-block]:transition-all
                
                [&_.content-block_h2]:text-2xl [&_.content-block_h2]:md:text-3xl [&_.content-block_h2]:mt-0 [&_.content-block_h2]:mb-8 [&_.content-block_h2]:border-l-4 [&_.content-block_h2]:border-primary [&_.content-block_h2]:pl-6 [&_.content-block_h2]:bg-transparent [&_.content-block_h2]:py-2
                
                prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-primary prose-h3:uppercase prose-h3:tracking-widest
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg prose-p:mb-8
                
                /* List Styling - Grid of Cards */
                prose-ul:my-10 prose-ul:grid prose-ul:sm:grid-cols-2 prose-ul:gap-4 prose-ul:list-none prose-ul:pl-0
                prose-li:relative prose-li:p-6 prose-li:bg-background prose-li:border prose-li:border-border/60 prose-li:rounded-2xl prose-li:shadow-sm prose-li:text-muted-foreground prose-li:mb-0 prose-li:text-base prose-li:font-medium prose-li:transition-all hover:prose-li:border-primary/30 hover:prose-li:shadow-md
                
                /* Checkmark Replacement */
                prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-4 prose-li:before:top-4 prose-li:before:size-2 prose-li:before:bg-primary prose-li:before:rounded-full
                prose-strong:text-foreground prose-strong:font-black prose-strong:bg-primary/10 prose-strong:px-1.5 prose-strong:rounded-sm
                prose-img:rounded-[2rem] prose-img:border prose-img:shadow-xl
              ">
                <div 
                  className="flex flex-col"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </article>

              {/* Bottom Tags */}
              <div className="mt-20 pt-10 border-t border-border/50">
                 <h3 className="text-sm font-black font-display uppercase tracking-[0.3em] mb-8 flex items-center gap-3 text-muted-foreground">
                   <span className="size-2 bg-primary rounded-full animate-pulse" /> Core Insights:
                 </h3>
                 <div className="flex flex-wrap gap-3">
                    {post.keywords.map(tag => (
                        <Badge key={tag} variant="secondary" className="px-5 py-2 bg-muted/50 border-border/50 hover:bg-primary/10 hover:text-primary transition-all cursor-default font-bold text-sm rounded-xl">
                          #{tag.replace(/\s+/g, '')}
                        </Badge>
                    ))}
                 </div>
              </div>
            </div>

            {/* Tactical Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                {/* Newsletter Card */}
                <div className="bg-foreground p-10 rounded-[2.5rem] text-background shadow-2xl relative overflow-hidden group border border-white/10">
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 size-48 bg-primary/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
                  <div className="relative z-10">
                    <div className="size-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6">
                        <Bell className="size-7" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 leading-tight">Master the Digital Shift</h3>
                    <p className="mb-8 opacity-70 text-sm leading-relaxed font-medium">
                      Join 5,000+ innovators who receive our curated deep-dives on AI, Mobile, and Scalable Web Architecture.
                    </p>
                    <div className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                        <input 
                          className="w-full bg-white/5 border border-white/10 rounded-xl h-14 pl-12 pr-5 text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white" 
                          placeholder="Your professional email" 
                        />
                      </div>
                      <Button className="w-full bg-primary text-white hover:bg-primary/90 font-black h-14 rounded-xl shadow-xl shadow-primary/20 text-base">
                        Subscribe for Insights
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Recent Posts Feed */}
                <div className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm">
                  <h3 className="text-xs font-black font-display uppercase tracking-[0.3em] mb-10 flex items-center gap-3 text-primary">
                    <span className="size-2 bg-primary rounded-full" /> Fresh Knowledge
                  </h3>
                  <div className="space-y-10">
                    {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(recent => (
                        <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group block">
                            <h4 className="font-bold leading-snug text-foreground group-hover:text-primary transition-all mb-3 text-lg">
                              {recent.title}
                            </h4>
                            <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                              <span className="flex items-center gap-1.5"><Calendar className="size-3 text-primary" /> {recent.date}</span>
                              <span className="flex items-center gap-1.5"><Clock className="size-3 text-primary" /> {recent.readTime}</span>
                            </div>
                        </Link>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-10 rounded-xl font-black border-2 h-12 uppercase tracking-widest text-xs hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Link href="/blog">View All Knowledge</Link>
                  </Button>
                </div>

                {/* Social Share Callout */}
                <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 flex items-center justify-between">
                    <span className="font-bold text-sm text-foreground">Share this insight</span>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 text-primary">
                            <Share2 className="size-4" />
                        </Button>
                    </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Modern High-Impact CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative z-10 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
            Apply these <span className="text-accent-foreground underline decoration-accent/30 underline-offset-8">architectures</span> to your vision.
          </h2>
          <p className="text-green-50 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Our team of expert architects is ready to translate these insights into a high-performance digital asset for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="h-20 px-16 text-xl rounded-full bg-white text-primary hover:scale-105 transition-all font-black shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
              <Link href="/contact">Start a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
