---
title: Jump Bit design principles
description: A small, monochrome design system for web and desktop clients, with a live UI example
pubDate: 2026-10-21
tags:
  - design
  - css
  - howto
---

# One identity for every client

Jump Bit is a small design system for web pages, single page applications, Avalonia desktop clients and Python command line tools. It gives every client the same look without a large CSS framework. This web page is built on it too, with yafra green added as the key colour.

All files are in the repository's `assets/` folder:

| File                      | Purpose                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------- |
| `jumpbit-tokens.json`     | Colour, type and radius tokens: the source of truth                                   |
| `jumpbit-theme.css`       | Tokens as CSS custom properties, base styles, `.btn`, `.card`, `.text-*`, `.landing`  |
| `jumpbit-ui.css`          | Optional Bootstrap-like layer: grid, navbar, forms, alerts, badges, tables, utilities |
| `jumpbit-theme.axaml`     | The same tokens for Avalonia                                                          |
| `jumpbit-styles.axaml`    | The same styles for Avalonia                                                          |
| `jumpbit-ui-example.html` | One page that shows every component                                                   |

## The principles

### 1. Monochrome first

The palette is ink, charcoal, graphite, slate, mist and white. Colour carries meaning rather than decoration. Applications use only the **semantic** tokens (`--color-primary`, `--color-surface`, `--color-text`, …) and never the raw `--jb-*` palette, so light and dark themes switch automatically.

A gold `--color-accent` is available but optional: at most one highlight per view.

### 2. Status is never colour alone

Use `.text-success`, `.text-warning`, `.text-danger` and `.text-info` together with a word such as "Saved", "Delayed" or "Error". People who can't see the colour still get the meaning.

### 3. One typeface

**Inter** is used for headings, body text and buttons, with Arial as the fallback. Code uses the mono stack (`--font-mono`).

- Headings: weight 600, letter-spacing 0.02em, line-height 1.15
- Button labels: weight 600, uppercase, letter-spacing 0.08em
- Body: 1rem, line-height 1.5

The variable font files ship with the theme, so pages don't depend on Google Fonts.

### 4. Three radii, one shadow

- `--radius-sm` (4px) for small elements such as badges
- `--radius-md` (8px) for buttons and inputs
- `--radius-lg` (14px) for cards

Cards sit on `--color-surface` and have a `--color-border` hairline and `--shadow-md`.

### 5. Visible focus everywhere

Every focusable element gets a solid 2px `--color-focus` outline with a 2px offset. Combined with the contrast ratios checked into the tokens, this keeps clients at WCAG 2.2 AA.

### 6. Clear action hierarchy

- `.btn` for the primary action (fill `--color-primary`)
- `.btn .btn-outline` for secondary actions
- `.btn .btn-link` for tertiary actions

### 7. Familiar class names, no framework

`jumpbit-ui.css` uses Bootstrap 5 class names (`.container`, `.row`, `.col-md-4`, `.form-control`, `.alert`, `.badge`, `.table`, `.d-flex`, …) without Bootstrap and without JavaScript. If you know Bootstrap, you already know the markup. If a component is missing, add it on top of the semantic tokens rather than adding another framework.

### 8. Extend through tokens, don't fork

A product brand overrides **semantic tokens only**, in its own stylesheet that loads after the Jump Bit files. yafra.org does exactly this in `yafra-theme.css`: it maps `--color-primary`, `--color-link`, `--color-focus` and `--gradient-brand` to green, and every Jump Bit component picks up the change. The shared files stay unchanged.

```css
:root {
  --color-primary: var(--yf-green-dark);
  --color-link: var(--yf-green-dark);
  --color-focus: var(--yf-green-dark);
}
```

## Getting started

Load the theme, then the optional UI layer, then your own extension:

```html
<link rel="stylesheet" href="jumpbit-theme.css" />
<link rel="stylesheet" href="jumpbit-ui.css" />
<link rel="stylesheet" href="my-brand.css" />
```

Serve the `font/` folder next to `jumpbit-theme.css`. Use the black logo on light grounds, the white logo on dark grounds or the brand gradient, and never redraw or recolour it.

If the application has no entry page yet, start from the `.landing` layout: a centred column on `--gradient-brand` with the white logo, a heading, one sentence and a single `.btn`.

## Jump Bit UI example

The page below is the plain design system without the yafra green. It shows the navbar, alerts, cards with badges, a form with validation, a striped table with status text and a list group. Switch your operating system to dark mode to see the dark theme.

<iframe src="/jumpbit-ui/" title="Jump Bit UI example page" loading="lazy" style="width: 100%; height: 70rem; border: 1px solid var(--color-border); border-radius: var(--radius-lg);"></iframe>

[Open the Jump Bit UI example in its own window](/jumpbit-ui/)
