# SEO guide: Sewa Saathi Home Care

What is already built into the site, how to switch it on, and what to do after launch.
Off-page work (listings, backlinks, reviews) is in [BACKLINKS-AND-LISTINGS.md](BACKLINKS-AND-LISTINGS.md).

No one can promise a ranking. Google decides. What this site gives you is a clean technical base, one page for every keyword that matters, and the business data Google needs for local results. The rest is time, a good Google Business Profile and real reviews.

## 1. What is already built

**Pages (every one exists in English and in Hindi)**

| Page | URL | Target search |
|---|---|---|
| Home | `/` and `/hi/` | home care in {city}, nursing care at home |
| Rate list | `/rate-list/` | home care rates in {city}, nurse charges per hour |
| 10 service pages | `/services/<name>/` | patient care at home {city}, elder care, critical care, Alzheimer's care, Parkinson's care, tracheostomy care, baby care, attendant, nursing procedures (injection, Foley catheter, IV), home ICU setup |

Each service page has its own title, description, one `<h1>`, intro, rates, "what is included", "who it is for", booking steps, FAQ and links to related services.

**Technical SEO**
- All text is in the HTML itself (not drawn by JavaScript), so Google, Bing and AI search tools read it immediately.
- Unique `<title>` and meta description on every page, canonical URL, Open Graph and Twitter cards with a 1200×630 share image.
- English and Hindi pages linked with `hreflang` (plus `x-default`), so Hindi searchers get Hindi pages. The EN / हि switch is a real link.
- `sitemap.xml` (with both languages) and `robots.txt`, written by the build.
- Structured data (JSON-LD): `LocalBusiness` / `MedicalBusiness` with your address, phone, areas served, price range and the full list of services with prices; `WebSite`; `Service` with `Offer` prices on each service page; `FAQPage`; `BreadcrumbList`.
- One `<h1>` per page, proper heading order, descriptive `alt` text, image width and height set (no layout shift), lazy loading below the fold, a small logo for the header, Devanagari fonts only on Hindi pages.
- Clean URLs with a trailing slash, security headers and long caching for CSS and JS (`vercel.json`).
- Internal links everywhere: home → service pages → rate list → related services, and the footer links to every service.
- Sample reviews are **never** published on a live site (see below), and no fake review markup is generated.

**Build check.** `node tools/build.js` ends with an SEO report: title and description length, duplicates, one `<h1>`, images without `alt`, broken internal links and invalid structured data. Aim for "no warnings".

## 2. Going live (do these in order)

1. **Real details.** Fill `js/config.js`: `url` (your final web address, e.g. `https://www.yourdomain.in`), `city`, `phone`, `whatsapp`, `email`, `address`, `region`, and if you have them `serviceAreas` (neighbourhoods), `geo`, and the `social` links.
2. **Build.** Run `node tools/build.js`. While any of url / city / phone / email / street is still a placeholder, the site stays hidden from search (`noindex` and `Disallow: /`). When all are real, the build turns indexing on by itself and the build log says `Indexing: ON`.
3. **Replace the sample reviews.** Put real feedback in `js/content.js` and add `real: true` to each. Until then the live site shows no reviews section.
4. **Fill the legal pages.** Replace the `[bracketed]` parts in `tools/build.js` (the `LEGAL` text) and have them checked. They stay `noindex`.
5. **Deploy**, then point your domain at the host. Pick one version (with or without `www`) and redirect the other to it.
6. **Google Search Console** (free, essential):
   - Add the property for your domain, choose "URL prefix" and paste the verification code into `googleVerification` in `js/config.js`, rebuild, deploy, then press Verify. (A DNS record also works.)
   - Open Sitemaps and submit `https://yourdomain/sitemap.xml`.
   - Use URL Inspection → Request indexing for: home, `/rate-list/`, and the 3 to 4 services you most want to sell.
7. **Bing Webmaster Tools**: import the site from Search Console in one click (powers Bing, DuckDuckGo, Yahoo and several AI assistants).
8. **Google Business Profile**: this is the biggest lever for "near me" searches. Follow the steps in the listings guide.
9. Open `https://yourdomain/`, the Hindi home `/hi/`, one service page and the rate page on your phone and check that the phone number, WhatsApp button and address are right.

## 3. Keyword map (one main keyword per page, never two pages for the same one)

| Page | Main keyword | Also covers |
|---|---|---|
| `/` | home care in {city} | nursing care at home, caregiver for elderly {city} |
| `/rate-list/` | home care rates {city} | nurse charges per hour, attendant charges per day |
| `/services/patient-care/` | patient care at home {city} | bedridden patient care, post-surgery care at home |
| `/services/elder-care/` | elder care at home {city} | caretaker for old age person |
| `/services/critical-care/` | critical care nursing at home {city} | ICU patient care at home |
| `/services/alzheimers-care/` | Alzheimer's care at home {city} | dementia caregiver |
| `/services/parkinsons-care/` | Parkinson's care at home {city} | caregiver for Parkinson's patient |
| `/services/tracheostomy-care/` | tracheostomy care at home {city} | trach tube nurse |
| `/services/baby-care/` | baby care at home {city} | newborn care nurse, baby sitter |
| `/services/attendant/` | patient attendant {city} | hospital attendant, 24 hour attendant |
| `/services/nursing-procedures/` | injection at home {city} | Foley catheter at home, IV injection at home |
| `/services/home-icu-setup/` | home ICU setup {city} | ICU at home |

Hindi pages target the same ideas in Hindi, for example "घर पर मरीज़ की देखभाल", "बुज़ुर्गों की देखभाल", "नर्स घर पर".

## 4. After launch: the routine that actually moves rankings

**Weeks 1 to 2**
- Finish Google Business Profile and the main listings (see the listings guide). Keep the name, address and phone **exactly** the same everywhere.
- Check Search Console → Pages: all 28 pages should become "Indexed" within a few weeks.

**Every month**
- Ask each happy family for a Google review (message templates are in the listings guide). Reviews and a complete profile drive local rankings more than anything on the website itself.
- Post one update on the Google Business Profile (a tip, a photo, an offer).
- Read Search Console → Performance: which searches bring impressions, which pages get clicks. Improve the title and description of pages that show impressions but few clicks.
- Add one useful page. Ideas (have a doctor or senior nurse review medical facts before publishing): "How to choose a home nurse", "Home care or hospital stay: how to decide", "Caring for a bedridden patient: a daily checklist", "Alzheimer's: tips for families", "Newborn care at home: the first month", "What to ask a home care agency".
- After any change to `js/config.js`, `js/content.js` or the templates, run `node tools/build.js` again and deploy.

**Typical timeline.** Pages are usually indexed in days to weeks. Rankings for low-competition local searches can appear in 4 to 12 weeks. Competitive terms take longer and depend on reviews, listings and backlinks.

## 5. Things that hurt SEO (avoid)

- Publishing invented reviews or ratings. The build keeps sample reviews off the live site on purpose.
- Copying text from another company's site (it is duplicate content and a copyright problem). All text here is original.
- Buying backlinks, link-exchange networks or "10,000 backlinks" services. Google penalises these.
- Changing the business name, phone or address on one profile only. Keep them identical everywhere.
- Making medical promises ("cures", "guaranteed recovery"). Keep the wording about care and support, as advised by the doctor.
