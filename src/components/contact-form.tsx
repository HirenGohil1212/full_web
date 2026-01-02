'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, MessageCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  service: z.string().min(1, 'Please select a service.'),
  budget: z.string().min(1, 'Please select a budget range.'),
  message: z.string().min(10, 'Please enter a message of at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            service: '',
            budget: '',
            message: '',
        },
    });

    const handleSendEmail = (data: ContactFormValues) => {
        const subject = `New Inquiry: ${data.service}`;
        const body = `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`;
        window.location.href = `mailto:hirengohil.ceo@indicortexsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        toast({
            title: "Email Client Opened",
            description: "Your email client has been opened with the message details.",
        });
        form.reset();
    };

    const handleSendWhatsApp = (data: ContactFormValues) => {
        const message = `Hello Indicortex, I have a new inquiry:\n\n*Name*: ${data.name}\n*Email*: ${data.email}\n*Service*: ${data.service}\n*Budget*: ${data.budget}\n\n*Message*:\n${data.message}`;
        const whatsappUrl = `https://wa.me/917990305570?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        toast({
            title: "WhatsApp Opened",
            description: "WhatsApp has been opened with the message details.",
        });
        form.reset();
    };

    // We can use a single submit handler that decides which action to take,
    // or have separate click handlers for each button.
    // For this, we'll use separate click handlers on buttons that are NOT type="submit"
    // and manually trigger form validation.
    const onSendEmailClick = async () => {
        const isValid = await form.trigger();
        if (isValid) {
            handleSendEmail(form.getValues());
        }
    }
    
    const onSendWhatsAppClick = async () => {
        const isValid = await form.trigger();
        if (isValid) {
            handleSendWhatsApp(form.getValues());
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Work Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="john@company.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mobile">Mobile App Development</SelectItem>
                              <SelectItem value="web">Web Development</SelectItem>
                              <SelectItem value="ai">AI Agent Development</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="5-10k">$5k - $10k</SelectItem>
                              <SelectItem value="10-25k">$10k - $25k</SelectItem>
                              <SelectItem value="25-50k">$25k - $50k</SelectItem>
                              <SelectItem value="50k+">$50k+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How can we help?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Tell us about your project requirements..." className="min-h-[140px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col md:flex-row gap-4">
                    <Button type="button" onClick={onSendEmailClick} className="w-full" disabled={isSubmitting}>
                         {isSubmitting ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                         ) : (
                            <Mail className="mr-2 h-4 w-4" />
                         )}
                        Send via Email
                    </Button>
                     <Button type="button" onClick={onSendWhatsAppClick} className="w-full" variant="secondary" disabled={isSubmitting}>
                         {isSubmitting ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                         ) : (
                            <MessageCircle className="mr-2 h-4 w-4" />
                         )}
                        Send on WhatsApp
                    </Button>
                </div>
            </form>
        </Form>
    );
}