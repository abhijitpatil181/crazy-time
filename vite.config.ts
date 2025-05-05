import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This is correct:
    fs: {
      allow: ["."],
    },
  },
  // Important part for SPA fallback:
  build: {
    outDir: "dist",
  },
  // The actual fix is below — inside `vite.config.js`, add this:
  resolve: {
    alias: {
      // your aliases here if needed
    },
  },
});
