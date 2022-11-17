import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			preprocess: autoPreprocess()
		})
	],
	css: {
		postcss: {
			plugins: [
				autoprefixer()
			]
		}
	}
})
