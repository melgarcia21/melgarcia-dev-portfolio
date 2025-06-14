<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let text: string;

	const minSize: number = 0.8;
	const maxSize: number = 2.5;

	const speed: number = 10; 
	const particleColor: string = '#FFFFFF';
	const particleDensity: number = 30;

	// --- Helper functions for particle animation ---
	const randomMove = () => Math.random() * 4 - 2;

	const getRandomParticleSize = () => {
		return minSize + Math.random() * (maxSize - minSize);
	};
</script>

<div
	class="relative inline-flex flex-col items-start justify-center overflow-hidden rounded-md bg-black"
>
	<!-- The main text, using the 'text' prop -->
	<h1 class="relative z-20 sm:text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl">
		{text}
	</h1>

	<!-- Container for the sparkle and gradient effects -->
	<div class="relative inset-0 w-[30rem]" style="height: 10rem">
		<!-- Gradients for the "beam" effect -->
		<div class="flex items-start">
		<div
			class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
		></div>
		<div
			class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
		></div>
		<div
			class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
		></div>
		<div
			class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
		></div>
		</div>

		

		
		<!-- Sparkle particles logic 
		<div class="absolute inset-0 h-full w-full">
			{#each [...Array(particleDensity)] as _, i (`star-${i}`)}
				<Motion
					let:motion
					animate={{
						top: `calc(${Math.random() * 100}% + ${randomMove()}px)`,
						left: `calc(${Math.random() * 100}% + ${randomMove()}px)`,
						opacity: Math.random(),
						scale: [1, 1.1, 0] // Reduced scale effect
					}}
					transition={{
						duration: Math.random() * 8 + speed, // Slightly reduced duration range
						repeat: Infinity,
						ease: 'linear'
					}}
				>
					<span
						use:motion
						class="inline-block"
						style={`
							position: absolute;
							width: ${getRandomParticleSize()}px;
							height: ${getRandomParticleSize()}px;
							background-color: ${particleColor};
							border-radius: 50%;
							top: ${Math.random() * 100}%;
							left: ${Math.random() * 100}%;
						`}
					></span>
				</Motion>
			{/each}
		</div>

		 Radial Gradient mask 
		<div
			class="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
		></div>
		-->
	</div>
</div>