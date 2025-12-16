'use server';
/**
 * @fileOverview Grant Eligibility Tool.
 *
 * This file contains the GrantEligibilityTool flow, which suggests relevant grants and funding opportunities
 * based on company and startup details provided as input.
 *
 * @exported
 * - `suggestGrants` -  A function that takes company and startup details and returns a list of relevant grant suggestions.
 * - `GrantEligibilityInput` - The input type for the suggestGrants function.
 * - `GrantSuggestion` - The output type for a grant suggestion.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GrantEligibilityInputSchema = z.object({
  companyDescription: z.string().describe('A detailed description of the company, including its mission, history, and current projects.'),
  startupDescription: z.string().describe('A detailed description of the startup, including the problem it solves, its solution, team, and financial projections.'),
  industry: z.string().describe('The industry in which the company and startup operate.'),
  location: z.string().describe('The geographic location of the company and startup.'),
  financialNeeds: z.string().describe('The specific financial needs and goals for which the company is seeking funding.'),
});

export type GrantEligibilityInput = z.infer<typeof GrantEligibilityInputSchema>;

const GrantSuggestionSchema = z.object({
  grantName: z.string().describe('The name of the grant or funding opportunity.'),
  grantDescription: z.string().describe('A brief description of the grant and its eligibility criteria.'),
  fundingAmount: z.string().describe('The potential funding amount offered by the grant.'),
  applicationDeadline: z.string().describe('The deadline for submitting the grant application.'),
  eligibilityRequirements: z.string().describe('The detailed eligibility requirements for the grant.'),
  applicationLink: z.string().describe('A link to the grant application.'),
});

export type GrantSuggestion = z.infer<typeof GrantSuggestionSchema>;

const GrantEligibilityOutputSchema = z.array(GrantSuggestionSchema).describe('A list of relevant grant suggestions.');

export async function suggestGrants(input: GrantEligibilityInput): Promise<GrantSuggestion[]> {
  return grantEligibilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'grantEligibilityPrompt',
  input: {schema: GrantEligibilityInputSchema},
  output: {schema: GrantEligibilityOutputSchema},
  prompt: `You are an expert grant advisor, skilled at matching companies and startups with relevant funding opportunities.

  Based on the following information about the company and its startup, suggest a list of grants and funding opportunities that would be a good fit. Provide as many relevant grants as possible. Be as detailed as possible.

  Company Description: {{{companyDescription}}}
  Startup Description: {{{startupDescription}}}
  Industry: {{{industry}}}
  Location: {{{location}}}
  Financial Needs: {{{financialNeeds}}}

  Format your output as a JSON array of GrantSuggestion objects, with the following fields:
  - grantName: The name of the grant or funding opportunity.
  - grantDescription: A brief description of the grant and its eligibility criteria.
  - fundingAmount: The potential funding amount offered by the grant.
  - applicationDeadline: The deadline for submitting the grant application.
  - eligibilityRequirements: The detailed eligibility requirements for the grant.
  - applicationLink: A link to the grant application.
  `,
});

const grantEligibilityFlow = ai.defineFlow(
  {
    name: 'grantEligibilityFlow',
    inputSchema: GrantEligibilityInputSchema,
    outputSchema: GrantEligibilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
