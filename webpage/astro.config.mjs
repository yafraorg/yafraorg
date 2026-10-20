import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://yafra.org/",
  vite: {
    server: {
      // The shared Jump Bit theme and fonts live in the repository-level assets/ folder.
      fs: { allow: [".."] },
    },
  },
});
