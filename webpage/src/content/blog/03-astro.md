---
title: Astro sample
description: A brief guide on the things you'll find in this template
pubDate: 2025-01-19
tags:
  - astro
  - markdown
  - template
  - howto
---

This post explains how to use astro and the broad set of templates available. Astro is a static web site generator using nodejs based <a href="https://astro.build">astro</a>. Like with a dynamic web site, astro allows you to make reusable components and create an optimized plain html/css/js output running optimal on all browser engines. With that, there is no engine in between the browser and your content.

In order to still use dynamic content, you can retrieve any data through "await fetch()" function.

## Quickstart

```shell
npm create astro@latest -- --template templatename
cd yourdirectory
npm install
npm run dev
npm run build
```


4. Optionally, format your source files with Prettier.

```shell
npm run format
```

If you use mise-en-place for your tooling, this project comes with a mise configuration file.

