# Seva Saathi — care & assistance website (placeholder content)

Static site: just open `index.html` in a browser (no build step, no install).

## Kya kahan badalna hai

| Cheez | File |
|---|---|
| Brand name, city, phone, WhatsApp number, email, address, GST % | `js/config.js` |
| Services, hourly prices, plans, reviews, FAQ, safety/trust steps (English + हिंदी) | `js/content.js` |
| Page headings and paragraphs (English text in the HTML, Hindi in `data-hi="..."`) | `index.html` |
| Colors, fonts, spacing | top of `css/styles.css` (`:root { ... }`) |
| Images | `images/` — replace any `.svg` with your own photo (keep the file name, or update `img:` in `js/content.js`) |

**WhatsApp number:** set `whatsapp` in `js/config.js` (country code + number, digits only, e.g. `919876543210`). Every "Book on WhatsApp" button picks it up automatically.

## Zaroor check karein before going live

Everything is a **placeholder**. In particular:

- **Phone, email, address, city** are dummy values.
- **Prices and plans** (`hourly` in `js/content.js`) are examples.
- **Reviews** are samples and are tagged "Sample" — replace with real customer feedback (never publish invented reviews as real).
- **Claims** like police verification, 6-step screening, female caregivers 9–6, 24×7 support, Start/End PIN, "pay after service via UPI", return/arrival fees: keep only what your business actually does.
- **Home Nursing**: make sure the people you send are actually qualified, and that the wording matches what you are legally allowed to offer.
- Footer links (Terms, Privacy, Refund policy) are `#` — add real pages.

## Images

All illustrations in `images/` were generated for this project (original SVGs), so there are no licensing issues. Swap them for real photos whenever you like.
