<!-- src/components/ui/ProjectHeader.svelte -->
<script lang="ts">
  import type { Project } from "../../data/projects";
  import ProjectCarousel from "./ProjectCarousel.svelte";
  import TechIconCard from "./TechIconCard.svelte";

  // The component receives the entire project object as a prop.
  export let project: Project;

  // --- LOGIC TO CATEGORIZE THE TECH STACK ---
  // This logic now lives inside the Svelte component where it belongs.

  // 1. Define the categories for all known technologies
  const techDefinitions = {
    language: ["TypeScript", "JavaScript", "PHP", "Python", "Dart", "CSharp"],
    frontend: [
      "Next.js",
      "React",
      "Astro",
      "Svelte",
      "Flutter",
      "React Native",
    ],
    backend: ["Node.js", "Express.js", "Laravel", ".NET Core", "Firebase"],
    database: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"],
    styling: ["Tailwind CSS"],
    integration: ["OpenAI", "Vapi", "Google Gemini", "JSON"],
    tooling: ["Vercel", "AWS", "Docker", "Postman", "Git"],
  };

  // 2. A function to filter the project's techStack based on our definitions
  function getTechFor(category: keyof typeof techDefinitions): string[] {
    if (!project || !project.techStack) return [];
    return project.techStack.filter((tech) =>
      techDefinitions[category]?.includes(tech)
    );
  }

  // 3. Create the technology suite object using reactive statements
  // so it recalculates if the project prop ever changes.
  $: technologySuite = {
    language: getTechFor("language"),
    framework: getTechFor("frontend"),
    styling: getTechFor("styling"),
    frontend: getTechFor("frontend"),
    backend: getTechFor("backend"),
    database: getTechFor("database"),
    integration: getTechFor("integration"),
  };
</script>

<!-- Main Header Section -->
<div class="flex flex-col md:flex-row gap-8">
  <!-- Left Column: Title and Carousel -->
  <div class="w-full md:w-3/4 lg:w-4/5">
    <header class="mb-8 mx-16">
      <h1 class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
        {project.title}
      </h1>
      <p class="text-lg text-gray-400 max-w-4xl">{project.description}</p>
    </header>
    <!-- The transition:name directive is handled by Astro on the parent element -->
    <ProjectCarousel media={project.media} />
  </div>

  <!-- Right Column: Technology Suite Sidebar -->
  <aside class="w-full md:w-1/4 lg:w-1/5 mt-8 md:mt-0">
    <h2 class="text-2xl font-bold mb-6 text-slate-300">Technology Suite</h2>
    <div class="space-y-6">
      <!-- Conditional rendering using Svelte's #if block -->
      {#if project.category === "Website"}
        {#if technologySuite.language.length > 0}
          <div>
            <h3 class="font-semibold text-slate-400 mb-3">Language</h3>
            <div class="flex flex-col gap-2">
              {#each technologySuite.language as tech (tech)}
                <TechIconCard {tech} size="medium" />
              {/each}
            </div>
          </div>
        {/if}
        {#if technologySuite.framework.length > 0}
          <div>
            <h3 class="font-semibold text-slate-400 mb-3">Framework</h3>
            <div class="flex flex-col gap-2">
              {#each technologySuite.framework as tech (tech)}
                <TechIconCard {tech} size="medium" />
              {/each}
            </div>
          </div>
        {/if}
        {#if technologySuite.styling.length > 0}
          <div>
            <h3 class="font-semibold text-slate-400 mb-3">Styling</h3>
            <div class="flex flex-col gap-2">
              {#each technologySuite.styling as tech (tech)}
                <TechIconCard {tech} size="medium" />
              {/each}
            </div>
          </div>
        {/if}
      {:else}
        <!-- For Web App, Mobile, and Desktop -->
        {#if technologySuite.frontend.length > 0}
          <div>
            <h3 class="font-semibold text-slate-400 mb-3">Frontend</h3>
            <div class="flex flex-col gap-2">
              {#each technologySuite.frontend as tech (tech)}
                <TechIconCard {tech} size="medium" />
              {/each}
            </div>
          </div>
        {/if}
        {#if technologySuite.backend.length > 0}
          <div>
            <h3 class="font-semibold text-slate-400 mb-3">Backend</h3>
            <div class="flex flex-col gap-2">
              {#each technologySuite.backend as tech (tech)}
                <TechIconCard {tech} size="medium" />
              {/each}
            </div>
          </div>
        {/if}
        {#if technologySuite.database.length > 0}
          <div>
            <h3 class="font-semibold text-slate-400 mb-3">Database</h3>
            <div class="flex flex-col gap-2">
              {#each technologySuite.database as tech (tech)}
                <TechIconCard {tech} size="medium" />
              {/each}
            </div>
          </div>
        {/if}
        {#if technologySuite.integration.length > 0}
          <div>
            <h3 class="font-semibold text-slate-400 mb-3">Integration</h3>
            <div class="flex flex-col gap-2">
              {#each technologySuite.integration as tech (tech)}
                <TechIconCard {tech} size="medium" />
              {/each}
            </div>
          </div>
        {/if}
      {/if}

      <!-- Features Section (Common to all categories) -->
      {#if project.features.length > 0}
        <div>
          <h3 class="font-semibold text-slate-400 mb-3">Features</h3>
          <div class="flex flex-col gap-2">
            {#each project.features as feature (feature)}
              <TechIconCard tech={feature} size="medium" />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </aside>
</div>
