# angellatham-portfolio

Designer portfolio site for [angellatham.com](https://angellatham.com), rebuilt from the deployed CRA bundle's source map and modernized.

## The interesting bit

The original code wasn't available — only the production deploy. So step one was reverse-engineering the source from the shipped `static/js/main.*.js.map`, recovering ~30 `.jsx` files, the embedded Lottie animations, and the project metadata JSON (the latter required parsing `JSON.parse(...)` literals out of the minified bundle, since they weren't preserved in `sourcesContent`).

Then it was migrated end-to-end:

| | From | To |
|---|---|---|
| Build | Create React App (deprecated) | Vite 5 |
| Framework | React 18 | React 19 |
| Styling | Tailwind 3 | Tailwind 4 (`@theme`, `@custom-variant`) |
| Lottie | full build (~600 KB, uses `eval`) | light build, with the largest animation (`character.json`, 498 KB) lazy-loaded |
| Auth gate | hardcoded password in client JS | PBKDF2-600k + AES-256-GCM blob, decrypted client-side via Web Crypto |

Final bundle: **177 KB gzipped** (down from 336 KB), no `eval`, no plaintext data on the wire.

## Stack

Vite · React 19 · React Router 6 · Tailwind 4 · lottie-web (light) · Web Crypto

## Run it

```bash
npm install
$env:PORTFOLIO_PASSWORD = "your phrase"   # PowerShell — bash equivalent works too
npm run dev                               # localhost:3000
npm run build                             # encrypts data + builds dist/
```

`PORTFOLIO_PASSWORD` is the unlock phrase for the `/auth` page; it's used at build time to encrypt `data-source/*.json` into `public/data/protected.bin`.

## Deploy

`npm run build` produces `dist/`. Upload its contents to the document root of any static host (the live deploy uses Hostinger/Apache; `public/.htaccess` handles SPA fallback + `Options -Indexes`).

## Notes

- `/works` and `/fun-stuff` are gated by **client-side decryption**, not access control — designed to keep casual visitors out, not to resist a determined attacker. Image URLs are inside the encrypted blob; the files themselves are public but unguessable.
- The Tailwind 4 migration kept a few non-standard quirks of the original config: max-width `xs`/`sm`/`md`, min-width `lg+`, non-standard `@font-face` weight mapping, absolute (Tailwind 3-style) line-heights instead of v4's calc multipliers. See comments in `styles/tailwind.css`.
- Protected portfolio content (the actual project JSON + preview images) is **gitignored** — repo is public, content isn't.
