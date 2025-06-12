<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let text: string;
	export let speed: number = 2;
	export let particleCount: number = 40;
	export let particleColor: string = '#FFFFFF';
	export let minSize: number = 0.5;
	export let maxSize: number = 1.2;
	export let className: string | undefined = undefined;

	const getRandomSize = () => minSize + Math.random() * (maxSize - minSize);
</script>

<span class="root {className || ''}">
	{text}
	<span class="sparkle-container" aria-hidden="true">
		{#each [...Array(particleCount)] as _, i}
			<Motion
				let:motion
				initial={{
					top: `${Math.random() * 100}%`,
					left: `${Math.random() * 100}%`
				}}
				animate={{
					top: `calc(${Math.random() * 100}% + ${Math.random() * 4 - 2}px)`,
					left: `calc(${Math.random() * 100}% + ${Math.random() * 4 - 2}px)`,
					opacity: [0, 1, 0],
					scale: [1, 1.2, 0]
				}}
				transition={{
					duration: Math.random() * 2 + speed,
					repeat: Infinity,
					ease: 'linear'
				}}
			>
				<span
					use:motion
					class="particle"
					style="background-color: {particleColor}; 
                           width: {getRandomSize()}px; 
                           height: {getRandomSize()}px;"
				/>
			</Motion>
		{/each}
	</span>
</span>

<style>
	.root {
		position: relative;
		display: inline-block;
	}
	.sparkle-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		overflow: visible;
	}
	.particle {
		position: absolute;
		border-radius: 50%;
	}
</style>