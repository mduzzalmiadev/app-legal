# AppLayer Studio website

A plain **HTML, CSS and JavaScript** website for an independent iOS/macOS app portfolio. There's no build step, no framework and no Node.js. Every page is a real `.html` file you can open and edit, and the site is hosted for free on **GitHub Pages**.

- Homepage, searchable app directory, 23 app pages, 8 category pages, 11 guides, plus About, Contact, Privacy and 404 pages
- One stylesheet (`assets/css/style.css`) and one small script (`assets/js/directory.js`, used only by the app directory)
- SEO built in: unique titles and descriptions, canonical URLs, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt`

Production URL used throughout the files: **`https://mduzzalmiadev.github.io/applayer-studio/`**

> Before launch, read **[MISSING_DATA.md](MISSING_DATA.md)**. It lists the facts, names and decisions that need your confirmation.

---

## Folder structure

```
index.html                 Homepage
apps/index.html            App directory (search + filters)
apps/<app-name>/index.html One page per app
categories/…               Category pages
guides/…                   Guides (one folder per guide)
about/ contact/ privacy/   Studio pages
404.html                   "Page not found" (GitHub Pages serves this automatically)
assets/css/style.css       All styles
assets/js/directory.js     App directory search/filter
images/apps/<app-name>/    Official App Store icons and screenshots
sitemap.xml, robots.txt    For search engines
favicon.svg, favicon-32.png, apple-touch-icon.png, og-default.png
.nojekyll                  Tells GitHub Pages to serve files as-is
```

Every folder has an `index.html`, so URLs are clean, e.g. `/apps/cliptone/`. All internal links are **relative** (`../../apps/cliptone/`), so the site works at any address. The exception is `404.html`, which uses `/applayer-studio/…` paths because GitHub shows it at any URL depth.

## Preview on your Mac

Opening `index.html` by double-clicking mostly works, but folder links like `apps/` won't open their `index.html`. Use the web server built into macOS instead:

```bash
cd ~/Desktop/appstore-applayer-studio
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Press `Ctrl+C` to stop. The VS Code "Live Server" extension works too.

## Publish on GitHub Pages

1. On github.com, create a new **public** repository named **`applayer-studio`**. Leave it empty: no README or .gitignore.
2. Push this folder from Terminal, using the Git commands, **not** Finder drag-and-drop, which skips hidden files like `.nojekyll`:
   ```bash
   cd ~/Desktop/appstore-applayer-studio
   git init -b main
   git add .
   git commit -m "Initial website"
   git remote add origin https://github.com/mduzzalmiadev/applayer-studio.git
   git push -u origin main
   ```
   When asked for a password, use a **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens), not your account password.
3. In the repository, go to **Settings → Pages → Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder **`/ (root)`** → **Save**
4. After a minute or two, the site is live at **https://mduzzalmiadev.github.io/applayer-studio/**

To update the site later, edit files, then:

```bash
git add .
git commit -m "Describe your change"
git push
```

### Using a different repository name or a custom domain

The full URL appears in each page's `<head>` (canonical, Open Graph, JSON-LD) and in `sitemap.xml` and `robots.txt`. If you change the address, do a project-wide find-and-replace (VS Code: ⇧⌘H):

| Find | Replace with (example) |
|---|---|
| `https://mduzzalmiadev.github.io/applayer-studio/` | `https://www.yourdomain.com/` |
| `/applayer-studio/` (in `404.html` only) | `/` |

For a custom domain: in **Settings → Pages → Custom domain**, enter it. At your DNS provider, point `www` (CNAME) to `mduzzalmiadev.github.io`, and set the apex A records to GitHub's Pages IPs (listed in [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)). Then tick **Enforce HTTPS**. A custom domain is better for long-term SEO, and `robots.txt` is only read at a domain root.

## Sharing an individual app

Every app has its own page that you can share anywhere, for example:

- `https://mduzzalmiadev.github.io/applayer-studio/apps/cliptone/`
- `https://mduzzalmiadev.github.io/applayer-studio/apps/dualshot/`

The address is always `…/apps/<folder-name>/`. The folder names are listed in `apps/`.

Each app page includes:

- **A large link preview:** `images/apps/<app>/share.jpg` (1200×630, with icon, name, tagline and a screenshot) appears when the link is shared on Facebook, WhatsApp, Messages, X, LinkedIn and similar. If you change an app's name or tagline, replace this image too. Any image editor works; keep it 1200×630.
- **A Share button:** opens the phone's share sheet, or copies the link on computers. It always shares the official URL (`…/apps/<app>/`).
- **Apple's Smart App Banner:** visitors using Safari on iPhone or iPad see Apple's own "Open / Get" bar at the top of the page. It comes from the `<meta name="apple-itunes-app" content="app-id=…">` tag.

Link previews are cached by social apps. If you change a preview image after sharing, use Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) to refresh it.

## Google Search Console

1. Go to <https://search.google.com/search-console> → **Add property** → **URL prefix** → `https://mduzzalmiadev.github.io/applayer-studio/`.
2. Choose the **HTML tag** method. Paste the `<meta name="google-site-verification" …>` tag into the `<head>` of **`index.html`** (the homepage is enough), push, then click **Verify**.
3. Open **Sitemaps** and submit `sitemap.xml`.
4. Use **URL Inspection** on the homepage and a few app pages to request indexing.

Indexing takes days to weeks and is never guaranteed.

## Editing common things

The site has no templates, so shared parts such as the header, footer, brand name and email are repeated in every page. Use **find-and-replace across the folder** for these. VS Code (⇧⌘H) works well.

| To change | Find-and-replace |
|---|---|
| Brand name | `AppLayer Studio` (also recreate `og-default.png`) |
| Contact email | `mduzzalmia.dev@gmail.com` |
| A nav or footer link | the link's HTML, e.g. `>Contact &amp; support</a>` |

**Colors, fonts and spacing** are defined once, as variables at the top of `assets/css/style.css` (`--brand`, `--ink`, `--radius` …).

### Update an app's text

Edit `apps/<app-name>/index.html`. Change the visible text, and if relevant the `<title>`, `<meta name="description">`, the Open Graph/Twitter descriptions and the JSON-LD block in `<head>`. Only describe features that appear on the app's App Store listing.

### Add a new app

1. **Copy a folder:** duplicate `apps/cliptone/` as `apps/<new-app>/`, and add the icon and screenshots in `images/apps/<new-app>/`. You can save them from the App Store listing.
2. **Edit the new page:** name, tagline, overview, features, FAQs, App Store ID (the number in `apps.apple.com/app/id…`), support and privacy links, and every `<head>` tag. Update the canonical URL and `og:url` to the new address.
3. **Add a card** for it by copying an existing `<article class="app-card …">` block in:
   - `apps/index.html` (directory)
   - `index.html` (homepage directory section)
   - each matching `categories/<category>/index.html`
4. Add its icon link to `categories/index.html` and a row in `contact/index.html`.
5. Add a `<url>` line to `sitemap.xml`.
6. Update the counts that mention the number of apps: "23 apps", "Browse all 23 apps", and the category pill counts in the directory. Search for `23` to find them.

The directory search reads each card's `data-search` text (lowercase keywords), `data-categories` and `data-platforms`. Fill these in on new cards.

### Publish a new guide

1. Duplicate a guide folder, e.g. `guides/how-to-trim-audio-on-iphone/`, and rename it to the new URL slug.
2. Replace the title, description, byline date, body content, "In this guide" links (each `href="#…"` must match a heading's `id`), the app box at the end, and the `<head>` tags (title, description, canonical, Open Graph, JSON-LD dates).
3. Add a `<article class="guide-card …">` for it to `guides/index.html`, and optionally to the homepage's guides section and the relevant category page.
4. Add it to `sitemap.xml` with a `<lastmod>` date.
5. Test the steps on a real device first. See [CONTENT_PLAN.md](CONTENT_PLAN.md) for writing rules and topic ideas.

## Optional: analytics and App Store tracking

- **Analytics:** [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) is free, cookieless and works with GitHub Pages. Add its `<script>` snippet before `</body>` on each page, and **update `privacy/index.html`** to say so. It currently states truthfully that the site uses no analytics.
- **App Store downloads from the website:** website visits and App Store downloads are different metrics that can't be matched one-to-one. To attribute downloads, create campaign links in App Store Connect (*Analytics → Sources → Campaigns*). They look like `https://apps.apple.com/app/id6761435037?pt=PROVIDER&ct=website&mt=8`. Replace an app's App Store links with its campaign link, and App Store Connect will report page views and downloads from that campaign, in aggregate.

## Notes

- The footer states independence from Apple. Some app names reference third-party brands (see MISSING_DATA.md).
- `privacy/index.html` describes what this site actually does: static hosting on GitHub Pages, no cookies, forms or analytics. Review it, and update it if you add anything that collects data. It is not legal advice.
- Buttons say "View on the App Store" in plain text. To use Apple's official badge, get it from Apple's marketing resources and follow its usage guidelines.
- A backup of the earlier Astro (build-tool) version is at `~/Desktop/applayer-studio-astro-version.zip`. Delete it if you don't need it.
