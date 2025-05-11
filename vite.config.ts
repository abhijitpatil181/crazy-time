import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const vitePort = process.env.VITE_PORT
    ? parseInt(process.env.VITE_PORT, 10)
    : 3000;

  return defineConfig({
    plugins: [react()],
    server: {
      // This is correct:
      port: vitePort,
      strictPort: true,
      fs: {
        allow: ["."],
      },
    },
    preview: {
      port: vitePort,
      strictPort: true,
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
};
// https://vite.dev/config/
