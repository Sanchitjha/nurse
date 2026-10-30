# Sewa Saathi Home Care: website

A fast static website (English at `/`, Hindi at `/hi/`) built with a small script. No framework, no dependencies, only Node.

Logo, colours and rates come from the client: logo in `images/brand/`, colours (navy `#052f74`, teal `#039b9b`) at the top of `css/styles.css`, rates from "Rate list.docx" in `js/content.js`.

## Daily use

```bash
node tools/build.js     # builds every page, sitemap.xml and robots.txt, then runs the SEO check
node tools/serve.js     # preview at http://localhost:3000
```

The built pages (`index.html`, `hi/`, `rate-list/`, `services/`, ...) are committed, so any static host can serve the folder as it is. After changing config, content or a template, run the build again.

## Where to change what

| Cheez | File |
|---|---|
| Business name, **url**, city, phone, WhatsApp, email, address, areas served, social links, Search Console code, GST | `js/config.js` |
| Services, rates, "who we help", steps, FAQ, reviews (English + हिंदी) | `js/content.js` |
| Text of each service landing page (intro, who it is for, FAQ, alt text) | `tools/seo-content.js` |
| Home page layout and wording | `tools/templates/home.html` (Hindi is in `data-hi="..."` next to each English text) |
| Header / footer | `tools/templates/header.html`, `footer.html` |
| Service and rate-list page layout, page titles, structured data | `tools/build.js` |
| Terms / Privacy / Refund (drafts) | `LEGAL` in `tools/build.js` |
| Colours, fonts | `:root { ... }` in `css/styles.css` |
| Images | `images/` (illustrations are placeholders, replace with real photos: keep the file name) |

Do not edit the generated `.html` files by hand; the next build overwrites them.

## SEO

Full details: [seo/SEO-GUIDE.md](seo/SEO-GUIDE.md). Backlinks, listings, reviews and copy-paste profile text: [seo/BACKLINKS-AND-LISTINGS.md](seo/BACKLINKS-AND-LISTINGS.md).

In short:
- While `url`, `city`, `phone`, `email` or the street address in `js/config.js` are still placeholders, the whole site is hidden from search engines (`noindex` and `Disallow: /`).
- When they are all real, `node tools/build.js` switches indexing on by itself.
- Sample reviews are hidden automatically on a live site. Put real feedback in `js/content.js` with `real: true`.

## Rates: how they are shown

Each care service has four rates, exactly as in the rate list: **Hourly, 8 hours, Day care, 24 hours**. Nursing procedures (Foley catheter ₹699, IV injection ₹299, IM injection ₹199) have one rate each. Home ICU Setup is ₹10,30,000 (2 nursing staff + 1 GDA, fully set up). `gst` in `js/config.js` is `0`, so prices appear exactly as in the rate list.

## To confirm with the client

- The last line of the rate list says "Under 5km distance & above 5km 7.80 paisa". The site shows **"Travel charge: ₹7.80 per km above 5 km."** Is that right, and is travel within 5 km free? (`distance` in `js/content.js`)
- Is **GST** included in these rates or extra?
- Are the 8-hour, day care and 24-hour rates **totals**, and how many hours is "day care"?
- Procedure rates: per visit? Home ICU ₹10,30,000: one-time, monthly, or per patient? What exactly is included?

## Go-live checklist

- [ ] Real details in `js/config.js` (all of: url, city, phone, WhatsApp, email, address).
- [ ] `node tools/build.js` says `Indexing: ON` and `SEO check: no warnings`.
- [ ] Real reviews with `real: true`, or leave them out.
- [ ] Legal pages filled in and checked by a lawyer.
- [ ] Deploy, add the domain, redirect `www` / non-`www` to one version.
- [ ] Google Search Console: verify, submit `/sitemap.xml`, request indexing for the main pages. Bing Webmaster Tools: import from Search Console.
- [ ] Google Business Profile and the listings in the SEO folder.
- [ ] Replace the placeholder illustrations with real photos when available.

## Images

The service illustrations are original SVGs made for this project (no licensing issues), coloured to match the logo.
