<script lang="ts">
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';

	export let role: string[][] = [
		['Full Stack', 'green', '6000'],
		['Frontend', 'blue', '3000'],
		['Backend', 'red', '3000']
	];

	export let defaultInterval: number = 2000;
	export let typingSpeed: number = 100;
	export let deletingSpeed: number = 50;
	export let pauseBeforeTyping: number = 500;
	export let className: string | undefined = undefined;

	let displayedText = '';
	let currentWordIndex = 0;
	let currentColor = role[0][1];

	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	onMount(() => {
		let isMounted = true;

		const animateWords = async () => {
			while (isMounted) {
				const item = role[currentWordIndex];
				const text = item[0];
				const color = item[1];
				const duration = item[2] ? parseInt(item[2], 10) : defaultInterval;

				currentColor = color;

				for (let i = 0; i < text.length; i++) {
					if (!isMounted) return;
					displayedText = text.substring(0, i + 1);
					await sleep(typingSpeed);
				}

				await sleep(duration);

				for (let i = text.length; i > 0; i--) {
					if (!isMounted) return;
					displayedText = text.substring(0, i - 1);
					await sleep(deletingSpeed);
				}

				currentWordIndex = (currentWordIndex + 1) % role.length;
				await sleep(pauseBeforeTyping);
			}
		};

		animateWords();

		return () => {
			isMounted = false;
		};
	});
</script>

<p
	class="jetbrains-mono text-3xl mb-6 {className || ''}"
	style="color: {currentColor}; transition: color 0.3s ease;"
>
	<span class="inline-flex items-baseline">
		<span class="relative">
			<span>{displayedText}</span>
		</span>

		<Motion
			let:motion
			layout
			transition={{ type: 'spring', stiffness: 400, damping: 30 }}
		>
			<span use:motion> Developer</span>
		</Motion>
	</span>
</p>

<style>
	.jetbrains-mono {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 700;
	}
	.relative {
		position: relative;
		min-width: 1px;
	}
</style>