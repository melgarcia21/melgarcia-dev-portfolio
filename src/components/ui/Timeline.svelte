<!-- src/components/ui/Timeline.svelte -->
<script lang="ts">
  interface Item {
    title: string;
    period: string;
    subtitle?: string;
    description?: string;
    [key: string]: any;
  }

  export let title: string;
  export let iconName: 'briefcase' | 'book';
  export let items: Item[];
</script>

<section class="mb-8">
  <!-- Section Header -->
  <div class="title-wrapper">
    <div class="icon-box">
      {#if iconName === 'briefcase'}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.075a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.625a2.25 2.25 0 012.25-2.25h15A2.25 2.25 0 0121.75 8.625v4.075m-18 0a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25m-18 0V6.375a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0118 11.25h-1.5a2.25 2.25 0 01-2.25-2.25V6.375m-3.75 5.25v-1.5m-3.75 1.5v-1.5" />
        </svg>
      {:else if iconName === 'book'}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      {/if}
    </div>
    <h3 class="text-2xl font-bold text-white">{title}</h3>
  </div>

  <!-- Timeline List -->
  <ol class="timeline-list">
    {#each items as item, i (i)}
      <li class="timeline-item">
        <h4 class="timeline-title text-white font-semibold text-base leading-tight mb-2">{item.title}</h4>
        <p class="timeline-period text-sky-400 text-sm mb-3">{item.period}</p>
        {#if item.subtitle}
          <p class="timeline-subtitle text-slate-300 font-light leading-relaxed">{item.subtitle}</p>
        {/if}
        {#if item.description}
          <p class="timeline-description text-slate-400 font-light leading-relaxed mt-1">{item.description}</p>
        {/if}
      </li>
    {/each}
  </ol>
</section>

<style>
  /* This wrapper holds the icon and title, and is key for the first connector line */
  .title-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 30px; /* This space is for the connector line to extend into */
  }

  /* This pseudo-element creates the line from the icon box to the first dot's vertical line */
  .title-wrapper::after {
    content: '';
    position: absolute;
    /* Start from the bottom of the wrapper */
    bottom: 0;
    /* This 'left' value is critical: it must align with the main timeline's line */
    left: 20px;
    width: 1px;
    /* Height is the same as the margin-bottom, creating a seamless connection */
    height: 30px;
    background: hsl(0, 0%, 22%);
  }

  .icon-box {
    /* New styling for the 3D "button" look from the image */
    background: linear-gradient(to bottom, hsl(240, 2%, 18%), hsl(240, 2%, 12%));
    border: 1px solid hsl(0, 0%, 25%);
    border-radius: 12px;
    padding: 12px;
    color: #38bdf8; /* sky-400 */
    box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0.5), 0 4px 10px hsla(0, 0%, 0%, 0.3);
    position: relative;
    z-index: 10; /* Ensures the box is "on top" of the line */
  }

  .timeline-list {
    margin-left: 55px; /* Provides space for the timeline graphics */
  }

  .timeline-item {
    position: relative;
  }

  .timeline-item:not(:last-child) {
    /* Use padding so the ::before element's height calculation is correct */
    padding-bottom: 25px; 
  }

  /* This is the vertical line connecting the dots */
  .timeline-item:not(:last-child)::before {
    content: '';
    position: absolute;
    /* Start just below the dot's center */
    top: 15px; 
    /* Position it to be perfectly centered with the dot */
    left: -35px;
    width: 1px;
    /* Height extends down to the bottom of the item's padding */
    height: 100%;
    background: hsl(0, 0%, 22%);
  }

  /* This creates the timeline dot, composed of an inner circle and an outer glow */
  .timeline-item::after {
    content: '';
    position: absolute;
    top: 5px;
    /* Position the dot so the line passes through its exact center */
    left: -39.5px; 
    height: 9px;
    width: 9px;
    /* The inner, solid part of the dot with a gradient */
    background: linear-gradient(to bottom, #38bdf8, #0ea5e9);
    border-radius: 50%;
    /* The outer, semi-transparent circle created with a box-shadow */
    box-shadow: 0 0 0 7px hsla(220, 23%, 25%, 0.5);
    z-index: 5; /* Puts the dot on top of the line */
  }
</style>