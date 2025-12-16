import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, BarChart as RechartsBarChart } from "@/components/ui/chart";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Target, Lightbulb, Users, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Project Lead",
    image: PlaceHolderImages.find(img => img.id === 'team-member-1'),
  },
  {
    name: "Samantha Lee",
    role: "Lead Engineer",
    image: PlaceHolderImages.find(img => img.id === 'team-member-2'),
  },
  {
    name: "David Chen",
    role: "Product Designer",
    image: PlaceHolderImages.find(img => img.id === 'team-member-3'),
  },
];

const chartData = [
  { year: "Year 1", revenue: 50000 },
  { year: "Year 2", revenue: 250000 },
  { year: "Year 3", revenue: 1200000 },
  { year: "Year 4", revenue: 3500000 },
  { year: "Year 5", revenue: 8000000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue (USD)",
    color: "hsl(var(--primary))",
  },
};

export default function StartupPage() {
  const problemImage = PlaceHolderImages.find(img => img.id === 'startup-problem');
  const solutionImage = PlaceHolderImages.find(img => img.id === 'startup-solution');

  return (
    <div className="animate-fade-in">
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Project Catalyst: The Future of AI-Powered Development</h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            An internal startup by InfinitTech Innovations, poised to revolutionize how developers build, test, and deploy software.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-24 space-y-20">
        <section id="problem-solution" className="grid lg:grid-cols-2 gap-12 items-center">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Target className="w-8 h-8 text-accent"/>
                <CardTitle className="font-headline text-3xl">The Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Software development cycles are slow, error-prone, and resource-intensive. Developers spend nearly 40% of their time on debugging and maintenance, hindering innovation.</p>
              {problemImage && (
                <Image src={problemImage.imageUrl} alt={problemImage.description} data-ai-hint={problemImage.imageHint} width={600} height={400} className="rounded-lg object-cover" />
              )}
            </CardContent>
          </Card>
          <Card>
             <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="w-8 h-8 text-primary"/>
                <CardTitle className="font-headline text-3xl">Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Project Catalyst is an AI-native platform that automates code generation, bug detection, and deployment pipelines. It acts as a co-pilot, empowering developers to build faster and with higher quality.</p>
              {solutionImage && (
                <Image src={solutionImage.imageUrl} alt={solutionImage.description} data-ai-hint={solutionImage.imageHint} width={600} height={400} className="rounded-lg object-cover" />
              )}
            </CardContent>
          </Card>
        </section>

        <section id="team">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3"><Users className="w-10 h-10 text-primary" /> Meet the Core Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A dedicated team from InfinitTech Innovations leading the charge.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                 {member.image && (
                    <Image
                      src={member.image.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      data-ai-hint={member.image.imageHint}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4 border-4 border-accent"
                    />
                  )}
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="financials">
           <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3"><BarChart className="w-10 h-10 text-primary" /> Financial Projections</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our roadmap to profitability and market leadership, based on a scalable SaaS model.</p>
          </div>
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="font-headline">Projected Revenue Growth (5 Years)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="w-full h-[400px]">
                <RechartsBarChart data={chartData} accessibilityLayer>
                   <CartesianGrid vertical={false} />
                  <XAxis dataKey="year" tickLine={false} tickMargin={10} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                </RechartsBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="text-center bg-secondary/50 rounded-lg p-10">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Become a Part of Our Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are actively seeking grants and strategic partnerships to accelerate our development. If you believe in the future of AI-driven software engineering, let&apos;s connect.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Express Interest <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
