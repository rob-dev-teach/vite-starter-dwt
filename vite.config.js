import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		devSourcemap: true,
	},
	resolve: {
		alias: {
			'~': resolve(__dirname, '/src'),
			'~styles': resolve(__dirname, '/src/styles'),
			'~js': resolve(__dirname, '/src/js'),
		},
	},
	build: {
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'index.html'),
			},
		},
	},
});
