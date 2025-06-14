<script lang="ts">
	let isClicked = false;

	const handleClick = () => {
		isClicked = true;
		setTimeout(() => {
			isClicked = false;
		}, 1000);
	};
</script>

<a
	href="/pdfs/Mel-Garcia_Resume.pdf"
	download="Mel-Garcia_Resume.pdf"
	class="no-underline"
	aria-label="Download Resume"
	on:click={handleClick}
>
	<button
		class="group relative inline-block m-4 cursor-pointer rounded-full bg-slate-800 p-px text-sm font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-100 ease-in-out active:scale-95"
	>
		<!-- Effect 1: Dotted background from your second code snippet -->
		<span class="absolute inset-0 overflow-hidden rounded-full">
			<span
				class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			></span>
		</span>

		<div
			class="relative z-10 flex items-center space-x-2 rounded-full px-6 py-2 ring-1 ring-white/10 transition-all duration-200 ease-in-out"
			class:bg-zinc-950={!isClicked}
			class:bg-white={isClicked}
			class:text-white={!isClicked}
			class:text-black={isClicked}
		>
			<span>Download Resume</span>
			<!-- Fixed: Removed 'hidden' class to show the icon -->
			<img 
				src="/icons/PDF-Icon.svg" 
				alt="PDF Resume Download" 
				class="w-4 h-4 transition-all duration-1000 ease-in-out"
				class:invert={isClicked}
			/>
		</div>

		<!-- Effect 2: Glowing bottom line on hover -->
		<span
			class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
		></span>
	</button>
</a>