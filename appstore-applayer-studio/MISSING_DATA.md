# Inventory, verification status and open questions

Last verified: **2026-10-24**, against Apple's public iTunes Lookup API (US storefront), each app's apps.apple.com listing, and the Xcode projects in `/Volumes/Personal Photo/personal photo/sumaiya/abc/`.

## How the inventory was built

- Seller account on every listing: **MD UZZAL MIA**, developer ID `1873269826`
  (<https://apps.apple.com/us/developer/md-uzzal-mia/id1873269826>).
- Looking up that developer ID returned **23 live apps**. All 23 have pages on the site.
- App IDs, names, genres, compatibility, languages, privacy-policy URLs and support URLs come from Apple's data. Features come only from each official App Store description.
- Ratings, review counts, download numbers and prices are **not** shown anywhere. Structured data includes `price: 0` only because the Lookup API confirms a free download.

## Live apps (23)

| App Store name | ID | Site slug | Platforms shown |
|---|---|---|---|
| Audio Edit: Audio Editor Pro | 6799937847 | audio-editor-pro | iPhone, iPad, **Mac (native)** |
| ClipTone: Ringtone Maker | 6761435037 | cliptone | iPhone, iPad |
| YTMP3: MP3 Audio Converter | 6792331126 | mp3-audio-converter | iPhone, **Mac (native)** |
| FxSound - Volume Boost & EQ | 6782662292 | fxsound | iPhone |
| Speaker Cleaner, Eject Water | 6780996194 | speaker-cleaner | iPhone |
| AI Note Taker: Voice to Text. | 6791932088 | ai-note-taker | iPhone, iPad |
| PDF Scanner Pro: Document Scan | 6788588691 | pdf-scanner-pro | iPhone |
| Photo to PDF: Cam Scanner App | 6797148387 | photo-to-pdf-converter | iPhone |
| Invoice Maker Pro: Invy | 6783458331 | invoice-maker-pro | iPhone, iPad |
| Expense Tracker Pro: Budget | 6796002310 | expense-tracker-pro | iPhone |
| DualShot: Dual Camera Recorder | 6773714788 | dualshot | iPhone |
| Screen Recorder: Video Edits | 6780739834 | screen-recorder | iPhone, iPad |
| PhotoPalette: Story Cards | 6771941881 | photopalette | iPhone |
| AR Drawing: Draw on Paper | 6759790471 | ar-drawing | iPhone, iPad |
| Color Pop: Coloring Book | 6761661438 | color-pop | iPhone, iPad |
| AI Keyboard & Writer: TypeAI | 6762489125 | typeai-ai-keyboard | iPhone, iPad |
| BypassGPT: AI Humanizer | 6793449639 | bypassgpt | iPhone, iPad |
| Pomodoro Focus Timer: OneTap | 6785351474 | pomodoro-onetap | iPhone, iPad |
| HTML Viewer & Editor: Codex | 6786130408 | html-viewer-editor-codex | iPhone, iPad |
| Scanzo: QR Scanner & Generator | 6769697609 | scanzo-qr-scanner | iPhone, iPad |
| AI Cleaner: Free Up Storage+ | 6777417688 | ai-cleaner | iPhone |
| 3uTools Guide | 6783975711 | 3utools-guide | iPhone, iPad |
| Pray on Time: Salah & Qibla | 6784944162 | pray-on-time | iPhone, iPad |

"iPad" is shown only when the listing has an iPad compatibility entry. "Mac" is shown only for the two apps with a native Mac version. The other apps' listings say they run on Apple-silicon Macs as iPhone/iPad apps; that appears in the compatibility details, not as a platform claim.

## Not published: unreleased or unverified

| Name | Evidence | What's needed |
|---|---|---|
| Blur Editor ("Blur Photo \| Blur Video AI" in your brief) | Xcode project `BlurEditor`, bundle `com.uzzal.blureditor`; no App Store ID in source | Final App Store name and ID after release |
| GroupCam | ID `6807954300` in source; not found in the US/GB/BD/IN/DE/JP stores | Release, then confirm the ID |
| Audio Recorder | Project `AudacityAudioRecorder`, ID `6813029598`, not live. `project_plan.md` calls it **"Heario – Audio to Text"**; your brief calls it **"SonuLab Audio Recorder"** | Which name is final? |
| Video Resize | Project `VideoFit`, ID `6805340528`, not live. Your brief calls it **"Kapwing Video Resizer"** | Final name. "Kapwing" is another company's brand; see below |
| AppRank Live | Not found anywhere in the projects or under your developer account | Is this a released app, a web tool (the `freeaso` folder is a web ASO tool), or planned? |
| "~27 iOS apps + 1 macOS app" | 23 live apps + the 4 projects above = 27. The two Mac versions are Audio Edit and YTMP3 | Confirm nothing is missing, e.g. apps on another developer account |

Apps in `~/Desktop/Git` (AIReshot, InteriorDesignAI, AICanvasApp, etc.) reference App Store IDs such as 6670773294 and 6745153632. These were **not** included because they don't appear under the MD UZZAL MIA developer account and look like they may belong to a different publisher. Tell me if any of them are yours.

To publish one of these later, follow "Add a new app" in README.md.

## Name inconsistencies to review

Several apps use a different name inside the app or in the description than on the App Store. The site uses the **App Store name** and mentions the in-app name once, on the app's page.

| App Store name | Name used in description / app |
|---|---|
| Color Pop: Coloring Book | Magic Color Pop ("Magic Coloring Book" in your brief) |
| AI Keyboard & Writer: TypeAI | AutoPaste |
| AI Cleaner: Free Up Storage+ | Cleaner Guru |
| FxSound - Volume Boost & EQ | Bass Booster |
| Photo to PDF: Cam Scanner App | PDF Editor / PDF Converter Pro |
| AI Note Taker: Voice to Text. | Voice to Text (the App Store name also has a stray trailing period) |
| Pray on Time: Salah & Qibla | SalahTracker |
| Pomodoro Focus Timer: OneTap | One Tap Focus |
| YTMP3: MP3 Audio Converter | MP3 Converter |
| Scanzo: QR Scanner & Generator | QR Scan |

Other data issues:
- **Pray on Time:** the description lists six in-app languages, but the App Store language field shows English only.
- **Color Pop:** the listing's *App Support* link points to the privacy-policy page. The site repeats what Apple shows.
- Several descriptions contain "Privacy Plicy" (typo) and hard-coded prices. These are on the App Store, not the website.

## Trademark-sensitive names: please review

I'm flagging these for your judgment. This isn't legal advice.

- **FxSound:** "FxSound" is an existing audio-enhancer product from another company. Nothing on the listing says your app is affiliated with it. Consider whether the name could cause confusion or an App Store complaint.
- **YTMP3:** suggests YouTube, but the app converts videos from the user's Photos library. The site describes the actual behavior and adds a copyright note.
- **Photo to PDF: Cam Scanner App:** "CamScanner" is another company's product name.
- **3uTools Guide:** the listing already includes an unofficial/not-affiliated disclaimer, which the site repeats.
- **BypassGPT:** "GPT" is associated with OpenAI's products.
- **"Kapwing Video Resizer"** (planned): Kapwing is another company's brand.

The site footer says AppLayer Studio is independent and not affiliated with Apple, and that third-party names belong to their owners.

## Brand, domain and contact

- **"AppLayer Studio"** is provisional. Trademark and domain availability have **not** been checked. Changing it means a find-and-replace across all HTML files (see README.md).
- **Contact email:** `mduzzalmia.dev@gmail.com`, taken from your own App Store listings, where it's already public. To change it, find-and-replace it across all HTML files.
- **Production URL:** set automatically by GitHub Pages. No domain has been connected or verified.

## Assets

- All 23 app icons and 3–5 iPhone screenshots per app (plus Mac screenshots for the 2 native Mac apps) are the official App Store images, saved in `images/apps/<app>/`. No placeholders are in use.
- `og-default.png` (social preview), `favicon.svg`, `favicon-32.png` and `apple-touch-icon.png` are new brand assets made for the provisional AppLayer Studio name. Regenerate them if the name changes.

## Guides

The 11 guides were written from documented iOS/macOS behavior and the apps' listings, **but the steps have not been tested on a physical device.** Before you promote them, follow each guide on a current iPhone or Mac and correct any menu names. In particular:

- the iOS 26 "Use as Ringtone" behavior (the ringtone guide currently only describes the GarageBand and Finder methods),
- which iPhone models have the Camera app's dual-capture mode,
- whether ClipTone's GarageBand hand-off works exactly as described.

Then update the "Last reviewed" date on each guide page (in the visible byline and in the `dateModified` value of the page's JSON-LD) and its `<lastmod>` in `sitemap.xml`.
