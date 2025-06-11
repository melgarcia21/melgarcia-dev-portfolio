<script lang="ts">
  import type { Project } from '../data/projects';
  export let project: Project;
</script>

<a href={`/projects/${project.slug}`} class="group block overflow-hidden rounded-lg border border-gray-800 hover:border-accent-purple transition-colors duration-300">
  <img
    src={project.thumbnail}
    alt={project.title}
    class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div class="p-4 bg-gray-900/50">
    <h3 class="text-lg font-bold font-jetbrains-mono text-white">{project.title}</h3>
    <div class="flex flex-wrap gap-2 mt-2">
      {#each project.techStack as tech}
        <span class="text-xs bg-gray-800 text-accent-green px-2 py-1 rounded">
          {tech}
        </span>
      {/each}
    </div>
  </div>
</a>