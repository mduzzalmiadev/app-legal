// @ts-check
import { defineConfig } from 'astro/config';

// Deployment target: GitHub Pages.
//
// SITE_URL  – origin used for canonical URLs, Open Graph tags and the sitemap,
//             e.g. https://<user>.github.io or https://www.example.com
// BASE_PATH – sub-path the site is served from. For a project site this is
//             "/<repo>"; for a custom domain or a <user>.github.io repo it is "/".
//
// The GitHub Actions workflow (.github/workflows/deploy.yml) sets both
// automatically from the repository's Pages settings, so you normally don't need
// to touch them. Locally they default to a root-served site.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

/**
 * After the build, prefix root-relative links that don't already include the
 * base path (e.g. "/apps/cliptone/" written inside Markdown guides). Templates
 * use the href() helper from src/lib/url.ts; this covers Markdown content,
 * independent of which Markdown processor Astro uses.
 * @returns {import('astro').AstroIntegration}
 */
function baseLinks() {
  const prefix = base.replace(/\/$/, '');
  return {
    name: 'base-links',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        if (!prefix) return;
        const { readdir, readFile, writeFile } = await import('node:fs/promises');
        const { fileURLToPath } = await import('node:url');
        const root = fileURLToPath(dir);
        let changed = 0;
        for (const entry of await readdir(root, { recursive: true })) {
          if (!entry.endsWith('.html')) continue;
          const file = `${root}/${entry}`;
          const html = await readFile(file, 'utf8');
          const out = html.replace(/(\s(?:href|src)=")(\/(?!\/)[^"]*)"/g, (m, attr, url) =>
            url === prefix || url.startsWith(prefix + '/') ? m : `${attr}${prefix}${url}"`,
          );
          if (out !== html) {
            await writeFile(file, out);
            changed++;
          }
        }
        logger.info(`Prefixed base path "${prefix}" in ${changed} HTML files`);
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [baseLinks()],
  compressHTML: true,
  prefetch: false,
});
