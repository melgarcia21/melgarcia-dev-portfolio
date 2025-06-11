<script lang="ts">
  import { personalData } from '../data/personal';
  const year = new Date().getFullYear();
</script>

<footer class="text-center py-8 mt-20 border-t border-gray-800">
    <div class="flex justify-center gap-4 mb-4">
        {#each personalData.contact.social as socialLink}
            <a href={socialLink.url} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
                {socialLink.name}
            </a>
        {/each}
    </div>
    <p class="text-gray-500 text-sm">
        © {year} {personalData.name}. All Rights Reserved.
    </p>
</footer>