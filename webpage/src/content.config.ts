import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { toDevdocId } from "./devdoc";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

// Development guidelines, read straight from the repository-level .github/ folder.
const devdoc = defineCollection({
  loader: glob({
    base: "../.github",
    pattern: ["copilot-instructions.md", "instructions/*.md"],
    generateId: ({ entry }) => toDevdocId(entry),
  }),
  // Instruction files only carry Copilot front matter (applyTo).
  schema: z.object({ applyTo: z.string().optional() }),
});

export const collections = { blog, devdoc };
