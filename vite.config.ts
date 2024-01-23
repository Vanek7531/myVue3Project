import { fileURLToPath, URL } from "node:url";
import { quasar } from "@quasar/vite-plugin";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // host: "0.0.0.0",
		
    port: 8080,
    // proxy: {
    //   "/api": {
    //     target: "IP/URL",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
	build: {
		
		manifest: true,
	}
});
