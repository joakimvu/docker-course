import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Use polling for file changes
    },
    host: true, // Allow access from the Docker container
    strictPort: true, // Fail if the port is already in use
    port: 5173, // Match the port in your Docker command
  },
});
