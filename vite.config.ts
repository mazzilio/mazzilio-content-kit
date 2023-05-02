import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		// relative vs absolute path, can set this up to avoid long file path imports
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
});
