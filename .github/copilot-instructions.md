# Copilot Instructions for AI Agents

## Project Overview
- This is a Nuxt 4 (Vue 3) minimal starter project, structured for rapid prototyping and deployment.
- Main entry: `app/app.vue` (root Vue component). Routing and page structure are handled by Nuxt conventions.
- Configuration: `nuxt.config.ts` (Nuxt options, devtools, compatibility date).
- TypeScript: Project uses TypeScript, with config in `tsconfig.json` and references to Nuxt-generated configs.
- Public assets: `public/` (e.g., `favicon.ico`, `robots.txt`).

## Developer Workflows
- **Install dependencies:** Use your preferred package manager (npm, pnpm, yarn, bun). Example: `npm install`.
- **Development server:** `npm run dev` (or `pnpm dev`, `yarn dev`, `bun run dev`).
- **Production build:** `npm run build` (or equivalent for your package manager).
- **Preview production build:** `npm run preview`.
- **Static site generation:** `npm run generate`.
- **Postinstall hook:** Runs `nuxt prepare` after install (required for Nuxt 4 setup).

## Project Conventions & Patterns
- **Pages and routing:** Follows Nuxt file-based routing. Add pages/components as per Nuxt docs.
- **No custom server logic** is present; all logic is client-side or handled by Nuxt.
- **No custom test scripts** are defined. Add tests as needed using your preferred framework.
- **.env files** are gitignored except for `.env.example`.
- **Output/build directories** (`.output`, `.nuxt`, `dist`, etc.) are gitignored.

## Integration & Dependencies
- Core dependencies: `nuxt`, `vue`, `vue-router` (see `package.json`).
- No additional plugins or modules are configured by default.
- For deployment, follow [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment).

## Examples
- To add a new page, create a file in the `pages/` directory (not present by default in this starter).
- To customize config, edit `nuxt.config.ts`.

## References
- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- Key files: `app/app.vue`, `nuxt.config.ts`, `package.json`, `tsconfig.json`, `public/`

---

**If you add new conventions or workflows, update this file to keep AI agents productive.**
