<script>
  import SocialButton from './ui/LinkButton.svelte';  
  
  import { personal } from '../data/personal';

  const links = personal.links;

</script>

<div class="social-media-container">
  <!-- Desktop Layout: Single row with flex -->
  <div class="hidden md:flex gap-1 w-full">
    {#each links as link}
      <SocialButton
        platform={link.platform}
        url={link.url}
        icon={link.icon}
      />
    {/each}
  </div>
  
  <!-- Mobile Layout: 2x2 Grid -->
  <div class="grid grid-cols-2 gap-2 md:hidden">
    {#each links as link}
      <SocialButton
        platform={link.platform}
        url={link.url}
        icon={link.icon}
      />
    {/each}
  </div>
</div>

<style>
  .social-media-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>