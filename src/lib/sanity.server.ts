// src/lib/sanity.server.ts
// This file should only contain server-side code
import 'server-only';
import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from './sanity.client';

if (!projectId || !dataset) {
  throw new Error('Sanity project ID and dataset must be configured in .env.local');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // `false` if you want to ensure fresh data
  // You can add other server-specific configurations here
});
