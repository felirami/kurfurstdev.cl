// src/lib/sanity.client.ts
// This file should only contain client-safe code
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

if (!projectId) {
  console.error('Sanity project ID is not configured. Check your .env.local file.');
}
if (!dataset) {
  console.error('Sanity dataset is not configured. Check your .env.local file.');
}

// This client is safe to use in client-side components
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `true` for client-side fetching
});

// Client-safe image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}