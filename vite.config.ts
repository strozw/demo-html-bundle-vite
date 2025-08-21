import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
	build: {
		outDir: "../build",
	},
	plugins: [viteSingleFile(), ViteMinifyPlugin()],
	root: "./src",
});
