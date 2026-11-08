import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    origin: z.string().optional(),
    moq: z.string().optional(),
  }),
});

export const collections = { products };