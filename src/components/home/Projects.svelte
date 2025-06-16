<script lang="ts">
  import ProjectCard from "../ui/ProjectCard.svelte";

  import { projects } from "../../data/projects";

  export let featured = false;
  let displayProjects = featured ? projects.slice(0, 2) : projects;
</script>

<section class="py-16">
  <h2 class="text-3xl font-bold text-center mb-12 text-accent-green">
    Featured Projects
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each displayProjects as project (project.slug)}
      <ProjectCard {project} />
    {/each}
  </div>

  <div class="my-8 flex justify-center">
    <a
      href="/projects"
      class="inline-block bg-accent-orange text-white font-bold py-3 px-6 rounded hover:bg-opacity-90 transition-colors"
      >View All Projects</a
    >
  </div>
</section>
