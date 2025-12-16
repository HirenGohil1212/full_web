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
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';


const formSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
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
            company: '',
            message: '',
        },
    });

    // In a real application, you would send this data to a server
    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);
        console.log('Form submitted:', data);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        form.reset();

        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We'll get back to you shortly.",
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Company Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Let us know how we can help you..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                     {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Message
                </Button>
            </form>
        </Form>
    );
}
