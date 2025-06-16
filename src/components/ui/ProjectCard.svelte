<!-- src/components/ui/ProjectCard.svelte -->
<script lang="ts">
  import type { Project } from "../../data/projects";
  export let project: Project;

  let isHovered = false;
  let videoRef: HTMLVideoElement | null = null;
  // MODIFICATION: Variable to hold the timeout ID for the video delay
  let videoPlayTimeout: number;
  
  const categoryIconMap = {
    "Web App": "WebApp",
    "Website": "Website",
    "Mobile App": "Android",
    "Desktop App": "Windows",
  };

  // --- MODIFICATION: Moved const logic into reactive declarations ---
  // This fixes the Svelte compiler error and makes the logic cleaner.
  $: visibleTech = project.techStack.slice(0, 4);
  $: hiddenTechCount = project.techStack.length - visibleTech.length;
  // -----------------------------------------------------------------

  function handleMouseEnter() {
    isHovered = true;
    if (videoRef && project.video) {
      // MODIFICATION: Start a 2-second timer before playing the video
      videoPlayTimeout = window.setTimeout(() => {
        if (videoRef) {
          videoRef.currentTime = 0;
          videoRef.play().catch(console.error);
        }
      }, 2000);
    }
  }

  function handleMouseLeave() {
    isHovered = false;
    // MODIFICATION: Cancel the scheduled video playback immediately
    clearTimeout(videoPlayTimeout);
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  }

  export const className: string | undefined = undefined;
</script>

<div class="m-4 p-2 relative">
  <!-- + Corner design -->
  <div class="absolute inset-0 text-white pointer-events-none z-20">
    {#each [0, 90, 180, 270] as deg}
      <svg
        class="absolute h-5 w-5"
        style="top:{deg === 0 || deg === 90 ? '-1px' : 'auto'};bottom:{deg === 180 || deg === 270 ? '-1px' : 'auto'};left:{deg === 0 || deg === 270 ? '-1px' : 'auto'};right:{deg === 90 || deg === 180 ? '-1px' : 'auto'};transform:rotate({deg}deg);"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    {/each}
  </div>

  <a 
    href={`/projects/${project.slug}`} 
    class="group block"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
  >
    <div class="relative overflow-hidden transition-all duration-300 
                border border-gray-800 bg-clip-padding
                aspect-[2/3] lg:aspect-[4/3]
                group-hover:border-blue-500/50 dark:group-hover:border-cyan-400/50
                group-hover:shadow-lg group-hover:shadow-blue-500/20 dark:group-hover:shadow-cyan-400/20">
      
      <div class="absolute inset-0 h-full w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          class="w-full h-full object-cover transition-opacity duration-300"
          class:opacity-0={isHovered && project.video}
        />
        {#if project.video}
          <video
            bind:this={videoRef}
            src={project.video}
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            class:opacity-0={!isHovered}
            muted
            loop
            preload="metadata"
          >
            <track kind="captions" />
          </video>
        {/if}
      </div>

      <div class="absolute bottom-0 w-full p-6 border-t border-slate-900/10
          bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg backdrop-saturate-200"
           style="background-clip: padding-box;">
        <div class="relative z-10" aria-label="Project details">
          <div class="flex items-start justify-between mb-4">
            <h2 class="text-xl font-bold text-slate-900 dark:text-slate-50 
               group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 pr-4">
              {project.title}
            </h2>
            <h3 class="text-sm font-medium text-slate-500 dark:text-slate-400 
               flex-shrink-0 flex items-center gap-1.5">
              <img 
                src={`/icons/${categoryIconMap[project.category]}.svg`} 
                alt="{project.category} icon" 
                class="h-4 w-4" 
              />
              <span>{project.category}</span>
            </h3>
          </div>

          <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div class="flex justify-between items-end">
            <!-- MODIFICATION: Removed {@const} tags from here -->
            <div class="flex flex-wrap gap-2">
              {#each visibleTech as tech}
                <div class="flex items-center gap-1.5 bg-slate-900/5 dark:bg-slate-50/5 
                    border border-slate-900/10 rounded-sm px-3 py-1.5 
                    text-xs font-medium text-slate-700 dark:text-slate-300">
                  <img
                    src={`/icons/${tech.replace(/\s+/g, '')}.svg`} 
                    alt="{tech} icon"
                    class="w-3 h-3"
                    on:error={(e) => (e.currentTarget as HTMLImageElement).style.display = 'none'}
                  />
                  <span>{tech}</span>
                </div>
              {/each}
              
              {#if hiddenTechCount > 0}
                <div class="flex items-center gap-1.5 bg-slate-900/5 dark:bg-slate-50/5 
                    border border-slate-900/10 rounded-sm px-3 py-1.5 
                    text-xs font-medium text-slate-700 dark:text-slate-300">
                  <span>+{hiddenTechCount}</span>
                </div>
              {/if}
            </div>
            
            <p class="view-more-link flex-shrink-0 text-sm font-semibold text-blue-600 dark:text-blue-400
                        opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
              View More →
            </p>
          </div>
        </div>
      </div>
    </div>
  </a>
</div>

<style>
  .view-more-link {
    position: relative;
    cursor: pointer;
  }
  .view-more-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
  }
  .group:hover .view-more-link::after {
    transform: scaleX(1);
  }
</style>