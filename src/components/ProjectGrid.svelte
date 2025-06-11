<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import { projects } from '../data/projects';

    export let featured = false;
    let displayProjects = featured ? projects.slice(0, 2) : projects;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each displayProjects as project, i}
        <div style="animation-delay: {i * 100}ms" class="fade-in">
            <ProjectCard {project} />
        </div>
    {/each}
</div>