import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const portfolioProjects = [
  {
    title: "Dune Shisha SMM",
    description: "A comprehensive social media management campaign to boost brand presence and engagement.",
    category: "Social Media Marketing",
    imageUrl: PlaceHolderImages.find(p => p.id === 'startup-problem')?.imageUrl ?? "https://picsum.photos/seed/dune/600/400",
    imageHint: "social media analytics",
  },
  {
    title: "The Match Live",
    description: "Live sports streaming platform with real-time stats and social features.",
    category: "Web App",
    imageUrl: "https://picsum.photos/seed/match/600/400",
    imageHint: "sports streaming",
  },
  {
    title: "Pinakin Prayaan",
    description: "A travel and tour booking application with customized itinerary planning.",
    category: "Mobile App",
    imageUrl: "https://picsum.photos/seed/travel/600/400",
    imageHint: "travel app",
  },
  {
    title: "Balace Astro Vastu",
    description: "Astrology and Vastu consultation platform connecting users with experts.",
    category: "Web Platform",
    imageUrl: "https://picsum.photos/seed/astro/600/400",
    imageHint: "astrology chart",
  },
  {
    title: "Pure Planet Recycling",
    description: "A system to manage and track recycling operations for a sustainability-focused company.",
    category: "Enterprise System",
    imageUrl: "https://picsum.photos/seed/recycling/600/400",
    imageHint: "recycling plant",
  },
  {
    title: "aTown",
    description: "A local community and events application for residents of small towns.",
    category: "Mobile App",
    imageUrl: "https://picsum.photos/seed/town/600/400",
    imageHint: "small town",
  },
    {
    title: "Catering Idea",
    description: "An online platform for discovering and booking catering services for events.",
    category: "Web Platform",
    imageUrl: "https://picsum.photos/seed/catering/600/400",
    imageHint: "catering food",
  },
  {
    title: "UPI 11",
    description: "A fantasy sports app integrated with UPI for seamless transactions.",
    category: "Mobile App",
    imageUrl: "https://picsum.photos/seed/upi/600/400",
    imageHint: "fantasy sports",
  },
  {
    title: "Mediclock Healthcare Pvt Ltd.",
    description: "A healthcare management system for clinics and hospitals.",
    category: "Enterprise System",
    imageUrl: "https://picsum.photos/seed/mediclock/600/400",
    imageHint: "hospital reception",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container py-12 md:py-24 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Portfolio</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We are proud of the work we do. Here are some of the projects we've successfully delivered for our clients.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 w-full">
                <Image 
                    src={project.imageUrl} 
                    alt={`Showcase for ${project.title}`} 
                    data-ai-hint={project.imageHint}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <CardHeader className="p-0 mb-4">
                <div className="flex justify-between items-start">
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
