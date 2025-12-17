import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: PlaceHolderImages.find(img => img.id === 'team-member-1'),
    bio: "Visionary leader with 20+ years in the tech industry, driving innovation and growth.",
  },
  {
    name: "John Smith",
    role: "CTO",
    image: PlaceHolderImages.find(img => img.id === 'team-member-2'),
    bio: "Technology enthusiast and expert architect, building scalable and robust solutions.",
  },
  {
    name: "Emily White",
    role: "Head of Operations",
    image: PlaceHolderImages.find(img => img.id === 'team-member-3'),
    bio: "Ensuring operational excellence and seamless delivery of services to our clients.",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image: PlaceHolderImages.find(img => img.id === 'team-member-4'),
    bio: "A passionate coder and problem-solver, leading our talented development team.",
  },
];

const aboutUsHeroImage = PlaceHolderImages.find(img => img.id === 'about-us-hero');

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <section className="relative py-20 md:py-32 bg-secondary/50">
         {aboutUsHeroImage && (
          <Image
            src={aboutUsHeroImage.imageUrl}
            alt={aboutUsHeroImage.description}
            data-ai-hint={aboutUsHeroImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-background/70" />
        <div className="container relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">About Indicortex Solutions LLP</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a collective of thinkers, creators, and innovators dedicated to pushing the boundaries of technology.
            </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded with a passion for technology, Indicortex Solutions LLP started with a simple yet powerful idea: to make advanced technology accessible and impactful for businesses of all sizes. From our humble beginnings, we have grown into a trusted partner for companies seeking digital transformation. Our journey has been one of continuous learning, adaptation, and an unwavering commitment to our clients' success.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To empower businesses through innovative IT solutions, driving efficiency, growth, and a competitive edge in the digital world.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be a leading force in technological innovation, creating a future where technology and humanity converge for a better world.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">The driving force behind our innovation and success.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  {member.image && (
                    <Image
                      src={member.image.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      data-ai-hint={member.image.imageHint}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4 border-4 border-primary/20"
                    />
                  )}
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
