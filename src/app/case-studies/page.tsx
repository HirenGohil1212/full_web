import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="container py-12 md:py-24 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Case Studies</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our in-depth case studies to see how we solve complex challenges for our clients.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Coming Soon!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are currently compiling detailed case studies of our projects. Please check back soon to see our success stories.
            </p>
            <Button asChild className="mt-6">
                <Link href="/contact">Contact Us For Details <ArrowRight className="ml-2"/></Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
