<!-- src/components/ui/ProjectList.svelte -->
<script lang="ts">
  import type { Project } from "../../data/projects";
  export let project: Project;

  let isHovered = false;
  let isVideoActive = false;
  let isPressed = false;
  let videoRef: HTMLVideoElement | null = null;
  let videoPlayTimeout: number;

  const categoryIconMap = {
    "Web App": "WebApp",
    Website: "Website",
    "Mobile App": "Android",
    "Desktop App": "Windows",
  };

  // MODIFICATION: Removed reactive slicing. The component will now display all tech.
  // $: visibleTech = ...
  // $: hiddenTechCount = ...

  function handleMouseEnter() {
    isHovered = true;
    if (videoRef && project.video) {
      videoPlayTimeout = window.setTimeout(() => {
        if (videoRef) {
          isVideoActive = true;
          videoRef.currentTime = 0;
          videoRef.play().catch(console.error);
        }
      }, 2000);
    }
  }

  function handleMouseLeave() {
    isHovered = false;
    isPressed = false;
    isVideoActive = false;
    clearTimeout(videoPlayTimeout);
    if (videoRef) {
      videoRef.pause();
      videoRef.currentTime = 0;
    }
  }

  function handleMouseDown() {
    isPressed = true;
  }

  function handleMouseUp() {
    isPressed = false;
  }
</script>

<div class="m-4 p-2 relative">
  <!-- Corner Design: Synced with hover and press states -->
  <div
    class="absolute inset-0 text-white pointer-events-none z-20
           transition-transform duration-250 ease-in-out"
    class:scale-[0.99]={isPressed}
    class:scale-[1.02]={isHovered && !isPressed}
  >
    {#each [0, 90, 180, 270] as deg}
      <svg
        class="absolute h-5 w-5"
        style="top:{deg === 0 || deg === 90 ? '-1px' : 'auto'};bottom:{deg ===
          180 || deg === 270
          ? '-1px'
          : 'auto'};left:{deg === 0 || deg === 270
          ? '-1px'
          : 'auto'};right:{deg === 90 || deg === 180
          ? '-1px'
          : 'auto'};transform:rotate({deg}deg);"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v12m6-6H6"
        />
      </svg>
    {/each}
  </div>

  <a
    href={`/projects/${project.slug}`}
    class="group block"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:mousedown={handleMouseDown}
    on:mouseup={handleMouseUp}
  >
    <!-- MODIFICATION: Simplified aspect ratio for a consistent desktop/tablet view -->
    <div
      class="relative flex flex-row rounded-lg
             border border-gray-800 aspect-[6/1]
             group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50
             group-hover:shadow-lg group-hover:shadow-blue-500/20 dark:group-hover:shadow-sky-400/20
             transition-transform duration-250 ease-in-out group-hover:scale-[1.02] group-active:scale-[0.99]"

    >
      <div
        class="relative h-full flex-shrink-0 aspect-video"
        aria-label="Project Thumbnail and Video Card"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          class:opacity-0={isVideoActive}
        />
        {#if project.video}
          <video
            bind:this={videoRef}
            src={project.video}
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            class:opacity-0={!isVideoActive}
            muted
            loop
            preload="metadata"
          >
            <track kind="captions" />
          </video>
        {/if}
      </div>

      <!-- 
        MODIFICATION: 
        - Added `border-l` to create the visible 1px divider.
        - Simplified padding to `p-6`.
      -->
      <div
        class="flex flex-1 flex-col justify-between p-6 bg-gradient-to-br from-gray-900 to-black border-l border-slate-700/50"
        aria-label="Project Information"
      >
        <div>
          <div class="flex items-start justify-between mb-2">
            <!-- MODIFICATION: Simplified font size to `text-xl` -->
            <h2
              class="text-xl font-bold text-slate-50 group-hover:text-blue-400 transition-colors duration-300 pr-4"
            >
              {project.title}
            </h2>
            <h3
              class="text-sm font-medium text-slate-400 flex-shrink-0 flex items-center gap-1.5"
            >
              <img
                src={`/icons/${categoryIconMap[project.category]}.svg`}
                alt="{project.category} icon"
                class="h-4 w-4"
              />
              <span>{project.category}</span>
            </h3>
          </div>
          <!-- MODIFICATION: Simplified line-clamp -->
          <p class="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div class="flex justify-between items-end mt-4">
          <!-- MODIFICATION: Iterating over the full techStack array -->
          <div class="flex flex-wrap gap-2">
            {#each project.techStack as tech}
              <div
                class="flex items-center gap-1.5 bg-slate-900/50 rounded-sm px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                <img
                  src={`/icons/${tech.replace(/\s+/g, "")}.svg`}
                  alt="{tech} icon"
                  class="w-3 h-3"
                  on:error={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.display =
                      "none")}
                />
                <span class="font-inter font-bold">{tech}</span>
              </div>
            {/each}
          </div>
          <!-- MODIFICATION: Removed responsive `lg:` prefix -->
          <p
            class="block view-more-link flex-shrink-0 text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out"
          >
            View Project →
          </p>
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
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1s ease-in-out;
  }
  .group:hover .view-more-link::after {
    transform: scaleX(1);
  }
</style>
