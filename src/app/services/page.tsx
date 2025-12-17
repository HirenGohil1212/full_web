import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Code, Bot, Settings2, CloudCog, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Crafting intuitive and high-performing mobile applications for both iOS and Android platforms, tailored to your business goals.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, scalable, and secure web solutions, from simple websites to complex enterprise applications.",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Developing intelligent AI agents and chatbots to automate tasks, improve customer service, and enhance user engagement.",
  },
  {
    icon: Settings2,
    title: "Managed IT Services",
    description: "Focus on your core business while we handle your IT. Our managed services cover everything from helpdesk support to network management and strategic IT consulting.",
  },
  {
    icon: CloudCog,
    title: "Cloud Solutions",
    description: "Leverage the power of the cloud with our bespoke solutions. We offer migration, management, and optimization services for major cloud platforms.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning Integration",
    description: "Integrate artificial intelligence into your operations. We develop and deploy AI-driven solutions to automate processes and enhance decision-making.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We deliver transformative technology solutions that drive business value. Explore our comprehensive suite of IT services designed to meet your needs.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
