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
	<main class="min-h-screen bg-zinc-900 flex items-center justify-center p-6 font-sans">
		<div class={`w-full max-w-4xl transform transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
			<div class="flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-lg">
				<!-- Left content panel -->
				<div class="p-8 lg:p-12 bg-zinc-800 lg:w-3/5">
					<div class="mb-6">
						<h1 class="text-2xl font-medium text-white mb-2">FlexLayers</h1>
						<p class="text-zinc-400">SvelteKit Theme Skeleton</p>
					</div>

					<div class="mb-8">
						<div class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-emerald-900/30 text-emerald-400 mb-4">
							<svg class="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
							Ready to develop
						</div>
						<p class="text-zinc-300">Your SvelteKit project is set up with Tailwind CSS and testing. Start building your theme with modern tooling and best practices.</p>
					</div>

					<div class="mb-8">
						<h2 class="text-lg font-medium text-white mb-3">Development Guide:</h2>
						<ul class="space-y-3 text-zinc-300">
							<li class="flex items-start">
								<span class="text-emerald-500 mr-2">
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
										<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
									</svg>
								</span>
								<span>Create pages and layouts in <code class="text-sm font-mono bg-zinc-700 px-1.5 py-0.5 rounded">src/routes</code></span>
							</li>
							<li class="flex items-start">
								<span class="text-emerald-500 mr-2">
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
									</svg>
								</span>
								<span>Add shared components to <code class="text-sm font-mono bg-zinc-700 px-1.5 py-0.5 rounded">src/lib</code></span>
							</li>
							<li class="flex items-start">
								<span class="text-emerald-500 mr-2">
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="16 18 22 12 16 6"></polyline>
										<polyline points="8 6 2 12 8 18"></polyline>
									</svg>
								</span>
								<span>Customize your theme in <code class="text-sm font-mono bg-zinc-700 px-1.5 py-0.5 rounded">tailwind.config.js</code></span>
							</li>
							<li class="flex items-start">
								<span class="text-emerald-500 mr-2">
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10"></circle>
										<line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
										<line x1="9.69" y1="8" x2="21.17" y2="8"></line>
										<line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
										<line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
										<line x1="14.31" y1="16" x2="2.83" y2="16"></line>
										<line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
									</svg>
								</span>
								<span>Test with Vitest using <code class="text-sm font-mono bg-zinc-700 px-1.5 py-0.5 rounded">npm run test</code></span>
							</li>
							<li class="flex items-start">
								<span class="text-emerald-500 mr-2">
									<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
									</svg>
								</span>
								<span>Run the dev server with <code class="text-sm font-mono bg-zinc-700 px-1.5 py-0.5 rounded">npm run dev</code></span>
							</li>
						</ul>
					</div>

					<div class="flex flex-wrap gap-3">
						<a href="https://kit.svelte.dev/docs" target="_blank" rel="noopener noreferrer"
							 class="inline-flex items-center px-4 py-2 border border-transparent bg-zinc-600 hover:bg-zinc-700 text-white text-sm font-medium rounded-md transition">
							SvelteKit Docs
							<svg class="ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
								<polyline points="15 3 21 3 21 9"></polyline>
								<line x1="10" y1="14" x2="21" y2="3"></line>
							</svg>
						</a>
						<a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer"
							 class="inline-flex items-center px-4 py-2 border border-zinc-600 text-zinc-300 bg-zinc-800 hover:bg-zinc-700 text-sm font-medium rounded-md transition">
							Tailwind CSS Docs
							<svg class="ml-1.5 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
								<polyline points="15 3 21 3 21 9"></polyline>
								<line x1="10" y1="14" x2="21" y2="3"></line>
							</svg>
						</a>
					</div>
				</div>

				<!-- Right info panel with simplified gradient -->
				<div class="bg-zinc-700 lg:w-2/5 p-8 lg:p-12 flex items-center justify-center text-white">
					<div class="text-center">
						<h3 class="text-2xl font-bold mb-3">FlexLayers</h3>
						<p class="text-lg font-medium mb-6">Theme Skeleton</p>
						<div class="text-sm opacity-90 mb-6">
							<p>Modern SvelteKit themes for developers and agencies</p>
						</div>
						<div class="text-sm opacity-75 space-y-1">
							<p>Svelte v4.2.19</p>
							<p>SvelteKit v2.17.3</p>
							<p>Tailwind CSS v4.0.9</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-6 text-center text-sm text-zinc-400">
				<div class="flex justify-center gap-4">
					<a href="https://github.com/flexlayers/theme-skeleton" class="inline-flex items-center text-zinc-400 hover:text-zinc-300 hover:underline">
						<svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
						GitHub
					</a>
					<a href="https://flexlayers.com" class="inline-flex items-center text-zinc-400 hover:text-zinc-300 hover:underline">
						<svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="2" y1="12" x2="22" y2="12"></line>
							<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
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
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
</style>