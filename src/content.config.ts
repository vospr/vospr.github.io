import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['ml-data-science', 'software-engineering', 'ai-solutions']),
    hook: z.string(),
    summary: z.string(),
    status: z.enum(['published', 'draft', 'placeholder']).default('draft'),
    draft: z.boolean().default(false),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    keyTags: z.array(z.string()).optional(),
    problem: z.string(),
    whatItDoes: z.string(),
    howItsBuilt: z
      .array(
        z.object({
          lead: z.string(),
          detail: z.string(),
        })
      )
      .default([]),
    facts: z
      .array(
        z.object({
          k: z.string(),
          v: z.string(),
        })
      )
      .default([]),
    stackGroups: z
      .array(
        z.object({
          label: z.string(),
          items: z.array(z.string()),
        })
      )
      .default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
    caseStudy: z.object({
      asOf: z.string(),
      evidence: z.array(z.object({ label: z.string(), detail: z.string() })),
      workflow: z.array(z.object({ label: z.string(), detail: z.string() })),
      workflowNote: z.string(),
      examples: z.array(z.object({ label: z.string(), detail: z.string() })),
      exampleNote: z.string(),
      excerpt: z.object({ question: z.string(), answer: z.string(), check: z.string(), qualification: z.string() }),
    }).optional(),
  }),
});

export const collections = { projects };
