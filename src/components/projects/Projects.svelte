<!-- src/components/projects/Projects.svelte -->
<script lang="ts">
  import { projects, type Project } from "../../data/projects";
  import ProjectCard from "../ui/ProjectCard.svelte";
  import ProjectList from "../ui/ProjectList.svelte";

  import { fade } from "svelte/transition";

  // --- Filter State & Types ---
  type Category = "All" | "Website" | "Web App" | "Mobile App" | "Desktop App";
  let selectedCategory: Category = "All";

  // --- Data for UI Generation ---
  const categories: Category[] = [
    "All",
    "Website",
    "Web App",
    "Mobile App",
    "Desktop App",
  ];
  
  // Icon mapping as requested for the filter tabs
  const categoryIconMap = {
    "Web App": "WebApp",
    Website: "Website",
    "Mobile App": "Android",
    "Desktop App": "Windows",
    // Note: 'All' category will not have an icon
  };

  // --- Reactive Filtering Logic ---
  // This $: block automatically re-runs whenever 'selectedCategory' changes.
  let filteredProjects: Project[] = [];
  $: {
    if (selectedCategory === "All") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter(
        (project) => project.category === selectedCategory
      );
    }
  }

  // --- Dynamic Styling for Tabs ---
  // This function returns the correct CSS classes for a tab based on whether it's selected.
  function getButtonClass(category: Category): string {
    const baseStyle = "flex items-center gap-2 bg-slate-900/5 dark:bg-slate-50/5 border border-slate-900/10 rounded-md px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500";
    
    const activeStyle = "bg-blue-600 dark:bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20";
    
    if (category === selectedCategory) {
      return `${baseStyle} ${activeStyle}`;
    }
    return baseStyle;
  }
</script>


<div class="flex flex-col gap-12">

  <!-- Top: Category Filter Tabs -->
  <div class="flex justify-start items-center flex-wrap gap-3 md:gap-4 px-4">
    {#each categories as category}
      <button
        on:click={() => (selectedCategory = category)}
        class={getButtonClass(category)}
      >
        <!-- Conditionally render the icon. 'All' does not have one. -->
        {#if category !== 'All'}
          <img
            src={`/icons/${categoryIconMap[category]}.svg`}
            alt="{category} icon"
            class="h-4 w-4"
          />
        {/if}
        <span>{category}</span>
      </button>
    {/each}
  </div>

  <!-- Bottom: Project Grid -->
  <div class="min-w-0">
    {#if filteredProjects.length > 0}
      <!-- The #key block re-triggers the animation when the filter changes -->
      {#key selectedCategory}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each filteredProjects as project, i (project.slug)}
            <div in:fade={{ duration: 300, delay: i * 75 }}>
              <ProjectCard {project} />

            </div>
          {/each}
        </div>
      {/key}
    {:else}
      <!-- Fallback message when no projects match the filter -->
      <div class="flex flex-col items-center justify-center text-center bg-gray-800/50 p-12 rounded-lg mt-8">
        <p class="text-2xl font-bold text-white mb-2">No Projects Found</p>
        <p class="text-gray-400">There are no projects in the "{selectedCategory}" category.</p>
      </div>
    {/if}
  </div>

  <!-- Optional: Project List View -->
  <div class="mt-12">
    <h2 class="text-2xl font-bold mb-6">Project List View</h2>
    
    {#if filteredProjects.length > 0}
    {#key selectedCategory}
    <div class="grid grid-cols-1">
      {#each filteredProjects as project, i (project.slug)}
      <div in:fade={{ duration: 300, delay: i * 75}}>

        <ProjectList {project} />

      </div>
      {/each}
    </div>
    {/key}
    {:else}
      <div class="flex flex-col items-center justify-center text-center bg-gray-800/50 p-12 rounded-lg mt-8">
        <p class="text-2xl font-bold text-white mb-2">No Projects Found</p>
        <p class="text-gray-400">There are no projects in the "{selectedCategory}" category.</p>
      </div>
    {/if}

  </div>



</div>