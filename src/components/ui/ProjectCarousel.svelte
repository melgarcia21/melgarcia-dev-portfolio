<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  type MediaItem = { type: "image" | "video"; src: string };
  export let media: MediaItem[] = [];

  // --- FIX: Create a reactive, sorted media array ---
  // This ensures the video is always last, without modifying the original prop.
  let sortedMedia: MediaItem[] = [];
  $: {
    const images = media.filter((item) => item.type === "image");
    const videos = media.filter((item) => item.type === "video");
    sortedMedia = [...images, ...videos];
  }

  let currentIndex = 0;
  let isPlaying = true;
  let autoplayInterval: number;
  let videoRef: HTMLVideoElement;

  // --- Navigation Functions ---
  const goToSlide = (index: number) => {
    // FIX: Use sortedMedia.length
    if (index < 0) {
      currentIndex = sortedMedia.length - 1;
    } else if (index >= sortedMedia.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    // Autoplay should pause when the user interacts with the carousel
    if (isPlaying) {
      resetAutoplay();
    }
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // --- Autoplay Logic ---
  const startAutoplay = () => {
    if (!isPlaying) return;
    autoplayInterval = window.setInterval(nextSlide, 5000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  const resetAutoplay = () => {
    stopAutoplay();
    if (isPlaying) {
      startAutoplay();
    }
  };

  const togglePlay = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  };

  onMount(() => {
    startAutoplay();
  });

  onDestroy(() => {
    stopAutoplay();
  });

  $: if (videoRef && sortedMedia[currentIndex]?.type === "video") {
    videoRef.currentTime = 0;
    videoRef.play().catch(console.error);
  }
</script>

<div class="w-full flex flex-col items-center gap-4">
  <div class="w-full flex items-center justify-center gap-x-4">

    <button
      on:click={prevSlide}
      class="hidden md:block text-slate-500 hover:text-white transition-colors p-2"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        /></svg
      >
    </button>

    <!-- Main Carousel Viewport -->
    <div
      class="relative w-full md:w-3/4 flex-grow aspect-video rounded-lg shadow-lg border border-gray-800 overflow-hidden"
      aria-label="Project media carousel"
    >
      <div class="w-full h-full">
        <!-- FIX: Iterate over sortedMedia -->
        {#each sortedMedia as item, i}
          <div
            class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
            class:opacity-100={currentIndex === i}
            class:opacity-0={currentIndex !== i}
          >
            {#if item.type === "image"}
              <img
                src={item.src}
                alt={`Project image ${i + 1}`}
                class="w-full h-full object-cover"
              />
            {:else if item.type === "video"}
              <video
                bind:this={videoRef}
                src={item.src}
                class="w-full h-full object-cover"
                muted
                loop
                playsinline
                preload="metadata"
              ></video>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <!-- Right Arrow (Desktop Only) -->
    <button
      on:click={nextSlide}
      class="hidden md:block text-slate-500 hover:text-white transition-colors p-2"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        /></svg
      >
    </button>
  </div>

  <!-- 
    FIX: New external controls container for the bottom section.
    Handles both mobile layout and the centered desktop controls.
  -->
  <div
    class="w-full max-w-lg flex items-center justify-between md:justify-center gap-4 px-2"
  >
    <!-- Left Arrow (Mobile Only) -->
    <button
      on:click={prevSlide}
      class="md:hidden text-slate-500 hover:text-white transition-colors p-2"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        /></svg
      >
    </button>

    <!-- Center Controls: Pause Button and Dots -->
    <div class="flex items-center gap-4">
      <button
        on:click={togglePlay}
        class="text-slate-500 hover:text-white transition-colors"
        aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {#if isPlaying}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
            ><path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm5 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z"
              clip-rule="evenodd"
            /></svg
          >
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
            ><path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            /></svg
          >
        {/if}
      </button>

      <div class="flex items-center space-x-2">
        <!-- FIX: Iterate over sortedMedia -->
        {#each sortedMedia as _, i}
          <button
            on:click={() => goToSlide(i)}
            class="h-2 rounded-full transition-all duration-300"
            class:w-6={currentIndex === i}
            class:w-2={currentIndex !== i}
            class:bg-blue-500={currentIndex === i}
            class:bg-slate-600={currentIndex !== i}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        {/each}
      </div>
    </div>

    <!-- Right Arrow (Mobile Only) -->
    <button
      on:click={nextSlide}
      class="md:hidden text-slate-500 hover:text-white transition-colors p-2"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        /></svg
      >
    </button>
  </div>
</div>
