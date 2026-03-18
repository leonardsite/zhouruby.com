<div align="center">

# zhouruby.com

**Zhou Ruby Music Studio** / **周如碧音乐工作室**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com/)
[![i18n](https://img.shields.io/badge/languages-5-blue)](#languages)

</div>

---

The official website for Zhou Ruby Music Studio, serving students and families across Singapore's multilingual communities. Built to be fast, accessible, and simple.

## Languages

The site is fully localized in five languages via [next-intl](https://next-intl-docs.vercel.app/):

| Code | Language |
|------|----------|
| `zh` | 中文 (default) |
| `en` | English |
| `ja` | 日本語 |
| `ms` | Bahasa Melayu |
| `ta` | தமிழ் |

## Tech Stack

- **Framework** -- Next.js 15 with App Router
- **Styling** -- Tailwind CSS
- **Internationalization** -- next-intl (locale prefix routing)
- **Deployment** -- Cloudflare Pages via `@cloudflare/next-on-pages`
- **Music Arranger** -- standalone Vite + React SPA served at `/arranger/`

## Project Structure

```
src/
  app/[locale]/       -- locale-routed pages (home, courses, book)
  components/         -- shared UI (Header, Footer, LanguageSwitcher, ...)
  i18n/messages/      -- translation JSON per locale
  i18n/routing.ts     -- locale definitions and routing config
  middleware.ts        -- locale detection and redirect
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Build for Cloudflare Pages
npm run pages:build
```

## Deployment

The site deploys to Cloudflare Pages. The `wrangler.toml` at the project root configures the Pages project name and build output directory.

```bash
npx wrangler pages deploy
```

## License

Private.
