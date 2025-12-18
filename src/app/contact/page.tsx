'use client';
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="flex-grow flex flex-col items-center animate-fade-in">
            <section className="w-full max-w-7xl px-4 md:px-10 py-12 md:py-16">
                <div className="flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground">
                        Let's Build the <span className="text-primary">Future</span> Together
                    </h1>
                    <p className="text-muted-foreground text-lg font-normal leading-relaxed max-w-2xl">
                        Ready to start your next project? Whether it's AI, Mobile, or Web, we are here to help turn your vision into reality with sustainable, scalable solutions.
                    </p>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 md:px-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="text-2xl font-bold leading-tight mb-4 text-foreground">Contact Information</h2>
                            <p className="text-muted-foreground">Reach out to us directly or fill out the form to get a quote. We typically respond within 24 hours.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Email Us</h3>
                                    <p className="text-muted-foreground text-sm mt-1">contact@indicortex.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Call Us</h3>
                                    <p className="text-muted-foreground text-sm mt-1">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-foreground">Visit Us</h3>
                                    <p className="text-muted-foreground text-sm mt-1">123 Tech Park, Innovation Way,<br/>Silicon Valley, CA</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 rounded-xl overflow-hidden border h-48 w-full relative group">
                            <Image alt="Map showing location in Silicon Valley" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90" data-ai-hint="map Silicon Valley" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj-uKdkiup52s-1mhNNT4jlfFI_nRl_R_SDyNreiPolKAzsg1zc-fwijeQQrpDJvBdSiftlB9CnYZLjq0zANj0OKv3iLmVa0dkjuDs7P96cGoHxzDeFDPuvo8Xppqrfx2K4mEHE1omd0Swl9XfemzruRujAmfBVGWlOO4Hf-9hM7KkCCvpov9LCfTNSPogx-PIWmk0yv7m7hQglXE3tuQNfjY_1LLnAKyYyBqKfq546tDANNamXvPREXiyDcALE7cMmaCx4f5GqAI" fill />
                            <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Button asChild className="bg-card/95 text-primary hover:bg-primary hover:text-primary-foreground transition-colors border border-primary/10">
                                    <a href="#" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="bg-card rounded-2xl border shadow-sm p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
