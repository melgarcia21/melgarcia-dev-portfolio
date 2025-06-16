<script>
  import { personal } from '../../data/personal';  // Fixed the import path
</script>

<section class="py-16">
  <h2 class="text-3xl font-bold text-center mb-12 text-accent-green">Skills & Technologies</h2>
  <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-center">
    {#each Object.entries(personal.skills) as [category, skillsList]}
      <div class="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
        <h3 class="text-xl font-bold text-accent-blue mb-4">{category}</h3>
        <ul class="space-y-2">
          {#each skillsList as skill}
            <li>{skill}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>