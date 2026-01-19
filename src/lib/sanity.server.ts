// src/lib/sanity.server.ts
// This file should only contain server-side code
import 'server-only';
import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, isSanityConfigured } from './sanity.client';

export { isSanityConfigured };

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // `false` if you want to ensure fresh data
  // You can add other server-specific configurations here
});
