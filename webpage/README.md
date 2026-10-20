# yafra.org website

Static website for [yafra.org](https://yafra.org), built with [Astro](https://astro.build) 7. English only.

## Design

The site uses the Jump Bit design system with green as its key colour:

1. `../assets/jumpbit-theme.css` and `../assets/jumpbit-ui.css`: the shared Jump Bit theme, tokens, Inter font and Bootstrap-like components. Keep these files unchanged; update them from the Jump Bit source.
2. `src/styles/yafra-theme.css`: the yafra.org extension. It only overrides semantic tokens (`--color-primary`, `--color-link`, `--color-focus`, `--color-accent`, `--gradient-brand`) with the yafra greens and adds the site-specific parts (hero, post text, tags).

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--yf-green` | `#00895a` | – | brand green, display text 24px+ |
| `--yf-green-dark` | `#00754c` | – | buttons, links, focus on light (5.8:1 on white) |
| `--yf-green-light` | – | `#4cc38a` | buttons, links, focus on dark (8.0:1 on ink) |

Layout and components use the Jump Bit classes (`.container`, `.row`, `.col-md-*`, `.card`, `.btn`, `.badge`, `.list-group`, …). Don't add another CSS framework.

## Prerequisites

- Node.js 24 LTS (pinned in `.nvmrc` and `mise.toml`)
- npm 11

## Tasks

Run from this folder:

| Task | Command |
| --- | --- |
| Setup | `npm ci` |
| Run (dev server) | `npm run dev` |
| Type check | `npm run check` |
| Build (`dist/`) | `npm run build` |
| Preview the build | `npm run preview` |
| Format | `npm run format` |
| Format check (CI) | `npm run format:check` |

## Content

- Pages: `.astro` files in `src/pages`, wrapped in the `Base` layout. Start from `src/templates/page.astro`.
- Blog posts: Markdown files in `src/content/blog` with `title`, `description`, `pubDate` and optional `tags` front matter. Start from `src/templates/post.md`.
- Navigation: `src/components/PageHeader.astro`. Site title, tagline and Open Graph settings: `src/settings.ts`.

## Deployment

`.github/workflows/deploy.yml` (the Jump Bit Hostpoint pipeline, adapted for `webpage/`) runs on every pushed tag: `npm ci`, format check, build, then mirrors `dist/` to Hostpoint over SFTP.

TODO: set up the GitHub `production` environment with these secrets:

- `HOSTPOINT_HOST`
- `HOSTPOINT_USERNAME`
- `HOSTPOINT_PRIVATE_KEY` (deploy key without passphrase)
- `HOSTPOINT_KNOWN_HOSTS` (output of `ssh-keyscan <host>`)
