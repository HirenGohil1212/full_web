'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rocket } from "lucide-react";

export default function InvestorForm() {
    return (
        <section className="w-full max-w-[960px] px-6 py-20 lg:py-28 text-center" id="contact">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/20 text-primary mb-2">
                        <Rocket className="text-3xl" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                        Ready to start the conversation?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Let's build something extraordinary together. Fill out the form below or contact us directly to discuss investment opportunities.
                    </p>
                    <div className="w-full max-w-md mt-6 flex flex-col gap-4">
                        <Input className="h-12 px-4" placeholder="Enter your email address" type="email" />
                        <Select>
                            <SelectTrigger className="h-12 px-4 text-muted-foreground">
                                <SelectValue placeholder="I am interested in investing as..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="capital">Capital Investor</SelectItem>
                                <SelectItem value="mentor">Mentor</SelectItem>
                                <SelectItem value="partner">Channel Partner</SelectItem>
                                <SelectItem value="developer">Developer (Equity)</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button size="lg" className="w-full h-12 mt-2">
                            Get In Touch
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                        Prefer to email us directly? <a className="text-primary font-bold hover:underline" href="mailto:invest@indicortex.com">invest@indicortex.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
