<script lang="ts">
  import { experiences } from '../../data/experience';
  import type { Experience } from '../../data/experience';
  
  // Generate unique ID from company and role
  function generateExperienceId(experience: Experience): string {
    return `${experience.company.replace(/\s+/g, '-').toLowerCase()}-${experience.role.replace(/\s+/g, '-').toLowerCase()}`;
  }
</script>

<!-- Main experience section -->
<section 
  class="py-16" 
  aria-labelledby="experience-heading"
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

    {#each experiences as experience, index}
      {@const experienceId = generateExperienceId(experience)}
      
      <!-- Experience card/item -->
      <article 
        class="pl-6 py-4 relative"
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
          class="text-xl font-bold text-accent-blue"
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
          <span class="sr-only">Employment period </span>
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
          {#each experience.highlights as highlight, highlightIndex}
            <li>
              <span class="sr-only">Highlight {highlightIndex + 1}: </span>
              {highlight}
            </li>
          {/each}
        </ul>
        
        <!-- Technologies/Utilizations -->
        <div class="mt-4">
          <h4 class="text-sm font-semibold text-accent-green mb-2">Utilizations</h4>
          <div class="flex flex-wrap gap-2">
            {#each experience.utilizations as tech}
              <span class="text-xs bg-gray-800 text-accent-blue px-2 py-1 rounded">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </article>
    {/each}
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