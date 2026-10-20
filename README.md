# yafraorg

This is the yafra web page repository.

Beside the web page you can find information on the yafra wiki:
https://github.com/yafraorg/yafraorg/wiki

## Layout

- `webpage/`: the yafra.org website (Astro). Setup, tasks and deployment are described in [webpage/README.md](webpage/README.md).
- `assets/`: shared Jump Bit design system files (theme, UI layer, Inter font, logos). The website imports them; yafra-specific styling lives in `webpage/src/styles/yafra-theme.css`.
- `.github/workflows/deploy.yml`: deploys the website to Hostpoint when a tag is pushed.

## Quick start

```shell
cd webpage
npm ci
npm run dev
```
