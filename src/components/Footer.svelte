<script lang="ts">
  import { personalData } from '../data/personal';
  import GridBackground from './ui/GridBackground.svelte';
  const year = new Date().getFullYear();
</script>



<footer class="text-center my-8 py-8 border-t border-gray-800">

    <GridBackground/>

    <div class="flex justify-center gap-4 mb-4">
        {#each personalData.contact.social as socialLink}
            <a href={socialLink.url} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
                {socialLink.name}
            </a>
        {/each}
    </div>
    <p class="text-gray-500 text-sm">
        © 2024 Mel Garcia. All Rights Reserved.
    </p>
</footer>