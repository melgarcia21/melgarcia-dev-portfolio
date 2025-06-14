<script>
  import SocialButton from './ui/LinkButton.svelte';
  
  const socialLinks = [
    {
      label: 'Gmail',
      link: 'mailto:melgarcia.dev@gmail.com',
      icon: 'Gmail.svg'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/melgarcia21',
      icon: 'GitHub-White.svg'
    },
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/mel-garcia-a26332207/',
      icon: 'LinkedIn.svg'
    },
    {
      label: 'CodePen',
      link: 'https://codepen.io/mel-garcia-2025',
      icon: 'CodePen-White.svg'
    }
  ];
</script>

<div class="social-media-container">
  <!-- Desktop Layout: Single row with flex -->
  <div class="hidden md:flex gap-1 w-full">
    {#each socialLinks as social}
      <SocialButton 
        label={social.label}
        link={social.link}
        icon={social.icon}
      />
    {/each}
  </div>
  
  <!-- Mobile Layout: 2x2 Grid -->
  <div class="grid grid-cols-2 gap-2 md:hidden">
    {#each socialLinks as social}
      <SocialButton 
        label={social.label}
        link={social.link}
        icon={social.icon}
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