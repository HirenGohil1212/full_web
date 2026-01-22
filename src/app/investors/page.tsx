import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, School, Network, Terminal, DollarSign, TrendingUp, Rocket, Code, Smartphone, Cloud, BrainCircuit } from "lucide-react";
import InvestorForm from "@/components/investor-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investors',
  description: 'Join Indicortex Solutions as an investor and fuel the future of IT. Explore partnership models including capital investment, mentorship, and developer equity opportunities.',
};

export default function InvestorsPage() {

    const heroImage = PlaceHolderImages.find(p => p.id === 'investor-hero');
    const capitalImage = PlaceHolderImages.find(p => p.id === 'investor-capital');
    const mentorshipImage = PlaceHolderImages.find(p => p.id === 'investor-mentorship');
    const partnerImage = PlaceHolderImages.find(p => p.id === 'investor-partner');
    const developerImage = PlaceHolderImages.find(p => p.id === 'investor-developer');

    return (
        <main className="flex-1 flex flex-col items-center w-full">
            {/* Hero Section */}
            <section className="w-full max-w-[1280px] px-6 lg:px-10 py-12 lg:py-20">
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
                        {/* Content */}
                        <div className="flex flex-col gap-6 lg:w-1/2 items-start text-left">
                            <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                                <span className="text-xs font-medium text-foreground">Now Open for Series A</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                                Fueling the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">IT Solutions</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                                Join us in building the next generation of Mobile, Web, and AI technologies. Partner with Indicortex Solutions to shape the digital landscape and reap the rewards of innovation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                                <Button size="lg" className="h-12 px-8 shadow-lg shadow-primary/25">
                                    Be Our Investor
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8">
                                    Download Pitch Deck
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border w-full">
                                <p className="text-sm font-medium text-muted-foreground">Trusted tech stack:</p>
                                <div className="flex gap-4 opacity-60">
                                    <Code title="Code" />
                                    <Smartphone title="Smartphone" />
                                    <Cloud title="Cloud" />
                                    <BrainCircuit title="AI" />
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[600px] overflow-hidden rounded-2xl bg-muted shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10"></div>
                                {heroImage && <img alt={heroImage.description} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" data-ai-hint={heroImage.imageHint} src={heroImage.imageUrl} />}
                                {/* Floating Card Decoration */}
                                <div className="absolute bottom-6 left-6 z-20 bg-card/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-[240px] border border-primary/20">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                            <TrendingUp className="text-[20px]" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Annual Growth</p>
                                            <p className="text-sm font-bold">+127% YoY</p>
                                        </div>
                                    </div>
                                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[85%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section (Ways to Invest) */}
            <section className="w-full bg-card py-20">
                <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Partnership Models</h2>
                            <h3 className="text-3xl md:text-4xl font-bold leading-tight">Choose Your Investment Path</h3>
                            <p className="mt-4 text-muted-foreground text-lg">
                                We offer flexible investment models tailored to your expertise and resources. Whether you bring capital, guidance, network, or code, there is a place for you here.
                            </p>
                        </div>
                        <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors" href="#contact">
                            Explore Opportunities <ArrowRight className="text-sm" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Capital */}
                        <div className="group bg-background p-6 rounded-xl border border-transparent hover:border-primary/50 transition-all hover:shadow-lg flex flex-col h-full">
                            <div className="h-48 w-full rounded-lg overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                {capitalImage && <img alt={capitalImage.description} className="w-full h-full object-cover" data-ai-hint={capitalImage.imageHint} src={capitalImage.imageUrl} />}
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded text-primary">
                                    <DollarSign />
                                </div>
                                <h4 className="text-xl font-bold">Capital</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                Fuel our growth with financial backing. Ideal for angel investors and VCs looking for high-growth tech opportunities.
                            </p>
                            <Button variant="outline" className="w-full">
                                Learn More
                            </Button>
                        </div>
                        {/* Card 2: Mentorship */}
                        <div className="group bg-background p-6 rounded-xl border border-transparent hover:border-primary/50 transition-all hover:shadow-lg flex flex-col h-full">
                            <div className="h-48 w-full rounded-lg overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                {mentorshipImage && <img alt={mentorshipImage.description} className="w-full h-full object-cover" data-ai-hint={mentorshipImage.imageHint} src={mentorshipImage.imageUrl} />}
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded text-primary">
                                    <School />
                                </div>
                                <h4 className="text-xl font-bold">Mentorship</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                Guide our strategic vision. Your industry expertise can help us navigate challenges and scale efficiently.
                            </p>
                             <Button variant="outline" className="w-full">
                                Learn More
                            </Button>
                        </div>
                        {/* Card 3: Channel Partner */}
                        <div className="group bg-background p-6 rounded-xl border border-transparent hover:border-primary/50 transition-all hover:shadow-lg flex flex-col h-full">
                            <div className="h-48 w-full rounded-lg overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                {partnerImage && <img alt={partnerImage.description} className="w-full h-full object-cover" data-ai-hint={partnerImage.imageHint} src={partnerImage.imageUrl} />}
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded text-primary">
                                    <Network />
                                </div>
                                <h4 className="text-xl font-bold">Channel Partner</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                Expand our market reach. Join our referral network and grow your revenue by bringing Indicortex to new clients.
                            </p>
                             <Button variant="outline" className="w-full">
                                Learn More
                            </Button>
                        </div>
                        {/* Card 4: Developer Equity */}
                        <div className="group bg-background p-6 rounded-xl border border-transparent hover:border-primary/50 transition-all hover:shadow-lg flex flex-col h-full">
                            <div className="h-48 w-full rounded-lg overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                {developerImage && <img alt={developerImage.description} className="w-full h-full object-cover" data-ai-hint={developerImage.imageHint} src={developerImage.imageUrl} />}
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded text-primary">
                                    <Terminal />
                                </div>
                                <h4 className="text-xl font-bold">Developer</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                Sweat equity investment. Invest your coding skills and technical expertise into our core products for direct equity.
                            </p>
                             <Button variant="outline" className="w-full">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Credibility Section */}
            <section className="w-full py-16 bg-background border-y">
                <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
                        <div className="flex flex-col items-center flex-1 min-w-[150px]">
                            <p className="text-4xl md:text-5xl font-black text-foreground mb-1">20+</p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Enterprise Clients</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="flex flex-col items-center flex-1 min-w-[150px]">
                            <p className="text-4xl md:text-5xl font-black text-foreground mb-1">50+</p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Projects Delivered</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="flex flex-col items-center flex-1 min-w-[150px]">
                            <p className="text-4xl md:text-5xl font-black text-foreground mb-1">4.9</p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Client Rating</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-border"></div>
                        <div className="flex flex-col items-center flex-1 min-w-[150px]">
                            <p className="text-4xl md:text-5xl font-black text-foreground mb-1">AI</p>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Core Expertise</p>
                        </div>
                    </div>
                </div>
            </section>

            <InvestorForm />
        </main>
    )
}
