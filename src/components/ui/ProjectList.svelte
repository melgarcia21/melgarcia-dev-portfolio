<!-- src/components/ui/ProjectList.svelte -->
<script lang="ts">
  import type { Project } from "../../data/projects";
  export let project: Project;

  // --- States for Desktop Interactivity ---
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

  // --- Logic for Mobile Tech Stack Limit ---
  $: mobileVisibleTech = project.techStack.slice(0, 3);
  $: mobileHiddenTechCount =
    project.techStack.length - mobileVisibleTech.length;

  // --- Event Handlers for Desktop View ---
  function handleMouseEnter() {
    isHovered = true;
    if (window.innerWidth >= 768 && videoRef && project.video) {
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

<!-- 
  Added `relative` and m-4 p-2 to act as the positioning context for the corner design.
.
-->
<div class="relative m-4 p-2 border-b border-slate-800 md:border-b-0">
  <!-- 
    DESKTOP-ONLY Corner Design
  -->
  <div
    class="hidden md:block absolute inset-0 text-white pointer-events-none z-20
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
    <!-- 
      Main Container: 
      - The `md:relative` class on this element is no longer strictly necessary but is kept for clarity.
    -->
    <div
      class="grid grid-cols-[100px_1fr]
             md:relative md:flex md:flex-row md:rounded-lg md:border md:border-gray-800 md:aspect-[6/1]
             md:group-hover:border-blue-500/50 md:dark:group-hover:border-blue-400/50
             md:group-hover:shadow-lg md:group-hover:shadow-blue-500/20 md:dark:group-hover:shadow-sky-400/20
             md:transition-transform md:duration-250 md:ease-in-out md:group-hover:scale-[1.02] md:group-active:scale-[0.99]"
    
    >
    <!-- We will no longer use transition effect toward project slug -->

      <!-- [COLUMN 1] Image + Mobile Category -->
      <div>
        <div
          class="aspect-[2/3] md:relative md:h-full md:flex-shrink-0 md:aspect-video"
          aria-label="Project Thumbnail"
        >
          <img
            src={project.thumbnail.portrait || project.thumbnail}
            alt={project.title}
            class="w-full h-full object-cover rounded-md md:absolute md:inset-0 md:rounded-none transition-opacity duration-300"
            class:md:opacity-0={isVideoActive}
          />
          {#if project.video}
            <video
              bind:this={videoRef}
              src={project.video}
              class="hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              class:opacity-0={!isVideoActive}
              muted
              loop
              preload="metadata"
            >
              <track kind="captions" />
            </video>
          {/if}
        </div>
        <div
          class="flex md:hidden items-center justify-center pt-4 gap-1.5 text-sm font-semibold text-slate-400"
        >
          <img
            src={`/icons/${categoryIconMap[project.category]}.svg`}
            alt=""
            class="h-3 w-3"
          />
          <span>{project.category}</span>
        </div>
      </div>

      <!-- [COLUMN 2] Details: Title, Description, Tech Stack -->
      <div
        class="flex flex-col justify-between
                  md:flex-1 md:p-6 md:bg-gradient-to-br md:from-gray-900 md:to-black md:border-l md:border-slate-700/50"
        aria-label="Project Information"
      >
        <div>

            <!-- I think the pattern of the grid is inverted N instead of Z, that's why the project category is on the second order instead of project title --> 
          <div class="flex justify-between ">
          <h3
            class="hidden md:flex text-sm font-medium text-slate-400 flex-shrink-0 items-center gap-1.5 mb-2 justify-end"
          >
            <img
              src={`/icons/${categoryIconMap[project.category]}.svg`}
              alt=""
              class="h-4 w-4"
            />
            <span>{project.category}</span>
          </h3>
          <h2
            class="text-md font-bold text-slate-50 md:text-xl md:group-hover:text-blue-400 transition-colors duration-300"
          >
            {project.title}
          </h2>
        
          </div> 


          <p class="text-slate-400 text-sm leading-relaxed line-clamp-2 mt-1">
            {project.description}
          </p>
        </div>

        <div class="flex justify-between items-end mt-4">
          <!-- Mobile Tech Stack (limited to 3) -->
          <div class="flex md:hidden gap-1.5">
            {#each mobileVisibleTech as tech}
              <div
                class="bg-slate-900/50 rounded-sm px-2.5 py-1 text-xs text-slate-300"
              >
                {tech}
              </div>
            {/each}
            {#if mobileHiddenTechCount > 0}
              <div
                class="bg-slate-900/50 rounded-sm px-2.5 py-1 text-xs text-slate-300"
              >
                +{mobileHiddenTechCount}
              </div>
            {/if}
          </div>
          <!-- Desktop Tech Stack (full) -->
          <div class="hidden md:flex flex-wrap gap-2">
            {#each project.techStack as tech}
              <div
                class="flex items-center gap-1.5 bg-slate-900/50 rounded-sm px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                <img
                  src={`/icons/${tech.replace(/\s+/g, "")}.svg`}
                  alt=""
                  class="w-3 h-3"
                  on:error={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.display =
                      "none")}
                />
                <span class="font-inter font-bold">{tech}</span>
              </div>
            {/each}
          </div>
          <!-- Desktop-Only "View Project" Link -->
          <p
            class="hidden md:block view-more-link flex-shrink-0 text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out"
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
