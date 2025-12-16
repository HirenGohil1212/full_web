'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import type { GrantSuggestion } from '@/ai/flows/grant-eligibility-tool';
import { getGrantSuggestions } from '@/app/actions';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Loader2, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const formSchema = z.object({
  companyDescription: z.string().min(20, 'Please provide a more detailed company description.'),
  startupDescription: z.string().min(20, 'Please provide a more detailed startup description.'),
  industry: z.string().min(2, 'Industry is required.'),
  location: z.string().min(2, 'Location is required.'),
  financialNeeds: z.string().min(10, 'Please describe your financial needs.'),
});

type GrantFinderFormValues = z.infer<typeof formSchema>;

export default function GrantFinderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<GrantSuggestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<GrantFinderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyDescription: '',
      startupDescription: '',
      industry: '',
      location: '',
      financialNeeds: '',
    },
  });

  async function onSubmit(data: GrantFinderFormValues) {
    setIsLoading(true);
    setError(null);
    setResults(null);
    const response = await getGrantSuggestions(data);
    if (response.success && response.data) {
      setResults(response.data);
    } else {
      setError(response.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <div className="space-y-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Grant Eligibility Details</CardTitle>
          <CardDescription>
            Provide details about your company and project to find relevant grants.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your company's mission, history, and projects..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startupDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Startup/Project Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the problem, your solution, team, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., SaaS, HealthTech, AI" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., San Francisco, CA or Remote" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="financialNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Financial Needs</FormLabel>
                    <FormControl>
                      <Textarea placeholder="What are you seeking funding for? e.g., R&D, market expansion..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Find Grants
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {results && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Grant Suggestions</CardTitle>
            <CardDescription>
              {results.length > 0
                ? `Here are some potential grant opportunities based on your input.`
                : 'No specific grants found. You can try refining your search criteria.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {results.length > 0 && (
            <Accordion type="single" collapsible className="w-full">
              {results.map((grant, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="font-headline text-lg">{grant.grantName}</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-muted-foreground">{grant.grantDescription}</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="font-medium">Funding Amount: <span className="font-normal text-muted-foreground">{grant.fundingAmount}</span></div>
                      <div className="font-medium">Application Deadline: <span className="font-normal text-muted-foreground">{grant.applicationDeadline}</span></div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Eligibility Requirements:</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">{grant.eligibilityRequirements}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={grant.applicationLink} target="_blank" rel="noopener noreferrer">
                        Application Link <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
