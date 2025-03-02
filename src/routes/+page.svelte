<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		// Apply fade-in animation after component mounts
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>FlexLayers Theme Skeleton</title>
</svelte:head>

<div class="dark">
	<main class="min-h-screen bg-[#1F2124] flex items-center justify-center p-6 font-sans">
		<div
			class={`w-full max-w-4xl transform transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
		>
			<div
				class="flex flex-col lg:flex-row overflow-hidden rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] border border-zinc-700/10"
			>
				<!-- Left content panel - darker than main background -->
				<div class="p-8 lg:p-12 bg-[#18191C] lg:w-3/5">
					<div class="mb-10">
						<div
							class="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm bg-gradient-to-r from-green-900/40 to-green-900/20 text-green-400 mb-4 border border-green-800/20"
						>
							<svg
								class="w-4 h-4 mr-2"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
							Start Building
						</div>
						<p class="text-zinc-300 leading-relaxed">
							Your SvelteKit project is set up with Tailwind CSS and testing. Start building your
							theme with modern tooling and best practices.
						</p>
					</div>

					<div class="mb-10">
						<h2 class="text-xl font-semibold text-white mb-4">Development Guide:</h2>
						<ul class="space-y-4 text-zinc-300">
							<li class="flex items-start">
								<span class="text-[#FF6D2E] mr-2.5 mt-0.5">
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
										></path>
										<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
									</svg>
								</span>
								<span
								>Create pages and layouts in <code
									class="text-sm font-mono text-zinc-200 bg-[#12131A] px-2 py-0.5 rounded-md border border-zinc-700/30 shadow-sm shadow-black/20">src/routes</code
								></span
								>
							</li>
							<li class="flex items-start">
								<span class="text-[#FF6D2E] mr-2.5 mt-0.5">
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
									</svg>
								</span>
								<span
								>Add shared components to <code
									class="text-sm font-mono text-zinc-200 bg-[#12131A] px-2 py-0.5 rounded-md border border-zinc-700/30 shadow-sm shadow-black/20">src/lib</code
								></span
								>
							</li>
							<li class="flex items-start">
								<span class="text-[#FF6D2E] mr-2.5 mt-0.5">
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
										<circle cx="8.5" cy="8.5" r="1.5"></circle>
										<polyline points="21 15 16 10 5 21"></polyline>
									</svg>
								</span>
								<span
								>Develop and showcase components with <code
									class="text-sm font-mono text-zinc-200 bg-[#12131A] px-2 py-0.5 rounded-md border border-zinc-700/30 shadow-sm shadow-black/20">npm run storybook</code
								></span
								>
							</li>
							<li class="flex items-start">
								<span class="text-[#FF6D2E] mr-2.5 mt-0.5">
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polyline points="16 18 22 12 16 6"></polyline>
										<polyline points="8 6 2 12 8 18"></polyline>
									</svg>
								</span>
								<span
								>Customize your theme in <code
									class="text-sm font-mono text-zinc-200 bg-[#12131A] px-2 py-0.5 rounded-md border border-zinc-700/30 shadow-sm shadow-black/20"
								>tailwind.config.js</code
								></span
								>
							</li>
							<li class="flex items-start">
								<span class="text-[#FF6D2E] mr-2.5 mt-0.5">
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
										<line x1="9.69" y1="8" x2="21.17" y2="8"></line>
										<line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
										<line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
										<line x1="14.31" y1="16" x2="2.83" y2="16"></line>
										<line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
									</svg>
								</span>
								<span
								>Test with Vitest using <code
									class="text-sm font-mono text-zinc-200 bg-[#12131A] px-2 py-0.5 rounded-md border border-zinc-700/30 shadow-sm shadow-black/20">npm run test</code
								></span
								>
							</li>
							<li class="flex items-start">
								<span class="text-[#FF6D2E] mr-2.5 mt-0.5">
									<svg
										class="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
									</svg>
								</span>
								<span
								>Run the dev server with <code
									class="text-sm font-mono text-zinc-200 bg-[#12131A] px-2 py-0.5 rounded-md border border-zinc-700/30 shadow-sm shadow-black/20">npm run dev</code
								></span
								>
							</li>
						</ul>
					</div>

					<div class="mb-6">
						<h2 class="text-xl font-semibold text-white mb-4">Documentation:</h2>
						<ul class="text-zinc-300 space-y-3">
							<li>
								<a
									href="https://kit.svelte.dev/docs"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center text-[#FF8F5E] hover:text-[#FF6D2E] transition-colors duration-200 hover:underline"
								>
									<svg
										class="w-4 h-4 mr-2"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line x1="10" y1="14" x2="21" y2="3"></line>
									</svg>
									SvelteKit Documentation
								</a>
							</li>
							<li>
								<a
									href="https://tailwindcss.com/docs"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center text-[#FF8F5E] hover:text-[#FF6D2E] transition-colors duration-200 hover:underline"
								>
									<svg
										class="w-4 h-4 mr-2"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line x1="10" y1="14" x2="21" y2="3"></line>
									</svg>
									Tailwind CSS Documentation
								</a>
							</li>
							<li>
								<a
									href="https://storybook.js.org/docs"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center text-[#FF8F5E] hover:text-[#FF6D2E] transition-colors duration-200 hover:underline"
								>
									<svg
										class="w-4 h-4 mr-2"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line x1="10" y1="14" x2="21" y2="3"></line>
									</svg>
									Storybook Documentation
								</a>
							</li>
						</ul>
					</div>
				</div>

				<!-- Right info panel - darkest with gradient -->
				<div
					class="bg-gradient-to-br from-[#15161A] via-[#13141A] to-[#111214] lg:w-2/5 p-8 lg:p-12 flex items-center justify-center text-white border-l border-zinc-700/20"
				>
					<div class="text-center">
						<h3 class="text-2xl font-bold mb-3 tracking-wide">FlexLayers</h3>
						<p class="text-lg font-medium mb-8">Theme Skeleton</p>
						<div class="text-sm mb-8">
							<p class="text-[#FF8F5E] font-medium">Modern SvelteKit themes for developers and agencies</p>
						</div>
						<div class="text-sm text-zinc-400 space-y-1.5">
							<p class="flex items-center justify-center">
								<span class="w-3 h-3 rounded-full bg-[#FF3E00] mr-2"></span>
								Svelte v4.2.19
							</p>
							<p class="flex items-center justify-center">
								<span class="w-3 h-3 rounded-full bg-[#FF3E00] opacity-80 mr-2"></span>
								SvelteKit v2.17.3
							</p>
							<p class="flex items-center justify-center">
								<span class="w-3 h-3 rounded-full bg-[#38BDF8] mr-2"></span>
								Tailwind CSS v4.0.9
							</p>
							<p class="flex items-center justify-center">
								<span class="w-3 h-3 rounded-full bg-[#FF4785] mr-2"></span>
								Storybook v8.6.3
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 text-center text-sm text-zinc-400">
				<div class="flex justify-center gap-6">
					<a
						href="https://github.com/flexlayers/theme-skeleton"
						class="inline-flex items-center text-zinc-400 hover:text-[#FF6D2E] transition-colors duration-200 hover:underline"
					>
						<svg
							class="w-4 h-4 mr-1.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							></path>
						</svg>
						GitHub
					</a>
					<a
						href="https://flexlayers.com"
						class="inline-flex items-center text-zinc-400 hover:text-[#FF6D2E] transition-colors duration-200 hover:underline"
					>
						<svg
							class="w-4 h-4 mr-1.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="2" y1="12" x2="22" y2="12"></line>
							<path
								d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
							></path>
						</svg>
						Website
					</a>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
    :global(body) {
        margin: 0;
        font-family:
                system-ui,
                -apple-system,
                BlinkMacSystemFont,
                'Segoe UI',
                Roboto,
                'Helvetica Neue',
                Arial,
                sans-serif;
    }
</style>