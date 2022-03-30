import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [WindiCSS()],
  publicDir: "src/public/",
  build: {
    emptyOutDir: true,
    outDir: "assets",
    assetsDir: "",
    rollupOptions: {
      // input: ["src/js/main.js"],
      // external: ["jquery"],
    },
  },
});
