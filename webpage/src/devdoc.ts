// Development guidelines from the repository-level .github/ folder, rendered under /devdoc/:
// id generation for the devdoc collection and rewriting of the relative .md links between them.
// Copyright (c) yafra.org. See LICENSE.

/**
 * Turns a path relative to .github/ into a URL-friendly id,
 * e.g. "instructions/astro.instructions.md" → "instructions/astro-instructions".
 */
export function toDevdocId(entry: string): string {
   return entry.replace(/\.md$/, "").replaceAll(".", "-").toLowerCase();
}

/**
 * Rewrites relative links to other .md files in a guideline's rendered HTML to their /devdoc/ pages.
 * `id` is the id of the page the HTML belongs to; links that leave .github/ stay untouched.
 */
export function rewriteDevdocLinks(html: string, id: string): string {
   const base = new URL(`https://github.invalid/${id}`);
   return html.replace(
      /href="([^":#?]+\.md)(#[^"]*)?"/g,
      (match, target: string, hash = "") => {
         const path = new URL(target, base).pathname.slice(1);
         return path.startsWith("..") || target.startsWith("/")
            ? match
            : `href="/devdoc/${toDevdocId(path)}/${hash}"`;
      },
   );
}
