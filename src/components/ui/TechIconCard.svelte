<!-- src\components\ui\TechIconCard.svelte -->
<script lang="ts">

  export let tech: string;

  export let size: 'small' | 'medium' = 'small';
  
  const sizeClasses = {
    small: {
      wrapper: 'px-2 py-1 text-xs',
      icon: 'w-3.5 h-3.5',
    },
    medium: {
      wrapper: 'px-3 py-1.5 text-sm',
      icon: 'w-5 h-5',
    },
  };

  const iconPath = `/icons/${tech.replace(/\s+/g, '')}.svg`;

  const handleIconError = (e: Event) => {
    const target = e.currentTarget as HTMLImageElement;
    target.style.display = 'none';
  };
</script>

<div
  class="
    flex items-center gap-2 font-medium 
    bg-slate-900/5 dark:bg-slate-50/5 
    border border-slate-900/10 dark:border-slate-50/10 
    text-slate-700 dark:text-slate-300
    rounded-md
    {sizeClasses[size].wrapper}
  "
>

  <img
    src={iconPath}
    alt="{tech} icon"
    class={sizeClasses[size].icon}
    loading="lazy"
    on:error={handleIconError}
  />

  <span class="font-inter font-bold">{tech}</span>
</div>