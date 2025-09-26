import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true, // enables polling to detect file changes
      interval: 100, // check every 100ms
    },
  },
});
