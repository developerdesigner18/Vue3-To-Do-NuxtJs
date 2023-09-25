import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for deployment (change as needed)
  base: '/',

  // Development server configuration
  server: {
    port: 3000, // The port to run the development server on
    hmr: {
      overlay: false, // Disable the HMR overlay
    },
  },

  // Build output directory (change as needed)
  build: {
    outDir: 'dist', // The output directory for the production build
  },

  // CSS-related configuration
  css: {
    // Enable CSS modules for all CSS files (change as needed)
    modules: false,
  },

  // Configure Vite plugins or extensions (if needed)
  plugins: [],

  // Enable or disable Vite's built-in optimizations (change as needed)
  optimizeDeps: {
    include: [], // Dependencies to include in the build
    exclude: [], // Dependencies to exclude from the build
  },
});
