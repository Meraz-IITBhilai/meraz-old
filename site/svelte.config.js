import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		prerender: {
			default: true
		}
	},
	preprocess: [
		preprocess({
			scss: {
				includePaths: ['src/styles/'],
			},
		}),
		mdsvex({
			extensions: ['.svelte', '.md'],
			layout: {
				event: './src/lib/layouts/Event.svelte',
			},
		}),
	],
};

export default config;
