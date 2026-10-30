/* ==========================================================================
   Site behaviour: config fill, language toggle, section rendering, rate list,
   plans dialog, booking form + estimate, WhatsApp chat demo, header/menu.
   Content lives in content.js, settings in config.js.
   ========================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE;
  const DATA = window.CONTENT;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = "en";
  try { lang = localStorage.getItem("lang") === "hi" ? "hi" : "en"; } catch (e) { /* storage blocked */ }

  /* ---------- UI strings used by generated markup ---------- */
  const UI = {
    en: {
      atHome: "AT HOME", from: "from", perHour: "/ hour", details: "Details & book", service: "Service", rate: "Rate",
      hrsOpt: "{n} hours", hour1: "1 hour",
      book: "Book {name} on WhatsApp", bookMsg: "Hi, I would like to book {name}.", bookProc: "Book on WhatsApp",
      procMsg: "Hi, I would like to book a nursing procedure.", icuMsg: "Hi, I would like to know about Home ICU Setup.",
      icuAsk: "Ask about ICU setup", icuIncludes: "Includes",
      leadLive: "{n} care services for your loved ones at home in {city}, plus nursing procedures and a complete Home ICU Setup. Every care service has four rates: hourly, 8 hours, day care and 24 hours.",
      fee: "Care rates start at <b>₹{min}</b> per hour.", seeRates: "See the full rate list",
      estTitle: "Your estimate", estService: "Service", estDuration: "Duration", estRate: "Rate", estGst: "GST {gst}%",
      estTotal: "Estimated charge",
      estNote: "The final amount is confirmed by our team on WhatsApp.",
      estIcu: "Our team will call you to explain the setup and what is included.",
      errArea: "Please tell us where the care is needed.", errPhone: "Enter a valid 10-digit mobile number, or leave it blank.",
      optCare: "Care services", optProc: "Nursing procedures", optIcu: "Home ICU setup",
      priceNoteGst: "{gst}% GST is extra.", priceNoteBase: "Prices shown are as per our rate list.",
    },
    hi: {
      atHome: "घर पर", from: "शुरू", perHour: "/ घंटा", details: "जानकारी और बुकिंग", service: "सेवा", rate: "दर",
      hrsOpt: "{n} घंटे", hour1: "1 घंटा",
      book: "WhatsApp पर {name} बुक करें", bookMsg: "नमस्ते, मैं {name} बुक करना चाहता/चाहती हूँ।", bookProc: "WhatsApp पर बुक करें",
      procMsg: "नमस्ते, मुझे नर्सिंग प्रक्रिया के लिए बुकिंग करनी है।", icuMsg: "नमस्ते, मुझे होम ICU सेटअप की जानकारी चाहिए।",
      icuAsk: "ICU सेटअप के बारे में पूछें", icuIncludes: "शामिल",
      leadLive: "{city} में आपके अपनों के लिए घर पर {n} देखभाल सेवाएँ, साथ में नर्सिंग प्रक्रियाएँ और पूरा होम ICU सेटअप। हर देखभाल सेवा की चार दरें: प्रति घंटा, 8 घंटे, डे केयर और 24 घंटे।",
      fee: "देखभाल की दरें <b>₹{min}</b> प्रति घंटा से शुरू।", seeRates: "पूरी रेट लिस्ट देखें",
      estTitle: "आपका अनुमान", estService: "सेवा", estDuration: "अवधि", estRate: "दर", estGst: "GST {gst}%",
      estTotal: "अनुमानित शुल्क",
      estNote: "अंतिम राशि हमारी टीम WhatsApp पर पक्का करती है।",
      estIcu: "हमारी टीम आपको फ़ोन करके सेटअप और उसमें क्या शामिल है, समझाएगी।",
      errArea: "कृपया बताएँ कि देखभाल कहाँ चाहिए।", errPhone: "10 अंकों का सही मोबाइल नंबर लिखें, या खाली छोड़ दें।",
      optCare: "देखभाल सेवाएँ", optProc: "नर्सिंग प्रक्रियाएँ", optIcu: "होम ICU सेटअप",
      priceNoteGst: "{gst}% GST अतिरिक्त।", priceNoteBase: "दिखाई गई कीमतें हमारी रेट लिस्ट के अनुसार हैं।",
    },
  };
  const ui = (k, vars) => fmt(UI[lang][k], vars);

  /* ---------- helpers ---------- */
  function fmt(str, vars) {
    let out = String(str).replace(/\{brand\}/g, SITE.brand).replace(/\{city\}/g, SITE.city).replace(/\{gst\}/g, SITE.gst);
    if (vars) for (const k in vars) out = out.split("{" + k + "}").join(vars[k]);
    return out;
  }
  const tx = (o) => fmt(o[lang] || o.en);
  const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
  const waLink = (text) => "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(text || SITE.defaultMessage);
  const icon = (id) => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (DATA.icons[id] || "") + "</svg>";
  const hoursLabel = (n) => (n === 1 ? ui("hour1") : ui("hrsOpt", { n }));
  const gstOf = (n) => Math.round((n * (Number(SITE.gst) || 0)) / 100);

  /* ---------- config + static translation ---------- */
  function fillConfig() {
    $$("[data-brand]").forEach((e) => (e.textContent = SITE.brand));
    $$("[data-tagline]").forEach((e) => (e.textContent = SITE.tagline));
    $$("[data-city]").forEach((e) => (e.textContent = SITE.city));
    $$("[data-phone]").forEach((e) => (e.textContent = SITE.phone));
    $$("[data-email]").forEach((e) => (e.textContent = SITE.email));
    $$("[data-address]").forEach((e) => (e.textContent = SITE.address));
    $$("[data-year]").forEach((e) => (e.textContent = new Date().getFullYear()));
    $$("[data-wa]").forEach((e) => {
      e.href = waLink(e.dataset.waText);
      e.target = "_blank";
      e.rel = "noopener";
    });
    $$("[data-tel]").forEach((e) => (e.href = "tel:" + SITE.phone.replace(/[^+\d]/g, "")));
    $$("[data-mail]").forEach((e) => (e.href = "mailto:" + SITE.email));
    $$("[data-insta]").forEach((e) => {
      const set = SITE.instagram && SITE.instagram !== "#";
      e.hidden = !set;
      if (set) { e.href = SITE.instagram; e.target = "_blank"; e.rel = "noopener"; }
    });
    document.title = fmt(lang === "hi" ? "{brand} होम केयर | घर पर नर्सिंग, मरीज़ और बुज़ुर्ग देखभाल" : "{brand} Home Care | Nursing, Patient and Elder Care at Home");
  }

  function applyStatic() {
    $$("[data-hi]").forEach((el) => {
      const html = el.hasAttribute("data-html");
      if (!("en" in el.dataset)) el.dataset.en = html ? el.innerHTML : el.textContent;
      const val = lang === "hi" ? fmt(el.dataset.hi) : el.dataset.en;
      if (html) el.innerHTML = val; else el.textContent = val;
    });
    $$("[data-hi-ph]").forEach((el) => {
      if (!("enPh" in el.dataset)) el.dataset.enPh = el.placeholder;
      el.placeholder = lang === "hi" ? el.dataset.hiPh : el.dataset.enPh;
    });
  }

  /* ---------- generated sections ---------- */
  const stagger = ["", "d1", "d2"];
  const tierBoxes = (p) => DATA.tiers.map((t) => '<div class="tier"><small>' + tx(t.label) + "</small><b>" + inr(p[t.key]) + "</b></div>").join("");

  function renderServices() {
    $("#svcLead").textContent = ui("leadLive", { n: DATA.services.length });
    const minHourly = Math.min(...DATA.services.map((s) => s.p.hourly));
    $("#feeBanner").innerHTML = "<span>" + ui("fee", { min: minHourly.toLocaleString("en-IN") }) + '</span> <a class="link-u" href="#pricing">' + ui("seeRates") + "</a>";
    $("#distanceNote").textContent = tx(DATA.distance);

    const care = DATA.services.map((s, i) => {
      const name = tx(s.name);
      return (
        '<article class="svc reveal ' + stagger[i % 3] + '">' +
        '<div class="svc-img"><img src="images/' + s.img + '" alt="" loading="lazy" width="800" height="500">' +
        '<div class="svc-cap"><b>' + name + "</b><span>" + tx(s.cap) + "</span></div></div>" +
        '<div class="svc-body"><div class="svc-top"><span class="ico">' + icon(s.id) + '</span><span class="pill live">' + ui("atHome") + "</span></div>" +
        "<h3>" + name + "</h3><p>" + tx(s.desc) + '</p><div class="tiers">' + tierBoxes(s.p) + '</div>' +
        '<button type="button" class="btn btn-outline" data-plans="' + s.id + '">' + ui("details") + "</button></div></article>"
      );
    });

    const pi = DATA.proceduresInfo;
    const procCard =
      '<article class="svc reveal ' + stagger[DATA.services.length % 3] + '">' +
      '<div class="svc-img"><img src="images/' + pi.img + '" alt="" loading="lazy" width="800" height="500"><div class="svc-cap"><b>' + tx(pi.name) + "</b><span>" + tx(pi.cap) + "</span></div></div>" +
      '<div class="svc-body"><div class="svc-top"><span class="ico">' + icon("procedures") + '</span><span class="pill live">' + ui("atHome") + "</span></div>" +
      "<h3>" + tx(pi.name) + "</h3><p>" + tx(pi.desc) + '</p><ul class="proc-list">' +
      DATA.procedures.map((x) => "<li><span>" + tx(x.name) + "</span><b>" + inr(x.price) + "</b></li>").join("") +
      '</ul><a class="btn btn-outline" data-wa data-wa-text="' + ui("procMsg") + '" href="#">' + ui("bookProc") + "</a></div></article>";

    $("#svcGrid").innerHTML = care.join("") + procCard;

    const u = DATA.setup;
    $("#icuBand").innerHTML =
      '<div class="icu-band reveal"><div class="icu-img"><img src="images/' + u.img + '" alt="" loading="lazy" width="800" height="500"></div>' +
      '<div class="icu-copy"><span class="ico">' + icon("icu") + "</span><h3>" + tx(u.name) + "</h3><p>" + tx(u.desc) + "</p>" +
      '<div class="icu-price"><b>' + inr(u.price) + "</b><span>" + tx(u.detail) + "</span></div>" +
      '<a class="btn btn-primary" data-wa data-wa-text="' + ui("icuMsg") + '" href="#">' + ui("icuAsk") + "</a></div></div>";
  }

  function renderPricing() {
    $("#priceHead").innerHTML = "<th>" + ui("service") + "</th>" + DATA.tiers.map((t) => "<th>" + tx(t.label) + "</th>").join("");
    $("#priceBody").innerHTML = DATA.services.map((s) =>
      "<tr><td>" + tx(s.name) + "</td>" + DATA.tiers.map((t) => '<td data-label="' + tx(t.label) + '">' + inr(s.p[t.key]) + "</td>").join("") + "</tr>").join("");

    $("#procHead").innerHTML = "<th>" + ui("service") + "</th><th>" + ui("rate") + "</th>";
    $("#procBody").innerHTML =
      DATA.procedures.map((x) => "<tr><td>" + tx(x.name) + '</td><td data-label="' + ui("rate") + '">' + inr(x.price) + "</td></tr>").join("") +
      "<tr><td>" + tx(DATA.setup.name) + "<small>" + tx(DATA.setup.detail) + '</small></td><td data-label="' + ui("rate") + '">' + inr(DATA.setup.price) + "</td></tr>";

    const gst = Number(SITE.gst) > 0 ? " " + ui("priceNoteGst") : "";
    $("#priceNote").textContent = tx(DATA.distance) + " " + ui("priceNoteBase") + gst;
  }

  function renderList(target, items, tpl) { $(target).innerHTML = items.map(tpl).join(""); }

  function renderWho() {
    renderList("#whoGrid", DATA.who, (x, i) =>
      '<article class="who-card reveal ' + stagger[i % 3] + '"><span class="ico">' + icon(x.i) + "</span><h3>" + tx(x.t) + "</h3><p>" + tx(x.d) +
      '</p><a class="link-u" href="#booking" data-prefill="' + x.s + '">' + (lang === "hi" ? "बुक करें" : "Book care") + " →</a></article>");
  }
  function renderHow() {
    renderList("#howSteps", DATA.how, (x, i) => '<div class="step reveal ' + stagger[i % 3] + '"><h3>' + tx(x.t) + "</h3><p>" + tx(x.d) + "</p></div>");
  }
  function renderTrust() {
    renderList("#trustGrid", DATA.trust, (x, i) => '<div class="tstep reveal ' + stagger[i % 3] + '"><span class="n">0' + (i + 1) + "</span><h3>" + tx(x.t) + "</h3><p>" + tx(x.d) + "</p></div>");
  }
  function renderSafety() {
    renderList("#safetyGrid", DATA.safety, (x, i) => '<div class="scard ' + (x.alert ? "alert " : "") + "reveal " + stagger[i % 3] + '"><span class="ico">' + icon(x.i) + "</span><h3>" + tx(x.t) + "</h3><p>" + tx(x.d) + "</p></div>");
  }
  function renderReviews() {
    renderList("#reviewGrid", DATA.reviews, (x) => '<figure class="review reveal" style="margin:0 0 22px"><div class="stars" aria-label="5 stars">★★★★★</div><p>“' + tx(x.q) + '”</p><footer><span>' + tx(x.w) + '</span><span class="sample-tag">Sample</span></footer></figure>');
  }
  function renderFaq() {
    renderList("#faqList", DATA.faq, (x) => "<details><summary>" + tx(x.q) + "</summary><p>" + tx(x.a) + "</p></details>");
  }
  function renderFooter() {
    $("#footServices").innerHTML =
      DATA.services.map((s) => '<li><a href="#services" data-plans="' + s.id + '">' + tx(s.name) + "</a></li>").join("") +
      '<li><a href="#services">' + tx(DATA.proceduresInfo.name) + "</a></li><li><a href=\"#services\">" + tx(DATA.setup.name) + "</a></li>";
  }

  /* ---------- plans dialog (care services) ---------- */
  const dlg = $("#plansDlg");
  function openPlans(id) {
    const s = DATA.services.find((x) => x.id === id);
    if (!s || !dlg) return;
    const name = tx(s.name);
    $("#dlgImg").src = "images/" + s.img;
    $("#dlgTitle").textContent = name;
    $("#dlgDesc").textContent = tx(s.desc);
    $("#dlgPlans").innerHTML = DATA.tiers.map((t) => '<div class="plan"><small>' + tx(t.label) + "</small><b>" + inr(s.p[t.key]) + "</b></div>").join("");
    $("#dlgList").innerHTML = (s.points[lang] || s.points.en).map((p) => "<li>" + p + "</li>").join("");
    $("#dlgBookTxt").textContent = ui("book", { name });
    const book = $("#dlgBook");
    book.dataset.waText = ui("bookMsg", { name });
    book.href = waLink(book.dataset.waText);
    book.target = "_blank";
    book.rel = "noopener";
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-plans]");
    if (trigger) {
      if (!DATA.services.some((s) => s.id === trigger.dataset.plans)) return;
      e.preventDefault(); openPlans(trigger.dataset.plans); return;
    }
    if (e.target === dlg || e.target.closest("#dlgX")) dlg.close();
  });

  /* ---------- booking form + live estimate ---------- */
  const form = $("#bookForm");
  const pad = (n) => String(n).padStart(2, "0");
  const DURATIONS = ["hourly:1", "hourly:2", "hourly:4", "hourly:6", "h8", "day", "h24"];

  function durationLabel(code) {
    if (code.indexOf("hourly:") === 0) return hoursLabel(Number(code.split(":")[1]));
    return tx(DATA.tiers.find((t) => t.key === code).label);
  }
  function durationPrice(s, code) {
    if (code.indexOf("hourly:") === 0) return s.p.hourly * Number(code.split(":")[1]);
    return s.p[code];
  }

  function setDefaultWhen() {
    const d = new Date();
    d.setMinutes(0, 0, 0);
    d.setHours(d.getHours() + 2);
    if (d.getHours() < 7 || d.getHours() >= 21) { // late night: suggest 9 AM instead
      if (d.getHours() >= 21) d.setDate(d.getDate() + 1);
      d.setHours(9);
    }
    const day = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    const today = new Date();
    $("#bkDate").min = today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" + pad(today.getDate());
    if (!$("#bkDate").value) $("#bkDate").value = day;
    if (!$("#bkTime").value) $("#bkTime").value = pad(d.getHours()) + ":00";
  }

  /* what the select currently points at: a care service, a procedure or the ICU setup */
  function selection() {
    const v = $("#bkService").value;
    if (v.indexOf("proc:") === 0) {
      const p = DATA.procedures.find((x) => "proc:" + x.id === v) || DATA.procedures[0];
      return { kind: "proc", name: p.name, price: p.price };
    }
    if (v === "icu") return { kind: "icu", name: DATA.setup.name, price: DATA.setup.price };
    const s = DATA.services.find((x) => x.id === v) || DATA.services[0];
    const code = $("#bkHours").value || "h8";
    return { kind: "care", name: s.name, price: durationPrice(s, code), code, service: s };
  }

  function updateEstimate() {
    const box = $("#estimate");
    if (!box) return;
    const sel = selection();
    $("#bkHoursField").hidden = sel.kind !== "care";
    const gst = gstOf(sel.price);
    const total = sel.price + gst;
    box.innerHTML =
      "<h3>" + ui("estTitle") + '</h3><dl class="est-rows">' +
      "<div><dt>" + ui("estService") + "</dt><dd>" + tx(sel.name) + "</dd></div>" +
      (sel.kind === "care" ? "<div><dt>" + ui("estDuration") + "</dt><dd>" + durationLabel(sel.code) + "</dd></div>" : "") +
      "<div><dt>" + ui("estRate") + "</dt><dd>" + inr(sel.price) + "</dd></div>" +
      (gst ? "<div><dt>" + ui("estGst", { gst: SITE.gst }) + "</dt><dd>" + inr(gst) + "</dd></div>" : "") +
      '</dl><div class="est-total"><span>' + ui("estTotal") + "</span><b>" + inr(total) + "</b></div>" +
      (sel.kind === "icu" ? '<p class="est-tip">' + ui("estIcu") + "</p>" : "") +
      '<p class="est-note">' + ui("estNote") + " " + tx(DATA.distance) + "</p>";
  }

  function renderBooking() {
    if (!form) return;
    const svc = $("#bkService"), hrs = $("#bkHours");
    const keepS = svc.value, keepH = hrs.value;
    svc.innerHTML =
      '<optgroup label="' + ui("optCare") + '">' + DATA.services.map((s) => '<option value="' + s.id + '">' + tx(s.name) + "</option>").join("") + "</optgroup>" +
      '<optgroup label="' + ui("optProc") + '">' + DATA.procedures.map((p) => '<option value="proc:' + p.id + '">' + tx(p.name) + "</option>").join("") + "</optgroup>" +
      '<optgroup label="' + ui("optIcu") + '"><option value="icu">' + tx(DATA.setup.name) + "</option></optgroup>";
    hrs.innerHTML = DURATIONS.map((c) => '<option value="' + c + '">' + durationLabel(c) + "</option>").join("");
    svc.value = keepS || DATA.services[0].id;
    hrs.value = keepH || "h8";
    setDefaultWhen();
    updateEstimate();
  }

  if (form) {
    ["#bkService", "#bkHours"].forEach((id) => $(id).addEventListener("change", updateEstimate));
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const err = $("#bkErr");
      const area = $("#bkArea"), phone = $("#bkPhone");
      [area, phone].forEach((f) => f.removeAttribute("aria-invalid"));
      err.hidden = true;
      const digits = phone.value.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
      let problem = null, field = null;
      if (!area.value.trim()) { problem = ui("errArea"); field = area; }
      else if (phone.value.trim() && digits.length !== 10) { problem = ui("errPhone"); field = phone; }
      if (problem) {
        err.textContent = problem; err.hidden = false;
        field.setAttribute("aria-invalid", "true"); field.focus();
        return;
      }
      const sel = selection();
      const gst = gstOf(sel.price);
      const when = new Date($("#bkDate").value + "T" + ($("#bkTime").value || "10:00"));
      const whenTxt = isNaN(when) ? "" : when.toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
      const savedLang = lang; lang = "en"; // the message is always in English for our team
      const durTxt = sel.kind === "care" ? durationLabel(sel.code) : "";
      lang = savedLang;
      const lines = [
        "Hi, I would like to book " + sel.name.en + ".",
        whenTxt && "Start: " + whenTxt,
        durTxt && "Duration: " + durTxt,
        "Location: " + area.value.trim(),
        $("#bkName").value.trim() && "Patient: " + $("#bkName").value.trim(),
        digits && "Contact: " + digits,
        $("#bkFemale").checked && "Female caregiver: Yes",
        $("#bkNotes").value.trim() && "Notes: " + $("#bkNotes").value.trim(),
        "Rate: " + inr(sel.price) + (gst ? " + " + SITE.gst + "% GST = " + inr(sel.price + gst) : ""),
      ].filter(Boolean);
      const a = document.createElement("a");
      a.href = waLink(lines.join("\n"));
      a.target = "_blank";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  /* pre-select a service from "Who we help" cards */
  document.addEventListener("click", (e) => {
    const p = e.target.closest("[data-prefill]");
    if (p && form) { $("#bkService").value = p.dataset.prefill; updateEstimate(); }
  });

  /* ---------- WhatsApp chat demo ---------- */
  const SCRIPT = [
    { w: "out", en: "Hi", hi: "नमस्ते" },
    { w: "in", en: "Namaste! 🙏 Welcome to <b>{brand}</b> Home Care. Please choose your language:", hi: "नमस्ते! 🙏 <b>{brand}</b> होम केयर में आपका स्वागत है। अपनी भाषा चुनें:", qr: ["English", "हिंदी"] },
    { w: "out", en: "English", hi: "हिंदी" },
    { w: "in", en: "What care do you need at home?", hi: "घर पर किस देखभाल की ज़रूरत है?", qr: ["Patient Care", "Elder Care", "Baby Care"] },
    { w: "out", en: "Patient Care", hi: "मरीज़ की देखभाल" },
    { w: "in", en: "How long do you need care?", hi: "कितनी देर देखभाल चाहिए?", qr: ["Hourly", "8 hours", "Day care", "24 hours"] },
    { w: "out", en: "8 hours", hi: "8 घंटे" },
    { w: "in", card: true },
    { w: "out", en: "Confirm ✅", hi: "कन्फ़र्म ✅" },
    { w: "in", en: "Booked! 🎉 Our team will call you shortly with your caregiver's details.", hi: "बुक हो गया! 🎉 हमारी टीम जल्द ही आपको केयरगिवर की जानकारी के साथ कॉल करेगी।" },
  ];
  const CARD = {
    en: [["Service", "Patient Care"], ["Duration", "8 hours"], ["Rate", "₹399"], ["Where", "Your home"]],
    hi: [["सेवा", "मरीज़ की देखभाल"], ["अवधि", "8 घंटे"], ["दर", "₹399"], ["कहाँ", "आपका घर"]],
  };
  const chat = $("#chat");
  let runId = 0;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  function bubble(step, minute) {
    const el = document.createElement("div");
    el.className = "msg " + step.w;
    let html = "";
    if (step.card) {
      html = "<b>" + (lang === "hi" ? "बुकिंग सारांश" : "Booking summary") + '</b><div class="card">' + CARD[lang].map((r) => "<div><span>" + r[0] + "</span><span>" + r[1] + "</span></div>").join("") + "</div>";
    } else {
      html = fmt(step[lang]);
      if (step.qr) html += '<div class="qr">' + step.qr.map((q) => "<span>" + q + "</span>").join("") + "</div>";
    }
    el.innerHTML = html + "<time>9:" + String(minute).padStart(2, "0") + "</time>";
    return el;
  }

  async function playChat() {
    if (!chat) return;
    const my = ++runId;
    chat.innerHTML = "";
    let minute = 40;
    for (let i = 0; i < SCRIPT.length; i++) {
      const step = SCRIPT[i];
      if (!reduceMotion) {
        if (step.w === "in") {
          const typing = document.createElement("div");
          typing.className = "typing";
          typing.innerHTML = "<i></i><i></i><i></i>";
          chat.appendChild(typing);
          await wait(750);
          if (my !== runId) return;
          typing.remove();
        } else {
          await wait(900);
          if (my !== runId) return;
        }
      }
      if (i % 3 === 2) minute++;
      chat.appendChild(bubble(step, minute));
      if (!reduceMotion) { await wait(450); if (my !== runId) return; }
    }
  }
  const replayBtn = $("#replay");
  if (replayBtn) replayBtn.addEventListener("click", playChat);

  /* ---------- header, menu, language ---------- */
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = $("#burger");
  const nav = $("#nav");
  const closeMenu = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- scroll reveal ---------- */
  let io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  function observeReveals() {
    $$(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  }

  /* ---------- nav highlight for the section in view ---------- */
  if ("IntersectionObserver" in window) {
    const links = new Map($$(".nav a[href^='#']").map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const a = links.get(en.target.id);
        if (a) a.classList.toggle("active", en.isIntersecting);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- structured data (only once real details are set) ---------- */
  if (!/your city/i.test(SITE.city)) {
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "LocalBusiness", name: SITE.brand + " " + SITE.tagline,
      description: "Home care: trained nurses, caregivers and attendants for patient care, elder care, critical care, baby care and nursing procedures at home.",
      telephone: SITE.phone, email: SITE.email, areaServed: SITE.city, url: location.origin + location.pathname,
      address: { "@type": "PostalAddress", streetAddress: SITE.address, addressLocality: SITE.city, addressCountry: "IN" },
    });
    document.head.appendChild(ld);
  }

  /* ---------- boot ---------- */
  function renderAll() {
    renderServices(); renderPricing(); renderWho(); renderBooking(); renderHow();
    renderTrust(); renderSafety(); renderReviews(); renderFaq(); renderFooter();
  }
  function setLang(next) {
    lang = next === "hi" ? "hi" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) { /* storage blocked */ }
    document.documentElement.lang = lang;
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    applyStatic();
    renderAll();
    fillConfig();
    observeReveals();
    playChat();
  }
  setLang(lang);
})();
