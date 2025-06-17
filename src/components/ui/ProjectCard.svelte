<!-- src/components/ui/ProjectCard.svelte -->
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

  $: visibleTech = project.techStack.slice(0, 4);
  $: hiddenTechCount = project.techStack.length - visibleTech.length;

  // --- Event Handlers ---
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

  <div
    class="absolute inset-0 pointer-events-none z-20
           transition-transform duration-250 ease-in-out"
    class:scale-[0.99]={isPressed}
    class:scale-[1.02]={isHovered && !isPressed}
    class:text-blue-300={isHovered || isPressed}
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
    <div
      class="relative bg-clip-padding aspect-[2/3] lg:aspect-[4/3]
             border border-gray-800
             group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50
             group-hover:shadow-lg group-hover:shadow-blue-500/20 dark:group-hover:shadow-sky-400/20
             transition-transform duration-250 ease-in-out group-hover:scale-[1.02] group-active:scale-[0.99]"
      
    >
      <div class="absolute inset-0 h-full w-full">
        <img
          src={project.thumbnail}
          alt={project.title}
          class="w-full h-full object-cover transition-opacity duration-300"
          class:opacity-0={isVideoActive && project.video}
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

      <div
        class="absolute bottom-0 w-full p-4 lg:p-6 border-t border-slate-900/10
               bg-gradient-to-t from-white/60 to-white/20
               dark:from-black/80 dark:to-black/50
               backdrop-blur-md backdrop-saturate-200"
        style="background-clip: padding-box;"
      >
        <div class="relative z-10" aria-label="Project details">
          <div class="flex items-start justify-between mb-4">
            <h2
              class="text-lg lg:text-xl font-bold text-slate-900 dark:text-white text-shadow-xs dark:text-shadow-gray-800 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 pr-4"
            >
              {project.title}
            </h2>
            <h3
              class="text-sm font-medium text-slate-500 dark:text-slate-400 flex-shrink-0 flex items-center gap-1.5"
            >
              <img
                src={`/icons/${categoryIconMap[project.category]}.svg`}
                alt="{project.category} icon"
                class="h-4 w-4"
              />
              <span>{project.category}</span>
            </h3>
          </div>
          <p
            class="text-slate-600 dark:text-slate-200 text-sm mb-4 leading-relaxed line-clamp-3"
          >
            {project.description}
          </p>
          <div class="flex justify-between items-end">
            <div class="flex flex-wrap gap-2">
              {#each visibleTech as tech}
                <div
                  class="flex items-center gap-1.5 bg-slate-900/5 dark:bg-slate-50/5 border border-slate-900/10 rounded-sm px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
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
              {#if hiddenTechCount > 0}
                <div
                  class="flex items-center gap-1.5 bg-slate-900/5 dark:bg-slate-50/5 border border-slate-900/10 rounded-sm px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  <span>+{hiddenTechCount}</span>
                </div>
              {/if}
            </div>
            <p
              class="hidden lg:block view-more-link flex-shrink-0 text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out"
            >
              View Project →
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