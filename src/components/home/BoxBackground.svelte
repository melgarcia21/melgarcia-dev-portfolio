<script lang="ts">
  import { cn } from "../../lib/utils/cn.ts";
  import { Motion } from "svelte-motion";

  let className: any = "";
  export { className as class };
  export let r = 20;
  export let c = 10;
  export let text = "Hello Amazing Svelte Developer";
  export let showText = true;
  
  let rows = new Array(r).fill(1);
  let cols = new Array(c).fill(1);
</script>

<div
  class="w-full h-full min-h-[300px] relative overflow-hidden flex items-center justify-center {showText ? '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]' : ''}"
>
  <!-- Text content (optional) -->
  {#if showText}
    <div class="w-fit h-fit relative z-[2]">
      <div class="text-xl md:text-3xl capitalize font-bold">{text}</div>
    </div>
  {/if}
  
  <!-- Background tiles -->
  <div class="absolute top-0 left-0 h-full w-full">
    <div class={cn("relative z-0 flex w-full h-full justify-center", className)}>
      {#each rows as _, i}
        <Motion let:motion>
          <div
            class="md:w-12 sm:h-12 w-9 h-9 dark:border-neutral-900 border-neutral-200"
            use:motion
          >
            {#each cols as _, j}
              <Motion
                whileHover={{
                  backgroundColor: `var(--tile)`,
                  transition: { duration: 0 },
                }}
                animate={{
                  transition: { duration: 2 },
                }}
                let:motion
              >
                <div
                  class="md:w-12 sm:h-12 w-9 h-9 border-r border-t last:border-b {i === 0 && j >= 0 ? 'border-l' : ''} dark:border-neutral-900 border-neutral-200 relative"
                  use:motion
                ></div>
              </Motion>
            {/each}
          </div>
        </Motion>
      {/each}
    </div>
  </div>
</div>