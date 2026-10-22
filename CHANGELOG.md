# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Development guidelines pages at `/devdoc/`, rendered from `.github/copilot-instructions.md` and `.github/instructions/*.md`.

### Changed

- Restyle the website with the Jump Bit design system, extended with green as the yafra key colour (`webpage/src/styles/yafra-theme.css`).
- Upgrade Astro from 5 to 7.4, `@astrojs/rss` to 4.0.19, Prettier to 3.9 and `prettier-plugin-astro` to 1.1; Node.js 24 LTS is now required.
- Set the site URL to `https://yafra.org/` (canonical, RSS and Open Graph links pointed to the template's domain).
- Replace the template Open Graph image with a yafra.org image.
- Make all site text English only.
- Adapt the Hostpoint deploy workflow to build the single English site in `webpage/`.

### Removed

- Pico CSS and Sass.
- `pnpm-lock.yaml`; npm with `package-lock.json` is the only package manager.
