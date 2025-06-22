<script lang="ts">
  import { onMount } from 'svelte';
  export let currentPath: string;

  const navLinks = [
    { href: '/', text: 'Main' },
    { href: '/projects', text: 'Projects' },
    { href: '/about', text: 'About' },
  ];

  let visible = true;
  let lastScrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        visible = true;
      } else {
        visible = false;
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
  class:translate-y-0={visible}
  class:-translate-y-full={!visible}
>
  <div class="container mx-auto max-w-5xl bg-black/30 backdrop-blur-md p-4">
    <div class="flex justify-center items-center gap-6 md:gap-10">
      {#each navLinks as link}
        <a
          href={link.href}
          class="font-jetbrains-mono text-lg transition-colors duration-200"
          class:text-white={currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href))}
          class:text-gray-400={!(currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href)))}
          class:hover:text-white={!(currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href)))}
        >
          {link.text}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .font-jetbrains-mono {
    font-family: 'JetBrains Mono', monospace;
  }
</style>