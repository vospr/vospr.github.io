import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['ml-data-science', 'software-engineering', 'ai-solutions']),
    hook: z.string(),
    status: z.enum(['published', 'draft', 'placeholder']).default('draft'),
    order: z.number().default(0),
    stack: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { projects };
