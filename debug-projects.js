// Debug script to check projects in Sanity
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function debugProjects() {
  try {
    console.log('🔍 Fetching all projects...');
    
    const projects = await client.fetch(`*[_type == "proyecto"]{
      _id,
      titulo,
      slug,
      _createdAt,
      _updatedAt
    } | order(_createdAt desc)`);
    
    console.log(`📊 Found ${projects.length} projects:`);
    
    projects.forEach((project, index) => {
      console.log(`\n${index + 1}. ${project.titulo}`);
      console.log(`   ID: ${project._id}`);
      console.log(`   Slug: ${project.slug?.current || 'NO SLUG'}`);
      console.log(`   Created: ${project._createdAt}`);
      console.log(`   Updated: ${project._updatedAt}`);
    });
    
    // Check for projects without slugs
    const projectsWithoutSlugs = projects.filter(p => !p.slug?.current);
    if (projectsWithoutSlugs.length > 0) {
      console.log(`\n⚠️  Projects without slugs (${projectsWithoutSlugs.length}):`);
      projectsWithoutSlugs.forEach(p => {
        console.log(`   - ${p.titulo} (ID: ${p._id})`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error fetching projects:', error);
  }
}

debugProjects();
