import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'node',

		coverage: {
			provider: 'v8'
		},

		environmentMatchGlobs: [
			// Run browser-like tests in jsdom
			['src/**/*.svelte.{test,spec}.{js,ts}', 'jsdom']
		],

		// Setup for client tests that run in jsdom
		setupFiles: ['./vitest-setup-client.ts'],

		// Global exclusions
		exclude: ['**/node_modules/**', '**/dist/**'],

		// For clearing mocks between tests
		clearMocks: true
	}
});
