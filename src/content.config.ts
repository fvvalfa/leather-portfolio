import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoriesInfo, type CategoryId } from './lib/categories';

const categoryIds = Object.keys(categoriesInfo) as [CategoryId, ...CategoryId[]];

const works = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/works',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(categoryIds),
      materials: z.array(z.string()).default([]),
      techniques: z.array(z.string()).optional(),
      cover: image(),
      images: z.array(image()).optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };