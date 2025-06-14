<script lang="ts">
  export let label = '';
  export let link = '';
  export let icon = '';
  
  let isHovered = false;
  
  function handleClick() {
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else {
      window.open(link, '_blank');
    }
  }
</script>

<button
  class="social-btn group relative overflow-hidden bg-black text-white border-1 border-black rounded-lg px-4 py-3 font-medium transition-all duration-300 ease-in-out hover:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1"
  class:hovered={isHovered}
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
  on:click={handleClick}
>
  <!-- Normal state content -->
  <div class="flex items-center justify-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
    {#if icon}
      <img src="/icons/{icon}" alt="" class="w-5 h-5" />
    {/if}
    <span>{label}</span>
  </div>
  
  <!-- Hover state content -->
  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100 px-4">
    <span class="jetbrains-mono truncate">{link}</span>
  </div>
</button>

<style>
  /* Import JetBrains Mono font */
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
  
  .social-btn {
    min-height: 48px;
  }
  
  /* Custom JetBrains Mono class */
  .jetbrains-mono {
    font-family: 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace;
    font-weight: 100;
    font-size: 0.750rem; /* 14px */
  }
  
  /* Desktop hover width animation */
  @media (min-width: 768px) {
    .social-btn {
      flex: 0.8;
      transition: all 0.3s ease-in-out;
    }
    
    .social-btn:hover {
      flex: 1.6;
    }
  }
</style>