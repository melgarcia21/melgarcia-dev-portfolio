<!-- src/components/projects/Projects.svelte -->
<script lang="ts">
  import { projects } from '../../data/projects';
  import ProjectCard from '../ui/ProjectCard.svelte';

  export let featured = false;


  const displayProjects = featured ? projects.slice(0, 2) : projects;


</script>

<section class="py-16">
  <h2 class="text-3xl font-bold text-center mb-12 text-accent-green">My Projects</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each displayProjects as project (project.slug)}
      <ProjectCard {project} />
    {/each}
  </div>

  {#if featured}
    <div class="my-12 flex justify-center">
      <a 
        href="/projects" 
        class="inline-block bg-accent-orange text-white font-bold py-3 px-6 rounded hover:bg-opacity-90 transition-colors"
      >
        View All Projects
      </a>
    </div>
  {/if}
</section>