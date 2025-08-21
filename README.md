# demo-html-bundle-vite

A demo project for generating HTML bundles with Vite, designed for creating maintenance pages and similar static HTML content.

## Overview

This project demonstrates how to use Vite to build self-contained HTML files that can be used for maintenance pages, landing pages, or other standalone web content. The build process creates a single HTML file with all CSS and assets inlined, making it easy to deploy anywhere.

## Features

- Single HTML file output with inlined CSS
- Minified and optimized build
- TypeScript support
- Modern CSS with PostCSS
- Legacy browser support (iOS >= 15)

## Usage

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Build Output

The build process generates a single, self-contained HTML file in the `build/` directory that can be deployed to any web server or hosting service.
