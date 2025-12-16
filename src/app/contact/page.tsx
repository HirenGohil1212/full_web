import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container py-12 md:py-24 animate-fade-in">
             <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    We&apos;re excited to hear from you. Whether you&apos;re an investor, a potential partner, or just have a question, we&apos;re here to help.
                </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold font-headline text-primary">Get in Touch Directly</h2>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Our Office</h3>
                            <p className="text-muted-foreground">123 Innovation Drive, Tech City, 12345</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <p className="text-muted-foreground">contact@infinittech.com</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <p className="text-muted-foreground">(123) 456-7890</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 border rounded-lg bg-card">
                     <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
