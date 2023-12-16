/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import { URL, fileURLToPath } from "node:url";
export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
