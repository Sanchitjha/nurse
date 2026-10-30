# Backlinks, listings and reviews: Sewa Saathi Home Care

A backlink is a link to your website from another website. Google treats good ones as votes of trust.
Nobody can create them for you from inside a website, and automatic tools that submit your site to thousands of places get sites penalised. What works is a steady list of real profiles, real partners and real reviews. This guide is that list, with copy-paste text for each.

**Rule 1: keep the name, address and phone number identical everywhere** (called NAP). Write them once below and paste the same text every time.

```
Name:     Sewa Saathi Home Care
Address:  [street, area, city, PIN]
Phone:    [same number as on the website]
Website:  https://[your domain]/
```

## Week 1: profiles you create yourself (free, 3 to 4 hours in total)

These need your own logins, phone verification and sometimes a postcard, so they cannot be done for you. Each one gives a trusted link and helps people find you.

| # | Where | What to set | Why |
|---|---|---|---|
| 1 | **Google Business Profile** (business.google.com) | Category: *Home health care service* (add *Nursing agency* and *Elder care home service* if offered). Service area: your city and neighbourhoods. Add every service with its rate. Add the WhatsApp number. Upload the logo, a cover image and 5+ photos. Link the website to `/`. | The most important listing for "near me" searches |
| 2 | **Bing Places** (bingplaces.com) | Import from Google Business Profile | Bing, DuckDuckGo, Yahoo, AI assistants |
| 3 | **Apple Business Connect** | Same details | Apple Maps and Siri |
| 4 | **Justdial** | Free listing, same NAP, categories: *Home Nursing Services*, *Elder Care Services*, *Attendant Services* | Very strong in India |
| 5 | **Sulekha** | Same | Local service directory |
| 6 | **Facebook Page** | Name, About text, website link, WhatsApp button | Link plus a place to show photos and posts |
| 7 | **Instagram** | Bio with the website link | Link plus trust |
| 8 | **LinkedIn Company Page** | About text, website, industry *Hospitals and Health Care* | Trusted domain, helps with hiring caregivers |
| 9 | **YouTube channel** | A short intro video, website link in the About section | Video results in search |
| 10 | **WhatsApp Business** | Business profile, catalogue of the services, website link | Where customers already talk to you |

When these exist, paste the links into `social` in `js/config.js` (Google Business link as `googleBusiness`) and run `node tools/build.js`. The site then lists them in its structured data (`sameAs`) and footer.

Also worth doing, only where it fits: IndiaMART or TradeIndia (more for B2B), Practo or Lybrate (if you work with doctors), and local city portals or the "business" section of local news sites.

## Month 1 to 3: backlinks that come from real relationships

Ask for **a link to the matching page** (a service page for a service, the home page for the company), not always the home page.

1. **Doctors, clinics and hospitals you work with.** Ask them to add you under "recommended home care" with a link to `/services/patient-care/` or the right service. Offer a courtesy listing for them on your site if you like.
2. **Pharmacies and diagnostic labs.** They meet your customers daily. Offer a pamphlet with your QR code and ask for a link on their website or Google profile.
3. **Nursing colleges and training institutes.** Offer a placement partnership. Institutes usually list "hiring partners" with links.
4. **NGOs, senior-citizen clubs, RWAs, temples and community groups.** Offer a free talk or health camp on elder care. Event pages and sponsor lists link to you.
5. **Local press.** Send a short press note to local newspapers' websites when you start, add a service or hit a milestone. Many city news portals publish these with a link.
6. **Guest articles.** Write a helpful article for a local health, parenting or senior-living blog ("How to choose a home nurse", "Newborn care in the first month"). Have a doctor or senior nurse check it. Include one link to the matching page.
7. **Unlinked mentions.** Search Google for "Sewa Saathi". When someone mentions you without a link, politely ask them to add one.
8. **Your own people.** Every partner, supplier and caregiver profile that mentions you can include your website address.

**Anchor text** (the clickable words): mostly the brand name or the plain address (`Sewa Saathi Home Care`, `www.yourdomain.in`). Sometimes natural phrases such as "home care in {city}" or "elder care at home". Never repeat the same keyword phrase everywhere.

**Skip:** paid links, link exchange groups, comment or forum spam, "submit to 1000 directories" tools, hidden links. They do harm.

## Reviews: the strongest local ranking signal

Ask every satisfied family for a Google review, a day or two after the care ends. Ask only real customers and never offer money for a good review.

Direct link: in Google Business Profile press *Ask for reviews* and copy the link.

**WhatsApp message (English)**
> Hello [Name], thank you for trusting Sewa Saathi Home Care with [patient's name]'s care. If you were happy with our service, could you share a short review on Google? It helps other families find us. Here is the link: [review link]. Thank you!

**WhatsApp message (Hindi)**
> नमस्ते [नाम] जी, [मरीज़ का नाम] की देखभाल के लिए सेवा साथी होम केयर पर भरोसा करने का धन्यवाद। अगर आपको हमारी सेवा अच्छी लगी हो तो Google पर एक छोटा रिव्यू दे दीजिए। इससे और परिवारों को हमें ढूँढने में मदद मिलती है। लिंक: [review link]। धन्यवाद!

Reply to every review, good or bad, politely and within two days. When you have real reviews, copy a few into `js/content.js` with `real: true` so they also show on the website.

## Copy-paste text for profiles

**Business description, short (about 50 words)**
> Sewa Saathi Home Care provides trained nurses, caregivers and attendants at home in {city}. Services include patient care, elder care, critical care, Alzheimer's and Parkinson's care, tracheostomy care, baby care, nursing procedures such as injections and Foley catheter, and Home ICU Setup. Clear rates. Book on WhatsApp.

**Business description, medium (about 100 words)**
> Care like family, at your own home. Sewa Saathi Home Care sends trained nurses, caregivers and attendants to your home in {city} for patient care, elder care, critical care, Alzheimer's care, Parkinson's care, tracheostomy care and baby care. We also provide nursing procedures (Foley catheter, IV and IM injections) on your doctor's prescription, and a complete Home ICU Setup with 2 nursing staff and 1 GDA. Every care service has clear rates: hourly, 8 hours, day care and 24 hours. Call or message us on WhatsApp, in English or Hindi.

**Hindi description (about 60 words)**
> अपनों जैसे देखभाल, अपने घर पे। सेवा साथी होम केयर {city} में आपके घर पर प्रशिक्षित नर्स, केयरगिवर और अटेंडेंट भेजता है: मरीज़ की देखभाल, बुज़ुर्ग देखभाल, क्रिटिकल केयर, अल्ज़ाइमर और पार्किंसन देखभाल, बेबी केयर, इंजेक्शन और कैथेटर, और होम ICU सेटअप। प्रति घंटा से 24 घंटे तक साफ़ दरें। WhatsApp पर बुक करें।

**Services list to add on each profile** (with the rates from the rate list)
Patient Care, Elder Care, Critical Care, Alzheimer's Care, Parkinson's Care, Tracheostomy Care, Baby Care, Attendant, Foley catheter, IV injection, IM injection, Home ICU Setup.

**Categories to look for:** Home health care service, Nursing agency, Elder care service, Home nursing, Attendant service, Baby care.

**Short bio for Instagram, Facebook, X (under 150 characters)**
> Care like family, at your own home. Trained nurses, caregivers & attendants in {city}. Clear rates. Book on WhatsApp.

**Images to prepare:** logo (square), cover image 1200×630 (use `images/og-image.png`), 5 to 10 real photos of the team in uniform and (with permission) of care in progress. Real photos beat the illustrations.

## Outreach email (for doctors, clinics, institutes, bloggers)

> Subject: Home care partner for your patients in {city}
>
> Hello [Name],
>
> I am [your name] from Sewa Saathi Home Care. We send trained nurses, caregivers and attendants to patients' homes in {city}, with clear published rates: https://[your domain]/rate-list/
>
> We would be glad to be a trusted option for your patients who need care after discharge. If you have a "recommended services" or "partners" page, we would appreciate a link to https://[your domain]/. Happy to return the favour with a listing for you on our site.
>
> Thank you for your time.
> [Name], [phone]

## Tracking sheet (copy into a spreadsheet)

| Date | Where | Link to your profile or the page that links to you | Status (planned / pending / live) | Notes |
|---|---|---|---|---|
| | Google Business Profile | | | verification code or postcard? |
| | Justdial | | | |
| | | | | |

Review it once a month in Google Search Console → Links, which lists the sites linking to you.

## What cannot be automated

Creating accounts, verifying by phone or postcard, accepting each directory's terms, and asking real customers for reviews all need you. Everything on the website side is ready: the structured data, the profile links (`sameAs`), the sitemap and one dedicated page for every service you can ask partners to link to.
