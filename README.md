# Sewa Saathi Home Care: website

Static site. Open `index.html` in a browser (no build step, no install).

Logo, colours and rates come from the client:
- Logo: `images/brand/` (originals), `images/logo-emblem.png`, `images/logo-full-homecare.png`, `images/logo-full.png` (transparent PNGs).
- Colours: taken from the logo, navy `#052f74` and teal `#039b9b`. They live at the top of `css/styles.css` (`:root { ... }`).
- Rates: from "Rate list.docx", in `js/content.js` (`services[].p`, `procedures`, `setup`).

## Kya kahan badalna hai

| Cheez | File |
|---|---|
| Brand name, city, phone, WhatsApp number, email, address, GST % | `js/config.js` |
| Services, rates, "who we help", FAQ, reviews, trust and commitment steps (English + हिंदी) | `js/content.js` |
| Page headings and paragraphs (English in the HTML, Hindi in `data-hi="..."`) | `index.html` |
| Terms / Privacy / Refund pages (draft templates) | `terms.html`, `privacy.html`, `refund.html` |
| Colours, fonts | top of `css/styles.css` |
| Illustrations (placeholders, replace with real photos any time) | `images/*.svg` |
| Link-preview image (WhatsApp / Facebook) | `images/og-image.png` (1200×630) |

**WhatsApp number:** set `whatsapp` in `js/config.js` (country code + number, digits only, e.g. `919876543210`). Every Book button and the booking form use it.

## Rates: how they are shown

Each care service has four rates, exactly as in the rate list: **Hourly, 8 hours, Day care, 24 hours**. Nursing procedures (Foley catheter, IV injection, IM injection) have one rate each. Home ICU Setup is ₹10,30,000 (2 nursing staff + 1 GDA, fully set up).

`gst` in `js/config.js` is `0`, so prices appear exactly as in the rate list. Set it to `18` (for example) to add GST everywhere.

## To confirm with the client

- The last line of the rate list says "Under 5km distance & above 5km 7.80 paisa". The site shows it as **"Travel charge: ₹7.80 per km above 5 km."** Is that right, and is travel within 5 km free? Edit `distance` in `js/content.js`.
- Is **GST** included in these rates or extra?
- Are the 8-hour, day care and 24-hour rates **totals** (as shown), and how many hours is "day care"?
- Procedure rates (Foley catheter ₹699, IV ₹299, IM ₹199): per visit?
- Home ICU Setup ₹10,30,000: one-time, monthly, or per patient? What exactly is included?

## Go-live checklist

- [ ] `js/config.js`: real city, phone, WhatsApp, email, address, Instagram.
- [ ] `js/content.js`: reviews are **samples** (tagged "Sample"). Replace them with real feedback.
- [ ] Keep only the claims the business really meets (screening steps, staff training, "you get the caregiver's details before the visit", 24-hour care).
- [ ] Fill the `[bracketed]` parts in the three legal pages and have them reviewed.
- [ ] In `index.html` and the three legal pages, delete `<meta name="robots" content="noindex, nofollow">` so Google can index the site.
- [ ] Make `og:image` in `index.html` an absolute URL on the real domain.
- [ ] Add the real domain in the hosting dashboard.

## Images

The service illustrations are original SVGs made for this project (no licensing issues), coloured to match the logo. Swap any of them for real photos: keep the file name, or change `img:` in `js/content.js`.
