#!/usr/bin/env node
/* ==========================================================================
   Static site builder:  node tools/build.js

   Reads  js/config.js (business details), js/content.js (services and rates),
          tools/seo-content.js (landing-page text), tools/templates/*.html
   Writes every page as plain HTML (English at /, Hindi at /hi/), plus
          sitemap.xml and robots.txt, then runs an SEO check.

   No dependencies. Run it again after changing config or content.
   ========================================================================== */
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { transform, setAttr, escText, escAttr } = require("./lib/html");
const { Shared } = require("../js/shared.js");
const SEO = require("./seo-content.js");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const write = (p, s) => { const f = path.join(ROOT, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); };
function loadGlobal(file) { const w = {}; new Function("window", read(file))(w); return w; }

const SITE = loadGlobal("js/config.js").SITE;
const DATA = loadGlobal("js/content.js").CONTENT;
const ORIGIN = SITE.url.replace(/\/+$/, "");
const TODAY = new Date().toISOString().slice(0, 10);
const LANGS = ["en", "hi"];

/* ---------- is the site ready to be indexed? ---------- */
const problems = [];
if (/example\.com/i.test(SITE.url)) problems.push("url (js/config.js: the live website address)");
if (/your city/i.test(SITE.city)) problems.push("city");
if (SITE.phone === "+91 98765 43210" || /9876543210/.test(SITE.whatsapp)) problems.push("phone / whatsapp");
if (/example\.com/i.test(SITE.email)) problems.push("email");
if (/your street/i.test(SITE.address.street)) problems.push("address.street");
const READY = problems.length === 0;
const addressLine = [SITE.address.street, SITE.address.locality, [SITE.region, SITE.address.postalCode].filter(Boolean).join(" ")].filter(Boolean).join(", ");

const hashOf = (f) => crypto.createHash("md5").update(fs.readFileSync(path.join(ROOT, f))).digest("hex").slice(0, 8);
const ASSET_V = { css: hashOf("css/styles.css"), main: hashOf("js/main.js"), config: hashOf("js/config.js"), content: hashOf("js/content.js"), shared: hashOf("js/shared.js") };

/* ---------- text used only by the generated pages ---------- */
const B = {
  en: {
    atHome: "AT HOME", details: "Details & rates", book: "Book on WhatsApp", icuAsk: "Ask about ICU setup",
    leadLive: "{n} care services for your loved ones at home in {city}, plus nursing procedures and a complete Home ICU Setup. Every care service has four rates: hourly, 8 hours, day care and 24 hours.",
    fee: "Care rates start at <b>₹{min}</b> per hour.", seeRates: "See the full rate list",
    priceBase: "Prices shown are as per our rate list.", priceGst: "{gst}% GST is extra.",
    procMsg: "Hi, I would like to book a nursing procedure.", icuMsg: "Hi, I would like to know about Home ICU Setup.",
    popular: "Our services:", bookSvc: "Hi, I would like to book {name}.", bookNow: "Book {name} on WhatsApp",
    sample: "Sample", reviewNoteSample: "These are sample reviews. Replace them with real customer feedback before launch.",
    bookCare: "Book care", crumbHome: "Home", crumbServices: "Services", crumbRates: "Rate list",
    eyebrowSvc: "Home care in {city}", h1Svc: "{name} at Home in {city}",
    ratesH2: "{name} rates in {city}", includedH2: "What {name} includes", whoH2: "Who {name} is for",
    howH2: "How to book {name}", faqH2: "Questions about {name}", relatedH2: "Other care services you may need",
    seeAllRates: "See the full rate list", rateNote: "Choose hourly, 8 hours, day care or 24 hours. Our team confirms the final amount on WhatsApp.",
    ctaH2: "Need {name} at home?", ctaP: "Message or call us. We will understand the situation, share the rate and arrange a trained caregiver.",
    callUs: "Call us", procRatesNote: "Our team confirms the final amount when you book.",
    rate: { h1: "Home Care Rates in {city}", eyebrow: "Rate list", lead: "Clear rates for home care in {city}, from one hour to 24 hours. Every care service has four rates: hourly, 8 hours, day care and 24 hours. Nursing procedures and Home ICU Setup are listed below.", careH2: "Care service rates", procH2: "Nursing procedures and Home ICU Setup", linksH2: "Learn more about each service", faqH2: "Questions about our rates", ctaH2: "Want the exact rate for your situation?" },
    e404: { h1: "Page not found", p: "The page you are looking for does not exist or has moved.", link: "Go to the home page" },
    areasChipLabel: "Areas",
  },
  hi: {
    atHome: "घर पर", details: "जानकारी और दरें", book: "WhatsApp पर बुक करें", icuAsk: "ICU सेटअप के बारे में पूछें",
    leadLive: "{city} में आपके अपनों के लिए घर पर {n} देखभाल सेवाएँ, साथ में नर्सिंग प्रक्रियाएँ और पूरा होम ICU सेटअप। हर देखभाल सेवा की चार दरें: प्रति घंटा, 8 घंटे, डे केयर और 24 घंटे।",
    fee: "देखभाल की दरें <b>₹{min}</b> प्रति घंटा से शुरू।", seeRates: "पूरी रेट लिस्ट देखें",
    priceBase: "दिखाई गई कीमतें हमारी रेट लिस्ट के अनुसार हैं।", priceGst: "{gst}% GST अतिरिक्त।",
    procMsg: "नमस्ते, मुझे नर्सिंग प्रक्रिया के लिए बुकिंग करनी है।", icuMsg: "नमस्ते, मुझे होम ICU सेटअप की जानकारी चाहिए।",
    popular: "हमारी सेवाएँ:", bookSvc: "नमस्ते, मैं {name} बुक करना चाहता/चाहती हूँ।", bookNow: "WhatsApp पर {name} बुक करें",
    sample: "Sample", reviewNoteSample: "ये नमूना समीक्षाएँ हैं। लॉन्च से पहले इन्हें असली ग्राहकों की राय से बदलें।",
    bookCare: "बुक करें", crumbHome: "होम", crumbServices: "सेवाएँ", crumbRates: "रेट लिस्ट",
    eyebrowSvc: "{city} में होम केयर", h1Svc: "{city} में घर पर {name}",
    ratesH2: "{city} में {name} की दरें", includedH2: "{name} में क्या शामिल है", whoH2: "{name} किनके लिए है",
    howH2: "{name} कैसे बुक करें", faqH2: "{name} से जुड़े सवाल", relatedH2: "आपको और किन देखभाल सेवाओं की ज़रूरत हो सकती है",
    seeAllRates: "पूरी रेट लिस्ट देखें", rateNote: "प्रति घंटा, 8 घंटे, डे केयर या 24 घंटे चुनें। अंतिम राशि हमारी टीम WhatsApp पर पक्का करती है।",
    ctaH2: "घर पर {name} चाहिए?", ctaP: "हमें मैसेज या कॉल करें। हम आपकी स्थिति समझेंगे, दर बताएँगे और प्रशिक्षित केयरगिवर तय करेंगे।",
    callUs: "कॉल करें", procRatesNote: "बुकिंग के समय हमारी टीम अंतिम राशि बताती है।",
    rate: { h1: "{city} में होम केयर की दरें", eyebrow: "रेट लिस्ट", lead: "{city} में होम केयर की साफ़ दरें, एक घंटे से 24 घंटे तक। हर देखभाल सेवा की चार दरें हैं: प्रति घंटा, 8 घंटे, डे केयर और 24 घंटे। नर्सिंग प्रक्रियाएँ और होम ICU सेटअप नीचे दिए हैं।", careH2: "देखभाल सेवाओं की दरें", procH2: "नर्सिंग प्रक्रियाएँ और होम ICU सेटअप", linksH2: "हर सेवा के बारे में जानें", faqH2: "हमारी दरों से जुड़े सवाल", ctaH2: "अपनी स्थिति की सही दर जाननी है?" },
    e404: { h1: "पेज नहीं मिला", p: "आप जो पेज ढूँढ रहे हैं वो मौजूद नहीं है या हट गया है।", link: "होम पेज पर जाएँ" },
    areasChipLabel: "इलाक़े",
  },
};

/* ---------- per-language context ---------- */
const minHourly = Math.min(...DATA.services.map((s) => s.p.hourly));
function makeCtx(lang) {
  const S = Shared.create(SITE, DATA, lang);
  const base = lang === "hi" ? "/hi" : "";
  const c = {
    lang, S, base, tx: S.tx, inr: S.inr, fmt: S.fmt,
    b: (k, v) => S.fmt(B[lang][k], v),
    wa: (text) => "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text || SITE.defaultMessage),
    tokens: { foley: S.inr(DATA.procedures.find((p) => p.id === "foley").price), iv: S.inr(DATA.procedures.find((p) => p.id === "iv").price), im: S.inr(DATA.procedures.find((p) => p.id === "im").price), icu: S.inr(DATA.setup.price) },
  };
  /* SEO text with {from}/{foley}/... tokens. key = service id (its own "from" rate) */
  c.sx = (o, key) => {
    const svc = DATA.services.find((s) => s.id === key);
    return S.fmt(o[lang] || o.en, Object.assign({}, c.tokens, { from: S.inr(svc ? svc.p.hourly : minHourly) }));
  };
  c.url = (logical) => base + logical;                       // '/rate-list/' -> '/hi/rate-list/'
  c.svcUrl = (key) => base + "/services/" + SEO.services[key].slug + "/";
  return c;
}

const icon = (id) => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (DATA.icons[id] || "") + "</svg>";
const stagger = ["", "d1", "d2"];
const absUrl = (p) => ORIGIN + p;

/* ---------- renderers for the dynamic blocks (all output is static HTML) ---------- */
const tierBoxes = (c, p) => DATA.tiers.map((t) => '<div class="tier"><small>' + c.tx(t.label) + "</small><b>" + c.inr(p[t.key]) + "</b></div>").join("");

function renderServiceCards(c) {
  const care = DATA.services.map((s, i) => {
    const seo = SEO.services[s.id];
    const name = c.tx(s.name);
    const url = c.svcUrl(s.id);
    return (
      '<article class="svc reveal ' + stagger[i % 3] + '">' +
      '<div class="svc-img"><img src="/images/' + s.img + '" alt="' + escAttr(c.sx(seo.alt, s.id)) + '" loading="lazy" width="800" height="500">' +
      '<div class="svc-cap"><b>' + name + "</b><span>" + c.tx(s.cap) + "</span></div></div>" +
      '<div class="svc-body"><div class="svc-top"><span class="ico">' + icon(s.id) + '</span><span class="pill live">' + c.b("atHome") + "</span></div>" +
      '<h3><a href="' + url + '">' + name + "</a></h3><p>" + c.tx(s.desc) + '</p><div class="tiers">' + tierBoxes(c, s.p) + "</div>" +
      '<a class="btn btn-outline" href="' + url + '">' + c.b("details") + '<span class="sr-only"> (' + name + ")</span></a></div></article>"
    );
  });
  const pi = DATA.proceduresInfo;
  const pSeo = SEO.services.procedures;
  const pUrl = c.svcUrl("procedures");
  const procCard =
    '<article class="svc reveal ' + stagger[DATA.services.length % 3] + '">' +
    '<div class="svc-img"><img src="/images/' + pi.img + '" alt="' + escAttr(c.sx(pSeo.alt)) + '" loading="lazy" width="800" height="500"><div class="svc-cap"><b>' + c.tx(pi.name) + "</b><span>" + c.tx(pi.cap) + "</span></div></div>" +
    '<div class="svc-body"><div class="svc-top"><span class="ico">' + icon("procedures") + '</span><span class="pill live">' + c.b("atHome") + "</span></div>" +
    '<h3><a href="' + pUrl + '">' + c.tx(pi.name) + "</a></h3><p>" + c.tx(pi.desc) + '</p><ul class="proc-list">' +
    DATA.procedures.map((x) => "<li><span>" + c.tx(x.name) + "</span><b>" + c.inr(x.price) + "</b></li>").join("") +
    '</ul><a class="btn btn-outline" href="' + pUrl + '">' + c.b("details") + '<span class="sr-only"> (' + c.tx(pi.name) + ")</span></a></div></article>";
  return care.join("") + procCard;
}

function renderIcuBand(c) {
  const u = DATA.setup;
  const url = c.svcUrl("icu");
  return (
    '<div class="icu-band reveal"><div class="icu-img"><img src="/images/' + u.img + '" alt="' + escAttr(c.sx(SEO.services.icu.alt)) + '" loading="lazy" width="800" height="500"></div>' +
    '<div class="icu-copy"><span class="ico">' + icon("icu") + '</span><h3><a href="' + url + '">' + c.tx(u.name) + "</a></h3><p>" + c.tx(u.desc) + "</p>" +
    '<div class="icu-price"><b>' + c.inr(u.price) + "</b><span>" + c.tx(u.detail) + "</span></div>" +
    '<a class="btn btn-primary" href="' + url + '">' + c.b("details") + '</a></div></div>'
  );
}

function renderPriceTables(c) {
  const head = "<th>" + c.S.ui("service") + "</th>" + DATA.tiers.map((t) => "<th>" + c.tx(t.label) + "</th>").join("");
  const body = DATA.services.map((s) =>
    '<tr><td><a class="tbl-link" href="' + c.svcUrl(s.id) + '">' + c.tx(s.name) + "</a></td>" + DATA.tiers.map((t) => '<td data-label="' + c.tx(t.label) + '">' + c.inr(s.p[t.key]) + "</td>").join("") + "</tr>").join("");
  const procHead = "<th>" + c.S.ui("service") + "</th><th>" + c.S.ui("rate") + "</th>";
  const procBody =
    DATA.procedures.map((x) => '<tr><td><a class="tbl-link" href="' + c.svcUrl("procedures") + '">' + c.tx(x.name) + '</a></td><td data-label="' + c.S.ui("rate") + '">' + c.inr(x.price) + "</td></tr>").join("") +
    '<tr><td><a class="tbl-link" href="' + c.svcUrl("icu") + '">' + c.tx(DATA.setup.name) + "</a><small>" + c.tx(DATA.setup.detail) + '</small></td><td data-label="' + c.S.ui("rate") + '">' + c.inr(DATA.setup.price) + "</td></tr>";
  const note = c.tx(DATA.distance) + " " + c.b("priceBase") + (Number(SITE.gst) > 0 ? " " + c.b("priceGst") : "");
  return { head, body, procHead, procBody, note };
}

const renderList = (items, tpl) => items.map(tpl).join("");
const renderWho = (c) => renderList(DATA.who, (x, i) => '<article class="who-card reveal ' + stagger[i % 3] + '"><span class="ico">' + icon(x.i) + "</span><h3>" + c.tx(x.t) + "</h3><p>" + c.tx(x.d) + '</p><a class="link-u" href="' + c.svcUrl(x.s) + '">' + c.b("bookCare") + " →</a></article>");
const renderHow = (c) => renderList(DATA.how, (x, i) => '<div class="step reveal ' + stagger[i % 3] + '"><h3>' + c.tx(x.t) + "</h3><p>" + c.tx(x.d) + "</p></div>");
const renderTrust = (c) => renderList(DATA.trust, (x, i) => '<div class="tstep reveal ' + stagger[i % 3] + '"><span class="n">0' + (i + 1) + "</span><h3>" + c.tx(x.t) + "</h3><p>" + c.tx(x.d) + "</p></div>");
const renderSafety = (c) => renderList(DATA.safety, (x, i) => '<div class="scard ' + (x.alert ? "alert " : "") + "reveal " + stagger[i % 3] + '"><span class="ico">' + icon(x.i) + "</span><h3>" + c.tx(x.t) + "</h3><p>" + c.tx(x.d) + "</p></div>");
const renderFaq = (c, items) => renderList(items, (x) => "<details><summary>" + c.sx(x.q) + "</summary><p>" + c.sx(x.a) + "</p></details>");

function reviewsToShow() { return READY ? DATA.reviews.filter((r) => r.real) : DATA.reviews; }
function renderReviews(c, list) {
  return renderList(list, (x) => '<figure class="review reveal" style="margin:0 0 22px"><div class="stars" aria-label="5 stars">★★★★★</div><blockquote><p>“' + c.tx(x.q) + '”</p></blockquote><figcaption><span>' + c.tx(x.w) + "</span>" + (x.real ? "" : '<span class="sample-tag">' + c.b("sample") + "</span>") + "</figcaption></figure>");
}

function renderFootServices(c) {
  return (
    DATA.services.map((s) => '<li><a href="' + c.svcUrl(s.id) + '">' + c.tx(s.name) + "</a></li>").join("") +
    '<li><a href="' + c.svcUrl("procedures") + '">' + c.tx(DATA.proceduresInfo.name) + '</a></li><li><a href="' + c.svcUrl("icu") + '">' + c.tx(DATA.setup.name) + "</a></li>"
  );
}
function renderFootSocial() {
  const names = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", linkedin: "LinkedIn", googleBusiness: "Google", justdial: "Justdial" };
  return Object.keys(names).filter((k) => SITE.social[k]).map((k) => '<li><a href="' + escAttr(SITE.social[k]) + '" target="_blank" rel="me noopener">' + names[k] + "</a></li>").join("");
}

function renderSeoIntro(c) {
  const links = DATA.services.map((s) => '<a href="' + c.svcUrl(s.id) + '">' + c.tx(s.name) + "</a>").concat(['<a href="' + c.svcUrl("procedures") + '">' + c.tx(DATA.proceduresInfo.name) + "</a>", '<a href="' + c.svcUrl("icu") + '">' + c.tx(DATA.setup.name) + "</a>"]);
  return "<h2>" + c.sx(SEO.home.h2) + "</h2>" + SEO.home.p.map((p) => "<p>" + c.sx(p) + "</p>").join("") + '<p class="seo-links"><b>' + c.b("popular") + "</b> " + links.join(" · ") + "</p>";
}

function renderBookingOptions(c) {
  const S = c.S;
  const service =
    '<optgroup label="' + S.ui("optCare") + '">' + DATA.services.map((s) => '<option value="' + s.id + '">' + c.tx(s.name) + "</option>").join("") + "</optgroup>" +
    '<optgroup label="' + S.ui("optProc") + '">' + DATA.procedures.map((p) => '<option value="proc:' + p.id + '">' + c.tx(p.name) + "</option>").join("") + "</optgroup>" +
    '<optgroup label="' + S.ui("optIcu") + '"><option value="icu">' + c.tx(DATA.setup.name) + "</option></optgroup>";
  const hours = S.DURATIONS.map((code) => '<option value="' + code + '"' + (code === "h8" ? " selected" : "") + ">" + S.durationLabel(code) + "</option>").join("");
  return { service, hours };
}

/* ---------- template processing ---------- */
const FILL = () => ({ "data-brand": SITE.brand, "data-tagline": SITE.tagline, "data-city": SITE.city, "data-phone": SITE.phone, "data-email": SITE.email, "data-address": addressLine, "data-year": String(new Date().getFullYear()) });
const MARKER_ATTRS = ["data-hi", "data-html", "data-hi-ph", "data-hi-alt", "data-hi-label", "data-brand", "data-tagline", "data-city", "data-phone", "data-email", "data-address", "data-year", "data-wa", "data-wa-text", "data-tel", "data-mail"];

function localize(html, c) {
  const fill = FILL();
  return transform(html, (el) => {
    let attrs = el.attrs.slice();
    let inner;
    let changed = false;
    const hi = el.get("data-hi");
    if (c.lang === "hi") {
      if (hi !== undefined) inner = el.has("data-html") ? c.fmt(hi) : escText(c.fmt(hi));
      const map = [["data-hi-ph", "placeholder"], ["data-hi-alt", "alt"], ["data-hi-label", "aria-label"]];
      for (const [from, to] of map) { const v = el.get(from); if (v !== undefined) { attrs = setAttr(attrs, to, c.fmt(v)); changed = true; } }
    }
    if (inner === undefined) for (const k of Object.keys(fill)) if (el.has(k)) { inner = escText(fill[k]); break; }
    if (el.has("data-wa")) { attrs = setAttr(attrs, "href", c.wa(el.get("data-wa-text") || undefined)); attrs = setAttr(attrs, "target", "_blank"); attrs = setAttr(attrs, "rel", "noopener"); changed = true; }
    if (el.has("data-tel")) { attrs = setAttr(attrs, "href", "tel:" + SITE.phone.replace(/[^+\d]/g, "")); changed = true; }
    if (el.has("data-mail")) { attrs = setAttr(attrs, "href", "mailto:" + SITE.email); changed = true; }
    const cleaned = attrs.filter((a) => !MARKER_ATTRS.includes(a.name));
    if (cleaned.length !== attrs.length) changed = true;
    if (!changed && inner === undefined) return null;
    return { attrs: cleaned, inner };
  });
}

function fillContainers(html, map) {
  return transform(html, (el) => {
    const id = el.get("id");
    if (id !== undefined && Object.prototype.hasOwnProperty.call(map, id)) return { attrs: el.attrs, inner: map[id] };
    return null;
  });
}

const stripSection = (html, name, keep) =>
  html.replace(new RegExp("<!--" + name + "-->([\\s\\S]*?)<!--/" + name + "-->", "g"), keep ? "$1" : "");

const headerTpl = read("tools/templates/header.html");
const footerTpl = read("tools/templates/footer.html");
const homeTpl = read("tools/templates/home.html");

function langSwitch(cur, enUrl, hiUrl) {
  return '<a href="' + enUrl + '" hreflang="en" lang="en"' + (cur === "en" ? ' aria-current="true"' : "") + '>EN</a><a href="' + hiUrl + '" hreflang="hi" lang="hi"' + (cur === "hi" ? ' aria-current="true"' : "") + ">हि</a>";
}

/* ---------- structured data ---------- */
const ldScript = (o) => '<script type="application/ld+json">' + JSON.stringify(o).replace(/</g, "\\u003c") + "</script>";
const areaServed = () => [{ "@type": "City", name: SITE.city }].concat((SITE.serviceAreas || []).map((a) => ({ "@type": "Place", name: a + ", " + SITE.city })));

function businessLd(c) {
  const priceMax = Math.max(...DATA.services.map((s) => s.p.h24));
  const o = {
    "@context": "https://schema.org", "@type": ["LocalBusiness", "MedicalBusiness"], "@id": absUrl("/#business"),
    name: SITE.legalName, alternateName: SITE.brand, url: absUrl("/"),
    logo: absUrl("/images/logo-full-homecare.png"), image: absUrl("/images/og-image.png"),
    description: "Home care in " + SITE.city + ": trained nurses, caregivers and attendants for patient care, elder care, critical care, Alzheimer's and Parkinson's care, tracheostomy care, baby care and nursing procedures at home.",
    areaServed: areaServed(), priceRange: "₹" + minHourly.toLocaleString("en-IN") + " - ₹" + priceMax.toLocaleString("en-IN"),
    slogan: "Care like family, at your own home",
    knowsLanguage: ["en", "hi"], currenciesAccepted: "INR",
  };
  if (SITE.phone !== "+91 98765 43210") o.telephone = SITE.phone;
  if (!/example\.com/i.test(SITE.email)) o.email = SITE.email;
  if (!/your street/i.test(SITE.address.street)) o.address = { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.locality || SITE.city, addressRegion: SITE.region || undefined, postalCode: SITE.address.postalCode || undefined, addressCountry: "IN" };
  if (SITE.geo) o.geo = { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng };
  const same = Object.values(SITE.social).filter(Boolean);
  if (same.length) o.sameAs = same;
  const enc = makeCtx("en");
  o.hasOfferCatalog = {
    "@type": "OfferCatalog", name: "Home care services",
    itemListElement: DATA.services.map((s) => ({
      "@type": "Offer", itemOffered: { "@type": "Service", name: enc.tx(s.name), url: absUrl("/services/" + SEO.services[s.id].slug + "/") },
      priceSpecification: { "@type": "UnitPriceSpecification", price: s.p.hourly, priceCurrency: "INR", unitCode: "HUR", unitText: "hour" },
    })).concat(DATA.procedures.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: enc.tx(p.name), url: absUrl("/services/nursing-procedures/") }, price: p.price, priceCurrency: "INR" }))),
  };
  return o;
}
const websiteLd = () => ({ "@context": "https://schema.org", "@type": "WebSite", "@id": absUrl("/#website"), url: absUrl("/"), name: SITE.legalName, inLanguage: ["en-IN", "hi-IN"], publisher: { "@id": absUrl("/#business") } });
const breadcrumbLd = (items) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absUrl(it.url) })) });
const faqLd = (c, items) => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((x) => ({ "@type": "Question", name: c.sx(x.q), acceptedAnswer: { "@type": "Answer", text: c.sx(x.a) } })) });

/* ---------- the page shell ---------- */
const SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="i-wa" viewBox="0 0 24 24"><path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5z" fill="currentColor"/><path d="M8.6 7.6c.3-.4.7-.4 1-.1l.8 1.4c.2.4 0 .7-.2 1l-.5.6c.8 1.5 1.9 2.5 3.4 3.2l.6-.7c.3-.3.6-.4 1-.2l1.5.7c.4.2.5.6.3 1-.5 1-1.3 1.5-2.4 1.4-3.3-.4-6-3.2-6.4-6.5-.1-1 .3-1.6.9-1.8z" fill="#fff"/></symbol><symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></symbol><symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="i-globe" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></g></symbol><symbol id="i-clock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g></symbol></svg>';

const generated = []; // for the SEO report and sitemap

function fontsHref(lang) {
  const fam = "family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700";
  const hi = "&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@500;600;700";
  return "https://fonts.googleapis.com/css2?" + fam + (lang === "hi" ? hi : "") + "&display=swap";
}

/* Photo drop-in: if images/<name>.webp|jpg|jpeg|png exists, it replaces the illustration images/<name>.svg everywhere. */
function usePhotos(html) {
  return html.replace(/\/images\/([a-z0-9-]+)\.svg/g, (m, base) => {
    for (const ext of ["webp", "jpg", "jpeg", "png"]) if (fs.existsSync(path.join(ROOT, "images", base + "." + ext))) return "/images/" + base + "." + ext;
    return m;
  });
}

/* page({ lang, logical, title, description, body, ld, index, withBooking, type }) -> writes the file */
function page(o) {
  const lang = o.lang;
  const c = makeCtx(lang);
  const urlEn = o.logical;                // the English page for this logical path
  const urlHi = "/hi" + o.logical;        // the Hindi page
  const self = lang === "hi" ? urlHi : urlEn;
  const canonical = absUrl(self);
  const indexable = READY && o.index !== false;
  const robots = indexable ? "index, follow, max-image-preview:large" : "noindex, nofollow";
  const hasAlt = o.alt !== false;

  let shell = headerTpl + "\n" + o.body + "\n" + footerTpl;
  shell = shell.split("{{BASE}}").join(c.base).split("{{BRAND}}").join(SITE.brand).replace("{{LANG_SWITCH}}", hasAlt ? langSwitch(lang, urlEn, urlHi) : "");
  shell = localize(shell, c);
  shell = fillContainers(shell, Object.assign({ footServices: renderFootServices(c), footSocial: renderFootSocial() }, o.containers ? o.containers(c) : {}));
  if (!hasAlt) shell = shell.replace(/<div class="lang"[^>]*><\/div>/, "");

  const head = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    "<title>" + escText(o.title) + "</title>",
    '<meta name="description" content="' + escAttr(o.description) + '">',
    '<meta name="robots" content="' + robots + '">',
    '<link rel="canonical" href="' + canonical + '">',
    hasAlt ? '<link rel="alternate" hreflang="en" href="' + absUrl(urlEn) + '">\n<link rel="alternate" hreflang="hi" href="' + absUrl(urlHi) + '">\n<link rel="alternate" hreflang="x-default" href="' + absUrl(urlEn) + '">' : "",
    '<meta name="theme-color" content="#052f74">',
    SITE.googleVerification ? '<meta name="google-site-verification" content="' + escAttr(SITE.googleVerification) + '">' : "",
    SITE.bingVerification ? '<meta name="msvalidate.01" content="' + escAttr(SITE.bingVerification) + '">' : "",
    '<meta property="og:type" content="' + (o.type || "website") + '">',
    '<meta property="og:site_name" content="' + escAttr(SITE.legalName) + '">',
    '<meta property="og:title" content="' + escAttr(o.title) + '">',
    '<meta property="og:description" content="' + escAttr(o.description) + '">',
    '<meta property="og:url" content="' + canonical + '">',
    '<meta property="og:image" content="' + absUrl("/images/og-image.png") + '">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="' + escAttr(SITE.legalName + ": care like family, at your own home") + '">',
    '<meta property="og:locale" content="' + (lang === "hi" ? "hi_IN" : "en_IN") + '">',
    hasAlt ? '<meta property="og:locale:alternate" content="' + (lang === "hi" ? "en_IN" : "hi_IN") + '">' : "",
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + escAttr(o.title) + '">',
    '<meta name="twitter:description" content="' + escAttr(o.description) + '">',
    '<meta name="twitter:image" content="' + absUrl("/images/og-image.png") + '">',
    '<link rel="icon" href="/images/favicon-32.png" sizes="32x32" type="image/png">',
    '<link rel="icon" href="/images/favicon-192.png" sizes="192x192" type="image/png">',
    '<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<link rel="stylesheet" href="' + fontsHref(lang).replace(/&/g, "&amp;") + '">',
    '<link rel="stylesheet" href="/css/styles.css?v=' + ASSET_V.css + '">',
    "<script>document.documentElement.classList.add('js')</script>",
    (o.ld || []).map(ldScript).join("\n"),
  ].filter(Boolean).join("\n");

  const scripts = (o.withBooking
    ? '<script src="/js/config.js?v=' + ASSET_V.config + '" defer></script>\n<script src="/js/content.js?v=' + ASSET_V.content + '" defer></script>\n<script src="/js/shared.js?v=' + ASSET_V.shared + '" defer></script>\n'
    : "") + '<script src="/js/main.js?v=' + ASSET_V.main + '" defer></script>';

  const html = usePhotos("<!doctype html>\n<html lang=\"" + lang + '">\n<head>\n' + head + "\n</head>\n<body>\n" + SPRITE + "\n" + shell + "\n" + scripts + "\n</body>\n</html>\n");
  const file = (lang === "hi" ? "hi" : "") + (o.logical === "/" ? "/index.html" : o.logical + "index.html");
  write(file.replace(/^\//, ""), html);
  generated.push({ file: file.replace(/^\//, ""), url: self, lang, title: o.title, description: o.description, indexable, sitemap: o.sitemap !== false, logical: o.logical, html });
}

/* ---------- the pages ---------- */
function homePage(lang) {
  const c = makeCtx(lang);
  const rev = reviewsToShow();
  const pt = renderPriceTables(c);
  const opts = renderBookingOptions(c);
  const homeFaq = DATA.faq;
  let body = homeTpl;
  body = stripSection(body, "AREAS", (SITE.serviceAreas || []).length > 0);
  body = stripSection(body, "REVIEWS", rev.length > 0);
  const title = lang === "hi"
    ? SITE.city + " में होम केयर, नर्सिंग और बुज़ुर्ग देखभाल | " + SITE.brand
    : "Home Care in " + SITE.city + " | Nursing & Elder Care | " + SITE.brand;
  const description = lang === "hi"
    ? SITE.city + " में घर पर प्रशिक्षित नर्स, केयरगिवर और अटेंडेंट: मरीज़, बुज़ुर्ग, क्रिटिकल और बेबी केयर, इंजेक्शन भी। साफ़ दरें, WhatsApp पर बुकिंग।"
    : "Trained nurses, caregivers and attendants at home in " + SITE.city + ": patient, elder, critical and baby care, plus injections. Clear rates, book on WhatsApp.";
  page({
    lang, logical: "/", title, description, body, withBooking: true, sitemap: true,
    ld: [businessLd(c), websiteLd(), faqLd(c, homeFaq)],
    containers: (cc) => ({
      seoIntro: renderSeoIntro(cc),
      svcLead: cc.b("leadLive", { n: DATA.services.length }),
      feeBanner: "<span>" + cc.b("fee", { min: minHourly.toLocaleString("en-IN") }) + '</span> <a class="link-u" href="' + cc.url("/rate-list/") + '">' + cc.b("seeRates") + "</a>",
      svcGrid: renderServiceCards(cc), icuBand: renderIcuBand(cc), distanceNote: cc.tx(DATA.distance),
      priceHead: pt.head, priceBody: pt.body, procHead: pt.procHead, procBody: pt.procBody, priceNote: pt.note,
      whoGrid: renderWho(cc), areaList: (SITE.serviceAreas || []).map((a) => "<li>" + escText(a) + "</li>").join(""),
      howSteps: renderHow(cc), trustGrid: renderTrust(cc), safetyGrid: renderSafety(cc),
      reviewGrid: renderReviews(cc, rev), reviewNote: rev.some((r) => !r.real) ? cc.b("reviewNoteSample") : "",
      faqList: renderFaq(cc, homeFaq),
      bkService: opts.service, bkHours: opts.hours, estimate: cc.S.estimateHtml(cc.S.selection("patient", "h8")),
    }),
  });
}

function breadcrumbHtml(c, items) {
  return '<nav class="breadcrumb" aria-label="Breadcrumb"><ol>' + items.map((it, i) => (i === items.length - 1 ? '<li aria-current="page">' + it.name + "</li>" : '<li><a href="' + it.url + '">' + it.name + "</a></li>")).join("") + "</ol></nav>";
}

const RELATED = { patient: ["elder", "critical", "attendant"], elder: ["alzheimer", "parkinson", "patient"], critical: ["patient", "trach", "icu"], alzheimer: ["elder", "parkinson", "patient"], parkinson: ["elder", "alzheimer", "patient"], trach: ["critical", "patient", "procedures"], baby: ["patient", "attendant", "procedures"], attendant: ["patient", "elder", "procedures"], procedures: ["patient", "critical", "trach"], icu: ["critical", "patient", "trach"] };

function serviceInfo(c, key) {
  if (key === "procedures") return { name: DATA.proceduresInfo.name, cap: DATA.proceduresInfo.cap, img: DATA.proceduresInfo.img, desc: DATA.proceduresInfo.desc };
  if (key === "icu") return { name: DATA.setup.name, cap: DATA.setup.cap, img: DATA.setup.img, desc: DATA.setup.desc };
  const s = DATA.services.find((x) => x.id === key);
  return { name: s.name, cap: s.cap, img: s.img, desc: s.desc, s };
}

function ratesBlock(c, key) {
  if (key === "procedures") {
    return '<ul class="proc-list proc-list-lg">' + DATA.procedures.map((x) => "<li><span>" + c.tx(x.name) + "</span><b>" + c.inr(x.price) + "</b></li>").join("") + "</ul>";
  }
  if (key === "icu") {
    return '<div class="icu-price icu-price-dark"><b>' + c.inr(DATA.setup.price) + "</b><span>" + c.tx(DATA.setup.detail) + "</span></div>";
  }
  const s = DATA.services.find((x) => x.id === key);
  return '<div class="tiers tiers-lg">' + tierBoxes(c, s.p) + "</div>";
}

function servicePage(lang, key) {
  const c = makeCtx(lang);
  const seo = SEO.services[key];
  const info = serviceInfo(c, key);
  const name = c.tx(info.name);
  const logical = "/services/" + seo.slug + "/";
  const pointList = info.s
    ? (info.s.points[lang] || info.s.points.en).concat(seo.more[lang] || seo.more.en)
    : seo.points[lang] || seo.points.en;
  const faqItems = seo.faq.concat([
    { q: { en: "How do I book " + c.tx(info.name) + "?", hi: c.tx(info.name) + " कैसे बुक करूँ?" }, a: { en: "Message or call us, or fill the booking form on our home page. You see the rate before you confirm, and our team confirms everything on WhatsApp.", hi: "हमें मैसेज या कॉल करें, या होम पेज का बुकिंग फ़ॉर्म भरें। कन्फ़र्म करने से पहले दर दिखती है और हमारी टीम WhatsApp पर सब पक्का करती है।" } },
  ]);
  const related = RELATED[key].map((k) => {
    const ri = serviceInfo(c, k);
    return '<a class="rel-card" href="' + c.svcUrl(k) + '"><img src="/images/' + ri.img + '" alt="' + escAttr(c.sx(SEO.services[k].alt, k)) + '" loading="lazy" width="800" height="500"><span class="rel-body"><b>' + c.tx(ri.name) + "</b><span>" + c.tx(ri.cap) + "</span></span></a>";
  }).join("");
  const crumbs = [{ name: c.b("crumbHome"), url: c.url("/") }, { name: c.b("crumbServices"), url: c.url("/") + "#services" }, { name, url: c.svcUrl(key) }];
  const msg = c.b("bookSvc", { name });
  const title = c.fmt(B[lang].h1Svc, { name }) + " | " + SITE.brand;

  const body = `<main id="main">
<section class="page-hero">
  <div class="wrap">
    ${breadcrumbHtml(c, crumbs)}
    <div class="svc-hero">
      <div>
        <p class="eyebrow">${c.b("eyebrowSvc")}</p>
        <h1>${c.b("h1Svc", { name })}</h1>
        <p class="lead">${c.sx(seo.intro, key)}</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="${c.wa(msg)}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-wa"/></svg><span>${c.b("bookNow", { name })}</span></a>
          <a class="btn btn-outline" href="tel:${SITE.phone.replace(/[^+\d]/g, "")}"><svg aria-hidden="true"><use href="#i-phone"/></svg><span>${escText(SITE.phone)}</span></a>
        </div>
      </div>
      <div class="svc-hero-img"><img src="/images/${info.img}" alt="${escAttr(c.sx(seo.alt, key))}" width="800" height="500" fetchpriority="high"></div>
    </div>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <div class="sec-head"><h2>${c.b("ratesH2", { name })}</h2><p>${c.b("rateNote")}</p></div>
    ${ratesBlock(c, key)}
    <p class="price-note">${c.tx(DATA.distance)} ${key === "procedures" ? c.b("procRatesNote") : ""}</p>
    <p><a class="link-u" href="${c.url("/rate-list/")}">${c.b("seeAllRates")} →</a></p>
  </div>
</section>

<section class="section tight cream">
  <div class="wrap split svc-split">
    <div class="copy">
      <h2>${c.b("includedH2", { name })}</h2>
      <ul class="checks">${pointList.map((p) => '<li><span class="tick"><svg aria-hidden="true"><use href="#i-check"/></svg></span><div><span class="tick-t">' + escText(p) + "</span></div></li>").join("")}</ul>
    </div>
    <div class="copy">
      <h2>${c.b("whoH2", { name })}</h2>
      <p>${c.sx(seo.who, key)}</p>
      <p>${c.sx(seo.desc, key)}</p>
    </div>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <div class="sec-head"><h2>${c.b("howH2", { name })}</h2></div>
    <div class="steps">${renderHow(c)}</div>
  </div>
</section>

<section class="section tight mist">
  <div class="wrap">
    <div class="sec-head center" style="text-align:center"><h2>${c.b("faqH2", { name })}</h2></div>
    <div class="faq">${renderFaq(c, faqItems)}</div>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <div class="sec-head"><h2>${c.b("relatedH2")}</h2></div>
    <div class="rel-grid">${related}</div>
  </div>
</section>

<section class="final">
  <div class="wrap">
    <h2>${c.b("ctaH2", { name })}</h2>
    <p>${c.b("ctaP")}</p>
    <div class="cta-row">
      <a class="btn btn-wa" href="${c.wa(msg)}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-wa"/></svg><span>${c.b("book")}</span></a>
      <a class="btn btn-outline" href="tel:${SITE.phone.replace(/[^+\d]/g, "")}"><svg aria-hidden="true"><use href="#i-phone"/></svg><span>${c.b("callUs")}</span></a>
    </div>
  </div>
</section>
</main>`;

  page({
    lang, logical, title, description: c.sx(seo.desc, key), body, type: "article",
    ld: [
      {
        "@context": "https://schema.org", "@type": "Service", "@id": absUrl((lang === "hi" ? "/hi" : "") + logical) + "#service",
        name, serviceType: name, description: c.sx(seo.desc, key), url: absUrl((lang === "hi" ? "/hi" : "") + logical), inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
        provider: { "@id": absUrl("/#business") }, areaServed: areaServed(), image: absUrl("/images/" + info.img),
        offers: key === "procedures"
          ? DATA.procedures.map((p) => ({ "@type": "Offer", name: c.tx(p.name), price: p.price, priceCurrency: "INR" }))
          : key === "icu"
            ? [{ "@type": "Offer", name: c.tx(DATA.setup.name), price: DATA.setup.price, priceCurrency: "INR" }]
            : DATA.tiers.map((t) => t.key === "hourly"
              ? { "@type": "Offer", name: c.tx(t.label), priceSpecification: { "@type": "UnitPriceSpecification", price: info.s.p.hourly, priceCurrency: "INR", unitCode: "HUR", unitText: "hour" } }
              : { "@type": "Offer", name: c.tx(t.label), price: info.s.p[t.key], priceCurrency: "INR" }),
      },
      breadcrumbLd(crumbs), faqLd(c, faqItems),
    ],
  });
}

function ratesPage(lang) {
  const c = makeCtx(lang);
  const R = B[lang].rate;
  const pt = renderPriceTables(c);
  const faqItems = SEO.rateFaq;
  const logical = "/rate-list/";
  const crumbs = [{ name: c.b("crumbHome"), url: c.url("/") }, { name: c.b("crumbRates"), url: c.url(logical) }];
  const links = DATA.services.map((s) => '<li><a href="' + c.svcUrl(s.id) + '">' + c.tx(s.name) + "</a></li>").concat(['<li><a href="' + c.svcUrl("procedures") + '">' + c.tx(DATA.proceduresInfo.name) + "</a></li>", '<li><a href="' + c.svcUrl("icu") + '">' + c.tx(DATA.setup.name) + "</a></li>"]).join("");
  const title = lang === "hi" ? SITE.city + " में होम केयर रेट लिस्ट | " + SITE.brand : "Home Care Rates in " + SITE.city + ": Hourly to 24 Hours | " + SITE.brand;
  const description = lang === "hi"
    ? SITE.city + " में घर पर देखभाल की साफ़ दरें। मरीज़ की देखभाल " + c.inr(minHourly) + " प्रति घंटा से, साथ में इंजेक्शन, कैथेटर और होम ICU सेटअप की दरें।"
    : "Clear home care rates in " + SITE.city + ". Patient care from " + c.inr(minHourly) + " per hour, plus elder care, critical care, baby care, injections, catheter and Home ICU Setup rates.";
  const body = `<main id="main">
<section class="page-hero">
  <div class="wrap">
    ${breadcrumbHtml(c, crumbs)}
    <p class="eyebrow">${R.eyebrow}</p>
    <h1>${c.fmt(R.h1)}</h1>
    <p class="lead" style="max-width:760px">${c.fmt(R.lead)}</p>
    <div class="cta-row">
      <a class="btn btn-primary" href="${c.wa()}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-wa"/></svg><span>${c.b("book")}</span></a>
      <a class="btn btn-outline" href="${c.url("/")}#booking"><span>${lang === "hi" ? "अनुमान देखें" : "Get an estimate"}</span></a>
    </div>
  </div>
</section>
<section class="section tight mist">
  <div class="wrap">
    <h2 class="sub-h" style="margin-top:0">${R.careH2}</h2>
    <div class="table-wrap"><table class="price-table"><caption class="sr-only">${R.careH2}</caption><thead><tr>${pt.head}</tr></thead><tbody>${pt.body}</tbody></table></div>
    <h2 class="sub-h">${R.procH2}</h2>
    <div class="table-wrap"><table class="price-table price-table-2"><caption class="sr-only">${R.procH2}</caption><thead><tr>${pt.procHead}</tr></thead><tbody>${pt.procBody}</tbody></table></div>
    <p class="price-note">${pt.note}</p>
  </div>
</section>
<section class="section tight">
  <div class="wrap">
    <h2 class="sub-h" style="margin-top:0">${R.linksH2}</h2>
    <ul class="link-cols">${links}</ul>
  </div>
</section>
<section class="section tight mist">
  <div class="wrap">
    <div class="sec-head center" style="text-align:center"><h2>${R.faqH2}</h2></div>
    <div class="faq">${renderFaq(c, faqItems)}</div>
  </div>
</section>
<section class="final">
  <div class="wrap">
    <h2>${R.ctaH2}</h2>
    <p>${c.b("ctaP")}</p>
    <div class="cta-row">
      <a class="btn btn-wa" href="${c.wa()}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-wa"/></svg><span>${c.b("book")}</span></a>
      <a class="btn btn-outline" href="tel:${SITE.phone.replace(/[^+\d]/g, "")}"><svg aria-hidden="true"><use href="#i-phone"/></svg><span>${c.b("callUs")}</span></a>
    </div>
  </div>
</section>
</main>`;
  page({
    lang, logical, title, description, body,
    ld: [breadcrumbLd(crumbs), faqLd(c, faqItems), {
      "@context": "https://schema.org", "@type": "OfferCatalog", name: R.careH2, url: absUrl((lang === "hi" ? "/hi" : "") + logical),
      itemListElement: DATA.services.map((s) => ({ "@type": "Offer", name: c.tx(s.name), url: absUrl((lang === "hi" ? "/hi" : "") + "/services/" + SEO.services[s.id].slug + "/"), priceSpecification: { "@type": "UnitPriceSpecification", price: s.p.hourly, priceCurrency: "INR", unitCode: "HUR", unitText: "hour" } })),
    }],
  });
}

/* ---------- legal + 404 (English only, never indexed: they are drafts) ---------- */
const LEGAL = {
  terms: ["Terms of Service", "These terms explain how care bookings with [Business name] work. By booking a caregiver you agree to them.", [
    ["What we provide", ["Home care by trained nurses, caregivers and attendants: patient care, elder care, critical care, Alzheimer’s and Parkinson’s care, tracheostomy care, baby care, attendant services and nursing procedures.", "Clinical care and procedures (such as injections, IV and catheter care) are carried out only as advised or prescribed by your treating doctor.", "We do not provide emergency medical treatment. In a medical emergency call 102 / 108 first."]],
    ["Booking and changes", ["Bookings are confirmed by our team on WhatsApp or phone. Nothing is booked until you receive a confirmation.", "You can change, extend or cancel by message. [Add your cancellation rule.]", "Travel charges, where they apply, are shown before you confirm."]],
    ["Rates and payment", ["Rates are as per our rate list: hourly, 8 hours, day care and 24 hours. [State whether GST applies.]", "The final amount is confirmed by our team before the care begins. [State how and when payment is made.]"]],
    ["Rules for caregivers and customers", ["Our staff do not handle your cash, cards, OTPs or valuables.", "We may end a visit if there is a risk to anyone’s safety or if these rules are broken."]],
    ["Home ICU Setup", ["[Describe what is included, the payment schedule and the responsibilities of the family and of the company.]"]],
    ["Responsibility", ["[Describe damage handling, liability limits and the dispute process here.]"]],
  ]],
  privacy: ["Privacy Policy", "This page explains what information [Business name] collects when you use this website or book on WhatsApp, and how it is used.", [
    ["What we collect", ["Details you share to book: name, phone number, address, the patient’s name, age and condition, and notes.", "Messages on WhatsApp and the records of your bookings.", "Basic technical data when you visit this website, such as device and browser type."]],
    ["How we use it", ["To confirm, deliver and bill your booking, and to match the right caregiver.", "To improve our service and to keep patients, families and our staff safe."]],
    ["Who sees it", ["The caregiver assigned to you sees only what is needed for the care.", "Messaging and payment providers process data on our behalf. We do not sell your data."]],
    ["Your choices", ["You can ask us to correct or delete your information by messaging us on WhatsApp.", "[State how long you keep booking and patient records.]"]],
  ]],
  refund: ["Refund and Cancellation Policy", "This page explains cancellations and refunds for bookings with [Business name].", [
    ["Cancellations", ["Cancel or change by messaging us on WhatsApp.", "[State what applies before the caregiver is on the way, and after.]"]],
    ["Billing issues", ["If a bill looks wrong, message us within [48 hours] and we will review it.", "Where a refund is due, it is sent through the same payment method within [5 working days]."]],
    ["Service problems", ["If the caregiver did not arrive or the care was not as described, tell us the same day so we can make it right."]],
  ]],
};

function legalPage(slug) {
  const [h1, intro, sections] = LEGAL[slug];
  const body = '<main id="main" class="wrap legal-wrap"><a class="back-link" href="/">← Back to home</a><h1>' + h1 + '</h1><p class="draft"><b>Draft template.</b> This page is a starting point with placeholder wording. Replace the [bracketed] parts and have it reviewed by a lawyer before you rely on it.</p><p>' + intro + "</p>" +
    sections.map(([h, items]) => "<h2>" + h + "</h2><ul>" + items.map((i) => "<li>" + i + "</li>").join("") + "</ul>").join("") +
    '<h2>Contact</h2><p>Questions about this page? Reach us on WhatsApp at <span data-phone>x</span> or write to <span data-email>x</span>.</p><p style="color:var(--muted);font-size:14px">Last updated: [date]</p></main>';
  page({ lang: "en", logical: "/" + slug + "/", title: h1 + " | " + SITE.brand, description: intro, body, index: false, sitemap: false, alt: false });
}

function notFoundPage() {
  const c = makeCtx("en");
  const body = '<main id="main" class="wrap legal-wrap"><h1>' + B.en.e404.h1 + "</h1><p>" + B.en.e404.p + '</p><p><a class="btn btn-primary" href="/">' + B.en.e404.link + "</a></p></main>";
  page({ lang: "en", logical: "/404/", title: "Page not found | " + SITE.brand, description: B.en.e404.p, body, index: false, sitemap: false, alt: false });
  // Vercel looks for /404.html at the root
  const g = generated.find((x) => x.logical === "/404/");
  write("404.html", g.html);
  fs.rmSync(path.join(ROOT, "404"), { recursive: true, force: true });
  generated.splice(generated.indexOf(g), 1);
}

/* ---------- clean old output, then build ---------- */
for (const d of ["hi", "rate-list", "services", "terms", "privacy", "refund", "404"]) fs.rmSync(path.join(ROOT, d), { recursive: true, force: true });
for (const f of ["terms.html", "privacy.html", "refund.html", "site.webmanifest", "404.html"]) fs.rmSync(path.join(ROOT, f), { force: true });

const SERVICE_KEYS = Object.keys(SEO.services);
for (const lang of LANGS) {
  homePage(lang);
  ratesPage(lang);
  SERVICE_KEYS.forEach((k) => servicePage(lang, k));
}
["terms", "privacy", "refund"].forEach(legalPage);
notFoundPage();

/* ---------- sitemap.xml + robots.txt ---------- */
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  generated.filter((g) => g.sitemap).map((g) => {
    const logical = g.logical;
    const en = absUrl(logical), hi = absUrl("/hi" + logical);
    return "  <url>\n    <loc>" + absUrl(g.url) + "</loc>\n    <lastmod>" + TODAY + "</lastmod>\n    <xhtml:link rel=\"alternate\" hreflang=\"en\" href=\"" + en + "\"/>\n    <xhtml:link rel=\"alternate\" hreflang=\"hi\" href=\"" + hi + "\"/>\n    <xhtml:link rel=\"alternate\" hreflang=\"x-default\" href=\"" + en + "\"/>\n  </url>";
  }).join("\n") + "\n</urlset>\n";
write("sitemap.xml", sitemap);
write("robots.txt", READY
  ? "User-agent: *\nAllow: /\nDisallow: /terms/\nDisallow: /privacy/\nDisallow: /refund/\n\nSitemap: " + ORIGIN + "/sitemap.xml\n"
  : "# The site still has placeholder details, so it is hidden from search engines.\n# Set the real details in js/config.js and run: node tools/build.js\nUser-agent: *\nDisallow: /\n");

/* ---------- SEO report ---------- */
const warn = [];
const seenTitles = new Map(), seenDesc = new Map();
for (const g of generated) {
  if (g.title.length > (g.lang === "hi" ? 72 : 62)) warn.push("title too long (" + g.title.length + "): " + g.url + "  \"" + g.title + "\"");
  if (g.description.length > (g.lang === "hi" ? 175 : 160)) warn.push("description too long (" + g.description.length + "): " + g.url);
  if (g.description.length < 70) warn.push("description too short (" + g.description.length + "): " + g.url);
  if (seenTitles.has(g.title)) warn.push("duplicate title: " + g.url + " = " + seenTitles.get(g.title));
  if (seenDesc.has(g.description)) warn.push("duplicate description: " + g.url + " = " + seenDesc.get(g.description));
  seenTitles.set(g.title, g.url); seenDesc.set(g.description, g.url);
  const h1s = (g.html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) warn.push("expected exactly one <h1>, found " + h1s + ": " + g.url);
  (g.html.match(/<img\b[^>]*>/g) || []).forEach((tag) => { if (!/\balt=/.test(tag)) warn.push("image without alt on " + g.url + ": " + tag.slice(0, 80)); if (!/\bwidth=/.test(tag)) warn.push("image without width/height on " + g.url + ": " + tag.slice(0, 80)); });
  (g.html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || []).forEach((s) => { try { JSON.parse(s.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "")); } catch (e) { warn.push("invalid JSON-LD on " + g.url); } });
}
const exists = (u) => {
  const p = u.split("#")[0].split("?")[0];
  if (!p || /^(https?:|mailto:|tel:|\/\/)/.test(p)) return true;
  const rel = p.replace(/^\//, "");
  if (!rel) return fs.existsSync(path.join(ROOT, "index.html"));
  return fs.existsSync(path.join(ROOT, rel)) && fs.statSync(path.join(ROOT, rel)).isFile() ? true : fs.existsSync(path.join(ROOT, rel, "index.html"));
};
for (const g of generated) (g.html.match(/(?:href|src)="(\/[^"#?]*)/g) || []).forEach((m) => { const u = m.replace(/^(?:href|src)="/, ""); if (!exists(u)) warn.push("broken internal link on " + g.url + ": " + u); });

console.log("\nBuilt " + (generated.length + 1) + " pages (" + LANGS.length + " languages) + sitemap.xml + robots.txt");
console.log("Indexing: " + (READY ? "ON (all details are real)" : "OFF (noindex + robots.txt blocks crawlers)"));
if (!READY) console.log("Placeholders still in js/config.js: " + problems.join(", "));
if (warn.length) { console.log("\nSEO warnings (" + warn.length + "):"); warn.forEach((w) => console.log("  - " + w)); } else console.log("SEO check: no warnings");
