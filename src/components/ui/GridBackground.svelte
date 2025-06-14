
<!-- 
<script lang="ts">
	import { cn } from '../../lib/utils/cn';
	import { Motion } from 'svelte-motion';
	let className: string = '';
	export { className as class };
	export let r = 30;
	export let c = 30;
	let numTiles = r * c;
	let tiles = new Array(numTiles).fill(1);
	
	// Calculate tile size based on container
	$: tileWidth = `calc(100% / ${c})`;
	$: tileHeight = `calc(100% / ${r})`;
</script>

<div class={cn('absolute inset-0 flex flex-wrap overflow-hidden', className)}>
	{#each tiles as _, i}
		<Motion
			let:motion
			whileHover={{
				backgroundColor: `var(--tile)`,
				transition: { duration: 0 }
			}}
			animate={{
				transition: { duration: 2 }
			}}
		>
			<div
				use:motion
				class="border-b border-r dark:border-neutral-900 border-neutral-200 box-border"
				style="width: {tileWidth}; height: {tileHeight};"
			/>
		</Motion>
	{/each}
</div>
 -->