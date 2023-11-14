import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [imagetools(),inlangPlugin(), sveltekit()]
});
