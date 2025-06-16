<script lang="ts">
	import Sparkles from '../ui/Sparkles.svelte';
	import TextFlip from '../ui/TextFlip.svelte';
	import DownloadResume from '../ui/DownloadResume.svelte';
	// import GridBackground from './ui/GridBackground.svelte';

	const name = 'Mel Garcia';

	const roles = [
		['Full Stack', '#4CAF50', '6000'],
		['Frontend', '#2196F3', '3000'],
		['Backend', '#F44336', '3000']
	];

	const bio =
		'Dev specializing in building websites, web applications, and mobile apps using modern frameworks and technologies.';
</script>

<section class="relative fade-in">


	<div class="relative z-10 mx-auto px-4">
		<div class="flex flex-col-reverse items-center md:flex-row md:items-start">
			<!-- Left Side: Text Information -->
			<div class="w-full md:w-3/8 mt-6 md:mt-0 md:pr-6 md:border-r md:border-gray-700">
				<div class="text-left">
					<Sparkles text={name} />
					<TextFlip role={roles} />

					<p class="text-gray-300">{bio}</p>

					<div class="mt-6">
						<DownloadResume />
					</div>
				</div>
			</div>

			<!-- Right Side: Image -->
			<div class="w-full md:w-5/8 md:pl-6">
				<div class="flex justify-center">
					<img
						src="/images/portrait.png"
						alt="Mel Garcia Profile"
						class="w-3/4 md:w-auto md:h-auto"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

