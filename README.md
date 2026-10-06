# Seva Saathi — care & assistance website (placeholder content)

Static site: open `index.html` in a browser (no build step, no install).
Live copy is deployed on Vercel (project `nurse`).

## Kya kahan badalna hai

| Cheez | File |
|---|---|
| Brand name, city, phone, WhatsApp number, email, address, GST % | `js/config.js` |
| Services, hourly prices, plans, "who we help", reviews, FAQ, safety/trust steps (English + हिंदी) | `js/content.js` |
| Page headings and paragraphs (English in the HTML, Hindi in `data-hi="..."`) | `index.html` |
| Terms / Privacy / Refund pages (draft templates) | `terms.html`, `privacy.html`, `refund.html` |
| Colors, fonts, spacing | top of `css/styles.css` (`:root { ... }`) |
| Images | `images/` — replace any `.svg` with your own photo (keep the name, or update `img:` in `js/content.js`) |
| Share preview image (WhatsApp / Facebook link preview) | `images/og-image.png` (1200×630) |
| Security headers, caching | `vercel.json` |

**WhatsApp number:** set `whatsapp` in `js/config.js` (country code + number, digits only, e.g. `919876543210`). Every "Book on WhatsApp" button and the booking form use it.

## Booking form

The "Plan your visit" section builds a ready WhatsApp message (service, time, place, who to meet, estimate) and opens WhatsApp. Nothing is stored anywhere. The estimate comes from `hourly` and `plans` in `js/content.js`.

## Go-live checklist

Everything is a **placeholder** right now:

- [ ] `js/config.js`: real brand, city, phone, WhatsApp, email, address.
- [ ] `js/content.js`: real prices. Reviews are samples (tagged "Sample"); replace with real feedback.
- [ ] Keep only the claims your business truly meets: police verification, 6-step screening, female Saathis 9–6, 24×7, PINs, UPI after service, fees.
- [ ] Home Nursing: staff must be qualified and the wording must match what you are allowed to offer.
- [ ] Fill the `[bracketed]` parts in the three legal pages and have them reviewed.
- [ ] In `index.html`, delete the `<meta name="robots" content="noindex, nofollow">` line (also in the three legal pages) so Google can index the site. It is there so placeholder content does not get indexed.
- [ ] Update `og:image` in `index.html` to your real domain, and regenerate `images/og-image.png` with your brand name.
- [ ] Add your own domain in the Vercel dashboard (Project → Settings → Domains).

## Deploy again

```bash
vercel deploy --prod --yes
```

## Images

All illustrations in `images/` were generated for this project (original SVGs), so there are no licensing issues.
