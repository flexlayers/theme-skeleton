<script lang="ts">
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>FlexLayers Theme Skeleton</title>
</svelte:head>

<main class="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6">
	<div class={`w-full max-w-4xl transform transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
		<div class="flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-lg">
			<!-- Left content panel -->
			<div class="p-8 lg:p-12 bg-white dark:bg-slate-800 lg:w-3/5">
				<div class="mb-6">
					<h1 class="text-2xl font-medium text-slate-900 dark:text-white mb-2">FlexLayers</h1>
					<p class="text-slate-500 dark:text-slate-400">SvelteKit Theme Skeleton</p>
				</div>

				<div class="mb-8">
					<div class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4">
						<svg class="w-4 h-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
						Ready to use
					</div>
					<p class="text-slate-600 dark:text-slate-300">Your SvelteKit project has been successfully created and is ready for development.</p>
				</div>

				<div class="mb-8">
					<h2 class="text-lg font-medium text-slate-800 dark:text-white mb-3">Next steps:</h2>
					<ul class="space-y-2 text-slate-600 dark:text-slate-300">
						<li class="flex items-start">
							<span class="text-slate-500 mr-2">→</span>
							<span>Create your pages and components in <code class="text-sm font-mono bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">src/routes</code></span>
						</li>
						<li class="flex items-start">
							<span class="text-slate-500 mr-2">→</span>
							<span>Add shared components to <code class="text-sm font-mono bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">src/lib</code></span>
						</li>
						<li class="flex items-start">
							<span class="text-slate-500 mr-2">→</span>
							<span>Customize your theme in <code class="text-sm font-mono bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">tailwind.config.js</code></span>
						</li>
						<li class="flex items-start">
							<span class="text-slate-500 mr-2">→</span>
							<span>Replace this page with your own content</span>
						</li>
					</ul>
				</div>

				<div class="flex flex-wrap gap-3">
					<a href="https://flexlayers.com" target="_blank" rel="noopener noreferrer"
						 class="inline-flex items-center px-4 py-2 border border-transparent bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition">
						Visit FlexLayers
						<svg class="ml-1.5 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</a>
					<a href="https://kit.svelte.dev/docs" target="_blank" rel="noopener noreferrer"
						 class="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-sm font-medium rounded-md transition">
						SvelteKit Docs
					</a>
				</div>
			</div>

			<!-- Right branding panel with softer gradient -->
			<div class="bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 lg:w-2/5 p-8 lg:p-12 flex items-center justify-center text-white">
				<div class="text-center">
					<h3 class="text-2xl font-bold mb-3">FlexLayers</h3>
					<h4 class="text-xl font-medium mb-4">Theme Skeleton</h4>
					<p class="opacity-90 mb-6">High-quality SvelteKit themes for developers and agencies</p>
					<div class="text-sm opacity-75">
						<p>Svelte v4.2.19</p>
						<p>SvelteKit v2.17.3</p>
						<p>Tailwind CSS v4.0.9</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
			<p>Built by <a href="https://flexlayers.com" class="text-blue-500 hover:underline">FlexLayers</a></p>
		</div>
	</div>
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
</style>