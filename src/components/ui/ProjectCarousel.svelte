<!-- src\components\ui\ProjectCarousel.svelte -->

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';


  type MediaItem = { type: 'image' | 'video'; src: string };
  export let media: MediaItem[] = [];

  let currentIndex = 0;
  let isPlaying = true;
  let autoplayInterval: number;
  let videoRef: HTMLVideoElement;

  // --- Navigation Functions ---
  const goToSlide = (index: number) => {
    if (index < 0) {
      currentIndex = media.length - 1;
    } else if (index >= media.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    resetAutoplay();
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // --- Autoplay Logic ---
  const startAutoplay = () => {
    if (!isPlaying) return;
    autoplayInterval = window.setInterval(nextSlide, 5000); // Slide every 5 seconds
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  const togglePlay = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  };

  // Start autoplay when the component is mounted
  onMount(() => {
    startAutoplay();
  });

  // Clean up the interval when the component is destroyed
  onDestroy(() => {
    stopAutoplay();
  });

  // When the slide changes, if it's a video, reset and play it.
  $: if (videoRef && media[currentIndex]?.type === 'video') {
    videoRef.currentTime = 0;
    videoRef.play().catch(console.error);
  }
</script>

<!-- Main Carousel Container -->
<div
  class="relative w-full md:w-3/4 mx-auto aspect-video rounded-lg shadow-lg mb-12 border border-gray-800 overflow-hidden"
  aria-label="Project media carousel"
>
  <!-- Slides Container -->
  <div class="w-full h-full">
    {#each media as item, i}
      <div
        class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
        class:opacity-100={currentIndex === i}
        class:opacity-0={currentIndex !== i}
      >
        {#if item.type === 'image'}
          <img src={item.src} alt={`Project image ${i + 1}`} class="w-full h-full object-cover" />
        {:else if item.type === 'video'}
          <video bind:this={videoRef} src={item.src} class="w-full h-full object-cover" muted loop playsinline preload="metadata"></video>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Controls Overlay -->
  <div class="absolute inset-0 w-full h-full flex flex-col justify-between p-4 bg-black/10">
    <!-- Top Spacer -->
    <div></div>
    
    <!-- Middle: Prev/Next Arrows -->
    <div class="flex justify-between items-center">
      <button on:click={prevSlide} class="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors" aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button on:click={nextSlide} class="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors" aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>

    <!-- Bottom: Pause Button and Dots -->
    <div class="flex justify-between items-center">
      <button on:click={togglePlay} class="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors" aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}>
        {#if isPlaying}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm5 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>
        {/if}
      </button>
      <div class="flex items-center space-x-2">
        {#each media as _, i}
          <button
            on:click={() => goToSlide(i)}
            class="h-2 w-2 rounded-full transition-colors {currentIndex === i ? 'bg-white' : 'bg-white/50'}"
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        {/each}
      </div>
       <div class="w-9 h-9"></div> <!-- Spacer to balance the pause button -->
    </div>
  </div>
</div>