'use server';

import {
  suggestGrants,
  type GrantEligibilityInput,
  type GrantSuggestion,
} from '@/ai/flows/grant-eligibility-tool';

export async function getGrantSuggestions(
  input: GrantEligibilityInput
): Promise<{ success: boolean; data?: GrantSuggestion[]; error?: string }> {
  try {
    const suggestions = await suggestGrants(input);
    if (!suggestions || suggestions.length === 0) {
      return { success: true, data: [] };
    }
    return { success: true, data: suggestions };
  } catch (e: any) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return {
      success: false,
      error: `Failed to get grant suggestions: ${errorMessage}`,
    };
  }
}
