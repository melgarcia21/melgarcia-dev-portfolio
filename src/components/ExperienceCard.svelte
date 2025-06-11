<script lang="ts">
  import type { Experience } from '../data/experience';
  export let experience: Experience;
</script>

<div class="border-l-2 border-accent-blue pl-6 py-4 relative">
    <div class="absolute -left-[7px] top-4 w-3 h-3 bg-accent-blue rounded-full"></div>
    <h3 class="text-xl font-bold text-accent-orange">{experience.role}</h3>
    <p class="font-semibold">{experience.company}</p>
    <p class="text-sm text-gray-400 mb-2">{experience.period}</p>
    <p class="text-gray-300">{experience.description}</p>
    <ul class="list-disc list-inside mt-2 text-gray-400">
        {#each experience.highlights as highlight}
            <li>{highlight}</li>
        {/each}
    </ul>
</div>