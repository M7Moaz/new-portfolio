import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  build: {
    minify: "terser",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
    },
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [
    react(),
    createHtmlPlugin(),
    visualizer({
      template: "treemap",
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html",
    }),
    compression({
      algorithm: "gzip",
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 3,
      },
      optipng: {
        optimizationLevel: 5,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      },
      mozjpeg: {
        quality: 75,
      },
    }),
  ],
});
