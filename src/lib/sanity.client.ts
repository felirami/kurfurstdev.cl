// src/lib/sanity.client.ts
// This file should only contain client-safe code
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

// Check if Sanity is properly configured
export const isSanityConfigured = projectId !== 'placeholder' && !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!isSanityConfigured) {
  console.warn('Sanity is not configured. The site will display placeholder content. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in your environment variables.');
}

// This client is safe to use in client-side components
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `true` for client-side fetching
});

// Client-safe image URL builder
const builder = imageUrlBuilder(client);

// Create a placeholder builder that mimics the imageUrlBuilder API
const placeholderBuilder = {
  url: () => '/placeholder-image.svg',
  width: () => placeholderBuilder,
  height: () => placeholderBuilder,
  fit: () => placeholderBuilder,
  auto: () => placeholderBuilder,
  format: () => placeholderBuilder,
  quality: () => placeholderBuilder,
};

export function urlFor(source: SanityImageSource) {
  if (!source) {
    return placeholderBuilder;
  }
  return builder.image(source);
}