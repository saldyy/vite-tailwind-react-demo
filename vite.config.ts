import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
   ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  },
  server: {
    host: true
  }
});
