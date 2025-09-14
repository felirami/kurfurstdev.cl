// src/lib/sanity.client.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'c7dyz33g'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Check if Sanity is properly configured
if (!projectId || projectId === 'your-project-id') {
  console.warn('Sanity project ID not configured. Some features may not work properly.');
}
const apiVersion = '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // Add timeout and retry configuration
  requestTagPrefix: 'kurfurst-dev',
  ignoreBrowserTokenWarning: true,
})

// --- NUEVA SECCIÓN PARA IMÁGENES ---
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}