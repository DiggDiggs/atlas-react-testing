import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "c8", // Correctly set the coverage provider
      reporter: ["text", "json", "html"],
      all: true,
      include: ["src/**/*.{js,ts,jsx,tsx}"],
      exclude: ["node_modules", "tests", "dist"],
    },
  },
});
