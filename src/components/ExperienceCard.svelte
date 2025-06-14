<script lang="ts">
  import type { Experience } from '../data/experience';
  export let experience: Experience;
  // svelte-ignore export_let_unused
    export let index: number = 0; // Add index prop for unique IDs
  
  // Generate unique ID from company and role
  $: experienceId = `${experience.company.replace(/\s+/g, '-').toLowerCase()}-${experience.role.replace(/\s+/g, '-').toLowerCase()}`;
</script>

<!-- Main experience section -->
<!-- svelte-ignore a11y_no_redundant_roles -->
<section 
  class="py-16" 
  aria-labelledby="experience-heading"
  role="region"
>
  <!-- Section heading -->
  <h2 
    id="experience-heading"
    class="text-3xl font-bold text-center mb-12 text-accent-green"
  >
    Experience
  </h2>

  <!-- Timeline container -->
  <div 
    class="space-y-8 max-w-3xl mx-auto"
    role="list"
    aria-label="Work experience timeline"
  >
    <!-- Experience card/item -->
    <article 
      class="border-l-2 border-accent-blue pl-6 py-4 relative"
      role="listitem"
      aria-labelledby="role-{experienceId}"
    >
      <!-- Timeline dot -->
      <div 
        class="absolute -left-[7px] top-4 w-3 h-3 bg-accent-blue rounded-full"
        role="presentation"
        aria-hidden="true"
      ></div>
      
      <!-- Job role (main heading for this experience) -->
      <h3 
        id="role-{experienceId}"
        class="text-xl font-bold text-accent-orange"
      >
        {experience.role}
      </h3>
      
      <!-- Company name -->
      <p class="font-semibold">
        <span class="sr-only">Company: </span>
        {experience.company}
      </p>
      
      <!-- Employment period -->
      <time 
        class="text-sm text-gray-400 mb-2 block"
      >
        <span class="sr-only">Employment period: </span>
        {experience.period}
      </time>
      
      <!-- Job description -->
      <p class="text-gray-300">
        <span class="sr-only">Description: </span>
        {experience.description}
      </p>
      
      <!-- Key highlights/achievements -->
      <ul 
        class="list-disc list-inside mt-2 text-gray-400"
        aria-label="Key highlights and achievements"
      >
        {#each experience.highlights as highlight, index}
          <li>
            <span class="sr-only">Highlight {index + 1}: </span>
            {highlight}
          </li>
        {/each}
      </ul>
    </article>
  </div>
</section>

<style>
  /* Screen reader only class for accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>