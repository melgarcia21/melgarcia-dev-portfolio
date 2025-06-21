<script lang="ts">
  import { projects, type Project } from "../../data/projects";
  import ProjectCard from "../ui/ProjectCard.svelte";
  import ProjectList from "../ui/ProjectList.svelte";
  import { fade, slide } from "svelte/transition";

  type Category = "All" | "Website" | "Web App" | "Mobile App" | "Desktop App";
  type Language = "All" | "TypeScript" | "PHP" | "C#" | "Python";
  type ViewMode = "grid" | "list";

  let selectedCategory: Category = "All";
  let selectedLanguage: Language = "All";
  let viewMode: ViewMode = "grid";

  let isLangDropdownOpen = false;

  const categories: Category[] = [
    "All",
    "Website",
    "Web App",
    "Mobile App",
    "Desktop App",
  ];
  const languages: Language[] = ["All", "TypeScript", "PHP", "C#", "Python"];

  const categoryIconMap = {
    "Web App": "WebApp",
    Website: "Website",
    "Mobile App": "Android",
    "Desktop App": "Windows",
  };
  const languageIconMap = {
    TypeScript: "TypeScript",
    PHP: "PHP",
    "C#": "CSharp",
    Python: "Python",
  };

  let filteredProjects: Project[] = [];
  $: {
    filteredProjects = projects.filter((project) => {
      // Check for category match
      const categoryMatch =
        selectedCategory === "All" || project.category === selectedCategory;

      // Check for language match. The techStack must include the selected language.
      // We handle the 'C#' label by checking for 'CSharp' in the techStack.
      const languageMatch =
        selectedLanguage === "All" ||
        (selectedLanguage === "C#"
          ? project.techStack.includes("CSharp")
          : project.techStack.includes(selectedLanguage));

      return categoryMatch && languageMatch;
    });
  }

  // --- UI Helpers ---
  function getCategoryButtonClass(category: Category): string {
    const baseStyle =
      "flex items-center gap-2 bg-slate-900/5 dark:bg-slate-50/5 border border-slate-900/10 rounded-md px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500";
    const activeStyle =
      "bg-blue-600 dark:bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20";
    return category === selectedCategory
      ? `${baseStyle} ${activeStyle}`
      : baseStyle;
  }

  // Svelte Action to detect clicks outside an element
  function clickOutside(node: Node) {
    const handleClick = (event: MouseEvent) => {
      if (
        node &&
        !node.contains(event.target as Node) &&
        !event.defaultPrevented
      ) {
        node.dispatchEvent(new CustomEvent("click_outside", { detail: node }));
      }
    };
    document.addEventListener("click", handleClick, true);
    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }
</script>

<div class="flex flex-col gap-12">
  <!-- Top: Controls (Filters and View Toggle) -->
  <div
    class="flex flex-col sm:flex-row justify-between items-center gap-6 px-4"
  >
    <!-- Left side: Category Filter Tabs -->
    <div
      class="flex justify-center sm:justify-start items-center flex-wrap gap-3"
    >
      {#each categories as category}
        <button
          on:click={() => (selectedCategory = category)}
          class={getCategoryButtonClass(category)}
        >
          {#if category !== "All"}<img
              src={`/icons/${categoryIconMap[category]}.svg`}
              alt="{category} icon"
              class="h-4 w-4"
            />{/if}
          <span>{category}</span>
        </button>
      {/each}
    </div>

    <!-- Right side: Language filter and View Toggle -->
    <div class="flex items-center gap-4 sm:gap-6">
      <!-- Middle: Language Dropdown -->
      <div
        class="relative"
        use:clickOutside
        on:click_outside={() => (isLangDropdownOpen = false)}
      >
        <button
          on:click={() => (isLangDropdownOpen = !isLangDropdownOpen)}
          class="flex items-center gap-2 bg-slate-900/5 dark:bg-slate-50/5 border border-slate-900/10 rounded-md px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500"
          aria-haspopup="true"
          aria-expanded={isLangDropdownOpen}
        >
          {#if selectedLanguage !== "All"}
            <img
              src={`/icons/${languageIconMap[selectedLanguage]}.svg`}
              alt="{selectedLanguage} icon"
              class="h-4 w-4"
            />
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3"
              /></svg
            >
          {/if}
          <span>{selectedLanguage}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-slate-500 ml-1 transition-transform"
            class:rotate-180={isLangDropdownOpen}
            viewBox="0 0 20 20"
            fill="currentColor"
            ><path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg
          >
        </button>

        {#if isLangDropdownOpen}
          <div
            transition:fade={{ duration: 150 }}
            class="absolute z-10 top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1"
          >
            {#each languages as lang}
              <button
                on:click={() => {
                  selectedLanguage = lang;
                  isLangDropdownOpen = false;
                }}
                class="w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors"
                class:bg-blue-600={selectedLanguage === lang}
                class:text-white={selectedLanguage === lang}
                class:text-slate-300={selectedLanguage !== lang}
                class:hover:bg-slate-700={selectedLanguage !== lang}
              >
                {#if lang !== "All"}
                  <img
                    src={`/icons/${languageIconMap[lang]}.svg`}
                    alt="{lang} icon"
                    class="h-4 w-4"
                  />
                {:else}
                  <span class="w-4 h-4 inline-block"></span>
                  <!-- Placeholder for alignment -->
                {/if}
                <span>{lang}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Far Right: Grid/List View Toggle -->
      <div class="flex items-center gap-3 flex-shrink-0">
      <button on:click={() => viewMode = 'grid'} aria-label="Grid View" class="p-2 rounded-md transition-all duration-200 ease-in-out hover:text-white" class:text-blue-500={viewMode === 'grid'} class:text-slate-500={viewMode !== 'grid'} class:scale-110={viewMode === 'grid'} class:hover:scale-110={viewMode !== 'grid'}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
      </button>
        <button
          on:click={() => (viewMode = "list")}
          aria-label="List View"
          class="p-2 rounded-md transition-all duration-200 ease-in-out hover:text-white"
          class:text-blue-500={viewMode === "list"}
          class:text-slate-500={viewMode !== "list"}
          class:scale-110={viewMode === "list"}
          class:hover:scale-110={viewMode !== "list"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </button>
      </div>
    </div>
  </div>

  <!-- Bottom: Project Display Area (Grid or List) -->
  <div class="min-w-0">
    {#if filteredProjects.length > 0}
      <!-- The key now includes selectedLanguage to re-trigger animations -->
      {#key selectedCategory + selectedLanguage + viewMode}
        {#if viewMode === "grid"}
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8"
            in:fade={{ duration: 200 }}
          >
            {#each filteredProjects as project, i (project.slug)}
              <div in:fade={{ duration: 300, delay: i * 75 }}>
                <ProjectCard {project} />
              </div>
            {/each}
          </div>
        {:else}
          <div class="space-y-4" in:fade={{ duration: 200 }}>
            {#each filteredProjects as project, i (project.slug)}
              <div in:slide={{ duration: 250, delay: i * 50, axis: "y" }}>
                <ProjectList {project} />
              </div>
            {/each}
          </div>
        {/if}
      {/key}
    {:else}
      <div
        class="flex flex-col items-center justify-center text-center bg-gray-800/50 p-12 rounded-lg mt-8"
      >
        <p class="text-2xl font-bold text-white mb-2">No Projects Found</p>
        <p class="text-gray-400">
          Try adjusting your filters to find what you're looking for.
        </p>
      </div>
    {/if}
  </div>
</div>